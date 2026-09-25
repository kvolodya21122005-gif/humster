// ==========================================
// КОНФІГУРАЦІЯ ТА ДАНІ ІВЕНТУ: ЛАБОРАТОРІЯ
// ==========================================

const CURRENT_EVENT_ID = 'laboratory_event_v1';
let lastChemicalsLeaderboardSync = 0;

// Дата завершення івенту: 2 жовтня о 21:00 EEST (18:00 UTC)
const LAB_EVENT_END_TS = Date.UTC(2026, 9, 2, 18, 0, 0);

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

// Покращення часу на крок (Time Upgrades)
const TIME_UPGRADES = [
    { level: 1, timeSec: 1.2, costChem: 5 },
    { level: 2, timeSec: 1.4, costChem: 10 },
    { level: 3, timeSec: 1.6, costChem: 25 },
    { level: 4, timeSec: 1.8, costChem: 150 },
    { level: 5, timeSec: 2, costChem: 500 },
    { level: 6, timeSec: 2.2, costChem: 10000 },
    { level: 7, timeSec: 2.4, costChem: 250000 },
    { level: 8, timeSec: 2.6, costChem: 5000000 },
    { level: 9, timeSec: 2.8, costChem: 15000000 },
    { level: 10, timeSec: 3, costChem: 50000000 }
];

// Покращення множника хімікатів (Multiplier Upgrades)
const MULT_UPGRADES = [
    { level: 1, mult: 2, costChem: 10 },
    { level: 2, mult: 3, costChem: 100 },
    { level: 3, mult: 4, costChem: 1000 },
    { level: 4, mult: 5, costChem: 3000 },
    { level: 5, mult: 6, costChem: 7500 },
    { level: 6, mult: 7, costChem: 12000 },
    { level: 7, mult: 8, costChem: 20000 },
    { level: 8, mult: 9, costChem: 30000 },
    { level: 9, mult: 10, costChem: 45000 }
];

// Покращення швидкості відновлення енергії для гри (Energy Regen Upgrades)
const REGEN_UPGRADES = [
    { level: 1, label: "1хв 50сек", intervalSec: 110, costAura: 1000000000 },
    { level: 2, label: "1хв 40сек", intervalSec: 100, costAura: 3000000000 },
    { level: 3, label: "1хв 30сек", intervalSec: 90, costAura: 10000000000 },
    { level: 4, label: "1хв 20сек", intervalSec: 80, costAura: 25000000000 },
    { level: 5, label: "1хв 10сек", intervalSec: 70, costAura: 75000000000 },
    { level: 6, label: "1хв", intervalSec: 60, costAura: 150000000000 },
    { level: 7, label: "50сек", intervalSec: 50, costAura: 250000000000 },
    { level: 8, label: "40сек", intervalSec: 40, costAura: 500000000000 },
    { level: 9, label: "30сек", intervalSec: 30, costAura: 1000000000000 }
];

// Будівництво Лабораторії (Laboratory Building Levels)
const LAB_LEVELS = [
    { level: 1, costChem: 20000, auraIncome: 30000 },
    { level: 2, costChem: 50000, auraIncome: 60000 },
    { level: 3, costChem: 100000, auraIncome: 90000 },
    { level: 4, costChem: 250000, auraIncome: 120000 },
    { level: 5, costChem: 500000, auraIncome: 150000 },
    { level: 6, costChem: 1000000, auraIncome: 180000 },
    { level: 7, costChem: 2000000, auraIncome: 210000 },
    { level: 8, costChem: 4000000, auraIncome: 240000 },
    { level: 9, costChem: 7000000, auraIncome: 270000 },
    { level: 10, costChem: 10000000, auraIncome: 300000 }
];

let eventSubTab = 'game'; // 'game', 'upgrades', 'lab', 'leaderboard'

// Стан міні-гри "Зелена Кнопка"
let labGame = {
    state: 'idle', // 'idle', 'playing', 'ended'
    step: 1,
    reqType: '', // 'click_1', 'click_n', 'dont_click', 'click_gt4', 'remember', 'remember_check'
    reqCount: 1,
    currentClicks: 0,
    timer: 1.0,
    maxTimer: 1.0,
    rememberNumber: 0,
    checkStep: 45,
    shownNumber: 0,
    rememberCheckMatch: false,
    lastEarned: 0,
    completed100: false
};

