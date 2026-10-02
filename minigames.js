// ==========================================
// ЛОГІКА МІНІ-ІГОР
// ==========================================

let activeMinigablesTab = 'piglet'; // 'piglet' або 'button'

function initMinigamesState() {
    // Стан гри "Знайди хрюнделя"
    if (!state.pigletGame) {
        state.pigletGame = {
            energy: 3,
            lastEnergyRegen: (typeof getServerTime === 'function') ? getServerTime() : Date.now(),
            totalFound: 0,
            foundSinceLastCardUpgrade: 0,
            roundActive: false,
            grid: [],
            attemptsLeft: 0,
            extraAttemptsBought: 0,
            pigsFoundInRound: 0,
            lastMessage: ""
        };
    }
    if (state.pigletGame.energy === undefined) state.pigletGame.energy = 3;
    if (!state.pigletGame.lastEnergyRegen) state.pigletGame.lastEnergyRegen = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    // Стан міні-гри "Зелена Кнопка"
    if (!state.buttonMiniGame) {
        state.buttonMiniGame = {
            energy: 5,
            lastEnergyRegen: (typeof getServerTime === 'function') ? getServerTime() : Date.now()
        };
    }
    if (state.buttonMiniGame.energy === undefined) state.buttonMiniGame.energy = 5;
    if (!state.buttonMiniGame.lastEnergyRegen) state.buttonMiniGame.lastEnergyRegen = (typeof getServerTime === 'function') ? getServerTime() : Date.now();
}

// Логіка Кнопки у міні-іграх
let buttonMiniGameLogic = {
    state: 'idle', // 'idle', 'playing', 'ended'
    step: 1,
    reqType: '',
    reqCount: 1,
    currentClicks: 0,
    timer: 1.0,
    maxTimer: 1.0,
    rememberNumber: 0,
    checkStep: 45,
    shownNumber: 0,
    rememberCheckMatch: false,
    
    shapeStep: 30,         
    targetShape: '▲',     
    shownShape: '',
    blueStep: 70,          
    blueShouldClick: true, 
    isBlueButton: false,
    spiderStep: 95,        
    hasSpider: false,

    lastEarned: 0,
    completedMax: false
};

function updateMinigamesLogic(dt) {
    initMinigamesState();
    const now = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    // 1. Регенерація енергії Хрюнделів (макс 3, 1⚡ за 4 години)
    const MAX_PIG_ENERGY = 3;
    const PIG_REGEN_MS = 4 * 60 * 60 * 1000;
    if (state.pigletGame.energy < MAX_PIG_ENERGY) {
        const elapsed = now - state.pigletGame.lastEnergyRegen;
        if (elapsed >= PIG_REGEN_MS) {
            const added = Math.floor(elapsed / PIG_REGEN_MS);
            state.pigletGame.energy = Math.min(MAX_PIG_ENERGY, state.pigletGame.energy + added);
            state.pigletGame.lastEnergyRegen += added * PIG_REGEN_MS;
            if (state.pigletGame.energy >= MAX_PIG_ENERGY) state.pigletGame.lastEnergyRegen = now;
        }
    } else {
        state.pigletGame.lastEnergyRegen = now;
    }

    // 2. Регенерація енергії Кнопки (макс 5, 1⚡ за 3 години)
    const MAX_BTN_ENERGY = 5;
    const BTN_REGEN_MS = 3 * 60 * 60 * 1000;
    if (state.buttonMiniGame.energy < MAX_BTN_ENERGY) {
        const elapsed = now - state.buttonMiniGame.lastEnergyRegen;
        if (elapsed >= BTN_REGEN_MS) {
            const added = Math.floor(elapsed / BTN_REGEN_MS);
            state.buttonMiniGame.energy = Math.min(MAX_BTN_ENERGY, state.buttonMiniGame.energy + added);
            state.buttonMiniGame.lastEnergyRegen += added * BTN_REGEN_MS;
            if (state.buttonMiniGame.energy >= MAX_BTN_ENERGY) state.buttonMiniGame.lastEnergyRegen = now;
        }
    } else {
        state.buttonMiniGame.lastEnergyRegen = now;
    }

    // Таймер Зеленої Кнопки
    if (buttonMiniGameLogic.state === 'playing') {
        buttonMiniGameLogic.timer -= dt;
        if (buttonMiniGameLogic.timer <= 0) {
            buttonMiniGameLogic.timer = 0;
            let isStepSuccess = false;

            if (buttonMiniGameLogic.hasSpider) {
                isStepSuccess = (buttonMiniGameLogic.currentClicks === 0);
            } else if (['click_1', 'blue_check', 'shape_check'].includes(buttonMiniGameLogic.reqType)) {
                isStepSuccess = (buttonMiniGameLogic.currentClicks === buttonMiniGameLogic.reqCount);
            } else if (['remember', 'shape_instruction', 'blue_instruction', 'spider_instruction'].includes(buttonMiniGameLogic.reqType)) {
                isStepSuccess = (buttonMiniGameLogic.currentClicks === 0);
            } else if (['click_n', 'click_2'].includes(buttonMiniGameLogic.reqType)) {
                isStepSuccess = (buttonMiniGameLogic.currentClicks === buttonMiniGameLogic.reqCount);
            } else if (['dont_click', 'click_0'].includes(buttonMiniGameLogic.reqType)) {
                isStepSuccess = (buttonMiniGameLogic.currentClicks === 0);
            } else if (buttonMiniGameLogic.reqType === 'click_gt4') {
                isStepSuccess = (buttonMiniGameLogic.currentClicks >= buttonMiniGameLogic.reqCount);
            } else if (buttonMiniGameLogic.reqType === 'remember_check') {
                isStepSuccess = buttonMiniGameLogic.rememberCheckMatch ? (buttonMiniGameLogic.currentClicks === 1) : (buttonMiniGameLogic.currentClicks === 0);
            }

            if (isStepSuccess) {
                if (buttonMiniGameLogic.step >= 140) {
                    endButtonMiniGame(true);
                } else {
                    buttonMiniGameLogic.step += 1;
                    setupNextButtonStep();
                }
            } else {
                endButtonMiniGame(false);
            }
        }
    }

    updateMinigamesEnergyUI();
}

