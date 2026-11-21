// ==========================================
// ОКРЕМИЙ МОДУЛЬ: АУРА ЛАРП МОНСТЕР (v7)
// Підключення в index.html: <script src="aura_larp_monster.js"></script>
// ==========================================

(function () {
    const STORAGE_KEY = 'hrundel_aura_larp_monster_v3';

    // Конфігурація всіх 100 сходинок (сходинка / множник / ціна в ларпах)
    const STAIRS_CONFIG = [
        { step: 1, mult: 1.0, cost: 0 },
        { step: 2, mult: 1.1, cost: 1 },
        { step: 3, mult: 1.2, cost: 2 },
        { step: 4, mult: 1.3, cost: 3 },
        { step: 5, mult: 1.5, cost: 6 },
        { step: 6, mult: 1.7, cost: 8 },
        { step: 7, mult: 1.9, cost: 12 },
        { step: 8, mult: 2.1, cost: 15 },
        { step: 9, mult: 2.3, cost: 18 },
        { step: 10, mult: 2.5, cost: 20 },
        { step: 11, mult: 2.7, cost: 27 },
        { step: 12, mult: 3.0, cost: 32 },
        { step: 13, mult: 3.2, cost: 36 },
        { step: 14, mult: 3.5, cost: 58 },
        { step: 15, mult: 3.8, cost: 70 },
        { step: 16, mult: 4.0, cost: 83 },
        { step: 17, mult: 4.3, cost: 119 },
        { step: 18, mult: 4.5, cost: 136 },
        { step: 19, mult: 4.7, cost: 165 },
        { step: 20, mult: 5.0, cost: 172 },
        { step: 21, mult: 5.3, cost: 215 },
        { step: 22, mult: 5.6, cost: 260 },
        { step: 23, mult: 6.0, cost: 430 },
        { step: 24, mult: 6.4, cost: 590 },
        { step: 25, mult: 6.7, cost: 620 },
        { step: 26, mult: 7.0, cost: 850 },
        { step: 27, mult: 7.3, cost: 980 },
        { step: 28, mult: 7.7, cost: 1030 },
        { step: 29, mult: 8.1, cost: 1170 },
        { step: 30, mult: 8.5, cost: 1350 },
        { step: 31, mult: 9.0, cost: 1380 },
        { step: 32, mult: 9.5, cost: 1800 },
        { step: 33, mult: 10.0, cost: 2050 },
        { step: 34, mult: 10.5, cost: 2410 },
        { step: 35, mult: 11.0, cost: 3200 },
        { step: 36, mult: 11.5, cost: 3640 },
        { step: 37, mult: 12.0, cost: 4660 },
        { step: 38, mult: 12.6, cost: 5390 },
        { step: 39, mult: 13.3, cost: 5570 },
        { step: 40, mult: 14.0, cost: 5590 },
        { step: 41, mult: 14.8, cost: 6350 },
        { step: 42, mult: 15.7, cost: 8400 },
        { step: 43, mult: 16.5, cost: 12300 },
        { step: 44, mult: 17.4, cost: 14600 },
        { step: 45, mult: 18.3, cost: 18900 },
        { step: 46, mult: 19.1, cost: 26400 },
        { step: 47, mult: 20.0, cost: 32756 },
        { step: 48, mult: 21.0, cost: 39000 },
        { step: 49, mult: 22.0, cost: 46000 },
        { step: 50, mult: 23.0, cost: 58000 },
        { step: 51, mult: 24.0, cost: 64000 },
        { step: 52, mult: 25.0, cost: 77000 },
        { step: 53, mult: 26.0, cost: 109000 },
        { step: 54, mult: 27.0, cost: 134000 },
        { step: 55, mult: 28.0, cost: 148000 },
        { step: 56, mult: 29.1, cost: 169000 },
        { step: 57, mult: 30.2, cost: 186000 },
        { step: 58, mult: 31.3, cost: 216000 },
        { step: 59, mult: 32.4, cost: 293000 },
        { step: 60, mult: 33.5, cost: 342000 },
        { step: 61, mult: 34.7, cost: 375000 },
        { step: 62, mult: 35.8, cost: 410000 },
        { step: 63, mult: 37.0, cost: 440000 },
        { step: 64, mult: 38.3, cost: 460000 },
        { step: 65, mult: 39.5, cost: 520000 },
        { step: 66, mult: 40.6, cost: 590000 },
        { step: 67, mult: 41.7, cost: 676767 },
        { step: 68, mult: 42.8, cost: 720000 },
        { step: 69, mult: 43.9, cost: 780000 },
        { step: 70, mult: 45.0, cost: 850000 },
        { step: 71, mult: 46.2, cost: 930000 },
        { step: 72, mult: 47.4, cost: 1040000 },
        { step: 73, mult: 48.6, cost: 1090000 },
        { step: 74, mult: 49.7, cost: 1160000 },
        { step: 75, mult: 50.9, cost: 1420000 },
        { step: 76, mult: 52.0, cost: 1630000 },
        { step: 77, mult: 53.2, cost: 1780000 },
        { step: 78, mult: 54.4, cost: 2020000 },
        { step: 79, mult: 55.7, cost: 2290000 },
        { step: 80, mult: 57.0, cost: 2530000 },
        { step: 81, mult: 58.3, cost: 2760000 },
        { step: 82, mult: 59.5, cost: 3140000 },
        { step: 83, mult: 60.7, cost: 3420000 },
        { step: 84, mult: 62.0, cost: 3680000 },
        { step: 85, mult: 63.3, cost: 3930000 },
        { step: 86, mult: 64.6, cost: 4450000 },
        { step: 87, mult: 66.0, cost: 4990000 },
        { step: 88, mult: 67.3, cost: 5330000 },
        { step: 89, mult: 68.6, cost: 5970000 },
        { step: 90, mult: 70.0, cost: 6500000 },
        { step: 91, mult: 71.5, cost: 7200000 },
        { step: 92, mult: 73.0, cost: 9400000 },
        { step: 93, mult: 74.5, cost: 10800000 },
        { step: 94, mult: 76.0, cost: 12000000 },
        { step: 95, mult: 77.5, cost: 14300000 },
        { step: 96, mult: 79.0, cost: 16500000 },
        { step: 97, mult: 80.5, cost: 19100000 },
        { step: 98, mult: 82.0, cost: 23400000 },
        { step: 99, mult: 83.5, cost: 25600000 },
        { step: 100, mult: 85.0, cost: 29200000 }
    ];

    const MAX_STEP = STAIRS_CONFIG.length; // 100
    const ROOM_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    // Кімната 10 сходинки
    const ROOM_BASE_COST = 10;
    const ROOM_COST_SCALE = 1.1;
    const ROOM_FIRST_MULT = 1.5;
    const ROOM_MULT_STEP = 0.5;
    const BASE_LARP_PER_SEC = 1;

    // Кімната 20 сходинки (Сніжинки)
    const MAX_SNOWFLAKES = 20;
    const SNOW_BASE_SPAWN_SEC = 1.0;
    const SNOW_SPEED_STEP_SEC = 0.05;
    const SNOW_SPEED_MAX_LVL = 16;

    const SNOW_MULT_BASE_COST = 10;
    const SNOW_MULT_COST_SCALE = 1.1;

    const SNOW_SPEED_BASE_COST = 10;
    const SNOW_SPEED_COST_SCALE = 1.8;

    const SNOW_LARP_BASE_COST = 20;
    const SNOW_LARP_COST_SCALE = 1.15;
    const SNOW_LARP_FIRST_MULT = 1.2;
    const SNOW_LARP_MULT_STEP = 0.1;

    // Кімната 30 сходинки (Прибирання сміття)
    const MAX_TRASH_ITEMS = 10;
    const TRASH_BASE_SPAWN_SEC = 2.0;
    const TRASH_SPEED_STEP_SEC = 0.1;
    const TRASH_SPEED_MAX_LVL = 16;
    const TRASH_ICONS = ['🥤', '📦', '🥫', '🍌', '🗞️', '🧴', '🛍️', '🧃'];

    const TRASH_MULT_BASE_COST = 10;
    const TRASH_MULT_COST_SCALE = 1.15;

    const TRASH_SPEED_BASE_COST = 10;
    const TRASH_SPEED_COST_SCALE = 1.9;

    const TRASH_LARP_BASE_COST = 15;
    const TRASH_LARP_COST_SCALE = 1.18;
    const TRASH_LARP_FIRST_MULT = 1.2;
    const TRASH_LARP_MULT_STEP = 0.1;

    // Кімната 40 сходинки (Швидкість пересування та Офлайн-фарм)
    const SPEED_UPG_BASE_COST = 100;
    const SPEED_UPG_COST_SCALE = 1.2;
    const SPEED_UPG_STEP_PCT = 1; // +1% швидкості за рівень

    const OFFLINE_UPG_BASE_COST = 200;
    const OFFLINE_UPG_COST_SCALE = 1.25;
    const OFFLINE_UPG_STEP_PCT = 1; // +1% офлайн-заробітку за рівень

    // Кімната 50 сходинки (Моб Бойова Квочка Ряба)
    const CHICKEN_MOB_NAME = 'Бойова Квочка Ряба';
    const CHICKEN_MAX_HP = 1000;
    const CHICKEN_BASE_CLICK_DAMAGE = 10;
    const CHICKEN_BASE_FEATHER_DROP = 10;
    const CHICKEN_BASE_RESPAWN_SEC = 300; // 5 хвилин

    const FEATHER_MULT_BASE_COST = 3;
    const FEATHER_MULT_COST_SCALE = 1.3;
    const FEATHER_MULT_FIRST = 1.4;
    const FEATHER_MULT_STEP = 0.4;

    const FEATHER_LARP_BASE_COST = 5;
    const FEATHER_LARP_COST_SCALE = 1.35;
    const FEATHER_LARP_FIRST = 1.3;
    const FEATHER_LARP_STEP = 0.5;

    // Кімната 60 сходинки (Шанси золотих х10 та смарагдових х1000 сніжинок / сміття)
    const GOLD_SNOW_BASE_COST = 100000;
    const GOLD_SNOW_COST_SCALE = 1.25;
    const GOLD_SNOW_STEP_PCT = 1.0; // +1%
    const GOLD_SNOW_MAX_LVL = 100;

    const EMERALD_SNOW_BASE_COST = 5000000; // 5 млн
    const EMERALD_SNOW_COST_SCALE = 1.3;
    const EMERALD_SNOW_STEP_PCT = 0.01; // +0.01%
    const EMERALD_SNOW_MAX_LVL = 10000;

    const GOLD_TRASH_BASE_COST = 250000;
    const GOLD_TRASH_COST_SCALE = 1.27;
    const GOLD_TRASH_STEP_PCT = 1.0; // +1%
    const GOLD_TRASH_MAX_LVL = 100;

    const EMERALD_TRASH_BASE_COST = 10000000; // 10 млн
    const EMERALD_TRASH_COST_SCALE = 1.32;
    const EMERALD_TRASH_STEP_PCT = 0.01; // +0.01%
    const EMERALD_TRASH_MAX_LVL = 10000;

    // Кімната 70 сходинки (Об'єднання овочів та фруктів — Вітаміни)
    const MAX_MERGE_ITEMS = 20;
    const MERGE_SPAWN_SEC = 3.0;
    const MERGE_HIERARCHY = [
        { level: 1, icon: '🥒', name: 'Огірок' },
        { level: 2, icon: '🍅', name: 'Помідор' },
        { level: 3, icon: '🥕', name: 'Морква' },
        { level: 4, icon: '🫑', name: 'Перець' },
        { level: 5, icon: '🌽', name: 'Кукурудза' },
        { level: 6, icon: '🍆', name: 'Баклажан' },
        { level: 7, icon: '🥦', name: 'Броколі' },
        { level: 8, icon: '🍎', name: 'Яблуко' },
        { level: 9, icon: '🍐', name: 'Груша' },
        { level: 10, icon: '🍊', name: 'Апельсин' },
        { level: 11, icon: '🍌', name: 'Банан' },
        { level: 12, icon: '🍇', name: 'Виноград' },
        { level: 13, icon: '🍓', name: 'Полуниця' },
        { level: 14, icon: '🍑', name: 'Персик' },
        { level: 15, icon: '🍍', name: 'Ананас' },
        { level: 16, icon: '🍉', name: 'Кавун' }
    ];

    const VITAMIN_MULT_BASE_COST = 15;
    const VITAMIN_MULT_COST_SCALE = 1.12;
    const VITAMIN_MULT_FIRST = 1.5;
    const VITAMIN_MULT_STEP = 0.5;

    const MERGE_LV2_BASE_COST = 50;
    const MERGE_LV2_COST_SCALE = 1.9;
    const MERGE_LV2_STEP_PCT = 10; // +10%
    const MERGE_LV2_MAX_LVL = 10;

    const MERGE_LARP_BASE_COST = 20;
    const MERGE_LARP_COST_SCALE = 1.16;
    const MERGE_LARP_FIRST = 1.2;
    const MERGE_LARP_STEP = 0.2;

    // Кімната 80 сходинки (Сніжна буря)
    const STORM_BASE_DURATION_MIN = 2.0; // 2 хв
    const STORM_DURATION_STEP_MIN = 0.1; // +0.1 хв
    const STORM_DURATION_BASE_COST = 2000000; // 2 млн
    const STORM_DURATION_COST_SCALE = 1.6;

    const STORM_BASE_COOLDOWN_HR = 6.0; // 6 годин
    const STORM_COOLDOWN_STEP_HR = 0.1; // -0.1 год
    const STORM_COOLDOWN_BASE_COST = 15000000; // 15 млн
    const STORM_COOLDOWN_COST_SCALE = 1.7;
    const STORM_COOLDOWN_MAX_LVL = 55; // мінімальна перезарядка 0.5 год

    const STORM_BASE_SPAWN_SEC = 0.08; // 0.08 сек
    const STORM_SPAWN_STEP_SEC = 0.005; // -0.005 сек
    const STORM_SPAWN_BASE_COST = 50000000; // 50 млн
    const STORM_SPAWN_COST_SCALE = 2.4;
    const STORM_SPAWN_MAX_LVL = 10;

    // Кімната 90 сходинки (Прокачки мобів для 50 сходинки)
    const MOB_DMG_BASE_COST = 1000000; // 1 млн
    const MOB_DMG_COST_SCALE = 1.32;
    const MOB_DMG_MAX_LVL = 90;

    const MOB_SPAWN_BASE_COST = 2000000; // 2 млн
    const MOB_SPAWN_COST_SCALE = 1.38;
    const MOB_SPAWN_MAX_LVL = 60;

    // Геометрія візуальних сходинок (гарантовано вміщує всі 100 сходинок у лівій зоні до центру екрана)
    const ROW_HEIGHT = 44;
    const STEP_BAR_PX = 42;
    const STEP_BASE_PX = 14;
    const STEP_INDENT_PCT_PER_LEVEL = 0.27; // на 100 сходинці: 14px + 26.73% + 42px < 46% ширини

    let moduleState = null;
    let isAuraLarpModeActive = false;
    let activeLarpSubTab = 'stairs'; // 'stairs' | 'room' | 'multipliers' | 'leaderboard'
    let activeRoomStep = 10; // 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90
    let activeLeaderboardType = 'highestStep'; // 'highestStep' | 'larpPerSec' | 'totalLarp'

    let lastLarpTickTime = Date.now();
    let rafId = null;
    let lastLeaderboardSyncMs = 0;
    let resetConfirmPending = false;
    let resetConfirmTimer = null;

    // Стан зони сніжинок (20 сходинка)
    let activeSnowflakes = []; // [{ id, xPct, yPct, rarity }]
    let nextSnowflakeId = 1;
    let snowSpawnAccumSec = 0;
    let isPointerSwipingSnow = false;

    // Стан зони прибирання сміття (30 сходинка)
    let activeTrashItems = []; // [{ id, xPct, yPct, icon, rarity }]
    let nextTrashId = 1;
    let trashSpawnAccumSec = 0;
    let draggingTrashId = null;

    // Стан зони об'єднання овочів/фруктів (70 сходинка)
    let activeMergeItems = []; // [{ id, xPct, yPct, level }]
    let nextMergeId = 1;
    let mergeSpawnAccumSec = 0;
    let draggingMergeId = null;

    // Глобальний час та стан інтернету
    let isGlobalTimeVerified = false;
    let globalTimeOffsetMs = 0;
    let isCheckingGlobalTime = false;
    let noInternetError = false;
    let offlineRewardReport = null; // { elapsedSec, earnedOffline, offlinePct }

    // ------------------------------------------
    // ДОСТУП ДО ГОЛОВНОГО СТАНУ ГРИ ТА ЗБЕРЕЖЕННЯ
    // ------------------------------------------
    function isMainGameReady() {
        if (window.isMainGameLoaded === true) return true;
        try {
            if (typeof state !== 'undefined' && state && (state.playerId || state.nickname)) {
                return true;
            }
        } catch (e) {}
        return Boolean(window.state && (window.state.playerId || window.state.nickname));
    }

    function getRootState() {
        try {
            if (typeof state !== 'undefined' && state && typeof state === 'object') {
                return state;
            }
        } catch (e) {}

        if (typeof window.state !== 'object' || !window.state) {
            window.state = {};
        }
        return window.state;
    }

    function getDefaultModuleState() {
        return {
            larp: 0,
            totalLarp: 0,
            currentStep: 1,
            maxUnlockedStep: 1,
            highestStep: 1,
            targetStep: 1,
            moveProgressSec: 0,
            // Кімната 10
            roomMultLvl: 0,
            // Кімната 20 (Сніжинки)
            snow: 0,
            totalSnow: 0,
            snowMultLvl: 0,
            snowSpeedLvl: 0,
            snowLarpMultLvl: 0,
            // Кімната 30 (Сміття)
            trash: 0,
            totalTrash: 0,
            trashMultLvl: 0,
            trashSpeedLvl: 0,
            trashLarpMultLvl: 0,
            // Кімната 40 (Швидкість та Офлайн)
            stepSpeedLvl: 0,
            offlineLarpLvl: 0,
            // Кімната 50 (Курочка та Пір'я)
            feathers: 0,
            totalFeathers: 0,
            featherMultLvl: 0,
            featherLarpMultLvl: 0,
            chickenHp: CHICKEN_MAX_HP,
            chickenRespawnEndMs: null,
            // Кімната 60 (Шанси золотих і смарагдових сніжинок та сміття)
            goldSnowLvl: 0,
            emeraldSnowLvl: 0,
            goldTrashLvl: 0,
            emeraldTrashLvl: 0,
            // Кімната 70 (Об'єднання овочів та фруктів — Вітаміни)
            vitamins: 0,
            totalVitamins: 0,
            vitaminMultLvl: 0,
            mergeLv2ChanceLvl: 0,
            mergeLarpMultLvl: 0,
            savedMergeItems: [],
            // Кімната 80 (Сніжна буря + Прокачки мобів)
            stormDurationLvl: 0,
            stormCooldownLvl: 0,
            stormSpeedLvl: 0,
            stormActiveEndMs: null,
            stormCooldownEndMs: null,
            mobDamageLvl: 0,
            mobRespawnLvl: 0,
            // Збереження сесії
            lastGlobalTime: null,
            wasActive: false,
            savedSubTab: 'stairs',
            savedRoomStep: 10
        };
    }

    function sanitizeModuleState(raw) {
        const def = getDefaultModuleState();
        const s = Object.assign({}, def, raw || {});

        if (typeof s.larp !== 'number' || isNaN(s.larp) || s.larp < 0) s.larp = 0;
        if (typeof s.totalLarp !== 'number' || isNaN(s.totalLarp) || s.totalLarp < s.larp) {
            s.totalLarp = s.larp;
        }
        if (typeof s.currentStep !== 'number' || s.currentStep < 1 || s.currentStep > MAX_STEP) s.currentStep = 1;
        if (typeof s.maxUnlockedStep !== 'number' || s.maxUnlockedStep < 1 || s.maxUnlockedStep > MAX_STEP) s.maxUnlockedStep = 1;
        if (typeof s.highestStep !== 'number' || s.highestStep < 1 || s.highestStep > MAX_STEP) s.highestStep = 1;
        s.highestStep = Math.max(s.highestStep, s.currentStep, s.maxUnlockedStep);

        if (typeof s.targetStep !== 'number' || s.targetStep < 1 || s.targetStep > MAX_STEP) {
            s.targetStep = s.currentStep;
        }
        if (typeof s.moveProgressSec !== 'number' || isNaN(s.moveProgressSec) || s.moveProgressSec < 0) {
            s.moveProgressSec = 0;
        }
        if (typeof s.roomMultLvl !== 'number' || isNaN(s.roomMultLvl) || s.roomMultLvl < 0) {
            s.roomMultLvl = 0;
        }

        // Сніжинки (20 сходинка)
        if (typeof s.snow !== 'number' || isNaN(s.snow) || s.snow < 0) s.snow = 0;
        if (typeof s.totalSnow !== 'number' || isNaN(s.totalSnow) || s.totalSnow < s.snow) {
            s.totalSnow = s.snow;
        }
        if (typeof s.snowMultLvl !== 'number' || isNaN(s.snowMultLvl) || s.snowMultLvl < 0) s.snowMultLvl = 0;
        if (typeof s.snowSpeedLvl !== 'number' || isNaN(s.snowSpeedLvl) || s.snowSpeedLvl < 0) s.snowSpeedLvl = 0;
        if (s.snowSpeedLvl > SNOW_SPEED_MAX_LVL) s.snowSpeedLvl = SNOW_SPEED_MAX_LVL;
        if (typeof s.snowLarpMultLvl !== 'number' || isNaN(s.snowLarpMultLvl) || s.snowLarpMultLvl < 0) s.snowLarpMultLvl = 0;

        // Сміття (30 сходинка)
        if (typeof s.trash !== 'number' || isNaN(s.trash) || s.trash < 0) s.trash = 0;
        if (typeof s.totalTrash !== 'number' || isNaN(s.totalTrash) || s.totalTrash < s.trash) {
            s.totalTrash = s.trash;
        }
        if (typeof s.trashMultLvl !== 'number' || isNaN(s.trashMultLvl) || s.trashMultLvl < 0) s.trashMultLvl = 0;
        if (typeof s.trashSpeedLvl !== 'number' || isNaN(s.trashSpeedLvl) || s.trashSpeedLvl < 0) s.trashSpeedLvl = 0;
        if (s.trashSpeedLvl > TRASH_SPEED_MAX_LVL) s.trashSpeedLvl = TRASH_SPEED_MAX_LVL;
        if (typeof s.trashLarpMultLvl !== 'number' || isNaN(s.trashLarpMultLvl) || s.trashLarpMultLvl < 0) s.trashLarpMultLvl = 0;

        // Кімната 40 (Швидкість та Офлайн)
        if (typeof s.stepSpeedLvl !== 'number' || isNaN(s.stepSpeedLvl) || s.stepSpeedLvl < 0) s.stepSpeedLvl = 0;
        if (typeof s.offlineLarpLvl !== 'number' || isNaN(s.offlineLarpLvl) || s.offlineLarpLvl < 0) s.offlineLarpLvl = 0;

        // Кімната 50 (Курочка та Пір'я)
        if (typeof s.feathers !== 'number' || isNaN(s.feathers) || s.feathers < 0) s.feathers = 0;
        if (typeof s.totalFeathers !== 'number' || isNaN(s.totalFeathers) || s.totalFeathers < s.feathers) {
            s.totalFeathers = s.feathers;
        }
        if (typeof s.featherMultLvl !== 'number' || isNaN(s.featherMultLvl) || s.featherMultLvl < 0) s.featherMultLvl = 0;
        if (typeof s.featherLarpMultLvl !== 'number' || isNaN(s.featherLarpMultLvl) || s.featherLarpMultLvl < 0) s.featherLarpMultLvl = 0;
        if (typeof s.chickenHp !== 'number' || isNaN(s.chickenHp) || s.chickenHp < 0 || s.chickenHp > CHICKEN_MAX_HP) {
            s.chickenHp = CHICKEN_MAX_HP;
        }
        if (typeof s.chickenRespawnEndMs !== 'number' || isNaN(s.chickenRespawnEndMs) || s.chickenRespawnEndMs <= 0) {
            s.chickenRespawnEndMs = null;
        }
        if (s.chickenHp <= 0 && !s.chickenRespawnEndMs) {
            s.chickenHp = CHICKEN_MAX_HP;
        }

        // Кімната 60 (Шанси золотих і смарагдових предметів)
        if (typeof s.goldSnowLvl !== 'number' || isNaN(s.goldSnowLvl) || s.goldSnowLvl < 0) s.goldSnowLvl = 0;
        if (s.goldSnowLvl > GOLD_SNOW_MAX_LVL) s.goldSnowLvl = GOLD_SNOW_MAX_LVL;
        if (typeof s.emeraldSnowLvl !== 'number' || isNaN(s.emeraldSnowLvl) || s.emeraldSnowLvl < 0) s.emeraldSnowLvl = 0;
        if (s.emeraldSnowLvl > EMERALD_SNOW_MAX_LVL) s.emeraldSnowLvl = EMERALD_SNOW_MAX_LVL;

        if (typeof s.goldTrashLvl !== 'number' || isNaN(s.goldTrashLvl) || s.goldTrashLvl < 0) s.goldTrashLvl = 0;
        if (s.goldTrashLvl > GOLD_TRASH_MAX_LVL) s.goldTrashLvl = GOLD_TRASH_MAX_LVL;
        if (typeof s.emeraldTrashLvl !== 'number' || isNaN(s.emeraldTrashLvl) || s.emeraldTrashLvl < 0) s.emeraldTrashLvl = 0;
        if (s.emeraldTrashLvl > EMERALD_TRASH_MAX_LVL) s.emeraldTrashLvl = EMERALD_TRASH_MAX_LVL;

        // Кімната 70 (Вітаміни та Овочі)
        if (typeof s.vitamins !== 'number' || isNaN(s.vitamins) || s.vitamins < 0) s.vitamins = 0;
        if (typeof s.totalVitamins !== 'number' || isNaN(s.totalVitamins) || s.totalVitamins < s.vitamins) {
            s.totalVitamins = s.vitamins;
        }
        if (typeof s.vitaminMultLvl !== 'number' || isNaN(s.vitaminMultLvl) || s.vitaminMultLvl < 0) s.vitaminMultLvl = 0;
        if (typeof s.mergeLv2ChanceLvl !== 'number' || isNaN(s.mergeLv2ChanceLvl) || s.mergeLv2ChanceLvl < 0) s.mergeLv2ChanceLvl = 0;
        if (s.mergeLv2ChanceLvl > MERGE_LV2_MAX_LVL) s.mergeLv2ChanceLvl = MERGE_LV2_MAX_LVL;
        if (typeof s.mergeLarpMultLvl !== 'number' || isNaN(s.mergeLarpMultLvl) || s.mergeLarpMultLvl < 0) s.mergeLarpMultLvl = 0;

        if (!Array.isArray(s.savedMergeItems)) {
            s.savedMergeItems = [];
        } else {
            s.savedMergeItems = s.savedMergeItems
                .filter(it => it && typeof it.xPct === 'number' && typeof it.yPct === 'number' && typeof it.level === 'number' && it.level >= 1 && it.level <= MERGE_HIERARCHY.length)
                .slice(0, MAX_MERGE_ITEMS);
        }

        // Кімната 80 (Сніжна буря + Прокачки мобів)
        if (typeof s.stormDurationLvl !== 'number' || isNaN(s.stormDurationLvl) || s.stormDurationLvl < 0) s.stormDurationLvl = 0;
        if (typeof s.stormCooldownLvl !== 'number' || isNaN(s.stormCooldownLvl) || s.stormCooldownLvl < 0) s.stormCooldownLvl = 0;
        if (s.stormCooldownLvl > STORM_COOLDOWN_MAX_LVL) s.stormCooldownLvl = STORM_COOLDOWN_MAX_LVL;
        if (typeof s.stormSpeedLvl !== 'number' || isNaN(s.stormSpeedLvl) || s.stormSpeedLvl < 0) s.stormSpeedLvl = 0;
        if (s.stormSpeedLvl > STORM_SPAWN_MAX_LVL) s.stormSpeedLvl = STORM_SPAWN_MAX_LVL;

        if (typeof s.stormActiveEndMs !== 'number' || isNaN(s.stormActiveEndMs) || s.stormActiveEndMs <= 0) {
            s.stormActiveEndMs = null;
        }
        if (typeof s.stormCooldownEndMs !== 'number' || isNaN(s.stormCooldownEndMs) || s.stormCooldownEndMs <= 0) {
            s.stormCooldownEndMs = null;
        }

        if (typeof s.mobDamageLvl !== 'number' || isNaN(s.mobDamageLvl) || s.mobDamageLvl < 0) s.mobDamageLvl = 0;
        if (s.mobDamageLvl > MOB_DMG_MAX_LVL) s.mobDamageLvl = MOB_DMG_MAX_LVL;
        if (typeof s.mobRespawnLvl !== 'number' || isNaN(s.mobRespawnLvl) || s.mobRespawnLvl < 0) s.mobRespawnLvl = 0;
        if (s.mobRespawnLvl > MOB_SPAWN_MAX_LVL) s.mobRespawnLvl = MOB_SPAWN_MAX_LVL;

        if (typeof s.lastGlobalTime !== 'number' || isNaN(s.lastGlobalTime) || s.lastGlobalTime <= 0) {
            s.lastGlobalTime = null;
        }
        if (!['stairs', 'room', 'multipliers', 'leaderboard'].includes(s.savedSubTab)) {
            s.savedSubTab = 'stairs';
        }
        if (!ROOM_STEPS.includes(s.savedRoomStep)) {
            s.savedRoomStep = ROOM_STEPS.includes(s.currentStep) ? s.currentStep : 10;
        }
        return s;
    }

    function getProgressScore(s) {
        return (s.totalLarp || 0)
            + (s.larp || 0)
            + (s.maxUnlockedStep || 1) * 1000
            + (s.roomMultLvl || 0) * 1000
            + (s.totalSnow || 0) * 10
            + (s.totalTrash || 0) * 10
            + (s.stepSpeedLvl || 0) * 500
            + (s.offlineLarpLvl || 0) * 500
            + (s.totalFeathers || 0) * 50
            + (s.goldSnowLvl || 0) * 5000
            + (s.emeraldSnowLvl || 0) * 10000
            + (s.goldTrashLvl || 0) * 5000
            + (s.emeraldTrashLvl || 0) * 10000
            + (s.totalVitamins || 0) * 100
            + (s.mobDamageLvl || 0) * 10000
            + (s.mobRespawnLvl || 0) * 10000
            + (s.stormDurationLvl || 0) * 10000;
    }

    function attachStateToRoot(s) {
        const root = getRootState();
        root.auraLarpMonster = s;
        try {
            if (typeof state !== 'undefined' && state && typeof state === 'object') {
                state.auraLarpMonster = s;
            }
        } catch (e) {}
        if (typeof window.state === 'object' && window.state) {
            window.state.auraLarpMonster = s;
        }
    }

    function restoreSavedMergeItems(s) {
        if (activeMergeItems.length === 0 && Array.isArray(s.savedMergeItems) && s.savedMergeItems.length > 0) {
            activeMergeItems = s.savedMergeItems.map(it => ({
                id: nextMergeId++,
                xPct: it.xPct,
                yPct: it.yPct,
                level: it.level
            }));
        }
    }

    function initAuraLarpMonsterState() {
        const root = getRootState();

        if (moduleState) {
            if (root.auraLarpMonster && root.auraLarpMonster !== moduleState) {
                const external = sanitizeModuleState(root.auraLarpMonster);
                if (getProgressScore(external) > getProgressScore(moduleState)) {
                    Object.assign(moduleState, external);
                }
            }
            attachStateToRoot(moduleState);
            return moduleState;
        }

        let localBackup = null;
        try {
            const rawLocal = localStorage.getItem(STORAGE_KEY);
            if (rawLocal) {
                localBackup = JSON.parse(rawLocal);
            }
        } catch (e) {}

        const fromRoot = root.auraLarpMonster ? sanitizeModuleState(root.auraLarpMonster) : null;
        const fromLocal = localBackup ? sanitizeModuleState(localBackup) : null;

        if (fromRoot && fromLocal) {
            moduleState = getProgressScore(fromLocal) >= getProgressScore(fromRoot) ? fromLocal : fromRoot;
            if (!moduleState.lastGlobalTime) {
                moduleState.lastGlobalTime = fromLocal.lastGlobalTime || fromRoot.lastGlobalTime || null;
            }
        } else if (fromLocal) {
            moduleState = fromLocal;
        } else if (fromRoot) {
            moduleState = fromRoot;
        } else {
            moduleState = getDefaultModuleState();
        }

        restoreSavedMergeItems(moduleState);
        attachStateToRoot(moduleState);
        return moduleState;
    }

    function persistAuraLarpState(callMainSave) {
        const s = initAuraLarpMonsterState();
        s.wasActive = isAuraLarpModeActive;
        s.savedSubTab = activeLarpSubTab;
        s.savedRoomStep = activeRoomStep;
        s.savedMergeItems = activeMergeItems.map(it => ({
            xPct: it.xPct,
            yPct: it.yPct,
            level: it.level
        }));

        if (isGlobalTimeVerified) {
            s.lastGlobalTime = Date.now() + globalTimeOffsetMs;
        }

        attachStateToRoot(s);

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
        } catch (e) {}

        if (callMainSave && isMainGameReady() && typeof window.saveGame === 'function') {
            window.saveGame();
        }
    }

    // ------------------------------------------
    // ГЛОБАЛЬНИЙ ЧАС ТА ОФЛАЙН-ПРОГРЕС
    // ------------------------------------------
    function fetchWithTimeout(url, timeoutMs) {
        return new Promise((resolve, reject) => {
            const controller = new AbortController();
            const timer = setTimeout(() => {
                controller.abort();
                reject(new Error('Timeout'));
            }, timeoutMs);

            fetch(url, { signal: controller.signal, cache: 'no-store' })
                .then(res => {
                    clearTimeout(timer);
                    resolve(res);
                })
                .catch(err => {
                    clearTimeout(timer);
                    reject(err);
                });
        });
    }

    async function fetchBinanceTime() {
        const res = await fetchWithTimeout('https://api.binance.com/api/v3/time', 3500);
        if (!res.ok) throw new Error('Bad status');
        const data = await res.json();
        if (data && typeof data.serverTime === 'number' && data.serverTime > 1700000000000) {
            return data.serverTime;
        }
        throw new Error('Invalid time');
    }

    async function fetchCoinbaseTime() {
        const res = await fetchWithTimeout('https://api.coinbase.com/v2/time', 3500);
        if (!res.ok) throw new Error('Bad status');
        const data = await res.json();
        if (data && data.data && typeof data.data.epoch === 'number') {
            const ms = data.data.epoch * 1000;
            if (ms > 1700000000000) return ms;
        }
        throw new Error('Invalid time');
    }

    async function fetchTimeApiIo() {
        const res = await fetchWithTimeout('https://timeapi.io/api/time/current/zone?timeZone=UTC', 4000);
        if (!res.ok) throw new Error('Bad status');
        const data = await res.json();
        if (data && data.dateTime) {
            const isoStr = data.dateTime.endsWith('Z') ? data.dateTime : data.dateTime + 'Z';
            const ms = new Date(isoStr).getTime();
            if (!isNaN(ms) && ms > 1700000000000) return ms;
        }
        throw new Error('Invalid time');
    }

    async function fetchWorldTimeApi() {
        const res = await fetchWithTimeout('https://worldtimeapi.org/api/timezone/Etc/UTC', 4000);
        if (!res.ok) throw new Error('Bad status');
        const data = await res.json();
        if (data && typeof data.unixtime === 'number') {
            const ms = data.unixtime * 1000;
            if (!isNaN(ms) && ms > 1700000000000) return ms;
        }
        throw new Error('Invalid time');
    }

    async function fetchFirebaseServerTime() {
        if (typeof firebase === 'undefined' || !firebase.database) {
            throw new Error('No firebase');
        }
        return await new Promise((resolve, reject) => {
            const connRef = firebase.database().ref('.info/connected');
            let done = false;

            const timer = setTimeout(() => {
                if (!done) {
                    done = true;
                    connRef.off('value', onConn);
                    reject(new Error('Firebase connect timeout'));
                }
            }, 4000);

            function onConn(snap) {
                if (snap && snap.val() === true && !done) {
                    done = true;
                    clearTimeout(timer);
                    connRef.off('value', onConn);

                    firebase.database().ref('.info/serverTimeOffset').once('value', offsetSnap => {
                        const offset = (offsetSnap && offsetSnap.val()) || 0;
                        const ms = Date.now() + offset;
                        if (!isNaN(ms) && ms > 1700000000000) {
                            resolve(ms);
                        } else {
                            reject(new Error('Invalid firebase time'));
                        }
                    }, err => reject(err));
                }
            }

            connRef.on('value', onConn);
        });
    }

    async function fetchGlobalTimeMs() {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            return null;
        }

        const sources = [
            fetchBinanceTime(),
            fetchCoinbaseTime(),
            fetchTimeApiIo(),
            fetchWorldTimeApi(),
            fetchFirebaseServerTime()
        ];

        try {
            if (typeof Promise.any === 'function') {
                return await Promise.any(sources);
            }
            return await new Promise((resolve, reject) => {
                let rejectedCount = 0;
                sources.forEach(p => {
                    p.then(resolve).catch(() => {
                        rejectedCount++;
                        if (rejectedCount === sources.length) {
                            reject(new Error('All sources failed'));
                        }
                    });
                });
            });
        } catch (e) {
            return null;
        }
    }

    async function verifyGlobalTimeAndApplyOfflineProgress() {
        if (isCheckingGlobalTime) return;
        isCheckingGlobalTime = true;

        const s = initAuraLarpMonsterState();
        const offlinePct = getOfflineLarpPercent();

        if (isAuraLarpModeActive && offlinePct > 0) {
            renderAuraLarpMonsterUI(false);
        }

        const globalNowMs = await fetchGlobalTimeMs();
        isCheckingGlobalTime = false;

        if (globalNowMs === null) {
            isGlobalTimeVerified = false;
            noInternetError = true;
            if (isAuraLarpModeActive && offlinePct > 0) {
                renderAuraLarpMonsterUI(false);
            }
            return;
        }

        globalTimeOffsetMs = globalNowMs - Date.now();
        isGlobalTimeVerified = true;
        noInternetError = false;

        if (offlinePct > 0 && s.lastGlobalTime && globalNowMs > s.lastGlobalTime) {
            const elapsedSec = (globalNowMs - s.lastGlobalTime) / 1000;

            if (elapsedSec >= 2) {
                let remainingMoveSec = elapsedSec;
                const moveSpeed = getCharacterMoveSpeed();
                while (s.currentStep !== s.targetStep && remainingMoveSec > 0) {
                    const secToNext = Math.max(0, (1.0 - s.moveProgressSec) / moveSpeed);
                    if (remainingMoveSec >= secToNext) {
                        remainingMoveSec -= secToNext;
                        s.moveProgressSec = 0;
                        s.currentStep += (s.targetStep > s.currentStep ? 1 : -1);
                        s.highestStep = Math.max(s.highestStep || 1, s.currentStep);
                    } else {
                        s.moveProgressSec += remainingMoveSec * moveSpeed;
                        remainingMoveSec = 0;
                    }
                }

                const highestStepRate = getHighestStepLarpPerSecond();
                const baseOfflineEarned = highestStepRate * elapsedSec;
                const earnedOffline = baseOfflineEarned * (offlinePct / 100);

                if (earnedOffline > 0) {
                    s.larp += earnedOffline;
                    s.totalLarp += earnedOffline;
                    if (Math.floor(earnedOffline) >= 1) {
                        offlineRewardReport = {
                            elapsedSec: elapsedSec,
                            earnedOffline: earnedOffline,
                            offlinePct: offlinePct,
                            highestStep: getHighestUnlockedStepNumber()
                        };
                    }
                }
            }
        }

        s.lastGlobalTime = globalNowMs;
        persistAuraLarpState(isMainGameReady());
        syncLarpLeaderboard(true);

        if (isAuraLarpModeActive) {
            renderAuraLarpMonsterUI(false);
        }
    }

    function dismissOfflineReport() {
        offlineRewardReport = null;
        if (isAuraLarpModeActive) {
            renderAuraLarpMonsterUI(false);
        }
    }

    // ------------------------------------------
    // РОЗРАХУНОК МНОЖНИКІВ, ЦІН ТА ПОЗИЦІЇ
    // ------------------------------------------
    function getVisualStepPosition() {
        const s = initAuraLarpMonsterState();
        if (s.currentStep === s.targetStep) return s.currentStep;
        const dir = s.targetStep > s.currentStep ? 1 : -1;
        const raw = s.currentStep + dir * Math.min(1, Math.max(0, s.moveProgressSec));
        return Math.min(MAX_STEP, Math.max(1, raw));
    }

    function getStepLeftCss(stepValue) {
        const clamped = Math.min(MAX_STEP, Math.max(1, stepValue));
        return `calc(${STEP_BASE_PX}px + ${((clamped - 1) * STEP_INDENT_PCT_PER_LEVEL).toFixed(3)}%)`;
    }

    function getStepCenterCss(stepValue) {
        const clamped = Math.min(MAX_STEP, Math.max(1, stepValue));
        return `calc(${STEP_BASE_PX + STEP_BAR_PX * 0.5}px + ${((clamped - 1) * STEP_INDENT_PCT_PER_LEVEL).toFixed(3)}%)`;
    }

    function getStairMultiplier() {
        const s = initAuraLarpMonsterState();
        const found = STAIRS_CONFIG.find(item => item.step === s.currentStep);
        return found ? found.mult : 1.0;
    }

    function getHighestUnlockedStepNumber() {
        const s = initAuraLarpMonsterState();
        return Math.min(MAX_STEP, Math.max(1, s.maxUnlockedStep || 1, s.highestStep || 1));
    }

    function getHighestStairMultiplier() {
        const topStep = getHighestUnlockedStepNumber();
        const found = STAIRS_CONFIG.find(item => item.step === topStep);
        return found ? found.mult : 1.0;
    }

    // Кімната 10 сходинки
    function getRoomLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.roomMultLvl;
        if (lvl <= 0) return 1.0;
        return Number((ROOM_FIRST_MULT + (lvl - 1) * ROOM_MULT_STEP).toFixed(2));
    }

    function getNextRoomLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.roomMultLvl;
        return Number((ROOM_FIRST_MULT + lvl * ROOM_MULT_STEP).toFixed(2));
    }

    function getRoomUpgradeCost() {
        const s = initAuraLarpMonsterState();
        const lvl = s.roomMultLvl;
        return Math.round(ROOM_BASE_COST * Math.pow(ROOM_COST_SCALE, lvl));
    }

    // Кімната 20 сходинки (Сніжинки)
    function getSnowMultiplier() {
        const s = initAuraLarpMonsterState();
        return 1 + (s.snowMultLvl || 0);
    }

    function getNextSnowMultiplier() {
        return getSnowMultiplier() + 1;
    }

    function getSnowMultUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(SNOW_MULT_BASE_COST * Math.pow(SNOW_MULT_COST_SCALE, s.snowMultLvl || 0));
    }

    function getSnowSpawnInterval() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(SNOW_SPEED_MAX_LVL, s.snowSpeedLvl || 0);
        return Number(Math.max(0.2, SNOW_BASE_SPAWN_SEC - lvl * SNOW_SPEED_STEP_SEC).toFixed(2));
    }

    function getNextSnowSpawnInterval() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(SNOW_SPEED_MAX_LVL, (s.snowSpeedLvl || 0) + 1);
        return Number(Math.max(0.2, SNOW_BASE_SPAWN_SEC - nextLvl * SNOW_SPEED_STEP_SEC).toFixed(2));
    }

    function getSnowSpeedUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(SNOW_SPEED_BASE_COST * Math.pow(SNOW_SPEED_COST_SCALE, s.snowSpeedLvl || 0));
    }

    function getSnowLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.snowLarpMultLvl || 0;
        if (lvl <= 0) return 1.0;
        return Number((SNOW_LARP_FIRST_MULT + (lvl - 1) * SNOW_LARP_MULT_STEP).toFixed(2));
    }

    function getNextSnowLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.snowLarpMultLvl || 0;
        return Number((SNOW_LARP_FIRST_MULT + lvl * SNOW_LARP_MULT_STEP).toFixed(2));
    }

    function getSnowLarpUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(SNOW_LARP_BASE_COST * Math.pow(SNOW_LARP_COST_SCALE, s.snowLarpMultLvl || 0));
    }

    // Кімната 30 сходинки (Прибирання сміття)
    function getTrashMultiplier() {
        const s = initAuraLarpMonsterState();
        return 1 + (s.trashMultLvl || 0);
    }

    function getNextTrashMultiplier() {
        return getTrashMultiplier() + 1;
    }

    function getTrashMultUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(TRASH_MULT_BASE_COST * Math.pow(TRASH_MULT_COST_SCALE, s.trashMultLvl || 0));
    }

    function getTrashSpawnInterval() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(TRASH_SPEED_MAX_LVL, s.trashSpeedLvl || 0);
        return Number(Math.max(0.4, TRASH_BASE_SPAWN_SEC - lvl * TRASH_SPEED_STEP_SEC).toFixed(2));
    }

    function getNextTrashSpawnInterval() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(TRASH_SPEED_MAX_LVL, (s.trashSpeedLvl || 0) + 1);
        return Number(Math.max(0.4, TRASH_BASE_SPAWN_SEC - nextLvl * TRASH_SPEED_STEP_SEC).toFixed(2));
    }

    function getTrashSpeedUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(TRASH_SPEED_BASE_COST * Math.pow(TRASH_SPEED_COST_SCALE, s.trashSpeedLvl || 0));
    }

    function getTrashLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.trashLarpMultLvl || 0;
        if (lvl <= 0) return 1.0;
        return Number((TRASH_LARP_FIRST_MULT + (lvl - 1) * TRASH_LARP_MULT_STEP).toFixed(2));
    }

    function getNextTrashLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.trashLarpMultLvl || 0;
        return Number((TRASH_LARP_FIRST_MULT + lvl * TRASH_LARP_MULT_STEP).toFixed(2));
    }

    function getTrashLarpUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(TRASH_LARP_BASE_COST * Math.pow(TRASH_LARP_COST_SCALE, s.trashLarpMultLvl || 0));
    }

    // Кімната 40 сходинки (Швидкість персонажа по сходинках та Офлайн-фарм)
    function getCharacterMoveSpeed() {
        const s = initAuraLarpMonsterState();
        const bonusPct = (s.stepSpeedLvl || 0) * SPEED_UPG_STEP_PCT;
        return Number((1.0 * (1 + bonusPct / 100)).toFixed(2));
    }

    function getNextCharacterMoveSpeed() {
        const s = initAuraLarpMonsterState();
        const nextBonusPct = ((s.stepSpeedLvl || 0) + 1) * SPEED_UPG_STEP_PCT;
        return Number((1.0 * (1 + nextBonusPct / 100)).toFixed(2));
    }

    function getSpeedUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(SPEED_UPG_BASE_COST * Math.pow(SPEED_UPG_COST_SCALE, s.stepSpeedLvl || 0));
    }

    function getOfflineLarpPercent() {
        const s = initAuraLarpMonsterState();
        return (s.offlineLarpLvl || 0) * OFFLINE_UPG_STEP_PCT;
    }

    function getNextOfflineLarpPercent() {
        return getOfflineLarpPercent() + OFFLINE_UPG_STEP_PCT;
    }

    function getOfflineUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(OFFLINE_UPG_BASE_COST * Math.pow(OFFLINE_UPG_COST_SCALE, s.offlineLarpLvl || 0));
    }

    // Кімната 50 сходинки (Курочка та Пір'я) + вплив прокачок з 90 сходинки
    function getFeatherMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.featherMultLvl || 0;
        if (lvl <= 0) return 1.0;
        return Number((FEATHER_MULT_FIRST + (lvl - 1) * FEATHER_MULT_STEP).toFixed(2));
    }

    function getNextFeatherMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.featherMultLvl || 0;
        return Number((FEATHER_MULT_FIRST + lvl * FEATHER_MULT_STEP).toFixed(2));
    }

    function getFeatherMultUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(FEATHER_MULT_BASE_COST * Math.pow(FEATHER_MULT_COST_SCALE, s.featherMultLvl || 0));
    }

    function getFeatherLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.featherLarpMultLvl || 0;
        if (lvl <= 0) return 1.0;
        return Number((FEATHER_LARP_FIRST + (lvl - 1) * FEATHER_LARP_STEP).toFixed(2));
    }

    function getNextFeatherLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.featherLarpMultLvl || 0;
        return Number((FEATHER_LARP_FIRST + lvl * FEATHER_LARP_STEP).toFixed(2));
    }

    function getFeatherLarpUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(FEATHER_LARP_BASE_COST * Math.pow(FEATHER_LARP_COST_SCALE, s.featherLarpMultLvl || 0));
    }

    function getChickenClickDamage() {
        const s = initAuraLarpMonsterState();
        return CHICKEN_BASE_CLICK_DAMAGE + (s.mobDamageLvl || 0);
    }

    function getChickenRespawnDurationSec() {
        const s = initAuraLarpMonsterState();
        const reductionPct = Math.min(MOB_SPAWN_MAX_LVL, s.mobRespawnLvl || 0);
        return Math.max(1, Math.round(CHICKEN_BASE_RESPAWN_SEC * (1 - reductionPct / 100)));
    }

    // Кімната 60 сходинки (Шанси золотих та смарагдових сніжинок і сміття)
    function getGoldSnowChancePct() {
        const s = initAuraLarpMonsterState();
        return Number(((s.goldSnowLvl || 0) * GOLD_SNOW_STEP_PCT).toFixed(2));
    }

    function getGoldSnowUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(GOLD_SNOW_BASE_COST * Math.pow(GOLD_SNOW_COST_SCALE, s.goldSnowLvl || 0));
    }

    function getEmeraldSnowChancePct() {
        const s = initAuraLarpMonsterState();
        return Number(((s.emeraldSnowLvl || 0) * EMERALD_SNOW_STEP_PCT).toFixed(2));
    }

    function getEmeraldSnowUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(EMERALD_SNOW_BASE_COST * Math.pow(EMERALD_SNOW_COST_SCALE, s.emeraldSnowLvl || 0));
    }

    function getGoldTrashChancePct() {
        const s = initAuraLarpMonsterState();
        return Number(((s.goldTrashLvl || 0) * GOLD_TRASH_STEP_PCT).toFixed(2));
    }

    function getGoldTrashUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(GOLD_TRASH_BASE_COST * Math.pow(GOLD_TRASH_COST_SCALE, s.goldTrashLvl || 0));
    }

    function getEmeraldTrashChancePct() {
        const s = initAuraLarpMonsterState();
        return Number(((s.emeraldTrashLvl || 0) * EMERALD_TRASH_STEP_PCT).toFixed(2));
    }

    function getEmeraldTrashUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(EMERALD_TRASH_BASE_COST * Math.pow(EMERALD_TRASH_COST_SCALE, s.emeraldTrashLvl || 0));
    }

    // Кімната 70 сходинки (Вітаміни та Овочі)
    function getVitaminMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.vitaminMultLvl || 0;
        if (lvl <= 0) return 1.0;
        return Number((VITAMIN_MULT_FIRST + (lvl - 1) * VITAMIN_MULT_STEP).toFixed(2));
    }

    function getNextVitaminMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.vitaminMultLvl || 0;
        return Number((VITAMIN_MULT_FIRST + lvl * VITAMIN_MULT_STEP).toFixed(2));
    }

    function getVitaminMultUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(VITAMIN_MULT_BASE_COST * Math.pow(VITAMIN_MULT_COST_SCALE, s.vitaminMultLvl || 0));
    }

    function getMergeLv2ChancePct() {
        const s = initAuraLarpMonsterState();
        return Math.min(100, (s.mergeLv2ChanceLvl || 0) * MERGE_LV2_STEP_PCT);
    }

    function getNextMergeLv2ChancePct() {
        return Math.min(100, getMergeLv2ChancePct() + MERGE_LV2_STEP_PCT);
    }

    function getMergeLv2UpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(MERGE_LV2_BASE_COST * Math.pow(MERGE_LV2_COST_SCALE, s.mergeLv2ChanceLvl || 0));
    }

    function getMergeLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.mergeLarpMultLvl || 0;
        if (lvl <= 0) return 1.0;
        return Number((MERGE_LARP_FIRST + (lvl - 1) * MERGE_LARP_STEP).toFixed(2));
    }

    function getNextMergeLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.mergeLarpMultLvl || 0;
        return Number((MERGE_LARP_FIRST + lvl * MERGE_LARP_STEP).toFixed(2));
    }

    function getMergeLarpUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(MERGE_LARP_BASE_COST * Math.pow(MERGE_LARP_COST_SCALE, s.mergeLarpMultLvl || 0));
    }

    // Кімната 80 сходинки (Сніжна буря + Прокачки мобів)
    function getStormDurationMinutes() {
        const s = initAuraLarpMonsterState();
        return Number((STORM_BASE_DURATION_MIN + (s.stormDurationLvl || 0) * STORM_DURATION_STEP_MIN).toFixed(1));
    }

    function getNextStormDurationMinutes() {
        const s = initAuraLarpMonsterState();
        return Number((STORM_BASE_DURATION_MIN + ((s.stormDurationLvl || 0) + 1) * STORM_DURATION_STEP_MIN).toFixed(1));
    }

    function getStormDurationUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(STORM_DURATION_BASE_COST * Math.pow(STORM_DURATION_COST_SCALE, s.stormDurationLvl || 0));
    }

    function getStormCooldownHours() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(STORM_COOLDOWN_MAX_LVL, s.stormCooldownLvl || 0);
        return Number(Math.max(0.5, STORM_BASE_COOLDOWN_HR - lvl * STORM_COOLDOWN_STEP_HR).toFixed(1));
    }

    function getNextStormCooldownHours() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(STORM_COOLDOWN_MAX_LVL, (s.stormCooldownLvl || 0) + 1);
        return Number(Math.max(0.5, STORM_BASE_COOLDOWN_HR - nextLvl * STORM_COOLDOWN_STEP_HR).toFixed(1));
    }

    function getStormCooldownUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(STORM_COOLDOWN_BASE_COST * Math.pow(STORM_COOLDOWN_COST_SCALE, s.stormCooldownLvl || 0));
    }

    function getStormSnowSpawnInterval() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(STORM_SPAWN_MAX_LVL, s.stormSpeedLvl || 0);
        return Number(Math.max(0.03, STORM_BASE_SPAWN_SEC - lvl * STORM_SPAWN_STEP_SEC).toFixed(3));
    }

    function getNextStormSnowSpawnInterval() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(STORM_SPAWN_MAX_LVL, (s.stormSpeedLvl || 0) + 1);
        return Number(Math.max(0.03, STORM_BASE_SPAWN_SEC - nextLvl * STORM_SPAWN_STEP_SEC).toFixed(3));
    }

    function getStormSpeedUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(STORM_SPAWN_BASE_COST * Math.pow(STORM_SPAWN_COST_SCALE, s.stormSpeedLvl || 0));
    }

    function getMobDamageUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(MOB_DMG_BASE_COST * Math.pow(MOB_DMG_COST_SCALE, s.mobDamageLvl || 0));
    }

    function getMobRespawnUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(MOB_SPAWN_BASE_COST * Math.pow(MOB_SPAWN_COST_SCALE, s.mobRespawnLvl || 0));
    }

    function isSnowstormActive() {
        const s = initAuraLarpMonsterState();
        return Boolean(s.stormActiveEndMs && getCurrentNowMs() < s.stormActiveEndMs);
    }

    function getEffectiveSnowSpawnInterval() {
        const baseInterval = getSnowSpawnInterval();
        if (isSnowstormActive()) {
            return Math.min(baseInterval, getStormSnowSpawnInterval());
        }
        return baseInterval;
    }

    // Загальний множник Ларпів (для поточної сходинки)
    function getTotalLarpMultiplier() {
        const stairMult = getStairMultiplier();
        const roomMult = getRoomLarpMultiplier();
        const snowLarpMult = getSnowLarpMultiplier();
        const trashLarpMult = getTrashLarpMultiplier();
        const featherLarpMult = getFeatherLarpMultiplier();
        const mergeLarpMult = getMergeLarpMultiplier();
        return Number((stairMult * roomMult * snowLarpMult * trashLarpMult * featherLarpMult * mergeLarpMult).toFixed(4));
    }

    function getLarpPerSecond() {
        return BASE_LARP_PER_SEC * getTotalLarpMultiplier();
    }

    // Загальний множник та дохід Ларпів за НАЙВИЩОЮ відкритою сходинкою (для топу та оффлайн-заробітку)
    function getHighestStepTotalMultiplier() {
        const highestStairMult = getHighestStairMultiplier();
        const roomMult = getRoomLarpMultiplier();
        const snowLarpMult = getSnowLarpMultiplier();
        const trashLarpMult = getTrashLarpMultiplier();
        const featherLarpMult = getFeatherLarpMultiplier();
        const mergeLarpMult = getMergeLarpMultiplier();
        return Number((highestStairMult * roomMult * snowLarpMult * trashLarpMult * featherLarpMult * mergeLarpMult).toFixed(4));
    }

    function getHighestStepLarpPerSecond() {
        return BASE_LARP_PER_SEC * getHighestStepTotalMultiplier();
    }

    // Візуально показуємо цілі значення валют
    function formatWholeNumber(val) {
        const whole = Math.floor(Math.max(0, Number(val) || 0));
        if (whole >= 1e6 && typeof window.formatNum === 'function') {
            return window.formatNum(whole);
        }
        return whole.toLocaleString('uk-UA');
    }

    function formatLarpValue(val) {
        return formatWholeNumber(val);
    }

    function formatSnowValue(val) {
        return formatWholeNumber(val);
    }

    function formatTrashValue(val) {
        return formatWholeNumber(val);
    }

    function formatFeatherValue(val) {
        return formatWholeNumber(val);
    }

    function formatVitaminValue(val) {
        return formatWholeNumber(val);
    }

    function formatMultValue(val) {
        if (Math.abs(val - Math.round(val)) < 1e-6) {
            return Math.round(val).toString();
        }
        return Number(val.toFixed(2)).toString();
    }

    function formatDurationUk(seconds) {
        seconds = Math.max(1, Math.floor(seconds));
        const days = Math.floor(seconds / 86400);
        const hrs = Math.floor((seconds % 86400) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const parts = [];
        if (days > 0) parts.push(`${days} дн`);
        if (hrs > 0) parts.push(`${hrs} год`);
        if (mins > 0) parts.push(`${mins} хв`);
        if (secs > 0 || parts.length === 0) parts.push(`${secs} сек`);
        return parts.join(' ');
    }

    function formatTimerMmSs(seconds) {
        seconds = Math.max(0, Math.ceil(seconds));
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        if (hrs > 0) {
            return `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function pluralizeLarp(val) {
        const whole = Math.floor(Math.abs(Number(val) || 0));
        const n = whole % 100;
        const n1 = n % 10;
        if (n > 10 && n < 20) return 'ларпів';
        if (n1 === 1) return 'ларп';
        if (n1 >= 2 && n1 <= 4) return 'ларпи';
        return 'ларпів';
    }

    // Повертає дані про валюту кімнати для поточної сходинки персонажа (якщо така існує)
    function getRoomCurrencyForStep(stepNumber) {
        const s = initAuraLarpMonsterState();
        if (stepNumber === 20) {
            return {
                icon: '❄️',
                name: 'Сніжинки',
                value: formatSnowValue(s.snow),
                color: '#38bdf8'
            };
        }
        if (stepNumber === 30) {
            return {
                icon: '🗑️',
                name: 'Сміття',
                value: formatTrashValue(s.trash),
                color: '#facc15'
            };
        }
        if (stepNumber === 50) {
            return {
                icon: '🪶',
                name: "Пір'я",
                value: formatFeatherValue(s.feathers),
                color: '#fb923c'
            };
        }
        if (stepNumber === 70) {
            return {
                icon: '💊',
                name: 'Вітаміни',
                value: formatVitaminValue(s.vitamins),
                color: '#4ade80'
            };
        }
        return null;
    }

    // ------------------------------------------
    // СИНХРОНІЗАЦІЯ ТА РЕНДЕР ТОПІВ (FIREBASE, АВТООНОВЛЕННЯ КОЖНІ 3 СЕК)
    // ------------------------------------------
    function syncLarpLeaderboard(force) {
        if (!isMainGameReady()) return;
        const now = Date.now();
        if (!force && now - lastLeaderboardSyncMs < 3000) return;

        const root = getRootState();
        if (typeof dbAvailable === 'undefined' || !dbAvailable || !root.playerId || !root.nickname) return;

        const s = initAuraLarpMonsterState();
        lastLeaderboardSyncMs = now;

        const wholeCurrentLarp = Math.floor(s.larp || 0);
        const wholeTotalLarp = Math.floor(s.totalLarp || s.larp || 0);
        const wholeTotalSnow = Math.floor(s.totalSnow || s.snow || 0);
        const wholeTotalTrash = Math.floor(s.totalTrash || s.trash || 0);
        const wholeTotalFeathers = Math.floor(s.totalFeathers || s.feathers || 0);
        const wholeTotalVitamins = Math.floor(s.totalVitamins || s.vitamins || 0);
        const highestIncomePerSec = Number(getHighestStepLarpPerSecond().toFixed(2));

        try {
            firebase.database().ref('leaderboard_aura_larp/' + root.playerId).set({
                name: root.nickname,
                highestStep: getHighestUnlockedStepNumber(),
                larpPerSec: highestIncomePerSec,
                totalLarp: wholeTotalLarp,
                currentLarp: wholeCurrentLarp,
                totalSnow: wholeTotalSnow,
                totalTrash: wholeTotalTrash,
                totalFeathers: wholeTotalFeathers,
                totalVitamins: wholeTotalVitamins,
                updatedAt: firebase.database.ServerValue.TIMESTAMP
            });

            firebase.database().ref('leaderboard_aura_larp_current/' + root.playerId).set({
                name: root.nickname,
                currentLarp: wholeCurrentLarp,
                updatedAt: firebase.database.ServerValue.TIMESTAMP
            });
        } catch (e) {}
    }

    function switchLeaderboardType(type) {
        activeLeaderboardType = type;
        renderAuraLarpMonsterUI(false);
    }

    function renderLarpLeaderboardList() {
        const listEl = document.getElementById('alm-leaderboard-list');
        if (!listEl) return;

        const prevScrollTop = listEl.scrollTop;
        const root = getRootState();
        const s = initAuraLarpMonsterState();
        const myId = root.playerId || 'local_player';
        const myName = root.nickname || 'Ви';
        const myStats = {
            id: myId,
            name: myName,
            highestStep: getHighestUnlockedStepNumber(),
            larpPerSec: Number(getHighestStepLarpPerSecond().toFixed(2)),
            totalLarp: Math.floor(s.totalLarp || s.larp || 0),
            isPlayer: true
        };

        function formatMetric(player) {
            if (activeLeaderboardType === 'highestStep') {
                return `${player.highestStep || 1} сходинка`;
            }
            if (activeLeaderboardType === 'larpPerSec') {
                return `${formatMultValue(player.larpPerSec || 0)} ларп/сек`;
            }
            return `${formatLarpValue(player.totalLarp || 0)} ${pluralizeLarp(player.totalLarp || 0)}`;
        }

        function sortPlayers(arr) {
            return arr.sort((a, b) => {
                if (activeLeaderboardType === 'highestStep') {
                    const diffStep = (b.highestStep || 1) - (a.highestStep || 1);
                    if (diffStep !== 0) return diffStep;
                    return (b.totalLarp || 0) - (a.totalLarp || 0);
                }
                if (activeLeaderboardType === 'larpPerSec') {
                    const diffRate = (b.larpPerSec || 0) - (a.larpPerSec || 0);
                    if (Math.abs(diffRate) > 1e-6) return diffRate;
                    return (b.totalLarp || 0) - (a.totalLarp || 0);
                }
                return (b.totalLarp || 0) - (a.totalLarp || 0);
            });
        }

        function renderRows(players, offlineNotice) {
            const targetEl = document.getElementById('alm-leaderboard-list');
            if (!targetEl) return;

            const sorted = sortPlayers(players).slice(0, 50);
            let html = '';

            if (offlineNotice) {
                html += `
                    <div class="alm-offline-banner" style="margin-bottom: 10px;">
                        <span>⚠️ Немає підключення до інтернету — показано локальний результат.</span>
                    </div>
                `;
            }

            if (sorted.length === 0) {
                html += `<div style="text-align: center; color: #94a3b8; padding: 24px;">Немає даних для відображення</div>`;
                targetEl.innerHTML = html;
                return;
            }

            sorted.forEach((p, idx) => {
                const rank = idx + 1;
                let rankBadge = `#${rank}`;
                if (rank === 1) rankBadge = '🥇';
                else if (rank === 2) rankBadge = '🥈';
                else if (rank === 3) rankBadge = '🥉';

                html += `
                    <div class="alm-lb-row ${p.isPlayer ? 'is-player' : ''}">
                        <div class="alm-lb-rank">${rankBadge}</div>
                        <div class="alm-lb-name">${p.name}${p.isPlayer ? ' (Ви)' : ''}</div>
                        <div class="alm-lb-val">${formatMetric(p)}</div>
                    </div>
                `;
            });

            targetEl.innerHTML = html;
            targetEl.scrollTop = prevScrollTop;
        }

        if (typeof dbAvailable === 'undefined' || !dbAvailable || (typeof navigator !== 'undefined' && navigator.onLine === false)) {
            renderRows([myStats], true);
            return;
        }

        syncLarpLeaderboard(true);

        firebase.database().ref('leaderboard_aura_larp').once('value', (snapshot) => {
            const data = snapshot.val();
            const map = {};

            if (data) {
                Object.keys(data).forEach(id => {
                    map[id] = {
                        id: id,
                        name: data[id].name || 'Гравець',
                        highestStep: Number(data[id].highestStep || 1),
                        larpPerSec: Number(data[id].larpPerSec || 0),
                        totalLarp: Math.floor(Number(data[id].totalLarp || 0)),
                        isPlayer: id === myId
                    };
                });
            }

            map[myId] = myStats;
            renderRows(Object.values(map), false);
        }, () => {
            renderRows([myStats], true);
        });
    }

    function renderSideResourceLeaderboard(listElementId, fieldName, iconEmoji, myTotalValue) {
        const listEl = document.getElementById(listElementId);
        if (!listEl) return;

        const prevScrollTop = listEl.scrollTop;
        const root = getRootState();
        const myId = root.playerId || 'local_player';
        const myName = root.nickname || 'Ви';
        const myEntry = {
            id: myId,
            name: myName,
            val: Math.floor(myTotalValue || 0),
            isPlayer: true
        };

        function draw(items) {
            const targetEl = document.getElementById(listElementId);
            if (!targetEl) return;

            const sorted = items.sort((a, b) => (b.val || 0) - (a.val || 0)).slice(0, 30);
            let html = '';
            sorted.forEach((p, idx) => {
                const rank = idx + 1;
                let badge = `#${rank}`;
                if (rank === 1) badge = '🥇';
                else if (rank === 2) badge = '🥈';
                else if (rank === 3) badge = '🥉';

                html += `
                    <div class="alm-snow-lb-row ${p.isPlayer ? 'is-player' : ''}">
                        <span class="alm-snow-lb-rank">${badge}</span>
                        <span class="alm-snow-lb-name">${p.name}${p.isPlayer ? ' (Ви)' : ''}</span>
                        <span class="alm-snow-lb-val">${iconEmoji} ${formatWholeNumber(p.val || 0)}</span>
                    </div>
                `;
            });
            targetEl.innerHTML = html || `<div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:10px;">Немає даних</div>`;
            targetEl.scrollTop = prevScrollTop;
        }

        if (typeof dbAvailable === 'undefined' || !dbAvailable || (typeof navigator !== 'undefined' && navigator.onLine === false)) {
            draw([myEntry]);
            return;
        }

        syncLarpLeaderboard(true);

        firebase.database().ref('leaderboard_aura_larp').once('value', (snapshot) => {
            const data = snapshot.val();
            const map = {};
            if (data) {
                Object.keys(data).forEach(id => {
                    map[id] = {
                        id: id,
                        name: data[id].name || 'Гравець',
                        val: Math.floor(Number(data[id][fieldName] || 0)),
                        isPlayer: id === myId
                    };
                });
            }
            map[myId] = myEntry;
            draw(Object.values(map));
        }, () => {
            draw([myEntry]);
        });
    }

    function renderSnowLeaderboardList() {
        const s = initAuraLarpMonsterState();
        renderSideResourceLeaderboard('alm-snow-lb-list', 'totalSnow', '❄️', s.totalSnow || s.snow || 0);
    }

    function renderTrashLeaderboardList() {
        const s = initAuraLarpMonsterState();
        renderSideResourceLeaderboard('alm-trash-lb-list', 'totalTrash', '🗑️', s.totalTrash || s.trash || 0);
    }

    function renderFeatherLeaderboardList() {
        const s = initAuraLarpMonsterState();
        renderSideResourceLeaderboard('alm-feather-lb-list', 'totalFeathers', '🪶', s.totalFeathers || s.feathers || 0);
    }

    function renderVitaminLeaderboardList() {
        const s = initAuraLarpMonsterState();
        renderSideResourceLeaderboard('alm-vitamin-lb-list', 'totalVitamins', '💊', s.totalVitamins || s.vitamins || 0);
    }

    // ------------------------------------------
    // ДІЇ ГРАВЦЯ (СХОДИ, КІМНАТИ ТА ПРОКАЧКИ)
    // ------------------------------------------
    function unlockNextStep() {
        const s = initAuraLarpMonsterState();
        const nextStep = s.maxUnlockedStep + 1;
        if (nextStep > MAX_STEP) return;

        const stepObj = STAIRS_CONFIG.find(item => item.step === nextStep);
        if (!stepObj || s.larp < stepObj.cost) return;

        s.larp = Number((s.larp - stepObj.cost).toFixed(4));
        s.maxUnlockedStep = nextStep;
        s.highestStep = Math.max(s.highestStep || 1, nextStep);
        s.targetStep = nextStep;
        if (s.currentStep === s.targetStep) {
            s.moveProgressSec = 0;
        }

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    function moveToStep(stepNumber) {
        const s = initAuraLarpMonsterState();

        if (stepNumber === s.maxUnlockedStep + 1) {
            unlockNextStep();
            return;
        }

        if (stepNumber >= 1 && stepNumber <= s.maxUnlockedStep && stepNumber !== s.targetStep) {
            if (s.currentStep !== s.targetStep) {
                const vis = getVisualStepPosition();
                const goingUp = stepNumber > vis;
                if (goingUp) {
                    s.currentStep = Math.floor(vis);
                    s.moveProgressSec = vis - s.currentStep;
                } else {
                    s.currentStep = Math.ceil(vis);
                    s.moveProgressSec = s.currentStep - vis;
                }
            } else {
                s.moveProgressSec = 0;
            }

            s.targetStep = stepNumber;
            if (s.currentStep === s.targetStep) {
                s.moveProgressSec = 0;
            }
            persistAuraLarpState(true);
            updateAllDynamicElements(true, false);
        }
    }

    function openRoomAtStep(roomStep) {
        activeRoomStep = ROOM_STEPS.includes(roomStep) ? roomStep : 10;
        activeLarpSubTab = 'room';
        persistAuraLarpState(false);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 10 прокачка
    function buyRoomMultiplierUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 10 || s.currentStep !== 10 || s.targetStep !== 10) return;

        const cost = getRoomUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.roomMultLvl += 1;

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 20 прокачки (Сніжинки)
    function buySnowMultUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 20 || s.currentStep !== 20 || s.targetStep !== 20) return;

        const cost = getSnowMultUpgradeCost();
        if (s.snow < cost) return;

        s.snow = Number((s.snow - cost).toFixed(4));
        s.snowMultLvl += 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buySnowSpeedUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 20 || s.currentStep !== 20 || s.targetStep !== 20) return;
        if ((s.snowSpeedLvl || 0) >= SNOW_SPEED_MAX_LVL) return;

        const cost = getSnowSpeedUpgradeCost();
        if (s.snow < cost) return;

        s.snow = Number((s.snow - cost).toFixed(4));
        s.snowSpeedLvl += 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buySnowLarpUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 20 || s.currentStep !== 20 || s.targetStep !== 20) return;

        const cost = getSnowLarpUpgradeCost();
        if (s.snow < cost) return;

        s.snow = Number((s.snow - cost).toFixed(4));
        s.snowLarpMultLvl += 1;

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 30 прокачки (Сміття)
    function buyTrashMultUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 30 || s.currentStep !== 30 || s.targetStep !== 30) return;

        const cost = getTrashMultUpgradeCost();
        if (s.trash < cost) return;

        s.trash = Number((s.trash - cost).toFixed(4));
        s.trashMultLvl += 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyTrashSpeedUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 30 || s.currentStep !== 30 || s.targetStep !== 30) return;
        if ((s.trashSpeedLvl || 0) >= TRASH_SPEED_MAX_LVL) return;

        const cost = getTrashSpeedUpgradeCost();
        if (s.trash < cost) return;

        s.trash = Number((s.trash - cost).toFixed(4));
        s.trashSpeedLvl += 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyTrashLarpUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 30 || s.currentStep !== 30 || s.targetStep !== 30) return;

        const cost = getTrashLarpUpgradeCost();
        if (s.trash < cost) return;

        s.trash = Number((s.trash - cost).toFixed(4));
        s.trashLarpMultLvl += 1;

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 40 прокачки (Швидкість та Офлайн)
    function buyStepSpeedUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 40 || s.currentStep !== 40 || s.targetStep !== 40) return;

        const cost = getSpeedUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.stepSpeedLvl += 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyOfflineLarpUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 40 || s.currentStep !== 40 || s.targetStep !== 40) return;

        const cost = getOfflineUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.offlineLarpLvl += 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 50 прокачки та атака Курочки
    function buyFeatherMultUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 50 || s.currentStep !== 50 || s.targetStep !== 50) return;

        const cost = getFeatherMultUpgradeCost();
        if (s.feathers < cost) return;

        s.feathers = Number((s.feathers - cost).toFixed(4));
        s.featherMultLvl += 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyFeatherLarpUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 50 || s.currentStep !== 50 || s.targetStep !== 50) return;

        const cost = getFeatherLarpUpgradeCost();
        if (s.feathers < cost) return;

        s.feathers = Number((s.feathers - cost).toFixed(4));
        s.featherLarpMultLvl += 1;

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 60 прокачки (Шанси золотих х10 та смарагдових х1000 предметів)
    function buyGoldSnowUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 60 || s.currentStep !== 60 || s.targetStep !== 60) return;
        if ((s.goldSnowLvl || 0) >= GOLD_SNOW_MAX_LVL) return;

        const cost = getGoldSnowUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.goldSnowLvl = (s.goldSnowLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyEmeraldSnowUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 60 || s.currentStep !== 60 || s.targetStep !== 60) return;
        if ((s.emeraldSnowLvl || 0) >= EMERALD_SNOW_MAX_LVL) return;

        const cost = getEmeraldSnowUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.emeraldSnowLvl = (s.emeraldSnowLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyGoldTrashUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 60 || s.currentStep !== 60 || s.targetStep !== 60) return;
        if ((s.goldTrashLvl || 0) >= GOLD_TRASH_MAX_LVL) return;

        const cost = getGoldTrashUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.goldTrashLvl = (s.goldTrashLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyEmeraldTrashUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 60 || s.currentStep !== 60 || s.targetStep !== 60) return;
        if ((s.emeraldTrashLvl || 0) >= EMERALD_TRASH_MAX_LVL) return;

        const cost = getEmeraldTrashUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.emeraldTrashLvl = (s.emeraldTrashLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 70 прокачки (Вітаміни та Овочі)
    function buyVitaminMultUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 70 || s.currentStep !== 70 || s.targetStep !== 70) return;

        const cost = getVitaminMultUpgradeCost();
        if (s.vitamins < cost) return;

        s.vitamins = Number((s.vitamins - cost).toFixed(4));
        s.vitaminMultLvl = (s.vitaminMultLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyMergeLv2Upgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 70 || s.currentStep !== 70 || s.targetStep !== 70) return;
        if ((s.mergeLv2ChanceLvl || 0) >= MERGE_LV2_MAX_LVL) return;

        const cost = getMergeLv2UpgradeCost();
        if (s.vitamins < cost) return;

        s.vitamins = Number((s.vitamins - cost).toFixed(4));
        s.mergeLv2ChanceLvl = (s.mergeLv2ChanceLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyMergeLarpUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 70 || s.currentStep !== 70 || s.targetStep !== 70) return;

        const cost = getMergeLarpUpgradeCost();
        if (s.vitamins < cost) return;

        s.vitamins = Number((s.vitamins - cost).toFixed(4));
        s.mergeLarpMultLvl = (s.mergeLarpMultLvl || 0) + 1;

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 80 (Виклик сніжної бурі та прокачки бурі)
    function activateSnowstorm() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 80 || s.currentStep !== 80 || s.targetStep !== 80) return;

        const now = getCurrentNowMs();
        if (s.stormCooldownEndMs && now < s.stormCooldownEndMs) return;

        const durationMs = getStormDurationMinutes() * 60 * 1000;
        const cooldownMs = getStormCooldownHours() * 3600 * 1000;

        s.stormActiveEndMs = now + durationMs;
        s.stormCooldownEndMs = now + cooldownMs;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyStormDurationUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 80 || s.currentStep !== 80 || s.targetStep !== 80) return;

        const cost = getStormDurationUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.stormDurationLvl = (s.stormDurationLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyStormCooldownUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 80 || s.currentStep !== 80 || s.targetStep !== 80) return;
        if ((s.stormCooldownLvl || 0) >= STORM_COOLDOWN_MAX_LVL) return;

        const cost = getStormCooldownUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.stormCooldownLvl = (s.stormCooldownLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyStormSpeedUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 80 || s.currentStep !== 80 || s.targetStep !== 80) return;
        if ((s.stormSpeedLvl || 0) >= STORM_SPAWN_MAX_LVL) return;

        const cost = getStormSpeedUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.stormSpeedLvl = (s.stormSpeedLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 90 (Прокачки мобів)
    function buyMobDamageUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 90 || s.currentStep !== 90 || s.targetStep !== 90) return;
        if ((s.mobDamageLvl || 0) >= MOB_DMG_MAX_LVL) return;

        const cost = getMobDamageUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.mobDamageLvl = (s.mobDamageLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyMobRespawnUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 90 || s.currentStep !== 90 || s.targetStep !== 90) return;
        if ((s.mobRespawnLvl || 0) >= MOB_SPAWN_MAX_LVL) return;

        const cost = getMobRespawnUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.mobRespawnLvl = (s.mobRespawnLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function getCurrentNowMs() {
        return isGlobalTimeVerified ? (Date.now() + globalTimeOffsetMs) : Date.now();
    }

    function attackChickenMob(event) {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 50 || s.currentStep !== 50 || s.targetStep !== 50) return;
        if (s.chickenRespawnEndMs || s.chickenHp <= 0) return;

        const dmg = getChickenClickDamage();
        s.chickenHp = Math.max(0, s.chickenHp - dmg);

        const arenaEl = document.getElementById('alm-chicken-arena');
        const mobBtn = document.getElementById('alm-chicken-mob-btn');
        if (mobBtn) {
            mobBtn.classList.remove('hit');
            void mobBtn.offsetWidth;
            mobBtn.classList.add('hit');
        }
        if (arenaEl) {
            const rect = arenaEl.getBoundingClientRect();
            const popX = event && event.clientX ? (event.clientX - rect.left) : (rect.width / 2);
            const popY = event && event.clientY ? (event.clientY - rect.top) : (rect.height / 2);
            const dmgPop = document.createElement('div');
            dmgPop.className = 'alm-dmg-pop';
            dmgPop.style.left = `${popX}px`;
            dmgPop.style.top = `${popY}px`;
            dmgPop.textContent = `-${dmg}`;
            arenaEl.appendChild(dmgPop);
            setTimeout(() => {
                if (dmgPop.parentNode) dmgPop.parentNode.removeChild(dmgPop);
            }, 600);
        }

        if (s.chickenHp <= 0) {
            const droppedFeathers = Math.round(CHICKEN_BASE_FEATHER_DROP * getFeatherMultiplier());
            s.feathers += droppedFeathers;
            s.totalFeathers += droppedFeathers;
            s.chickenRespawnEndMs = getCurrentNowMs() + getChickenRespawnDurationSec() * 1000;

            if (arenaEl) {
                const lootPop = document.createElement('div');
                lootPop.className = 'alm-feather-loot-pop';
                lootPop.textContent = `+${formatFeatherValue(droppedFeathers)} 🪶`;
                arenaEl.appendChild(lootPop);
                setTimeout(() => {
                    if (lootPop.parentNode) lootPop.parentNode.removeChild(lootPop);
                }, 1100);
            }

            persistAuraLarpState(true);
            syncLarpLeaderboard(true);
            renderAuraLarpMonsterUI(false);
        } else {
            updateChickenDynamicHud();
        }
    }

    function updateChickenDynamicHud() {
        const s = initAuraLarpMonsterState();
        const hpFill = document.getElementById('alm-chicken-hp-fill');
        const hpText = document.getElementById('alm-chicken-hp-text');
        const balEl = document.getElementById('alm-feather-balance');
        const totalEl = document.getElementById('alm-feather-total');
        const timerEl = document.getElementById('alm-chicken-respawn-timer');

        if (hpFill) {
            const pct = Math.max(0, Math.min(100, (s.chickenHp / CHICKEN_MAX_HP) * 100));
            hpFill.style.width = `${pct}%`;
        }
        if (hpText) {
            hpText.textContent = `${Math.ceil(s.chickenHp)} / ${CHICKEN_MAX_HP} HP`;
        }
        if (balEl) {
            balEl.textContent = formatFeatherValue(s.feathers);
        }
        if (totalEl) {
            totalEl.textContent = formatFeatherValue(s.totalFeathers);
        }
        if (timerEl && s.chickenRespawnEndMs) {
            const leftSec = Math.max(0, (s.chickenRespawnEndMs - getCurrentNowMs()) / 1000);
            timerEl.textContent = formatTimerMmSs(leftSec);
        }
    }

    function updateStormDynamicHud() {
        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();
        const statusEl = document.getElementById('alm-storm-status-text');
        const btnEl = document.getElementById('alm-storm-activate-btn');
        const room20TimerEl = document.getElementById('alm-room20-storm-timer');

        const active = s.stormActiveEndMs && now < s.stormActiveEndMs;
        const onCooldown = s.stormCooldownEndMs && now < s.stormCooldownEndMs;

        if (room20TimerEl && active) {
            const leftSec = Math.max(0, (s.stormActiveEndMs - now) / 1000);
            room20TimerEl.textContent = formatTimerMmSs(leftSec);
        }

        if (!statusEl && !btnEl) return;

        if (active) {
            const leftSec = Math.max(0, (s.stormActiveEndMs - now) / 1000);
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#38bdf8;font-weight:900;">🌨️ Сніжна буря вирує! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
            }
            if (btnEl) {
                btnEl.disabled = true;
                btnEl.textContent = `🌨️ Буря активна (${formatTimerMmSs(leftSec)})`;
            }
        } else if (onCooldown) {
            const cdLeftSec = Math.max(0, (s.stormCooldownEndMs - now) / 1000);
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#f59e0b;font-weight:800;">⏳ Перезарядка бурі: ${formatTimerMmSs(cdLeftSec)}</span>`;
            }
            if (btnEl) {
                btnEl.disabled = true;
                btnEl.textContent = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
            }
        } else {
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#4ade80;font-weight:800;">✅ Сніжна буря готова до запуску!</span>`;
            }
            if (btnEl) {
                btnEl.disabled = false;
                btnEl.textContent = `🌨️ Викликати сніжну бурю (${getStormDurationMinutes()} хв)`;
            }
        }
    }

    // ------------------------------------------
    // МЕХАНІКА СНІЖИНОК (20 СХОДИНКА + ЗОЛОТІ x10 / СМАРАГДОВІ x1000)
    // ------------------------------------------
    function canInteractWithRoom(stepNumber) {
        const s = initAuraLarpMonsterState();
        return s.maxUnlockedStep >= stepNumber && s.currentStep === stepNumber && s.targetStep === stepNumber;
    }

    function rollSnowflakeRarity() {
        const emeraldChance = getEmeraldSnowChancePct() / 100;
        const goldChance = getGoldSnowChancePct() / 100;
        const r = Math.random();
        if (r < emeraldChance) return 'emerald';
        if (r < emeraldChance + goldChance) return 'gold';
        return 'normal';
    }

    function spawnSingleSnowflake() {
        if (activeSnowflakes.length >= MAX_SNOWFLAKES) return;

        const flake = {
            id: nextSnowflakeId++,
            xPct: Number((8 + Math.random() * 84).toFixed(2)),
            yPct: Number((10 + Math.random() * 74).toFixed(2)),
            rarity: rollSnowflakeRarity()
        };
        activeSnowflakes.push(flake);

        const zoneEl = document.getElementById('alm-snow-zone');
        if (zoneEl) {
            const el = createSnowflakeElement(flake);
            zoneEl.appendChild(el);
            updateSnowCounterText();
        }
    }

    function bindSnowflakeElementEvents(el, flakeId) {
        if (!el || el.dataset.almBound === '1') return;
        el.dataset.almBound = '1';

        el.addEventListener('pointerenter', () => {
            if (canInteractWithRoom(20)) {
                collectSnowflakeById(flakeId);
            }
        });

        el.addEventListener('mouseover', () => {
            if (canInteractWithRoom(20)) {
                collectSnowflakeById(flakeId);
            }
        });

        el.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isPointerSwipingSnow = true;
            if (canInteractWithRoom(20)) {
                collectSnowflakeById(flakeId);
            }
        });
    }

    function createSnowflakeElement(flake) {
        const el = document.createElement('div');
        const rarity = flake.rarity || 'normal';
        el.className = 'alm-snowflake-item' + (rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : ''));
        el.dataset.flakeId = String(flake.id);
        el.style.left = `${flake.xPct}%`;
        el.style.top = `${flake.yPct}%`;
        el.textContent = '❄️';

        bindSnowflakeElementEvents(el, flake.id);

        return el;
    }

    function bindSnowZoneEvents() {
        const snowZone = document.getElementById('alm-snow-zone');
        if (!snowZone) return;

        snowZone.querySelectorAll('.alm-snowflake-item').forEach(el => {
            const id = Number(el.dataset.flakeId);
            if (id) bindSnowflakeElementEvents(el, id);
        });

        if (snowZone.dataset.almZoneBound === '1') return;
        snowZone.dataset.almZoneBound = '1';

        snowZone.addEventListener('pointerdown', () => {
            isPointerSwipingSnow = true;
        });

        snowZone.addEventListener('pointermove', (e) => {
            if (!canInteractWithRoom(20)) return;
            const target = document.elementFromPoint(e.clientX, e.clientY);
            const flakeEl = target && target.closest ? target.closest('.alm-snowflake-item') : null;
            if (flakeEl) {
                const id = Number(flakeEl.dataset.flakeId);
                if (id) collectSnowflakeById(id);
            }
        });

        snowZone.addEventListener('touchmove', handleSnowZoneTouchMove, { passive: true });
    }

    function collectSnowflakeById(id) {
        if (!canInteractWithRoom(20)) return;

        const idx = activeSnowflakes.findIndex(f => f.id === id);
        if (idx === -1) return;

        const flake = activeSnowflakes[idx];
        activeSnowflakes.splice(idx, 1);

        const s = initAuraLarpMonsterState();
        const rarity = flake.rarity || 'normal';
        // Золоті сніжинки дають x10, смарагдові — x1000
        const rarityMult = rarity === 'emerald' ? 1000 : (rarity === 'gold' ? 10 : 1);
        const gain = getSnowMultiplier() * rarityMult;

        s.snow = Number((s.snow + gain).toFixed(4));
        s.totalSnow = Number((s.totalSnow + gain).toFixed(4));

        const zoneEl = document.getElementById('alm-snow-zone');
        if (zoneEl) {
            const el = zoneEl.querySelector(`.alm-snowflake-item[data-flake-id="${id}"]`);
            if (el) el.remove();

            const pop = document.createElement('div');
            pop.className = 'alm-snow-pop' + (rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : ''));
            pop.style.left = `${flake.xPct}%`;
            pop.style.top = `${flake.yPct}%`;
            const badge = rarity === 'emerald' ? ' 💎x1000' : (rarity === 'gold' ? ' ✨x10' : '');
            pop.textContent = `+${formatSnowValue(gain)} ❄️${badge}`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 650);
        }

        updateSnowCounterText();
        updateRoomUpgradeButtons();
    }

    function handleSnowZoneTouchMove(e) {
        if (!canInteractWithRoom(20)) return;
        if (!e.touches || e.touches.length === 0) return;
        const touch = e.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        const flakeEl = target && target.closest ? target.closest('.alm-snowflake-item') : null;
        if (flakeEl) {
            const id = Number(flakeEl.dataset.flakeId);
            if (id) collectSnowflakeById(id);
        }
    }

    function updateSnowCounterText() {
        const s = initAuraLarpMonsterState();
        const countEl = document.getElementById('alm-snow-count-badge');
        if (countEl) {
            countEl.textContent = `${activeSnowflakes.length} / ${MAX_SNOWFLAKES}`;
        }
        const snowBalEl = document.getElementById('alm-snow-balance');
        if (snowBalEl) {
            snowBalEl.textContent = formatSnowValue(s.snow);
        }
        const snowTotalEl = document.getElementById('alm-snow-total');
        if (snowTotalEl) {
            snowTotalEl.textContent = formatSnowValue(s.totalSnow);
        }
    }

    // ------------------------------------------
    // МЕХАНІКА ПРИБИРАННЯ СМІТТЯ (30 СХОДИНКА + ЗОЛОТЕ x10 / СМАРАГДОВЕ x1000)
    // ------------------------------------------
    function rollTrashRarity() {
        const emeraldChance = getEmeraldTrashChancePct() / 100;
        const goldChance = getGoldTrashChancePct() / 100;
        const r = Math.random();
        if (r < emeraldChance) return 'emerald';
        if (r < emeraldChance + goldChance) return 'gold';
        return 'normal';
    }

    function spawnSingleTrashItem() {
        if (activeTrashItems.length >= MAX_TRASH_ITEMS) return;

        const icon = TRASH_ICONS[Math.floor(Math.random() * TRASH_ICONS.length)];
        // Спавнимо сміття по краях поля, щоб воно не з'являлось одразу всередині центрального кола
        let xPct = 10 + Math.random() * 80;
        let yPct = 12 + Math.random() * 70;
        if (Math.hypot(xPct - 50, yPct - 50) < 22) {
            xPct = xPct < 50 ? 18 : 82;
        }

        const item = {
            id: nextTrashId++,
            xPct: Number(xPct.toFixed(2)),
            yPct: Number(yPct.toFixed(2)),
            icon: icon,
            rarity: rollTrashRarity()
        };
        activeTrashItems.push(item);

        const zoneEl = document.getElementById('alm-trash-zone');
        if (zoneEl) {
            const el = createTrashElement(item);
            zoneEl.appendChild(el);
            updateTrashCounterText();
        }
    }

    function bindTrashElementEvents(el, itemId) {
        if (!el || el.dataset.almBound === '1') return;
        el.dataset.almBound = '1';

        el.addEventListener('pointerdown', (e) => {
            if (!canInteractWithRoom(30)) return;
            e.preventDefault();
            e.stopPropagation();
            draggingTrashId = itemId;
            el.classList.add('dragging');
            try {
                el.setPointerCapture(e.pointerId);
            } catch (err) {}
        });
    }

    function createTrashElement(item) {
        const el = document.createElement('div');
        const rarity = item.rarity || 'normal';
        el.className = 'alm-trash-item' + (rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : ''));
        el.dataset.trashId = String(item.id);
        el.style.left = `${item.xPct}%`;
        el.style.top = `${item.yPct}%`;
        el.textContent = item.icon;

        bindTrashElementEvents(el, item.id);

        return el;
    }

    function bindTrashZoneEvents() {
        const trashZone = document.getElementById('alm-trash-zone');
        if (!trashZone) return;

        trashZone.querySelectorAll('.alm-trash-item').forEach(el => {
            const id = Number(el.dataset.trashId);
            if (id) bindTrashElementEvents(el, id);
        });
    }

    function moveDraggingTrash(id, clientX, clientY) {
        const zoneEl = document.getElementById('alm-trash-zone');
        if (!zoneEl) return;
        const item = activeTrashItems.find(t => t.id === id);
        if (!item) return;

        const rect = zoneEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const xPct = Math.min(94, Math.max(6, ((clientX - rect.left) / rect.width) * 100));
        const yPct = Math.min(92, Math.max(8, ((clientY - rect.top) / rect.height) * 100));

        item.xPct = Number(xPct.toFixed(2));
        item.yPct = Number(yPct.toFixed(2));

        const el = zoneEl.querySelector(`.alm-trash-item[data-trash-id="${id}"]`);
        if (el) {
            el.style.left = `${item.xPct}%`;
            el.style.top = `${item.yPct}%`;
        }

        const binEl = document.getElementById('alm-trash-bin');
        if (binEl) {
            const binRect = binEl.getBoundingClientRect();
            const centerX = binRect.left + binRect.width / 2;
            const centerY = binRect.top + binRect.height / 2;
            const radius = Math.max(binRect.width, binRect.height) * 0.65;
            const isOverBin = Math.hypot(clientX - centerX, clientY - centerY) <= radius;
            binEl.classList.toggle('bin-highlight', isOverBin);
        }
    }

    function checkTrashDropIntoCenter(id, clientX, clientY) {
        const binEl = document.getElementById('alm-trash-bin');
        const zoneEl = document.getElementById('alm-trash-zone');
        if (binEl) binEl.classList.remove('bin-highlight');
        if (!binEl || !zoneEl) return;

        const item = activeTrashItems.find(t => t.id === id);
        if (!item) return;

        const binRect = binEl.getBoundingClientRect();
        let droppedInCenter = false;

        if (typeof clientX === 'number' && typeof clientY === 'number') {
            const centerX = binRect.left + binRect.width / 2;
            const centerY = binRect.top + binRect.height / 2;
            const radius = Math.max(binRect.width, binRect.height) * 0.68;
            droppedInCenter = Math.hypot(clientX - centerX, clientY - centerY) <= radius;
        } else {
            droppedInCenter = Math.hypot(item.xPct - 50, item.yPct - 50) <= 18;
        }

        if (droppedInCenter) {
            collectTrashById(id);
        }
    }

    function collectTrashById(id) {
        const idx = activeTrashItems.findIndex(t => t.id === id);
        if (idx === -1) return;

        const item = activeTrashItems[idx];
        activeTrashItems.splice(idx, 1);

        const s = initAuraLarpMonsterState();
        const rarity = item.rarity || 'normal';
        // Золоте сміття дає x10, смарагдове — x1000
        const rarityMult = rarity === 'emerald' ? 1000 : (rarity === 'gold' ? 10 : 1);
        const gain = getTrashMultiplier() * rarityMult;

        s.trash = Number((s.trash + gain).toFixed(4));
        s.totalTrash = Number((s.totalTrash + gain).toFixed(4));

        const zoneEl = document.getElementById('alm-trash-zone');
        if (zoneEl) {
            const el = zoneEl.querySelector(`.alm-trash-item[data-trash-id="${id}"]`);
            if (el) el.remove();

            const pop = document.createElement('div');
            pop.className = 'alm-trash-pop' + (rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : ''));
            pop.style.left = '50%';
            pop.style.top = '50%';
            const badge = rarity === 'emerald' ? ' 💎x1000' : (rarity === 'gold' ? ' ✨x10' : '');
            pop.textContent = `+${formatTrashValue(gain)} 🗑️${badge}`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 700);
        }

        updateTrashCounterText();
        updateRoomUpgradeButtons();
    }

    function updateTrashCounterText() {
        const s = initAuraLarpMonsterState();
        const countEl = document.getElementById('alm-trash-count-badge');
        if (countEl) {
            countEl.textContent = `${activeTrashItems.length} / ${MAX_TRASH_ITEMS}`;
        }
        const trashBalEl = document.getElementById('alm-trash-balance');
        if (trashBalEl) {
            trashBalEl.textContent = formatTrashValue(s.trash);
        }
        const trashTotalEl = document.getElementById('alm-trash-total');
        if (trashTotalEl) {
            trashTotalEl.textContent = formatTrashValue(s.totalTrash);
        }
    }

    // ------------------------------------------
    // МЕХАНІКА ОБ'ЄДНАННЯ ОВОЧІВ ТА ФРУКТІВ (70 СХОДИНКА — ВІТАМІНИ)
    // ------------------------------------------
    function getMergeTierInfo(level) {
        const clamped = Math.max(1, Math.min(MERGE_HIERARCHY.length, level || 1));
        return MERGE_HIERARCHY[clamped - 1];
    }

    function getVitaminRewardForMerge(resultingLevel) {
        const base = Math.max(1, Math.round(Math.pow(1.65, resultingLevel - 1)));
        return Math.max(1, Math.round(base * getVitaminMultiplier()));
    }

    function spawnSingleMergeItem() {
        if (activeMergeItems.length >= MAX_MERGE_ITEMS) return;

        const lv2Chance = getMergeLv2ChancePct() / 100;
        const startLevel = Math.random() < lv2Chance ? 2 : 1;

        const item = {
            id: nextMergeId++,
            xPct: Number((10 + Math.random() * 80).toFixed(2)),
            yPct: Number((12 + Math.random() * 72).toFixed(2)),
            level: startLevel
        };
        activeMergeItems.push(item);

        const zoneEl = document.getElementById('alm-merge-zone');
        if (zoneEl) {
            const el = createMergeElement(item);
            zoneEl.appendChild(el);
            updateMergeCounterText();
        }
    }

    function bindMergeElementEvents(el, itemId) {
        if (!el || el.dataset.almBound === '1') return;
        el.dataset.almBound = '1';

        el.addEventListener('pointerdown', (e) => {
            if (!canInteractWithRoom(70)) return;
            e.preventDefault();
            e.stopPropagation();
            draggingMergeId = itemId;
            el.classList.add('dragging');
            try {
                el.setPointerCapture(e.pointerId);
            } catch (err) {}
        });
    }

    function createMergeElement(item) {
        const tier = getMergeTierInfo(item.level);
        const el = document.createElement('div');
        el.className = 'alm-merge-item';
        el.dataset.mergeId = String(item.id);
        el.style.left = `${item.xPct}%`;
        el.style.top = `${item.yPct}%`;
        el.innerHTML = `
            <span class="alm-merge-emoji">${tier.icon}</span>
            <span class="alm-merge-lvl-badge">${item.level}</span>
        `;

        bindMergeElementEvents(el, item.id);

        return el;
    }

    function bindMergeZoneEvents() {
        const mergeZone = document.getElementById('alm-merge-zone');
        if (!mergeZone) return;

        mergeZone.querySelectorAll('.alm-merge-item').forEach(el => {
            const id = Number(el.dataset.mergeId);
            if (id) bindMergeElementEvents(el, id);
        });
    }

    function moveDraggingMerge(id, clientX, clientY) {
        const zoneEl = document.getElementById('alm-merge-zone');
        if (!zoneEl) return;
        const item = activeMergeItems.find(m => m.id === id);
        if (!item) return;

        const rect = zoneEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const xPct = Math.min(93, Math.max(7, ((clientX - rect.left) / rect.width) * 100));
        const yPct = Math.min(89, Math.max(9, ((clientY - rect.top) / rect.height) * 100));

        item.xPct = Number(xPct.toFixed(2));
        item.yPct = Number(yPct.toFixed(2));

        const el = zoneEl.querySelector(`.alm-merge-item[data-merge-id="${id}"]`);
        if (el) {
            el.style.left = `${item.xPct}%`;
            el.style.top = `${item.yPct}%`;
        }

        zoneEl.querySelectorAll('.alm-merge-item').forEach(node => {
            const otherId = Number(node.dataset.mergeId);
            if (otherId === id) {
                node.classList.remove('merge-target-highlight');
                return;
            }
            const other = activeMergeItems.find(m => m.id === otherId);
            if (other && other.level === item.level && item.level < MERGE_HIERARCHY.length) {
                const dist = Math.hypot(other.xPct - item.xPct, other.yPct - item.yPct);
                node.classList.toggle('merge-target-highlight', dist <= 13);
            } else {
                node.classList.remove('merge-target-highlight');
            }
        });
    }

    function tryCombineDraggedMergeItem(draggedId) {
        const zoneEl = document.getElementById('alm-merge-zone');
        if (zoneEl) {
            zoneEl.querySelectorAll('.alm-merge-item').forEach(n => n.classList.remove('merge-target-highlight'));
        }

        const draggedIdx = activeMergeItems.findIndex(m => m.id === draggedId);
        if (draggedIdx === -1) return;
        const dragged = activeMergeItems[draggedIdx];

        if (dragged.level >= MERGE_HIERARCHY.length) return;

        let bestTarget = null;
        let bestDist = Infinity;

        for (let i = 0; i < activeMergeItems.length; i++) {
            const candidate = activeMergeItems[i];
            if (candidate.id === dragged.id) continue;
            if (candidate.level !== dragged.level) continue;

            const dist = Math.hypot(candidate.xPct - dragged.xPct, candidate.yPct - dragged.yPct);
            if (dist <= 13 && dist < bestDist) {
                bestDist = dist;
                bestTarget = candidate;
            }
        }

        if (!bestTarget) return;

        const newLevel = bestTarget.level + 1;
        const targetX = bestTarget.xPct;
        const targetY = bestTarget.yPct;

        activeMergeItems = activeMergeItems.filter(m => m.id !== dragged.id && m.id !== bestTarget.id);

        const s = initAuraLarpMonsterState();
        const gainedVitamins = getVitaminRewardForMerge(newLevel);
        s.vitamins = Number((s.vitamins + gainedVitamins).toFixed(4));
        s.totalVitamins = Number((s.totalVitamins + gainedVitamins).toFixed(4));

        if (zoneEl) {
            const oldDragNode = zoneEl.querySelector(`.alm-merge-item[data-merge-id="${dragged.id}"]`);
            if (oldDragNode) oldDragNode.remove();
            const oldTargetNode = zoneEl.querySelector(`.alm-merge-item[data-merge-id="${bestTarget.id}"]`);
            if (oldTargetNode) oldTargetNode.remove();
        }

        const mergedItem = {
            id: nextMergeId++,
            xPct: targetX,
            yPct: targetY,
            level: newLevel
        };
        activeMergeItems.push(mergedItem);

        if (zoneEl) {
            const newNode = createMergeElement(mergedItem);
            newNode.classList.add('merge-pop-in');
            zoneEl.appendChild(newNode);

            const pop = document.createElement('div');
            pop.className = 'alm-merge-pop';
            pop.style.left = `${targetX}%`;
            pop.style.top = `${targetY}%`;
            const tier = getMergeTierInfo(newLevel);
            pop.textContent = `${tier.icon} +${formatVitaminValue(gainedVitamins)} 💊`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 800);
        }

        updateMergeCounterText();
        updateRoomUpgradeButtons();
        persistAuraLarpState(false);
    }

    function sellHighestOrRandomMergeItem() {
        if (activeMergeItems.length === 0) return;
        let idxToRemove = 0;
        for (let i = 1; i < activeMergeItems.length; i++) {
            if (activeMergeItems[i].level < activeMergeItems[idxToRemove].level) {
                idxToRemove = i;
            }
        }
        const removed = activeMergeItems.splice(idxToRemove, 1)[0];
        const s = initAuraLarpMonsterState();
        const bonus = Math.max(1, Math.round(removed.level * getVitaminMultiplier()));
        s.vitamins = Number((s.vitamins + bonus).toFixed(4));
        s.totalVitamins = Number((s.totalVitamins + bonus).toFixed(4));

        const zoneEl = document.getElementById('alm-merge-zone');
        if (zoneEl && removed) {
            const node = zoneEl.querySelector(`.alm-merge-item[data-merge-id="${removed.id}"]`);
            if (node) node.remove();
        }
        updateMergeCounterText();
        updateRoomUpgradeButtons();
        persistAuraLarpState(false);
    }

    function updateMergeCounterText() {
        const s = initAuraLarpMonsterState();
        const countEl = document.getElementById('alm-merge-count-badge');
        if (countEl) {
            countEl.textContent = `${activeMergeItems.length} / ${MAX_MERGE_ITEMS}`;
        }
        const vitBalEl = document.getElementById('alm-vitamin-balance');
        if (vitBalEl) {
            vitBalEl.textContent = formatVitaminValue(s.vitamins);
        }
        const vitTotalEl = document.getElementById('alm-vitamin-total');
        if (vitTotalEl) {
            vitTotalEl.textContent = formatVitaminValue(s.totalVitamins);
        }
    }

    // ------------------------------------------
    // ЦИКЛ ОНОВЛЕННЯ ЛОГІКИ ТА АНІМАЦІЇ
    // ------------------------------------------
    function tickAuraLarpLogic(dt) {
        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();

        // Перевірка закінчення сніжної бурі
        if (s.stormActiveEndMs && now >= s.stormActiveEndMs) {
            s.stormActiveEndMs = null;
            if (isAuraLarpModeActive && activeLarpSubTab === 'room' && activeRoomStep === 20) {
                renderAuraLarpMonsterUI(false);
            }
        }
        if (s.stormCooldownEndMs && now >= s.stormCooldownEndMs) {
            s.stormCooldownEndMs = null;
        }

        // Перевірка відродження Бойової Квочки Рябої (50 сходинка)
        if (s.chickenRespawnEndMs && now >= s.chickenRespawnEndMs) {
            s.chickenRespawnEndMs = null;
            s.chickenHp = CHICKEN_MAX_HP;
            if (isAuraLarpModeActive && activeLarpSubTab === 'room' && activeRoomStep === 50) {
                renderAuraLarpMonsterUI(false);
            }
        }

        // 1. Пасивний заробіток Ларпів (поточна сходинка * множники кімнат)
        const rate = getLarpPerSecond();
        if (rate > 0) {
            const earned = rate * dt;
            s.larp += earned;
            s.totalLarp += earned;
        }

        // 2. Пересування персонажа по сходинках
        if (s.currentStep !== s.targetStep) {
            const dir = s.targetStep > s.currentStep ? 1 : -1;
            const moveSpeed = getCharacterMoveSpeed();
            s.moveProgressSec += dt * moveSpeed;

            while (s.moveProgressSec >= 1.0 && s.currentStep !== s.targetStep) {
                s.moveProgressSec -= 1.0;
                s.currentStep += dir;
                s.highestStep = Math.max(s.highestStep || 1, s.currentStep);
            }

            if (s.currentStep === s.targetStep) {
                s.moveProgressSec = 0;
                persistAuraLarpState(false);
                if (isAuraLarpModeActive && activeLarpSubTab === 'room') {
                    renderAuraLarpMonsterUI(false);
                }
            }
        }

        // 3. Спавн сніжинок (якщо відкрита 20 сходинка)
        if (s.maxUnlockedStep >= 20) {
            const interval = getEffectiveSnowSpawnInterval();
            if (activeSnowflakes.length < MAX_SNOWFLAKES) {
                snowSpawnAccumSec += dt;
                while (snowSpawnAccumSec >= interval && activeSnowflakes.length < MAX_SNOWFLAKES) {
                    snowSpawnAccumSec -= interval;
                    spawnSingleSnowflake();
                }
            } else {
                snowSpawnAccumSec = 0;
            }
        }

        // 4. Спавн сміття (якщо відкрита 30 сходинка)
        if (s.maxUnlockedStep >= 30) {
            const trashInterval = getTrashSpawnInterval();
            if (activeTrashItems.length < MAX_TRASH_ITEMS) {
                trashSpawnAccumSec += dt;
                while (trashSpawnAccumSec >= trashInterval && activeTrashItems.length < MAX_TRASH_ITEMS) {
                    trashSpawnAccumSec -= trashInterval;
                    spawnSingleTrashItem();
                }
            } else {
                trashSpawnAccumSec = 0;
            }
        }

        // 5. Спавн овочів та фруктів (якщо відкрита 70 сходинка)
        if (s.maxUnlockedStep >= 70) {
            if (activeMergeItems.length < MAX_MERGE_ITEMS) {
                mergeSpawnAccumSec += dt;
                while (mergeSpawnAccumSec >= MERGE_SPAWN_SEC && activeMergeItems.length < MAX_MERGE_ITEMS) {
                    mergeSpawnAccumSec -= MERGE_SPAWN_SEC;
                    spawnSingleMergeItem();
                }
            } else {
                mergeSpawnAccumSec = 0;
            }
        }
    }

    function startVisualAnimationLoop() {
        if (rafId) cancelAnimationFrame(rafId);

        function loop() {
            if (!isAuraLarpModeActive) {
                rafId = null;
                return;
            }
            updateAllDynamicElements(false, false);
            rafId = requestAnimationFrame(loop);
        }

        rafId = requestAnimationFrame(loop);
    }

    // ------------------------------------------
    // ОНОВЛЕННЯ DOM-ЕЛЕМЕНТІВ ТА ВЕРХНЬОЇ ПАНЕЛІ В РЕАЛЬНОМУ ЧАСІ
    // ------------------------------------------
    function updateTopGameHeader() {
        const headerEl = document.querySelector('#game-screen header');
        if (!headerEl) return;

        const standardBadges = headerEl.querySelectorAll('.stat-badge:not(.alm-top-badge)');
        let larpBadge = document.getElementById('alm-top-header-larp');
        let roomCurrBadge = document.getElementById('alm-top-header-room-curr');

        if (!larpBadge) {
            larpBadge = document.createElement('div');
            larpBadge.id = 'alm-top-header-larp';
            larpBadge.className = 'stat-badge alm-top-badge alm-top-larp';
            larpBadge.innerHTML = `
                <div>🔮 <span id="alm-top-larp-val">0</span></div>
                <div class="stat-subtext" id="alm-top-larp-rate" style="color:#4ade80;">+1/сек</div>
            `;
            headerEl.appendChild(larpBadge);
        }

        if (!roomCurrBadge) {
            roomCurrBadge = document.createElement('div');
            roomCurrBadge.id = 'alm-top-header-room-curr';
            roomCurrBadge.className = 'stat-badge alm-top-badge alm-top-room';
            roomCurrBadge.innerHTML = `
                <div><span id="alm-top-room-icon">❄️</span> <span id="alm-top-room-val">0</span></div>
                <div class="stat-subtext" id="alm-top-room-label" style="color:#38bdf8;">Сніжинки</div>
            `;
            headerEl.appendChild(roomCurrBadge);
        }

        if (!isAuraLarpModeActive) {
            standardBadges.forEach(b => {
                b.style.display = '';
            });
            larpBadge.style.display = 'none';
            roomCurrBadge.style.display = 'none';
            return;
        }

        // У локації Аура Ларп Монстер приховуємо стандартну ауру та енергію і показуємо Ларпи + валюту кімнати
        standardBadges.forEach(b => {
            b.style.display = 'none';
        });

        const s = initAuraLarpMonsterState();
        larpBadge.style.display = 'flex';
        const topLarpVal = document.getElementById('alm-top-larp-val');
        const topLarpRate = document.getElementById('alm-top-larp-rate');
        if (topLarpVal) topLarpVal.textContent = formatLarpValue(s.larp);
        if (topLarpRate) topLarpRate.textContent = `+${formatMultValue(getLarpPerSecond())}/сек`;

        const roomCurr = getRoomCurrencyForStep(s.currentStep);
        if (roomCurr) {
            roomCurrBadge.style.display = 'flex';
            roomCurrBadge.style.borderColor = roomCurr.color;
            roomCurrBadge.style.color = roomCurr.color;
            const iconEl = document.getElementById('alm-top-room-icon');
            const valEl = document.getElementById('alm-top-room-val');
            const lblEl = document.getElementById('alm-top-room-label');
            if (iconEl) iconEl.textContent = roomCurr.icon;
            if (valEl) valEl.textContent = roomCurr.value;
            if (lblEl) {
                lblEl.textContent = roomCurr.name;
                lblEl.style.color = roomCurr.color;
            }
        } else {
            roomCurrBadge.style.display = 'none';
        }
    }

    function updateRoomUpgradeButtons() {
        const s = initAuraLarpMonsterState();

        // Кімната 10
        const roomBuyBtn = document.getElementById('alm-room-buy-btn');
        if (roomBuyBtn) {
            const canBuy = s.maxUnlockedStep >= 10 && s.currentStep === 10 && s.targetStep === 10 && s.larp >= getRoomUpgradeCost();
            roomBuyBtn.disabled = !canBuy;
        }

        // Кімната 20 (Сніжинки)
        const snowMultBtn = document.getElementById('alm-snow-mult-btn');
        if (snowMultBtn) {
            const canBuy = s.maxUnlockedStep >= 20 && s.currentStep === 20 && s.targetStep === 20 && s.snow >= getSnowMultUpgradeCost();
            snowMultBtn.disabled = !canBuy;
        }
        const snowSpeedBtn = document.getElementById('alm-snow-speed-btn');
        if (snowSpeedBtn) {
            const isMax = (s.snowSpeedLvl || 0) >= SNOW_SPEED_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 20 && s.currentStep === 20 && s.targetStep === 20 && s.snow >= getSnowSpeedUpgradeCost();
            snowSpeedBtn.disabled = !canBuy;
        }
        const snowLarpBtn = document.getElementById('alm-snow-larp-btn');
        if (snowLarpBtn) {
            const canBuy = s.maxUnlockedStep >= 20 && s.currentStep === 20 && s.targetStep === 20 && s.snow >= getSnowLarpUpgradeCost();
            snowLarpBtn.disabled = !canBuy;
        }

        // Кімната 30 (Сміття)
        const trashMultBtn = document.getElementById('alm-trash-mult-btn');
        if (trashMultBtn) {
            const canBuy = s.maxUnlockedStep >= 30 && s.currentStep === 30 && s.targetStep === 30 && s.trash >= getTrashMultUpgradeCost();
            trashMultBtn.disabled = !canBuy;
        }
        const trashSpeedBtn = document.getElementById('alm-trash-speed-btn');
        if (trashSpeedBtn) {
            const isMax = (s.trashSpeedLvl || 0) >= TRASH_SPEED_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 30 && s.currentStep === 30 && s.targetStep === 30 && s.trash >= getTrashSpeedUpgradeCost();
            trashSpeedBtn.disabled = !canBuy;
        }
        const trashLarpBtn = document.getElementById('alm-trash-larp-btn');
        if (trashLarpBtn) {
            const canBuy = s.maxUnlockedStep >= 30 && s.currentStep === 30 && s.targetStep === 30 && s.trash >= getTrashLarpUpgradeCost();
            trashLarpBtn.disabled = !canBuy;
        }

        // Кімната 40 (Швидкість та Офлайн)
        const stepSpeedBtn = document.getElementById('alm-step-speed-btn');
        if (stepSpeedBtn) {
            const canBuy = s.maxUnlockedStep >= 40 && s.currentStep === 40 && s.targetStep === 40 && s.larp >= getSpeedUpgradeCost();
            stepSpeedBtn.disabled = !canBuy;
        }
        const offlineLarpBtn = document.getElementById('alm-offline-larp-btn');
        if (offlineLarpBtn) {
            const canBuy = s.maxUnlockedStep >= 40 && s.currentStep === 40 && s.targetStep === 40 && s.larp >= getOfflineUpgradeCost();
            offlineLarpBtn.disabled = !canBuy;
        }

        // Кімната 50 (Пір'я)
        const featherMultBtn = document.getElementById('alm-feather-mult-btn');
        if (featherMultBtn) {
            const canBuy = s.maxUnlockedStep >= 50 && s.currentStep === 50 && s.targetStep === 50 && s.feathers >= getFeatherMultUpgradeCost();
            featherMultBtn.disabled = !canBuy;
        }
        const featherLarpBtn = document.getElementById('alm-feather-larp-btn');
        if (featherLarpBtn) {
            const canBuy = s.maxUnlockedStep >= 50 && s.currentStep === 50 && s.targetStep === 50 && s.feathers >= getFeatherLarpUpgradeCost();
            featherLarpBtn.disabled = !canBuy;
        }

        // Кімната 60 (Шанси золотих та смарагдових сніжинок / сміття)
        const goldSnowBtn = document.getElementById('alm-gold-snow-btn');
        if (goldSnowBtn) {
            const isMax = (s.goldSnowLvl || 0) >= GOLD_SNOW_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 60 && s.currentStep === 60 && s.targetStep === 60 && s.larp >= getGoldSnowUpgradeCost();
            goldSnowBtn.disabled = !canBuy;
        }
        const emeraldSnowBtn = document.getElementById('alm-emerald-snow-btn');
        if (emeraldSnowBtn) {
            const isMax = (s.emeraldSnowLvl || 0) >= EMERALD_SNOW_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 60 && s.currentStep === 60 && s.targetStep === 60 && s.larp >= getEmeraldSnowUpgradeCost();
            emeraldSnowBtn.disabled = !canBuy;
        }
        const goldTrashBtn = document.getElementById('alm-gold-trash-btn');
        if (goldTrashBtn) {
            const isMax = (s.goldTrashLvl || 0) >= GOLD_TRASH_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 60 && s.currentStep === 60 && s.targetStep === 60 && s.larp >= getGoldTrashUpgradeCost();
            goldTrashBtn.disabled = !canBuy;
        }
        const emeraldTrashBtn = document.getElementById('alm-emerald-trash-btn');
        if (emeraldTrashBtn) {
            const isMax = (s.emeraldTrashLvl || 0) >= EMERALD_TRASH_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 60 && s.currentStep === 60 && s.targetStep === 60 && s.larp >= getEmeraldTrashUpgradeCost();
            emeraldTrashBtn.disabled = !canBuy;
        }

        // Кімната 70 (Вітаміни та Овочі)
        const vitMultBtn = document.getElementById('alm-vit-mult-btn');
        if (vitMultBtn) {
            const canBuy = s.maxUnlockedStep >= 70 && s.currentStep === 70 && s.targetStep === 70 && s.vitamins >= getVitaminMultUpgradeCost();
            vitMultBtn.disabled = !canBuy;
        }
        const mergeLv2Btn = document.getElementById('alm-merge-lv2-btn');
        if (mergeLv2Btn) {
            const isMax = (s.mergeLv2ChanceLvl || 0) >= MERGE_LV2_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 70 && s.currentStep === 70 && s.targetStep === 70 && s.vitamins >= getMergeLv2UpgradeCost();
            mergeLv2Btn.disabled = !canBuy;
        }
        const mergeLarpBtn = document.getElementById('alm-merge-larp-btn');
        if (mergeLarpBtn) {
            const canBuy = s.maxUnlockedStep >= 70 && s.currentStep === 70 && s.targetStep === 70 && s.vitamins >= getMergeLarpUpgradeCost();
            mergeLarpBtn.disabled = !canBuy;
        }

        // Кімната 80 (Сніжна буря)
        const stormDurBtn = document.getElementById('alm-storm-dur-btn');
        if (stormDurBtn) {
            const canBuy = s.maxUnlockedStep >= 80 && s.currentStep === 80 && s.targetStep === 80 && s.larp >= getStormDurationUpgradeCost();
            stormDurBtn.disabled = !canBuy;
        }
        const stormCdBtn = document.getElementById('alm-storm-cd-btn');
        if (stormCdBtn) {
            const isMax = (s.stormCooldownLvl || 0) >= STORM_COOLDOWN_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 80 && s.currentStep === 80 && s.targetStep === 80 && s.larp >= getStormCooldownUpgradeCost();
            stormCdBtn.disabled = !canBuy;
        }
        const stormSpdBtn = document.getElementById('alm-storm-spd-btn');
        if (stormSpdBtn) {
            const isMax = (s.stormSpeedLvl || 0) >= STORM_SPAWN_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 80 && s.currentStep === 80 && s.targetStep === 80 && s.larp >= getStormSpeedUpgradeCost();
            stormSpdBtn.disabled = !canBuy;
        }

        // Кімната 90 (Прокачки мобів)
        const mobDmgBtn = document.getElementById('alm-mob-dmg-btn');
        if (mobDmgBtn) {
            const isMax = (s.mobDamageLvl || 0) >= MOB_DMG_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 90 && s.currentStep === 90 && s.targetStep === 90 && s.larp >= getMobDamageUpgradeCost();
            mobDmgBtn.disabled = !canBuy;
        }
        const mobRespawnBtn = document.getElementById('alm-mob-respawn-btn');
        if (mobRespawnBtn) {
            const isMax = (s.mobRespawnLvl || 0) >= MOB_SPAWN_MAX_LVL;
            const canBuy = !isMax && s.maxUnlockedStep >= 90 && s.currentStep === 90 && s.targetStep === 90 && s.larp >= getMobRespawnUpgradeCost();
            mobRespawnBtn.disabled = !canBuy;
        }
    }

    function updateAllDynamicElements(forceStateSync, autoScrollToPlayer) {
        updateTopGameHeader();
        if (!isAuraLarpModeActive) return;

        const s = initAuraLarpMonsterState();

        const larpValEl = document.getElementById('alm-larp-balance');
        const larpWordEl = document.getElementById('alm-larp-word');
        const larpRateEl = document.getElementById('alm-larp-rate');
        const stepBadgeEl = document.getElementById('alm-step-badge');

        if (larpValEl) larpValEl.textContent = formatLarpValue(s.larp);
        if (larpWordEl) larpWordEl.textContent = pluralizeLarp(s.larp);
        if (larpRateEl) larpRateEl.textContent = `${formatMultValue(getLarpPerSecond())} ларп/сек`;
        if (stepBadgeEl) stepBadgeEl.textContent = `${s.currentStep}`;

        const unlockBtn = document.getElementById('alm-unlock-btn');
        if (unlockBtn) {
            const nextStep = s.maxUnlockedStep + 1;
            if (nextStep <= MAX_STEP) {
                const nextObj = STAIRS_CONFIG.find(item => item.step === nextStep);
                unlockBtn.disabled = s.larp < nextObj.cost;
            }
        }

        updateRoomUpgradeButtons();
        updateSnowCounterText();
        updateTrashCounterText();
        updateChickenDynamicHud();
        updateMergeCounterText();
        updateStormDynamicHud();

        const charEl = document.getElementById('alm-character');
        const trackEl = document.getElementById('alm-stairs-track');
        if (charEl && trackEl) {
            const visStep = getVisualStepPosition();
            const isMoving = s.currentStep !== s.targetStep;

            const leftCss = getStepCenterCss(visStep);
            const bottomPx = (visStep - 1) * ROW_HEIGHT + 24;

            charEl.style.left = leftCss;
            charEl.style.bottom = `${bottomPx}px`;
            charEl.classList.toggle('is-moving', isMoving);

            const statusBubble = document.getElementById('alm-char-status');
            if (statusBubble) {
                if (isMoving) {
                    statusBubble.style.display = 'block';
                    statusBubble.textContent = `🏃 ${s.targetStep}`;
                } else {
                    statusBubble.style.display = 'none';
                }
            }

            if (autoScrollToPlayer) {
                const viewport = document.getElementById('alm-stairs-viewport');
                if (viewport) {
                    const totalHeight = MAX_STEP * ROW_HEIGHT + 36;
                    const charTop = totalHeight - bottomPx;
                    viewport.scrollTop = Math.max(0, charTop - viewport.clientHeight * 0.55);
                }
            }
        }

        if (forceStateSync) {
            const rows = document.querySelectorAll('.alm-stair-row');
            rows.forEach(row => {
                const stepNum = Number(row.dataset.step);
                const isUnlocked = stepNum <= s.maxUnlockedStep;
                const isNext = stepNum === s.maxUnlockedStep + 1;
                const isCurrent = stepNum === s.currentStep && s.currentStep === s.targetStep;
                const isTarget = stepNum === s.targetStep && s.currentStep !== s.targetStep;

                row.classList.toggle('unlocked', isUnlocked);
                row.classList.toggle('next-unlock', isNext);
                row.classList.toggle('locked', !isUnlocked && !isNext);
                row.classList.toggle('current-step', isCurrent);
                row.classList.toggle('target-step', isTarget);
            });
        }
    }

    // ------------------------------------------
    // РЕНДЕР ІНТЕРФЕЙСУ ВКЛАДКИ "АУРА ЛАРП МОНСТЕР"
    // ------------------------------------------
    function switchLarpSubTab(subTab) {
        activeLarpSubTab = subTab;
        persistAuraLarpState(false);
        renderAuraLarpMonsterUI(subTab === 'stairs');
    }

    function renderRoomTabHtml(s) {
        const roomPillsConfig = [
            { step: 10, icon: '🚪' },
            { step: 20, icon: '❄️' },
            { step: 30, icon: '🗑️' },
            { step: 40, icon: '⚡' },
            { step: 50, icon: '🐔' },
            { step: 60, icon: '✨' },
            { step: 70, icon: '🥒' },
            { step: 80, icon: '🌨️' },
            { step: 90, icon: '⚔️' }
        ];

        let roomsNavHtml = `<div class="alm-room-selector">`;
        roomPillsConfig.forEach(cfg => {
            const unlocked = s.maxUnlockedStep >= cfg.step;
            const active = activeRoomStep === cfg.step;
            roomsNavHtml += `
                <button class="alm-room-pill ${active ? 'active' : ''} ${unlocked ? '' : 'locked'}"
                        onclick="window.openAuraLarpRoomAtStep(${cfg.step})">
                    ${unlocked ? cfg.icon : '🔒'} ${cfg.step} сх.
                </button>
            `;
        });
        roomsNavHtml += `</div>`;

        // ---------------- КІМНАТА 10 СХОДИНКИ ----------------
        if (activeRoomStep === 10) {
            const isRoomUnlocked = s.maxUnlockedStep >= 10;
            const isCharacterAtRoom10 = s.currentStep === 10 && s.targetStep === 10;
            const currentRoomMult = getRoomLarpMultiplier();
            const nextRoomMult = getNextRoomLarpMultiplier();
            const upgradeCost = getRoomUpgradeCost();
            const canBuy = isRoomUnlocked && isCharacterAtRoom10 && s.larp >= upgradeCost;

            let statusBanner = '';
            if (!isRoomUnlocked) {
                statusBanner = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>10-ту сходинку</b> у вкладці «Сходи».
                    </div>
                `;
            } else if (!isCharacterAtRoom10) {
                statusBanner = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб купувати прокачки в цій кімнаті, персонаж має стояти на <b>10-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(10); window.switchAuraLarpSubTab('stairs');">
                            Піти на 10 сходинку
                        </button>
                    </div>
                `;
            }

            return `
                <div class="alm-room-outer-panel">
                    ${roomsNavHtml}
                    ${statusBanner}
                    <div class="alm-centered-room-section">
                        <div class="alm-section-heading">КІМНАТА — 10 СХОДИНКА</div>
                        <button id="alm-room-buy-btn" class="alm-hero-upg-card emerald-theme" ${canBuy ? '' : 'disabled'} onclick="window.buyAuraLarpRoomUpgrade()">
                            <div class="alm-hero-upg-title">ПРОКАЧКА МНОЖНИКА ЛАРПІВ</div>
                            <div class="alm-hero-upg-badge emerald">Рів. ${s.roomMultLvl}</div>
                            <div class="alm-hero-upg-compare">x${formatMultValue(currentRoomMult)} &gt; x${formatMultValue(nextRoomMult)}</div>
                            <div class="alm-hero-upg-price">${formatLarpValue(upgradeCost)} ${pluralizeLarp(upgradeCost)}</div>
                        </button>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 20 СХОДИНКИ (СНІЖИНКИ) ----------------
        if (activeRoomStep === 20) {
            const isRoom20Unlocked = s.maxUnlockedStep >= 20;
            const isCharacterAtRoom20 = s.currentStep === 20 && s.targetStep === 20;

            const curSnowMult = getSnowMultiplier();
            const nextSnowMult = getNextSnowMultiplier();
            const snowMultCost = getSnowMultUpgradeCost();
            const canBuySnowMult = isRoom20Unlocked && isCharacterAtRoom20 && s.snow >= snowMultCost;

            const curSnowInterval = getSnowSpawnInterval();
            const nextSnowInterval = getNextSnowSpawnInterval();
            const snowSpeedCost = getSnowSpeedUpgradeCost();
            const isSnowSpeedMax = (s.snowSpeedLvl || 0) >= SNOW_SPEED_MAX_LVL;
            const canBuySnowSpeed = !isSnowSpeedMax && isRoom20Unlocked && isCharacterAtRoom20 && s.snow >= snowSpeedCost;

            const curSnowLarpMult = getSnowLarpMultiplier();
            const nextSnowLarpMult = getNextSnowLarpMultiplier();
            const snowLarpCost = getSnowLarpUpgradeCost();
            const canBuySnowLarp = isRoom20Unlocked && isCharacterAtRoom20 && s.snow >= snowLarpCost;

            const goldSnowPct = getGoldSnowChancePct();
            const emeraldSnowPct = getEmeraldSnowChancePct();
            const stormActive = isSnowstormActive();
            const stormLeftSec = stormActive ? Math.max(0, (s.stormActiveEndMs - getCurrentNowMs()) / 1000) : 0;

            let statusBanner20 = '';
            if (!isRoom20Unlocked) {
                statusBanner20 = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>20-ту сходинку</b> у вкладці «Сходи», щоб почали з'являтися сніжинки!
                    </div>
                `;
            } else if (!isCharacterAtRoom20) {
                statusBanner20 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб збирати сніжинки та купувати прокачки, персонаж має стояти на <b>20-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(20); window.switchAuraLarpSubTab('stairs');">
                            Піти на 20 сходинку
                        </button>
                    </div>
                `;
            }

            let flakesHtml = '';
            activeSnowflakes.forEach(f => {
                const rarity = f.rarity || 'normal';
                const extraClass = rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : '');
                flakesHtml += `<div class="alm-snowflake-item${extraClass}" data-flake-id="${f.id}" style="left:${f.xPct}%;top:${f.yPct}%;">❄️</div>`;
            });

            return `
                <div class="alm-room-outer-panel">
                    ${roomsNavHtml}
                    ${statusBanner20}
                    ${stormActive ? `
                        <div class="alm-room-alert" style="background: rgba(56, 189, 248, 0.16); border-color: #38bdf8; color: #e0f2fe;">
                            <span>🌨️ <b>Сніжна буря активна!</b> Сніжинки кожні <b>${getEffectiveSnowSpawnInterval()} сек</b></span>
                            <span>⏱️ Залишилось: <b id="alm-room20-storm-timer" style="color:#38bdf8;">${formatTimerMmSs(stormLeftSec)}</b></span>
                        </div>
                    ` : ''}

                    <div class="alm-room-split-grid">
                        <div class="alm-room-left-col">
                            <div class="alm-zone-topbar snow-border">
                                <span>❄️ Сніжинок: <b id="alm-snow-balance" style="color:#38bdf8;">${formatSnowValue(s.snow)}</b></span>
                                <span>На полі: <b id="alm-snow-count-badge" style="color:#38bdf8;">${activeSnowflakes.length} / ${MAX_SNOWFLAKES}</b></span>
                                <span>Всього: <b id="alm-snow-total" style="color:#38bdf8;">${formatSnowValue(s.totalSnow)}</b></span>
                            </div>

                            <div id="alm-snow-zone" class="alm-snow-zone ${isRoom20Unlocked ? (isCharacterAtRoom20 ? '' : 'not-on-step') : 'locked'}">
                                ${isRoom20Unlocked ? `
                                    ${flakesHtml}
                                    <div class="alm-zone-bottom-pill snow-pill">
                                        ${isCharacterAtRoom20
                                            ? 'Проведіть курсором або пальцем по сніжинках, щоб зібрати'
                                            : '🚶 Підійдіть на 20 сходинку, щоб збирати сніжинки'}
                                    </div>
                                ` : '<div class="alm-snow-locked-msg">🔒 Відкрийте 20 сходинку</div>'}
                            </div>

                            ${(goldSnowPct > 0 || emeraldSnowPct > 0) ? `
                                <div class="alm-rarity-legend">
                                    ❄️ Звичайна: <b>x1</b> &nbsp;•&nbsp; <span style="color:#facc15;">Золота (${goldSnowPct}%): <b>x10</b></span> &nbsp;•&nbsp; <span style="color:#34d399;">Смарагдова (${emeraldSnowPct}%): <b>x1000</b></span>
                                </div>
                            ` : ''}
                        </div>

                        <div class="alm-room-right-col">
                            <div class="alm-side-panel-box">
                                <div class="alm-side-panel-title">⬆️ ПРОКАЧКИ ЗОНИ</div>
                                <div class="alm-compact-upg-list">
                                    <button id="alm-snow-mult-btn" class="alm-compact-upg-card snow-card" ${canBuySnowMult ? '' : 'disabled'} onclick="window.buyAuraLarpSnowMultUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">1) Множник сніжинок</span>
                                            <span class="alm-c-upg-lvl snow-lvl">Рів. ${s.snowMultLvl}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">x${curSnowMult} → x${nextSnowMult}</span>
                                            <span class="alm-c-upg-cost snow-cost">❄️ ${formatSnowValue(snowMultCost)}</span>
                                        </div>
                                    </button>

                                    <button id="alm-snow-speed-btn" class="alm-compact-upg-card snow-card" ${canBuySnowSpeed ? '' : 'disabled'} onclick="window.buyAuraLarpSnowSpeedUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">2) Швидкість спавну</span>
                                            <span class="alm-c-upg-lvl snow-lvl">${s.snowSpeedLvl}/${SNOW_SPEED_MAX_LVL}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">${isSnowSpeedMax ? `${curSnowInterval}c (МАКС)` : `${curSnowInterval}c → ${nextSnowInterval}c`}</span>
                                            <span class="alm-c-upg-cost snow-cost">${isSnowSpeedMax ? 'МАКС' : `❄️ ${formatSnowValue(snowSpeedCost)}`}</span>
                                        </div>
                                    </button>

                                    <button id="alm-snow-larp-btn" class="alm-compact-upg-card snow-card" ${canBuySnowLarp ? '' : 'disabled'} onclick="window.buyAuraLarpSnowLarpUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">3) Множник Ларпів</span>
                                            <span class="alm-c-upg-lvl snow-lvl">Рів. ${s.snowLarpMultLvl}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">x${formatMultValue(curSnowLarpMult)} → x${formatMultValue(nextSnowLarpMult)}</span>
                                            <span class="alm-c-upg-cost snow-cost">❄️ ${formatSnowValue(snowLarpCost)}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div class="alm-side-panel-box">
                                <div class="alm-side-panel-title" style="color:#facc15;">🏆 ТОП ЗІБРАНОГО СНІГУ</div>
                                <div id="alm-snow-lb-list" class="alm-snow-lb-list">
                                    <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:12px;">Завантаження...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 30 СХОДИНКИ (ПРИБИРАННЯ СМІТТЯ) ----------------
        if (activeRoomStep === 30) {
            const isRoom30Unlocked = s.maxUnlockedStep >= 30;
            const isCharacterAtRoom30 = s.currentStep === 30 && s.targetStep === 30;

            const curTrashMult = getTrashMultiplier();
            const nextTrashMult = getNextTrashMultiplier();
            const trashMultCost = getTrashMultUpgradeCost();
            const canBuyTrashMult = isRoom30Unlocked && isCharacterAtRoom30 && s.trash >= trashMultCost;

            const curTrashInterval = getTrashSpawnInterval();
            const nextTrashInterval = getNextTrashSpawnInterval();
            const trashSpeedCost = getTrashSpeedUpgradeCost();
            const isTrashSpeedMax = (s.trashSpeedLvl || 0) >= TRASH_SPEED_MAX_LVL;
            const canBuyTrashSpeed = !isTrashSpeedMax && isRoom30Unlocked && isCharacterAtRoom30 && s.trash >= trashSpeedCost;

            const curTrashLarpMult = getTrashLarpMultiplier();
            const nextTrashLarpMult = getNextTrashLarpMultiplier();
            const trashLarpCost = getTrashLarpUpgradeCost();
            const canBuyTrashLarp = isRoom30Unlocked && isCharacterAtRoom30 && s.trash >= trashLarpCost;

            const goldTrashPct = getGoldTrashChancePct();
            const emeraldTrashPct = getEmeraldTrashChancePct();

            let statusBanner30 = '';
            if (!isRoom30Unlocked) {
                statusBanner30 = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>30-ту сходинку</b> у вкладці «Сходи», щоб з'явилось сміття!
                    </div>
                `;
            } else if (!isCharacterAtRoom30) {
                statusBanner30 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб прибирати сміття та купувати прокачки, персонаж має стояти на <b>30-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(30); window.switchAuraLarpSubTab('stairs');">
                            Піти на 30 сходинку
                        </button>
                    </div>
                `;
            }

            let trashItemsHtml = '';
            activeTrashItems.forEach(t => {
                const rarity = t.rarity || 'normal';
                const extraClass = rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : '');
                trashItemsHtml += `<div class="alm-trash-item${extraClass}" data-trash-id="${t.id}" style="left:${t.xPct}%;top:${t.yPct}%;">${t.icon}</div>`;
            });

            return `
                <div class="alm-room-outer-panel">
                    ${roomsNavHtml}
                    ${statusBanner30}

                    <div class="alm-room-split-grid">
                        <div class="alm-room-left-col">
                            <div class="alm-zone-topbar trash-border">
                                <span>🗑️ Сміття: <b id="alm-trash-balance" style="color:#facc15;">${formatTrashValue(s.trash)}</b></span>
                                <span>На полі: <b id="alm-trash-count-badge" style="color:#facc15;">${activeTrashItems.length} / ${MAX_TRASH_ITEMS}</b></span>
                                <span>Всього: <b id="alm-trash-total" style="color:#facc15;">${formatTrashValue(s.totalTrash)}</b></span>
                            </div>

                            <div id="alm-trash-zone" class="alm-trash-zone ${isRoom30Unlocked ? (isCharacterAtRoom30 ? '' : 'not-on-step') : 'locked'}">
                                ${isRoom30Unlocked ? `
                                    ${trashItemsHtml}
                                    <div id="alm-trash-bin" class="alm-trash-center-circle">
                                        <span class="alm-trash-center-icon">♻️</span>
                                        <span class="alm-trash-center-label">СЮДИ</span>
                                    </div>
                                    <div class="alm-zone-bottom-pill trash-pill">
                                        ${isCharacterAtRoom30
                                            ? 'Перетягніть сміття курсором у центр зони'
                                            : '🚶 Підійдіть на 30 сходинку, щоб прибирати сміття'}
                                    </div>
                                ` : '<div class="alm-snow-locked-msg">🔒 Відкрийте 30 сходинку</div>'}
                            </div>

                            ${(goldTrashPct > 0 || emeraldTrashPct > 0) ? `
                                <div class="alm-rarity-legend">
                                    🗑️ Звичайне: <b>x1</b> &nbsp;•&nbsp; <span style="color:#facc15;">Золоте (${goldTrashPct}%): <b>x10</b></span> &nbsp;•&nbsp; <span style="color:#34d399;">Смарагдове (${emeraldTrashPct}%): <b>x1000</b></span>
                                </div>
                            ` : ''}
                        </div>

                        <div class="alm-room-right-col">
                            <div class="alm-side-panel-box">
                                <div class="alm-side-panel-title">⬆️ ПРОКАЧКИ ПРИБИРАННЯ</div>
                                <div class="alm-compact-upg-list">
                                    <button id="alm-trash-mult-btn" class="alm-compact-upg-card trash-card" ${canBuyTrashMult ? '' : 'disabled'} onclick="window.buyAuraLarpTrashMultUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">1) Множник сміття</span>
                                            <span class="alm-c-upg-lvl trash-lvl">Рів. ${s.trashMultLvl}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">x${curTrashMult} → x${nextTrashMult}</span>
                                            <span class="alm-c-upg-cost trash-cost">🗑️ ${formatTrashValue(trashMultCost)}</span>
                                        </div>
                                    </button>

                                    <button id="alm-trash-speed-btn" class="alm-compact-upg-card trash-card" ${canBuyTrashSpeed ? '' : 'disabled'} onclick="window.buyAuraLarpTrashSpeedUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">2) Швидкість спавну</span>
                                            <span class="alm-c-upg-lvl trash-lvl">${s.trashSpeedLvl}/${TRASH_SPEED_MAX_LVL}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">${isTrashSpeedMax ? `${curTrashInterval}c (МАКС)` : `${curTrashInterval}c → ${nextTrashInterval}c`}</span>
                                            <span class="alm-c-upg-cost trash-cost">${isTrashSpeedMax ? 'МАКС' : `🗑️ ${formatTrashValue(trashSpeedCost)}`}</span>
                                        </div>
                                    </button>

                                    <button id="alm-trash-larp-btn" class="alm-compact-upg-card trash-card" ${canBuyTrashLarp ? '' : 'disabled'} onclick="window.buyAuraLarpTrashLarpUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">3) Множник Ларпів</span>
                                            <span class="alm-c-upg-lvl trash-lvl">Рів. ${s.trashLarpMultLvl}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">x${formatMultValue(curTrashLarpMult)} → x${formatMultValue(nextTrashLarpMult)}</span>
                                            <span class="alm-c-upg-cost trash-cost">🗑️ ${formatTrashValue(trashLarpCost)}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div class="alm-side-panel-box">
                                <div class="alm-side-panel-title" style="color:#facc15;">🏆 ТОП ЗІБРАНОГО СМІТТЯ</div>
                                <div id="alm-trash-lb-list" class="alm-snow-lb-list">
                                    <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:12px;">Завантаження...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 40 СХОДИНКИ (ШВИДКІСТЬ ТА ОФЛАЙН) ----------------
        if (activeRoomStep === 40) {
            const isRoom40Unlocked = s.maxUnlockedStep >= 40;
            const isCharacterAtRoom40 = s.currentStep === 40 && s.targetStep === 40;

            const curSpeedMult = getCharacterMoveSpeed();
            const nextSpeedMult = getNextCharacterMoveSpeed();
            const curSpeedBonusPct = (s.stepSpeedLvl || 0) * SPEED_UPG_STEP_PCT;
            const speedCost = getSpeedUpgradeCost();
            const canBuySpeed = isRoom40Unlocked && isCharacterAtRoom40 && s.larp >= speedCost;

            const curOfflinePct = getOfflineLarpPercent();
            const nextOfflinePct = getNextOfflineLarpPercent();
            const offlineCost = getOfflineUpgradeCost();
            const canBuyOffline = isRoom40Unlocked && isCharacterAtRoom40 && s.larp >= offlineCost;

            let statusBanner40 = '';
            if (!isRoom40Unlocked) {
                statusBanner40 = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>40-ту сходинку</b> у вкладці «Сходи»!
                    </div>
                `;
            } else if (!isCharacterAtRoom40) {
                statusBanner40 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб купувати прокачки в цій кімнаті, персонаж має стояти на <b>40-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(40); window.switchAuraLarpSubTab('stairs');">
                            Піти на 40 сходинку
                        </button>
                    </div>
                `;
            }

            return `
                <div class="alm-room-outer-panel">
                    ${roomsNavHtml}
                    ${statusBanner40}
                    <div class="alm-centered-room-section">
                        <div class="alm-section-heading">ЗАЛ ПРИСКОРЕННЯ ТА ОФЛАЙНУ — 40 СХОДИНКА</div>
                        <div class="alm-two-hero-grid">
                            <button id="alm-step-speed-btn" class="alm-hero-upg-card purple-theme" ${canBuySpeed ? '' : 'disabled'} onclick="window.buyAuraLarpStepSpeedUpgrade()">
                                <div class="alm-hero-upg-title">1) ШВИДКІСТЬ ПО СХОДИНКАХ</div>
                                <div class="alm-hero-upg-badge purple">Рів. ${s.stepSpeedLvl} (+${curSpeedBonusPct}%)</div>
                                <div class="alm-hero-upg-compare">${curSpeedMult} → ${nextSpeedMult}</div>
                                <div class="alm-hero-upg-subtext purple">сходинок / сек</div>
                                <div class="alm-hero-upg-price">${formatLarpValue(speedCost)} ${pluralizeLarp(speedCost)}</div>
                            </button>

                            <button id="alm-offline-larp-btn" class="alm-hero-upg-card purple-theme" ${canBuyOffline ? '' : 'disabled'} onclick="window.buyAuraLarpOfflineUpgrade()">
                                <div class="alm-hero-upg-title">2) ЗАРОБІТОК ЛАРПІВ ОФЛАЙН</div>
                                <div class="alm-hero-upg-badge purple">Рів. ${s.offlineLarpLvl}</div>
                                <div class="alm-hero-upg-compare">${curOfflinePct}% → ${nextOfflinePct}%</div>
                                <div class="alm-hero-upg-subtext purple">від доходу найвищої сходинки</div>
                                <div class="alm-hero-upg-price">${formatLarpValue(offlineCost)} ${pluralizeLarp(offlineCost)}</div>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 50 СХОДИНКИ (БОЙОВА КВОЧКА РЯБА ТА ПІР'Я) ----------------
        if (activeRoomStep === 50) {
            const isRoom50Unlocked = s.maxUnlockedStep >= 50;
            const isCharacterAtRoom50 = s.currentStep === 50 && s.targetStep === 50;

            const now = getCurrentNowMs();
            const isRespawning = Boolean(s.chickenRespawnEndMs && now < s.chickenRespawnEndMs);
            const respawnLeftSec = isRespawning ? Math.max(0, (s.chickenRespawnEndMs - now) / 1000) : 0;
            const hpPct = Math.max(0, Math.min(100, (s.chickenHp / CHICKEN_MAX_HP) * 100));

            const curFeatherMult = getFeatherMultiplier();
            const nextFeatherMult = getNextFeatherMultiplier();
            const featherMultCost = getFeatherMultUpgradeCost();
            const canBuyFeatherMult = isRoom50Unlocked && isCharacterAtRoom50 && s.feathers >= featherMultCost;

            const curFeatherLarpMult = getFeatherLarpMultiplier();
            const nextFeatherLarpMult = getNextFeatherLarpMultiplier();
            const featherLarpCost = getFeatherLarpUpgradeCost();
            const canBuyFeatherLarp = isRoom50Unlocked && isCharacterAtRoom50 && s.feathers >= featherLarpCost;

            const clickDamage = getChickenClickDamage();
            const respawnDurationSec = getChickenRespawnDurationSec();
            const expectedDrop = Math.round(CHICKEN_BASE_FEATHER_DROP * curFeatherMult);

            let statusBanner50 = '';
            if (!isRoom50Unlocked) {
                statusBanner50 = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>50-ту сходинку</b> у вкладці «Сходи», щоб битися з мобом «${CHICKEN_MOB_NAME}»!
                    </div>
                `;
            } else if (!isCharacterAtRoom50) {
                statusBanner50 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб атакувати моба та купувати прокачки за пір'я, персонаж має стояти на <b>50-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(50); window.switchAuraLarpSubTab('stairs');">
                            Піти на 50 сходинку
                        </button>
                    </div>
                `;
            }

            return `
                <div class="alm-room-outer-panel">
                    ${roomsNavHtml}
                    ${statusBanner50}

                    <div class="alm-room-split-grid">
                        <div class="alm-room-left-col">
                            <div class="alm-zone-topbar feather-border">
                                <span>🪶 Пір'я: <b id="alm-feather-balance" style="color:#fdba74;">${formatFeatherValue(s.feathers)}</b></span>
                                <span>Урон: <b style="color:#fca5a5;">${clickDamage} HP</b></span>
                                <span>Всього: <b id="alm-feather-total" style="color:#fdba74;">${formatFeatherValue(s.totalFeathers)}</b></span>
                            </div>

                            <div id="alm-chicken-arena" class="alm-chicken-arena ${isRoom50Unlocked && isCharacterAtRoom50 ? '' : 'locked'}">
                                ${!isRoom50Unlocked ? `
                                    <div class="alm-snow-locked-msg">🔒 Відкрийте 50 сходинку</div>
                                ` : isRespawning ? `
                                    <div class="alm-chicken-respawn-box">
                                        <div style="font-size: 2.6rem;">🥚⏳</div>
                                        <div style="font-weight: 900; color: #facc15; font-size: 0.95rem; margin-top: 6px;">
                                            ${CHICKEN_MOB_NAME} відновлюється...
                                        </div>
                                        <div style="color: #94a3b8; font-size: 0.78rem; margin-top: 4px;">
                                            Повернення через (час спавну: ${formatDurationUk(respawnDurationSec)}):
                                        </div>
                                        <div id="alm-chicken-respawn-timer" class="alm-respawn-countdown">
                                            ${formatTimerMmSs(respawnLeftSec)}
                                        </div>
                                    </div>
                                ` : `
                                    <div class="alm-mob-title-row">
                                        <span class="alm-mob-name">⚔️ ${CHICKEN_MOB_NAME}</span>
                                        <span class="alm-mob-reward-tag">Дроп: +${formatFeatherValue(expectedDrop)} 🪶</span>
                                    </div>
                                    <div class="alm-chicken-hp-wrap">
                                        <div id="alm-chicken-hp-fill" class="alm-chicken-hp-fill" style="width: ${hpPct}%;"></div>
                                        <div id="alm-chicken-hp-text" class="alm-chicken-hp-text">${Math.ceil(s.chickenHp)} / ${CHICKEN_MAX_HP} HP</div>
                                    </div>
                                    <button id="alm-chicken-mob-btn" class="alm-chicken-mob-btn"
                                            ${isCharacterAtRoom50 ? '' : 'disabled'}
                                            onclick="window.attackAuraLarpChicken(event)">
                                        <span class="alm-chicken-emoji">🐔</span>
                                        <span class="alm-chicken-hit-hint">
                                            ${isCharacterAtRoom50 ? `💥 ВДАРИТИ (-${clickDamage} HP)` : '🚶 Підійдіть на 50 сходинку'}
                                        </span>
                                    </button>
                                `}
                            </div>
                        </div>

                        <div class="alm-room-right-col">
                            <div class="alm-side-panel-box">
                                <div class="alm-side-panel-title">⬆️ ПРОКАЧКИ АРЕНИ</div>
                                <div class="alm-compact-upg-list">
                                    <button id="alm-feather-mult-btn" class="alm-compact-upg-card feather-card" ${canBuyFeatherMult ? '' : 'disabled'} onclick="window.buyAuraLarpFeatherMultUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">1) Множник пір'я</span>
                                            <span class="alm-c-upg-lvl feather-lvl">Рів. ${s.featherMultLvl}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">x${formatMultValue(curFeatherMult)} → x${formatMultValue(nextFeatherMult)}</span>
                                            <span class="alm-c-upg-cost feather-cost">🪶 ${formatFeatherValue(featherMultCost)}</span>
                                        </div>
                                    </button>

                                    <button id="alm-feather-larp-btn" class="alm-compact-upg-card feather-card" ${canBuyFeatherLarp ? '' : 'disabled'} onclick="window.buyAuraLarpFeatherLarpUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">2) Множник Ларпів</span>
                                            <span class="alm-c-upg-lvl feather-lvl">Рів. ${s.featherLarpMultLvl}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">x${formatMultValue(curFeatherLarpMult)} → x${formatMultValue(nextFeatherLarpMult)}</span>
                                            <span class="alm-c-upg-cost feather-cost">🪶 ${formatFeatherValue(featherLarpCost)}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div class="alm-side-panel-box">
                                <div class="alm-side-panel-title" style="color:#fdba74;">🏆 ТОП ЗА ПІР'ЯМ</div>
                                <div id="alm-feather-lb-list" class="alm-snow-lb-list">
                                    <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:12px;">Завантаження...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 60 СХОДИНКИ (ЗОЛОТІ x10 ТА СМАРАГДОВІ x1000 ШАНСИ) ----------------
        if (activeRoomStep === 60) {
            const isRoom60Unlocked = s.maxUnlockedStep >= 60;
            const isCharacterAtRoom60 = s.currentStep === 60 && s.targetStep === 60;

            const curGoldSnow = getGoldSnowChancePct();
            const isGoldSnowMax = (s.goldSnowLvl || 0) >= GOLD_SNOW_MAX_LVL;
            const goldSnowCost = getGoldSnowUpgradeCost();
            const canBuyGoldSnow = !isGoldSnowMax && isRoom60Unlocked && isCharacterAtRoom60 && s.larp >= goldSnowCost;

            const curEmeraldSnow = getEmeraldSnowChancePct();
            const isEmeraldSnowMax = (s.emeraldSnowLvl || 0) >= EMERALD_SNOW_MAX_LVL;
            const emeraldSnowCost = getEmeraldSnowUpgradeCost();
            const canBuyEmeraldSnow = !isEmeraldSnowMax && isRoom60Unlocked && isCharacterAtRoom60 && s.larp >= emeraldSnowCost;

            const curGoldTrash = getGoldTrashChancePct();
            const isGoldTrashMax = (s.goldTrashLvl || 0) >= GOLD_TRASH_MAX_LVL;
            const goldTrashCost = getGoldTrashUpgradeCost();
            const canBuyGoldTrash = !isGoldTrashMax && isRoom60Unlocked && isCharacterAtRoom60 && s.larp >= goldTrashCost;

            const curEmeraldTrash = getEmeraldTrashChancePct();
            const isEmeraldTrashMax = (s.emeraldTrashLvl || 0) >= EMERALD_TRASH_MAX_LVL;
            const emeraldTrashCost = getEmeraldTrashUpgradeCost();
            const canBuyEmeraldTrash = !isEmeraldTrashMax && isRoom60Unlocked && isCharacterAtRoom60 && s.larp >= emeraldTrashCost;

            let statusBanner60 = '';
            if (!isRoom60Unlocked) {
                statusBanner60 = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>60-ту сходинку</b> у вкладці «Сходи»!
                    </div>
                `;
            } else if (!isCharacterAtRoom60) {
                statusBanner60 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб купувати прокачки шансів, персонаж має стояти на <b>60-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(60); window.switchAuraLarpSubTab('stairs');">
                            Піти на 60 сходинку
                        </button>
                    </div>
                `;
            }

            return `
                <div class="alm-room-outer-panel">
                    ${roomsNavHtml}
                    ${statusBanner60}
                    <div class="alm-centered-room-section">
                        <div class="alm-section-heading">СКАРБНИЦЯ РІДКОСТЕЙ — 60 СХОДИНКА (ЗОЛОТІ x10 • СМАРАГДОВІ x1000)</div>
                        <div class="alm-two-hero-grid">
                            <button id="alm-gold-snow-btn" class="alm-hero-upg-card gold-theme" ${canBuyGoldSnow ? '' : 'disabled'} onclick="window.buyAuraLarpGoldSnowUpgrade()">
                                <div class="alm-hero-upg-title">1) ЗОЛОТА СНІЖИНКА (x10)</div>
                                <div class="alm-hero-upg-badge gold">Рів. ${s.goldSnowLvl}/${GOLD_SNOW_MAX_LVL}</div>
                                <div class="alm-hero-upg-compare">${isGoldSnowMax ? '100%' : `${curGoldSnow}% → ${Number((curGoldSnow + 1).toFixed(2))}%`}</div>
                                <div class="alm-hero-upg-price">${isGoldSnowMax ? 'МАКСИМУМ' : `${formatLarpValue(goldSnowCost)} ${pluralizeLarp(goldSnowCost)}`}</div>
                            </button>

                            <button id="alm-emerald-snow-btn" class="alm-hero-upg-card emerald-theme" ${canBuyEmeraldSnow ? '' : 'disabled'} onclick="window.buyAuraLarpEmeraldSnowUpgrade()">
                                <div class="alm-hero-upg-title">2) СМАРАГДОВА СНІЖИНКА (x1000)</div>
                                <div class="alm-hero-upg-badge emerald">Рів. ${s.emeraldSnowLvl}/${EMERALD_SNOW_MAX_LVL}</div>
                                <div class="alm-hero-upg-compare">${isEmeraldSnowMax ? '100%' : `${curEmeraldSnow}% → ${Number((curEmeraldSnow + 0.01).toFixed(2))}%`}</div>
                                <div class="alm-hero-upg-price">${isEmeraldSnowMax ? 'МАКСИМУМ' : `${formatLarpValue(emeraldSnowCost)} ${pluralizeLarp(emeraldSnowCost)}`}</div>
                            </button>

                            <button id="alm-gold-trash-btn" class="alm-hero-upg-card gold-theme" ${canBuyGoldTrash ? '' : 'disabled'} onclick="window.buyAuraLarpGoldTrashUpgrade()">
                                <div class="alm-hero-upg-title">3) ЗОЛОТЕ СМІТТЯ (x10)</div>
                                <div class="alm-hero-upg-badge gold">Рів. ${s.goldTrashLvl}/${GOLD_TRASH_MAX_LVL}</div>
                                <div class="alm-hero-upg-compare">${isGoldTrashMax ? '100%' : `${curGoldTrash}% → ${Number((curGoldTrash + 1).toFixed(2))}%`}</div>
                                <div class="alm-hero-upg-price">${isGoldTrashMax ? 'МАКСИМУМ' : `${formatLarpValue(goldTrashCost)} ${pluralizeLarp(goldTrashCost)}`}</div>
                            </button>

                            <button id="alm-emerald-trash-btn" class="alm-hero-upg-card emerald-theme" ${canBuyEmeraldTrash ? '' : 'disabled'} onclick="window.buyAuraLarpEmeraldTrashUpgrade()">
                                <div class="alm-hero-upg-title">4) СМАРАГДОВЕ СМІТТЯ (x1000)</div>
                                <div class="alm-hero-upg-badge emerald">Рів. ${s.emeraldTrashLvl}/${EMERALD_TRASH_MAX_LVL}</div>
                                <div class="alm-hero-upg-compare">${isEmeraldTrashMax ? '100%' : `${curEmeraldTrash}% → ${Number((curEmeraldTrash + 0.01).toFixed(2))}%`}</div>
                                <div class="alm-hero-upg-price">${isEmeraldTrashMax ? 'МАКСИМУМ' : `${formatLarpValue(emeraldTrashCost)} ${pluralizeLarp(emeraldTrashCost)}`}</div>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 70 СХОДИНКИ (ОБ'ЄДНАННЯ ОВОЧІВ ТА ФРУКТІВ — ВІТАМІНИ) ----------------
        if (activeRoomStep === 70) {
            const isRoom70Unlocked = s.maxUnlockedStep >= 70;
            const isCharacterAtRoom70 = s.currentStep === 70 && s.targetStep === 70;

            const curVitMult = getVitaminMultiplier();
            const nextVitMult = getNextVitaminMultiplier();
            const vitMultCost = getVitaminMultUpgradeCost();
            const canBuyVitMult = isRoom70Unlocked && isCharacterAtRoom70 && s.vitamins >= vitMultCost;

            const curLv2Pct = getMergeLv2ChancePct();
            const nextLv2Pct = getNextMergeLv2ChancePct();
            const isLv2Max = (s.mergeLv2ChanceLvl || 0) >= MERGE_LV2_MAX_LVL;
            const lv2Cost = getMergeLv2UpgradeCost();
            const canBuyLv2 = !isLv2Max && isRoom70Unlocked && isCharacterAtRoom70 && s.vitamins >= lv2Cost;

            const curMergeLarpMult = getMergeLarpMultiplier();
            const nextMergeLarpMult = getNextMergeLarpMultiplier();
            const mergeLarpCost = getMergeLarpUpgradeCost();
            const canBuyMergeLarp = isRoom70Unlocked && isCharacterAtRoom70 && s.vitamins >= mergeLarpCost;

            let statusBanner70 = '';
            if (!isRoom70Unlocked) {
                statusBanner70 = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>70-ту сходинку</b> у вкладці «Сходи»!
                    </div>
                `;
            } else if (!isCharacterAtRoom70) {
                statusBanner70 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб об'єднувати овочі та купувати прокачки, персонаж має стояти на <b>70-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(70); window.switchAuraLarpSubTab('stairs');">
                            Піти на 70 сходинку
                        </button>
                    </div>
                `;
            }

            let mergeItemsHtml = '';
            activeMergeItems.forEach(m => {
                const tier = getMergeTierInfo(m.level);
                mergeItemsHtml += `
                    <div class="alm-merge-item" data-merge-id="${m.id}" style="left:${m.xPct}%;top:${m.yPct}%;">
                        <span class="alm-merge-emoji">${tier.icon}</span>
                        <span class="alm-merge-lvl-badge">${m.level}</span>
                    </div>
                `;
            });

            return `
                <div class="alm-room-outer-panel">
                    ${roomsNavHtml}
                    ${statusBanner70}

                    <div class="alm-room-split-grid">
                        <div class="alm-room-left-col">
                            <div class="alm-zone-topbar emerald-border">
                                <span>💊 Вітамінів: <b id="alm-vitamin-balance" style="color:#4ade80;">${formatVitaminValue(s.vitamins)}</b></span>
                                <span>На полі: <b id="alm-merge-count-badge" style="color:#4ade80;">${activeMergeItems.length} / ${MAX_MERGE_ITEMS}</b></span>
                                <span>Всього: <b id="alm-vitamin-total" style="color:#4ade80;">${formatVitaminValue(s.totalVitamins)}</b></span>
                            </div>

                            <div id="alm-merge-zone" class="alm-merge-zone ${isRoom70Unlocked ? (isCharacterAtRoom70 ? '' : 'not-on-step') : 'locked'}">
                                ${isRoom70Unlocked ? `
                                    ${mergeItemsHtml}
                                    <div class="alm-zone-bottom-pill emerald-pill">
                                        ${isCharacterAtRoom70
                                            ? 'Перетягніть однаковий овоч/фрукт один на одного (до 16 рівня)'
                                            : '🚶 Підійдіть на 70 сходинку, щоб об\'єднувати овочі та фрукти'}
                                    </div>
                                ` : '<div class="alm-snow-locked-msg">🔒 Відкрийте 70 сходинку</div>'}
                            </div>

                            ${isRoom70Unlocked ? `
                                <div style="display:flex;justify-content:flex-end;margin-top:6px;">
                                    <button class="alm-mini-go-btn" style="background:rgba(34,197,94,0.16);border-color:rgba(34,197,94,0.45);color:#86efac;" onclick="window.sellAuraLarpMergeItem()">
                                        ♻️ Звільнити місце (+💊)
                                    </button>
                                </div>
                            ` : ''}
                        </div>

                        <div class="alm-room-right-col">
                            <div class="alm-side-panel-box">
                                <div class="alm-side-panel-title">⬆️ ПРОКАЧКИ ОРАНЖЕРЕЇ</div>
                                <div class="alm-compact-upg-list">
                                    <button id="alm-vit-mult-btn" class="alm-compact-upg-card emerald-card" ${canBuyVitMult ? '' : 'disabled'} onclick="window.buyAuraLarpVitaminMultUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">1) Множник вітамінів</span>
                                            <span class="alm-c-upg-lvl emerald-lvl">Рів. ${s.vitaminMultLvl}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">x${formatMultValue(curVitMult)} → x${formatMultValue(nextVitMult)}</span>
                                            <span class="alm-c-upg-cost emerald-cost">💊 ${formatVitaminValue(vitMultCost)}</span>
                                        </div>
                                    </button>

                                    <button id="alm-merge-lv2-btn" class="alm-compact-upg-card emerald-card" ${canBuyLv2 ? '' : 'disabled'} onclick="window.buyAuraLarpMergeLv2Upgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">2) Шанс на помідор (2 рів.)</span>
                                            <span class="alm-c-upg-lvl emerald-lvl">${s.mergeLv2ChanceLvl}/${MERGE_LV2_MAX_LVL}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">${isLv2Max ? '100% (МАКС)' : `${curLv2Pct}% → ${nextLv2Pct}%`}</span>
                                            <span class="alm-c-upg-cost emerald-cost">${isLv2Max ? 'МАКС' : `💊 ${formatVitaminValue(lv2Cost)}`}</span>
                                        </div>
                                    </button>

                                    <button id="alm-merge-larp-btn" class="alm-compact-upg-card emerald-card" ${canBuyMergeLarp ? '' : 'disabled'} onclick="window.buyAuraLarpMergeLarpUpgrade()">
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-name">3) Множник Ларпів</span>
                                            <span class="alm-c-upg-lvl emerald-lvl">Рів. ${s.mergeLarpMultLvl}</span>
                                        </div>
                                        <div class="alm-c-upg-row">
                                            <span class="alm-c-upg-diff">x${formatMultValue(curMergeLarpMult)} → x${formatMultValue(nextMergeLarpMult)}</span>
                                            <span class="alm-c-upg-cost emerald-cost">💊 ${formatVitaminValue(mergeLarpCost)}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div class="alm-side-panel-box">
                                <div class="alm-side-panel-title" style="color:#facc15;">🏆 ТОП ЗІБРАНИХ ВІТАМІНІВ</div>
                                <div id="alm-vitamin-lb-list" class="alm-snow-lb-list">
                                    <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:12px;">Завантаження...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 80 СХОДИНКИ (СНІЖНА БУРЯ) ----------------
        if (activeRoomStep === 80) {
            const isRoom80Unlocked = s.maxUnlockedStep >= 80;
            const isCharacterAtRoom80 = s.currentStep === 80 && s.targetStep === 80;
            const now = getCurrentNowMs();

            const stormActive = s.stormActiveEndMs && now < s.stormActiveEndMs;
            const stormCooldown = s.stormCooldownEndMs && now < s.stormCooldownEndMs;
            const canActivateStorm = isRoom80Unlocked && isCharacterAtRoom80 && !stormActive && !stormCooldown;

            const curDurMin = getStormDurationMinutes();
            const nextDurMin = getNextStormDurationMinutes();
            const durCost = getStormDurationUpgradeCost();
            const canBuyDur = isRoom80Unlocked && isCharacterAtRoom80 && s.larp >= durCost;

            const curCdHr = getStormCooldownHours();
            const nextCdHr = getNextStormCooldownHours();
            const isCdMax = (s.stormCooldownLvl || 0) >= STORM_COOLDOWN_MAX_LVL;
            const cdCost = getStormCooldownUpgradeCost();
            const canBuyCd = !isCdMax && isRoom80Unlocked && isCharacterAtRoom80 && s.larp >= cdCost;

            const curStormSpd = getStormSnowSpawnInterval();
            const nextStormSpd = getNextStormSnowSpawnInterval();
            const isStormSpdMax = (s.stormSpeedLvl || 0) >= STORM_SPAWN_MAX_LVL;
            const stormSpdCost = getStormSpeedUpgradeCost();
            const canBuyStormSpd = !isStormSpdMax && isRoom80Unlocked && isCharacterAtRoom80 && s.larp >= stormSpdCost;

            let statusBanner80 = '';
            if (!isRoom80Unlocked) {
                statusBanner80 = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>80-ту сходинку</b> у вкладці «Сходи»!
                    </div>
                `;
            } else if (!isCharacterAtRoom80) {
                statusBanner80 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб викликати Сніжну бурю та купувати прокачки, персонаж має стояти на <b>80-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(80); window.switchAuraLarpSubTab('stairs');">
                            Піти на 80 сходинку
                        </button>
                    </div>
                `;
            }

            let stormBtnText = `🌨️ Викликати сніжну бурю (${curDurMin} хв)`;
            let stormStatusLine = `<span style="color:#4ade80;font-weight:800;">✅ Сніжна буря готова до запуску!</span>`;
            if (stormActive) {
                const leftSec = Math.max(0, (s.stormActiveEndMs - now) / 1000);
                stormBtnText = `🌨️ Буря активна (${formatTimerMmSs(leftSec)})`;
                stormStatusLine = `<span style="color:#38bdf8;font-weight:900;">🌨️ Сніжна буря вирує! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
            } else if (stormCooldown) {
                const cdLeftSec = Math.max(0, (s.stormCooldownEndMs - now) / 1000);
                stormBtnText = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
                stormStatusLine = `<span style="color:#f59e0b;font-weight:800;">⏳ Перезарядка бурі: ${formatTimerMmSs(cdLeftSec)}</span>`;
            }

            return `
                <div class="alm-room-outer-panel">
                    ${roomsNavHtml}
                    ${statusBanner80}

                    <div class="alm-centered-room-section">
                        <div class="alm-section-heading">МЕТЕОСТАНЦІЯ БУРІ — 80 СХОДИНКА</div>
                        <div class="alm-storm-hero-box">
                            <div style="font-size:0.84rem;color:#cbd5e1;margin-bottom:8px;">
                                Потужна сніжна буря на <b>20-й сходинці</b>: сніжинки з'являються кожні <b style="color:#38bdf8;">${curStormSpd} сек</b> протягом <b>${curDurMin} хв</b>!
                            </div>
                            <div id="alm-storm-status-text" style="font-size:0.84rem;margin-bottom:10px;">
                                ${stormStatusLine}
                            </div>
                            <button id="alm-storm-activate-btn" class="alm-storm-launch-btn"
                                    ${canActivateStorm ? '' : 'disabled'}
                                    onclick="window.activateAuraLarpSnowstorm()">
                                ${stormBtnText}
                            </button>
                        </div>

                        <div class="alm-three-hero-grid">
                            <button id="alm-storm-dur-btn" class="alm-hero-upg-card snow-theme" ${canBuyDur ? '' : 'disabled'} onclick="window.buyAuraLarpStormDurationUpgrade()">
                                <div class="alm-hero-upg-title">1) ТРИВАЛІСТЬ БУРІ</div>
                                <div class="alm-hero-upg-badge snow">Рів. ${s.stormDurationLvl}</div>
                                <div class="alm-hero-upg-compare">${curDurMin} хв → ${nextDurMin} хв</div>
                                <div class="alm-hero-upg-price">${formatLarpValue(durCost)} ${pluralizeLarp(durCost)}</div>
                            </button>

                            <button id="alm-storm-cd-btn" class="alm-hero-upg-card snow-theme" ${canBuyCd ? '' : 'disabled'} onclick="window.buyAuraLarpStormCooldownUpgrade()">
                                <div class="alm-hero-upg-title">2) ПЕРЕЗАРЯДКА БУРІ</div>
                                <div class="alm-hero-upg-badge snow">Рів. ${s.stormCooldownLvl}/${STORM_COOLDOWN_MAX_LVL}</div>
                                <div class="alm-hero-upg-compare">${isCdMax ? '0.5 год (МАКС)' : `${curCdHr} год → ${nextCdHr} год`}</div>
                                <div class="alm-hero-upg-price">${isCdMax ? 'МАКСИМУМ' : `${formatLarpValue(cdCost)} ${pluralizeLarp(cdCost)}`}</div>
                            </button>

                            <button id="alm-storm-spd-btn" class="alm-hero-upg-card snow-theme" ${canBuyStormSpd ? '' : 'disabled'} onclick="window.buyAuraLarpStormSpeedUpgrade()">
                                <div class="alm-hero-upg-title">3) ШВИДКІСТЬ У БУРІ</div>
                                <div class="alm-hero-upg-badge snow">Рів. ${s.stormSpeedLvl}/${STORM_SPAWN_MAX_LVL}</div>
                                <div class="alm-hero-upg-compare">${isStormSpdMax ? `${curStormSpd}с (МАКС)` : `${curStormSpd}с → ${nextStormSpd}с`}</div>
                                <div class="alm-hero-upg-price">${isStormSpdMax ? 'МАКСИМУМ' : `${formatLarpValue(stormSpdCost)} ${pluralizeLarp(stormSpdCost)}`}</div>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 90 СХОДИНКИ (ПРОКАЧКИ МОБІВ ДЛЯ 50 СХОДИНКИ) ----------------
        const isRoom90Unlocked = s.maxUnlockedStep >= 90;
        const isCharacterAtRoom90 = s.currentStep === 90 && s.targetStep === 90;

        const curDmg = getChickenClickDamage();
        const isDmgMax = (s.mobDamageLvl || 0) >= MOB_DMG_MAX_LVL;
        const dmgCost = getMobDamageUpgradeCost();
        const canBuyDmg = !isDmgMax && isRoom90Unlocked && isCharacterAtRoom90 && s.larp >= dmgCost;

        const curRespawnReduction = Math.min(MOB_SPAWN_MAX_LVL, s.mobRespawnLvl || 0);
        const curRespawnSec = getChickenRespawnDurationSec();
        const nextRespawnSec = Math.max(1, Math.round(CHICKEN_BASE_RESPAWN_SEC * (1 - Math.min(MOB_SPAWN_MAX_LVL, curRespawnReduction + 1) / 100)));
        const isRespawnMax = (s.mobRespawnLvl || 0) >= MOB_SPAWN_MAX_LVL;
        const respawnCost = getMobRespawnUpgradeCost();
        const canBuyRespawn = !isRespawnMax && isRoom90Unlocked && isCharacterAtRoom90 && s.larp >= respawnCost;

        let statusBanner90 = '';
        if (!isRoom90Unlocked) {
            statusBanner90 = `
                <div class="alm-room-alert locked">
                    🔒 <b>Кімната заблокована!</b> Відкрийте <b>90-ту сходинку</b> у вкладці «Сходи»!
                </div>
            `;
        } else if (!isCharacterAtRoom90) {
            statusBanner90 = `
                <div class="alm-room-alert warning">
                    <div>🚶 Щоб купувати прокачки мисливця, персонаж має стояти на <b>90-й сходинці</b> (зараз: ${s.currentStep}).</div>
                    <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(90); window.switchAuraLarpSubTab('stairs');">
                        Піти на 90 сходинку
                    </button>
                </div>
            `;
        }

        return `
            <div class="alm-room-outer-panel">
                ${roomsNavHtml}
                ${statusBanner90}
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">КУЗНЯ МИСЛИВЦЯ НА МОБІВ — 90 СХОДИНКА</div>
                    <div class="alm-two-hero-grid">
                        <button id="alm-mob-dmg-btn" class="alm-hero-upg-card crimson-theme" ${canBuyDmg ? '' : 'disabled'} onclick="window.buyAuraLarpMobDamageUpgrade()">
                            <div class="alm-hero-upg-title">1) УРОН ПО МОБАХ (50 СХ.)</div>
                            <div class="alm-hero-upg-badge crimson">Рів. ${s.mobDamageLvl}/${MOB_DMG_MAX_LVL}</div>
                            <div class="alm-hero-upg-compare">${isDmgMax ? `${curDmg} HP (МАКС)` : `${curDmg} → ${curDmg + 1} HP`}</div>
                            <div class="alm-hero-upg-subtext crimson">урон за клік по Квочці Рябій</div>
                            <div class="alm-hero-upg-price">${isDmgMax ? 'МАКСИМУМ' : `${formatLarpValue(dmgCost)} ${pluralizeLarp(dmgCost)}`}</div>
                        </button>

                        <button id="alm-mob-respawn-btn" class="alm-hero-upg-card crimson-theme" ${canBuyRespawn ? '' : 'disabled'} onclick="window.buyAuraLarpMobRespawnUpgrade()">
                            <div class="alm-hero-upg-title">2) ШВИДКІСТЬ ПОЯВИ МОБІВ</div>
                            <div class="alm-hero-upg-badge crimson">Рів. ${s.mobRespawnLvl}/${MOB_SPAWN_MAX_LVL} (-${curRespawnReduction}%)</div>
                            <div class="alm-hero-upg-compare">${isRespawnMax ? `${formatDurationUk(curRespawnSec)} (МАКС)` : `${formatDurationUk(curRespawnSec)} → ${formatDurationUk(nextRespawnSec)}`}</div>
                            <div class="alm-hero-upg-subtext crimson">час відродження Бойової Квочки</div>
                            <div class="alm-hero-upg-price">${isRespawnMax ? 'МАКСИМУМ' : `${formatLarpValue(respawnCost)} ${pluralizeLarp(respawnCost)}`}</div>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderAuraLarpMonsterUI(scrollToPlayer) {
        const s = initAuraLarpMonsterState();
        updateTopGameHeader();

        const container = document.getElementById('aura-larp-monster-view');
        if (!container) return;

        const prevViewport = document.getElementById('alm-stairs-viewport');
        const savedScrollTop = prevViewport ? prevViewport.scrollTop : null;

        const currentRate = getLarpPerSecond();
        const highestStepNum = getHighestUnlockedStepNumber();
        const highestRate = getHighestStepLarpPerSecond();
        const stairMult = getStairMultiplier();
        const roomMult = getRoomLarpMultiplier();
        const snowLarpMult = getSnowLarpMultiplier();
        const trashLarpMult = getTrashLarpMultiplier();
        const featherLarpMult = getFeatherLarpMultiplier();
        const mergeLarpMult = getMergeLarpMultiplier();
        const totalMult = getTotalLarpMultiplier();
        const offlinePct = getOfflineLarpPercent();

        const nextStep = s.maxUnlockedStep + 1;
        const nextStepObj = nextStep <= MAX_STEP ? STAIRS_CONFIG.find(item => item.step === nextStep) : null;

        let subContentHtml = '';

        if (activeLarpSubTab === 'stairs') {
            let rowsHtml = '';
            for (let i = 0; i < STAIRS_CONFIG.length; i++) {
                const item = STAIRS_CONFIG[i];
                const stepNum = item.step;
                const isRoomStep = ROOM_STEPS.includes(stepNum);
                const isUnlocked = stepNum <= s.maxUnlockedStep;
                const isNext = stepNum === s.maxUnlockedStep + 1;
                const isCurrent = stepNum === s.currentStep && s.currentStep === s.targetStep;
                const isTarget = stepNum === s.targetStep && s.currentStep !== s.targetStep;

                const rowClasses = [
                    'alm-stair-row',
                    isRoomStep ? 'room-step' : '',
                    isUnlocked ? 'unlocked' : (isNext ? 'next-unlock' : 'locked'),
                    isCurrent ? 'current-step' : '',
                    isTarget ? 'target-step' : ''
                ].filter(Boolean).join(' ');

                const barLeftCss = getStepLeftCss(stepNum);
                const centerLeftCss = getStepCenterCss(stepNum);

                let rightActionHtml = '';
                if (isRoomStep) {
                    rightActionHtml = isUnlocked
                        ? `<button class="alm-room-pill-btn unlocked" onclick="event.stopPropagation(); window.openAuraLarpRoomAtStep(${stepNum})">Кімната</button>`
                        : `<span class="alm-room-pill-btn locked">🔒 Кімната</span>`;
                } else if (isNext) {
                    rightActionHtml = `<span class="alm-unlock-tag">Відкрити</span>`;
                }

                rowsHtml += `
                    <div class="${rowClasses}" data-step="${stepNum}" style="height:${ROW_HEIGHT}px;" onclick="window.moveAuraLarpToStep(${stepNum})">
                        ${stepNum < MAX_STEP ? `<div class="alm-step-connector" style="left:${centerLeftCss};"></div>` : ''}
                        <div class="alm-step-bar" style="left:${barLeftCss};width:${STEP_BAR_PX}px;"></div>
                        <div class="alm-step-center-info">
                            <span class="alm-step-num-center">${stepNum}</span>
                            <span class="alm-step-mult-pill">x${formatMultValue(item.mult)}</span>
                        </div>
                        <div class="alm-step-right-slot">
                            ${rightActionHtml}
                        </div>
                    </div>
                `;
            }

            const visStep = getVisualStepPosition();
            const isMoving = s.currentStep !== s.targetStep;
            const charLeftCss = getStepCenterCss(visStep);
            const charBottomPx = (visStep - 1) * ROW_HEIGHT + 24;
            const totalTrackHeight = MAX_STEP * ROW_HEIGHT + 36;

            subContentHtml = `
                <div class="alm-stairs-viewport" id="alm-stairs-viewport">
                    <div class="alm-stairs-track" id="alm-stairs-track" style="height: ${totalTrackHeight}px;">
                        ${rowsHtml}
                        <div id="alm-character" class="alm-character ${isMoving ? 'is-moving' : ''}" style="left: ${charLeftCss}; bottom: ${charBottomPx}px;">
                            <div id="alm-char-status" class="alm-char-status" style="display: ${isMoving ? 'block' : 'none'};">
                                🏃 ${s.targetStep}
                            </div>
                            <div class="alm-char-avatar">👤</div>
                        </div>
                    </div>
                </div>

                <div class="alm-bottom-unlock-card">
                    ${nextStepObj ? `
                        <div class="alm-unlock-summary">
                            <span>Сходинка: <b>${nextStepObj.step}</b></span>
                            <span class="alm-dot-sep">•</span>
                            <span>Множник: <b style="color:#38bdf8;">x${formatMultValue(nextStepObj.mult)}</b></span>
                        </div>
                        <button id="alm-unlock-btn" class="alm-unlock-gold-btn" ${s.larp >= nextStepObj.cost ? '' : 'disabled'} onclick="window.unlockNextAuraLarpStep()">
                            Купити — ${formatLarpValue(nextStepObj.cost)} ${pluralizeLarp(nextStepObj.cost)}
                        </button>
                    ` : `
                        <div class="alm-unlock-summary" style="width:100%;justify-content:center;color:#4ade80;font-weight:900;">
                            👑 Усі ${MAX_STEP} сходинок відкрито! Максимальна висота досягнута!
                        </div>
                    `}
                </div>
            `;
        } else if (activeLarpSubTab === 'room') {
            subContentHtml = renderRoomTabHtml(s);
        } else if (activeLarpSubTab === 'multipliers') {
            subContentHtml = `
                <div class="alm-mult-panel">
                    <div class="alm-mult-row-card">
                        <div class="alm-mult-row-left">
                            <div class="alm-mult-row-title">Множник поточної сходинки</div>
                            <div class="alm-mult-row-sub">Ви зараз на ${s.currentStep}-й сходинці (найвища: ${highestStepNum})</div>
                        </div>
                        <div class="alm-mult-row-val cyan">x${formatMultValue(stairMult)}</div>
                    </div>

                    <div class="alm-mult-row-card">
                        <div class="alm-mult-row-left">
                            <div class="alm-mult-row-title">Множник кімнати (10 сходинка)</div>
                            <div class="alm-mult-row-sub">Рівень прокачки: ${s.roomMultLvl}</div>
                        </div>
                        <div class="alm-mult-row-val green">x${formatMultValue(roomMult)}</div>
                    </div>

                    <div class="alm-mult-row-card">
                        <div class="alm-mult-row-left">
                            <div class="alm-mult-row-title">Множник сніжної зони (20 сходинка)</div>
                            <div class="alm-mult-row-sub">Рівень прокачки: ${s.snowLarpMultLvl}</div>
                        </div>
                        <div class="alm-mult-row-val cyan">x${formatMultValue(snowLarpMult)}</div>
                    </div>

                    <div class="alm-mult-row-card">
                        <div class="alm-mult-row-left">
                            <div class="alm-mult-row-title">Множник прибирання (30 сходинка)</div>
                            <div class="alm-mult-row-sub">Рівень прокачки: ${s.trashLarpMultLvl}</div>
                        </div>
                        <div class="alm-mult-row-val gold">x${formatMultValue(trashLarpMult)}</div>
                    </div>

                    <div class="alm-mult-row-card">
                        <div class="alm-mult-row-left">
                            <div class="alm-mult-row-title">Множник пір'я курочки (50 сходинка)</div>
                            <div class="alm-mult-row-sub">Рівень прокачки: ${s.featherLarpMultLvl}</div>
                        </div>
                        <div class="alm-mult-row-val gold">x${formatMultValue(featherLarpMult)}</div>
                    </div>

                    <div class="alm-mult-row-card">
                        <div class="alm-mult-row-left">
                            <div class="alm-mult-row-title">Множник оранжереї (70 сходинка)</div>
                            <div class="alm-mult-row-sub">Рівень прокачки: ${s.mergeLarpMultLvl}</div>
                        </div>
                        <div class="alm-mult-row-val green">x${formatMultValue(mergeLarpMult)}</div>
                    </div>

                    <div class="alm-mult-total-card">
                        <div class="alm-mult-formula">
                            ПОТОЧНИЙ МНОЖНИК (X${formatMultValue(stairMult)} × X${formatMultValue(roomMult)} × X${formatMultValue(snowLarpMult)} × X${formatMultValue(trashLarpMult)} × X${formatMultValue(featherLarpMult)} × X${formatMultValue(mergeLarpMult)})
                        </div>
                        <div class="alm-mult-total-big">x${formatMultValue(totalMult)}</div>
                        <div class="alm-mult-rate-green">${formatMultValue(currentRate)} ларп/сек</div>
                        <div class="alm-mult-highest-line">
                            Дохід за найвищою сходинкою (${highestStepNum} сх., для топу та офлайну): <b style="color:#38bdf8;">${formatMultValue(highestRate)} ларп/сек</b>
                        </div>
                    </div>
                </div>
            `;
        } else {
            subContentHtml = `
                <div class="alm-lb-panel">
                    <div class="alm-lb-tabs">
                        <button class="alm-lb-tab-btn ${activeLeaderboardType === 'highestStep' ? 'active' : ''}"
                                onclick="window.switchAuraLarpLeaderboardType('highestStep')">
                            🪜 Найвища сходинка
                        </button>
                        <button class="alm-lb-tab-btn ${activeLeaderboardType === 'larpPerSec' ? 'active' : ''}"
                                onclick="window.switchAuraLarpLeaderboardType('larpPerSec')">
                            ⚡ Дохід Ларпів
                        </button>
                        <button class="alm-lb-tab-btn ${activeLeaderboardType === 'totalLarp' ? 'active' : ''}"
                                onclick="window.switchAuraLarpLeaderboardType('totalLarp')">
                            💰 Всього Ларпів
                        </button>
                    </div>
                    <div id="alm-leaderboard-list" class="alm-leaderboard-list">
                        <div style="text-align: center; color: #94a3b8; padding: 24px;">Завантаження рейтингу...</div>
                    </div>
                </div>
            `;
        }

        let internetStatusHtml = '';
        if (offlinePct > 0) {
            if (isCheckingGlobalTime) {
                internetStatusHtml = `
                    <div class="alm-offline-banner info">
                        <span>🌐 Перевірка глобального часу...</span>
                    </div>
                `;
            } else if (noInternetError) {
                internetStatusHtml = `
                    <div class="alm-offline-banner error">
                        <span>⚠️ Немає інтернету для офлайн-заробітку.</span>
                        <button class="alm-mini-go-btn" onclick="window.verifyAuraLarpGlobalTime()">Повторити</button>
                    </div>
                `;
            }
        }

        let offlineModalHtml = '';
        if (offlineRewardReport) {
            offlineModalHtml = `
                <div class="alm-offline-reward-card">
                    <div style="font-weight: 900; color: #facc15; font-size: 0.95rem; margin-bottom: 4px;">
                        🌙 Офлайн-заробіток (${offlineRewardReport.offlinePct}% від ${offlineRewardReport.highestStep}-ї сх.)
                    </div>
                    <div style="font-size: 0.82rem; color: #e2e8f0; margin-bottom: 8px;">
                        Вас не було: <b>${formatDurationUk(offlineRewardReport.elapsedSec)}</b> • Отримано: <b style="color: #4ade80;">+${formatLarpValue(offlineRewardReport.earnedOffline)} ${pluralizeLarp(offlineRewardReport.earnedOffline)}</b>
                    </div>
                    <button class="alm-mini-go-btn" style="background: #22c55e; color: #052e16; border: none;" onclick="window.dismissAuraLarpOfflineReport()">
                        Забрати
                    </button>
                </div>
            `;
        }

        const hasRoomsUnlocked = s.maxUnlockedStep >= 10;

        container.innerHTML = `
            <div class="alm-wrapper">
                <div class="alm-top-actions-row">
                    <button class="alm-home-top-btn" onclick="window.exitAuraLarpMonster()">
                        🏠 Додому
                    </button>
                    <button id="alm-reset-test-btn" class="alm-reset-test-btn ${resetConfirmPending ? 'confirming' : ''}" onclick="window.handleResetAuraLarpClick()">
                        ${resetConfirmPending ? '⚠️ Підтвердити скидання?' : '🔄 Скинути прогрес'}
                    </button>
                </div>

                <div class="alm-header-card">
                    <div class="alm-top-bar">
                        <div class="alm-larp-counter-group">
                            <span class="alm-larp-value" id="alm-larp-balance">${formatLarpValue(s.larp)}</span>
                            <span class="alm-larp-word" id="alm-larp-word">${pluralizeLarp(s.larp)}</span>
                            <span class="alm-larp-rate-pill" id="alm-larp-rate">${formatMultValue(currentRate)} ларп/сек</span>
                        </div>
                        <div class="alm-step-pill" id="alm-step-pill">
                            <span class="alm-step-dot"></span>
                            <span id="alm-step-badge">${s.currentStep}</span>
                        </div>
                    </div>

                    <div class="alm-subtabs">
                        <button class="alm-subtab-btn ${activeLarpSubTab === 'stairs' ? 'active' : ''}" onclick="window.switchAuraLarpSubTab('stairs')">
                            Сходи
                        </button>
                        <button class="alm-subtab-btn ${activeLarpSubTab === 'room' ? 'active' : ''}" onclick="window.switchAuraLarpSubTab('room')">
                            Кімнати${hasRoomsUnlocked ? ' <span class="alm-tab-green-dot">●</span>' : ''}
                        </button>
                        <button class="alm-subtab-btn ${activeLarpSubTab === 'multipliers' ? 'active' : ''}" onclick="window.switchAuraLarpSubTab('multipliers')">
                            Множники
                        </button>
                        <button class="alm-subtab-btn ${activeLarpSubTab === 'leaderboard' ? 'active' : ''}" onclick="window.switchAuraLarpSubTab('leaderboard')">
                            Топ
                        </button>
                    </div>
                </div>

                ${internetStatusHtml}
                ${offlineModalHtml}
                ${subContentHtml}
            </div>
        `;

        if (activeLarpSubTab === 'stairs') {
            const viewport = document.getElementById('alm-stairs-viewport');
            if (viewport) {
                if (scrollToPlayer) {
                    const visStep = getVisualStepPosition();
                    const charBottomPx = (visStep - 1) * ROW_HEIGHT + 24;
                    const totalHeight = MAX_STEP * ROW_HEIGHT + 36;
                    const charTop = totalHeight - charBottomPx;
                    viewport.scrollTop = Math.max(0, charTop - viewport.clientHeight * 0.55);
                } else if (savedScrollTop !== null) {
                    viewport.scrollTop = savedScrollTop;
                }
            }
        } else if (activeLarpSubTab === 'room') {
            if (activeRoomStep === 20) {
                bindSnowZoneEvents();
                renderSnowLeaderboardList();
            } else if (activeRoomStep === 30) {
                bindTrashZoneEvents();
                renderTrashLeaderboardList();
            } else if (activeRoomStep === 50) {
                renderFeatherLeaderboardList();
            } else if (activeRoomStep === 70) {
                bindMergeZoneEvents();
                renderVitaminLeaderboardList();
            }
        } else if (activeLarpSubTab === 'leaderboard') {
            renderLarpLeaderboardList();
        }
    }

    // ------------------------------------------
    // СКИДАННЯ ПРОГРЕСУ (КНОПКА ДЛЯ ТЕСТУВАННЯ)
    // ------------------------------------------
    function handleResetAuraLarpClick() {
        if (!resetConfirmPending) {
            resetConfirmPending = true;
            if (resetConfirmTimer) clearTimeout(resetConfirmTimer);
            resetConfirmTimer = setTimeout(() => {
                resetConfirmPending = false;
                if (isAuraLarpModeActive) {
                    renderAuraLarpMonsterUI(false);
                }
            }, 4000);
            if (isAuraLarpModeActive) {
                renderAuraLarpMonsterUI(false);
            }
            return;
        }

        if (resetConfirmTimer) {
            clearTimeout(resetConfirmTimer);
            resetConfirmTimer = null;
        }
        resetConfirmPending = false;
        resetAuraLarpMonsterProgress();
    }

    function resetAuraLarpMonsterProgress() {
        moduleState = getDefaultModuleState();
        attachStateToRoot(moduleState);

        activeSnowflakes = [];
        nextSnowflakeId = 1;
        snowSpawnAccumSec = 0;
        isPointerSwipingSnow = false;

        activeTrashItems = [];
        nextTrashId = 1;
        trashSpawnAccumSec = 0;
        draggingTrashId = null;

        activeMergeItems = [];
        nextMergeId = 1;
        mergeSpawnAccumSec = 0;
        draggingMergeId = null;

        offlineRewardReport = null;
        activeLarpSubTab = 'stairs';
        activeRoomStep = 10;

        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        updateTopGameHeader();

        if (isAuraLarpModeActive) {
            renderAuraLarpMonsterUI(true);
        }
    }

    // ------------------------------------------
    // ВХІД ТА ВИХІД З АУРА ЛАРП МОНСТЕР
    // ------------------------------------------
    function enterAuraLarpMonster() {
        isAuraLarpModeActive = true;
        initAuraLarpMonsterState();
        persistAuraLarpState(false);

        const gameScreen = document.getElementById('game-screen');
        if (!gameScreen) return;

        const tabNav = gameScreen.querySelector('.tab-nav');
        if (tabNav) tabNav.style.display = 'none';

        gameScreen.querySelectorAll('.tab-content').forEach(el => {
            el.style.display = 'none';
        });

        let view = document.getElementById('aura-larp-monster-view');
        if (!view) {
            view = document.createElement('div');
            view.id = 'aura-larp-monster-view';
            gameScreen.appendChild(view);
        }
        view.style.display = 'flex';

        updateTopGameHeader();
        renderAuraLarpMonsterUI(true);
        startVisualAnimationLoop();
        verifyGlobalTimeAndApplyOfflineProgress();
    }

    function exitAuraLarpMonster() {
        isAuraLarpModeActive = false;
        isPointerSwipingSnow = false;
        draggingTrashId = null;
        draggingMergeId = null;
        resetConfirmPending = false;
        if (resetConfirmTimer) {
            clearTimeout(resetConfirmTimer);
            resetConfirmTimer = null;
        }
        persistAuraLarpState(true);

        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }

        const gameScreen = document.getElementById('game-screen');
        if (!gameScreen) return;

        const view = document.getElementById('aura-larp-monster-view');
        if (view) view.style.display = 'none';

        const tabNav = gameScreen.querySelector('.tab-nav');
        if (tabNav) tabNav.style.display = '';

        gameScreen.querySelectorAll('.tab-content').forEach(el => {
            el.style.display = '';
        });

        updateTopGameHeader();

        const navBtn = document.getElementById('alm-nav-tab-btn');
        if (navBtn) navBtn.classList.remove('active');

        const firstMainTabBtn = tabNav ? tabNav.querySelector('.tab-btn:not(#alm-nav-tab-btn), button:not(#alm-nav-tab-btn)') : null;
        if (firstMainTabBtn && typeof firstMainTabBtn.click === 'function') {
            firstMainTabBtn.click();
        } else if (typeof window.switchTab === 'function') {
            window.switchTab('upgrades');
        }
    }

    // ------------------------------------------
    // ІНТЕГРАЦІЯ ОКРЕМОЇ ВКЛАДКИ "АУРА ЛАРП МОНСТЕР" ТА ХУКИ ЗБЕРЕЖЕННЯ
    // ------------------------------------------
    function injectAuraLarpNavTab() {
        const legacyCard = document.getElementById('alm-entry-card');
        if (legacyCard && legacyCard.parentNode) {
            legacyCard.parentNode.removeChild(legacyCard);
        }

        const gameScreen = document.getElementById('game-screen');
        const tabNav = (gameScreen && gameScreen.querySelector('.tab-nav')) || document.querySelector('.tab-nav');

        if (tabNav) {
            const fallbackBtn = document.getElementById('alm-fallback-entry-btn');
            if (fallbackBtn && fallbackBtn.parentNode) {
                fallbackBtn.parentNode.removeChild(fallbackBtn);
            }

            let navBtn = document.getElementById('alm-nav-tab-btn');
            if (!navBtn) {
                navBtn = document.createElement('button');
                navBtn.id = 'alm-nav-tab-btn';
                navBtn.type = 'button';
                navBtn.className = 'tab-btn alm-nav-tab-btn';
                navBtn.innerHTML = '🪜 Аура Ларп Монстер';
                navBtn.onclick = function (e) {
                    if (e) e.preventDefault();
                    enterAuraLarpMonster();
                };
                tabNav.appendChild(navBtn);
            }
            return;
        }

        // Резервна кнопка входу, якщо контейнер .tab-nav ще не створено або має іншу структуру
        const targetHost = gameScreen || document.body;
        if (targetHost && !document.getElementById('alm-fallback-entry-btn')) {
            const fallbackBtn = document.createElement('button');
            fallbackBtn.id = 'alm-fallback-entry-btn';
            fallbackBtn.type = 'button';
            fallbackBtn.className = 'alm-fallback-entry-btn';
            fallbackBtn.innerHTML = '🪜 Аура Ларп Монстер';
            fallbackBtn.onclick = function (e) {
                if (e) e.preventDefault();
                enterAuraLarpMonster();
            };
            targetHost.appendChild(fallbackBtn);
        }
    }

    function setupHooksAndStyles() {
        if (!document.getElementById('alm-module-styles')) {
            const style = document.createElement('style');
            style.id = 'alm-module-styles';
            style.textContent = `
                /* Кнопка окремої вкладки Аура Ларп Монстер у .tab-nav */
                .tab-nav .alm-nav-tab-btn {
                    border-color: rgba(250, 204, 21, 0.45);
                    color: #fde047;
                }
                .tab-nav .alm-nav-tab-btn:hover {
                    border-color: #facc15;
                    background: rgba(250, 204, 21, 0.14);
                }

                .alm-fallback-entry-btn {
                    position: fixed;
                    right: 14px;
                    bottom: 14px;
                    z-index: 9999;
                    background: linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%);
                    border: 1.5px solid #facc15;
                    color: #fde047;
                    padding: 10px 16px;
                    border-radius: 12px;
                    font-weight: 900;
                    font-size: 0.88rem;
                    cursor: pointer;
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.55);
                }
                .tab-nav .alm-nav-tab-btn:hover {
                    border-color: #facc15;
                    background: rgba(250, 204, 21, 0.14);
                }

                /* Верхня панель у режимі Аура Ларп Монстер */
                #game-screen header .alm-top-badge.alm-top-larp {
                    color: #facc15;
                    border-color: #eab308;
                }
                #game-screen header .alm-top-badge.alm-top-room {
                    font-weight: 800;
                }

                #aura-larp-monster-view {
                    width: 100%;
                    max-width: 680px;
                    padding: 10px 12px 24px 12px;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                }

                .alm-wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .alm-top-actions-row {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 8px;
                    width: 100%;
                }

                /* Верхня кнопка Додому як на скріншотах */
                .alm-home-top-btn {
                    width: 100%;
                    background: linear-gradient(180deg, #191326 0%, #120e1c 100%);
                    border: 1.5px solid #7e22ce;
                    color: #f8fafc;
                    padding: 10px 14px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 0.9rem;
                    cursor: pointer;
                    text-align: center;
                    transition: transform 0.1s, border-color 0.2s, background 0.2s;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
                }

                .alm-home-top-btn:hover {
                    border-color: #a855f7;
                    background: #1f1730;
                }

                .alm-home-top-btn:active {
                    transform: scale(0.985);
                }

                .alm-reset-test-btn {
                    background: linear-gradient(180deg, #291318 0%, #1a0b0e 100%);
                    border: 1.5px solid rgba(239, 68, 68, 0.55);
                    color: #fca5a5;
                    padding: 10px 12px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 0.82rem;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: transform 0.1s, border-color 0.2s, background 0.2s;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
                }

                .alm-reset-test-btn:hover {
                    border-color: #ef4444;
                    background: #35151c;
                }

                .alm-reset-test-btn.confirming {
                    background: #dc2626;
                    border-color: #fca5a5;
                    color: #ffffff;
                }

                /* Шапка режиму */
                .alm-header-card {
                    background: #131726;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 12px 14px;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
                }

                .alm-top-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                }

                .alm-larp-counter-group {
                    display: flex;
                    align-items: baseline;
                    gap: 6px;
                    flex-wrap: wrap;
                }

                .alm-larp-value {
                    font-size: 1.65rem;
                    font-weight: 900;
                    color: #facc15;
                    line-height: 1.1;
                }

                .alm-larp-word {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #eab308;
                }

                .alm-larp-rate-pill {
                    font-size: 0.82rem;
                    font-weight: 800;
                    color: #4ade80;
                    background: rgba(15, 23, 42, 0.85);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 3px 10px;
                    border-radius: 8px;
                    margin-left: 2px;
                }

                .alm-step-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    background: #0d111c;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 6px 12px;
                    border-radius: 10px;
                    font-weight: 900;
                    color: #f8fafc;
                    font-size: 0.95rem;
                    white-space: nowrap;
                }

                .alm-step-dot {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #38bdf8;
                    box-shadow: 0 0 8px #38bdf8;
                }

                /* Сегментовані підвкладки */
                .alm-subtabs {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 4px;
                    margin-top: 10px;
                    background: #0b0e17;
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 12px;
                    padding: 4px;
                }

                .alm-subtab-btn {
                    background: transparent;
                    border: none;
                    color: #e2e8f0;
                    padding: 8px 4px;
                    border-radius: 9px;
                    font-weight: 800;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.15s;
                    white-space: nowrap;
                }

                .alm-subtab-btn:hover:not(.active) {
                    background: rgba(255, 255, 255, 0.05);
                }

                .alm-subtab-btn.active {
                    background: #facc15;
                    color: #0f172a;
                    box-shadow: 0 2px 10px rgba(250, 204, 21, 0.35);
                }

                .alm-tab-green-dot {
                    color: #22c55e;
                    font-size: 0.7rem;
                    vertical-align: middle;
                }

                .alm-subtab-btn.active .alm-tab-green-dot {
                    color: #15803d;
                }

                /* Банери офлайну */
                .alm-offline-banner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    padding: 8px 12px;
                    border-radius: 12px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    background: rgba(239, 68, 68, 0.14);
                    border: 1px solid rgba(239, 68, 68, 0.4);
                    color: #fecaca;
                }

                .alm-offline-banner.info {
                    background: rgba(56, 189, 248, 0.12);
                    border-color: rgba(56, 189, 248, 0.35);
                    color: #bae6fd;
                }

                .alm-offline-reward-card {
                    background: linear-gradient(135deg, #1b1829, #131726);
                    border: 1.5px solid #eab308;
                    border-radius: 14px;
                    padding: 12px 14px;
                    text-align: center;
                }

                /* ==================== ВКЛАДКА СХОДИ (Всі 100 поміщаються) ==================== */
                .alm-stairs-viewport {
                    position: relative;
                    width: 100%;
                    height: 390px;
                    background-color: #0d121f;
                    background-image:
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 22px 22px;
                    border: 1.5px solid rgba(255, 255, 255, 0.09);
                    border-radius: 16px;
                    overflow-y: auto;
                    overflow-x: hidden;
                    box-shadow: inset 0 0 28px rgba(0, 0, 0, 0.65);
                }

                .alm-stairs-track {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column-reverse;
                    padding-bottom: 16px;
                }

                .alm-stair-row {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    transition: background 0.15s;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.02);
                }

                .alm-stair-row.unlocked:hover {
                    background: rgba(56, 189, 248, 0.07);
                }

                .alm-stair-row.current-step {
                    background: rgba(56, 189, 248, 0.13);
                }

                .alm-stair-row.target-step {
                    background: rgba(250, 204, 21, 0.09);
                }

                .alm-step-connector {
                    position: absolute;
                    bottom: 22px;
                    width: 1.5px;
                    height: 44px;
                    background: rgba(56, 189, 248, 0.35);
                    transform: translateX(-50%);
                    pointer-events: none;
                    z-index: 1;
                }

                .alm-stair-row.locked .alm-step-connector {
                    background: rgba(148, 163, 184, 0.18);
                }

                .alm-step-bar {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 12px;
                    border-radius: 6px;
                    background: rgba(14, 116, 144, 0.32);
                    border: 1.5px solid #0284c7;
                    transition: all 0.15s;
                    z-index: 2;
                }

                .alm-stair-row.room-step .alm-step-bar {
                    background: rgba(22, 163, 74, 0.32);
                    border-color: #22c55e;
                }

                .alm-stair-row.current-step .alm-step-bar {
                    background: rgba(56, 189, 248, 0.45);
                    border-color: #38bdf8;
                    box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
                }

                .alm-stair-row.next-unlock .alm-step-bar {
                    background: rgba(234, 179, 8, 0.18);
                    border: 1.5px dashed #eab308;
                }

                .alm-stair-row.locked .alm-step-bar {
                    background: rgba(30, 41, 59, 0.45);
                    border-color: rgba(148, 163, 184, 0.25);
                }

                /* Центральний номер сходинки + синій бейдж множника як на скріншоті 1 */
                .alm-step-center-info {
                    position: absolute;
                    left: 51%;
                    transform: translateX(-35%);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    z-index: 3;
                    pointer-events: none;
                }

                .alm-step-num-center {
                    font-size: 0.92rem;
                    font-weight: 800;
                    color: #f8fafc;
                    min-width: 24px;
                    text-align: right;
                }

                .alm-stair-row.locked .alm-step-num-center {
                    color: #64748b;
                }

                .alm-step-mult-pill {
                    background: rgba(29, 78, 216, 0.28);
                    border: 1px solid #2563eb;
                    color: #38bdf8;
                    border-radius: 8px;
                    padding: 2px 9px;
                    font-size: 0.78rem;
                    font-weight: 800;
                    white-space: nowrap;
                }

                .alm-stair-row.locked .alm-step-mult-pill {
                    background: rgba(30, 41, 59, 0.55);
                    border-color: rgba(148, 163, 184, 0.2);
                    color: #64748b;
                }

                /* Права кнопка Кімната на сходинках 10, 20, ..., 90 */
                .alm-step-right-slot {
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 4;
                }

                .alm-room-pill-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    padding: 5px 12px;
                    font-size: 0.78rem;
                    font-weight: 900;
                    white-space: nowrap;
                    cursor: pointer;
                }

                .alm-room-pill-btn.unlocked {
                    background: #22c55e;
                    color: #052e16;
                    border: none;
                    box-shadow: 0 2px 8px rgba(34, 197, 94, 0.35);
                }

                .alm-room-pill-btn.unlocked:hover {
                    background: #4ade80;
                }

                .alm-room-pill-btn.locked {
                    background: rgba(30, 41, 59, 0.7);
                    color: #64748b;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    cursor: default;
                }

                .alm-unlock-tag {
                    font-size: 0.72rem;
                    font-weight: 800;
                    color: #facc15;
                    background: rgba(250, 204, 21, 0.14);
                    border: 1px solid rgba(250, 204, 21, 0.4);
                    padding: 3px 8px;
                    border-radius: 7px;
                }

                /* Персонаж на сходинці */
                .alm-character {
                    position: absolute;
                    width: 28px;
                    height: 28px;
                    transform: translateX(-50%);
                    z-index: 15;
                    pointer-events: none;
                }

                .alm-char-avatar {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: radial-gradient(circle at 35% 35%, #e0f2fe, #38bdf8 68%, #0284c7);
                    border: 2px solid #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.85rem;
                    box-shadow: 0 0 14px rgba(56, 189, 248, 0.95);
                }

                .alm-character.is-moving .alm-char-avatar {
                    animation: almCharBounce 0.32s infinite alternate ease-in-out;
                }

                @keyframes almCharBounce {
                    0% { transform: translateY(0) scale(1); }
                    100% { transform: translateY(-4px) scale(1.06); }
                }

                .alm-char-status {
                    position: absolute;
                    bottom: 31px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(15, 23, 42, 0.95);
                    border: 1px solid #38bdf8;
                    color: #e0f2fe;
                    font-size: 0.65rem;
                    font-weight: 800;
                    padding: 1px 6px;
                    border-radius: 6px;
                    white-space: nowrap;
                }

                /* Нижня панель покупки сходинки як на скріншоті 1 */
                .alm-bottom-unlock-card {
                    background: #131726;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 12px 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .alm-unlock-summary {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.88rem;
                    color: #94a3b8;
                }

                .alm-unlock-summary b {
                    color: #f8fafc;
                    font-weight: 900;
                }

                .alm-dot-sep {
                    color: #475569;
                }

                .alm-unlock-gold-btn {
                    background: #facc15;
                    border: none;
                    color: #0f172a;
                    padding: 11px 18px;
                    border-radius: 12px;
                    font-weight: 900;
                    font-size: 0.88rem;
                    cursor: pointer;
                    transition: transform 0.1s, background 0.15s;
                    white-space: nowrap;
                }

                .alm-unlock-gold-btn:hover:not(:disabled) {
                    background: #fde047;
                    transform: translateY(-1px);
                }

                .alm-unlock-gold-btn:disabled {
                    background: #1e293b;
                    color: #64748b;
                    cursor: not-allowed;
                }

                /* ==================== ВКЛАДКА КІМНАТИ ==================== */
                .alm-room-outer-panel {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                /* Сітка 3x3 перемикачів кімнат як на скріншотах 2-6 */
                .alm-room-selector {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 8px;
                    width: 100%;
                }

                .alm-room-pill {
                    background: #111522;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: #e2e8f0;
                    padding: 9px 6px;
                    border-radius: 10px;
                    font-size: 0.82rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.15s;
                    text-align: center;
                }

                .alm-room-pill:hover {
                    background: #171d2e;
                }

                .alm-room-pill.active {
                    background: rgba(56, 189, 248, 0.14);
                    border: 1.5px solid #38bdf8;
                    color: #38bdf8;
                    box-shadow: 0 0 12px rgba(56, 189, 248, 0.2);
                }

                .alm-room-pill.locked:not(.active) {
                    color: #64748b;
                }

                .alm-room-alert {
                    border-radius: 12px;
                    padding: 10px 12px;
                    font-size: 0.82rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .alm-room-alert.locked {
                    background: rgba(239, 68, 68, 0.12);
                    border: 1px solid rgba(239, 68, 68, 0.35);
                    color: #fecaca;
                }

                .alm-room-alert.warning {
                    background: rgba(250, 204, 21, 0.11);
                    border: 1px solid rgba(250, 204, 21, 0.38);
                    color: #fef08a;
                }

                .alm-mini-go-btn {
                    background: rgba(56, 189, 248, 0.16);
                    border: 1px solid #38bdf8;
                    color: #38bdf8;
                    padding: 5px 11px;
                    border-radius: 8px;
                    font-weight: 800;
                    font-size: 0.76rem;
                    cursor: pointer;
                    white-space: nowrap;
                }

                /* Центровані кімнати (10, 40, 60, 80, 90) як на скріншотах 2 та 5 */
                .alm-centered-room-section {
                    background: #111522;
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 16px;
                    padding: 18px 14px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 14px;
                }

                .alm-section-heading {
                    font-size: 0.86rem;
                    font-weight: 900;
                    color: #94a3b8;
                    letter-spacing: 0.6px;
                    text-align: center;
                    text-transform: uppercase;
                }

                .alm-two-hero-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                    width: 100%;
                }

                .alm-three-hero-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                    width: 100%;
                }

                @media (max-width: 520px) {
                    .alm-two-hero-grid,
                    .alm-three-hero-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .alm-hero-upg-card {
                    width: 100%;
                    max-width: 340px;
                    margin: 0 auto;
                    border-radius: 18px;
                    padding: 22px 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    text-align: center;
                    cursor: pointer;
                    transition: transform 0.12s, box-shadow 0.2s, opacity 0.2s;
                }

                .alm-two-hero-grid .alm-hero-upg-card,
                .alm-three-hero-grid .alm-hero-upg-card {
                    max-width: none;
                }

                .alm-hero-upg-card:hover:not(:disabled) {
                    transform: translateY(-2px);
                }

                .alm-hero-upg-card:active:not(:disabled) {
                    transform: scale(0.98);
                }

                .alm-hero-upg-card:disabled {
                    opacity: 0.55;
                    cursor: not-allowed;
                }

                .alm-hero-upg-card.emerald-theme {
                    background: linear-gradient(180deg, #0d2622 0%, #091c19 100%);
                    border: 1.5px solid #16a34a;
                    box-shadow: 0 6px 20px rgba(22, 163, 74, 0.16);
                }

                .alm-hero-upg-card.purple-theme {
                    background: linear-gradient(180deg, #1c1133 0%, #130c24 100%);
                    border: 1.5px solid #7e22ce;
                    box-shadow: 0 6px 20px rgba(126, 34, 206, 0.18);
                }

                .alm-hero-upg-card.gold-theme {
                    background: linear-gradient(180deg, #241b0d 0%, #181209 100%);
                    border: 1.5px solid #d97706;
                    box-shadow: 0 6px 20px rgba(217, 119, 6, 0.16);
                }

                .alm-hero-upg-card.snow-theme {
                    background: linear-gradient(180deg, #0d2137 0%, #091626 100%);
                    border: 1.5px solid #0284c7;
                    box-shadow: 0 6px 20px rgba(2, 132, 199, 0.18);
                }

                .alm-hero-upg-card.crimson-theme {
                    background: linear-gradient(180deg, #291118 0%, #1a0b10 100%);
                    border: 1.5px solid #dc2626;
                    box-shadow: 0 6px 20px rgba(220, 38, 38, 0.18);
                }

                .alm-hero-upg-title {
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: #cbd5e1;
                    letter-spacing: 0.4px;
                }

                .alm-hero-upg-badge {
                    font-size: 0.78rem;
                    font-weight: 800;
                    padding: 3px 14px;
                    border-radius: 999px;
                }

                .alm-hero-upg-badge.emerald {
                    background: rgba(34, 197, 94, 0.15);
                    border: 1px solid #22c55e;
                    color: #4ade80;
                }

                .alm-hero-upg-badge.purple {
                    background: rgba(168, 85, 247, 0.15);
                    border: 1px solid #a855f7;
                    color: #c084fc;
                }

                .alm-hero-upg-badge.gold {
                    background: rgba(250, 204, 21, 0.15);
                    border: 1px solid #eab308;
                    color: #facc15;
                }

                .alm-hero-upg-badge.snow {
                    background: rgba(56, 189, 248, 0.15);
                    border: 1px solid #38bdf8;
                    color: #7dd3fc;
                }

                .alm-hero-upg-badge.crimson {
                    background: rgba(248, 113, 113, 0.15);
                    border: 1px solid #ef4444;
                    color: #fca5a5;
                }

                .alm-hero-upg-compare {
                    font-size: 1.55rem;
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1.15;
                }

                .alm-hero-upg-subtext {
                    font-size: 0.75rem;
                    font-weight: 700;
                }

                .alm-hero-upg-subtext.purple { color: #a855f7; }
                .alm-hero-upg-subtext.crimson { color: #f87171; }

                .alm-hero-upg-price {
                    font-size: 0.98rem;
                    font-weight: 900;
                    color: #facc15;
                    margin-top: 2px;
                }

                /* Двоколонкова сітка для кімнат 20, 30, 50, 70 як на скріншотах 3, 4, 6 */
                .alm-room-split-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 1fr;
                    gap: 12px;
                    width: 100%;
                }

                @media (max-width: 560px) {
                    .alm-room-split-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .alm-room-left-col,
                .alm-room-right-col {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .alm-zone-topbar {
                    background: #101524;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 12px;
                    padding: 9px 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 6px;
                    font-size: 0.78rem;
                    color: #e2e8f0;
                    flex-wrap: wrap;
                }

                .alm-zone-topbar.snow-border { border-color: rgba(56, 189, 248, 0.4); }
                .alm-zone-topbar.trash-border { border-color: rgba(245, 158, 11, 0.45); }
                .alm-zone-topbar.feather-border { border-color: rgba(249, 115, 22, 0.45); }
                .alm-zone-topbar.emerald-border { border-color: rgba(34, 197, 94, 0.45); }

                .alm-zone-bottom-pill {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(11, 16, 28, 0.88);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    color: #e2e8f0;
                    padding: 5px 14px;
                    border-radius: 999px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    white-space: nowrap;
                    max-width: 92%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    pointer-events: none;
                    z-index: 6;
                }

                .alm-zone-bottom-pill.snow-pill { border-color: rgba(56, 189, 248, 0.4); color: #bae6fd; }
                .alm-zone-bottom-pill.trash-pill { border-color: rgba(245, 158, 11, 0.45); color: #fde68a; }
                .alm-zone-bottom-pill.emerald-pill { border-color: rgba(34, 197, 94, 0.45); color: #bbf7d0; }

                .alm-rarity-legend {
                    text-align: center;
                    font-size: 0.74rem;
                    color: #94a3b8;
                    background: #101524;
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 10px;
                    padding: 6px 10px;
                }

                /* Зона сніжинок (20 сходинка) */
                .alm-snow-zone {
                    position: relative;
                    width: 100%;
                    height: 290px;
                    border-radius: 16px;
                    background: radial-gradient(circle at 50% 45%, #0c2340 0%, #081222 100%);
                    border: 1px solid rgba(56, 189, 248, 0.4);
                    overflow: hidden;
                    touch-action: none;
                    user-select: none;
                }

                .alm-snow-zone.locked {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0b0f1a;
                    border-color: rgba(255, 255, 255, 0.08);
                }

                .alm-snow-zone.not-on-step .alm-snowflake-item {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .alm-snow-locked-msg {
                    color: #64748b;
                    font-weight: 800;
                    font-size: 0.9rem;
                }

                .alm-snowflake-item {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    font-size: 1.55rem;
                    cursor: pointer;
                    filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.9));
                    animation: almSnowFloat 2.4s infinite ease-in-out;
                    z-index: 5;
                    padding: 5px;
                }

                .alm-snowflake-item.gold {
                    filter: drop-shadow(0 0 11px rgba(250, 204, 21, 1)) sepia(1) saturate(6) hue-rotate(5deg);
                    transform: translate(-50%, -50%) scale(1.15);
                }

                .alm-snowflake-item.emerald {
                    filter: drop-shadow(0 0 13px rgba(16, 185, 129, 1)) sepia(1) saturate(7) hue-rotate(95deg);
                    transform: translate(-50%, -50%) scale(1.24);
                }

                @keyframes almSnowFloat {
                    0%, 100% { margin-top: 0px; }
                    50% { margin-top: -5px; }
                }

                .alm-snow-pop {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    color: #38bdf8;
                    font-weight: 900;
                    font-size: 0.85rem;
                    pointer-events: none;
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
                    animation: almSnowPopUp 0.65s forwards ease-out;
                    z-index: 20;
                    white-space: nowrap;
                }

                .alm-snow-pop.gold { color: #facc15; }
                .alm-snow-pop.emerald { color: #34d399; font-size: 0.96rem; }

                @keyframes almSnowPopUp {
                    0% { opacity: 1; transform: translate(-50%, -50%) scale(0.9); }
                    100% { opacity: 0; transform: translate(-50%, -150%) scale(1.12); }
                }

                /* Зона сміття (30 сходинка) з центральним колом СЮДИ як на скріншоті 4 */
                .alm-trash-zone {
                    position: relative;
                    width: 100%;
                    height: 290px;
                    border-radius: 16px;
                    background: radial-gradient(circle at 50% 48%, #211c17 0%, #0d0f17 100%);
                    border: 1px solid rgba(245, 158, 11, 0.42);
                    overflow: hidden;
                    touch-action: none;
                    user-select: none;
                }

                .alm-trash-zone.locked {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0b0f1a;
                    border-color: rgba(255, 255, 255, 0.08);
                }

                .alm-trash-zone.not-on-step .alm-trash-item {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                .alm-trash-center-circle {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 82px;
                    height: 82px;
                    border-radius: 50%;
                    background: rgba(245, 158, 11, 0.08);
                    border: 2px dashed #f59e0b;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2px;
                    z-index: 2;
                    transition: transform 0.15s, background 0.15s, box-shadow 0.15s;
                    pointer-events: none;
                }

                .alm-trash-center-circle.bin-highlight {
                    transform: translate(-50%, -50%) scale(1.14);
                    background: rgba(34, 197, 94, 0.24);
                    border-color: #4ade80;
                    box-shadow: 0 0 22px rgba(74, 222, 128, 0.55);
                }

                .alm-trash-center-icon {
                    font-size: 1.45rem;
                    line-height: 1;
                }

                .alm-trash-center-label {
                    font-size: 0.68rem;
                    font-weight: 900;
                    color: #fbbf24;
                    letter-spacing: 0.5px;
                }

                .alm-trash-item {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    font-size: 1.65rem;
                    cursor: grab;
                    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.85));
                    z-index: 6;
                    padding: 5px;
                    touch-action: none;
                }

                .alm-trash-item.gold {
                    filter: drop-shadow(0 0 11px rgba(250, 204, 21, 1));
                    transform: translate(-50%, -50%) scale(1.14);
                }

                .alm-trash-item.emerald {
                    filter: drop-shadow(0 0 13px rgba(16, 185, 129, 1));
                    transform: translate(-50%, -50%) scale(1.22);
                }

                .alm-trash-item.dragging {
                    cursor: grabbing;
                    transform: translate(-50%, -50%) scale(1.25);
                    z-index: 25;
                }

                .alm-trash-pop {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    color: #facc15;
                    font-weight: 900;
                    font-size: 0.88rem;
                    pointer-events: none;
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
                    animation: almSnowPopUp 0.7s forwards ease-out;
                    z-index: 20;
                    white-space: nowrap;
                }

                .alm-trash-pop.emerald { color: #34d399; font-size: 0.96rem; }

                /* Зона арени Бойової Квочки Рябої (50 сходинка) */
                .alm-chicken-arena {
                    position: relative;
                    width: 100%;
                    height: 290px;
                    border-radius: 16px;
                    background: radial-gradient(circle at 50% 45%, #2a1810 0%, #0d1018 100%);
                    border: 1px solid rgba(249, 115, 22, 0.45);
                    padding: 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    overflow: hidden;
                    user-select: none;
                }

                .alm-chicken-arena.locked {
                    justify-content: center;
                    background: #0b0f1a;
                    border-color: rgba(255, 255, 255, 0.08);
                }

                .alm-mob-title-row {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 6px;
                    font-size: 0.8rem;
                }

                .alm-mob-name {
                    font-weight: 900;
                    color: #fdba74;
                }

                .alm-mob-reward-tag {
                    background: rgba(249, 115, 22, 0.16);
                    border: 1px solid rgba(249, 115, 22, 0.45);
                    color: #fed7aa;
                    padding: 2px 8px;
                    border-radius: 8px;
                    font-weight: 800;
                    font-size: 0.74rem;
                }

                .alm-chicken-hp-wrap {
                    position: relative;
                    width: 100%;
                    height: 22px;
                    background: rgba(0, 0, 0, 0.55);
                    border: 1.5px solid #ef4444;
                    border-radius: 999px;
                    overflow: hidden;
                }

                .alm-chicken-hp-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #dc2626, #f97316);
                    transition: width 0.1s ease-out;
                }

                .alm-chicken-hp-text {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.76rem;
                    font-weight: 900;
                    color: #ffffff;
                    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
                }

                .alm-chicken-mob-btn {
                    width: 155px;
                    height: 155px;
                    border-radius: 50%;
                    background: radial-gradient(circle at 35% 30%, #431407, #1c1014);
                    border: 2.5px solid #f97316;
                    box-shadow: 0 0 24px rgba(249, 115, 22, 0.35);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    cursor: pointer;
                    transition: transform 0.08s;
                    margin: auto 0;
                }

                .alm-chicken-mob-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .alm-chicken-mob-btn.hit {
                    animation: almChickenHit 0.18s ease-out;
                }

                @keyframes almChickenHit {
                    0% { transform: scale(1); }
                    45% { transform: scale(0.9) rotate(-4deg); }
                    100% { transform: scale(1) rotate(0deg); }
                }

                .alm-chicken-emoji {
                    font-size: 3.6rem;
                    line-height: 1;
                }

                .alm-chicken-hit-hint {
                    font-size: 0.68rem;
                    font-weight: 900;
                    color: #ffedd5;
                    background: rgba(234, 88, 12, 0.45);
                    padding: 2px 8px;
                    border-radius: 8px;
                }

                .alm-chicken-respawn-box {
                    margin: auto 0;
                    text-align: center;
                }

                .alm-respawn-countdown {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #38bdf8;
                    margin-top: 4px;
                }

                .alm-dmg-pop {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    color: #f87171;
                    font-weight: 900;
                    font-size: 1rem;
                    pointer-events: none;
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.95);
                    animation: almSnowPopUp 0.6s forwards ease-out;
                    z-index: 25;
                }

                .alm-feather-loot-pop {
                    position: absolute;
                    left: 50%;
                    top: 45%;
                    transform: translate(-50%, -50%);
                    color: #fdba74;
                    font-weight: 900;
                    font-size: 1.15rem;
                    pointer-events: none;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95);
                    animation: almSnowPopUp 1.05s forwards ease-out;
                    z-index: 30;
                }

                /* Зона об'єднання овочів/фруктів (70 сходинка) як на скріншоті 6 */
                .alm-merge-zone {
                    position: relative;
                    width: 100%;
                    height: 290px;
                    border-radius: 16px;
                    background: radial-gradient(circle at 50% 45%, #0c261c 0%, #081210 100%);
                    border: 1px solid rgba(34, 197, 94, 0.45);
                    overflow: hidden;
                    touch-action: none;
                    user-select: none;
                }

                .alm-merge-zone.locked {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0b0f1a;
                    border-color: rgba(255, 255, 255, 0.08);
                }

                .alm-merge-zone.not-on-step .alm-merge-item {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                .alm-merge-item {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(13, 32, 25, 0.92);
                    border: 1.5px solid #22c55e;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.55);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: grab;
                    z-index: 6;
                    touch-action: none;
                    transition: transform 0.1s, border-color 0.12s, box-shadow 0.12s;
                }

                .alm-merge-item.dragging {
                    cursor: grabbing;
                    transform: translate(-50%, -50%) scale(1.18);
                    z-index: 25;
                    border-color: #facc15;
                }

                .alm-merge-item.merge-target-highlight {
                    border-color: #facc15;
                    box-shadow: 0 0 18px rgba(250, 204, 21, 0.85);
                    transform: translate(-50%, -50%) scale(1.14);
                }

                .alm-merge-emoji {
                    font-size: 1.45rem;
                    line-height: 1;
                }

                .alm-merge-lvl-badge {
                    position: absolute;
                    right: -2px;
                    bottom: -2px;
                    width: 17px;
                    height: 17px;
                    border-radius: 50%;
                    background: #16a34a;
                    border: 1px solid #86efac;
                    color: #ffffff;
                    font-size: 0.62rem;
                    font-weight: 900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .alm-merge-pop {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    color: #4ade80;
                    font-weight: 900;
                    font-size: 0.92rem;
                    pointer-events: none;
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
                    animation: almSnowPopUp 0.8s forwards ease-out;
                    z-index: 20;
                    white-space: nowrap;
                }

                /* Сніжна буря (80 сходинка) */
                .alm-storm-hero-box {
                    width: 100%;
                    background: linear-gradient(180deg, #0e2238 0%, #0b1626 100%);
                    border: 1.5px solid #0284c7;
                    border-radius: 14px;
                    padding: 14px;
                    text-align: center;
                }

                .alm-storm-launch-btn {
                    background: linear-gradient(180deg, #38bdf8, #0284c7);
                    border: none;
                    color: #082f49;
                    padding: 11px 18px;
                    border-radius: 11px;
                    font-weight: 900;
                    font-size: 0.88rem;
                    cursor: pointer;
                    width: 100%;
                    max-width: 340px;
                }

                .alm-storm-launch-btn:disabled {
                    background: #1e293b;
                    color: #64748b;
                    cursor: not-allowed;
                }

                /* Права колонка прокачок та міні-топів у кімнатах 20, 30, 50, 70 */
                .alm-side-panel-box {
                    background: #111625;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                    padding: 11px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .alm-side-panel-title {
                    font-size: 0.78rem;
                    font-weight: 900;
                    color: #cbd5e1;
                    letter-spacing: 0.4px;
                }

                .alm-compact-upg-list {
                    display: flex;
                    flex-direction: column;
                    gap: 7px;
                }

                .alm-compact-upg-card {
                    width: 100%;
                    background: #151c2e;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 11px;
                    padding: 9px 11px;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    cursor: pointer;
                    text-align: left;
                    transition: transform 0.1s, border-color 0.15s, opacity 0.15s;
                }

                .alm-compact-upg-card:hover:not(:disabled) {
                    transform: translateY(-1px);
                }

                .alm-compact-upg-card:disabled {
                    opacity: 0.55;
                    cursor: not-allowed;
                }

                .alm-compact-upg-card.snow-card { border-color: rgba(56, 189, 248, 0.28); }
                .alm-compact-upg-card.trash-card { border-color: rgba(245, 158, 11, 0.28); }
                .alm-compact-upg-card.feather-card { border-color: rgba(249, 115, 22, 0.28); }
                .alm-compact-upg-card.emerald-card { border-color: rgba(34, 197, 94, 0.28); }

                .alm-c-upg-row {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                }

                .alm-c-upg-name {
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: #f8fafc;
                }

                .alm-c-upg-lvl {
                    font-size: 0.72rem;
                    font-weight: 800;
                    padding: 2px 8px;
                    border-radius: 999px;
                    white-space: nowrap;
                }

                .alm-c-upg-lvl.snow-lvl { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }
                .alm-c-upg-lvl.trash-lvl { background: rgba(245, 158, 11, 0.15); color: #facc15; }
                .alm-c-upg-lvl.feather-lvl { background: rgba(249, 115, 22, 0.15); color: #fdba74; }
                .alm-c-upg-lvl.emerald-lvl { background: rgba(34, 197, 94, 0.15); color: #4ade80; }

                .alm-c-upg-diff {
                    font-size: 0.78rem;
                    font-weight: 800;
                    color: #4ade80;
                }

                .alm-c-upg-cost {
                    font-size: 0.78rem;
                    font-weight: 900;
                    white-space: nowrap;
                }

                .alm-c-upg-cost.snow-cost { color: #38bdf8; }
                .alm-c-upg-cost.trash-cost { color: #facc15; }
                .alm-c-upg-cost.feather-cost { color: #fdba74; }
                .alm-c-upg-cost.emerald-cost { color: #4ade80; }

                /* Міні-лідерборди всередині кімнат */
                .alm-snow-lb-list {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    max-height: 155px;
                    overflow-y: auto;
                }

                .alm-snow-lb-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 6px;
                    background: #151c2e;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 8px;
                    padding: 6px 9px;
                    font-size: 0.78rem;
                }

                .alm-snow-lb-row.is-player {
                    border-color: #38bdf8;
                    background: rgba(56, 189, 248, 0.1);
                }

                .alm-snow-lb-rank {
                    font-weight: 900;
                    color: #facc15;
                    min-width: 24px;
                }

                .alm-snow-lb-name {
                    flex-grow: 1;
                    font-weight: 700;
                    color: #f1f5f9;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .alm-snow-lb-val {
                    font-weight: 900;
                    color: #38bdf8;
                    white-space: nowrap;
                }

                /* ==================== ВКЛАДКА МНОЖНИКИ (Скріншот 7) ==================== */
                .alm-mult-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                    width: 100%;
                }

                .alm-mult-row-card {
                    background: #131726;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                    padding: 13px 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                }

                .alm-mult-row-left {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .alm-mult-row-title {
                    font-size: 0.88rem;
                    font-weight: 800;
                    color: #f8fafc;
                }

                .alm-mult-row-sub {
                    font-size: 0.76rem;
                    color: #94a3b8;
                }

                .alm-mult-row-val {
                    font-size: 1.25rem;
                    font-weight: 900;
                    white-space: nowrap;
                }

                .alm-mult-row-val.cyan { color: #38bdf8; }
                .alm-mult-row-val.green { color: #4ade80; }
                .alm-mult-row-val.gold { color: #facc15; }

                .alm-mult-total-card {
                    background: linear-gradient(180deg, #1b1a24 0%, #131726 100%);
                    border: 1.5px solid #eab308;
                    border-radius: 16px;
                    padding: 18px 14px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                }

                .alm-mult-formula {
                    font-size: 0.72rem;
                    font-weight: 800;
                    color: #cbd5e1;
                    letter-spacing: 0.3px;
                }

                .alm-mult-total-big {
                    font-size: 2rem;
                    font-weight: 900;
                    color: #facc15;
                    line-height: 1.1;
                }

                .alm-mult-rate-green {
                    font-size: 0.92rem;
                    font-weight: 900;
                    color: #4ade80;
                }

                .alm-mult-highest-line {
                    font-size: 0.76rem;
                    color: #94a3b8;
                    margin-top: 2px;
                }

                /* ==================== ВКЛАДКА ТОП (Скріншот 8) ==================== */
                .alm-lb-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    width: 100%;
                }

                .alm-lb-tabs {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 8px;
                    width: 100%;
                }

                .alm-lb-tab-btn {
                    background: #131726;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: #e2e8f0;
                    padding: 10px 6px;
                    border-radius: 11px;
                    font-size: 0.78rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.15s;
                    text-align: center;
                }

                .alm-lb-tab-btn.active {
                    background: #facc15;
                    border-color: #facc15;
                    color: #0f172a;
                    font-weight: 900;
                }

                .alm-leaderboard-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    max-height: 410px;
                    overflow-y: auto;
                }

                .alm-lb-row {
                    background: #131726;
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 12px;
                    padding: 13px 15px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                }

                .alm-lb-row.is-player {
                    border: 1.5px solid #eab308;
                    background: linear-gradient(135deg, #1b1a29, #131726);
                }

                .alm-lb-rank {
                    font-size: 1rem;
                    font-weight: 900;
                    color: #facc15;
                    min-width: 34px;
                }

                .alm-lb-name {
                    flex-grow: 1;
                    font-size: 0.9rem;
                    font-weight: 800;
                    color: #f8fafc;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .alm-lb-val {
                    font-size: 0.88rem;
                    font-weight: 900;
                    color: #4ade80;
                    white-space: nowrap;
                }
            `;
            document.head.appendChild(style);
        }

        if (typeof window.saveGame === 'function' && !window.saveGame._almWrapped) {
            const origSave = window.saveGame;
            window.saveGame = function () {
                const s = initAuraLarpMonsterState();
                s.wasActive = isAuraLarpModeActive;
                s.savedSubTab = activeLarpSubTab;
                s.savedRoomStep = activeRoomStep;
                s.savedMergeItems = activeMergeItems.map(it => ({
                    xPct: it.xPct,
                    yPct: it.yPct,
                    level: it.level
                }));
                if (isGlobalTimeVerified) {
                    s.lastGlobalTime = Date.now() + globalTimeOffsetMs;
                }
                attachStateToRoot(s);
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
                } catch (e) {}

                return origSave.apply(this, arguments);
            };
            window.saveGame._almWrapped = true;
        }
    }

    // ------------------------------------------
    // ЕКСПОРТ ФУНКЦІЙ У WINDOW ТА ІНІЦІАЛІЗАЦІЯ
    // ------------------------------------------
    window.enterAuraLarpMonster = enterAuraLarpMonster;
    window.exitAuraLarpMonster = exitAuraLarpMonster;
    window.switchAuraLarpSubTab = switchLarpSubTab;
    window.switchAuraLarpLeaderboardType = switchLeaderboardType;
    window.moveAuraLarpToStep = moveToStep;
    window.unlockNextAuraLarpStep = unlockNextStep;
    window.openAuraLarpRoomAtStep = openRoomAtStep;

    // Кімната 10
    window.buyAuraLarpRoomUpgrade = buyRoomMultiplierUpgrade;

    // Кімната 20 (Сніжинки)
    window.buyAuraLarpSnowMultUpgrade = buySnowMultUpgrade;
    window.buyAuraLarpSnowSpeedUpgrade = buySnowSpeedUpgrade;
    window.buyAuraLarpSnowLarpUpgrade = buySnowLarpUpgrade;

    // Кімната 30 (Сміття)
    window.buyAuraLarpTrashMultUpgrade = buyTrashMultUpgrade;
    window.buyAuraLarpTrashSpeedUpgrade = buyTrashSpeedUpgrade;
    window.buyAuraLarpTrashLarpUpgrade = buyTrashLarpUpgrade;

    // Кімната 40 (Швидкість та Офлайн)
    window.buyAuraLarpStepSpeedUpgrade = buyStepSpeedUpgrade;
    window.buyAuraLarpOfflineUpgrade = buyOfflineLarpUpgrade;

    // Кімната 50 (Курочка та Пір'я)
    window.attackAuraLarpChicken = attackChickenMob;
    window.buyAuraLarpFeatherMultUpgrade = buyFeatherMultUpgrade;
    window.buyAuraLarpFeatherLarpUpgrade = buyFeatherLarpUpgrade;

    // Кімната 60 (Шанси золотих та смарагдових сніжинок/сміття)
    window.buyAuraLarpGoldSnowUpgrade = buyGoldSnowUpgrade;
    window.buyAuraLarpEmeraldSnowUpgrade = buyEmeraldSnowUpgrade;
    window.buyAuraLarpGoldTrashUpgrade = buyGoldTrashUpgrade;
    window.buyAuraLarpEmeraldTrashUpgrade = buyEmeraldTrashUpgrade;

    // Кімната 70 (Вітаміни та Овочі)
    window.buyAuraLarpVitaminMultUpgrade = buyVitaminMultUpgrade;
    window.buyAuraLarpMergeLv2Upgrade = buyMergeLv2Upgrade;
    window.buyAuraLarpMergeLarpUpgrade = buyMergeLarpUpgrade;
    window.sellAuraLarpMergeItem = sellHighestOrRandomMergeItem;

    // Кімната 80 (Сніжна буря)
    window.activateAuraLarpSnowstorm = activateSnowstorm;
    window.buyAuraLarpStormDurationUpgrade = buyStormDurationUpgrade;
    window.buyAuraLarpStormCooldownUpgrade = buyStormCooldownUpgrade;
    window.buyAuraLarpStormSpeedUpgrade = buyStormSpeedUpgrade;

    // Кімната 90 (Прокачки мобів)
    window.buyAuraLarpMobDamageUpgrade = buyMobDamageUpgrade;
    window.buyAuraLarpMobRespawnUpgrade = buyMobRespawnUpgrade;

    window.verifyAuraLarpGlobalTime = verifyGlobalTimeAndApplyOfflineProgress;
    window.dismissAuraLarpOfflineReport = dismissOfflineReport;
    window.handleResetAuraLarpClick = handleResetAuraLarpClick;
    window.resetAuraLarpMonsterProgress = resetAuraLarpMonsterProgress;

    // Глобальна обробка руху та відпускання курсора / пальця для сніжинок, сміття та овочів
    window.addEventListener('pointermove', (e) => {
        if (draggingTrashId !== null) {
            e.preventDefault();
            moveDraggingTrash(draggingTrashId, e.clientX, e.clientY);
        }
        if (draggingMergeId !== null) {
            e.preventDefault();
            moveDraggingMerge(draggingMergeId, e.clientX, e.clientY);
        }
    });

    function finishAllActivePointerActions(clientX, clientY) {
        isPointerSwipingSnow = false;

        if (draggingTrashId !== null) {
            const finishedTrashId = draggingTrashId;
            draggingTrashId = null;
            const trashZone = document.getElementById('alm-trash-zone');
            if (trashZone) {
                const el = trashZone.querySelector(`.alm-trash-item[data-trash-id="${finishedTrashId}"]`);
                if (el) el.classList.remove('dragging');
            }
            checkTrashDropIntoCenter(finishedTrashId, clientX, clientY);
        }

        if (draggingMergeId !== null) {
            const finishedMergeId = draggingMergeId;
            draggingMergeId = null;
            const mergeZone = document.getElementById('alm-merge-zone');
            if (mergeZone) {
                const el = mergeZone.querySelector(`.alm-merge-item[data-merge-id="${finishedMergeId}"]`);
                if (el) el.classList.remove('dragging');
            }
            tryCombineDraggedMergeItem(finishedMergeId);
        }
    }

    window.addEventListener('pointerup', (e) => {
        finishAllActivePointerActions(e.clientX, e.clientY);
    });
    window.addEventListener('pointercancel', (e) => {
        finishAllActivePointerActions(e.clientX, e.clientY);
    });

    // Перевірка відновлення активної сесії після завантаження головної гри
    let isModuleBooted = false;

    function bootAuraLarpMonsterModule() {
        if (isModuleBooted) return;
        isModuleBooted = true;

        setupHooksAndStyles();
        initAuraLarpMonsterState();
        injectAuraLarpNavTab();
        verifyGlobalTimeAndApplyOfflineProgress();

        // Фолбек-перевірка відновлення сесії та наявності вкладки в навігації
        let bootChecks = 0;
        const bootTimer = setInterval(() => {
            bootChecks++;
            setupHooksAndStyles();
            const s = initAuraLarpMonsterState();
            injectAuraLarpNavTab();

            if (isMainGameReady() && s.wasActive && !isAuraLarpModeActive) {
                activeLarpSubTab = s.savedSubTab || 'stairs';
                activeRoomStep = s.savedRoomStep || 10;
                enterAuraLarpMonster();
                clearInterval(bootTimer);
            } else if (bootChecks >= 50) {
                clearInterval(bootTimer);
            }
        }, 200);

        lastLarpTickTime = Date.now();
        setInterval(() => {
            const now = Date.now();
            const dt = Math.min(1.0, (now - lastLarpTickTime) / 1000);
            lastLarpTickTime = now;

            injectAuraLarpNavTab();
            tickAuraLarpLogic(dt);
            syncLarpLeaderboard(false);
        }, 100);

        setInterval(() => {
            if (isAuraLarpModeActive) {
                if (activeLarpSubTab === 'leaderboard') {
                    renderLarpLeaderboardList();
                } else if (activeLarpSubTab === 'room') {
                    if (activeRoomStep === 20) {
                        renderSnowLeaderboardList();
                    } else if (activeRoomStep === 30) {
                        renderTrashLeaderboardList();
                    } else if (activeRoomStep === 50) {
                        renderFeatherLeaderboardList();
                    } else if (activeRoomStep === 70) {
                        renderVitaminLeaderboardList();
                    }
                }
            }
        }, 3000);
    }

    window.onMainGameLoaded = function () {
        bootAuraLarpMonsterModule();
        setupHooksAndStyles();
        const s = initAuraLarpMonsterState();
        injectAuraLarpNavTab();

        if (s.wasActive && !isAuraLarpModeActive) {
            activeLarpSubTab = s.savedSubTab || 'stairs';
            activeRoomStep = s.savedRoomStep || 10;
            enterAuraLarpMonster();
        } else {
            verifyGlobalTimeAndApplyOfflineProgress();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootAuraLarpMonsterModule);
    } else {
        bootAuraLarpMonsterModule();
    }
    window.addEventListener('load', bootAuraLarpMonsterModule);

    window.addEventListener('online', () => {
        if (!isGlobalTimeVerified) {
            verifyGlobalTimeAndApplyOfflineProgress();
        }
        syncLarpLeaderboard(true);
    });

    window.addEventListener('beforeunload', () => {
        persistAuraLarpState(false);
    });
})();