function initEventState() {
    if (!state.event || state.event.eventId !== CURRENT_EVENT_ID) {
        state.event = {
            eventId: CURRENT_EVENT_ID,
            energy: 20,
            lastEnergyTime: getCurrentTime(),
            chemicals: 0,
            totalChemicals: 0,
            timeUpgLvl: 0,
            multUpgLvl: 0,
            regenUpgLvl: 0,
            labLvl: 0
        };
    }
    if (state.event.energy === undefined) state.event.energy = 20;
    if (state.event.lastEnergyTime === undefined) state.event.lastEnergyTime = getCurrentTime();
    if (state.event.chemicals === undefined) state.event.chemicals = 0;
    if (state.event.totalChemicals === undefined) state.event.totalChemicals = 0;
    if (state.event.timeUpgLvl === undefined) state.event.timeUpgLvl = 0;
    if (state.event.multUpgLvl === undefined) state.event.multUpgLvl = 0;
    if (state.event.regenUpgLvl === undefined) state.event.regenUpgLvl = 0;
    if (state.event.labLvl === undefined) state.event.labLvl = 0;
}

function getEnergyRegenInterval() {
    if (!state.event || !state.event.regenUpgLvl || state.event.regenUpgLvl === 0) {
        return 120; // За замовчуванням: 2 хв на 1 енергію
    }
    const upg = REGEN_UPGRADES[state.event.regenUpgLvl - 1];
    return upg ? upg.intervalSec : 120;
}

function getStepTime() {
    if (!state.event || !state.event.timeUpgLvl || state.event.timeUpgLvl === 0) {
        return 1.0;
    }
    const upg = TIME_UPGRADES[state.event.timeUpgLvl - 1];
    return upg ? upg.timeSec : 1.0;
}

function getChemMultiplier() {
    if (!state.event || !state.event.multUpgLvl || state.event.multUpgLvl === 0) {
        return 1;
    }
    const upg = MULT_UPGRADES[state.event.multUpgLvl - 1];
    return upg ? upg.mult : 1;
}

function getLabAuraIncome() {
    if (!state.event || !state.event.labLvl || state.event.labLvl === 0) return 0;
    const lab = LAB_LEVELS[state.event.labLvl - 1];
    return lab ? lab.auraIncome : 0;
}

function updateEventLogic(dt) {
    initEventState();

    // Відновлення енергії кнопки (до 20)
    if (state.event.energy < 20) {
        const interval = getEnergyRegenInterval();
        const now = getCurrentTime();
        const elapsed = (now - state.event.lastEnergyTime) / 1000;

        if (elapsed >= interval) {
            const added = Math.floor(elapsed / interval);
            state.event.energy = Math.min(20, state.event.energy + added);
            state.event.lastEnergyTime = now - ((elapsed % interval) * 1000);
        }
    } else {
        state.event.lastEnergyTime = getCurrentTime();
    }

    // Оновлення таймера гри
    if (labGame.state === 'playing') {
        labGame.timer -= dt;

        if (labGame.timer <= 0) {
            labGame.timer = 0;

            // Перевірка результату виконання умови після завершення таймера
            let isStepSuccess = false;

            if (labGame.reqType === 'click_1') {
                isStepSuccess = (labGame.currentClicks === 1);
            } else if (labGame.reqType === 'remember') {
                // На умовах "Запам'ятай число" не потрібно натискати
                isStepSuccess = (labGame.currentClicks === 0);
            } else if (labGame.reqType === 'click_n') {
                isStepSuccess = (labGame.currentClicks === labGame.reqCount);
            } else if (labGame.reqType === 'dont_click') {
                isStepSuccess = (labGame.currentClicks === 0);
            } else if (labGame.reqType === 'click_gt4') {
                isStepSuccess = (labGame.currentClicks >= 5);
            } else if (labGame.reqType === 'remember_check') {
                if (labGame.rememberCheckMatch) {
                    isStepSuccess = (labGame.currentClicks === 1);
                } else {
                    isStepSuccess = (labGame.currentClicks === 0);
                }
            }

            if (isStepSuccess) {
                if (labGame.step >= 100) {
                    // 100-ий крок є останнім
                    endLabGame(true);
                } else {
                    completeStep();
                }
            } else {
                endLabGame(false);
            }
        }
    }

    updateEventCountersUI();
}

