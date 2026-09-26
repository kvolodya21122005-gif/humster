// ==========================================
// ЛОГІКА МІНІ-ГРИ: ЗНАЙДИ ХРЮНДЕЛЯ
// ==========================================

function initMinigamesState() {
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
    if (state.pigletGame.totalFound === undefined) state.pigletGame.totalFound = 0;
    if (state.pigletGame.foundSinceLastCardUpgrade === undefined) state.pigletGame.foundSinceLastCardUpgrade = 0;
    if (state.pigletGame.extraAttemptsBought === undefined) state.pigletGame.extraAttemptsBought = 0;
    if (state.pigletGame.pigsFoundInRound === undefined) state.pigletGame.pigsFoundInRound = 0;
    if (!state.pigletGame.grid) state.pigletGame.grid = [];
}

function updateMinigamesLogic(dt) {
    initMinigamesState();

    const MAX_MINI_ENERGY = 3;
    const REGEN_TIME_MS = 4 * 60 * 60 * 1000; // 4 години (14400 секунд)

    if (state.pigletGame.energy < MAX_MINI_ENERGY) {
        const now = (typeof getServerTime === 'function') ? getServerTime() : Date.now();
        const elapsed = now - state.pigletGame.lastEnergyRegen;

        if (elapsed >= REGEN_TIME_MS) {
            const added = Math.floor(elapsed / REGEN_TIME_MS);
            state.pigletGame.energy = Math.min(MAX_MINI_ENERGY, state.pigletGame.energy + added);
            state.pigletGame.lastEnergyRegen += added * REGEN_TIME_MS;
            if (state.pigletGame.energy >= MAX_MINI_ENERGY) {
                state.pigletGame.lastEnergyRegen = now;
            }
        }
    } else {
        state.pigletGame.lastEnergyRegen = (typeof getServerTime === 'function') ? getServerTime() : Date.now();
    }

    updateMinigamesEnergyUI();
}

function updateMinigamesEnergyUI() {
    initMinigamesState();

    const MAX_MINI_ENERGY = 3;
    const REGEN_TIME_MS = 4 * 60 * 60 * 1000;
    const now = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    // Автоматично нараховуємо енергію, якщо час минув
    if (state.pigletGame.energy < MAX_MINI_ENERGY) {
        const elapsed = now - state.pigletGame.lastEnergyRegen;
        if (elapsed >= REGEN_TIME_MS) {
            const added = Math.floor(elapsed / REGEN_TIME_MS);
            state.pigletGame.energy = Math.min(MAX_MINI_ENERGY, state.pigletGame.energy + added);
            state.pigletGame.lastEnergyRegen += added * REGEN_TIME_MS;
            if (state.pigletGame.energy >= MAX_MINI_ENERGY) {
                state.pigletGame.lastEnergyRegen = now;
            }
        }
    }

    const energyEl = document.getElementById('piglet-energy-val');
    const timerEl = document.getElementById('piglet-energy-timer');

    if (energyEl) {
        energyEl.innerText = `${state.pigletGame.energy} / ${MAX_MINI_ENERGY}`;
    }

    if (timerEl) {
        if (state.pigletGame.energy < MAX_MINI_ENERGY) {
            const elapsed = Math.max(0, now - state.pigletGame.lastEnergyRegen);
            const leftMs = Math.max(0, REGEN_TIME_MS - elapsed);
            const secLeft = Math.ceil(leftMs / 1000);
            timerEl.innerText = `⏳ Відновлення +1 енергії через: ${typeof formatTime === 'function' ? formatTime(secLeft) : secLeft + ' сек'}`;
        } else {
            timerEl.innerText = `⚡ Енергія повна!`;
        }
    }
}

function isPigletGameUnlocked() {
    const cardLvl = state.passives ? (state.passives[45] || 0) : 0;
    return cardLvl >= 1;
}

function startPigletGame() {
    initMinigamesState();
    if (!isPigletGameUnlocked()) return;

    if (state.pigletGame.energy < 1) {
        alert("Недостатньо енергії міні-ігор! Зачекайте відновлення.");
        return;
    }

    state.pigletGame.energy -= 1;
    state.pigletGame.lastEnergyRegen = (typeof getServerTime === 'function') ? getServerTime() : Date.now();

    // Сітка 6 на 12 (72 кущики)
    const totalCells = 72;
    const pigCount = 10;
    const grid = [];

    for (let i = 0; i < totalCells; i++) {
        grid.push({ hasPig: false, opened: false });
    }

    // Розміщуємо 10 хрюнделів у випадкових кущах
    let pigsPlaced = 0;
    while (pigsPlaced < pigCount) {
        const randIdx = Math.floor(Math.random() * totalCells);
        if (!grid[randIdx].hasPig) {
            grid[randIdx].hasPig = true;
            pigsPlaced++;
        }
    }

    state.pigletGame.grid = grid;
    state.pigletGame.attemptsLeft = 10;
    state.pigletGame.extraAttemptsBought = 0;
    state.pigletGame.pigsFoundInRound = 0;
    state.pigletGame.roundActive = true;
    state.pigletGame.lastMessage = "Гра почалася! Оберіть кущик, щоб знайти хрюнделя.";

    if (typeof saveGame === 'function') saveGame();
    renderMinigamesUI();
}