function updateMinigamesEnergyUI() {
    initMinigamesState();
    const pigEnergyEl = document.getElementById('piglet-energy-val');
    const pigTimerEl = document.getElementById('piglet-energy-timer');
    const btnEnergyEl = document.getElementById('button-mini-energy-val');
    const btnTimerEl = document.getElementById('button-mini-energy-timer');

    const now = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    if (pigEnergyEl) pigEnergyEl.innerText = `${state.pigletGame.energy} / 3`;
    if (pigTimerEl) {
        if (state.pigletGame.energy < 3) {
            const leftMs = Math.max(0, (4 * 3600 * 1000) - (now - state.pigletGame.lastEnergyRegen));
            const secLeft = Math.ceil(leftMs / 1000);
            pigTimerEl.innerText = `⏳ Відновлення +1⚡ через: ${typeof formatTime === 'function' ? formatTime(secLeft) : secLeft + ' сек'}`;
        } else pigTimerEl.innerText = `⚡ Енергія повна!`;
    }

    if (btnEnergyEl) btnEnergyEl.innerText = `${state.buttonMiniGame.energy} / 5`;
    if (btnTimerEl) {
        if (state.buttonMiniGame.energy < 5) {
            const leftMs = Math.max(0, (3 * 3600 * 1000) - (now - state.buttonMiniGame.lastEnergyRegen));
            const secLeft = Math.ceil(leftMs / 1000);
            btnTimerEl.innerText = `⏳ Відновлення +1⚡ через: ${typeof formatTime === 'function' ? formatTime(secLeft) : secLeft + ' сек'}`;
        } else btnTimerEl.innerText = `⚡ Енергія повна!`;
    }
}

function isPigletGameUnlocked() {
    return (state.passives ? (state.passives[45] || 0) : 0) >= 1;
}

