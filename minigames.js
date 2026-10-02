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

function updateMinigamesLogic(dt) {
    initMinigamesState();
    const now = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    // 1. Регенерація енергії Хрюнделів (макс 3, 1⚡ за 4 години)
    const MAX_PIG_ENERGY = 3;
    const PIG_REGEN_MS = 4 * 60 * 60 * 1000;
    if (state.pigletGame.energy < MAX_PIG_ENERGY) {
        if (!state.pigletGame.lastEnergyRegen) state.pigletGame.lastEnergyRegen = now;
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

    updateMinigamesEnergyUI();
}

function updateMinigamesEnergyUI() {
    initMinigamesState();
    const pigEnergyEl = document.getElementById('piglet-energy-val');
    const pigTimerEl = document.getElementById('piglet-energy-timer');

    const now = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    if (pigEnergyEl) pigEnergyEl.innerText = `${state.pigletGame.energy} / 3`;
    if (pigTimerEl) {
        if (state.pigletGame.energy < 3) {
            const elapsed = now - (state.pigletGame.lastEnergyRegen || now);
            const leftMs = Math.max(0, (4 * 3600 * 1000) - elapsed);
            const secLeft = Math.ceil(leftMs / 1000);
            const timeFormatted = (typeof formatTime === 'function') ? formatTime(secLeft) : `${secLeft} сек`;
            pigTimerEl.innerText = `⏳ Відновлення +1⚡ через: ${timeFormatted}`;
        } else {
            pigTimerEl.innerText = `⚡ Енергія повна!`;
        }
    }
}

function isPigletGameUnlocked() {
    return (state.passives ? (state.passives[45] || 0) : 0) >= 1;
}

function handleButtonMiniGameClick() {
    alert("Міні-гра «Зелена Кнопка» з'явиться 5 жовтня!");
}

function switchMinigamesSubTab(tab) {
    activeMinigablesTab = tab;
    renderMinigamesUI();
}

function startPigletGame() {
    initMinigamesState();
    if (!isPigletGameUnlocked()) {
        alert("Міні-гра заблокована! Купіть картку «Хованки хрюнделя».");
        return;
    }
    if (state.pigletGame.energy < 1) {
        alert("Недостатньо енергії!");
        return;
    }

    state.pigletGame.energy -= 1;
    state.pigletGame.lastEnergyRegen = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    const totalCells = 72;
    const grid = Array.from({ length: totalCells }, () => ({ hasPig: false, opened: false }));
    let pigsPlaced = 0;
    while (pigsPlaced < 10) {
        const randIdx = Math.floor(Math.random() * totalCells);
        if (!grid[randIdx].hasPig) {
            grid[randIdx].hasPig = true;
            pigsPlaced++;
        }
    }

    state.pigletGame.grid = grid;
    state.pigletGame.attemptsLeft = 10;
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
        state.pigletGame.pigsFoundInRound = (state.pigletGame.pigsFoundInRound || 0) + 1;
        state.pigletGame.totalFound = (state.pigletGame.totalFound || 0) + 1;
        state.pigletGame.foundSinceLastCardUpgrade = (state.pigletGame.foundSinceLastCardUpgrade || 0) + 1;

        const cps = (typeof getTotalCps === 'function') ? getTotalCps() : 0;
        const reward = 5000000000 + Math.floor(cps * 1000);
        state.aura = (state.aura || 0) + reward;
        state.totalAura = (state.totalAura || 0) + reward;

        if (state.pigletGame.pigsFoundInRound >= 10) {
            state.pigletGame.lastMessage = `🎉 Чудово! Ви знайшли усіх 10 хрюнделів! +${typeof formatNum === 'function' ? formatNum(reward) : reward} аури!`;
        } else {
            state.pigletGame.lastMessage = `🎉 Знайдено хрюнделя! +${typeof formatNum === 'function' ? formatNum(reward) : reward} аури!`;
        }
    } else {
        if (state.pigletGame.attemptsLeft <= 0) {
            state.pigletGame.lastMessage = `🍃 Порожньо... Спроби закінчилися! Знайдено: ${state.pigletGame.pigsFoundInRound}/10`;
        } else {
            state.pigletGame.lastMessage = `🍃 Порожньо... Спроб залишилось: ${state.pigletGame.attemptsLeft}`;
        }
    }

    if (typeof saveGame === 'function') saveGame();
    renderMinigamesUI();
}

