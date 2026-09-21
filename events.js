// ==========================================
// Івент: Заливання бетону для бруківки
// ==========================================

const CURRENT_EVENT_ID = 'concrete_paving_v1';

// Точні часові мітки розблокування (за Київом, UTC+3)
const UNLOCK_TIME_24H = 1790096400000; // 22.09 20:00 за Києвом
const UNLOCK_TIME_48H = 1790182800000; // 23.09 20:00 за Києвом
const EVENT_END_TIME   = 1790352000000; // 25.09 19:00 за Києвом

const MIXER_LEVELS = [
    { lvl: 1, waterReq: 1, cementReq: 1, concreteGain: 1, concreteCost: 0, auraCost: 0, img: 'img/mixer1.jpg' },
    { lvl: 2, waterReq: 1, cementReq: 10, concreteGain: 10, concreteCost: 25, auraCost: 100000000, img: 'img/mixer2.jpg' },
    { lvl: 3, waterReq: 1, cementReq: 100, concreteGain: 100, concreteCost: 500, auraCost: 500000000, img: 'img/mixer3.jpg' },
    { lvl: 4, waterReq: 1, cementReq: 500, concreteGain: 500, concreteCost: 10000, auraCost: 2000000000, img: 'img/mixer4.jpg' },
    { lvl: 5, waterReq: 1, cementReq: 2000, concreteGain: 2000, concreteCost: 50000, auraCost: 10000000000, img: 'img/mixer5.jpg' },
    { lvl: 6, waterReq: 1, cementReq: 6000, concreteGain: 6000, concreteCost: 250000, auraCost: 75000000000, img: 'img/mixer6.jpg' },
    { lvl: 7, waterReq: 1, cementReq: 10000, concreteGain: 10000, concreteCost: 1500000, auraCost: 200000000000, img: 'img/mixer7.jpg' }
];

const CEMENT_CARDS = [
    { id: 1, name: "Цементна яма", baseCost: 50000000, cps: 1, cdSec: 20, img: "img/cement1.jpg" },
    { id: 2, name: "Дробарка клінкеру", baseCost: 150000000, cps: 2, cdSec: 30, img: "img/cement2.jpg" },
    { id: 3, name: "Міні-завод цементу", baseCost: 400000000, cps: 4, cdSec: 40, img: "img/cement3.jpg" },
    { id: 4, name: "Силосний склад", baseCost: 1000000000, cps: 8, cdSec: 50, img: "img/cement4.jpg" },
    { id: 5, name: "Цементний кар'єр", baseCost: 2500000000, cps: 15, cdSec: 60, img: "img/cement5.jpg" },
    { id: 6, name: "Цементний холдинг", baseCost: 5000000000, cps: 25, cdSec: 75, img: "img/cement6.jpg" },
    { id: 7, name: "Глобальна корпорація", baseCost: 8000000000, cps: 35, cdSec: 90, img: "img/cement7.jpg" }
];

const PAVING_LEVELS = [
    { lvl: 1, name: "Базове укладання бруківки", cost: 1000, auraGainPerSec: 5000000, img: "img/paving1.jpg" },
    { lvl: 2, name: "Тротуарна бруківка", cost: 10000, auraGainPerSec: 25000000, img: "img/paving2.jpg" },
    { lvl: 3, name: "Площа з візерунками", cost: 100000, auraGainPerSec: 150000000, img: "img/paving3.jpg" },
    { lvl: 4, name: "Проспект Перемоги", cost: 500000, auraGainPerSec: 800000000, img: "img/paving4.jpg" },
    { lvl: 5, name: "Золотий проспект", cost: 2000000, auraGainPerSec: 4000000000, img: "img/paving5.jpg" },
    { lvl: 6, name: "Монолітна магістраль", cost: 10000000, auraGainPerSec: 25000000000, img: "img/paving6.jpg" },
    { lvl: 7, name: "Імператорський бетонний комплекс", cost: 50000000, auraGainPerSec: 150000000000, img: "img/paving7.jpg" }
];

let currentEventSubTab = 'mixer';

function getCurrentTime() {
    return (typeof getServerTime === 'function') ? getServerTime() : Date.now();
}

