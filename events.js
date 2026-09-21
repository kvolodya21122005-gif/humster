// ==========================================
// КОНФІГУРАЦІЯ ТА ДАНІ ІВЕНТУ: ЗАЛИВАННЯ БЕТОНУ
// ==========================================

const CURRENT_EVENT_ID = 'concrete_paving_v1';
let lastLeaderboardSync = 0; // Для запобігання спаму запитами

// Фіксовані часові мітки (UTC) для синхронізації світового часу (worldtime):
// 20:00 22.09 за Києвом (UTC+3 влітку/восени) -> 17:00 22.09 UTC
const UNLOCK_24H_TS = Date.UTC(2026, 8, 22, 17, 0, 0); // 1790096400000 ms

// 20:00 23.09 за Києвом (UTC+3) -> 17:00 23.09 UTC
const UNLOCK_48H_TS = Date.UTC(2026, 8, 23, 17, 0, 0); // 1790182800000 ms

// Кінець івенту: 19:00 25.09 за Києвом (UTC+3) -> 16:00 25.09 UTC
const EVENT_END_TS = Date.UTC(2026, 8, 25, 16, 0, 0); // 1790352000000 ms

function getCurrentTime() {
    return (typeof getServerTime === 'function') ? getServerTime() : Date.now();
}

