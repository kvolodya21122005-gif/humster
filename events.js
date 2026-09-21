// ==========================================
// КОНФІГУРАЦІЯ ТА ДАНІ ІВЕНТУ: ЗАЛИВАННЯ БЕТОНУ
// ==========================================

const CURRENT_EVENT_ID = 'concrete_paving_v1';
let lastLeaderboardSync = 0;

// Точні часові мітки за київським часом (EEST / UTC+3), прив'язані до WorldTime
const UNLOCK_24H = 1790096400000;      // 22.09.2026 о 20:00 за Києвом
const UNLOCK_48H = 1790182800000;      // 23.09.2026 о 20:00 за Києвом
const EVENT_END_TIME = 1790352000000;  // 25.09.2026 о 19:00 за Києвом

function getCurrentTime() {
    return (typeof getServerTime === 'function') ? getServerTime() : Date.now();
}

function formatEventCountdown(ms) {
    if (ms <= 0) return '00:00:00';
    const totalSec = Math.floor(ms / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;

    if (days > 0) return `${days}д ${hours}г ${mins}хв ${secs}с`;
    if (hours > 0) return `${hours}г ${mins}хв ${secs}с`;
    if (mins > 0) return `${mins}хв ${secs}с`;
    return `${secs}с`;
}

// Мішалки 1-6 відкриті за замовчуванням, 7-ма відкриється 22.09 о 20:00
const MIXER_LEVELS = [
    { lvl: 1, unlockTime: 0, waterReq: 1, cementReq: 1, concreteGain: 1, concreteCost: 0, auraCost: 0, img: "img/mixer1.jpg" },
    { lvl: 2, unlockTime: 0, waterReq: 1, cementReq: 10, concreteGain: 10, concreteCost: 25, auraCost: 100000000, img: "img/mixer2.jpg" },
    { lvl: 3, unlockTime: 0, waterReq: 1, cementReq: 100, concreteGain: 100, concreteCost: 500, auraCost: 500000000, img: "img/mixer3.jpg" },
    { lvl: 4, unlockTime: 0, waterReq: 1, cementReq: 500, concreteGain: 500, concreteCost: 10000, auraCost: 2000000000, img: "img/mixer4.jpg" },
    { lvl: 5, unlockTime: 0, waterReq: 1, cementReq: 2000, concreteGain: 2000, concreteCost: 50000, auraCost: 10000000000, img: "img/mixer5.jpg" },
    { lvl: 6, unlockTime: 0, waterReq: 1, cementReq: 6000, concreteGain: 6000, concreteCost: 250000, auraCost: 75000000000, img: "img/mixer6.jpg" },
    { lvl: 7, unlockTime: UNLOCK_24H, waterReq: 1, cementReq: 10000, concreteGain: 10000, concreteCost: 1500000, auraCost: 200000000000, img: "img/mixer7.jpg" }
];

// Картки добування цементу
const CEMENT_CARDS = [
    { id: 1, name: "Цементна яма", baseCost: 50000000, cps: 1, cdSec: 20, img: "img/cement_card1.jpg", unlockTime: 0 },
    { id: 2, name: "Дробарка клінкеру", baseCost: 150000000, cps: 2, cdSec: 30, img: "img/cement_card2.jpg", unlockTime: 0 },
    { id: 3, name: "Міні-завод цементу", baseCost: 400000000, cps: 4, cdSec: 40, img: "img/cement_card3.jpg", unlockTime: 0 },
    { id: 4, name: "Силосний склад", baseCost: 1000000000, cps: 8, cdSec: 50, img: "img/cement_card4.jpg", unlockTime: 0 },
    { id: 5, name: "Цементний кар'єр", baseCost: 2500000000, cps: 15, cdSec: 60, img: "img/cement_card5.jpg", unlockTime: 0 },
    { id: 6, name: "Цементний холдинг", baseCost: 5000000000, cps: 25, cdSec: 75, img: "img/cement_card6.jpg", unlockTime: UNLOCK_24H },
    { id: 7, name: "Глобальна корпорація", baseCost: 8000000000, cps: 35, cdSec: 90, img: "img/cement_card7.jpg", unlockTime: UNLOCK_48H }
];

// Покращення бруківки
const PAVING_LEVELS = [
    { lvl: 1, name: "Перший шар піску", costConcrete: 10, auraCps: 1000000 },
    { lvl: 2, name: "Укладання щебеню", costConcrete: 100, auraCps: 15000000 },
    { lvl: 3, name: "Брукування стежки", costConcrete: 1000, auraCps: 200000000 },
    { lvl: 4, name: "Заливка бордюрів", costConcrete: 10000, auraCps: 2500000000 },
    { lvl: 5, name: "Гранітна бруківка", costConcrete: 100000, auraCps: 30000000000 },
    { lvl: 6, name: "Центральна площа", costConcrete: 500000, auraCps: 200000000000 },
    { lvl: 7, name: "Золотий проспект Хрюнделя", costConcrete: 2000000, auraCps: 1000000000000 }
];

function initEventState() {
    if (!state.event || state.event.eventId !== CURRENT_EVENT_ID) {
        state.event = {
            eventId: CURRENT_EVENT_ID,
            startTime: getCurrentTime(),
            concrete: 0,
            totalConcrete: 0,
            water: 10,
            maxWater: 10,
            cement: 0,
            mixerLvl: 1,
            pavingLvl: 0,
            cards: {},
            cooldowns: {},
            subTab: 'mixer'
        };
    }
    if (state.event.water === undefined) state.event.water = 10;
    if (state.event.maxWater === undefined) state.event.maxWater = 10;
    if (state.event.cement === undefined) state.event.cement = 0;
    if (state.event.mixerLvl === undefined) state.event.mixerLvl = 1;
    if (state.event.pavingLvl === undefined) state.event.pavingLvl = 0;
    if (!state.event.cards) state.event.cards = {};
    if (!state.event.cooldowns) state.event.cooldowns = {};
    if (!state.event.subTab) state.event.subTab = 'mixer';
}

function getTotalCementPerSec() {
    let cps = 0;
    const now = getCurrentTime();
    CEMENT_CARDS.forEach(c => {
        if (now >= (c.unlockTime || 0)) {
            const lvl = (state.event && state.event.cards && state.event.cards[c.id]) || 0;
            cps += lvl * c.cps;
        }
    });
    return cps;
}

function getPavingAuraPerSec() {
    if (!state.event || !state.event.pavingLvl) return 0;
    let total = 0;
    for (let i = 0; i < state.event.pavingLvl; i++) {
        if (PAVING_LEVELS[i]) total += PAVING_LEVELS[i].auraCps;
    }
    return total;
}

function getCementCardCost(card) {
    const lvl = (state.event && state.event.cards && state.event.cards[card.id]) || 0;
    let cost = card.baseCost;
    for (let i = 0; i < lvl; i++) {
        cost *= 1.25;
    }
    return Math.floor(cost);
}

function updateEventLogic(dt) {
    if (!state.event) return;

    if (state.event.water < state.event.maxWater) {
        state.event.water = Math.min(state.event.maxWater, state.event.water + (dt / 30));
    }

    const cementCps = getTotalCementPerSec();
    if (cementCps > 0) {
        state.event.cement += cementCps * dt;
    }

    const pavingCps = getPavingAuraPerSec();
    if (pavingCps > 0) {
        const auraGain = pavingCps * dt;
        state.aura += auraGain;
        state.totalAura = (state.totalAura || 0) + auraGain;
    }
}

function clickMixer(e) {
    initEventState();
    const currentMixer = MIXER_LEVELS.find(m => m.lvl === state.event.mixerLvl) || MIXER_LEVELS[0];

    if (state.event.water < currentMixer.waterReq) return;
    if (state.event.cement < currentMixer.cementReq) return;

    state.event.water -= currentMixer.waterReq;
    state.event.cement -= currentMixer.cementReq;

    const gain = currentMixer.concreteGain;
    state.event.concrete += gain;
    state.event.totalConcrete += gain;

    const mixerImg = document.getElementById('event-mixer-img');
    if (mixerImg) {
        mixerImg.classList.remove('mixer-shake');
        void mixerImg.offsetWidth;
        mixerImg.classList.add('mixer-shake');
    }

    if (e && e.clientX && e.clientY) {
        spawnFloatingTextConcrete(e.clientX, e.clientY, `+${formatNum(gain)} 🏗️`);
    }

    playClickSound();
    syncConcreteLeaderboard();
    updateUI();
    renderEventUI();
}

function spawnFloatingTextConcrete(x, y, text) {
    const el = document.createElement('div');
    el.className = 'floating-text-concrete';
    el.innerText = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    setTimeout(() => { el.remove(); }, 800);
}

function buyMixer() {
    initEventState();
    const nextLvl = state.event.mixerLvl + 1;
    const targetMixer = MIXER_LEVELS.find(m => m.lvl === nextLvl);
    if (!targetMixer) return;

    const now = getCurrentTime();
    if (now < (targetMixer.unlockTime || 0)) return;

    if (state.event.concrete >= targetMixer.concreteCost && state.aura >= targetMixer.auraCost) {
        state.event.concrete -= targetMixer.concreteCost;
        state.aura -= targetMixer.auraCost;
        state.event.mixerLvl = nextLvl;

        saveGame();
        updateUI();
        renderEventUI();
    }
}

function buyCementCard(cardId) {
    initEventState();
    const card = CEMENT_CARDS.find(c => c.id === cardId);
    if (!card) return;

    const now = getCurrentTime();
    if (now < (card.unlockTime || 0)) return;

    const cd = state.event.cooldowns[cardId] || 0;
    if (now < cd) return;

    const cost = getCementCardCost(card);
    if (state.aura >= cost) {
        state.aura -= cost;
        state.event.cards[cardId] = (state.event.cards[cardId] || 0) + 1;
        state.event.cooldowns[cardId] = now + (card.cdSec * 1000);

        saveGame();
        updateUI();
        renderEventUI();
    }
}

function buyPaving() {
    initEventState();
    const nextLvl = state.event.pavingLvl + 1;
    const target = PAVING_LEVELS.find(p => p.lvl === nextLvl);
    if (!target) return;

    if (state.event.concrete >= target.costConcrete) {
        state.event.concrete -= target.costConcrete;
        state.event.pavingLvl = nextLvl;

        saveGame();
        updateUI();
        renderEventUI();
    }
}

function switchEventSubTab(tabName) {
    initEventState();
    state.event.subTab = tabName;
    renderEventUI();
}

function renderEventUI() {
    const container = document.getElementById('tab-event');
    if (!container) return;
    initEventState();

    const now = getCurrentTime();
    const timeLeft = EVENT_END_TIME - now;
    const eventEnded = timeLeft <= 0;

    let html = `
        <div style="width: 100%; text-align: center; margin-bottom: 12px; background: var(--card-bg); padding: 12px; border-radius: 14px; border: 2px solid var(--accent-cyan); box-shadow: 0 4px 12px rgba(0,210,211,0.2);">
            <div style="font-weight: 900; font-size: 1.15rem; color: var(--accent-cyan);">🏗️ Івент: Заливання Бетону</div>
            <div style="font-size: 0.85rem; margin-top: 4px; color: #ecf0f1;">
                ⏳ Івент закінчиться <b>25.09 о 19:00</b>
            </div>
            <div style="font-size: 0.8rem; color: var(--accent-gold); font-weight: bold; margin-top: 2px;">
                ${eventEnded ? '🛑 Івент завершено!' : 'Залишилося: ' + formatEventCountdown(timeLeft)}
            </div>
        </div>

        <div style="display: flex; gap: 8px; justify-content: space-around; width: 100%; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px;">
            <div style="text-align: center; font-size: 0.85rem; font-weight: bold;">
                <span id="event-water-val" style="color: #3498db;">💧 Вода: ${Math.floor(state.event.water)}/${state.event.maxWater}</span>
            </div>
            <div style="text-align: center; font-size: 0.85rem; font-weight: bold;">
                <span id="event-cement-val" style="color: #e67e22;">🧱 Цемент: ${formatNum(state.event.cement)}</span>
                <div style="font-size: 0.7rem; color: #2ecc71;">+${formatNum(getTotalCementPerSec())}/сек</div>
            </div>
            <div style="text-align: center; font-size: 0.85rem; font-weight: bold;">
                <span id="event-concrete-val" style="color: var(--accent-cyan);">🏗️ Бетон: ${formatNum(state.event.concrete)}</span>
            </div>
        </div>

        <div class="leaderboard-toggle" style="margin-bottom: 15px;">
            <button class="sub-tab-btn ${state.event.subTab === 'mixer' ? 'active' : ''}" onclick="switchEventSubTab('mixer')">⚙️ Мішалка</button>
            <button class="sub-tab-btn ${state.event.subTab === 'cement' ? 'active' : ''}" onclick="switchEventSubTab('cement')">🧱 Цемент</button>
            <button class="sub-tab-btn ${state.event.subTab === 'paving' ? 'active' : ''}" onclick="switchEventSubTab('paving')">🛣️ Бруківка</button>
            <button class="sub-tab-btn ${state.event.subTab === 'leaderboard' ? 'active' : ''}" onclick="switchEventSubTab('leaderboard')">🏆 Топ Бетону</button>
        </div>
    `;

    if (state.event.subTab === 'mixer') {
        const curMixer = MIXER_LEVELS.find(m => m.lvl === state.event.mixerLvl) || MIXER_LEVELS[0];
        const nextMixer = MIXER_LEVELS.find(m => m.lvl === state.event.mixerLvl + 1);

        html += `
            <div class="mixer-container" onclick="clickMixer(event)">
                <div class="mixer-image-wrap">
                    <img id="event-mixer-img" src="${curMixer.img || 'img/beton.jpg'}" class="mixer-image" alt="Мішалка" onerror="this.onerror=null; this.src='img/beton.jpg';">
                </div>
                <div style="margin-top: 10px; text-align: center;">
                    <div style="font-size: 1.1rem; font-weight: bold; color: var(--accent-cyan);">Бетономішалка Рівень ${curMixer.lvl}</div>
                    <div style="font-size: 0.8rem; color: #aaa; margin-top: 2px;">
                        Витрати: ${curMixer.waterReq} 💧 Води + ${curMixer.cementReq} 🧱 Цементу <br>
                        Отримуєте: <b style="color: var(--accent-cyan);">+${curMixer.concreteGain} 🏗️ Бетону</b> за заміс
                    </div>
                </div>
            </div>
        `;

        if (nextMixer) {
            const isUnlocked = now >= (nextMixer.unlockTime || 0);
            const canAfford = state.event.concrete >= nextMixer.concreteCost && state.aura >= nextMixer.auraCost;

            html += `
                <div class="upgrade-card" style="width: 100%; margin-top: 15px; border-color: var(--accent-cyan);">
                    <div class="upgrade-info">
                        <div class="upgrade-title">Апгрейд мішалки до Рівня ${nextMixer.lvl}</div>
                        <div class="upgrade-desc">Дає +${nextMixer.concreteGain} бетону за клік</div>
                        ${!isUnlocked ? `
                            <div style="color: #e74c3c; font-weight: bold; font-size: 0.85rem; margin-top: 4px;">
                                🔒 Відкриється 22.09 о 20:00 (через ${formatEventCountdown(nextMixer.unlockTime - now)})
                            </div>
                        ` : `
                            <div class="upgrade-desc" style="color: var(--accent-cyan);">Ціна: ${formatNum(nextMixer.concreteCost)} 🏗️ бетону</div>
                            <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(nextMixer.auraCost)} ✨ аури</div>
                        `}
                    </div>
                    <button class="upgrade-btn" onclick="buyMixer()" ${(!isUnlocked || !canAfford) ? 'disabled' : ''}>
                        ${!isUnlocked ? '🔒 Заблоковано' : 'Покращити'}
                    </button>
                </div>
            `;
        } else {
            html += `
                <div style="text-align: center; color: var(--accent-gold); font-weight: bold; margin-top: 15px; width: 100%;">
                    🎉 Досягнуто максимальний 7-й рівень бетономішалки!
                </div>
            `;
        }
    } else if (state.event.subTab === 'cement') {
        html += `<div class="upgrades-list">`;
        CEMENT_CARDS.forEach(card => {
            const isUnlocked = now >= (card.unlockTime || 0);
            const lvl = (state.event.cards && state.event.cards[card.id]) || 0;
            const cost = getCementCardCost(card);
            const cd = state.event.cooldowns[card.id] || 0;
            const inCd = now < cd;
            const cdSecLeft = Math.ceil((cd - now) / 1000);
            const canAfford = state.aura >= cost;

            html += `
                <div class="upgrade-card">
                    <div class="upgrade-img-wrap">
                        <img src="${card.img}" alt="${card.name}" class="upgrade-img" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'65\\' height=\\'65\\'><rect width=\\'65\\' height=\\'65\\' fill=\'%23251a3a\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\'%23e67e22\\' font-size=\\'24\\'>🧱</text></svg>';">
                    </div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">${card.name} <span class="upgrade-level-badge">Рівень ${lvl}</span></div>
                        <div class="upgrade-desc">Видобуток: +${formatNum(lvl * card.cps)} цементу/сек (+${card.cps}/сек)</div>
                        ${!isUnlocked ? `
                            <div style="color: #e74c3c; font-weight: bold; font-size: 0.8rem; margin-top: 2px;">
                                🔒 Відкриється ${card.id === 6 ? '22.09 о 20:00' : '23.09 о 20:00'} (через ${formatEventCountdown(card.unlockTime - now)})
                            </div>
                        ` : `
                            <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(cost)} аури</div>
                        `}
                    </div>
                    <button class="upgrade-btn" onclick="buyCementCard(${card.id})" ${(!isUnlocked || inCd || !canAfford) ? 'disabled' : ''}>
                        ${!isUnlocked ? '🔒 Заблоковано' : (inCd ? `⏱️ ${cdSecLeft}с` : 'Купити')}
                    </button>
                </div>
            `;
        });
        html += `</div>`;
    } else if (state.event.subTab === 'paving') {
        html += `<div class="upgrades-list">`;
        const curPavingLvl = state.event.pavingLvl || 0;
        const totalPavingAura = getPavingAuraPerSec();

        html += `
            <div style="background: var(--card-bg); padding: 12px; border-radius: 12px; text-align: center; border: 1px solid var(--accent-purple); width: 100%;">
                <div style="font-weight: bold; color: var(--accent-gold);">Поточний пасивний дохід бруківки:</div>
                <div style="font-size: 1.2rem; font-weight: 900; color: #2ecc71; margin-top: 4px;">+${formatNum(totalPavingAura)} аури / сек</div>
            </div>
        `;

        PAVING_LEVELS.forEach(p => {
            const isBought = curPavingLvl >= p.lvl;
            const isNext = curPavingLvl + 1 === p.lvl;
            const canAfford = state.event.concrete >= p.costConcrete;

            html += `
                <div class="upgrade-card ${isBought ? 'evo-card' : ''}">
                    <div class="upgrade-info">
                        <div class="upgrade-title">${p.name} <span class="upgrade-level-badge">${isBought ? '✓ Виконано' : `Етап ${p.lvl}`}</span></div>
                        <div class="upgrade-desc">Дає: +${formatNum(p.auraCps)} аури/сек</div>
                        <div class="upgrade-desc" style="color: var(--accent-cyan);">Ціна: ${formatNum(p.costConcrete)} 🏗️ бетону</div>
                    </div>
                    ${isBought ? `
                        <button class="upgrade-btn" disabled style="background: #27ae60 !important;">Завершено</button>
                    ` : `
                        <button class="upgrade-btn" onclick="buyPaving()" ${(!isNext \vert{}\vert{} !canAfford) ? 'disabled' : ''}>${isNext ? 'Залити' : '🔒 Недоступно'}
                        </button>
                    `}
                </div>
            `;
        });
        html += `</div>`;
    } else if (state.event.subTab === 'leaderboard') {
        html += `
            <div class="category-title" style="width: 100%; text-align: center;">🏆 Топ Будівельників (Залито Бетону)</div>
            <div id="concrete-leaderboard-list" class="leaderboard-list">
                <div class="empty-leaderboard">Завантаження лідерборду...</div>
            </div>
        `;
        setTimeout(renderConcreteLeaderboard, 50);
    }

    container.innerHTML = html;
}