// ------------------------------------------
// ЛОГІКА ЗЕЛЕНОЇ КНОПКИ У МІНІ-ІГРАХ
// ------------------------------------------
function setupNextButtonStep() {
    buttonMiniGameLogic.maxTimer = 1.0;
    buttonMiniGameLogic.timer = 1.0;
    buttonMiniGameLogic.currentClicks = 0;
    buttonMiniGameLogic.hasSpider = false;
    buttonMiniGameLogic.isBlueButton = false;
    buttonMiniGameLogic.shownShape = '';

    const step = buttonMiniGameLogic.step;
    if (step === 1) {
        buttonMiniGameLogic.reqType = 'click_1';
        buttonMiniGameLogic.reqCount = 1;
    } else if (step === 2) {
        buttonMiniGameLogic.reqType = 'remember';
        buttonMiniGameLogic.rememberNumber = Math.floor(Math.random() * 90) + 10;
        buttonMiniGameLogic.reqCount = 0;
    } else if (step === buttonMiniGameLogic.shapeStep) {
        buttonMiniGameLogic.reqType = 'shape_instruction';
        buttonMiniGameLogic.reqCount = 0;
    } else if (step === buttonMiniGameLogic.checkStep) {
        buttonMiniGameLogic.reqType = 'remember_check';
        const isMatch = Math.random() < 0.5;
        buttonMiniGameLogic.rememberCheckMatch = isMatch;
        buttonMiniGameLogic.shownNumber = isMatch ? buttonMiniGameLogic.rememberNumber : Math.floor(Math.random() * 90) + 10;
        buttonMiniGameLogic.reqCount = isMatch ? 1 : 0;
    } else if (step === buttonMiniGameLogic.blueStep) {
        buttonMiniGameLogic.reqType = 'blue_instruction';
        buttonMiniGameLogic.reqCount = 0;
    } else if (step === buttonMiniGameLogic.spiderStep) {
        buttonMiniGameLogic.reqType = 'spider_instruction';
        buttonMiniGameLogic.reqCount = 0;
    } else {
        let special = false;
        if (step > buttonMiniGameLogic.shapeStep && Math.random() < 0.05) {
            buttonMiniGameLogic.reqType = 'shape_check';
            const shapes = ['▲', '■', '●'];
            buttonMiniGameLogic.shownShape = shapes[Math.floor(Math.random() * 3)];
            buttonMiniGameLogic.reqCount = (buttonMiniGameLogic.shownShape === buttonMiniGameLogic.targetShape) ? 1 : 0;
            special = true;
        }
        if (!special && step > buttonMiniGameLogic.blueStep && Math.random() < 0.04) {
            buttonMiniGameLogic.reqType = 'blue_check';
            buttonMiniGameLogic.isBlueButton = true;
            buttonMiniGameLogic.reqCount = buttonMiniGameLogic.blueShouldClick ? 1 : 0;
            special = true;
        }
        if (!special) {
            const p = Math.floor(Math.random() * 4);
            if (p === 0) { buttonMiniGameLogic.reqType = 'click_1'; buttonMiniGameLogic.reqCount = 1; }
            else if (p === 1) { buttonMiniGameLogic.reqType = 'click_n'; buttonMiniGameLogic.reqCount = Math.floor(Math.random() * 3) + 2; }
            else if (p === 2) { buttonMiniGameLogic.reqType = 'dont_click'; buttonMiniGameLogic.reqCount = 0; }
            else { buttonMiniGameLogic.reqType = 'click_gt4'; buttonMiniGameLogic.reqCount = 5; }
        }
        if (step > buttonMiniGameLogic.spiderStep && Math.random() < 0.04) {
            buttonMiniGameLogic.hasSpider = true;
            buttonMiniGameLogic.reqCount = 0;
        }
    }
    renderButtonMiniGameUI();
}

function handleButtonMiniGameClick() {
    initMinigamesState();
    if (buttonMiniGameLogic.state === 'idle' || buttonMiniGameLogic.state === 'ended') {
        if (state.buttonMiniGame.energy < 1) {
            alert("Недостатньо енергії для кнопки!");
            return;
        }
        state.buttonMiniGame.energy -= 1;
        state.buttonMiniGame.lastEnergyRegen = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

        buttonMiniGameLogic.state = 'playing';
        buttonMiniGameLogic.step = 1;
        buttonMiniGameLogic.checkStep = Math.floor(Math.random() * 21) + 40;
        buttonMiniGameLogic.shapeStep = Math.floor(Math.random() * 10) + 26;
        buttonMiniGameLogic.blueStep = Math.floor(Math.random() * 15) + 65;
        buttonMiniGameLogic.spiderStep = Math.floor(Math.random() * 10) + 90;
        const shapes = ['▲', '■', '●'];
        buttonMiniGameLogic.targetShape = shapes[Math.floor(Math.random() * 3)];
        buttonMiniGameLogic.blueShouldClick = Math.random() < 0.5;

        setupNextButtonStep();
        if (typeof playClickSound === 'function') playClickSound();
        return;
    }

    if (buttonMiniGameLogic.state === 'playing') {
        if (typeof playClickSound === 'function') playClickSound();
        const isForbidden = (
            buttonMiniGameLogic.hasSpider ||
            ['dont_click', 'click_0', 'remember', 'shape_instruction', 'blue_instruction', 'spider_instruction'].includes(buttonMiniGameLogic.reqType) ||
            (buttonMiniGameLogic.reqType === 'remember_check' && !buttonMiniGameLogic.rememberCheckMatch) ||
            (buttonMiniGameLogic.reqType === 'shape_check' && buttonMiniGameLogic.reqCount === 0) ||
            (buttonMiniGameLogic.reqType === 'blue_check' && buttonMiniGameLogic.reqCount === 0)
        );

        if (isForbidden) {
            endButtonMiniGame(false);
            return;
        }

        buttonMiniGameLogic.currentClicks += 1;
        if (['click_1', 'remember_check', 'shape_check', 'blue_check'].includes(buttonMiniGameLogic.reqType)) {
            if (buttonMiniGameLogic.currentClicks > 1) { endButtonMiniGame(false); return; }
        } else if (buttonMiniGameLogic.reqType === 'click_n' && buttonMiniGameLogic.currentClicks > buttonMiniGameLogic.reqCount) {
            endButtonMiniGame(false);
            return;
        }
        renderButtonMiniGameUI();
    }
}

