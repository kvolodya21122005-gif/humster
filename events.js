// ==========================================
// ЛОГІКА ІВЕНТІВ (НОВИЙ ВАМПІРСЬКИЙ ІВЕНТ)
// ==========================================

const VAMPIRE_EVENT_ID = 'vampire_event_v1';

// Конфігурація жертв
const VICTIMS_DATA = [
    { id: 'fly', name: 'Муха', hp: 100, blood: 2, icon: '🪰', chance: 0.40 },
    { id: 'lizard', name: 'Ящірка', hp: 1000, blood: 10, icon: '🦎', chance: 0.30 },
    { id: 'mouse', name: 'Миша', hp: 10000, blood: 50, icon: '🖱️', chance: 0.20 },
    { id: 'chicken', name: 'Курка', hp: 25000, blood: 100, icon: '🐔', chance: 0.08 },
    { id: 'goose', name: 'Гуска', hp: 50000, blood: 170, icon: '🪿', chance: 0.02 }
];

// 1. Прокачка Крові (на одному місці)
const BLOOD_UPGRADES = [
    { level: 1, mult: 2, cost: 2 },
    { level: 2, mult: 3, cost: 5 },
    { level: 3, mult: 4, cost: 10 },
    { level: 4, mult: 5, cost: 40 },
    { level: 5, mult: 6, cost: 100 },
    { level: 6, mult: 7, cost: 250 },
    { level: 7, mult: 8, cost: 550 },
    { level: 8, mult: 9, cost: 1200 },
    { level: 9, mult: 10, cost: 2500 },
    { level: 10, mult: 11, cost: 5000 },
    { level: 11, mult: 12, cost: 8000 }
];

// 2. Прокачка Шкоди (на одному місці)
const DAMAGE_UPGRADES = [
    { level: 1, mult: 2, cost: 3 },
    { level: 2, mult: 4, cost: 500 },
    { level: 3, mult: 8, cost: 15000 },
    { level: 4, mult: 16, cost: 250000 }
];

// 3. Прокачка Часу появи (на одному місці)
const RESPAWN_UPGRADES = [
    { level: 1, timeSec: 29, costAura: 300000000 },
    { level: 2, timeSec: 28, costAura: 500000000 },
    { level: 3, timeSec: 27, costAura: 750000000 },
    { level: 4, timeSec: 26, costAura: 1500000000 },
    { level: 5, timeSec: 25, costAura: 4000000000 },
    { level: 6, timeSec: 24, costAura: 6000000000 },
    { level: 7, timeSec: 23, costAura: 15000000000 },
    { level: 8, timeSec: 22, costAura: 25000000000 },
    { level: 9, timeSec: 21, costAura: 35000000000 },
    { level: 10, timeSec: 20, costAura: 50000000000 },
    { level: 11, timeSec: 19, costAura: 60000000000 },
    { level: 12, timeSec: 18, costAura: 70000000000 },
    { level: 13, timeSec: 17, costAura: 80000000000 },
    { level: 14, timeSec: 16, costAura: 90000000000 },
    { level: 15, timeSec: 15, costAura: 100000000000 }
];

// 4. Маєток Вампіра
const ESTATE_LEVELS = [
    { level: 1, income: 50000, costBlood: 50 },
    { level: 2, income: 100000, costBlood: 150 },
    { level: 3, income: 150000, costBlood: 300 },
    { level: 4, income: 200000, costBlood: 600 },
    { level: 5, income: 250000, costBlood: 1200 }
];

let eventSubTab = 'victim'; // 'victim', 'upgrades', 'estate', 'leaderboard'

function getCurrentTime() {
    return (typeof getServerTime === 'function') ? getServerTime() : Date.now();
}