function formatEventCountdown(ms) {
    if (ms <= 0) return '00:00:00';
    const totalSec = Math.floor(ms / 1000);
    const hours = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hours}г ${mins < 10 ? '0' : ''}${mins}хв ${secs < 10 ? '0' : ''}${secs}с`;
}

const EVENT_REQ_PASSIVE_ID = 21;
const EVENT_REQ_PASSIVE_LVL = 9;

const MIXER_LEVELS = [
    { lvl: 1, waterReq: 1, cementReq: 1, concreteGain: 1, concreteCost: 0, auraCost: 0 },
    { lvl: 2, waterReq: 1, cementReq: 10, concreteGain: 10, concreteCost: 25, auraCost: 100000000 },
    { lvl: 3, waterReq: 1, cementReq: 100, concreteGain: 100, concreteCost: 500, auraCost: 500000000 },
    { lvl: 4, waterReq: 1, cementReq: 500, concreteGain: 500, concreteCost: 10000, auraCost: 2000000000 },
    { lvl: 5, waterReq: 1, cementReq: 2000, concreteGain: 2000, concreteCost: 50000, auraCost: 10000000000 },
    { lvl: 6, waterReq: 1, cementReq: 6000, concreteGain: 6000, concreteCost: 250000, auraCost: 75000000000 },
    { lvl: 7, waterReq: 1, cementReq: 10000, concreteGain: 10000, concreteCost: 1500000, auraCost: 200000000000 }
];

const CEMENT_CARDS = [
    { id: 1, name: "Цементна яма", baseCost: 50000000, cps: 1, cdSec: 20, img: "img/cement_card1.jpg" },
    { id: 2, name: "Дробарка клінкеру", baseCost: 150000000, cps: 2, cdSec: 30, img: "img/cement_card2.jpg" },
    { id: 3, name: "Міні-завод цементу", baseCost: 400000000, cps: 4, cdSec: 40, img: "img/cement_card3.jpg" },
    { id: 4, name: "Силосний склад", baseCost: 1000000000, cps: 8, cdSec: 50, img: "img/cement_card4.jpg" },
    { id: 5, name: "Цементний кар'єр", baseCost: 2500000000, cps: 15, cdSec: 60, img: "img/cement_card5.jpg" },
    { id: 6, name: "Цементний холдинг", baseCost: 5000000000, cps: 25, cdSec: 75, img: "img/cement_card6.jpg" },
    { id: 7, name: "Глобальна корпорація", baseCost: 8000000000, cps: 35, cdSec: 90, img: "img/cement_card7.jpg" }
];

const PAVING_LEVELS = [
    { lvl: 1, concreteCost: 120000, auraCps: 40000 },
    { lvl: 2, concreteCost: 350000, auraCps: 80000 },
    { lvl: 3, concreteCost: 700000, auraCps: 120000 },
    { lvl: 4, concreteCost: 1400000, auraCps: 160000 },
    { lvl: 5, concreteCost: 2600000, auraCps: 200000 },
    { lvl: 6, concreteCost: 5000000, auraCps: 250000 },
    { lvl: 7, concreteCost: 8000000, auraCps: 300000 }
];

function getMixerUnlockTime(m) {
    // Всі мішалки крім 7 рівня розблоковані (повертають 0)
    // Мішалка 7 рівня відкривається 22.09 о 20:00 за Києвом
    if (m.lvl === 7) {
        return UNLOCK_24H_TS;
    }
    return 0;
}

function getCementCardUnlockTime(card) {
    // Усі картки добування цементу відкриті,
    // крім "Цементний холдинг" (id: 6) - відкриється 22.09 о 20:00 за Києвом (через 24 год)
    // та "Глобальна корпорація" (id: 7) - відкриється 23.09 о 20:00 за Києвом (через 48 год)
    if (card.id === 6) {
        return UNLOCK_24H_TS;
    }
    if (card.id === 7) {
        return UNLOCK_48H_TS;
    }
    return 0;
}

let eventSubTab = 'mixer';

function initEventState() {
    if (!state.event || state.event.eventId !== CURRENT_EVENT_ID) {
        state.event = {
            eventId: CURRENT_EVENT_ID,
            water: 1000,
            cement: 0,
            concrete: 0,
            totalConcrete: 0,
            mixerLvl: 1,
            cards: {},
            cooldowns: {},
            pavingLvl: 0,
            startTime: getCurrentTime()
        };
    }
    if (state.event.water === undefined) state.event.water = 1000;
    if (state.event.cement === undefined) state.event.cement = 0;
    if (state.event.concrete === undefined) state.event.concrete = 0;
    if (state.event.totalConcrete === undefined) state.event.totalConcrete = 0;
    if (state.event.mixerLvl === undefined) state.event.mixerLvl = 1;
    if (!state.event.cards) state.event.cards = {};
    if (!state.event.cooldowns) state.event.cooldowns = {};
    if (state.event.pavingLvl === undefined) state.event.pavingLvl = 0;
    if (!state.event.startTime) state.event.startTime = getCurrentTime();
    if (state.savedStatueLvl === undefined) state.savedStatueLvl = 0;
}

function isEventUnlocked() {
    const lvl = state.passives ? (state.passives[EVENT_REQ_PASSIVE_ID] || 0) : 0;
    return lvl >= EVENT_REQ_PASSIVE_LVL;
}

function getCementCardCost(card) {
    const lvl = (state.event.cards && state.event.cards[card.id]) || 0;
    return Math.floor(card.baseCost * Math.pow(1.2, lvl));
}

function getTotalCementPerSec() {
    let cps = 0;
    const now = getCurrentTime();

    CEMENT_CARDS.forEach((c) => {
        const unlockTime = getCementCardUnlockTime(c);
        if (now >= unlockTime) {
            const lvl = (state.event && state.event.cards && state.event.cards[c.id]) || 0;
            cps += lvl * c.cps;
        }
    });
    return cps;
}

function getPavingAuraIncome() {
    let income = 0;
    if (state.savedStatueLvl && state.savedStatueLvl > 0) {
        const STATUE_LEVELS = [
            { auraCps: 25000 }, { auraCps: 50000 }, { auraCps: 75000 },
            { auraCps: 100000 }, { auraCps: 130000 }, { auraCps: 160000 }, { auraCps: 200000 }
        ];
        if (STATUE_LEVELS[state.savedStatueLvl - 1]) {
            income += STATUE_LEVELS[state.savedStatueLvl - 1].auraCps;
        }
    }
    if (state.event && state.event.pavingLvl && state.event.pavingLvl > 0) {
        const paving = PAVING_LEVELS[state.event.pavingLvl - 1];
        if (paving) income += paving.auraCps;
    }
    return income;
}

function getStatueAuraIncome() {
    return getPavingAuraIncome();
}

function updateEventCountersUI() {
    if (!state.event) return;
    const waterEl = document.getElementById('event-water-val');
    const cementEl = document.getElementById('event-cement-val');
    const concreteEl = document.getElementById('event-concrete-val');

    if (waterEl) waterEl.textContent = `💧 Вода: ${Math.floor(state.event.water)}/1000`;
    if (cementEl) cementEl.textContent = `🧱 Цемент: ${formatNum(state.event.cement)} (+${formatNum(getTotalCementPerSec())}/с)`;
    if (concreteEl) concreteEl.textContent = `🏗️ Бетон: ${formatNum(state.event.concrete)}`;

    // Оновлення таймера кінця івенту у шапці
    const eventTimerEl = document.getElementById('event-end-timer');
    if (eventTimerEl) {
        const now = getCurrentTime();
        const timeLeftMs = EVENT_END_TS - now;
        if (timeLeftMs > 0) {
            eventTimerEl.textContent = `⏳ Івент закінчиться: 25.09 19:00 (залишилось: ${formatEventCountdown(timeLeftMs)})`;
            eventTimerEl.style.color = 'var(--accent-gold)';
        } else {
            eventTimerEl.textContent = `🔴 Івент завершено (25.09 19:00)`;
            eventTimerEl.style.color = '#e74c3c';
        }
    }

    // Оновлення затримок карточок цементу у реальному часі
    if (eventSubTab === 'cement') {
        const now = getCurrentTime();
        CEMENT_CARDS.forEach(card => {
            const btn = document.getElementById(`cement-card-btn-${card.id}`);
            if (btn) {
                const cost = getCementCardCost(card);
                const cd = (state.event.cooldowns && state.event.cooldowns[card.id]) || 0;
                const cdLeftSec = Math.max(0, Math.ceil((cd - now) / 1000));
                const canAfford = state.aura >= cost && cdLeftSec === 0;

                btn.disabled = !canAfford;
                if (cdLeftSec > 0) {
                    btn.innerText = `⏱️ ${formatTime(cdLeftSec)}`;
                } else {
                    btn.innerText = `Купити`;
                }
            }
        });
    }
}

function updateEventLogic(dt) {
    initEventState();

    const WATER_MAX = 1000;
    const WATER_REGEN_PER_SEC = 1000 / 57600;
    if (state.event.water < WATER_MAX) {
        state.event.water = Math.min(WATER_MAX, state.event.water + WATER_REGEN_PER_SEC * dt);
    }

    const cps = getTotalCementPerSec();
    if (cps > 0) {
        state.event.cement += cps * dt;
    }

    updateEventCountersUI();
}

function calculateOfflineStone(lastSaveTime, now) {
    initEventState();
    const elapsedSeconds = (now - lastSaveTime) / 1000;
    if (elapsedSeconds <= 0) return;

    const WATER_MAX = 1000;
    const WATER_REGEN_PER_SEC = 1000 / 57600;
    state.event.water = Math.min(WATER_MAX, state.event.water + WATER_REGEN_PER_SEC * elapsedSeconds);

    const cps = getTotalCementPerSec();
    if (cps > 0) {
        state.event.cement += cps * elapsedSeconds;
    }
}

function clickMixer(e) {
    if (e && e.preventDefault) e.preventDefault();
    initEventState();

    const mixerLvl = state.event.mixerLvl || 1;
    const mixer = MIXER_LEVELS[mixerLvl - 1] || MIXER_LEVELS[0];

    if (state.event.water < mixer.waterReq || state.event.cement < mixer.cementReq) return;

    state.event.water -= mixer.waterReq;
    state.event.cement -= mixer.cementReq;
    state.event.concrete += mixer.concreteGain;
    state.event.totalConcrete += mixer.concreteGain;

    if (typeof playClickSound === 'function') playClickSound();

    updateEventCountersUI();
    syncConcreteLeaderboardThrottled();
}

function syncConcreteLeaderboardThrottled() {
    const now = Date.now();
    if (now - lastLeaderboardSync > 3000) {
        lastLeaderboardSync = now;
        syncConcreteLeaderboard();
    }
}

function syncConcreteLeaderboard() {
    if (!dbAvailable || !state.playerId || !state.nickname) return;
    if (!state.event) initEventState();
    firebase.database().ref('leaderboard_concrete/' + state.playerId).set({
        name: state.nickname,
        totalConcrete: Math.floor(state.event.totalConcrete || 0),
        updatedAt: firebase.database.ServerValue.TIMESTAMP
    }).catch(err => console.warn("Firebase concrete sync error:", err));
}

function buyCementCard(cardId) {
    initEventState();
    const card = CEMENT_CARDS.find(c => c.id === cardId);
    if (!card) return;

    const unlockTime = getCementCardUnlockTime(card);
    if (getCurrentTime() < unlockTime) return;

    const cd = state.event.cooldowns[cardId] || 0;
    if (getCurrentTime() < cd) return;

    const cost = getCementCardCost(card);
    if (state.aura >= cost) {
        state.aura -= cost;
        state.event.cards[cardId] = (state.event.cards[cardId] || 0) + 1;
        state.event.cooldowns[cardId] = getCurrentTime() + (card.cdSec * 1000);

        saveGame();
        renderEventUI();
    }
}

function buyMixer(targetLvl) {
    initEventState();
    const currentLvl = state.event.mixerLvl || 1;
    if (targetLvl !== currentLvl + 1) return;

    const targetMixer = MIXER_LEVELS[targetLvl - 1];
    if (!targetMixer) return;

    const unlockTime = getMixerUnlockTime(targetMixer);
    if (getCurrentTime() < unlockTime) return;

    if (state.event.concrete >= targetMixer.concreteCost && state.aura >= targetMixer.auraCost) {
        state.event.concrete -= targetMixer.concreteCost;
        state.aura -= targetMixer.auraCost;
        state.event.mixerLvl = targetLvl;

        saveGame();
        renderEventUI();
    }
}

function upgradePaving() {
    initEventState();
    const currentLvl = state.event.pavingLvl || 0;
    if (currentLvl >= 7) return;

    const nextLvl = currentLvl + 1;
    const req = PAVING_LEVELS[nextLvl - 1];

    if (state.event.concrete >= req.concreteCost) {
        state.event.concrete -= req.concreteCost;
        state.event.pavingLvl = nextLvl;

        saveGame();
        renderEventUI();
    }
}

function switchEventSubTab(tab) {
    eventSubTab = tab;
    renderEventUI();
}

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

    initEventState();
    const currentMixer = MIXER_LEVELS[(state.event.mixerLvl || 1) - 1];
    const now = getCurrentTime();
    const timeLeftMs = EVENT_END_TS - now;

    let timerText = "";
    if (timeLeftMs > 0) {
        timerText = `⏳ Івент закінчиться: 25.09 19:00 (залишилось: ${formatEventCountdown(timeLeftMs)})`;
    } else {
        timerText = `🔴 Івент завершено (25.09 19:00)`;
    }

    let html = `
        <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 12px; border-radius: 12px; border: 2px solid var(--accent-gold); margin-bottom: 12px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: var(--accent-gold);">🏗️ Івент: Заливання бетону для бруківки</div>
            <div id="event-end-timer" style="font-size: 0.85rem; font-weight: bold; margin-top: 4px; color: ${timeLeftMs > 0 ? 'var(--accent-gold)' : '#e74c3c'};">
                ${timerText}
            </div>
            <div style="display: flex; justify-content: space-around; margin-top: 10px; font-weight: bold; font-size: 0.95rem;">
                <span id="event-water-val" style="color: #3498db;">💧 Вода: ${Math.floor(state.event.water)}/1000</span>
                <span id="event-cement-val" style="color: #e67e22;">🧱 Цемент: ${formatNum(state.event.cement)} (+${formatNum(getTotalCementPerSec())}/с)</span>
                <span id="event-concrete-val" style="color: #2ecc71;">🏗️ Бетон: ${formatNum(state.event.concrete)}</span>
            </div>
        </div>

        <div class="leaderboard-toggle" style="margin-bottom: 15px;">
            <button class="sub-tab-btn ${eventSubTab === 'mixer' ? 'active' : ''}" onclick="switchEventSubTab('mixer')">⚙️ Бетономішалка</button>
            <button class="sub-tab-btn ${eventSubTab === 'cement' ? 'active' : ''}" onclick="switchEventSubTab('cement')">🧱 Цемент</button>
            <button class="sub-tab-btn ${eventSubTab === 'mixers' ? 'active' : ''}" onclick="switchEventSubTab('mixers')">🚜 Мішалки</button>
            <button class="sub-tab-btn ${eventSubTab === 'paving' ? 'active' : ''}" onclick="switchEventSubTab('paving')">🧱 Бруківка</button>
            <button class="sub-tab-btn ${eventSubTab === 'leaderboard' ? 'active' : ''}" onclick="switchEventSubTab('leaderboard')">🏆 Топ</button>
        </div>
    `;

    if (eventSubTab === 'mixer') {
        html += `
            <div class="upgrade-card evo-card" 
                 style="flex-direction: column; text-align: center; padding: 25px; width: 100%; cursor: pointer; user-select: none; -webkit-user-select: none; touch-action: manipulation;" 
                 onpointerdown="clickMixer(event)">
                <div style="font-size: 3.5rem;">🚜</div>
                <h2 style="color: var(--accent-gold); margin: 8px 0;">Бетономішалка ${currentMixer.lvl} Рівня</h2>
                <p style="font-size: 0.95rem; color: #ccc;">Витрачає: <b style="color: #3498db;">${currentMixer.waterReq} воду</b> + <b style="color: #e67e22;">${formatNum(currentMixer.cementReq)} цементу</b></p>
                <p style="font-size: 1.1rem; color: #2ecc71; font-weight: bold; margin-top: 4px;">Створює: +${formatNum(currentMixer.concreteGain)} бетону / клік</p>
                <hr style="width: 100%; border: 1px solid rgba(255,255,255,0.1); margin: 15px 0;">
                <button class="modal-btn" style="pointer-events: none;">
                    Замішати бетон
                </button>
            </div>
        `;
    } else if (eventSubTab === 'cement') {
        html += `<div class="upgrades-list">`;

        CEMENT_CARDS.forEach((card) => {
            const unlockTime = getCementCardUnlockTime(card);
            const timeUntilUnlockMs = unlockTime - now;

            if (timeUntilUnlockMs > 0) {
                html += `
                    <div class="upgrade-card" style="opacity: 0.65;">
                        <div class="upgrade-img-wrap"><span style="font-size: 2rem;">🔒</span></div>
                        <div class="upgrade-info">
                            <div class="upgrade-title">${card.name} <span class="upgrade-level-badge" style="background: #555;">Заблоковано</span></div>
                            <div class="upgrade-desc" style="color: #e74c3c; font-weight: bold;">Розблокується через: ${formatEventCountdown(timeUntilUnlockMs)}</div>
                            <div class="upgrade-desc">Базовий дохід: +${card.cps} цементу/сек</div>
                        </div>
                        <button class="upgrade-btn" disabled style="background: #444; cursor: not-allowed;">
                            🔒 Скоро
                        </button>
                    </div>`;
            } else {
                const lvl = (state.event.cards && state.event.cards[card.id]) || 0;
                const cost = getCementCardCost(card);
                const cd = (state.event.cooldowns && state.event.cooldowns[card.id]) || 0;
                const cdLeftSec = Math.max(0, Math.ceil((cd - now) / 1000));
                const canAfford = state.aura >= cost && cdLeftSec === 0;

                html += `
                    <div class="upgrade-card">
                        <div class="upgrade-img-wrap"><span style="font-size: 2rem;">🧱</span></div>
                        <div class="upgrade-info">
                            <div class="upgrade-title">${card.name} <span class="upgrade-level-badge">Рвн ${lvl}</span></div>
                            <div class="upgrade-desc">Дохід: +${formatNum(lvl * card.cps)} цементу/сек (+${card.cps})</div>
                            <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(cost)} аури</div>
                            <div class="upgrade-desc" style="color: #00d2d3;">Затримка: ${card.cdSec}сек</div>
                        </div>
                        <button class="upgrade-btn" id="cement-card-btn-${card.id}" ${canAfford ? '' : 'disabled'} onclick="buyCementCard(${card.id})">
                            ${cdLeftSec > 0 ? '⏱️ ' + formatTime(cdLeftSec) : 'Купити'}
                        </button>
                    </div>`;
            }
        });
        html += `</div>`;
    } else if (eventSubTab === 'mixers') {
        html += `<div class="upgrades-list">`;

        MIXER_LEVELS.forEach((m) => {
            if (m.lvl === 1) return;
            const isOwned = state.event.mixerLvl >= m.lvl;
            const unlockTime = getMixerUnlockTime(m);
            const timeUntilUnlockMs = unlockTime - now;

            if (!isOwned && timeUntilUnlockMs > 0) {
                html += `
                    <div class="upgrade-card" style="opacity: 0.65;">
                        <div class="upgrade-img-wrap"><span style="font-size: 2rem;">🔒</span></div>
                        <div class="upgrade-info">
                            <div class="upgrade-title">${m.lvl} Рівень Бетономішалки <span class="upgrade-level-badge" style="background: #555;">Заблоковано</span></div>
                            <div class="upgrade-desc" style="color: #e74c3c; font-weight: bold;">Розблокується через: ${formatEventCountdown(timeUntilUnlockMs)}</div>
                            <div class="upgrade-desc">1 вода + ${formatNum(m.cementReq)} цементу ➔ ${formatNum(m.concreteGain)} бетону</div>
                            <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(m.concreteCost)} бетону + ${formatNum(m.auraCost)} аури</div>
                        </div>
                        <button class="upgrade-btn" disabled style="background: #444; cursor: not-allowed;">
                            🔒 Скоро
                        </button>
                    </div>`;
            } else {
                const canBuy = state.event.mixerLvl === m.lvl - 1 && state.event.concrete >= m.concreteCost && state.aura >= m.auraCost;

                html += `
                    <div class="upgrade-card ${isOwned ? 'evo-card' : ''}">
                        <div class="upgrade-img-wrap"><span style="font-size: 2rem;">🚜</span></div>
                        <div class="upgrade-info">
                            <div class="upgrade-title">${m.lvl} Рівень Бетономішалки ${isOwned ? '✅' : ''}</div>
                            <div class="upgrade-desc">1 вода + ${formatNum(m.cementReq)} цементу ➔ ${formatNum(m.concreteGain)} бетону</div>
                            <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(m.concreteCost)} бетону + ${formatNum(m.auraCost)} аури</div>
                        </div>
                        <button class="upgrade-btn" ${canBuy ? '' : 'disabled'} onclick="buyMixer(${m.lvl})">
                            ${isOwned ? 'Куплено' : 'Купити'}
                        </button>
                    </div>`;
            }
        });
        html += `</div>`;
    } else if (eventSubTab === 'paving') {
        const curLvl = state.event.pavingLvl || 0;
        const curIncome = curLvl > 0 ? PAVING_LEVELS[curLvl - 1].auraCps : 0;

        html += `
            <div class="upgrade-card evo-card" style="flex-direction: column; text-align: center; padding: 20px; width: 100%;">
                <div style="font-size: 3.5rem;">🛣️</div>
                <h3 style="color: var(--accent-gold); margin: 8px 0;">Заливання Бетону для Бруківки</h3>
                <p style="font-size: 0.95rem; color: #ccc;">Поточний рівень: <b>${curLvl} / 7</b></p>
                <p style="font-size: 1.1rem; color: #2ecc71; font-weight: bold; margin-top: 4px;">Поточний дохід: +${formatNum(curIncome)} аури/сек</p>
                <hr style="width: 100%; border: 1px solid rgba(255,255,255,0.1); margin: 15px 0;">
        `;

        if (curLvl < 7) {
            const req = PAVING_LEVELS[curLvl];
            const canAfford = state.event.concrete >= req.concreteCost;
            html += `
                <div style="font-size: 0.9rem; margin-bottom: 12px;">
                    Наступний рівень (Рівень ${req.lvl}):<br>
                    Ціна: <b style="color: #2ecc71;">${formatNum(req.concreteCost)} бетону</b><br>
                    Новий дохід: <b style="color: var(--accent-gold);">+${formatNum(req.auraCps)} аури/сек</b>
                </div>
                <button class="modal-btn" ${canAfford ? '' : 'disabled style="background: #555; cursor: not-allowed;"'} onclick="upgradePaving()">
                    Прокачати залиш бетону
                </button>`;
        } else {
            html += `<div style="color: var(--accent-gold); font-weight: bold; font-size: 1.1rem;">🎉 Бруківка повністю заліта! Максимальний рівень!</div>`;
        }
        html += `</div>`;
    } else if (eventSubTab === 'leaderboard') {
        html += `<div id="concrete-leaderboard-list" class="leaderboard-list">
            <div style="text-align: center; color: #888; padding: 20px;">Завантаження онлайнового топу...</div>
        </div>`;
        setTimeout(renderConcreteLeaderboard, 50);
    }

    container.innerHTML = html;
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
                    <div class="leaderboard-cps">${formatNum(state.event ? (state.event.totalConcrete || 0) : 0)} 🏗️</div>
                </div>
            </div>`;
        return;
    }

    // Синхронізуємо власні актуальні дані перед відображенням
    syncConcreteLeaderboard();

    firebase.database().ref('leaderboard_concrete').orderByChild('totalConcrete').limitToLast(50).once('value', (snapshot) => {
        const data = snapshot.val();
        const players = [];

        if (data) {
            Object.keys(data).forEach(id => {
                players.push({
                    id: id,
                    name: data[id].name || "Гравець",
                    totalConcrete: data[id].totalConcrete || 0,
                    isPlayer: id === state.playerId
                });
            });
        }

        players.sort((a, b) => (b.totalConcrete || 0) - (a.totalConcrete || 0));
        list.innerHTML = '';

        if (players.length === 0) {
            list.innerHTML = `<div class="empty-leaderboard">Поки немає жодного гравця у топі. Будьте першим!</div>`;
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
                <div class="leaderboard-cps">${formatNum(p.totalConcrete)} 🏗️</div>
            `;
            list.appendChild(item);
        });
    }).catch(err => {
        console.error("Помилка завантаження топу бетону:", err);
        list.innerHTML = `<div class="empty-leaderboard" style="color: #e74c3c;">Помилка завантаження даних з сервера.</div>`;
    });
}

function renderStatuesTabUI() {
    const container = document.getElementById('tab-statue');
    if (!container) return;

    const statueLvl = state.savedStatueLvl || 0;
    const STATUE_LEVELS = [
        { auraCps: 25000 }, { auraCps: 50000 }, { auraCps: 75000 },
        { auraCps: 100000 }, { auraCps: 130000 }, { auraCps: 160000 }, { auraCps: 200000 }
    ];
    const auraCps = statueLvl > 0 ? STATUE_LEVELS[statueLvl - 1].auraCps : 0;

    if (statueLvl === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 15px; background: var(--card-bg); border-radius: 16px; margin-top: 20px; border: 2px solid rgba(255,255,255,0.1);">
                <div style="font-size: 3rem;">🗿</div>
                <h3 style="color: var(--accent-gold); margin-top: 10px;">Ваша галерея статуй порожня</h3>
                <p style="color: #aaa; font-size: 0.9rem; margin-top: 8px;">
                    Івент зі статуєю завершено. Усі здобутки збережено у вашому профілі!
                </p>
            </div>`;
    } else {
        container.innerHTML = `
            <div class="category-title" style="width: 100%; text-align: center;">🗿 Пам'ятник Завершеного Івенту</div>
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