function initEventState() {
    if (!state.event || state.event.eventId !== CURRENT_EVENT_ID) {
        state.event = {
            eventId: CURRENT_EVENT_ID,
            water: 1000,
            maxWater: 1000,
            cement: 0,
            totalCement: 0,
            concrete: 0,
            totalConcrete: 0,
            mixerLvl: 1,
            pavingLvl: 0,
            cards: {},
            cooldowns: {}
        };
    }
    if (!state.event.cards) state.event.cards = {};
    if (!state.event.cooldowns) state.event.cooldowns = {};
    if (state.event.water === undefined) state.event.water = 1000;
    if (state.event.maxWater === undefined) state.event.maxWater = 1000;
    if (state.event.cement === undefined) state.event.cement = 0;
    if (state.event.concrete === undefined) state.event.concrete = 0;
    if (state.event.mixerLvl === undefined) state.event.mixerLvl = 1;
    if (state.event.pavingLvl === undefined) state.event.pavingLvl = 0;
}

// Хелпери розблокування
function getCardUnlockTime(cardId) {
    if (cardId === 6) return UNLOCK_TIME_24H; // Цементний холдинг (22.09 20:00)
    if (cardId === 7) return UNLOCK_TIME_48H; // Глобальна корпорація (23.09 20:00)
    return 0;
}

function isCardUnlocked(cardId) {
    const unlockTime = getCardUnlockTime(cardId);
    if (unlockTime === 0) return true;
    return getCurrentTime() >= unlockTime;
}

function getMixerUnlockTime(lvl) {
    if (lvl === 7) return UNLOCK_TIME_24H; // Мішалка 7 лвл (22.09 20:00)
    return 0;
}

function isMixerUnlocked(lvl) {
    const unlockTime = getMixerUnlockTime(lvl);
    if (unlockTime === 0) return true;
    return getCurrentTime() >= unlockTime;
}

function formatTimeRemaining(targetTime) {
    const diff = targetTime - getCurrentTime();
    if (diff <= 0) return '00:00:00';
    const totalSec = Math.floor(diff / 1000);
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    
    if (hrs >= 24) {
        const days = Math.floor(hrs / 24);
        const remHrs = hrs % 24;
        return `${days}д ${remHrs}г ${mins}хв`;
    }
    return `${hrs}г ${mins < 10 ? '0' : ''}${mins}хв ${secs < 10 ? '0' : ''}${secs}с`;
}

function getTotalCementPerSec() {
    let cps = 0;
    CEMENT_CARDS.forEach(c => {
        if (isCardUnlocked(c.id)) {
            const count = (state.event && state.event.cards && state.event.cards[c.id]) || 0;
            cps += count * c.cps;
        }
    });
    return cps;
}

function getStatueAuraIncome() {
    if (!state.event || !state.event.pavingLvl) return 0;
    const paving = PAVING_LEVELS.find(p => p.lvl === state.event.pavingLvl);
    return paving ? paving.auraGainPerSec : 0;
}

function updateEventLogic(dt) {
    if (!state.event) return;

    // Відновлення води (1000 за 30 хв)
    if (state.event.water < state.event.maxWater) {
        const regenWater = (state.event.maxWater / 1800) * dt;
        state.event.water = Math.min(state.event.maxWater, state.event.water + regenWater);
    }

    // Пасивне добування цементу від відкритих місць
    const cps = getTotalCementPerSec();
    if (cps > 0) {
        const gained = cps * dt;
        state.event.cement += gained;
        state.event.totalCement = (state.event.totalCement || 0) + gained;
    }

    updateEventCountersUI();
}

function clickMixer(event) {
    initEventState();
    const currentMixer = MIXER_LEVELS[state.event.mixerLvl - 1] || MIXER_LEVELS[0];

    if (state.event.water < currentMixer.waterReq) return;
    if (state.event.cement < currentMixer.cementReq) return;

    state.event.water -= currentMixer.waterReq;
    state.event.cement -= currentMixer.cementReq;

    const gainedConcrete = currentMixer.concreteGain;
    state.event.concrete += gainedConcrete;
    state.event.totalConcrete = (state.event.totalConcrete || 0) + gainedConcrete;

    if (typeof playClickSound === 'function') playClickSound();

    const img = document.getElementById('event-mixer-img');
    if (img) {
        img.classList.remove('mixer-shake');
        void img.offsetWidth;
        img.classList.add('mixer-shake');
    }

    if (event) {
        spawnFloatingConcreteText(event.clientX, event.clientY, `+${formatNum(gainedConcrete)} 🏗️`);
    }

    updateEventCountersUI();
    saveGame();
}