// ------------------------------------------
// КОНВЕРТАЦІЯ ТА ЗБЕРЕЖЕННЯ ЛАБОРАТОРІЇ У СТАТУЇ
// ------------------------------------------
function checkAndConvertLabEvent() {
    if (state.event && state.event.eventId === 'laboratory_event_v1' && !state.labEventFinished) {
        // 1. Перенос Лабораторії у Статуї
        if (!state.statues) state.statues = {};
        const labLvl = state.event.labLvl || 0;
        state.statues.laboratory = {
            name: "Лабораторія",
            level: labLvl,
            icon: "🧪",
            desc: `Рівень прокачки: ${labLvl}`
        };

        // 2. Конвертація Хімікатів у Ауру (1 хімікат = 5000 аури)
        const chem = state.event.chemicals || 0;
        const convertedAura = chem * 5000;
        state.aura = (state.aura || 0) + convertedAura;
        state.totalAura = (state.totalAura || 0) + convertedAura;

        state.labEventFinished = true;

        // Повідомлення при вході
        setTimeout(() => {
            alert(`🧪 Івент "Лабораторія" завершено!\n\n` +
                  `• Вашу Лабораторію (${labLvl} рівень) перенесено у список статуй.\n` +
                  `• Невикористані хімікати (${typeof formatNum === 'function' ? formatNum(chem) : chem}) конвертовано у +${typeof formatNum === 'function' ? formatNum(convertedAura) : convertedAura} аури!`);
        }, 500);
    }
}

// ------------------------------------------
// ІНІЦІАЛІЗАЦІЯ ВАМПІРСЬКОГО ІВЕНТУ
// ------------------------------------------
function initEventState() {
    checkAndConvertLabEvent();

    if (!state.vampireEvent || state.vampireEvent.eventId !== VAMPIRE_EVENT_ID) {
        state.vampireEvent = {
            eventId: VAMPIRE_EVENT_ID,
            energy: 2000,
            lastEnergyTime: getCurrentTime(),
            blood: 0,
            totalBlood: 0,
            bloodUpgLvl: 0,
            damageUpgLvl: 0,
            respawnUpgLvl: 0,
            estateLvl: 0,
            
            // Жертва
            currentVictimIdx: 0, // 0 = Муха
            currentVictimHp: 100,
            respawnTimeEnd: 0
        };
    }
    if (state.vampireEvent.energy === undefined) state.vampireEvent.energy = 2000;
    if (state.vampireEvent.blood === undefined) state.vampireEvent.blood = 0;
}

function getRespawnCooldownSec() {
    const lvl = state.vampireEvent.respawnUpgLvl || 0;
    return lvl > 0 ? RESPAWN_UPGRADES[lvl - 1].timeSec : 30;
}

function getDamagePerClick() {
    const lvl = state.vampireEvent.damageUpgLvl || 0;
    return lvl > 0 ? DAMAGE_UPGRADES[lvl - 1].mult : 1;
}

function getBloodMultiplier() {
    const lvl = state.vampireEvent.bloodUpgLvl || 0;
    return lvl > 0 ? BLOOD_UPGRADES[lvl - 1].mult : 1;
}

function getVampireEstateAuraIncome() {
    if (!state.vampireEvent || !state.vampireEvent.estateLvl) return 0;
    const lvl = state.vampireEvent.estateLvl;
    return lvl > 0 && lvl <= 5 ? ESTATE_LEVELS[lvl - 1].income : 0;
}

// ------------------------------------------
// ОНОВЛЕННЯ ЛОГІКИ
// ------------------------------------------
function updateEventLogic(dt) {
    initEventState();

    // Відновлення 2000 енергії за 3 години (10800 секунд)
    const MAX_ENERGY = 2000;
    const REGEN_TOTAL_MS = 3 * 60 * 60 * 1000; // 3 години
    const REGEN_PER_MS = MAX_ENERGY / REGEN_TOTAL_MS;

    if (state.vampireEvent.energy < MAX_ENERGY) {
        const now = getCurrentTime();
        const elapsed = now - state.vampireEvent.lastEnergyTime;
        if (elapsed > 0) {
            state.vampireEvent.energy = Math.min(MAX_ENERGY, state.vampireEvent.energy + (elapsed * REGEN_PER_MS));
            state.vampireEvent.lastEnergyTime = now;
        }
    } else {
        state.vampireEvent.lastEnergyTime = getCurrentTime();
    }

    updateVampireUI();
}

function updateVampireUI() {
    const energyEl = document.getElementById('vamp-energy-val');
    const bloodEl = document.getElementById('vamp-blood-val');
    if (energyEl) energyEl.textContent = `⚡ Енергія: ${Math.floor(state.vampireEvent.energy)} / 2000`;
    if (bloodEl) bloodEl.textContent = `🩸 Кров: ${typeof formatNum === 'function' ? formatNum(state.vampireEvent.blood) : state.vampireEvent.blood}`;
}