function updateEventCountersUI() {
    if (!state.event) return;
    const energyEl = document.getElementById('lab-energy-val');
    const chemEl = document.getElementById('lab-chem-val');
    const timerEl = document.getElementById('lab-event-timer');

    if (energyEl) energyEl.textContent = `⚡ Енергія кнопки: ${Math.floor(state.event.energy)}/20`;
    if (chemEl) chemEl.textContent = `🧪 Хімікати: ${formatNum(state.event.chemicals)}`;

    if (timerEl) {
        const now = getCurrentTime();
        const timeLeftMs = LAB_EVENT_END_TS - now;
        if (timeLeftMs > 0) {
            timerEl.textContent = `⏳ Івент закінчується: 2 жовтня о 21:00 (залишилось: ${formatEventCountdown(timeLeftMs)})`;
            timerEl.style.color = 'var(--accent-gold)';
        } else {
            timerEl.textContent = `🔴 Івент завершено (2 жовтня о 21:00)`;
            timerEl.style.color = '#e74c3c';
        }
    }

    renderLabButtonUI();
}

function setupNextStep() {
    labGame.maxTimer = getStepTime();
    labGame.timer = labGame.maxTimer;
    labGame.currentClicks = 0;

    if (labGame.step === 1) {
        labGame.reqType = 'click_1';
        labGame.reqCount = 1;
    } else if (labGame.step === 2) {
        labGame.reqType = 'remember';
        labGame.rememberNumber = Math.floor(Math.random() * 90) + 10; // Рандомне двоцифрове число (10-99)
        labGame.reqCount = 0; // Натискати НЕ потрібно!
    } else if (labGame.step === labGame.checkStep) {
        labGame.reqType = 'remember_check';
        const isMatch = Math.random() < 0.5; // 50% шанс того самого числа
        labGame.rememberCheckMatch = isMatch;
        if (isMatch) {
            labGame.shownNumber = labGame.rememberNumber;
            labGame.reqCount = 1;
        } else {
            let fakeNum;
            do {
                fakeNum = Math.floor(Math.random() * 90) + 10;
            } while (fakeNum === labGame.rememberNumber);
            labGame.shownNumber = fakeNum;
            labGame.reqCount = 0; // Не те число -> натискати НЕ потрібно
        }
    } else {
        // Рандомний патерн
        const patternType = Math.floor(Math.random() * 4);
        if (patternType === 0) {
            labGame.reqType = 'click_1';
            labGame.reqCount = 1;
        } else if (patternType === 1) {
            labGame.reqType = 'click_n';
            labGame.reqCount = Math.floor(Math.random() * 3) + 2; // 2, 3, або 4
        } else if (patternType === 2) {
            labGame.reqType = 'dont_click';
            labGame.reqCount = 0;
        } else {
            labGame.reqType = 'click_gt4';
            labGame.reqCount = 5; // Більше 4-х разів
        }
    }
}

function completeStep() {
    labGame.step += 1;
    setupNextStep();
    renderLabButtonUI();
}