function syncConcreteLeaderboard() {
    if (!dbAvailable || !state.playerId || !state.nickname || !state.event) return;
    const now = getCurrentTime();
    if (now - lastLeaderboardSync < 5000) return;
    lastLeaderboardSync = now;

    firebase.database().ref('leaderboard_concrete/' + state.playerId).set({
        name: state.nickname,
        concrete: Math.floor(state.event.totalConcrete || 0),
        updatedAt: firebase.database.ServerValue.TIMESTAMP
    });
}

function renderConcreteLeaderboard() {
    const list = document.getElementById('concrete-leaderboard-list');
    if (!list) return;

    if (!dbAvailable) {
        list.innerHTML = `
            <div class="empty-leaderboard">
                <p style="color: var(--accent-gold); font-size: 1.1rem; margin-bottom: 10px;">⚠️ Firebase не підключено!</p>
                <div class="leaderboard-item is-player">
                    <div class="leaderboard-rank">🥇</div>
                    <div class="leaderboard-name">${state.nickname || "Ви"} (Локально)</div>
                    <div class="leaderboard-cps">${formatNum(state.event ? state.event.totalConcrete : 0)} 🏗️</div>
                </div>
            </div>`;
        return;
    }

    firebase.database().ref('leaderboard_concrete').orderByChild('concrete').limitToLast(50).once('value', (snapshot) => {
        const data = snapshot.val();
        const players = [];

        if (data) {
            Object.keys(data).forEach(id => {
                players.push({
                    id: id,
                    name: data[id].name || "Будівельник",
                    concrete: data[id].concrete || 0,
                    isPlayer: id === state.playerId
                });
            });
        }

        players.sort((a, b) => (b.concrete || 0) - (a.concrete || 0));
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
                <div class="leaderboard-cps">${formatNum(p.concrete)} 🏗️</div>
            `;
            list.appendChild(item);
        });
    });
}