// ------------------------------------------
// МЕХАНІКА КЛІКУ ТА СПАВНУ ЖЕРТВ
// ------------------------------------------
function getRandomNextVictimIdx() {
    const rand = Math.random();
    let cumulative = 0;
    for (let i = 0; i < VICTIMS_DATA.length; i++) {
        cumulative += VICTIMS_DATA[i].chance;
        if (rand <= cumulative) return i;
    }
    return 0;
}

function attackVictim() {
    initEventState();
    const ev = state.vampireEvent;

    if (ev.respawnTimeEnd > getCurrentTime()) return; // Чекаємо спавну
    if (ev.energy < 1) {
        alert("Недостатньо енергії івенту!");
        return;
    }

    const victim = VICTIMS_DATA[ev.currentVictimIdx];
    const dmg = getDamagePerClick();

    ev.energy -= 1;
    ev.currentVictimHp -= dmg;

    if (typeof playClickSound === 'function') playClickSound();

    if (ev.currentVictimHp <= 0) {
        // Жертву вбито!
        const earnedBlood = victim.blood * getBloodMultiplier();
        ev.blood += earnedBlood;
        ev.totalBlood += earnedBlood;

        // Таймер появи наступної жертви
        const cd = getRespawnCooldownSec();
        ev.respawnTimeEnd = getCurrentTime() + (cd * 1000);
        ev.currentVictimIdx = getRandomNextVictimIdx();

        if (typeof saveGame === 'function') saveGame();
    }

    renderEventUI();
}

function changeVictimFor100Energy() {
    initEventState();
    const ev = state.vampireEvent;

    if (ev.energy < 100) {
        alert("Необхідно 100 енергії івенту для зміни жертви!");
        return;
    }

    ev.energy -= 100;
    ev.currentVictimIdx = getRandomNextVictimIdx();
    const cd = getRespawnCooldownSec();
    ev.respawnTimeEnd = getCurrentTime() + (cd * 1000);

    if (typeof saveGame === 'function') saveGame();
    renderEventUI();
}

// ------------------------------------------
// КУПІВЛЯ ПРОКАЧОК
// ------------------------------------------
function buyBloodUpgrade() {
    initEventState();
    const ev = state.vampireEvent;
    const nextLvl = ev.bloodUpgLvl + 1;
    if (nextLvl > BLOOD_UPGRADES.length) return;

    const upg = BLOOD_UPGRADES[nextLvl - 1];
    if (ev.blood >= upg.cost) {
        ev.blood -= upg.cost;
        ev.bloodUpgLvl = nextLvl;
        if (typeof saveGame === 'function') saveGame();
        renderEventUI();
    }
}

function buyDamageUpgrade() {
    initEventState();
    const ev = state.vampireEvent;
    const nextLvl = ev.damageUpgLvl + 1;
    if (nextLvl > DAMAGE_UPGRADES.length) return;

    const upg = DAMAGE_UPGRADES[nextLvl - 1];
    if (ev.blood >= upg.cost) {
        ev.blood -= upg.cost;
        ev.damageUpgLvl = nextLvl;
        if (typeof saveGame === 'function') saveGame();
        renderEventUI();
    }
}

function buyRespawnUpgrade() {
    initEventState();
    const ev = state.vampireEvent;
    const nextLvl = ev.respawnUpgLvl + 1;
    if (nextLvl > RESPAWN_UPGRADES.length) return;

    const upg = RESPAWN_UPGRADES[nextLvl - 1];
    if (state.aura >= upg.costAura) {
        state.aura -= upg.costAura;
        ev.respawnUpgLvl = nextLvl;
        if (typeof saveGame === 'function') saveGame();
        renderEventUI();
    }
}

function buyEstateLevel(lvl) {
    initEventState();
    const ev = state.vampireEvent;
    if (ev.estateLvl !== lvl - 1) return;

    const estate = ESTATE_LEVELS[lvl - 1];
    if (ev.blood >= estate.costBlood) {
        ev.blood -= estate.costBlood;
        ev.estateLvl = lvl;
        if (typeof saveGame === 'function') saveGame();
        renderEventUI();
    }
}