function spawnFloatingConcreteText(x, y, text) {
    const el = document.createElement('div');
    el.className = 'floating-text-concrete';
    el.innerText = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    setTimeout(() => { el.remove(); }, 800);
}

function getCementCardCost(c) {
    const count = (state.event.cards && state.event.cards[c.id]) || 0;
    let cost = c.baseCost;
    for (let i = 1; i <= count; i++) {
        cost *= (1 + 0.08 * i);
    }
    return Math.floor(cost);
}

function buyCementCard(cardId) {
    initEventState();
    const card = CEMENT_CARDS.find(c => c.id === cardId);
    if (!card) return;

    if (!isCardUnlocked(cardId)) return;

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

    if (!isMixerUnlocked(targetLvl)) return;

    if (state.event.concrete >= targetMixer.concreteCost && state.aura >= targetMixer.auraCost) {
        state.event.concrete -= targetMixer.concreteCost;
        state.aura -= targetMixer.auraCost;
        state.event.mixerLvl = targetLvl;

        saveGame();
        renderEventUI();
    }
}

function buyPavingUpgrade(targetLvl) {
    initEventState();
    const paving = PAVING_LEVELS.find(p => p.lvl === targetLvl);
    if (!paving) return;

    if (state.event.pavingLvl >= targetLvl) return;
    if (targetLvl !== state.event.pavingLvl + 1) return;

    if (state.event.concrete >= paving.cost) {
        state.event.concrete -= paving.cost;
        state.event.pavingLvl = targetLvl;

        saveGame();
        renderEventUI();
    }
}

function switchEventSubTab(subTab) {
    currentEventSubTab = subTab;
    renderEventUI();
}

function renderEventHeader() {
    const endDiff = EVENT_END_TIME - getCurrentTime();
    let timeText = '';
    if (endDiff > 0) {
        timeText = `⏳ Закінчиться 25.09 о 19:00 (Залишилось: ${formatTimeRemaining(EVENT_END_TIME)})`;
    } else {
        timeText = `🏁 Івент закінчився (25.09 о 19:00)`;
    }

    return `
        <div style="width: 100%; background: linear-gradient(135deg, #1e1730, #2a1b4e); border: 2px solid var(--accent-cyan); border-radius: 16px; padding: 12px; margin-bottom: 12px; text-align: center; box-shadow: 0 4px 15px rgba(0,210,211,0.2);">
            <div style="font-size: 1.15rem; font-weight: 900; color: var(--accent-cyan); margin-bottom: 4px;">
                🏗️ Івент: Заливання бетону для бруківки
            </div>
            <div style="font-size: 0.85rem; font-weight: bold; color: var(--accent-gold); background: rgba(0,0,0,0.4); padding: 4px 10px; border-radius: 10px; display: inline-block;">
                ${timeText}
            </div>
        </div>
    `;
}

function updateEventCountersUI() {
    if (!state.event) return;

    const waterEl = document.getElementById('event-water-val');
    const cementEl = document.getElementById('event-cement-val');
    const cementCpsEl = document.getElementById('event-cement-cps');
    const concreteEl = document.getElementById('event-concrete-val');

    if (waterEl) waterEl.innerText = `${Math.floor(state.event.water)} / ${state.event.maxWater}`;
    if (cementEl) cementEl.innerText = formatNum(state.event.cement);
    if (cementCpsEl) cementCpsEl.innerText = `+${formatNum(getTotalCementPerSec())}/сек`;
    if (concreteEl) concreteEl.innerText = formatNum(state.event.concrete);
}

function renderSubTabMixer() {
    const currentMixer = MIXER_LEVELS[state.event.mixerLvl - 1] || MIXER_LEVELS[0];
    const canClick = state.event.water >= currentMixer.waterReq && state.event.cement >= currentMixer.cementReq;

    return `
        <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
            <div style="font-size: 1rem; font-weight: bold; color: #fff; margin-bottom: 8px;">
                Активна: <span style="color: var(--accent-cyan);">Бетономішалка ${currentMixer.lvl} лвл</span>
            </div>
            
            <div class="mixer-container" onclick="clickMixer(event)">
                <div class="mixer-image-wrap">
                    <img id="event-mixer-img" src="${currentMixer.img}" alt="Бетономішалка" class="mixer-image" onerror="this.onerror=null; this.src='img/beton.jpg';">
                </div>
            </div>

            <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--accent-cyan); border-radius: 12px; padding: 10px 16px; margin-top: 10px; text-align: center; width: 100%; max-width: 320px;">
                <div style="font-size: 0.85rem; color: #aaa; margin-bottom: 4px;">Витрати на 1 заміс:</div>
                <div style="font-size: 0.95rem; font-weight: bold; color: #fff;">
                    💧 ${currentMixer.waterReq}л води | 🧱 ${formatNum(currentMixer.cementReq)} цементу
                </div>
                <div style="font-size: 0.95rem; font-weight: bold; color: var(--accent-cyan); margin-top: 4px;">
                    Отримаєш: +${formatNum(currentMixer.concreteGain)} 🏗️ бетону
                </div>
            </div>
            ${!canClick ? `<div style="color: #e74c3c; font-size: 0.8rem; margin-top: 6px; font-weight: bold;">Нестача ресурсів для замісу!</div>` : ''}
        </div>
    `;
}