function clickPigletCell(idx) {
    initMinigamesState();
    if (!state.pigletGame.roundActive) return;

    const cell = state.pigletGame.grid[idx];
    if (!cell || cell.opened) return;

    if (state.pigletGame.attemptsLeft <= 0) {
        return;
    }

    cell.opened = true;
    state.pigletGame.attemptsLeft -= 1;

    if (cell.hasPig) {
        state.pigletGame.pigsFoundInRound += 1;
        state.pigletGame.foundSinceLastCardUpgrade = (state.pigletGame.foundSinceLastCardUpgrade || 0) + 1;
        state.pigletGame.totalFound = (state.pigletGame.totalFound || 0) + 1;

        const cps = typeof getTotalCps === 'function' ? getTotalCps() : 0;
        const reward = 5000000000 + Math.floor(cps * 1000);

        state.aura = (state.aura || 0) + reward;
        state.totalAura = (state.totalAura || 0) + reward;

        state.pigletGame.lastMessage = `🎉 Знайдено хрюнделя! Нагорода: +${typeof formatNum === 'function' ? formatNum(reward) : reward} аури!`;
        if (typeof playClickSound === 'function') playClickSound();
    } else {
        state.pigletGame.lastMessage = `🍃 У цьому кущику нікого немає... Спроб залишилось: ${state.pigletGame.attemptsLeft}`;
    }

    if (typeof saveGame === 'function') saveGame();
    renderMinigamesUI();
}

function buyExtraAttempt() {
    initMinigamesState();
    if (!state.pigletGame.roundActive) return;

    const extraCount = state.pigletGame.extraAttemptsBought || 0;
    const nextAttemptNum = 11 + extraCount;
    const cost = (2 + extraCount) * 1000000000;

    if (state.aura >= cost) {
        state.aura -= cost;
        state.pigletGame.extraAttemptsBought += 1;
        state.pigletGame.attemptsLeft += 1;
        state.pigletGame.lastMessage = `Куплено ${nextAttemptNum}-ту спробу за ${typeof formatNum === 'function' ? formatNum(cost) : cost} аури!`;

        if (typeof saveGame === 'function') saveGame();
        renderMinigamesUI();
    } else {
        alert(`Недостатньо аури! Потрібно ${typeof formatNum === 'function' ? formatNum(cost) : cost} аури.`);
    }
}

function finishPigletGame() {
    initMinigamesState();
    if (!state.pigletGame) return;

    state.pigletGame.roundActive = false;
    if (state.pigletGame.grid) {
        state.pigletGame.grid.forEach(cell => cell.opened = true);
    }
    state.pigletGame.lastMessage = `Раунд завершено! Знайдено ${state.pigletGame.pigsFoundInRound} з 10 хрюнделів.`;

    if (typeof saveGame === 'function') saveGame();
    renderMinigamesUI();
}