function switchEventSubTab(tab) {
    eventSubTab = tab;
    renderEventUI();
}

// ------------------------------------------
// ІНТЕРФЕЙС ІВЕНТУ
// ------------------------------------------
function renderEventUI() {
    const container = document.getElementById('tab-event');
    if (!container) return;

    initEventState();
    const ev = state.vampireEvent;
    const now = getCurrentTime();

    let html = `
        <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 12px; border-radius: 12px; border: 2px solid #e74c3c; margin-bottom: 12px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #e74c3c;">🦇 Новий Івент: Полювання Вампіра</div>
            <div style="display: flex; justify-content: space-around; margin-top: 10px; font-weight: bold; font-size: 0.95rem;">
                <span id="vamp-energy-val" style="color: #3498db;">⚡ Енергія: ${Math.floor(ev.energy)} / 2000</span>
                <span id="vamp-blood-val" style="color: #e74c3c;">🩸 Кров: ${typeof formatNum === 'function' ? formatNum(ev.blood) : ev.blood}</span>
            </div>
        </div>

        <div class="leaderboard-toggle" style="margin-bottom: 15px;">
            <button class="sub-tab-btn ${eventSubTab === 'victim' ? 'active' : ''}" onclick="switchEventSubTab('victim')">🎯 Жертва</button>
            <button class="sub-tab-btn ${eventSubTab === 'upgrades' ? 'active' : ''}" onclick="switchEventSubTab('upgrades')">⚡ Прокачки</button>
            <button class="sub-tab-btn ${eventSubTab === 'estate' ? 'active' : ''}" onclick="switchEventSubTab('estate')">🏰 Маєток вампіра</button>
        </div>
    `;

    if (eventSubTab === 'victim') {
        const isCooldown = ev.respawnTimeEnd > now;
        const targetVictim = VICTIMS_DATA[ev.currentVictimIdx];

        if (isCooldown) {
            const secLeft = Math.ceil((ev.respawnTimeEnd - now) / 1000);
            html += `
                <div style="text-align: center; padding: 40px 15px; background: var(--card-bg); border-radius: 16px; border: 2px solid #e74c3c; width: 100%;">
                    <div style="font-size: 3rem;">⏳</div>
                    <h3 style="color: #e74c3c; margin-top: 10px;">Пошук наступної жертви...</h3>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent-gold); margin-top: 10px;">${secLeft} сек</div>
                </div>
            `;
            setTimeout(renderEventUI, 1000);
        } else {
            // Встановлюємо початкове HP для нової жертви
            if (ev.currentVictimHp <= 0) ev.currentVictimHp = targetVictim.hp;

            const hpPct = Math.max(0, Math.min(100, (ev.currentVictimHp / targetVictim.hp) * 100));
            html += `
                <div style="width: 100%; text-align: center; background: var(--card-bg); padding: 20px; border-radius: 16px; border: 2px solid #e74c3c;">
                    <div style="font-size: 4rem; cursor: pointer;" onclick="attackVictim()">${targetVictim.icon}</div>
                    <h2 style="color: #fff; margin-top: 5px;">${targetVictim.name}</h2>
                    <div style="color: #e74c3c; font-weight: bold; margin-top: 4px;">Нагорода: +${targetVictim.blood * getBloodMultiplier()} 🩸</div>

                    <div class="progress-bar-container" style="margin: 15px 0; height: 20px;">
                        <div class="progress-bar-fill" style="width: ${hpPct}%; background: #e74c3c;"></div>
                    </div>
                    <div style="font-size: 0.9rem; font-weight: bold;">❤️ HP: ${ev.currentVictimHp} / ${targetVictim.hp}</div>

                    <div style="display: flex; gap: 10px; margin-top: 20px;">
                        <button class="modal-btn" style="flex: 2; background: linear-gradient(180deg, #e74c3c, #c0392b);" onclick="attackVictim()">🗡️ Ударити (1 ⚡)</button>
                        <button class="modal-btn" style="flex: 1; background: #7f8c8d; font-size: 0.85rem;" onclick="changeVictimFor100Energy()">🔄 Змінити (100 ⚡)</button>
                    </div>
                </div>
            `;
        }
    } else if (eventSubTab === 'upgrades') {
        html += `<div class="upgrades-list">`;

        // 1. Прокачка Множника Крові
        html += `<div class="category-title">🩸 Множник Крові</div>`;
        const nextBloodLvl = ev.bloodUpgLvl + 1;
        if (nextBloodLvl <= BLOOD_UPGRADES.length) {
            const upg = BLOOD_UPGRADES[nextBloodLvl - 1];
            html += `
                <div class="upgrade-card">
                    <div class="upgrade-img-wrap"><span style="font-size: 2rem;">🩸</span></div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">х${upg.mult} кров</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${upg.cost} крові</div>
                    </div>
                    <button class="upgrade-btn" ${ev.blood >= upg.cost ? '' : 'disabled'} onclick="buyBloodUpgrade()">Прокачати</button>
                </div>`;
        } else {
            html += `<div style="color: #2ecc71; text-align: center; padding: 10px;">Максимальний рівень крові!</div>`;
        }

        // 2. Прокачка Шкоди
        html += `<div class="category-title" style="margin-top: 20px;">🗡️ Множник Шкоди</div>`;
        const nextDmgLvl = ev.damageUpgLvl + 1;
        if (nextDmgLvl <= DAMAGE_UPGRADES.length) {
            const upg = DAMAGE_UPGRADES[nextDmgLvl - 1];
            html += `
                <div class="upgrade-card">
                    <div class="upgrade-img-wrap"><span style="font-size: 2rem;">⚔️</span></div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">х${upg.mult} шкода</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${typeof formatNum === 'function' ? formatNum(upg.cost) : upg.cost} крові</div>
                    </div>
                    <button class="upgrade-btn" ${ev.blood >= upg.cost ? '' : 'disabled'} onclick="buyDamageUpgrade()">Прокачати</button>
                </div>`;
        } else {
            html += `<div style="color: #2ecc71; text-align: center; padding: 10px;">Максимальний рівень шкоди!</div>`;
        }

        // 3. Прокачка Часу появи
        html += `<div class="category-title" style="margin-top: 20px;">⏱️ Час появи жертви</div>`;
        const nextRespLvl = ev.respawnUpgLvl + 1;
        if (nextRespLvl <= RESPAWN_UPGRADES.length) {
            const upg = RESPAWN_UPGRADES[nextRespLvl - 1];
            html += `
                <div class="upgrade-card">
                    <div class="upgrade-img-wrap"><span style="font-size: 2rem;">⏳</span></div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">Час появи: ${upg.timeSec}с</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${typeof formatNum === 'function' ? formatNum(upg.costAura) : upg.costAura} аури</div>
                    </div>
                    <button class="upgrade-btn" ${state.aura >= upg.costAura ? '' : 'disabled'} onclick="buyRespawnUpgrade()">Прокачати</button>
                </div>`;
        } else {
            html += `<div style="color: #2ecc71; text-align: center; padding: 10px;">Мінімальний час досягнуто (15с)!</div>`;
        }

        html += `</div>`;
    } else if (eventSubTab === 'estate') {
        html += `<div class="upgrades-list"><div class="category-title">🏰 Рівні Маєтку Вампіра</div>`;

        ESTATE_LEVELS.forEach(est => {
            const isOwned = ev.estateLvl >= est.level;
            const canBuy = ev.estateLvl === est.level - 1 && ev.blood >= est.costBlood;

            html += `
                <div class="upgrade-card ${isOwned ? 'evo-card' : ''}">
                    <div class="upgrade-img-wrap"><span style="font-size: 2rem;">🏰</span></div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">${est.level} рівень</div>
                        <div class="upgrade-desc">Дохід: +${typeof formatNum === 'function' ? formatNum(est.income) : est.income} аури/сек</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${est.costBlood} крові</div>
                    </div>
                    <button class="upgrade-btn" ${isOwned ? 'disabled' : (canBuy ? '' : 'disabled')} onclick="buyEstateLevel(${est.level})">
                        ${isOwned ? 'Куплено' : 'Купити'}
                    </button>
                </div>`;
        });

        html += `
            <div style="text-align: center; color: #888; padding: 15px; font-weight: bold;">
                🔒 6-10 рівні з'являться згодом.
            </div>
        </div>`;
    }

    container.innerHTML = html;
}