function endPigletGame() {
    initMinigamesState();
    state.pigletGame.roundActive = false;
    state.pigletGame.lastMessage = `Раунд завершено! Знайдено хрюнделів: ${state.pigletGame.pigsFoundInRound}/10`;
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
                    <div id="piglet-energy-timer" style="font-size: 0.85rem; color: #f1c40f; margin-top: 4px; font-weight: bold;"></div>
                </div>
            `;
            if (!state.pigletGame.roundActive) {
                html += `
                    <div class="upgrade-card evo-card" style="flex-direction: column; text-align: center; padding: 20px; width: 100%;">
                        <div style="font-size: 3rem;">🐷🌾</div>
                        <p style="color: #ccc; font-size: 0.9rem; margin: 10px 0;">Знайдіть 10 хрюнделів серед 72 кущів! У вас 10 спроб.</p>
                        ${state.pigletGame.lastMessage ? `<div style="color: var(--accent-gold); margin-bottom: 12px; font-size: 0.9rem;">${state.pigletGame.lastMessage}</div>` : ''}
                        <button class="modal-btn" ${state.pigletGame.energy >= 1 ? '' : 'disabled'} onclick="startPigletGame()">🎮 Грати (1 ⚡)</button>
                    </div>`;
            } else {
                html += `
                    <div style="text-align: center; margin-bottom: 10px; width: 100%; background: var(--card-bg); padding: 10px; border-radius: 10px;">
                        <div style="font-size: 0.95rem;">🎯 Спроб залишилось: <b style="color: #e74c3c;">${state.pigletGame.attemptsLeft}</b> | Знайдено: <b style="color: #2ecc71;">${state.pigletGame.pigsFoundInRound} / 10</b></div>
                        <div style="color: var(--accent-gold); font-size: 0.85rem; margin-top: 4px;">${state.pigletGame.lastMessage || ''}</div>
                    </div>
                `;
                html += `<div class="piglet-grid">`;
                state.pigletGame.grid.forEach((cell, idx) => {
                    let content = cell.opened ? (cell.hasPig ? '🐷' : '🍂') : '🌳';
                    html += `<div class="piglet-cell ${cell.opened ? 'opened' : ''}" onclick="clickPigletCell(${idx})">${content}</div>`;
                });
                html += `</div>`;

                html += `
                    <div style="width: 100%; text-align: center; margin-top: 15px;">
                        <button class="modal-btn" style="background: linear-gradient(180deg, #e74c3c, #c0392b);" onclick="endPigletGame()">🏁 Завершити раунд</button>
                    </div>
                `;
            }
        }
    } else if (activeMinigablesTab === 'button') {
        html += `
            <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 30px 20px; border-radius: 16px; border: 2px solid #2ecc71; margin-top: 10px;">
                <div style="font-size: 3.5rem; margin-bottom: 10px;">🟢🔒</div>
                <h3 style="color: #2ecc71; font-size: 1.4rem; margin-bottom: 10px;">Міні-гра «Зелена Кнопка»</h3>
                <div style="color: var(--accent-gold); font-size: 1.1rem; font-weight: bold; margin-bottom: 10px;">⏳ Скоро у грі!</div>
                <p style="color: #ecf0f1; font-size: 1rem; line-height: 1.5;">Міні-гра з'явиться <b>5 жовтня</b>.</p>
            </div>
        `;
    }

    container.innerHTML = html;
}