function renderMinigamesUI() {
    const container = document.getElementById('tab-minigames');
    if (!container) return;

    if (!isPigletGameUnlocked()) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 15px; color: #e74c3c; background: var(--card-bg); border-radius: 16px; margin-top: 20px; border: 2px solid #e74c3c; width: 100%;">
                <div style="font-size: 3.5rem;">🔒</div>
                <h2 style="margin-top: 10px; color: #e74c3c;">Доступ до Міні-ігор Заблоковано!</h2>
                <br>
                <p style="color: #ecf0f1; font-size: 1rem; line-height: 1.5;">
                    Щоб отримати доступ до гри, необхідно придбати карточку<br>
                    <b style="color: var(--accent-gold);">«Хованки хрюнделя» 1 рівня</b><br>
                    у новій категорії <b style="color: var(--accent-purple);">«Азартні ігри»</b>.
                </p>
            </div>`;
        return;
    }

    initMinigamesState();
    updateMinigamesEnergyUI();

    let html = `
        <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 15px; border-radius: 16px; border: 2px solid var(--accent-gold); margin-bottom: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
            <div style="font-size: 1.2rem; font-weight: bold; color: var(--accent-gold); margin-bottom: 6px;">🎮 Міні-гра: Знайди хрюнделя</div>
            <div style="display: flex; justify-content: space-around; align-items: center; margin-top: 10px; font-weight: bold; font-size: 0.95rem; flex-wrap: wrap; gap: 8px;">
                <span style="color: #3498db;">🎯 Енергія: <b id="piglet-energy-val">${state.pigletGame.energy} / 3</b></span>
            </div>
            <div id="piglet-energy-timer" style="font-size: 0.85rem; color: #aaa; margin-top: 6px; font-weight: bold;"></div>
        </div>
    `;

    if (!state.pigletGame.roundActive && (!state.pigletGame.grid || state.pigletGame.grid.length === 0 || state.pigletGame.grid.every(c => c.opened))) {
        const rewardCalc = 5000000000 + Math.floor((typeof getTotalCps === 'function' ? getTotalCps() : 0) * 1000);
        html += `
            <div class="upgrade-card evo-card" style="flex-direction: column; text-align: center; padding: 25px; width: 100%;">
                <div style="font-size: 4rem;">🐷🌾</div>
                <h2 style="color: var(--accent-gold); margin: 10px 0;">Знайди хрюнделя</h2>
                <p style="font-size: 0.95rem; color: #ccc; line-height: 1.4; max-width: 450px; margin: 0 auto;">
                    У 72 кущиках сховалось <b>10 хрюнделів</b>.<br>
                    У вас є <b>10 спроб</b>, щоб їх знайти!<br>
                    Нагорода за кожного знайденого хрюнделя: <b style="color: #2ecc71;">5b + (дохід/сек * 1000)</b> = <b style="color: var(--accent-gold);">${typeof formatNum === 'function' ? formatNum(rewardCalc) : rewardCalc} ✨</b>
                </p>
                ${state.pigletGame.lastMessage ? `<div style="margin-top: 15px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 10px; color: var(--accent-gold); font-weight: bold;">${state.pigletGame.lastMessage}</div>` : ''}
                <hr style="width: 100%; border: 1px solid rgba(255,255,255,0.1); margin: 18px 0;">
                <button class="modal-btn" ${state.pigletGame.energy >= 1 ? '' : 'disabled style="background: #555; cursor: not-allowed;"'} onclick="startPigletGame()">
                    🎮 Грати (1 ⚡)
                </button>
            </div>
        `;
    } else {
        const extraCount = state.pigletGame.extraAttemptsBought || 0;
        const nextAttemptCost = (2 + extraCount) * 1000000000;
        const nextAttemptNum = 11 + extraCount;

        html += `
            <div style="width: 100%; background: var(--card-bg); padding: 12px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 0.95rem; margin-bottom: 6px;">
                    <span style="color: ${state.pigletGame.attemptsLeft > 0 ? '#2ecc71' : '#e74c3c'};">🎯 Спроб залишилось: ${state.pigletGame.attemptsLeft}</span>
                    <span style="color: var(--accent-gold);">🐷 Знайдено у раунді: ${state.pigletGame.pigsFoundInRound} / 10</span>
                </div>
                <div style="text-align: center; color: var(--accent-cyan); font-size: 0.88rem; font-weight: bold; min-height: 22px;">
                    ${state.pigletGame.lastMessage || ''}
                </div>
            </div>

            <div class="piglet-grid">
        `;

        state.pigletGame.grid.forEach((cell, idx) => {
            let content = '🌳';
            let classes = 'piglet-cell';

            if (cell.opened) {
                classes += ' opened';
                if (cell.hasPig) {
                    classes += ' has-pig';
                    content = '🐷';
                } else {
                    content = '🍂';
                }
            }

            html += `<div class="${classes}" onclick="clickPigletCell(${idx})">${content}</div>`;
        });

        html += `</div>`;

        if (state.pigletGame.attemptsLeft <= 0 && state.pigletGame.roundActive) {
            html += `
                <div style="width: 100%; background: rgba(231, 76, 60, 0.15); border: 2px solid #e74c3c; border-radius: 14px; padding: 15px; margin-top: 15px; text-align: center;">
                    <div style="color: #e74c3c; font-weight: bold; font-size: 1.1rem; margin-bottom: 10px;">⚠️ Спроби закінчилися!</div>
                    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                        <button class="upgrade-btn" style="background: linear-gradient(180deg, #e67e22, #d35400); padding: 10px 16px;" onclick="buyExtraAttempt()">
                            ➕ Докупити ${nextAttemptNum}-ту спробу (${typeof formatNum === 'function' ? formatNum(nextAttemptCost) : nextAttemptCost} аури)
                        </button>
                        <button class="upgrade-btn" style="background: #7f8c8d; padding: 10px 16px;" onclick="finishPigletGame()">
                            🚪 Завершити ігру
                        </button>
                    </div>
                </div>
            `;
        } else if (!state.pigletGame.roundActive) {
            html += `
                <div style="width: 100%; text-align: center; margin-top: 15px;">
                    <button class="modal-btn" onclick="renderMinigamesUI()">
                        🔄 До головного меню міні-гри
                    </button>
                </div>
            `;
        } else {
            html += `
                <div style="width: 100%; text-align: center; margin-top: 10px;">
                    <button class="sub-tab-btn" style="max-width: 200px; margin: 0 auto; background: rgba(255,255,255,0.05);" onclick="finishPigletGame()">
                        🚪 Здатися та вийти
                    </button>
                </div>
            `;
        }
    }

    container.innerHTML = html;
    updateMinigamesEnergyUI();
}