function renderSubTabCement() {
    let html = `<div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">`;

    CEMENT_CARDS.forEach(c => {
        const unlocked = isCardUnlocked(c.id);
        const count = (state.event.cards && state.event.cards[c.id]) || 0;
        const cost = getCementCardCost(c);
        const cdTime = state.event.cooldowns[c.id] || 0;
        const cdDiff = Math.max(0, Math.ceil((cdTime - getCurrentTime()) / 1000));
        const canAfford = state.aura >= cost;

        if (!unlocked) {
            const remTime = formatTimeRemaining(getCardUnlockTime(c.id));
            const dateStr = c.id === 6 ? '22.09 о 20:00' : '23.09 о 20:00';
            html += `
                <div class="upgrade-card" style="opacity: 0.7; border: 2px dashed #7f8c8d; background: #181224;">
                    <div class="upgrade-img-wrap">
                        <img src="${c.img}" class="upgrade-img" onerror="this.onerror=null; this.src='img/beton.jpg';">
                    </div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">${c.name}</div>
                        <div style="font-size: 0.8rem; color: #e74c3c; font-weight: bold; margin-top: 4px;">
                            🔒 Відкриється ${dateStr}
                        </div>
                        <div style="font-size: 0.75rem; color: #aaa;">
                            Залишилось: ${remTime}
                        </div>
                    </div>
                    <button class="upgrade-btn" disabled style="background: #555;">🔒 Заблоковано</button>
                </div>
            `;
        } else {
            let btnText = "Купити";
            let btnDisabled = false;

            if (cdDiff > 0) {
                btnText = `⏱️ ${cdDiff}с`;
                btnDisabled = true;
            } else if (!canAfford) {
                btnDisabled = true;
            }

            html += `
                <div class="upgrade-card">
                    <div class="upgrade-img-wrap">
                        <img src="${c.img}" class="upgrade-img" onerror="this.onerror=null; this.src='img/beton.jpg';">
                    </div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">${c.name} <span class="upgrade-level-badge">Рівень ${count}</span></div>
                        <div class="upgrade-desc">Видобуток: +${formatNum(count * c.cps)} цементу/сек (+${c.cps}/с)</div>
                        <div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(cost)} ✨ аури</div>
                    </div>
                    <button class="upgrade-btn" ${btnDisabled ? 'disabled' : ''} onclick="buyCementCard(${c.id})">${btnText}</button>
                </div>
            `;
        }
    });

    html += `</div>`;
    return html;
}

