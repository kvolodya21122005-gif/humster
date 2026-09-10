// ==========================================
// КОНФІГУРАЦІЯ ТА ДАНІ ІВЕНТУ
// ==========================================

// Тривалість: 7 днів і 4 години = 172 години = 619,200 секунд
const EVENT_DURATION_MS = (7 * 24 + 4) * 3600 * 1000; 

// Вимога доступу: "Енергетик «Дикий Хряк»" (ID 21) >= 9 рівень
const EVENT_REQ_PASSIVE_ID = 21;
const EVENT_REQ_PASSIVE_LVL = 9;

// Карточки для фарму каменю
const STONE_CARDS = [
    { id: 1, day: 1, name: "Каменярня Хрюші", baseCost: 25000000, cdSec: 60, sps: 1, img: "img/stone_card1.jpg" },
    { id: 2, day: 2, name: "Свинячий Гранітний Кар'єр", baseCost: 100000000, cdSec: 120, sps: 2, img: "img/stone_card2.jpg" },
    { id: 3, day: 3, name: "Трюфельна Базальтова Шахта", baseCost: 300000000, cdSec: 180, sps: 4, img: "img/stone_card3.jpg" },
    { id: 4, day: 4, name: "Кабаняча Кварцева Жила", baseCost: 750000000, cdSec: 300, sps: 8, img: "img/stone_card4.jpg" },
    { id: 5, day: 5, name: "Мармуровий П'ятачок", baseCost: 1500000000, cdSec: 420, sps: 12, img: "img/stone_card5.jpg" },
    { id: 6, day: 6, name: "Алмазний Свинарник", baseCost: 2750000000, cdSec: 600, sps: 20, img: "img/stone_card6.jpg" },
    { id: 7, day: 7, name: "Космічний Метеорит Хряка", baseCost: 5000000000, cdSec: 900, sps: 30, img: "img/stone_card7.jpg" }
];

// Етапи покращення статуї
const STATUE_LEVELS = [
    { lvl: 1, stoneCost: 200000, auraCps: 25000 },
    { lvl: 2, stoneCost: 800000, auraCps: 50000 },
    { lvl: 3, stoneCost: 2000000, auraCps: 100000 },
    { lvl: 4, stoneCost: 5000000, auraCps: 150000 },
    { lvl: 5, stoneCost: 10000000, auraCps: 200000 },
    { lvl: 6, stoneCost: 20000000, auraCps: 275000 },
    { lvl: 7, stoneCost: 40000000, auraCps: 350000 }
];

let eventSubTab = 'statue'; // 'statue', 'cards', 'leaderboard'

// Ініціалізація стану івенту в об'єкті state
function initEventState() {
    if (!state.event) {
        state.event = {
            startTime: null,
            stone: 0,
            totalStone: 0,
            statueLvl: 0,
            cards: {},
            cooldowns: {},
            ended: false
        };
    }
    if (state.savedStatueLvl === undefined) {
        state.savedStatueLvl = 0;
    }
}

// Перевірка доступу до івенту
function isEventUnlocked() {
    const lvl = state.passives ? (state.passives[EVENT_REQ_PASSIVE_ID] || 0) : 0;
    return lvl >= EVENT_REQ_PASSIVE_LVL;
}

// Перевірка активності івенту
function isEventActive() {
    if (!state.event || !state.event.startTime || state.event.ended) return false;
    const elapsed = Date.now() - state.event.startTime;
    return elapsed < EVENT_DURATION_MS;
}

// Старт івенту при першому виконанні умов
function checkAndStartEvent() {
    initEventState();
    if (isEventUnlocked() && !state.event.startTime && !state.event.ended) {
        state.event.startTime = Date.now();
        saveGame();
    }
}

// Розрахунок поточного дня івенту (1..7)
function getEventDay() {
    if (!state.event || !state.event.startTime) return 1;
    const elapsed = Date.now() - state.event.startTime;
    const day = Math.floor(elapsed / (24 * 3600 * 1000)) + 1;
    return Math.min(Math.max(day, 1), 7);
}