function handleLabButtonClick() {
    if (labGame.state === 'idle' || labGame.state === 'ended') {
        if (state.event.energy < 1) return;
        state.event.energy -= 1;
        labGame.state = 'playing';
        labGame.step = 1;
        labGame.completed100 = false;
        // Випадковий крок для перевірки пам'яті (40-60)
        labGame.checkStep = Math.floor(Math.random() * 21) + 40;
        setupNextStep();
        if (typeof playClickSound === 'function') playClickSound();
        renderLabButtonUI();
        return;
    }

    if (labGame.state === 'playing') {
        if (typeof playClickSound === 'function') playClickSound();

        // Якщо за умовами кликати заборонено:
        if (labGame.reqType === 'dont_click' || labGame.reqType === 'remember' || (labGame.reqType === 'remember_check' && !labGame.rememberCheckMatch)) {
            endLabGame(false);
            return;
        }

        labGame.currentClicks += 1;

        // Поразка при перевищенні кількості кліків:
        if (labGame.reqType === 'click_1' || (labGame.reqType === 'remember_check' && labGame.rememberCheckMatch)) {
            if (labGame.currentClicks > 1) {
                endLabGame(false);
                return;
            }
        } else if (labGame.reqType === 'click_n') {
            if (labGame.currentClicks > labGame.reqCount) {
                endLabGame(false);
                return;
            }
        }

        // Кнопка НЕ переходить далі до закінчення таймера
        renderLabButtonUI();
    }
}

function endLabGame(isSuccess) {
    labGame.state = 'ended';
    labGame.completed100 = isSuccess && (labGame.step >= 100);

    const reachedStep = labGame.completed100 ? 100 : Math.max(1, labGame.step - 1);
    const earnedRaw = Math.pow(reachedStep, 2);
    const earnedTotal = earnedRaw * getChemMultiplier();

    state.event.chemicals += earnedTotal;
    state.event.totalChemicals += earnedTotal;
    labGame.lastEarned = earnedTotal;

    saveGame();
    syncChemicalsLeaderboardThrottled();
    renderLabButtonUI();
}

function renderLabButtonUI() {
    const btn = document.getElementById('lab-main-interactive-btn');
    if (!btn) return;

    const ring = document.getElementById('lab-ring-bar');

    if (labGame.state === 'idle') {
        btn.innerHTML = `
            <div class="lab-btn-title">ПОЧАТИ ГРУ</div>
            <div class="lab-btn-sub">Витрачає: 1 ⚡</div>
            <div style="font-size: 0.85rem; margin-top: 8px; color: #aaa;">Натисни, щоб розпочати</div>
        `;
        if (ring) ring.style.width = '0%';
    } else if (labGame.state === 'ended') {
        if (labGame.completed100) {
            btn.innerHTML = `
                <div class="lab-btn-title" style="color: #f1c40f; font-size: 1.15rem; line-height: 1.3;">100-ий крок є останнім на перший день івенту.</div>
                <div class="lab-btn-sub" style="color: #2ecc71; margin-top: 4px;">Вітаємо!</div>
                <div class="lab-btn-timer" style="color: #2ecc71;">+${formatNum(labGame.lastEarned)} 🧪</div>
                <div style="font-size: 0.8rem; margin-top: 6px;">Натисни, щоб зіграти знов</div>
            `;
        } else {
            btn.innerHTML = `
                <div class="lab-btn-title" style="color: #e74c3c;">ГРУ ЗАВЕРШЕНО!</div>
                <div class="lab-btn-sub">Пройдено кроків: ${Math.max(0, labGame.step - 1)}</div>
                <div class="lab-btn-timer" style="color: #2ecc71;">+${formatNum(labGame.lastEarned)} 🧪</div>
                <div style="font-size: 0.8rem; margin-top: 6px;">Натисни, щоб зіграти знов</div>
            `;
        }
        if (ring) ring.style.width = '0%';
    } else if (labGame.state === 'playing') {
        let titleText = "";
        let subText = "";

        if (labGame.reqType === 'click_1') {
            titleText = "натисни";
            subText = labGame.currentClicks >= 1 ? "✓ Виконано! Чекай..." : "Натисни 1 раз";
        } else if (labGame.reqType === 'remember') {
            titleText = `Запам'ятай число ${labGame.rememberNumber}`;
            subText = "Не натискай! Чекай...";
        } else if (labGame.reqType === 'remember_check') {
            titleText = `Натисни якщо це число то яке ти мав запам'ятати ${labGame.shownNumber}`;
            if (labGame.rememberCheckMatch) {
                subText = labGame.currentClicks >= 1 ? "✓ Виконано! Чекай..." : "Натисни 1 раз!";
            } else {
                subText = "Не натискай! Чекай...";
            }
        } else if (labGame.reqType === 'click_n') {
            titleText = `натисни ${labGame.reqCount} разів`;
            subText = `Прогрес: ${labGame.currentClicks}/${labGame.reqCount} ${labGame.currentClicks >= labGame.reqCount ? '✓' : ''}`;
        } else if (labGame.reqType === 'dont_click') {
            titleText = "НЕ натискай";
            subText = "Зачекай вичерпання часу!";
        } else if (labGame.reqType === 'click_gt4') {
            titleText = "натисни більше 4-х разів";
            subText = `Прогрес: ${labGame.currentClicks}/5 ${labGame.currentClicks >= 5 ? '✓' : ''}`;
        }

        const pct = Math.max(0, Math.min(100, (labGame.timer / labGame.maxTimer) * 100));

        btn.innerHTML = `
            <div style="font-size: 0.85rem; color: #f1c40f; font-weight: bold;">Крок ${labGame.step}/100</div>
            <div class="lab-btn-title" style="font-size: ${labGame.reqType === 'remember_check' ? '1.05rem' : '1.35rem'}; margin: 4px 0; line-height: 1.2;">${titleText}</div>
            ${subText ? `<div class="lab-btn-sub" style="font-size: 0.9rem;">${subText}</div>` : ''}
            <div class="lab-btn-timer">${labGame.timer.toFixed(1)}s</div>
            <div id="lab-ring-bar" class="lab-progress-ring" style="width: ${pct}%;"></div>
        `;
    }
}

