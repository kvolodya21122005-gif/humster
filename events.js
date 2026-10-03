// ==========================================
// ЛОГІКА ІВЕНТІВ (НОВИЙ ВАМПІРСЬКИЙ ІВЕНТ)
// ==========================================

const VAMPIRE_EVENT_ID = 'vampire_event_v1';

// Конфігурація жертв
const VICTIMS_DATA = [
    { id: 'fly', name: 'Муха', hp: 100, blood: 2, icon: '🪰', chance: 0.40 },
    { id: 'lizard', name: 'Ящірка', hp: 500, blood: 8, icon: '🦎', chance: 0.30 },
    { id: 'mouse', name: 'Миша', hp: 1000, blood: 14, icon: '🖱️', chance: 0.20 },
    { id: 'chicken', name: 'Курка', hp: 2000, blood: 25, icon: '🐔', chance: 0.08 },
    { id: 'goose', name: 'Гуска', hp: 3000, blood: 35, icon: '🪿', chance: 0.02 }
];

// 1. Прокачка Крові
const BLOOD_UPGRADES = [
    { level: 1, mult: 2, cost: 2 },
    { level: 2, mult: 3, cost: 5 },
    { level: 3, mult: 4, cost: 10 },
    { level: 4, mult: 5, cost: 40 },
    { level: 5, mult: 6, cost: 100 },
    { level: 6, mult: 7, cost: 250 },
    { level: 7, mult: 8, cost: 300 },
    { level: 8, mult: 9, cost: 500 },
    { level: 9, mult: 10, cost: 700 },
    { level: 10, mult: 11, cost: 1000 },
    { level: 11, mult: 12, cost: 1300 },
    { level: 12, mult: 13, cost: 1500 },
    { level: 13, mult: 14, cost: 1750 },
    { level: 14, mult: 15, cost: 2000 },
    { level: 15, mult: 16, cost: 2300 }
];

// 2. Прокачка Шкоди
const DAMAGE_UPGRADES = [
    { level: 1, mult: 2, cost: 3 },
    { level: 2, mult: 4, cost: 150 },
    { level: 3, mult: 8, cost: 600 },
    { level: 4, mult: 16, cost: 1500 },
    { level: 5, mult: 32, cost: 5000 },
    { level: 6, mult: 64, cost: 15000 }
];

// 3. Прокачка Часу появи
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
    { level: 5, income: 250000, costBlood: 1200 },
    { level: 6, income: 300000, costBlood: 2000 },
    { level: 7, income: 350000, costBlood: 3000 },
    { level: 8, income: 400000, costBlood: 5000 }
];

let eventSubTab = 'victim'; // 'victim', 'upgrades', 'estate', 'leaderboard'
let vampireUiTimer = null;

function getCurrentTime() {
    return (typeof getServerTime === 'function') ? getServerTime() : Date.now();
}

// Синхронізація лідерборду по крові у Firebase
function syncBloodLeaderboard() {
    if (typeof dbAvailable === 'undefined' || !dbAvailable || !state.playerId || !state.nickname) return;
    if (!state.vampireEvent) return;
    try {
        firebase.database().ref('leaderboard_vampire/' + state.playerId).set({
            name: state.nickname,
            blood: Math.floor(state.vampireEvent.blood || 0),
            totalBlood: Math.floor(state.vampireEvent.totalBlood || 0),
            updatedAt: firebase.database.ServerValue.TIMESTAMP
        });
    } catch(e) {
        console.warn("Помилка синхронізації лідерборду вампірів:", e);
    }
}

function syncChemicalsLeaderboard() {
    syncBloodLeaderboard();
}