// Отримання ціни карточки з коефіцієнтом х1.2
function getStoneCardCost(card) {
    const lvl = state.event.cards[card.id] || 0;
    return Math.floor(card.baseCost * Math.pow(1.2, lvl));
}

// Виробіток каменю за секунду (SPS)
function getTotalStonePerSec() {
    if (!isEventActive()) return 0;
    let sps = 0;
    STONE_CARDS.forEach(c => {
        const lvl = state.event.cards[c.id] || 0;
        sps += lvl * c.sps;
    });
    return sps;
}

// Дохід аури від статуї
function getStatueAuraIncome() {
    const activeLvl = isEventActive() ? state.event.statueLvl : state.savedStatueLvl;
    if (activeLvl <= 0) return 0;
    const levelData = STATUE_LEVELS[activeLvl - 1];
    return levelData ? levelData.auraCps : 0;
}

// Крок оновлення івенту (0.1 сек)
function updateEventLogic(dt) {
    checkAndStartEvent();
    initEventState();

    if (state.event.startTime && !state.event.ended) {
        const elapsed = Date.now() - state.event.startTime;

        if (elapsed >= EVENT_DURATION_MS) {
            finishEvent();
            return;
        }

        // Фарм каменю
        const sps = getTotalStonePerSec();
        if (sps > 0) {
            const stoneGained = sps * dt;
            state.event.stone += stoneGained;
            state.event.totalStone += stoneGained;
            syncStoneLeaderboard();
        }
    }
}

// Завершення івенту
function finishEvent() {
    if (state.event.ended) return;

    state.event.ended = true;

    // Конвертація невикористаного каменю в ауру (1 камінь = 2000 аури)
    if (state.event.stone > 0) {
        const convertedAura = Math.floor(state.event.stone * 2000);
        state.aura += convertedAura;
        state.event.stone = 0;
    }

    // Перенесення рівня статуї у постійний
    state.savedStatueLvl = state.event.statueLvl;

    saveGame();
    if (typeof updateUI === 'function') updateUI();
}

// Купівля карточки каменю
function buyStoneCard(cardId) {
    if (!isEventActive()) return;
    const card = STONE_CARDS.find(c => c.id === cardId);
    if (!card) return;

    if (card.day > getEventDay()) return;

    const cd = state.event.cooldowns[cardId] || 0;
    if (Date.now() < cd) return;

    const cost = getStoneCardCost(card);
    if (state.aura >= cost) {
        state.aura -= cost;
        state.event.cards[cardId] = (state.event.cards[cardId] || 0) + 1;
        state.event.cooldowns[cardId] = Date.now() + (card.cdSec * 1000);
        
        saveGame();
        updateUI();
    }
}

// Прокачка статуї
function upgradeStatue() {
    if (!isEventActive()) return;
    const nextLvl = state.event.statueLvl + 1;
    if (nextLvl > 7) return;

    const req = STATUE_LEVELS[nextLvl - 1];
    if (state.event.stone >= req.stoneCost) {
        state.event.stone -= req.stoneCost;
        state.event.statueLvl = nextLvl;

        saveGame();
        updateUI();
    }
}

// Синхронізація топу каменю з Firebase
function syncStoneLeaderboard() {
    if (!dbAvailable || !state.playerId || !state.nickname) return;
    firebase.database().ref('leaderboard_stone/' + state.playerId).set({
        name: state.nickname,
        totalStone: Math.floor(state.event.totalStone || 0),
        updatedAt: firebase.database.ServerValue.TIMESTAMP
    });
}