function endButtonMiniGame(isSuccess) {
    buttonMiniGameLogic.state = 'ended';
    const reachedSteps = isSuccess ? 140 : Math.max(0, buttonMiniGameLogic.step - 1);
    
    // Формула доходу: 1 крок = 18 * (дохід аури в сек)
    const cps = typeof getTotalCps === 'function' ? getTotalCps() : (state.cps || 0);
    const rewardPerStep = 18 * cps;
    const totalEarned = Math.floor(reachedSteps * rewardPerStep);

    state.aura = (state.aura || 0) + totalEarned;
    state.totalAura = (state.totalAura || 0) + totalEarned;
    buttonMiniGameLogic.lastEarned = totalEarned;
    buttonMiniGameLogic.completedMax = isSuccess;

    if (typeof saveGame === 'function') saveGame();
    renderButtonMiniGameUI();
}

function renderButtonMiniGameUI() {
    const btn = document.getElementById('button-mini-interactive-btn');
    if (!btn) return;

    const cps = typeof getTotalCps === 'function' ? getTotalCps() : (state.cps || 0);
    const rewardPerStep = 18 * cps;

    if (buttonMiniGameLogic.state === 'idle') {
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.innerHTML = `
            <div class="lab-btn-title">ПОЧАТИ ГРУ</div>
            <div class="lab-btn-sub">Витрачає: 1 ⚡</div>
            <div style="font-size: 0.8rem; margin-top: 6px; color: var(--accent-gold);">1 крок = ${typeof formatNum === 'function' ? formatNum(rewardPerStep) : rewardPerStep} аури</div>
        `;
    } else if (buttonMiniGameLogic.state === 'ended') {
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.innerHTML = `
            <div class="lab-btn-title" style="color: ${buttonMiniGameLogic.completedMax ? '#2ecc71' : '#e74c3c'};">
                ${buttonMiniGameLogic.completedMax ? 'ПЕРЕМОГА!' : 'ГРУ ЗАВЕРШЕНО!'}
            </div>
            <div class="lab-btn-sub">Пройдено кроків: ${buttonMiniGameLogic.completedMax ? 140 : Math.max(0, buttonMiniGameLogic.step - 1)}</div>
            <div class="lab-btn-timer" style="color: #2ecc71;">+${typeof formatNum === 'function' ? formatNum(buttonMiniGameLogic.lastEarned) : buttonMiniGameLogic.lastEarned} ✨</div>
            <div style="font-size: 0.8rem; margin-top: 6px;">Натисни, щоб зіграти знов</div>
        `;
    } else if (buttonMiniGameLogic.state === 'playing') {
        if (buttonMiniGameLogic.isBlueButton) {
            btn.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
            btn.style.borderColor = '#3498db';
        } else {
            btn.style.background = '';
            btn.style.borderColor = '';
        }

        let titleText = "";
        let subText = "";
        if (buttonMiniGameLogic.reqType === 'click_1') { titleText = "натисни"; subText = "Натисни 1 раз"; }
        else if (buttonMiniGameLogic.reqType === 'click_0' || buttonMiniGameLogic.reqType === 'dont_click') { titleText = "не натискай"; subText = "Зачекай!"; }
        else if (buttonMiniGameLogic.reqType === 'remember') { titleText = `Запам'ятай ${buttonMiniGameLogic.rememberNumber}`; subText = "Чекай..."; }
        else if (buttonMiniGameLogic.reqType === 'shape_instruction') { titleText = `натискай коли ${buttonMiniGameLogic.targetShape}`; subText = "Не натискай зараз..."; }
        else if (buttonMiniGameLogic.reqType === 'shape_check') { titleText = `Фігура: ${buttonMiniGameLogic.shownShape}`; subText = buttonMiniGameLogic.reqCount === 1 ? "Натисни!" : "Не натискай!"; }
        else if (buttonMiniGameLogic.reqType === 'remember_check') { titleText = `Число ${buttonMiniGameLogic.shownNumber}?`; subText = buttonMiniGameLogic.rememberCheckMatch ? "Натисни!" : "Не натискай!"; }
        else if (buttonMiniGameLogic.reqType === 'blue_instruction') { titleText = buttonMiniGameLogic.blueShouldClick ? "синя - натискай" : "синя - не натискай"; subText = "Чекай..."; }
        else if (buttonMiniGameLogic.reqType === 'blue_check') { titleText = "Синя кнопка"; subText = buttonMiniGameLogic.reqCount === 1 ? "Натисни!" : "Не натискай!"; }
        else if (buttonMiniGameLogic.reqType === 'spider_instruction') { titleText = "не натискай при павуку 🕷️"; subText = "Чекай..."; }
        else if (buttonMiniGameLogic.reqType === 'click_n') { titleText = `натисни ${buttonMiniGameLogic.reqCount} разів`; subText = `${buttonMiniGameLogic.currentClicks}/${buttonMiniGameLogic.reqCount}`; }
        else if (buttonMiniGameLogic.reqType === 'click_gt4') { titleText = "натисни більше 4 разів"; subText = `${buttonMiniGameLogic.currentClicks}/5`; }

        if (buttonMiniGameLogic.hasSpider) { titleText += " 🕷️"; subText = "НЕ НАТИСКАЙ!"; }

        const pct = Math.max(0, Math.min(100, (buttonMiniGameLogic.timer / buttonMiniGameLogic.maxTimer) * 100));
        btn.innerHTML = `
            <div style="font-size: 0.85rem; color: #f1c40f; font-weight: bold;">Крок ${buttonMiniGameLogic.step}/140</div>
            <div class="lab-btn-title" style="font-size: 1.1rem; margin: 4px 0;">${titleText}</div>
            <div class="lab-btn-sub">${subText}</div>
            <div class="lab-btn-timer">${buttonMiniGameLogic.timer.toFixed(1)}s</div>
            <div class="lab-progress-ring" style="width: ${pct}%;"></div>
        `;
    }
}