function syncChemicalsLeaderboardThrottled() {
    const now = Date.now();
    if (now - lastChemicalsLeaderboardSync > 3000) {
        lastChemicalsLeaderboardSync = now;
        syncChemicalsLeaderboard();
    }
}

function syncChemicalsLeaderboard() {
    if (!dbAvailable || !state.playerId || !state.nickname) return;
    if (!state.event) initEventState();
    firebase.database().ref('leaderboard_lab/' + state.playerId).set({
        name: state.nickname,
        totalChemicals: Math.floor(state.event.totalChemicals || 0),
        updatedAt: firebase.database.ServerValue.TIMESTAMP
    }).catch(err => console.warn("Firebase lab sync error:", err));
}

function buyLabTimeUpg(targetLvl) {
    initEventState();
    if (state.event.timeUpgLvl !== targetLvl - 1) return;
    const upg = TIME_UPGRADES[targetLvl - 1];
    if (!upg) return;

    if (state.event.chemicals >= upg.costChem) {
        state.event.chemicals -= upg.costChem;
        state.event.timeUpgLvl = targetLvl;
        saveGame();
        renderEventUI();
    }
}

function buyLabMultUpg(targetLvl) {
    initEventState();
    if (state.event.multUpgLvl !== targetLvl - 1) return;
    const upg = MULT_UPGRADES[targetLvl - 1];
    if (!upg) return;

    if (state.event.chemicals >= upg.costChem) {
        state.event.chemicals -= upg.costChem;
        state.event.multUpgLvl = targetLvl;
        saveGame();
        renderEventUI();
    }
}

function buyLabRegenUpg(targetLvl) {
    initEventState();
    if (state.event.regenUpgLvl !== targetLvl - 1) return;
    const upg = REGEN_UPGRADES[targetLvl - 1];
    if (!upg) return;

    if (state.aura >= upg.costAura) {
        state.aura -= upg.costAura;
        state.event.regenUpgLvl = targetLvl;
        saveGame();
        renderEventUI();
    }
}