function renderSubTabMixers() {
    let html = `<div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">`;

    MIXER_LEVELS.forEach(m => {
        const unlocked = isMixerUnlocked(m.lvl);
        const isCurrent = state.event.mixerLvl === m.lvl;
        const isPast = state.event.mixerLvl > m.lvl;
        const isNext = state.event.mixerLvl + 1 === m.lvl;

        if (!unlocked) {
            const remTime = formatTimeRemaining(getMixerUnlockTime(m.lvl));
            html += `
                <div class="upgrade-card" style="opacity: 0.7; border: 2px dashed #7f8c8d; background: #181224;">
                    <div class="upgrade-img-wrap">
                        <img src="${m.img}" class="upgrade-img" onerror="this.onerror=null; this.src='img/beton.jpg';">
                    </div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">Бетономішалка ${m.lvl} лвл</div>
                        <div style="font-size: 0.8rem; color: #e74c3c; font-weight: bold; margin-top: 4px;">
                            🔒 Відкриється 22.09 о 20:00 (через 24 години)
                        </div>
                        <div style="font-size: 0.75rem; color: #aaa;">
                            Залишилось: ${remTime}
                        </div>
                    </div>
                    <button class="upgrade-btn" disabled style="background: #555;">🔒 Заблоковано</button>
                </div>
            `;
        } else {
            let statusBadge = '';
            let btnText = "Купити";
            let btnDisabled = false;

            if (isCurrent) {
                statusBadge = `<span class="upgrade-level-badge" style="background: #2ecc71;">Активна</span>`;
                btnText = "Використовується";
                btnDisabled = true;
            } else if (isPast) {
                statusBadge = `<span class="upgrade-level-badge" style="background: #7f8c8d;">Куплено</span>`;
                btnText = "Куплено";
                btnDisabled = true;
            } else if (isNext) {
                const canAffordConcrete = state.event.concrete >= m.concreteCost;
                const canAffordAura = state.aura >= m.auraCost;
                if (!canAffordConcrete || !canAffordAura) {
                    btnDisabled = true;
                }
            } else {
                btnDisabled = true;
                btnText = "Недоступно";
            }

            html += `
                <div class="upgrade-card ${isCurrent ? 'evo-card' : ''}">
                    <div class="upgrade-img-wrap">
                        <img src="${m.img}" class="upgrade-img" onerror="this.onerror=null; this.src='img/beton.jpg';">
                    </div>
                    <div class="upgrade-info">
                        <div class="upgrade-title">Бетономішалка ${m.lvl} лвл ${statusBadge}</div>
                        <div class="upgrade-desc">Дає: +${formatNum(m.concreteGain)} 🏗️ бетону / заміс</div>
                        <div class="upgrade-desc" style="color: #3498db;">Потреба: 💧 ${m.waterReq}л | 🧱 ${formatNum(m.cementReq)} цементу</div>
                        ${m.lvl > 1 ? `<div class="upgrade-desc" style="color: var(--accent-gold);">Ціна: ${formatNum(m.concreteCost)} 🏗️ + ${formatNum(m.auraCost)} ✨</div>` : ''}
                    </div>
                    ${!isCurrent && !isPast ? `<button class="upgrade-btn" ${btnDisabled ? 'disabled' : ''} onclick="buyMixer(${m.lvl})">${btnText}</button>` : ''}
                </div>
            `;
        }
    });

    html += `</div>`;
    return html;
}

function renderSubTabPaving() {
    let html = `<div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">`;

    PAVING_LEVELS.forEach(p => {
        const isCurrent = state.event.pavingLvl === p.lvl;
        const isPast = state.event.pavingLvl > p.lvl;
        const isNext = state.event.pavingLvl + 1 === p.lvl;

        let statusBadge = '';
        let btnText = "Залити бруківку";
        let btnDisabled = false;

        if (isPast) {
            statusBadge = `<span class="upgrade-level-badge" style="background: #2ecc71;">Залито</span>`;
            btnText = "Залито";
            btnDisabled = true;
        } else if (isCurrent) {
            statusBadge = `<span class="upgrade-level-badge" style="background: #2ecc71;">Активно</span>`;
            btnText = "Поточна";
            btnDisabled = true;
        } else if (isNext) {
            if (state.event.concrete < p.cost) {
                btnDisabled = true;
            }
        } else {
            btnDisabled = true;
            btnText = "Недоступно";
        }

        html += `
            <div class="upgrade-card ${isCurrent ? 'evo-card' : ''}">
                <div class="upgrade-img-wrap">
                    <img src="${p.img}" class="upgrade-img" onerror="this.onerror=null; this.src='img/beton.jpg';">
                </div>
                <div class="upgrade-info">
                    <div class="upgrade-title">${p.name} ${statusBadge}</div>
                    <div class="upgrade-desc" style="color: #2ecc71;">Дохід аури: +${formatNum(p.auraGainPerSec)} ✨/сек</div>
                    <div class="upgrade-desc" style="color: var(--accent-cyan);">Ціна: ${formatNum(p.cost)} 🏗️ бетону</div>
                </div>
                ${!isPast && !isCurrent ? `<button class="upgrade-btn" ${btnDisabled ? 'disabled' : ''} onclick="buyPavingUpgrade(${p.lvl})">${btnText}</button>` : ''}
            </div>
        `;
    });

    html += `</div>`;
    return html;
}