// Перемикання підвкладок івенту
function switchEventSubTab(tab) {
    eventSubTab = tab;
    document.querySelectorAll('.event-sub-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`event-sub-btn-${tab}`);
    if (btn) btn.classList.add('active');
    renderEventUI();
}

// Рендеринг інтерфейсу івенту
function renderEventUI() {
    const container = document.getElementById('tab-event');
    if (!container) return;

    if (!isEventUnlocked()) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 15px; color: #e74c3c; background: var(--card-bg); border-radius: 16px; margin-top: 20px; border: 2px solid #e74c3c;">
                <h2>🔒 Доступ до Івенту Заблоковано!</h2>
                <br>
                <p style="color: #ecf0f1; font-size: 1rem;">
                    Для участі в івенті необхідно мати прокачку:<br>
                    <b style="color: var(--accent-gold);">«Енергетик Дикий Хряк» 9 рівня</b>.
                </p>
            </div>`;
        return;
    }

    if (state.event.ended || (!isEventActive() && state.event.startTime)) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 15px; background: var(--card-bg); border-radius: 16px; margin-top: 20px; border: 2px solid var(--accent-gold);">
                <h2 style="color: var(--accent-gold);">🏁 Івент завершено!</h2>
                <br>
                <p style="color: #ecf0f1;">Усі карточки каменю вилучено, а невикористаний камінь обміняно на ауру за курсом <b>1 камінь = 2000 аури</b>.</p>
                <br>
                <p>Ваша статуя перенесена у вкладку <b>«🗿 Статуї»</b> та продовжує приносити дохід!</p>
            </div>`;
        return;
    }

    const elapsed = Date.now() - state.event.startTime;
    const timeLeftSec = Math.max(0, (EVENT_DURATION_MS - elapsed) / 1000);
    const currentDay = getEventDay();

    let html = `
        <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 12px; border-radius: 12px; border: 2px solid var(--accent-gold); margin-bottom: 15px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: var(--accent-gold);">🎯 Тимчасовий Івент: Статуя Хрюнделя</div>
            <div style="font-size: 0.85rem; color: #aaa; margin-top: 4px;">До кінця: <b style="color: #fff;">${formatTime(timeLeftSec)}</b> | День івенту: <b style="color: var(--accent-gold);">${currentDay} / 7</b></div>
            <div style="font-size: 1.1rem; font-weight: bold; margin-top: 8px; color: #00d2d3;">
                🪨 Наявний камінь: ${formatNum(state.event.stone)} (+${formatNum(getTotalStonePerSec())}/сек)
            </div>
        </div>

        <div class="leaderboard-toggle" style="margin-bottom: 15px;">
            <button id="event-sub-btn-statue" class="sub-tab-btn ${eventSubTab === 'statue' ? 'active' : ''}" onclick="switchEventSubTab('statue')">🗿 Статуя</button>
            <button id="event-sub-btn-cards" class="sub-tab-btn ${eventSubTab === 'cards' ? 'active' : ''}" onclick="switchEventSubTab('cards')">⛏️ Карточки</button>
            <button id="event-sub-btn-leaderboard" class="sub-tab-btn ${eventSubTab === 'leaderboard' ? 'active' : ''}" onclick="switchEventSubTab('leaderboard')">🏆 Топ Каменю</button>
        </div>
    `;

    if (eventSubTab === 'statue') {
        const curLvl = state.event.statueLvl;
        const nextLvl = curLvl + 1;
        const curIncome = getStatueAuraIncome();

        html += `
            <div class="upgrade-card evo-card" style="flex-direction: column; text-align: center; padding: 20px;">
                <div style="font-size: 3rem;">🗿</div>
                <h3 style="color: var(--accent-gold); margin: 8px 0;">Монументальний Хрюндель</h3>
                <p style="font-size: 0.9rem; color: #ccc;">Поточний рівень: <b>${curLvl} / 7</b></p>
                <p style="font-size: 0.95rem; color: #2ecc71; margin-top: 5px;">Поточний дохід: <b>+${formatNum(curIncome)} аури/сек</b></p>
                <hr style="width: 100%; border: 1px solid rgba(255,255,255,0.1); margin: 15px 0;">
        `;

        if (curLvl < 7) {
            const req = STATUE_LEVELS[curLvl];
            const canAfford = state.event.stone >= req.stoneCost;

            html += `
                <div style="font-size: 0.9rem; margin-bottom: 10px;">
                    Наступний рівень (Рівень ${req.lvl}):<br>
                    Потрібно: <b style="color: #00d2d3;">${formatNum(req.stoneCost)} каменю</b><br>
                    Новий дохід: <b style="color: #2ecc71;">+${formatNum(req.auraCps)} аури/сек</b>
                </div>
                <button class="modal-btn" ${canAfford ? '' : 'disabled style="background: #555; cursor: not-allowed;"'} onclick="upgradeStatue()">
                    Покращити Статую
                </button>
            `;
        } else {
            html += `<div style="color: var(--accent-gold); font-weight: bold; font-size: 1.1rem;">🎉 Статуя досягла максимального рівня!</div>`;
        }

        html += `</div>`;
    } else if (eventSubTab === 'cards') {
        html += `<div class="upgrades-list">`;

        STONE_CARDS.forEach(card => {
            const isUnlocked = currentDay >= card.day;
            const lvl = state.event.cards[card.id] || 0;
            const cost = getStoneCardCost(card);
            const cd = state.event.cooldowns[card.id] || 0;
            const cdLeftSec = Math.max(0, Math.ceil((cd - Date.now()) / 1000));

            if (!isUnlocked) {
                html += `
                    <div class="upgrade-card" style="opacity: 0.5;">
                        <div class="upgrade-img-wrap"><span style="font-size: 2rem;">🔒</span></div>
                        <div class="upgrade-info">
                            <div class="upgrade-title">${card.name}</div>
                            <div class="upgrade-req">Відкриється на ${card.day} день івенту</div>
                        </div>
                    </div>`;
            } else {
                const canAfford = state.aura >= cost && cdLeftSec === 0;

                html += `
                    <div class="upgrade-card">
                        <div class="upgrade-img-wrap">
                            <img src="${card.img}" alt="${card.name}" class="upgrade-img" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'65\\' height=\\'65\\'><rect width=\\'65\\' height=\\'65\\' fill=\\'%23110d1a\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%2300d2d3\\' font-size=\\'24\\'>🪨</text></svg>';">
                        </div>
                        <div class="upgrade-info">
                            <div class="upgrade-title">${card.name} <span class="upgrade-level-badge">Рвн ${lvl}</span></div>
                            <div class="upgrade-desc">Дохід: +${formatNum(lvl * card.sps)} каменю/сек (+${card.sps})</div>
                            <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(cost)} аури</div>
                            <div class="upgrade-desc" style="color: #00d2d3;">Затримка: ${formatTime(card.cdSec)}</div>
                        </div>
                        <button class="upgrade-btn" ${canAfford ? '' : 'disabled'} onclick="buyStoneCard(${card.id})">
                            ${cdLeftSec > 0 ? '⏱️ ' + formatTime(cdLeftSec) : 'Купити'}
                        </button>
                    </div>`;
            }
        });

        html += `</div>`;
    } else if (eventSubTab === 'leaderboard') {
        const existingList = document.getElementById('stone-leaderboard-list');
        const hasItems = existingList && existingList.children.length > 0 && !existingList.innerHTML.includes('Завантаження');
        const listContent = hasItems ? existingList.innerHTML : '<div style="text-align: center; color: #888; padding: 20px;">Завантаження онлайнового топу...</div>';
    
        html += `
            <div id="stone-leaderboard-list" class="leaderboard-list">
                ${listContent}
            </div>`;
    
        if (!hasItems) {
            setTimeout(renderStoneLeaderboard, 50);
        }
    }

    container.innerHTML = html;
}