function buyLabBuilding(targetLvl) {
    initEventState();
    if (state.event.labLvl !== targetLvl - 1) return;
    const lab = LAB_LEVELS[targetLvl - 1];
    if (!lab) return;

    if (state.event.chemicals >= lab.costChem) {
        state.event.chemicals -= lab.costChem;
        state.event.labLvl = targetLvl;
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

    initEventState();
    const now = getCurrentTime();
    const timeLeftMs = LAB_EVENT_END_TS - now;

    let timerText = "";
    if (timeLeftMs > 0) {
        timerText = `⏳ Івент закінчується: 2 жовтня о 21:00 (залишилось: ${formatEventCountdown(timeLeftMs)})`;
    } else {
        timerText = `🔴 Івент завершено (2 жовтня о 21:00)`;
    }

    let html = `
        <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 12px; border-radius: 12px; border: 2px solid var(--accent-gold); margin-bottom: 12px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: var(--accent-gold);">🧪 Новий Івент: Лабораторія</div>
            <div id="lab-event-timer" style="font-size: 0.85rem; font-weight: bold; margin-top: 4px; color: ${timeLeftMs > 0 ? 'var(--accent-gold)' : '#e74c3c'};">
                ${timerText}
            </div>
            <div style="display: flex; justify-content: space-around; margin-top: 10px; font-weight: bold; font-size: 0.95rem;">
                <span id="lab-energy-val" style="color: #3498db;">⚡ Енергія кнопки: ${Math.floor(state.event.energy)}/100</span>
                <span id="lab-chem-val" style="color: #2ecc71;">🧪 Хімікати: ${formatNum(state.event.chemicals)}</span>
            </div>
        </div>

        <div class="leaderboard-toggle" style="margin-bottom: 15px;">
            <button class="sub-tab-btn ${eventSubTab === 'game' ? 'active' : ''}" onclick="switchEventSubTab('game')">🟢 Кнопка</button>
            <button class="sub-tab-btn ${eventSubTab === 'upgrades' ? 'active' : ''}" onclick="switchEventSubTab('upgrades')">⚡ Прокачки</button>
            <button class="sub-tab-btn ${eventSubTab === 'lab' ? 'active' : ''}" onclick="switchEventSubTab('lab')">🔬 Лабораторія</button>
            <button class="sub-tab-btn ${eventSubTab === 'leaderboard' ? 'active' : ''}" onclick="switchEventSubTab('leaderboard')">🏆 Топ</button>
        </div>
    `;

    if (eventSubTab === 'game') {
        html += `
            <div class="lab-btn-container">
                <div id="lab-main-interactive-btn" class="lab-main-btn" onclick="handleLabButtonClick()">
                    <!-- Вміст генерується через renderLabButtonUI() -->
                </div>
            </div>
        `;
    } else if (eventSubTab === 'upgrades') {
        html += `<div class="upgrades-list">`;

        // Категорія 1: Час на крок
        html += `<div class="category-title">⏱️ Кількість часу на крок</div>`;
        TIME_UPGRADES.forEach(u => {
            const isOwned = state.event.timeUpgLvl >= u.level;
            const canBuy = state.event.timeUpgLvl === u.level - 1 && state.event.chemicals >= u.costChem;

            html += `
                <div class="upgrade-card ${isOwned ? 'evo-card' : ''}">
                    <div class="upgrade-img-wrap"><span style="font-size: 2rem;">⏱️</span></div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">${u.timeSec} секунд</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(u.costChem)} хімікатів</div>
                    </div>
                    <button class="upgrade-btn" ${isOwned ? 'disabled' : (canBuy ? '' : 'disabled')} onclick="buyLabTimeUpg(${u.level})">
                        ${isOwned ? 'Куплено' : 'Купити'}
                    </button>
                </div>`;
        });

        // Категорія 2: Множник хімікатів
        html += `<div class="category-title" style="margin-top: 20px;">🧪 Множник Хімікатів</div>`;
        MULT_UPGRADES.forEach(u => {
            const isOwned = state.event.multUpgLvl >= u.level;
            const canBuy = state.event.multUpgLvl === u.level - 1 && state.event.chemicals >= u.costChem;

            html += `
                <div class="upgrade-card ${isOwned ? 'evo-card' : ''}">
                    <div class="upgrade-img-wrap"><span style="font-size: 2rem;">⚗️</span></div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">х${u.mult} хімікати</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(u.costChem)} хімікатів</div>
                    </div>
                    <button class="upgrade-btn" ${isOwned ? 'disabled' : (canBuy ? '' : 'disabled')} onclick="buyLabMultUpg(${u.level})">
                        ${isOwned ? 'Куплено' : 'Купити'}
                    </button>
                </div>`;
        });

        // Категорія 3: Швидкість відновлення енергії
        html += `<div class="category-title" style="margin-top: 20px;">⚡ Швидкість відновлення енергії</div>`;
        REGEN_UPGRADES.forEach(u => {
            const isOwned = state.event.regenUpgLvl >= u.level;
            const canBuy = state.event.regenUpgLvl === u.level - 1 && state.aura >= u.costAura;

            html += `
                <div class="upgrade-card ${isOwned ? 'evo-card' : ''}">
                    <div class="upgrade-img-wrap"><span style="font-size: 2rem;">⚡</span></div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">Час відновлення: ${u.label}</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(u.costAura)} аури</div>
                    </div>
                    <button class="upgrade-btn" ${isOwned ? 'disabled' : (canBuy ? '' : 'disabled')} onclick="buyLabRegenUpg(${u.level})">
                        ${isOwned ? 'Куплено' : 'Купити'}
                    </button>
                </div>`;
        });

        html += `</div>`;
    } else if (eventSubTab === 'lab') {
        html += `<div class="upgrades-list">
            <div class="category-title">🔬 Рівні Лабораторії</div>`;

        LAB_LEVELS.forEach(lab => {
            const isOwned = state.event.labLvl >= lab.level;
            const canBuy = state.event.labLvl === lab.level - 1 && state.event.chemicals >= lab.costChem;

            html += `
                <div class="upgrade-card ${isOwned ? 'evo-card' : ''}">
                    <div class="upgrade-img-wrap"><span style="font-size: 2rem;">🧪</span></div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">Лабораторія Рівень ${lab.level}</div>
                        <div class="upgrade-desc">Пасивний пасивний дохід: +${formatNum(lab.auraIncome)} аури/сек</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(lab.costChem)} хімікатів</div>
                    </div>
                    <button class="upgrade-btn" ${isOwned ? 'disabled' : (canBuy ? '' : 'disabled')} onclick="buyLabBuilding(${lab.level})">
                        ${isOwned ? 'Куплено' : 'Купити'}
                    </button>
                </div>`;
        });

        html += `</div>`;
    } else if (eventSubTab === 'leaderboard') {
        html += `
            <div class="category-title" style="width: 100%; text-align: center;">🏆 Топ Лабораторії (Завжди Хімікати)</div>
            <div id="lab-leaderboard-list" class="leaderboard-list">
                <div class="empty-leaderboard">Завантаження топу хімікатів...</div>
            </div>
        `;
        setTimeout(() => renderLabLeaderboard(), 50);
    }

    container.innerHTML = html;
    renderLabButtonUI();
}

function renderLabLeaderboard() {
    const list = document.getElementById('lab-leaderboard-list');
    if (!list) return;

    if (!dbAvailable) {
        list.innerHTML = `
            <div class="empty-leaderboard">
                <p style="color: var(--accent-gold); font-size: 1.1rem; margin-bottom: 10px;">⚠️ Firebase не підключено!</p>
                <div class="leaderboard-item is-player">
                    <div class="leaderboard-rank">🥇</div>
                    <div class="leaderboard-name">${state.nickname || "Ви"} (Локально)</div>
                    <div class="leaderboard-cps">${formatNum(state.event.totalChemicals)} 🧪</div>
                </div>
            </div>`;
        return;
    }

    firebase.database().ref('leaderboard_lab').orderByChild('totalChemicals').limitToLast(50).once('value', (snapshot) => {
        const data = snapshot.val();
        const players = [];

        if (data) {
            Object.keys(data).forEach(id => {
                players.push({
                    id: id,
                    name: data[id].name || "Гравець",
                    totalChemicals: data[id].totalChemicals || 0,
                    isPlayer: id === state.playerId
                });
            });
        }

        players.sort((a, b) => (b.totalChemicals || 0) - (a.totalChemicals || 0));
        list.innerHTML = '';

        if (players.length === 0) {
            list.innerHTML = `<div class="empty-leaderboard">Поки немає жодного результату. Будьте першим!</div>`;
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
                <div class="leaderboard-cps">${formatNum(p.totalChemicals)} 🧪</div>
            `;
            list.appendChild(item);
        });
    }).catch(err => {
        console.warn("Помилка завантаження топ-лабораторії:", err);
    });
}