// ------------------------------------------
// РЕНДЕР ТА ВІДОБРАЖЕННЯ
// ------------------------------------------
function switchMinigamesSubTab(tab) {
    activeMinigablesTab = tab;
    renderMinigamesUI();
}

function startPigletGame() {
    initMinigamesState();
    if (!isPigletGameUnlocked() || state.pigletGame.energy < 1) return;

    state.pigletGame.energy -= 1;
    state.pigletGame.lastEnergyRegen = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    const totalCells = 72;
    const grid = Array.from({ length: totalCells }, () => ({ hasPig: false, opened: false }));
    let pigsPlaced = 0;
    while (pigsPlaced < 10) {
        const randIdx = Math.floor(Math.random() * totalCells);
        if (!grid[randIdx].hasPig) { grid[randIdx].hasPig = true; pigsPlaced++; }
    }

    state.pigletGame.grid = grid;
    state.pigletGame.attemptsLeft = 10;
    state.pigletGame.extraAttemptsBought = 0;
    state.pigletGame.pigsFoundInRound = 0;
    state.pigletGame.roundActive = true;
    state.pigletGame.lastMessage = "Гра почалася! Оберіть кущик.";

    if (typeof saveGame === 'function') saveGame();
    renderMinigamesUI();
}

function clickPigletCell(idx) {
    initMinigamesState();
    if (!state.pigletGame.roundActive || state.pigletGame.attemptsLeft <= 0) return;

    const cell = state.pigletGame.grid[idx];
    if (!cell || cell.opened) return;

    cell.opened = true;
    state.pigletGame.attemptsLeft -= 1;

    if (cell.hasPig) {
        state.pigletGame.pigsFoundInRound += 1;
        const cps = typeof getTotalCps === 'function' ? getTotalCps() : 0;
        const reward = 5000000000 + Math.floor(cps * 1000);
        state.aura = (state.aura || 0) + reward;
        state.totalAura = (state.totalAura || 0) + reward;
        state.pigletGame.lastMessage = `🎉 Знайдено хрюнделя! +${typeof formatNum === 'function' ? formatNum(reward) : reward} аури!`;
    } else {
        state.pigletGame.lastMessage = `🍃 Порожньо... Спроб залишилось: ${state.pigletGame.attemptsLeft}`;
    }

    if (typeof saveGame === 'function') saveGame();
    renderMinigamesUI();
}