// Рендеринг топу каменю з Firebase
function renderStoneLeaderboard() {
    const list = document.getElementById('stone-leaderboard-list');
    if (!list) return;

    if (!dbAvailable) {
        list.innerHTML = `
            <div class="empty-leaderboard">
                <p>⚠️ Firebase не підключено.</p>
                <br>
                <div class="leaderboard-item is-player">
                    <div class="leaderboard-rank">🥇</div>
                    <div class="leaderboard-name">${state.nickname || "Ви"} (Локально)</div>
                    <div class="leaderboard-cps">${formatNum(state.event ? state.event.totalStone : 0)} 🪨</div>
                </div>
            </div>`;
        return;
    }

    firebase.database().ref('leaderboard_stone').orderByChild('totalStone').limitToLast(50).once('value', (snapshot) => {
        const data = snapshot.val();
        const players = [];

        if (data) {
            Object.keys(data).forEach(id => {
                players.push({
                    id: id,
                    name: data[id].name || "Гравець",
                    totalStone: data[id].totalStone || 0,
                    isPlayer: id === state.playerId
                });
            });
        }

        players.sort((a, b) => b.totalStone - a.totalStone);
        list.innerHTML = '';

        if (players.length === 0) {
            list.innerHTML = `<div class="empty-leaderboard">Поки немає результатів. Станьте першим!</div>`;
            return;
        }

        players.forEach((p, index) => {
            const rank = index + 1;
            let rankIcon = `#${rank}`;
            if (rank === 1) rankIcon = '🥇';
            else if (rank === 2) rankIcon = '🥈';
            else if (rank === 3) rankIcon = '🥉';

            const item = document.createElement('div');
            item.className = `leaderboard-item ${p.isPlayer ? 'is-player' : ''}`;
            item.innerHTML = `
                <div class="leaderboard-rank">${rankIcon}</div>
                <div class="leaderboard-name">${p.name}${p.isPlayer ? ' (Ви)' : ''}</div>
                <div class="leaderboard-cps">${formatNum(p.totalStone)} 🪨</div>
            `;
            list.appendChild(item);
        });
    });
}