// ------------------------------------------
// КОНВЕРТАЦІЯ ТА ЗБЕРЕЖЕННЯ ЛАБОРАТОРІЇ У СТАТУЇ
// ------------------------------------------
function checkAndConvertLabEvent() {
    if (state.event && state.event.eventId === 'laboratory_event_v1' && !state.labEventFinished) {
        if (!state.statues) state.statues = {};
        const labLvl = state.event.labLvl || 10;
        state.statues.laboratory = {
            name: "Лабораторія (Хімікати)",
            lvl: labLvl,
            maxLvl: 10,
            cps: labLvl * 30000,
            img: "img/statue_lab.jpg"
        };

        const chem = state.event.chemicals || 0;
        const convertedAura = chem * 5000;
        state.aura = (state.aura || 0) + convertedAura;
        state.totalAura = (state.totalAura || 0) + convertedAura;

        state.labEventFinished = true;

        setTimeout(() => {
            alert(`🧪 Івент "Лабораторія" завершено!\n\n` +
                  `• Вашу Лабораторію (${labLvl} рівень) перенесено у список статуй (+${typeof formatNum === 'function' ? formatNum(labLvl * 50000) : labLvl * 50000} аури/сек).\n` +
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
        const defaultVictimIdx = 0;
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
            
            currentVictimIdx: defaultVictimIdx,
            currentVictimHp: VICTIMS_DATA[defaultVictimIdx].hp,
            respawnTimeEnd: 0
        };
    }
    
    if (state.vampireEvent.energy === undefined || isNaN(state.vampireEvent.energy)) state.vampireEvent.energy = 2000;
    if (state.vampireEvent.blood === undefined || isNaN(state.vampireEvent.blood)) state.vampireEvent.blood = 0;
    if (state.vampireEvent.totalBlood === undefined || isNaN(state.vampireEvent.totalBlood)) state.vampireEvent.totalBlood = state.vampireEvent.blood;
    if (!state.vampireEvent.lastEnergyTime || isNaN(state.vampireEvent.lastEnergyTime)) {
        state.vampireEvent.lastEnergyTime = getCurrentTime();
    }
    
    const vIdx = state.vampireEvent.currentVictimIdx || 0;
    const targetV = VICTIMS_DATA[vIdx] || VICTIMS_DATA[0];
    if (state.vampireEvent.currentVictimHp === undefined || isNaN(state.vampireEvent.currentVictimHp) || state.vampireEvent.currentVictimHp <= 0) {
        state.vampireEvent.currentVictimHp = targetV.hp;
    }
}

function getRespawnCooldownSec() {
    const lvl = state.vampireEvent ? (state.vampireEvent.respawnUpgLvl || 0) : 0;
    return lvl > 0 ? RESPAWN_UPGRADES[lvl - 1].timeSec : 30;
}

function getDamagePerClick() {
    const lvl = state.vampireEvent ? (state.vampireEvent.damageUpgLvl || 0) : 0;
    return lvl > 0 ? DAMAGE_UPGRADES[lvl - 1].mult : 1;
}

function getBloodMultiplier() {
    const lvl = state.vampireEvent ? (state.vampireEvent.bloodUpgLvl || 0) : 0;
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

    const MAX_ENERGY = 2000;
    const REGEN_TOTAL_MS = 3 * 60 * 60 * 1000; // 3 години
    const REGEN_PER_MS = MAX_ENERGY / REGEN_TOTAL_MS;

    const now = getCurrentTime();
    if (state.vampireEvent.energy < MAX_ENERGY) {
        const elapsed = now - state.vampireEvent.lastEnergyTime;
        if (elapsed > 0) {
            state.vampireEvent.energy = Math.min(MAX_ENERGY, state.vampireEvent.energy + (elapsed * REGEN_PER_MS));
            state.vampireEvent.lastEnergyTime = now;
        }
    } else {
        state.vampireEvent.lastEnergyTime = now;
    }

    updateVampireUI();
}

function updateVampireUI() {
    const energyEl = document.getElementById('vamp-energy-val');
    const bloodEl = document.getElementById('vamp-blood-val');
    if (energyEl && state.vampireEvent) {
        energyEl.textContent = `⚡ Енергія: ${Math.floor(state.vampireEvent.energy)} / 2000`;
    }
    if (bloodEl && state.vampireEvent) {
        bloodEl.textContent = `🩸 Кров: ${typeof formatNum === 'function' ? formatNum(state.vampireEvent.blood) : state.vampireEvent.blood}`;
    }
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
    updateEventLogic();
    const ev = state.vampireEvent;

    if (ev.respawnTimeEnd > getCurrentTime()) return;
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
        const earnedBlood = victim.blood * getBloodMultiplier();
        ev.blood += earnedBlood;
        ev.totalBlood += earnedBlood;

        const cd = getRespawnCooldownSec();
        ev.respawnTimeEnd = getCurrentTime() + (cd * 1000);
        
        // Знаходимо нову жертву і задаємо її ХП
        ev.currentVictimIdx = getRandomNextVictimIdx();
        ev.currentVictimHp = VICTIMS_DATA[ev.currentVictimIdx].hp;

        syncBloodLeaderboard();
        if (typeof saveGame === 'function') saveGame();
    }

    renderEventUI();
}

function changeVictimFor100Energy() {
    updateEventLogic();
    const ev = state.vampireEvent;

    if (ev.energy < 100) {
        alert("Необхідно 100 енергії івенту для зміни жертви!");
        return;
    }

    ev.energy -= 100;
    
    // Встановлюємо нову жертву та її власне повне ХП
    ev.currentVictimIdx = getRandomNextVictimIdx();
    ev.currentVictimHp = VICTIMS_DATA[ev.currentVictimIdx].hp;
    
    const cd = getRespawnCooldownSec();
    ev.respawnTimeEnd = getCurrentTime() + (cd * 1000);

    syncBloodLeaderboard();
    if (typeof saveGame === 'function') saveGame();
    renderEventUI();
}

// ------------------------------------------
// КУПІВЛЯ ПРОКАЧОК
// ------------------------------------------
function buyBloodUpgrade() {
    updateEventLogic();
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
    updateEventLogic();
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
    updateEventLogic();
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
    updateEventLogic();
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
// ТОП З КРОВІ
// ------------------------------------------
function renderVampireLeaderboard() {
    const list = document.getElementById('vampire-leaderboard-list');
    if (!list) return;

    if (typeof dbAvailable === 'undefined' || !dbAvailable) {
        list.innerHTML = `
            <div class="empty-leaderboard">
                <p style="color: var(--accent-gold); font-size: 1.1rem; margin-bottom: 10px;">⚠️ Firebase не підключено!</p>
                <div class="leaderboard-item is-player">
                    <div class="leaderboard-rank">🥇</div>
                    <div class="leaderboard-name">${state.nickname || "Ви"} (Локально)</div>
                    <div class="leaderboard-cps" style="color: #e74c3c;">${typeof formatNum === 'function' ? formatNum(state.vampireEvent ? state.vampireEvent.blood : 0) : 0} 🩸</div>
                </div>
            </div>`;
        return;
    }

    firebase.database().ref('leaderboard_vampire').orderByChild('totalBlood').limitToLast(50).once('value', (snapshot) => {
        const data = snapshot.val();
        const players = [];

        if (data) {
            Object.keys(data).forEach(id => {
                players.push({
                    id: id,
                    name: data[id].name || "Вампір",
                    blood: data[id].blood || 0,
                    totalBlood: data[id].totalBlood || 0,
                    isPlayer: id === state.playerId
                });
            });
        }

        players.sort((a, b) => (b.totalBlood || b.blood || 0) - (a.totalBlood || a.blood || 0));
        list.innerHTML = '';

        if (players.length === 0) {
            list.innerHTML = `<div class="empty-leaderboard">Завантаження або немає даних...</div>`;
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
                <div class="leaderboard-cps" style="color: #e74c3c;">${typeof formatNum === 'function' ? formatNum(p.totalBlood || p.blood) : (p.totalBlood || p.blood)} 🩸</div>
            `;
            list.appendChild(item);
        });
    }).catch(err => {
        console.warn("Помилка завантаження лідерборду вампірів:", err);
    });
}

// ------------------------------------------
// ІНТЕРФЕЙС ІВЕНТУ
// ------------------------------------------
function renderEventUI() {
    const container = document.getElementById('tab-event');
    if (!container) return;

    if (vampireUiTimer) clearTimeout(vampireUiTimer);

    updateEventLogic();
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
            <button class="sub-tab-btn ${eventSubTab === 'leaderboard' ? 'active' : ''}" onclick="switchEventSubTab('leaderboard')">🏆 Топ з крові</button>
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
        } else {
            if (ev.currentVictimHp === undefined || ev.currentVictimHp > targetVictim.hp || ev.currentVictimHp <= 0) {
                ev.currentVictimHp = targetVictim.hp;
            }

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

        if (isCooldown || ev.energy < 2000) {
            vampireUiTimer = setTimeout(renderEventUI, 1000);
        }
    } else if (eventSubTab === 'upgrades') {
        html += `<div class="upgrades-list">`;

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

        if (ev.energy < 2000) {
            vampireUiTimer = setTimeout(renderEventUI, 1000);
        }
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
                🔒 9-10 рівні з'являться згодом.
            </div>
        </div>`;

        if (ev.energy < 2000) {
            vampireUiTimer = setTimeout(renderEventUI, 1000);
        }
    } else if (eventSubTab === 'leaderboard') {
        html += `
            <div class="category-title" style="width: 100%; text-align: center;">🏆 Топ Вампірів за Кров'ю</div>
            <div id="vampire-leaderboard-list" class="leaderboard-list"></div>
        `;
        setTimeout(renderVampireLeaderboard, 50);
    }

    container.innerHTML = html;
}