function renderMinigamesUI() {
    const container = document.getElementById('tab-minigames');
    if (!container) return;

    initMinigamesState();
    updateMinigamesEnergyUI();

    let html = `
        <div class="leaderboard-toggle" style="margin-bottom: 15px;">
            <button class="sub-tab-btn ${activeMinigablesTab === 'piglet' ? 'active' : ''}" onclick="switchMinigamesSubTab('piglet')">🐷 Знайди хрюнделя</button>
            <button class="sub-tab-btn ${activeMinigablesTab === 'button' ? 'active' : ''}" onclick="switchMinigamesSubTab('button')">🟢 Зелена Кнопка</button>
        </div>
    `;

    if (activeMinigablesTab === 'piglet') {
        if (!isPigletGameUnlocked()) {
            html += `
                <div style="text-align: center; padding: 30px; color: #e74c3c; background: var(--card-bg); border-radius: 16px; border: 2px solid #e74c3c;">
                    <div style="font-size: 3rem;">🔒</div>
                    <h3>Міні-гра Заблокована</h3>
                    <p style="color: #ccc; margin-top: 8px;">Придбайте картку <b>«Хованки хрюнделя»</b> у категорії «Азартні ігри».</p>
                </div>`;
        } else {
            html += `
                <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 12px; border-radius: 14px; border: 2px solid var(--accent-gold); margin-bottom: 12px;">
                    <div style="font-weight: bold; color: var(--accent-gold);">🐷 Знайди хрюнделя</div>
                    <div style="color: #3498db; margin-top: 4px;">🎯 Енергія: <b id="piglet-energy-val">${state.pigletGame.energy} / 3</b></div>
                    <div id="piglet-energy-timer" style="font-size: 0.8rem; color: #aaa;"></div>
                </div>
            `;
            if (!state.pigletGame.roundActive) {
                html += `
                    <div class="upgrade-card evo-card" style="flex-direction: column; text-align: center; padding: 20px; width: 100%;">
                        <div style="font-size: 3rem;">🐷🌾</div>
                        <button class="modal-btn" ${state.pigletGame.energy >= 1 ? '' : 'disabled'} onclick="startPigletGame()">🎮 Грати (1 ⚡)</button>
                    </div>`;
            } else {
                html += `<div class="piglet-grid">`;
                state.pigletGame.grid.forEach((cell, idx) => {
                    let content = cell.opened ? (cell.hasPig ? '🐷' : '🍂') : '🌳';
                    html += `<div class="piglet-cell ${cell.opened ? 'opened' : ''}" onclick="clickPigletCell(${idx})">${content}</div>`;
                });
                html += `</div>`;
            }
        }
    } else if (activeMinigablesTab === 'button') {
        const cps = typeof getTotalCps === 'function' ? getTotalCps() : (state.cps || 0);
        const rewardPerStep = 18 * cps;

        html += `
            <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 12px; border-radius: 14px; border: 2px solid #2ecc71; margin-bottom: 15px;">
                <div style="font-size: 1.1rem; font-weight: bold; color: #2ecc71;">🟢 Міні-гра: Зелена Кнопка</div>
                <div style="color: #3498db; margin-top: 4px; font-weight: bold;">⚡ Енергія: <b id="button-mini-energy-val">${state.buttonMiniGame.energy} / 5</b></div>
                <div id="button-mini-energy-timer" style="font-size: 0.8rem; color: #aaa;"></div>
                <div style="font-size: 0.85rem; color: var(--accent-gold); margin-top: 6px;">
                    🎯 Нагорода: <b>1 крок = 18 × дохід/сек</b> (${typeof formatNum === 'function' ? formatNum(rewardPerStep) : rewardPerStep} ✨)
                </div>
            </div>

            <div class="lab-btn-container">
                <div id="button-mini-interactive-btn" class="lab-main-btn" onclick="handleButtonMiniGameClick()"></div>
            </div>
        `;
        setTimeout(renderButtonMiniGameUI, 50);
    }

    container.innerHTML = html;
}