// Рендеринг постійної вкладки «🗿 Статуї»
function renderStatuesTabUI() {
    const container = document.getElementById('tab-statue');
    if (!container) return;

    const statueLvl = state.savedStatueLvl || (state.event ? state.event.statueLvl : 0);
    const auraCps = getStatueAuraIncome();

    if (statueLvl === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 15px; background: var(--card-bg); border-radius: 16px; margin-top: 20px; border: 2px solid rgba(255,255,255,0.1);">
                <div style="font-size: 3rem;">🗿</div>
                <h3 style="color: var(--accent-gold); margin-top: 10px;">Ваша галерея статуй порожня</h3>
                <p style="color: #aaa; font-size: 0.9rem; margin-top: 8px;">
                    Беріть участь у тимчасових івентах, щоб будувати й прокачувати великі монументи Хрюнделя!
                </p>
            </div>`;
    } else {
        container.innerHTML = `
            <div class="category-title" style="width: 100%; text-align: center;">🗿 Колекція Великих Монументів</div>
            <div class="upgrade-card evo-card" style="flex-direction: column; text-align: center; padding: 25px; margin-top: 15px; width: 100%;">
                <div style="font-size: 4rem;">🗿</div>
                <h2 style="color: var(--accent-gold); margin-top: 10px;">Монументальний Хрюндель</h2>
                <div style="display: inline-block; background: var(--accent-purple); color: #fff; padding: 4px 12px; border-radius: 12px; font-weight: bold; margin: 10px 0;">
                    Рівень Монументу: ${statueLvl} / 7
                </div>
                <p style="font-size: 1.1rem; color: #2ecc71; font-weight: bold; margin-top: 5px;">
                    Постійний пасивний дохід: +${formatNum(auraCps)} аури/сек
                </p>
            </div>`;
    }
}