function renderEventUI() {
    initEventState();
    const eventContainer = document.getElementById('tab-event');
    if (!eventContainer) return;

    let subTabContent = '';
    if (currentEventSubTab === 'mixer') subTabContent = renderSubTabMixer();
    else if (currentEventSubTab === 'cement') subTabContent = renderSubTabCement();
    else if (currentEventSubTab === 'mixers') subTabContent = renderSubTabMixers();
    else if (currentEventSubTab === 'paving') subTabContent = renderSubTabPaving();

    eventContainer.innerHTML = `
        ${renderEventHeader()}

        <div style="display: flex; justify-content: space-between; background: var(--card-bg); border: 1px solid var(--accent-purple); border-radius: 12px; padding: 10px; width: 100%; margin-bottom: 12px; gap: 6px;">
            <div style="text-align: center; flex: 1;">
                <div style="font-size: 0.75rem; color: #aaa;">💧 Вода</div>
                <div style="font-size: 0.95rem; font-weight: bold; color: #3498db;" id="event-water-val">${Math.floor(state.event.water)} / ${state.event.maxWater}</div>
            </div>
            <div style="text-align: center; flex: 1; border-left: 1px solid rgba(255,255,255,0.1); border-right: 1px solid rgba(255,255,255,0.1);">
                <div style="font-size: 0.75rem; color: #aaa;">🧱 Цемент</div>
                <div style="font-size: 0.95rem; font-weight: bold; color: #e67e22;" id="event-cement-val">${formatNum(state.event.cement)}</div>
                <div style="font-size: 0.7rem; color: #2ecc71;" id="event-cement-cps">+${formatNum(getTotalCementPerSec())}/сек</div>
            </div>
            <div style="text-align: center; flex: 1;">
                <div style="font-size: 0.75rem; color: #aaa;">🏗️ Бетон</div>
                <div style="font-size: 0.95rem; font-weight: bold; color: var(--accent-cyan);" id="event-concrete-val">${formatNum(state.event.concrete)}</div>
            </div>
        </div>

        <div style="display: flex; gap: 6px; width: 100%; margin-bottom: 15px;">
            <button class="sub-tab-btn ${currentEventSubTab === 'mixer' ? 'active' : ''}" onclick="switchEventSubTab('mixer')">⚙️ Заміс</button>
            <button class="sub-tab-btn ${currentEventSubTab === 'cement' ? 'active' : ''}" onclick="switchEventSubTab('cement')">🧱 Цемент</button>
            <button class="sub-tab-btn ${currentEventSubTab === 'mixers' ? 'active' : ''}" onclick="switchEventSubTab('mixers')">🚜 Мішалки</button>
            <button class="sub-tab-btn ${currentEventSubTab === 'paving' ? 'active' : ''}" onclick="switchEventSubTab('paving')">🧱 Бруківка</button>
        </div>

        ${subTabContent}
    `;
}

function renderStatuesTabUI() {
    initEventState();
    const statueContainer = document.getElementById('tab-statue');
    if (!statueContainer) return;

    const income = getStatueAuraIncome();

    let html = `
        <div style="width: 100%; text-align: center; margin-bottom: 15px;">
            <div class="category-title">🗿 Статуї та Пам'ятники</div>
            <div style="font-size: 0.9rem; color: #aaa; margin-top: 5px;">
                Заливання бруківки дає пасивний прибуток аури!
            </div>
            <div style="font-size: 1.1rem; font-weight: bold; color: var(--accent-gold); margin-top: 8px;">
                Поточний дохід від бруківки: +${formatNum(income)} ✨/сек
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
    `;

    PAVING_LEVELS.forEach(p => {
        const isCurrent = state.event.pavingLvl === p.lvl;
        const isUnlocked = state.event.pavingLvl >= p.lvl;

        html += `
            <div class="upgrade-card ${isCurrent ? 'evo-card' : ''}" style="${!isUnlocked ? 'opacity: 0.6;' : ''}">
                <div class="upgrade-img-wrap">
                    <img src="${p.img}" class="upgrade-img" onerror="this.onerror=null; this.src='img/beton.jpg';">
                </div>
                <div class="upgrade-info">
                    <div class="upgrade-title">${p.name} ${isCurrent ? '<span class="upgrade-level-badge" style="background:#2ecc71;">Активно</span>' : (isUnlocked ? '<span class="upgrade-level-badge">Відкрито</span>' : '')}</div>
                    <div class="upgrade-desc" style="color: #2ecc71;">Пасивний дохід: +${formatNum(p.auraGainPerSec)} ✨/сек</div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    statueContainer.innerHTML = html;
}
