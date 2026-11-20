// ==========================================
// ОКРЕМИЙ МОДУЛЬ: АУРА ЛАРП МОНСТЕР (v6)
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

    // Кімната 60 сходинки (Шанси золотих та смарагдових сніжинок / сміття)
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

    // Геометрія візуальних сходинок (адаптовано для 100 сходинок)
    const ROW_HEIGHT = 46;
    const STEP_BAR_WIDTH = 44;
    const STEP_BASE_LEFT = 6;
    const STEP_INDENT_PER_LEVEL = 0.82;

    let moduleState = null;
    let isAuraLarpModeActive = false;
    let activeLarpSubTab = 'stairs'; // 'stairs' | 'room' | 'multipliers' | 'leaderboard'
    let activeRoomStep = 10; // 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90
    let activeLeaderboardType = 'highestStep'; // 'highestStep' | 'larpPerSec' | 'totalLarp'

    let lastLarpTickTime = Date.now();
    let rafId = null;
    let lastLeaderboardSyncMs = 0;

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

    // Візуально показуємо ТІЛЬКИ цілі значення валют
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
        return Number(val.toFixed(3)).toString();
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

    // Кімната 60 прокачки (Шанси золотих та смарагдових предметів)
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

        if (!statusEl && !btnEl) return;

        const active = s.stormActiveEndMs && now < s.stormActiveEndMs;
        const onCooldown = s.stormCooldownEndMs && now < s.stormCooldownEndMs;

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
    // МЕХАНІКА СНІЖИНОК (20 СХОДИНКА + ШАНСИ З 60 + БУРЯ З 80)
    // ------------------------------------------
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
            yPct: Number((10 + Math.random() * 80).toFixed(2)),
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

    function createSnowflakeElement(flake) {
        const el = document.createElement('div');
        const rarity = flake.rarity || 'normal';
        el.className = 'alm-snowflake-item' + (rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : ''));
        el.dataset.flakeId = String(flake.id);
        el.style.left = `${flake.xPct}%`;
        el.style.top = `${flake.yPct}%`;
        el.textContent = '❄️';

        el.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isPointerSwipingSnow = true;
            collectSnowflakeById(flake.id);
        });

        el.addEventListener('pointerenter', () => {
            if (isPointerSwipingSnow) {
                collectSnowflakeById(flake.id);
            }
        });

        return el;
    }

    function collectSnowflakeById(id) {
        const idx = activeSnowflakes.findIndex(f => f.id === id);
        if (idx === -1) return;

        const flake = activeSnowflakes[idx];
        activeSnowflakes.splice(idx, 1);

        const s = initAuraLarpMonsterState();
        const rarity = flake.rarity || 'normal';
        const rarityMult = rarity === 'emerald' ? 10 : (rarity === 'gold' ? 3 : 1);
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
            const badge = rarity === 'emerald' ? ' 💎' : (rarity === 'gold' ? ' ✨' : '');
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
        if (!e.touches || e.touches.length === 0) return;
        const touch = e.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target && target.classList && target.classList.contains('alm-snowflake-item')) {
            const id = Number(target.dataset.flakeId);
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
    // МЕХАНІКА ПРИБИРАННЯ СМІТТЯ (30 СХОДИНКА + ШАНСИ З 60)
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
        const item = {
            id: nextTrashId++,
            xPct: Number((10 + Math.random() * 80).toFixed(2)),
            yPct: Number((12 + Math.random() * 54).toFixed(2)),
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

    function createTrashElement(item) {
        const el = document.createElement('div');
        const rarity = item.rarity || 'normal';
        el.className = 'alm-trash-item' + (rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : ''));
        el.dataset.trashId = String(item.id);
        el.style.left = `${item.xPct}%`;
        el.style.top = `${item.yPct}%`;
        el.textContent = item.icon;

        el.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            draggingTrashId = item.id;
            el.classList.add('dragging');
            try {
                el.setPointerCapture(e.pointerId);
            } catch (err) {}
        });

        el.addEventListener('pointermove', (e) => {
            if (draggingTrashId !== item.id) return;
            e.preventDefault();
            moveDraggingTrash(item.id, e.clientX, e.clientY);
        });

        function finishDrag(e) {
            if (draggingTrashId !== item.id) return;
            draggingTrashId = null;
            el.classList.remove('dragging');
            try {
                if (e && e.pointerId !== undefined) {
                    el.releasePointerCapture(e.pointerId);
                }
            } catch (err) {}
            checkTrashDropIntoBin(item.id, e ? e.clientX : null, e ? e.clientY : null);
        }

        el.addEventListener('pointerup', finishDrag);
        el.addEventListener('pointercancel', finishDrag);

        return el;
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
            const isOverBin = (
                clientX >= binRect.left - 14 &&
                clientX <= binRect.right + 14 &&
                clientY >= binRect.top - 14 &&
                clientY <= binRect.bottom + 14
            );
            binEl.classList.toggle('bin-highlight', isOverBin);
        }
    }

    function checkTrashDropIntoBin(id, clientX, clientY) {
        const binEl = document.getElementById('alm-trash-bin');
        const zoneEl = document.getElementById('alm-trash-zone');
        if (binEl) binEl.classList.remove('bin-highlight');
        if (!binEl || !zoneEl) return;

        const item = activeTrashItems.find(t => t.id === id);
        if (!item) return;

        const binRect = binEl.getBoundingClientRect();
        let droppedInBin = false;

        if (typeof clientX === 'number' && typeof clientY === 'number') {
            droppedInBin = (
                clientX >= binRect.left - 16 &&
                clientX <= binRect.right + 16 &&
                clientY >= binRect.top - 16 &&
                clientY <= binRect.bottom + 16
            );
        } else {
            droppedInBin = (item.xPct >= 34 && item.xPct <= 66 && item.yPct >= 70);
        }

        if (droppedInBin) {
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
        const rarityMult = rarity === 'emerald' ? 10 : (rarity === 'gold' ? 3 : 1);
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
            pop.style.top = '72%';
            const badge = rarity === 'emerald' ? ' 💎' : (rarity === 'gold' ? ' ✨' : '');
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
            yPct: Number((12 + Math.random() * 76).toFixed(2)),
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

    function createMergeElement(item) {
        const tier = getMergeTierInfo(item.level);
        const el = document.createElement('div');
        el.className = 'alm-merge-item';
        el.dataset.mergeId = String(item.id);
        el.style.left = `${item.xPct}%`;
        el.style.top = `${item.yPct}%`;
        el.innerHTML = `
            <span class="alm-merge-emoji">${tier.icon}</span>
            <span class="alm-merge-lvl-badge">Lv.${item.level}</span>
        `;

        el.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            draggingMergeId = item.id;
            el.classList.add('dragging');
            try {
                el.setPointerCapture(e.pointerId);
            } catch (err) {}
        });

        el.addEventListener('pointermove', (e) => {
            if (draggingMergeId !== item.id) return;
            e.preventDefault();
            moveDraggingMerge(item.id, e.clientX, e.clientY);
        });

        function finishMergeDrag(e) {
            if (draggingMergeId !== item.id) return;
            draggingMergeId = null;
            el.classList.remove('dragging');
            try {
                if (e && e.pointerId !== undefined) {
                    el.releasePointerCapture(e.pointerId);
                }
            } catch (err) {}
            tryCombineDraggedMergeItem(item.id);
        }

        el.addEventListener('pointerup', finishMergeDrag);
        el.addEventListener('pointercancel', finishMergeDrag);

        return el;
    }

    function moveDraggingMerge(id, clientX, clientY) {
        const zoneEl = document.getElementById('alm-merge-zone');
        if (!zoneEl) return;
        const item = activeMergeItems.find(m => m.id === id);
        if (!item) return;

        const rect = zoneEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const xPct = Math.min(93, Math.max(7, ((clientX - rect.left) / rect.width) * 100));
        const yPct = Math.min(91, Math.max(9, ((clientY - rect.top) / rect.height) * 100));

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

        // 2. Пересування персонажа по сходинках (з урахуванням прискорення з 40 сходинки)
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

        // 3. Спавн сніжинок (якщо відкрита 20 сходинка + прискорення під час Сніжної бурі)
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

        // 5. Спавн овочів та фруктів для об'єднання (якщо відкрита 70 сходинка)
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
    // ОНОВЛЕННЯ DOM-ЕЛЕМЕНТІВ В РЕАЛЬНОМУ ЧАСІ
    // ------------------------------------------
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

        // Кімната 80 (Сніжна буря + Прокачки мобів)
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
        if (!isAuraLarpModeActive) return;
        const s = initAuraLarpMonsterState();

        const larpValEl = document.getElementById('alm-larp-balance');
        const larpWordEl = document.getElementById('alm-larp-word');
        const larpRateEl = document.getElementById('alm-larp-rate');
        const stepBadgeEl = document.getElementById('alm-step-badge');
        const stairMultEl = document.getElementById('alm-stair-mult-val');
        const roomMultEl = document.getElementById('alm-room-mult-val');
        const totalMultEl = document.getElementById('alm-total-mult-val');

        if (larpValEl) larpValEl.textContent = formatLarpValue(s.larp);
        if (larpWordEl) larpWordEl.textContent = pluralizeLarp(s.larp);
        if (larpRateEl) larpRateEl.textContent = `+${formatMultValue(getLarpPerSecond())}/сек`;
        if (stepBadgeEl) stepBadgeEl.textContent = `${s.currentStep} / ${MAX_STEP}`;
        if (stairMultEl) stairMultEl.textContent = `x${formatMultValue(getStairMultiplier())}`;
        if (roomMultEl) roomMultEl.textContent = `x${formatMultValue(getRoomLarpMultiplier())}`;
        if (totalMultEl) totalMultEl.textContent = `x${formatMultValue(getTotalLarpMultiplier())}`;

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

            const leftPct = STEP_BASE_LEFT + (visStep - 1) * STEP_INDENT_PER_LEVEL + STEP_BAR_WIDTH * 0.5;
            const bottomPx = (visStep - 1) * ROW_HEIGHT + 30;

            charEl.style.left = `${leftPct}%`;
            charEl.style.bottom = `${bottomPx}px`;
            charEl.classList.toggle('is-moving', isMoving);

            const statusBubble = document.getElementById('alm-char-status');
            if (statusBubble) {
                statusBubble.textContent = isMoving ? `🏃 На ${s.targetStep}` : `⚡ ${s.currentStep}`;
            }

            if (autoScrollToPlayer) {
                const viewport = document.getElementById('alm-stairs-viewport');
                if (viewport) {
                    const totalHeight = MAX_STEP * ROW_HEIGHT + 70;
                    const charTop = totalHeight - bottomPx;
                    viewport.scrollTop = Math.max(0, charTop - viewport.clientHeight * 0.6);
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

                const actionLabel = row.querySelector('.alm-step-action');
                if (actionLabel) {
                    if (isCurrent) {
                        actionLabel.textContent = 'ВИ ТУТ';
                    } else if (isTarget) {
                        actionLabel.textContent = 'ЙДЕМО...';
                    } else if (isUnlocked) {
                        actionLabel.textContent = 'ПЕРЕЙТИ';
                    } else if (isNext) {
                        const st = STAIRS_CONFIG.find(i => i.step === stepNum);
                        actionLabel.textContent = `ВІДКРИТИ (${formatLarpValue(st.cost)})`;
                    } else {
                        actionLabel.textContent = '🔒';
                    }
                }
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
        let roomsNavHtml = `<div class="alm-room-selector">`;
        ROOM_STEPS.forEach(rStep => {
            const unlocked = s.maxUnlockedStep >= rStep;
            const active = activeRoomStep === rStep;
            let icon = '🚪';
            if (rStep === 20) icon = '❄️';
            else if (rStep === 30) icon = '🗑️';
            else if (rStep === 40) icon = '⚡';
            else if (rStep === 50) icon = '🐔';
            else if (rStep === 60) icon = '💎';
            else if (rStep === 70) icon = '🍉';
            else if (rStep === 80) icon = '🌨️';
            else if (rStep === 90) icon = '⚔️';
            roomsNavHtml += `
                <button class="alm-room-pill ${active ? 'active' : ''} ${unlocked ? '' : 'locked'}"
                        onclick="window.openAuraLarpRoomAtStep(${rStep})">
                    ${unlocked ? icon : '🔒'} ${rStep} сходинка
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
                        🔒 <b>Кімната заблокована!</b> Спочатку відкрийте <b>10-ту сходинку</b> у вкладці «Сходи».
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
            } else {
                statusBanner = `
                    <div class="alm-room-alert ready">
                        ✅ Персонаж у кімнаті 10-ї сходинки! Прокачки доступні.
                    </div>
                `;
            }

            return `
                ${roomsNavHtml}
                <div class="alm-room-card">
                    <div class="alm-room-header">
                        <div class="alm-room-icon">🚪</div>
                        <div>
                            <div class="alm-room-title">Таємна Кімната 10-ї Сходинки</div>
                            <div class="alm-room-subtitle">Підсилення видобутку Ларпів</div>
                        </div>
                    </div>

                    ${statusBanner}

                    <div class="alm-upgrade-box">
                        <div class="alm-upg-top">
                            <div class="alm-upg-name">✨ Множник Ларпів Кімнати</div>
                            <div class="alm-upg-lvl">Рівень ${s.roomMultLvl}</div>
                        </div>
                        <div class="alm-upg-desc">
                            Поточний множник: <b style="color: #38bdf8;">x${formatMultValue(currentRoomMult)}</b>
                            <span style="color: #94a3b8;">→</span>
                            Наступний: <b style="color: #4ade80;">x${formatMultValue(nextRoomMult)}</b>
                        </div>
                        <div class="alm-upg-note">
                            Множник кімнати перемножується з множником поточної сходинки.
                        </div>
                        <button id="alm-room-buy-btn" class="alm-upg-buy-btn" ${canBuy ? '' : 'disabled'} onclick="window.buyAuraLarpRoomUpgrade()">
                            Купити за ${formatLarpValue(upgradeCost)} ${pluralizeLarp(upgradeCost)}
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

            let statusBanner20 = '';
            if (!isRoom20Unlocked) {
                statusBanner20 = `
                    <div class="alm-room-alert locked">
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>20-ту сходинку</b> у вкладці «Сходи», щоб почали з'являтися сніжинки та відкрилися прокачки!
                    </div>
                `;
            } else if (!isCharacterAtRoom20) {
                statusBanner20 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб купувати прокачки сніжинок, персонаж має стояти на <b>20-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(20); window.switchAuraLarpSubTab('stairs');">
                            Піти на 20 сходинку
                        </button>
                    </div>
                `;
            } else {
                statusBanner20 = `
                    <div class="alm-room-alert ready">
                        ✅ Персонаж у Сніжній Кімнаті 20-ї сходинки! Збирайте сніжинки пальцем або курсором.
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
                ${roomsNavHtml}
                <div class="alm-room20-layout">
                    <div class="alm-room-card alm-room20-main">
                        <div class="alm-room-header">
                            <div class="alm-room-icon" style="border-color: #38bdf8;">❄️</div>
                            <div>
                                <div class="alm-room-title">Сніжна Кімната 20-ї Сходинки</div>
                                <div class="alm-room-subtitle">Сніжинки з'являються навіть коли ви на інших сходинках!</div>
                            </div>
                        </div>

                        ${statusBanner20}

                        ${stormActive ? `
                            <div class="alm-room-alert" style="background: rgba(56, 189, 248, 0.18); border-color: #38bdf8; color: #e0f2fe;">
                                🌨️ <b>Сніжна буря активна!</b> Сніжинки з'являються кожні <b>${getEffectiveSnowSpawnInterval()} сек</b>!
                            </div>
                        ` : ''}

                        <div class="alm-snow-stats-bar">
                            <div class="alm-snow-stat-item">
                                <span class="alm-snow-stat-label">❄️ Ваші сніжинки:</span>
                                <span id="alm-snow-balance" class="alm-snow-stat-val">${formatSnowValue(s.snow)}</span>
                            </div>
                            <div class="alm-snow-stat-item">
                                <span class="alm-snow-stat-label">📊 Всього зібрано:</span>
                                <span id="alm-snow-total" class="alm-snow-stat-val">${formatSnowValue(s.totalSnow)}</span>
                            </div>
                        </div>

                        <div class="alm-snow-zone-wrap">
                            <div class="alm-snow-zone-header">
                                <span>👆 Проводьте пальцем або натискайте по сніжинках</span>
                                <span id="alm-snow-count-badge" class="alm-snow-badge">${activeSnowflakes.length} / ${MAX_SNOWFLAKES}</span>
                            </div>
                            <div style="font-size:0.74rem;color:#94a3b8;margin-bottom:6px;">
                                ❄️ Звичайна: <b>x1</b> &nbsp;|&nbsp; <span style="color:#facc15;">❄️ Золота (${goldSnowPct}%): <b>x3</b></span> &nbsp;|&nbsp; <span style="color:#34d399;">❄️ Смарагдова (${emeraldSnowPct}%): <b>x10</b></span>
                            </div>
                            <div id="alm-snow-zone" class="alm-snow-zone ${isRoom20Unlocked ? '' : 'locked'}">
                                ${isRoom20Unlocked ? flakesHtml : '<div class="alm-snow-locked-msg">🔒 Відкрийте 20 сходинку</div>'}
                            </div>
                        </div>

                        <div class="alm-upgrades-stack">
                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">❄️ Множник Сніжинок</div>
                                    <div class="alm-upg-lvl">Рівень ${s.snowMultLvl}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Збір за 1 сніжинку: <b style="color: #38bdf8;">x${curSnowMult}</b>
                                    <span style="color: #94a3b8;">→</span>
                                    Наступний: <b style="color: #4ade80;">x${nextSnowMult}</b>
                                </div>
                                <button id="alm-snow-mult-btn" class="alm-upg-buy-btn snow-btn" ${canBuySnowMult ? '' : 'disabled'} onclick="window.buyAuraLarpSnowMultUpgrade()">
                                    Купити за ${formatSnowValue(snowMultCost)} ❄️
                                </button>
                            </div>

                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">⚡ Швидкість появи сніжинок</div>
                                    <div class="alm-upg-lvl">Рівень ${s.snowSpeedLvl} / ${SNOW_SPEED_MAX_LVL}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Інтервал спавну: <b style="color: #38bdf8;">${curSnowInterval} сек</b>
                                    ${isSnowSpeedMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color: #94a3b8;">→</span> Наступний: <b style="color: #4ade80;">${nextSnowInterval} сек</b>`}
                                </div>
                                <button id="alm-snow-speed-btn" class="alm-upg-buy-btn snow-btn" ${canBuySnowSpeed ? '' : 'disabled'} onclick="window.buyAuraLarpSnowSpeedUpgrade()">
                                    ${isSnowSpeedMax ? 'Максимальний рівень (0.2 сек)' : `Купити за ${formatSnowValue(snowSpeedCost)} ❄️`}
                                </button>
                            </div>

                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">✨ Сніжний Множник Ларпів</div>
                                    <div class="alm-upg-lvl">Рівень ${s.snowLarpMultLvl}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Множник Ларпів: <b style="color: #38bdf8;">x${formatMultValue(curSnowLarpMult)}</b>
                                    <span style="color: #94a3b8;">→</span>
                                    Наступний: <b style="color: #4ade80;">x${formatMultValue(nextSnowLarpMult)}</b>
                                </div>
                                <button id="alm-snow-larp-btn" class="alm-upg-buy-btn snow-btn" ${canBuySnowLarp ? '' : 'disabled'} onclick="window.buyAuraLarpSnowLarpUpgrade()">
                                    Купити за ${formatSnowValue(snowLarpCost)} ❄️
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="alm-snow-side-lb">
                        <div class="alm-snow-lb-title">🏆 Топ по сніжинках</div>
                        <div class="alm-snow-lb-sub">За весь час (автооновлення)</div>
                        <div id="alm-snow-lb-list" class="alm-snow-lb-list">
                            <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:12px;">Завантаження...</div>
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
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>30-ту сходинку</b> у вкладці «Сходи», щоб з'явилось сміття та відкрилися прокачки!
                    </div>
                `;
            } else if (!isCharacterAtRoom30) {
                statusBanner30 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб купувати прокачки прибирання, персонаж має стояти на <b>30-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(30); window.switchAuraLarpSubTab('stairs');">
                            Піти на 30 сходинку
                        </button>
                    </div>
                `;
            } else {
                statusBanner30 = `
                    <div class="alm-room-alert ready">
                        ✅ Персонаж у Кімнаті Прибирання 30-ї сходинки! Перетягуйте сміття у смітник.
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
                ${roomsNavHtml}
                <div class="alm-room20-layout">
                    <div class="alm-room-card alm-room20-main">
                        <div class="alm-room-header">
                            <div class="alm-room-icon" style="border-color: #22c55e;">🗑️</div>
                            <div>
                                <div class="alm-room-title">Кімната Прибирання 30-ї Сходинки</div>
                                <div class="alm-room-subtitle">Сміття накопичується навіть коли ви на інших сходинках!</div>
                            </div>
                        </div>

                        ${statusBanner30}

                        <div class="alm-snow-stats-bar">
                            <div class="alm-snow-stat-item">
                                <span class="alm-snow-stat-label">🗑️ Зібране сміття:</span>
                                <span id="alm-trash-balance" class="alm-snow-stat-val" style="color: #4ade80;">${formatTrashValue(s.trash)}</span>
                            </div>
                            <div class="alm-snow-stat-item">
                                <span class="alm-snow-stat-label">♻️ Всього прибрано:</span>
                                <span id="alm-trash-total" class="alm-snow-stat-val" style="color: #4ade80;">${formatTrashValue(s.totalTrash)}</span>
                            </div>
                        </div>

                        <div class="alm-snow-zone-wrap">
                            <div class="alm-snow-zone-header">
                                <span>✊ Затисніть сміття та перетягніть у смітник внизу</span>
                                <span id="alm-trash-count-badge" class="alm-snow-badge" style="color:#4ade80;border-color:rgba(74,222,128,0.45);">${activeTrashItems.length} / ${MAX_TRASH_ITEMS}</span>
                            </div>
                            <div style="font-size:0.74rem;color:#94a3b8;margin-bottom:6px;">
                                🗑️ Звичайне: <b>x1</b> &nbsp;|&nbsp; <span style="color:#facc15;">🗑️ Золоте (${goldTrashPct}%): <b>x3</b></span> &nbsp;|&nbsp; <span style="color:#34d399;">🗑️ Смарагдове (${emeraldTrashPct}%): <b>x10</b></span>
                            </div>
                            <div id="alm-trash-zone" class="alm-trash-zone ${isRoom30Unlocked ? '' : 'locked'}">
                                ${isRoom30Unlocked ? `
                                    ${trashItemsHtml}
                                    <div id="alm-trash-bin" class="alm-trash-bin">
                                        <span class="alm-trash-bin-icon">🗑️</span>
                                        <span class="alm-trash-bin-label">СМІТНИК</span>
                                    </div>
                                ` : '<div class="alm-snow-locked-msg">🔒 Відкрийте 30 сходинку</div>'}
                            </div>
                        </div>

                        <div class="alm-upgrades-stack">
                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">♻️ Множник Сміття</div>
                                    <div class="alm-upg-lvl">Рівень ${s.trashMultLvl}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    За 1 прибраний предмет: <b style="color: #4ade80;">x${curTrashMult}</b>
                                    <span style="color: #94a3b8;">→</span>
                                    Наступний: <b style="color: #38bdf8;">x${nextTrashMult}</b>
                                </div>
                                <button id="alm-trash-mult-btn" class="alm-upg-buy-btn trash-btn" ${canBuyTrashMult ? '' : 'disabled'} onclick="window.buyAuraLarpTrashMultUpgrade()">
                                    Купити за ${formatTrashValue(trashMultCost)} 🗑️
                                </button>
                            </div>

                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">⚡ Швидкість появи сміття</div>
                                    <div class="alm-upg-lvl">Рівень ${s.trashSpeedLvl} / ${TRASH_SPEED_MAX_LVL}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Інтервал спавну: <b style="color: #4ade80;">${curTrashInterval} сек</b>
                                    ${isTrashSpeedMax ? '<span style="color:#facc15;">(МАКСИМУМ)</span>' : `<span style="color: #94a3b8;">→</span> Наступний: <b style="color: #38bdf8;">${nextTrashInterval} сек</b>`}
                                </div>
                                <button id="alm-trash-speed-btn" class="alm-upg-buy-btn trash-btn" ${canBuyTrashSpeed ? '' : 'disabled'} onclick="window.buyAuraLarpTrashSpeedUpgrade()">
                                    ${isTrashSpeedMax ? 'Максимальний рівень (0.4 сек)' : `Купити за ${formatTrashValue(trashSpeedCost)} 🗑️`}
                                </button>
                            </div>

                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">✨ Еко-Множник Ларпів</div>
                                    <div class="alm-upg-lvl">Рівень ${s.trashLarpMultLvl}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Множник Ларпів: <b style="color: #4ade80;">x${formatMultValue(curTrashLarpMult)}</b>
                                    <span style="color: #94a3b8;">→</span>
                                    Наступний: <b style="color: #38bdf8;">x${formatMultValue(nextTrashLarpMult)}</b>
                                </div>
                                <button id="alm-trash-larp-btn" class="alm-upg-buy-btn trash-btn" ${canBuyTrashLarp ? '' : 'disabled'} onclick="window.buyAuraLarpTrashLarpUpgrade()">
                                    Купити за ${formatTrashValue(trashLarpCost)} 🗑️
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="alm-snow-side-lb">
                        <div class="alm-snow-lb-title" style="color: #4ade80;">🏆 Топ з прибирання</div>
                        <div class="alm-snow-lb-sub">За весь час (автооновлення)</div>
                        <div id="alm-trash-lb-list" class="alm-snow-lb-list">
                            <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:12px;">Завантаження...</div>
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
            const nextSpeedBonusPct = curSpeedBonusPct + SPEED_UPG_STEP_PCT;
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
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>40-ту сходинку</b> у вкладці «Сходи», щоб отримати доступ до прискорення та офлайн-фарму!
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
            } else {
                statusBanner40 = `
                    <div class="alm-room-alert ready">
                        ✅ Персонаж у Залі Прискорення 40-ї сходинки! Прокачки доступні.
                    </div>
                `;
            }

            return `
                ${roomsNavHtml}
                <div class="alm-room-card">
                    <div class="alm-room-header">
                        <div class="alm-room-icon" style="border-color: #f59e0b;">⚡</div>
                        <div>
                            <div class="alm-room-title">Зал Часу та Швидкості 40-ї Сходинки</div>
                            <div class="alm-room-subtitle">Прискорення пересування та заробіток поза грою</div>
                        </div>
                    </div>

                    ${statusBanner40}

                    <div class="alm-upgrades-stack">
                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name">🏃 Швидкість пересування сходами</div>
                                <div class="alm-upg-lvl">Рівень ${s.stepSpeedLvl}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Бонус швидкості: <b style="color: #38bdf8;">+${curSpeedBonusPct}% (x${curSpeedMult})</b>
                                <span style="color: #94a3b8;">→</span>
                                Наступний: <b style="color: #4ade80;">+${nextSpeedBonusPct}% (x${nextSpeedMult})</b>
                            </div>
                            <div class="alm-upg-note">
                                Кожен рівень прискорює підйом і спуск персонажа між сходинками на +1%.
                            </div>
                            <button id="alm-step-speed-btn" class="alm-upg-buy-btn" ${canBuySpeed ? '' : 'disabled'} onclick="window.buyAuraLarpStepSpeedUpgrade()">
                                Купити за ${formatLarpValue(speedCost)} ${pluralizeLarp(speedCost)}
                            </button>
                        </div>

                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name">🌙 Офлайн-фарм Ларпів</div>
                                <div class="alm-upg-lvl">Рівень ${s.offlineLarpLvl}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Заробіток офлайн: <b style="color: #facc15;">${curOfflinePct}%</b>
                                <span style="color: #94a3b8;">→</span>
                                Наступний: <b style="color: #4ade80;">${nextOfflinePct}%</b>
                            </div>
                            <div class="alm-upg-note">
                                Поки ви поза грою, ви отримуєте ${curOfflinePct}% від доходу вашої найвищої відкритої сходинки (${getHighestUnlockedStepNumber()} сходинка).
                            </div>
                            <button id="alm-offline-larp-btn" class="alm-upg-buy-btn" ${canBuyOffline ? '' : 'disabled'} onclick="window.buyAuraLarpOfflineUpgrade()">
                                Купити за ${formatLarpValue(offlineCost)} ${pluralizeLarp(offlineCost)}
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
            } else {
                statusBanner50 = `
                    <div class="alm-room-alert ready">
                        ✅ Персонаж на Арені 50-ї сходинки! Натискайте по мобу, щоб завдавати ${clickDamage} урону за клік.
                    </div>
                `;
            }

            return `
                ${roomsNavHtml}
                <div class="alm-room20-layout">
                    <div class="alm-room-card alm-room20-main">
                        <div class="alm-room-header">
                            <div class="alm-room-icon" style="border-color: #fb923c;">🐔</div>
                            <div>
                                <div class="alm-room-title">Бойова Арена 50-ї Сходинки</div>
                                <div class="alm-room-subtitle">Моб: ${CHICKEN_MOB_NAME} • Дроп: 🪶 Пір'я</div>
                            </div>
                        </div>

                        ${statusBanner50}

                        <div class="alm-snow-stats-bar">
                            <div class="alm-snow-stat-item">
                                <span class="alm-snow-stat-label">🪶 Ваше пір'я:</span>
                                <span id="alm-feather-balance" class="alm-snow-stat-val" style="color: #fdba74;">${formatFeatherValue(s.feathers)}</span>
                            </div>
                            <div class="alm-snow-stat-item">
                                <span class="alm-snow-stat-label">🏆 Всього здобуто:</span>
                                <span id="alm-feather-total" class="alm-snow-stat-val" style="color: #fdba74;">${formatFeatherValue(s.totalFeathers)}</span>
                            </div>
                        </div>

                        <div id="alm-chicken-arena" class="alm-chicken-arena ${isRoom50Unlocked && isCharacterAtRoom50 ? '' : 'locked'}">
                            ${!isRoom50Unlocked ? `
                                <div class="alm-snow-locked-msg">🔒 Відкрийте 50 сходинку</div>
                            ` : isRespawning ? `
                                <div class="alm-chicken-respawn-box">
                                    <div style="font-size: 2.6rem;">🥚⏳</div>
                                    <div style="font-weight: 900; color: #facc15; font-size: 1rem; margin-top: 6px;">
                                        ${CHICKEN_MOB_NAME} відновлюється...
                                    </div>
                                    <div style="color: #94a3b8; font-size: 0.82rem; margin-top: 4px;">
                                        Повернення через (час спавну: ${formatDurationUk(respawnDurationSec)}):
                                    </div>
                                    <div id="alm-chicken-respawn-timer" class="alm-respawn-countdown">
                                        ${formatTimerMmSs(respawnLeftSec)}
                                    </div>
                                </div>
                            ` : `
                                <div class="alm-mob-title-row">
                                    <span class="alm-mob-name">⚔️ ${CHICKEN_MOB_NAME}</span>
                                    <span class="alm-mob-reward-tag">Нагорода: +${formatFeatherValue(expectedDrop)} 🪶</span>
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

                        <div class="alm-upgrades-stack" style="margin-top: 12px;">
                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">🪶 Множник Пір'я</div>
                                    <div class="alm-upg-lvl">Рівень ${s.featherMultLvl}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Множник дропу пір'я: <b style="color: #fdba74;">x${formatMultValue(curFeatherMult)}</b>
                                    <span style="color: #94a3b8;">→</span>
                                    Наступний: <b style="color: #4ade80;">x${formatMultValue(nextFeatherMult)}</b>
                                </div>
                                <div class="alm-upg-note">
                                    За перемогу над мобом випаде ${Math.round(CHICKEN_BASE_FEATHER_DROP * curFeatherMult)} пір'я (наступний рівень: ${Math.round(CHICKEN_BASE_FEATHER_DROP * nextFeatherMult)}).
                                </div>
                                <button id="alm-feather-mult-btn" class="alm-upg-buy-btn feather-btn" ${canBuyFeatherMult ? '' : 'disabled'} onclick="window.buyAuraLarpFeatherMultUpgrade()">
                                    Купити за ${formatFeatherValue(featherMultCost)} 🪶
                                </button>
                            </div>

                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">✨ Пір'яний Множник Ларпів</div>
                                    <div class="alm-upg-lvl">Рівень ${s.featherLarpMultLvl}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Множник Ларпів: <b style="color: #fdba74;">x${formatMultValue(curFeatherLarpMult)}</b>
                                    <span style="color: #94a3b8;">→</span>
                                    Наступний: <b style="color: #4ade80;">x${formatMultValue(nextFeatherLarpMult)}</b>
                                </div>
                                <button id="alm-feather-larp-btn" class="alm-upg-buy-btn feather-btn" ${canBuyFeatherLarp ? '' : 'disabled'} onclick="window.buyAuraLarpFeatherLarpUpgrade()">
                                    Купити за ${formatFeatherValue(featherLarpCost)} 🪶
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="alm-snow-side-lb">
                        <div class="alm-snow-lb-title" style="color: #fdba74;">🏆 Топ за пір'ям</div>
                        <div class="alm-snow-lb-sub">За весь час (автооновлення)</div>
                        <div id="alm-feather-lb-list" class="alm-snow-lb-list">
                            <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:12px;">Завантаження...</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 60 СХОДИНКИ (ЗОЛОТІ ТА СМАРАГДОВІ ШАНСИ) ----------------
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
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>60-ту сходинку</b> у вкладці «Сходи», щоб відкрити рідкісні золоті та смарагдові сніжинки і сміття!
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
            } else {
                statusBanner60 = `
                    <div class="alm-room-alert ready">
                        ✅ Персонаж у Скарбниці Рідкостей 60-ї сходинки! Прокачуйте шанси золотих (x3) та смарагдових (x10) предметів.
                    </div>
                `;
            }

            return `
                ${roomsNavHtml}
                <div class="alm-room-card">
                    <div class="alm-room-header">
                        <div class="alm-room-icon" style="border-color: #34d399;">💎</div>
                        <div>
                            <div class="alm-room-title">Скарбниця Рідкостей 60-ї Сходинки</div>
                            <div class="alm-room-subtitle">Золоті предмети дають x3, а Смарагдові — x10 ресурсів!</div>
                        </div>
                    </div>

                    ${statusBanner60}

                    <div class="alm-upgrades-stack">
                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name" style="color:#facc15;">❄️ Шанс золотої сніжинки (x3 ❄️)</div>
                                <div class="alm-upg-lvl">Рівень ${s.goldSnowLvl} / ${GOLD_SNOW_MAX_LVL}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Поточний шанс: <b style="color:#facc15;">${curGoldSnow}%</b>
                                ${isGoldSnowMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color:#94a3b8;">→</span> Наступний: <b style="color:#4ade80;">${Number((curGoldSnow + 1).toFixed(2))}%</b>`}
                            </div>
                            <button id="alm-gold-snow-btn" class="alm-upg-buy-btn" ${canBuyGoldSnow ? '' : 'disabled'} onclick="window.buyAuraLarpGoldSnowUpgrade()">
                                ${isGoldSnowMax ? 'Максимальний шанс (100%)' : `Купити за ${formatLarpValue(goldSnowCost)} ${pluralizeLarp(goldSnowCost)}`}
                            </button>
                        </div>

                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name" style="color:#34d399;">💎 Шанс смарагдової сніжинки (x10 ❄️)</div>
                                <div class="alm-upg-lvl">Рівень ${s.emeraldSnowLvl} / ${EMERALD_SNOW_MAX_LVL}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Поточний шанс: <b style="color:#34d399;">${curEmeraldSnow}%</b>
                                ${isEmeraldSnowMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color:#94a3b8;">→</span> Наступний: <b style="color:#4ade80;">${Number((curEmeraldSnow + 0.01).toFixed(2))}%</b>`}
                            </div>
                            <button id="alm-emerald-snow-btn" class="alm-upg-buy-btn" ${canBuyEmeraldSnow ? '' : 'disabled'} onclick="window.buyAuraLarpEmeraldSnowUpgrade()">
                                ${isEmeraldSnowMax ? 'Максимальний шанс (100%)' : `Купити за ${formatLarpValue(emeraldSnowCost)} ${pluralizeLarp(emeraldSnowCost)}`}
                            </button>
                        </div>

                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name" style="color:#facc15;">🗑️ Шанс золотого сміття (x3 🗑️)</div>
                                <div class="alm-upg-lvl">Рівень ${s.goldTrashLvl} / ${GOLD_TRASH_MAX_LVL}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Поточний шанс: <b style="color:#facc15;">${curGoldTrash}%</b>
                                ${isGoldTrashMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color:#94a3b8;">→</span> Наступний: <b style="color:#4ade80;">${Number((curGoldTrash + 1).toFixed(2))}%</b>`}
                            </div>
                            <button id="alm-gold-trash-btn" class="alm-upg-buy-btn" ${canBuyGoldTrash ? '' : 'disabled'} onclick="window.buyAuraLarpGoldTrashUpgrade()">
                                ${isGoldTrashMax ? 'Максимальний шанс (100%)' : `Купити за ${formatLarpValue(goldTrashCost)} ${pluralizeLarp(goldTrashCost)}`}
                            </button>
                        </div>

                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name" style="color:#34d399;">💎 Шанс смарагдового сміття (x10 🗑️)</div>
                                <div class="alm-upg-lvl">Рівень ${s.emeraldTrashLvl} / ${EMERALD_TRASH_MAX_LVL}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Поточний шанс: <b style="color:#34d399;">${curEmeraldTrash}%</b>
                                ${isEmeraldTrashMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color:#94a3b8;">→</span> Наступний: <b style="color:#4ade80;">${Number((curEmeraldTrash + 0.01).toFixed(2))}%</b>`}
                            </div>
                            <button id="alm-emerald-trash-btn" class="alm-upg-buy-btn" ${canBuyEmeraldTrash ? '' : 'disabled'} onclick="window.buyAuraLarpEmeraldTrashUpgrade()">
                                ${isEmeraldTrashMax ? 'Максимальний шанс (100%)' : `Купити за ${formatLarpValue(emeraldTrashCost)} ${pluralizeLarp(emeraldTrashCost)}`}
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
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>70-ту сходинку</b> у вкладці «Сходи», щоб відкрити ферму об'єднання овочів та фруктів!
                    </div>
                `;
            } else if (!isCharacterAtRoom70) {
                statusBanner70 = `
                    <div class="alm-room-alert warning">
                        <div>🚶 Щоб купувати прокачки за вітаміни, персонаж має стояти на <b>70-й сходинці</b> (зараз: ${s.currentStep}).</div>
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(70); window.switchAuraLarpSubTab('stairs');">
                            Піти на 70 сходинку
                        </button>
                    </div>
                `;
            } else {
                statusBanner70 = `
                    <div class="alm-room-alert ready">
                        ✅ Персонаж у Вітамінній Оранжереї 70-ї сходинки! Перетягуйте два однакових овочі або фрукти один на одного.
                    </div>
                `;
            }

            let mergeItemsHtml = '';
            activeMergeItems.forEach(m => {
                const tier = getMergeTierInfo(m.level);
                mergeItemsHtml += `
                    <div class="alm-merge-item" data-merge-id="${m.id}" style="left:${m.xPct}%;top:${m.yPct}%;">
                        <span class="alm-merge-emoji">${tier.icon}</span>
                        <span class="alm-merge-lvl-badge">Lv.${m.level}</span>
                    </div>
                `;
            });

            const chainPreview = MERGE_HIERARCHY.map(t => `${t.icon}${t.level}`).join(' → ');

            return `
                ${roomsNavHtml}
                <div class="alm-room20-layout">
                    <div class="alm-room-card alm-room20-main">
                        <div class="alm-room-header">
                            <div class="alm-room-icon" style="border-color: #f43f5e;">🍉</div>
                            <div>
                                <div class="alm-room-title">Вітамінна Оранжерея 70-ї Сходинки</div>
                                <div class="alm-room-subtitle">Об'єднуйте однакові плоди для отримання 💊 Вітамінів!</div>
                            </div>
                        </div>

                        ${statusBanner70}

                        <div class="alm-snow-stats-bar">
                            <div class="alm-snow-stat-item">
                                <span class="alm-snow-stat-label">💊 Ваші вітаміни:</span>
                                <span id="alm-vitamin-balance" class="alm-snow-stat-val" style="color: #fb7185;">${formatVitaminValue(s.vitamins)}</span>
                            </div>
                            <div class="alm-snow-stat-item">
                                <span class="alm-snow-stat-label">🌟 Всього зібрано:</span>
                                <span id="alm-vitamin-total" class="alm-snow-stat-val" style="color: #fb7185;">${formatVitaminValue(s.totalVitamins)}</span>
                            </div>
                        </div>

                        <div class="alm-snow-zone-wrap">
                            <div class="alm-snow-zone-header">
                                <span>🔄 Наведіть один плід на такий самий (кожні 3 сек +1)</span>
                                <span id="alm-merge-count-badge" class="alm-snow-badge" style="color:#fb7185;border-color:rgba(251,113,133,0.45);">${activeMergeItems.length} / ${MAX_MERGE_ITEMS}</span>
                            </div>
                            <div style="font-size:0.7rem;color:#94a3b8;margin-bottom:6px;line-height:1.3;">
                                ${chainPreview}
                            </div>
                            <div id="alm-merge-zone" class="alm-merge-zone ${isRoom70Unlocked ? '' : 'locked'}">
                                ${isRoom70Unlocked ? mergeItemsHtml : '<div class="alm-snow-locked-msg">🔒 Відкрийте 70 сходинку</div>'}
                            </div>
                            ${isRoom70Unlocked ? `
                                <div style="display:flex;justify-content:flex-end;margin-top:6px;">
                                    <button class="alm-mini-go-btn" style="background:rgba(251,113,133,0.18);border-color:rgba(251,113,133,0.5);color:#fda4af;" onclick="window.sellAuraLarpMergeItem()">
                                        ♻️ Звільнити місце (+💊)
                                    </button>
                                </div>
                            ` : ''}
                        </div>

                        <div class="alm-upgrades-stack">
                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">💊 Множник Вітамінів</div>
                                    <div class="alm-upg-lvl">Рівень ${s.vitaminMultLvl}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Нагорода за злиття: <b style="color: #fb7185;">x${formatMultValue(curVitMult)}</b>
                                    <span style="color: #94a3b8;">→</span>
                                    Наступний: <b style="color: #4ade80;">x${formatMultValue(nextVitMult)}</b>
                                </div>
                                <button id="alm-vit-mult-btn" class="alm-upg-buy-btn vitamin-btn" ${canBuyVitMult ? '' : 'disabled'} onclick="window.buyAuraLarpVitaminMultUpgrade()">
                                    Купити за ${formatVitaminValue(vitMultCost)} 💊
                                </button>
                            </div>

                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">🍅 Шанс появи плода 2-го рівня</div>
                                    <div class="alm-upg-lvl">Рівень ${s.mergeLv2ChanceLvl} / ${MERGE_LV2_MAX_LVL}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Шанс спавну 🍅 (Lv.2): <b style="color: #fb7185;">${curLv2Pct}%</b>
                                    ${isLv2Max ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color: #94a3b8;">→</span> Наступний: <b style="color: #4ade80;">${nextLv2Pct}%</b>`}
                                </div>
                                <button id="alm-merge-lv2-btn" class="alm-upg-buy-btn vitamin-btn" ${canBuyLv2 ? '' : 'disabled'} onclick="window.buyAuraLarpMergeLv2Upgrade()">
                                    ${isLv2Max ? 'Максимальний шанс (100%)' : `Купити за ${formatVitaminValue(lv2Cost)} 💊`}
                                </button>
                            </div>

                            <div class="alm-upgrade-box">
                                <div class="alm-upg-top">
                                    <div class="alm-upg-name">✨ Вітамінний Множник Ларпів</div>
                                    <div class="alm-upg-lvl">Рівень ${s.mergeLarpMultLvl}</div>
                                </div>
                                <div class="alm-upg-desc">
                                    Множник Ларпів: <b style="color: #fb7185;">x${formatMultValue(curMergeLarpMult)}</b>
                                    <span style="color: #94a3b8;">→</span>
                                    Наступний: <b style="color: #4ade80;">x${formatMultValue(nextMergeLarpMult)}</b>
                                </div>
                                <button id="alm-merge-larp-btn" class="alm-upg-buy-btn vitamin-btn" ${canBuyMergeLarp ? '' : 'disabled'} onclick="window.buyAuraLarpMergeLarpUpgrade()">
                                    Купити за ${formatVitaminValue(mergeLarpCost)} 💊
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="alm-snow-side-lb">
                        <div class="alm-snow-lb-title" style="color: #fb7185;">🏆 Топ з вітамінів</div>
                        <div class="alm-snow-lb-sub">За весь час (автооновлення)</div>
                        <div id="alm-vitamin-lb-list" class="alm-snow-lb-list">
                            <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:12px;">Завантаження...</div>
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
                        🔒 <b>Кімната заблокована!</b> Відкрийте <b>80-ту сходинку</b> у вкладці «Сходи», щоб керувати Сніжною Бурею!
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
            } else {
                statusBanner80 = `
                    <div class="alm-room-alert ready">
                        ✅ Персонаж у Метео-Обсерваторії 80-ї сходинки! Викликайте Сніжну бурю та покращуйте її силу.
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
                ${roomsNavHtml}
                <div class="alm-room-card">
                    <div class="alm-room-header">
                        <div class="alm-room-icon" style="border-color: #38bdf8;">🌨️</div>
                        <div>
                            <div class="alm-room-title">Метео-Обсерваторія 80-ї Сходинки</div>
                            <div class="alm-room-subtitle">Викликає Сніжну бурю у кімнаті 20-ї сходинки!</div>
                        </div>
                    </div>

                    ${statusBanner80}

                    <div class="alm-upgrade-box" style="border-color: rgba(56, 189, 248, 0.45); background: rgba(14, 116, 144, 0.16); margin-bottom: 12px;">
                        <div class="alm-upg-top">
                            <div class="alm-upg-name" style="color:#38bdf8;">🌨️ Активація Сніжної Бурі</div>
                            <div class="alm-upg-lvl">Спавн: ${curStormSpd} сек</div>
                        </div>
                        <div id="alm-storm-status-text" class="alm-upg-desc">${stormStatusLine}</div>
                        <div class="alm-upg-note">
                            Під час бурі сніжинки на 20-й сходинці з'являються зі швидкістю <b>1 сніжинка / ${curStormSpd} сек</b> протягом <b>${curDurMin} хв</b>.
                        </div>
                        <button id="alm-storm-activate-btn" class="alm-upg-buy-btn snow-btn" ${canActivateStorm ? '' : 'disabled'} onclick="window.activateAuraLarpSnowstorm()">
                            ${stormBtnText}
                        </button>
                    </div>

                    <div class="alm-upgrades-stack">
                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name">⏱️ Тривалість сніжної бурі</div>
                                <div class="alm-upg-lvl">Рівень ${s.stormDurationLvl}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Тривалість: <b style="color:#38bdf8;">${curDurMin} хв</b>
                                <span style="color:#94a3b8;">→</span>
                                Наступний: <b style="color:#4ade80;">${nextDurMin} хв</b>
                            </div>
                            <button id="alm-storm-dur-btn" class="alm-upg-buy-btn" ${canBuyDur ? '' : 'disabled'} onclick="window.buyAuraLarpStormDurationUpgrade()">
                                Купити за ${formatLarpValue(durCost)} ${pluralizeLarp(durCost)}
                            </button>
                        </div>

                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name">🔄 Перезарядка сніжної бурі</div>
                                <div class="alm-upg-lvl">Рівень ${s.stormCooldownLvl} / ${STORM_COOLDOWN_MAX_LVL}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Перезарядка: <b style="color:#38bdf8;">${curCdHr} год</b>
                                ${isCdMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color:#94a3b8;">→</span> Наступний: <b style="color:#4ade80;">${nextCdHr} год</b>`}
                            </div>
                            <button id="alm-storm-cd-btn" class="alm-upg-buy-btn" ${canBuyCd ? '' : 'disabled'} onclick="window.buyAuraLarpStormCooldownUpgrade()">
                                ${isCdMax ? 'Мінімальна перезарядка (0.5 год)' : `Купити за ${formatLarpValue(cdCost)} ${pluralizeLarp(cdCost)}`}
                            </button>
                        </div>

                        <div class="alm-upgrade-box">
                            <div class="alm-upg-top">
                                <div class="alm-upg-name">❄️ Швидкість сніжинок під час бурі</div>
                                <div class="alm-upg-lvl">Рівень ${s.stormSpeedLvl} / ${STORM_SPAWN_MAX_LVL}</div>
                            </div>
                            <div class="alm-upg-desc">
                                Інтервал бурі: <b style="color:#38bdf8;">${curStormSpd} сек</b>
                                ${isStormSpdMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color:#94a3b8;">→</span> Наступний: <b style="color:#4ade80;">${nextStormSpd} сек</b>`}
                            </div>
                            <button id="alm-storm-spd-btn" class="alm-upg-buy-btn" ${canBuyStormSpd ? '' : 'disabled'} onclick="window.buyAuraLarpStormSpeedUpgrade()">
                                ${isStormSpdMax ? 'Максимальна швидкість (0.03 сек)' : `Купити за ${formatLarpValue(stormSpdCost)} ${pluralizeLarp(stormSpdCost)}`}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // ---------------- КІМНАТА 90 СХОДИНКИ (ПРОКАЧКИ МОБІВ) ----------------
        const isRoom90Unlocked = s.maxUnlockedStep >= 90;
        const isCharacterAtRoom90 = s.currentStep === 90 && s.targetStep === 90;

        const curMobDmg = getChickenClickDamage();
        const isMobDmgMax = (s.mobDamageLvl || 0) >= MOB_DMG_MAX_LVL;
        const mobDmgCost = getMobDamageUpgradeCost();
        const canBuyMobDmg = !isMobDmgMax && isRoom90Unlocked && isCharacterAtRoom90 && s.larp >= mobDmgCost;

        const curMobSpawnPct = Math.min(MOB_SPAWN_MAX_LVL, s.mobRespawnLvl || 0);
        const curMobRespawnSec = getChickenRespawnDurationSec();
        const isMobSpawnMax = (s.mobRespawnLvl || 0) >= MOB_SPAWN_MAX_LVL;
        const mobSpawnCost = getMobRespawnUpgradeCost();
        const canBuyMobSpawn = !isMobSpawnMax && isRoom90Unlocked && isCharacterAtRoom90 && s.larp >= mobSpawnCost;

        let statusBanner90 = '';
        if (!isRoom90Unlocked) {
            statusBanner90 = `
                <div class="alm-room-alert locked">
                    🔒 <b>Кімната заблокована!</b> Відкрийте <b>90-ту сходинку</b> у вкладці «Сходи», щоб відкрити Кузню Мисливця!
                </div>
            `;
        } else if (!isCharacterAtRoom90) {
            statusBanner90 = `
                <div class="alm-room-alert warning">
                    <div>🚶 Щоб купувати прокачки мобів, персонаж має стояти на <b>90-й сходинці</b> (зараз: ${s.currentStep}).</div>
                    <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(90); window.switchAuraLarpSubTab('stairs');">
                        Піти на 90 сходинку
                    </button>
                </div>
            `;
        } else {
            statusBanner90 = `
                <div class="alm-room-alert ready">
                    ✅ Персонаж у Кузні Мисливця 90-ї сходинки! Посилюйте урон по мобах та прискорюйте їх появу.
                </div>
            `;
        }

        return `
            ${roomsNavHtml}
            <div class="alm-room-card">
                <div class="alm-room-header">
                    <div class="alm-room-icon" style="border-color: #ef4444;">⚔️</div>
                    <div>
                        <div class="alm-room-title">Кузня Мисливця 90-ї Сходинки</div>
                        <div class="alm-room-subtitle">Прокачки урону по мобах та швидкості їх відродження на 50-й сходинці</div>
                    </div>
                </div>

                ${statusBanner90}

                <div class="alm-upgrades-stack">
                    <div class="alm-upgrade-box">
                        <div class="alm-upg-top">
                            <div class="alm-upg-name" style="color:#fca5a5;">⚔️ Урон по мобах (50 сходинка)</div>
                            <div class="alm-upg-lvl">Рівень ${s.mobDamageLvl} / ${MOB_DMG_MAX_LVL}</div>
                        </div>
                        <div class="alm-upg-desc">
                            Урон за удар: <b style="color:#fca5a5;">${curMobDmg} HP</b>
                            ${isMobDmgMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color:#94a3b8;">→</span> Наступний: <b style="color:#4ade80;">${curMobDmg + 1} HP</b>`}
                        </div>
                        <div class="alm-upg-note">
                            Кожен рівень додає +1 одиницю урону за клік по мобу «${CHICKEN_MOB_NAME}».
                        </div>
                        <button id="alm-mob-dmg-btn" class="alm-upg-buy-btn" ${canBuyMobDmg ? '' : 'disabled'} onclick="window.buyAuraLarpMobDamageUpgrade()">
                            ${isMobDmgMax ? 'Максимальний урон (100 HP)' : `Купити за ${formatLarpValue(mobDmgCost)} ${pluralizeLarp(mobDmgCost)}`}
                        </button>
                    </div>

                    <div class="alm-upgrade-box">
                        <div class="alm-upg-top">
                            <div class="alm-upg-name" style="color:#fde047;">⏳ Швидкість появи мобів (50 сходинка)</div>
                            <div class="alm-upg-lvl">Рівень ${s.mobRespawnLvl} / ${MOB_SPAWN_MAX_LVL}</div>
                        </div>
                        <div class="alm-upg-desc">
                            Прискорення спавну: <b style="color:#fde047;">-${curMobSpawnPct}% (${formatDurationUk(curMobRespawnSec)})</b>
                            ${isMobSpawnMax ? '<span style="color:#4ade80;">(МАКСИМУМ)</span>' : `<span style="color:#94a3b8;">→</span> Наступний: <b style="color:#4ade80;">-${curMobSpawnPct + 1}%</b>`}
                        </div>
                        <div class="alm-upg-note">
                            Кожен рівень зменшує час відродження моба на 50-й сходинці на 1% (максимум -60%).
                        </div>
                        <button id="alm-mob-respawn-btn" class="alm-upg-buy-btn" ${canBuyMobSpawn ? '' : 'disabled'} onclick="window.buyAuraLarpMobRespawnUpgrade()">
                            ${isMobSpawnMax ? 'Максимальне прискорення (-60%)' : `Купити за ${formatLarpValue(mobSpawnCost)} ${pluralizeLarp(mobSpawnCost)}`}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMultipliersTabHtml(s) {
        const stairMult = getStairMultiplier();
        const highestStepNum = getHighestUnlockedStepNumber();
        const highestStairMult = getHighestStairMultiplier();
        const roomMult = getRoomLarpMultiplier();
        const snowLarpMult = getSnowLarpMultiplier();
        const trashLarpMult = getTrashLarpMultiplier();
        const featherLarpMult = getFeatherLarpMultiplier();
        const mergeLarpMult = getMergeLarpMultiplier();
        const totalMult = getTotalLarpMultiplier();
        const highestTotalMult = getHighestStepTotalMultiplier();

        const snowMult = getSnowMultiplier();
        const trashMult = getTrashMultiplier();
        const featherMult = getFeatherMultiplier();
        const vitaminMult = getVitaminMultiplier();
        const moveSpeed = getCharacterMoveSpeed();
        const offlinePct = getOfflineLarpPercent();

        return `
            <div class="alm-room-card">
                <div class="alm-room-header">
                    <div class="alm-room-icon" style="border-color: #a855f7;">📊</div>
                    <div>
                        <div class="alm-room-title">Усі Ваші Множники та Бонуси</div>
                        <div class="alm-room-subtitle">Детальна статистика активних підсилень</div>
                    </div>
                </div>

                <div class="alm-mult-total-box">
                    <div class="alm-mult-total-label">✨ Загальний множник Ларпів (поточна ${s.currentStep} сходинка)</div>
                    <div class="alm-mult-total-value">x${formatMultValue(totalMult)}</div>
                    <div class="alm-mult-total-rate">Поточний видобуток: <b>+${formatMultValue(getLarpPerSecond())}</b> ларп/сек</div>
                    <div style="font-size:0.76rem;color:#cbd5e1;margin-top:6px;">
                        👑 Рекордний дохід (найвища ${highestStepNum} сходинка): <b style="color:#facc15;">x${formatMultValue(highestTotalMult)} (+${formatMultValue(getHighestStepLarpPerSecond())}/сек)</b>
                    </div>
                </div>

                <div class="alm-mult-section-title">Складові множника Ларпів (перемножуються)</div>
                <div class="alm-mult-grid">
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">🪜 Поточна сходинка (${s.currentStep})</div>
                        <div class="alm-mult-item-val" style="color: #facc15;">x${formatMultValue(stairMult)}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">👑 Найвища сходинка (${highestStepNum})</div>
                        <div class="alm-mult-item-val" style="color: #fde047;">x${formatMultValue(highestStairMult)}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">🚪 Кімната 10 сходинки (Lv.${s.roomMultLvl})</div>
                        <div class="alm-mult-item-val" style="color: #38bdf8;">x${formatMultValue(roomMult)}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">❄️ Сніжний множник 20 ск. (Lv.${s.snowLarpMultLvl})</div>
                        <div class="alm-mult-item-val" style="color: #7dd3fc;">x${formatMultValue(snowLarpMult)}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">🗑️ Еко-множник 30 ск. (Lv.${s.trashLarpMultLvl})</div>
                        <div class="alm-mult-item-val" style="color: #4ade80;">x${formatMultValue(trashLarpMult)}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">🪶 Пір'яний множник 50 ск. (Lv.${s.featherLarpMultLvl})</div>
                        <div class="alm-mult-item-val" style="color: #fdba74;">x${formatMultValue(featherLarpMult)}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">💊 Вітамінний множник 70 ск. (Lv.${s.mergeLarpMultLvl || 0})</div>
                        <div class="alm-mult-item-val" style="color: #fb7185;">x${formatMultValue(mergeLarpMult)}</div>
                    </div>
                </div>

                <div class="alm-mult-section-title">Множники ресурсів та характеристики</div>
                <div class="alm-mult-grid">
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">❄️ Множник збору сніжинок</div>
                        <div class="alm-mult-item-val" style="color: #38bdf8;">x${snowMult}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">🗑️ Множник прибирання сміття</div>
                        <div class="alm-mult-item-val" style="color: #4ade80;">x${trashMult}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">🪶 Множник дропу пір'я</div>
                        <div class="alm-mult-item-val" style="color: #fdba74;">x${formatMultValue(featherMult)}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">💊 Множник вітамінів</div>
                        <div class="alm-mult-item-val" style="color: #fb7185;">x${formatMultValue(vitaminMult)}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">✨ Шанс золотих (❄️ / 🗑️)</div>
                        <div class="alm-mult-item-val" style="color: #facc15;">${getGoldSnowChancePct()}% / ${getGoldTrashChancePct()}%</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">💎 Шанс смарагдових (❄️ / 🗑️)</div>
                        <div class="alm-mult-item-val" style="color: #34d399;">${getEmeraldSnowChancePct()}% / ${getEmeraldTrashChancePct()}%</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">⚔️ Урон по мобах / Спавн</div>
                        <div class="alm-mult-item-val" style="color: #fca5a5;">${getChickenClickDamage()} HP / ${formatDurationUk(getChickenRespawnDurationSec())}</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">🏃 Швидкість персонажа</div>
                        <div class="alm-mult-item-val" style="color: #facc15;">x${moveSpeed} (+${(s.stepSpeedLvl || 0)}%)</div>
                    </div>
                    <div class="alm-mult-item">
                        <div class="alm-mult-item-name">🌙 Офлайн-фарм Ларпів</div>
                        <div class="alm-mult-item-val" style="color: #c084fc;">${offlinePct}%</div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderLeaderboardTabHtml() {
        return `
            <div class="alm-room-card">
                <div class="alm-room-header">
                    <div class="alm-room-icon" style="border-color: #facc15;">🏆</div>
                    <div>
                        <div class="alm-room-title">Онлайн Топ Аура Ларп Монстер</div>
                        <div class="alm-room-subtitle">Автоматичне оновлення в реальному часі кожні 3 сек</div>
                    </div>
                </div>

                <div class="alm-lb-subtabs">
                    <button class="alm-lb-pill ${activeLeaderboardType === 'highestStep' ? 'active' : ''}"
                            onclick="window.switchAuraLarpLeaderboardType('highestStep')">
                        🪜 Найвища сходинка
                    </button>
                    <button class="alm-lb-pill ${activeLeaderboardType === 'larpPerSec' ? 'active' : ''}"
                            onclick="window.switchAuraLarpLeaderboardType('larpPerSec')">
                        ⚡ Ларпів / сек
                    </button>
                    <button class="alm-lb-pill ${activeLeaderboardType === 'totalLarp' ? 'active' : ''}"
                            onclick="window.switchAuraLarpLeaderboardType('totalLarp')">
                        👑 Усього ларпів
                    </button>
                </div>

                <div id="alm-leaderboard-list" class="alm-leaderboard-list">
                    <div style="text-align: center; color: #94a3b8; padding: 24px;">Завантаження рейтингу...</div>
                </div>
            </div>
        `;
    }

    function renderAuraLarpMonsterUI(autoScrollToPlayer) {
        const container = document.getElementById('tab-aura-larp');
        if (!container) return;

        const s = initAuraLarpMonsterState();
        const nextStep = s.maxUnlockedStep + 1;
        const nextStepObj = nextStep <= MAX_STEP ? STAIRS_CONFIG.find(item => item.step === nextStep) : null;
        const offlinePct = getOfflineLarpPercent();

        let networkBannerHtml = '';
        if (offlinePct > 0 && noInternetError) {
            networkBannerHtml = `
                <div class="alm-offline-banner error">
                    <span>⚠️ <b>Немає підключення до інтернету!</b> Офлайн-фарм (${offlinePct}%) синхронізується після підключення до мережі.</span>
                    <button class="alm-retry-btn" onclick="window.retryAuraLarpGlobalTime()">🔄 Оновити</button>
                </div>
            `;
        } else if (offlinePct > 0 && isCheckingGlobalTime) {
            networkBannerHtml = `
                <div class="alm-offline-banner">
                    <span>🌐 Перевірка глобального часу та офлайн-прогресу (${offlinePct}%)...</span>
                </div>
            `;
        } else if (offlineRewardReport) {
            networkBannerHtml = `
                <div class="alm-offline-banner reward">
                    <div>
                        🌙 <b>Офлайн-заробіток (${offlineRewardReport.offlinePct}% від ${offlineRewardReport.highestStep || getHighestUnlockedStepNumber()} ск.)!</b> Поки вас не було (${formatDurationUk(offlineRewardReport.elapsedSec)}), накопичено:
                        <b style="color:#4ade80;">+${formatLarpValue(offlineRewardReport.earnedOffline)} ${pluralizeLarp(offlineRewardReport.earnedOffline)}</b>
                    </div>
                    <button class="alm-retry-btn" onclick="window.dismissAuraLarpOfflineReport()">OK</button>
                </div>
            `;
        }

        let contentHtml = '';
        if (activeLarpSubTab === 'stairs') {
            let rowsHtml = '';
            for (let stepNum = MAX_STEP; stepNum >= 1; stepNum--) {
                const st = STAIRS_CONFIG[stepNum - 1];
                const isUnlocked = stepNum <= s.maxUnlockedStep;
                const isNext = stepNum === s.maxUnlockedStep + 1;
                const isCurrent = stepNum === s.currentStep && s.currentStep === s.targetStep;
                const isTarget = stepNum === s.targetStep && s.currentStep !== s.targetStep;
                const hasRoom = ROOM_STEPS.includes(stepNum);

                let rowStateClass = 'locked';
                if (isUnlocked) rowStateClass = 'unlocked';
                else if (isNext) rowStateClass = 'next-unlock';

                if (isCurrent) rowStateClass += ' current-step';
                if (isTarget) rowStateClass += ' target-step';

                let actionText = '🔒';
                if (isCurrent) actionText = 'ВИ ТУТ';
                else if (isTarget) actionText = 'ЙДЕМО...';
                else if (isUnlocked) actionText = 'ПЕРЕЙТИ';
                else if (isNext) actionText = `ВІДКРИТИ (${formatLarpValue(st.cost)})`;

                const leftPct = STEP_BASE_LEFT + (stepNum - 1) * STEP_INDENT_PER_LEVEL;

                rowsHtml += `
                    <div class="alm-stair-row ${rowStateClass}" data-step="${stepNum}" onclick="window.moveAuraLarpToStep(${stepNum})">
                        <div class="alm-step-bar" style="left: ${leftPct}%; width: ${STEP_BAR_WIDTH}%;">
                            <div class="alm-step-left">
                                <span class="alm-step-num">${stepNum}</span>
                                <span class="alm-step-mult">x${formatMultValue(st.mult)}</span>
                            </div>
                            <div class="alm-step-action">${actionText}</div>
                        </div>
                        ${hasRoom ? `
                            <button class="alm-room-door-btn ${isUnlocked ? 'open' : 'closed'}"
                                    title="Кімната ${stepNum}-ї сходинки"
                                    onclick="event.stopPropagation(); window.openAuraLarpRoomAtStep(${stepNum});">
                                ${isUnlocked ? '🚪 Кімната' : '🔒 Кімната'}
                            </button>
                        ` : ''}
                    </div>
                `;
            }

            const totalTrackHeight = MAX_STEP * ROW_HEIGHT + 70;
            const visStep = getVisualStepPosition();
            const charLeftPct = STEP_BASE_LEFT + (visStep - 1) * STEP_INDENT_PER_LEVEL + STEP_BAR_WIDTH * 0.5;
            const charBottomPx = (visStep - 1) * ROW_HEIGHT + 30;
            const isMoving = s.currentStep !== s.targetStep;

            contentHtml = `
                <div class="alm-stairs-viewport" id="alm-stairs-viewport">
                    <div class="alm-stairs-track" id="alm-stairs-track" style="height: ${totalTrackHeight}px;">
                        ${rowsHtml}
                        <div id="alm-character" class="alm-character ${isMoving ? 'is-moving' : ''}" style="left: ${charLeftPct}%; bottom: ${charBottomPx}px;">
                            <div id="alm-char-status" class="alm-char-status">${isMoving ? `🏃 На ${s.targetStep}` : `⚡ ${s.currentStep}`}</div>
                            <div class="alm-char-avatar">🐷</div>
                        </div>
                    </div>
                </div>

                <div class="alm-bottom-panel">
                    <button id="alm-unlock-btn" class="alm-unlock-btn"
                            ${!nextStepObj || s.larp < nextStepObj.cost ? 'disabled' : ''}
                            onclick="window.unlockNextAuraLarpStep()">
                        ${nextStepObj
                            ? `⬆️ Відкрити ${nextStep} сходинку (x${formatMultValue(nextStepObj.mult)}) — ${formatLarpValue(nextStepObj.cost)} ${pluralizeLarp(nextStepObj.cost)}`
                            : '🏆 Усі 100 сходинок відкрито!'}
                    </button>
                </div>
            `;
        } else if (activeLarpSubTab === 'room') {
            contentHtml = renderRoomTabHtml(s);
        } else if (activeLarpSubTab === 'multipliers') {
            contentHtml = renderMultipliersTabHtml(s);
        } else {
            contentHtml = renderLeaderboardTabHtml();
        }

        container.innerHTML = `
            <div class="alm-wrapper">
                ${networkBannerHtml}

                <div class="alm-header-card">
                    <div class="alm-larp-main-row">
                        <div class="alm-larp-balance-box">
                            <span class="alm-larp-icon">🔮</span>
                            <span id="alm-larp-balance" class="alm-larp-amount">${formatLarpValue(s.larp)}</span>
                            <span id="alm-larp-word" class="alm-larp-label">${pluralizeLarp(s.larp)}</span>
                        </div>
                        <div id="alm-larp-rate" class="alm-larp-rate">+${formatMultValue(getLarpPerSecond())}/сек</div>
                    </div>

                    <div class="alm-stats-chips">
                        <div class="alm-chip">
                            🪜 Сходинка: <b id="alm-step-badge">${s.currentStep} / ${MAX_STEP}</b>
                        </div>
                        <div class="alm-chip">
                            📈 Сходи: <b id="alm-stair-mult-val" style="color: #facc15;">x${formatMultValue(getStairMultiplier())}</b>
                        </div>
                        <div class="alm-chip">
                            🚪 Кімната 10: <b id="alm-room-mult-val" style="color: #38bdf8;">x${formatMultValue(getRoomLarpMultiplier())}</b>
                        </div>
                        <div class="alm-chip">
                            ✨ Разом: <b id="alm-total-mult-val" style="color: #4ade80;">x${formatMultValue(getTotalLarpMultiplier())}</b>
                        </div>
                    </div>
                </div>

                <div class="alm-subtabs">
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'stairs' ? 'active' : ''}" onclick="window.switchAuraLarpSubTab('stairs')">
                        🪜 Сходи (${s.maxUnlockedStep}/${MAX_STEP})
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'room' ? 'active' : ''}" onclick="window.switchAuraLarpSubTab('room')">
                        🚪 Кімнати (${activeRoomStep})
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'multipliers' ? 'active' : ''}" onclick="window.switchAuraLarpSubTab('multipliers')">
                        📊 Усі множники
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'leaderboard' ? 'active' : ''}" onclick="window.switchAuraLarpSubTab('leaderboard')">
                        🏆 Топи
                    </button>
                </div>

                ${contentHtml}
            </div>
        `;

        if (activeLarpSubTab === 'stairs') {
            updateAllDynamicElements(false, autoScrollToPlayer);
        } else if (activeLarpSubTab === 'room') {
            if (activeRoomStep === 20) {
                const zoneEl = document.getElementById('alm-snow-zone');
                if (zoneEl && s.maxUnlockedStep >= 20) {
                    zoneEl.innerHTML = '';
                    activeSnowflakes.forEach(flake => {
                        zoneEl.appendChild(createSnowflakeElement(flake));
                    });
                    zoneEl.addEventListener('touchmove', handleSnowZoneTouchMove, { passive: true });
                }
                renderSnowLeaderboardList();
            } else if (activeRoomStep === 30) {
                const zoneEl = document.getElementById('alm-trash-zone');
                if (zoneEl && s.maxUnlockedStep >= 30) {
                    const binHtml = `
                        <div id="alm-trash-bin" class="alm-trash-bin">
                            <span class="alm-trash-bin-icon">🗑️</span>
                            <span class="alm-trash-bin-label">СМІТНИК</span>
                        </div>
                    `;
                    zoneEl.innerHTML = binHtml;
                    activeTrashItems.forEach(item => {
                        zoneEl.appendChild(createTrashElement(item));
                    });
                }
                renderTrashLeaderboardList();
            } else if (activeRoomStep === 50) {
                renderFeatherLeaderboardList();
            } else if (activeRoomStep === 70) {
                const zoneEl = document.getElementById('alm-merge-zone');
                if (zoneEl && s.maxUnlockedStep >= 70) {
                    zoneEl.innerHTML = '';
                    activeMergeItems.forEach(item => {
                        zoneEl.appendChild(createMergeElement(item));
                    });
                }
                renderVitaminLeaderboardList();
            }
        } else if (activeLarpSubTab === 'leaderboard') {
            renderLarpLeaderboardList();
        }
    }

    // ------------------------------------------
    // ПЕРЕМИКАННЯ НАВІГАЦІЇ ТА ІНТЕГРАЦІЯ В DOM
    // ------------------------------------------
    function updateNavVisibility() {
        const nav = document.querySelector('.tab-nav');
        if (!nav) return;

        const homeBtn = document.getElementById('alm-nav-home');
        const allTabBtns = nav.querySelectorAll('.tab-btn');

        if (isAuraLarpModeActive) {
            allTabBtns.forEach(btn => {
                if (!btn.classList.contains('alm-mode-nav-btn')) {
                    btn.style.display = 'none';
                }
            });
            if (homeBtn) homeBtn.style.display = '';
        } else {
            allTabBtns.forEach(btn => {
                if (!btn.classList.contains('alm-mode-nav-btn')) {
                    btn.style.display = '';
                }
            });
            if (homeBtn) homeBtn.style.display = 'none';
        }
    }

    function enterAuraLarpMonsterMode() {
        ensureDomSetup();
        const s = initAuraLarpMonsterState();
        isAuraLarpModeActive = true;

        activeLarpSubTab = s.savedSubTab || 'stairs';
        activeRoomStep = s.savedRoomStep || 10;

        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        updateNavVisibility();

        const tabContainer = document.getElementById('tab-aura-larp');
        if (tabContainer) {
            tabContainer.classList.add('active');
        }

        persistAuraLarpState(false);
        renderAuraLarpMonsterUI(true);
        startVisualAnimationLoop();

        if (!isGlobalTimeVerified && !isCheckingGlobalTime && isMainGameReady()) {
            verifyGlobalTimeAndApplyOfflineProgress();
        }
    }

    function exitAuraLarpMonsterMode() {
        isAuraLarpModeActive = false;
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
        updateNavVisibility();
        persistAuraLarpState(true);

        if (typeof window.switchTab === 'function') {
            window.switchTab('clicker');
        }
        if (typeof window.updateUI === 'function') {
            window.updateUI();
        }
    }

    function injectStyles() {
        if (document.getElementById('aura-larp-monster-styles')) return;

        const style = document.createElement('style');
        style.id = 'aura-larp-monster-styles';
        style.textContent = `
            #btn-tab-aura-larp {
                border-color: #00d2d3;
                background: linear-gradient(135deg, #16213e, #1a365d);
                color: #7ef9ff;
            }
            #btn-tab-aura-larp.active {
                background: linear-gradient(135deg, #00a8a8, #0077b6);
                color: #fff;
                box-shadow: 0 0 14px rgba(0, 210, 211, 0.75);
            }
            #alm-nav-home {
                flex: 1 1 100%;
                background: linear-gradient(135deg, #2b1d42, #3b1e54);
                border-color: var(--accent-gold);
                color: var(--accent-gold);
                font-size: 0.95rem;
                padding: 11px;
                display: none;
            }
            #alm-nav-home:hover {
                background: var(--accent-gold);
                color: #120e1e;
            }
            #tab-aura-larp {
                padding-bottom: 24px;
            }
            .alm-wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .alm-offline-banner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                background: rgba(15, 23, 42, 0.9);
                border: 1px solid rgba(56, 189, 248, 0.45);
                border-radius: 12px;
                padding: 9px 12px;
                font-size: 0.8rem;
                color: #e2e8f0;
            }
            .alm-offline-banner.error {
                background: rgba(127, 29, 29, 0.35);
                border-color: #ef4444;
                color: #fecaca;
            }
            .alm-offline-banner.reward {
                background: rgba(6, 78, 59, 0.45);
                border-color: #22c55e;
                color: #dcfce7;
            }
            .alm-retry-btn {
                padding: 5px 10px;
                border-radius: 8px;
                border: 1px solid rgba(255,255,255,0.25);
                background: rgba(255,255,255,0.12);
                color: #fff;
                font-size: 0.76rem;
                font-weight: 800;
                cursor: pointer;
                white-space: nowrap;
            }
            .alm-header-card {
                background: linear-gradient(145deg, #1b1530, #231942);
                border: 2px solid #00d2d3;
                border-radius: 16px;
                padding: 12px 14px;
                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
            }
            .alm-larp-main-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 10px;
            }
            .alm-larp-balance-box {
                display: flex;
                align-items: baseline;
                gap: 6px;
                flex-wrap: wrap;
            }
            .alm-larp-icon {
                font-size: 1.4rem;
            }
            .alm-larp-amount {
                font-size: 1.65rem;
                font-weight: 900;
                color: #7ef9ff;
                text-shadow: 0 0 10px rgba(0, 210, 211, 0.5);
            }
            .alm-larp-label {
                font-size: 0.95rem;
                font-weight: 700;
                color: #cbd5e1;
            }
            .alm-larp-rate {
                background: rgba(34, 197, 94, 0.16);
                border: 1px solid #22c55e;
                color: #4ade80;
                font-weight: 800;
                font-size: 0.85rem;
                padding: 5px 10px;
                border-radius: 999px;
                white-space: nowrap;
            }
            .alm-stats-chips {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 6px;
            }
            .alm-chip {
                background: rgba(0, 0, 0, 0.32);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 10px;
                padding: 6px 10px;
                font-size: 0.78rem;
                color: #e2e8f0;
                text-align: center;
            }
            .alm-subtabs {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 6px;
                width: 100%;
            }
            .alm-subtab-btn {
                padding: 9px 4px;
                background: var(--card-bg);
                border: 1px solid rgba(0, 210, 211, 0.45);
                color: #cbd5e1;
                border-radius: 10px;
                font-weight: bold;
                font-size: 0.76rem;
                cursor: pointer;
                transition: all 0.2s;
                text-align: center;
            }
            .alm-subtab-btn.active {
                background: linear-gradient(135deg, #00a8a8, #0284c7);
                color: #fff;
                border-color: #7ef9ff;
                box-shadow: 0 0 10px rgba(0, 210, 211, 0.45);
            }
            .alm-stairs-viewport {
                width: 100%;
                height: 365px;
                overflow-y: auto;
                overflow-x: hidden;
                background: radial-gradient(circle at top, #1b1736 0%, #0f0c1d 100%);
                border: 2px solid rgba(155, 89, 182, 0.55);
                border-radius: 16px;
                position: relative;
                box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.75);
                scroll-behavior: smooth;
            }
            .alm-stairs-track {
                position: relative;
                width: 100%;
                padding: 16px 0;
            }
            .alm-stair-row {
                position: relative;
                height: ${ROW_HEIGHT}px;
                width: 100%;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .alm-step-bar {
                position: absolute;
                height: 36px;
                border-radius: 10px;
                padding: 0 8px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 4px;
                transition: transform 0.12s, box-shadow 0.15s, border-color 0.15s;
            }
            .alm-stair-row.unlocked .alm-step-bar {
                background: linear-gradient(90deg, #2b214d, #3b2d6b);
                border: 2px solid #8b5cf6;
                color: #fff;
            }
            .alm-stair-row.unlocked:hover .alm-step-bar {
                transform: translateY(-1px);
                border-color: #c4b5fd;
            }
            .alm-stair-row.current-step .alm-step-bar {
                background: linear-gradient(90deg, #0f766e, #0284c7);
                border: 2px solid #5eead4;
                box-shadow: 0 0 12px rgba(45, 212, 191, 0.55);
            }
            .alm-stair-row.target-step .alm-step-bar {
                border: 2px dashed #facc15;
            }
            .alm-stair-row.next-unlock .alm-step-bar {
                background: linear-gradient(90deg, #292218, #3d311c);
                border: 2px dashed #f59e0b;
                color: #fde68a;
            }
            .alm-stair-row.locked .alm-step-bar {
                background: rgba(255, 255, 255, 0.04);
                border: 1px solid rgba(255, 255, 255, 0.09);
                color: #64748b;
            }
            .alm-step-left {
                display: flex;
                align-items: center;
                gap: 5px;
            }
            .alm-step-num {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 24px;
                height: 20px;
                padding: 0 3px;
                border-radius: 6px;
                background: rgba(0, 0, 0, 0.35);
                font-weight: 900;
                font-size: 0.72rem;
            }
            .alm-step-mult {
                font-weight: 800;
                font-size: 0.76rem;
                color: #facc15;
            }
            .alm-stair-row.locked .alm-step-mult {
                color: #64748b;
            }
            .alm-step-action {
                font-size: 0.65rem;
                font-weight: 800;
                letter-spacing: 0.2px;
                opacity: 0.92;
                white-space: nowrap;
            }
            .alm-room-door-btn {
                position: absolute;
                right: 8px;
                padding: 5px 8px;
                border-radius: 8px;
                font-size: 0.7rem;
                font-weight: 800;
                cursor: pointer;
                z-index: 5;
                transition: transform 0.12s;
            }
            .alm-room-door-btn.open {
                background: linear-gradient(135deg, #f59e0b, #d97706);
                border: 1px solid #fef08a;
                color: #111827;
                box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
            }
            .alm-room-door-btn.closed {
                background: rgba(30, 41, 59, 0.85);
                border: 1px solid rgba(148, 163, 184, 0.3);
                color: #94a3b8;
            }
            .alm-room-door-btn:hover {
                transform: scale(1.05);
            }
            .alm-character {
                position: absolute;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                align-items: center;
                pointer-events: none;
                z-index: 15;
                will-change: left, bottom;
            }
            .alm-char-status {
                background: rgba(15, 23, 42, 0.92);
                border: 1px solid #38bdf8;
                color: #7dd3fc;
                font-size: 0.65rem;
                font-weight: 800;
                padding: 2px 6px;
                border-radius: 999px;
                margin-bottom: 2px;
                white-space: nowrap;
            }
            .alm-char-avatar {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                background: radial-gradient(circle at 30% 30%, #fde047, #f59e0b);
                border: 2px solid #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7), 0 0 12px rgba(250, 204, 21, 0.7);
            }
            .alm-character.is-moving .alm-char-avatar {
                animation: almHop 0.35s infinite alternate ease-in-out;
            }
            @keyframes almHop {
                0% { transform: translateY(0) scale(1); }
                100% { transform: translateY(-6px) scale(1.06); }
            }
            .alm-bottom-panel {
                width: 100%;
            }
            .alm-unlock-btn {
                width: 100%;
                padding: 13px 16px;
                border: none;
                border-radius: 14px;
                font-size: 0.92rem;
                font-weight: 900;
                color: #fff;
                background: linear-gradient(180deg, #10b981, #059669);
                box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
                cursor: pointer;
                transition: transform 0.1s, opacity 0.2s;
            }
            .alm-unlock-btn:active:not(:disabled) {
                transform: scale(0.98);
            }
            .alm-unlock-btn:disabled {
                background: #334155;
                color: #94a3b8;
                box-shadow: none;
                cursor: not-allowed;
            }

            /* Перемикач кімнат */
            .alm-room-selector {
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
                margin-bottom: 4px;
            }
            .alm-room-pill {
                flex: 1 1 30%;
                padding: 8px 6px;
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.14);
                background: rgba(15, 23, 42, 0.7);
                color: #cbd5e1;
                font-size: 0.74rem;
                font-weight: 800;
                cursor: pointer;
                transition: all 0.15s;
            }
            .alm-room-pill.active {
                background: linear-gradient(135deg, #2563eb, #0284c7);
                border-color: #7dd3fc;
                color: #fff;
                box-shadow: 0 0 10px rgba(56, 189, 248, 0.45);
            }
            .alm-room-pill.locked {
                opacity: 0.65;
            }

            /* Кімната */
            .alm-room-card {
                background: var(--card-bg);
                border: 2px solid rgba(0, 210, 211, 0.35);
                border-radius: 16px;
                padding: 14px;
                width: 100%;
                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
            }
            .alm-room-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 12px;
            }
            .alm-room-icon {
                font-size: 2rem;
                width: 48px;
                height: 48px;
                border-radius: 12px;
                background: rgba(245, 158, 11, 0.15);
                border: 2px solid #f59e0b;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
            .alm-room-title {
                font-size: 1rem;
                font-weight: 900;
                color: #fff;
            }
            .alm-room-subtitle {
                font-size: 0.8rem;
                color: #94a3b8;
            }
            .alm-room-alert {
                border-radius: 12px;
                padding: 10px 12px;
                font-size: 0.82rem;
                margin-bottom: 12px;
                line-height: 1.4;
            }
            .alm-room-alert.locked {
                background: rgba(239, 68, 68, 0.14);
                border: 1px solid rgba(239, 68, 68, 0.45);
                color: #fca5a5;
            }
            .alm-room-alert.warning {
                background: rgba(245, 158, 11, 0.14);
                border: 1px solid rgba(245, 158, 11, 0.45);
                color: #fde68a;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .alm-room-alert.ready {
                background: rgba(34, 197, 94, 0.14);
                border: 1px solid rgba(34, 197, 94, 0.45);
                color: #86efac;
            }
            .alm-mini-go-btn {
                align-self: flex-start;
                padding: 6px 12px;
                border-radius: 8px;
                border: 1px solid #facc15;
                background: rgba(250, 204, 21, 0.2);
                color: #fef08a;
                font-weight: 800;
                font-size: 0.78rem;
                cursor: pointer;
            }
            .alm-upgrades-stack {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .alm-upgrade-box {
                background: rgba(0, 0, 0, 0.28);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 14px;
                padding: 12px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .alm-upg-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 8px;
            }
            .alm-upg-name {
                font-weight: 800;
                font-size: 0.92rem;
                color: #fff;
            }
            .alm-upg-lvl {
                background: var(--accent-purple);
                color: #fff;
                font-size: 0.72rem;
                font-weight: 800;
                padding: 3px 8px;
                border-radius: 8px;
                white-space: nowrap;
            }
            .alm-upg-desc {
                font-size: 0.84rem;
                color: #e2e8f0;
            }
            .alm-upg-note {
                font-size: 0.75rem;
                color: #94a3b8;
            }
            .alm-upg-buy-btn {
                width: 100%;
                padding: 11px;
                border: none;
                border-radius: 10px;
                background: linear-gradient(180deg, #f59e0b, #d97706);
                color: #111827;
                font-weight: 900;
                font-size: 0.88rem;
                cursor: pointer;
                transition: transform 0.1s;
            }
            .alm-upg-buy-btn.snow-btn {
                background: linear-gradient(180deg, #38bdf8, #0284c7);
                color: #fff;
            }
            .alm-upg-buy-btn.trash-btn {
                background: linear-gradient(180deg, #22c55e, #15803d);
                color: #fff;
            }
            .alm-upg-buy-btn.feather-btn {
                background: linear-gradient(180deg, #fb923c, #ea580c);
                color: #fff;
            }
            .alm-upg-buy-btn.vitamin-btn {
                background: linear-gradient(180deg, #fb7185, #e11d48);
                color: #fff;
            }
            .alm-upg-buy-btn:active:not(:disabled) {
                transform: scale(0.98);
            }
            .alm-upg-buy-btn:disabled {
                background: #334155;
                color: #94a3b8;
                cursor: not-allowed;
            }

            /* Бойова Арена 50 сходинки (Курочка) */
            .alm-chicken-arena {
                position: relative;
                width: 100%;
                min-height: 215px;
                border-radius: 14px;
                background: radial-gradient(circle at center, #3b1d14 0%, #1c1017 100%);
                border: 2px solid rgba(251, 146, 60, 0.55);
                padding: 12px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                overflow: hidden;
            }
            .alm-chicken-arena.locked {
                opacity: 0.7;
            }
            .alm-mob-title-row {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6px;
                flex-wrap: wrap;
            }
            .alm-mob-name {
                font-weight: 900;
                font-size: 0.92rem;
                color: #fed7aa;
            }
            .alm-mob-reward-tag {
                font-size: 0.76rem;
                font-weight: 800;
                color: #fdba74;
                background: rgba(251, 146, 60, 0.16);
                border: 1px solid rgba(251, 146, 60, 0.45);
                padding: 2px 8px;
                border-radius: 999px;
            }
            .alm-chicken-hp-wrap {
                position: relative;
                width: 100%;
                height: 22px;
                border-radius: 11px;
                background: rgba(0, 0, 0, 0.55);
                border: 1px solid rgba(248, 113, 113, 0.6);
                overflow: hidden;
            }
            .alm-chicken-hp-fill {
                height: 100%;
                background: linear-gradient(90deg, #dc2626, #f97316);
                transition: width 0.08s ease-out;
            }
            .alm-chicken-hp-text {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.76rem;
                font-weight: 900;
                color: #fff;
                text-shadow: 0 1px 2px #000;
            }
            .alm-chicken-mob-btn {
                width: 165px;
                height: 125px;
                border-radius: 20px;
                border: 2px solid #fb923c;
                background: radial-gradient(circle at 50% 35%, rgba(251, 146, 60, 0.28), rgba(15, 23, 42, 0.85));
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 6px;
                cursor: pointer;
                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.55);
                transition: transform 0.07s;
                touch-action: manipulation;
            }
            .alm-chicken-mob-btn:active:not(:disabled) {
                transform: scale(0.92);
            }
            .alm-chicken-mob-btn:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
            .alm-chicken-mob-btn.hit {
                animation: almChickenHit 0.16s ease-out;
            }
            @keyframes almChickenHit {
                0% { transform: scale(1) rotate(0deg); }
                40% { transform: scale(0.9) rotate(-6deg); }
                80% { transform: scale(1.04) rotate(4deg); }
                100% { transform: scale(1) rotate(0deg); }
            }
            .alm-chicken-emoji {
                font-size: 3.4rem;
                line-height: 1;
                filter: drop-shadow(0 4px 8px rgba(0,0,0,0.65));
            }
            .alm-chicken-hit-hint {
                font-size: 0.72rem;
                font-weight: 900;
                color: #fef08a;
            }
            .alm-chicken-respawn-box {
                text-align: center;
                padding: 12px;
            }
            .alm-respawn-countdown {
                font-size: 1.5rem;
                font-weight: 900;
                color: #38bdf8;
                margin-top: 6px;
                text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
            }
            .alm-dmg-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                color: #fca5a5;
                font-weight: 900;
                font-size: 0.95rem;
                text-shadow: 0 1px 4px #000;
                pointer-events: none;
                z-index: 25;
                animation: almSnowFloat 0.6s ease-out forwards;
            }
            .alm-feather-loot-pop {
                position: absolute;
                left: 50%;
                top: 45%;
                transform: translate(-50%, -50%);
                color: #fdba74;
                font-weight: 900;
                font-size: 1.2rem;
                background: rgba(15, 23, 42, 0.9);
                border: 1px solid #fb923c;
                padding: 6px 14px;
                border-radius: 999px;
                pointer-events: none;
                z-index: 30;
                animation: almSnowFloat 1.1s ease-out forwards;
            }

            /* Кімната 20 / 30 / 50 / 70: Зона інтерактиву + бічний топ */
            .alm-room20-layout {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 100%;
            }
            @media (min-width: 500px) {
                .alm-room20-layout {
                    flex-direction: row;
                    align-items: flex-start;
                }
                .alm-room20-main {
                    flex: 1 1 64%;
                    min-width: 0;
                }
                .alm-snow-side-lb {
                    flex: 1 1 36%;
                    min-width: 175px;
                }
            }
            .alm-snow-stats-bar {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
                margin-bottom: 10px;
            }
            .alm-snow-stat-item {
                background: rgba(14, 116, 144, 0.2);
                border: 1px solid rgba(56, 189, 248, 0.35);
                border-radius: 10px;
                padding: 7px 10px;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }
            .alm-snow-stat-label {
                font-size: 0.7rem;
                color: #bae6fd;
            }
            .alm-snow-stat-val {
                font-size: 1rem;
                font-weight: 900;
                color: #38bdf8;
            }
            .alm-snow-zone-wrap {
                margin-bottom: 12px;
            }
            .alm-snow-zone-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 6px;
                font-size: 0.74rem;
                color: #cbd5e1;
                margin-bottom: 6px;
            }
            .alm-snow-badge {
                background: rgba(56, 189, 248, 0.2);
                border: 1px solid rgba(56, 189, 248, 0.5);
                color: #7dd3fc;
                font-weight: 800;
                padding: 2px 8px;
                border-radius: 999px;
                white-space: nowrap;
            }
            .alm-snow-zone {
                position: relative;
                width: 100%;
                height: 185px;
                border-radius: 14px;
                background: radial-gradient(circle at top, #0c2d48 0%, #091526 100%);
                border: 2px solid rgba(56, 189, 248, 0.55);
                overflow: hidden;
                touch-action: none;
                box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.65);
            }
            .alm-snow-zone.locked {
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.65;
            }
            .alm-snow-locked-msg {
                color: #94a3b8;
                font-weight: 800;
                font-size: 0.9rem;
            }
            .alm-snowflake-item {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 1.55rem;
                cursor: pointer;
                filter: drop-shadow(0 0 6px rgba(125, 211, 252, 0.85));
                transition: transform 0.08s;
                animation: almSnowPulse 1.6s infinite alternate ease-in-out;
                line-height: 1;
                padding: 4px;
            }
            .alm-snowflake-item.gold {
                filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.95)) sepia(1) saturate(6) hue-rotate(5deg);
            }
            .alm-snowflake-item.emerald {
                filter: drop-shadow(0 0 9px rgba(52, 211, 153, 0.95)) sepia(1) saturate(6) hue-rotate(95deg);
            }
            .alm-snowflake-item:hover {
                transform: translate(-50%, -50%) scale(1.22);
            }
            @keyframes almSnowPulse {
                0% { transform: translate(-50%, -50%) scale(0.95) rotate(-6deg); }
                100% { transform: translate(-50%, -50%) scale(1.08) rotate(6deg); }
            }
            .alm-snow-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                color: #7dd3fc;
                font-weight: 900;
                font-size: 0.85rem;
                text-shadow: 0 1px 4px #000;
                pointer-events: none;
                animation: almSnowFloat 0.65s ease-out forwards;
                white-space: nowrap;
            }
            .alm-snow-pop.gold {
                color: #facc15;
            }
            .alm-snow-pop.emerald {
                color: #34d399;
            }
            @keyframes almSnowFloat {
                0% { opacity: 1; transform: translate(-50%, -50%) scale(0.9); }
                100% { opacity: 0; transform: translate(-50%, -140%) scale(1.15); }
            }

            /* Зона прибирання сміття (30 сходинка) */
            .alm-trash-zone {
                position: relative;
                width: 100%;
                height: 215px;
                border-radius: 14px;
                background: radial-gradient(circle at top, #172a22 0%, #0b1612 100%);
                border: 2px solid rgba(74, 222, 128, 0.5);
                overflow: hidden;
                touch-action: none;
                box-shadow: inset 0 0 22px rgba(0, 0, 0, 0.7);
            }
            .alm-trash-zone.locked {
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.65;
            }
            .alm-trash-bin {
                position: absolute;
                left: 50%;
                bottom: 8px;
                transform: translateX(-50%);
                width: 108px;
                height: 46px;
                border-radius: 12px;
                background: linear-gradient(180deg, rgba(34, 197, 94, 0.25), rgba(21, 128, 61, 0.45));
                border: 2px dashed #4ade80;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                pointer-events: none;
                z-index: 2;
                transition: transform 0.12s, background 0.12s, box-shadow 0.12s;
            }
            .alm-trash-bin.bin-highlight {
                transform: translateX(-50%) scale(1.12);
                background: rgba(34, 197, 94, 0.55);
                border-style: solid;
                box-shadow: 0 0 16px rgba(74, 222, 128, 0.75);
            }
            .alm-trash-bin-icon {
                font-size: 1.35rem;
            }
            .alm-trash-bin-label {
                font-size: 0.68rem;
                font-weight: 900;
                color: #dcfce7;
                letter-spacing: 0.5px;
            }
            .alm-trash-item {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 1.65rem;
                cursor: grab;
                z-index: 5;
                padding: 4px;
                line-height: 1;
                filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.75));
                transition: transform 0.08s;
                touch-action: none;
            }
            .alm-trash-item.gold {
                filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.95));
                background: rgba(250, 204, 21, 0.18);
                border: 1px solid rgba(250, 204, 21, 0.65);
                border-radius: 10px;
            }
            .alm-trash-item.emerald {
                filter: drop-shadow(0 0 9px rgba(52, 211, 153, 0.95));
                background: rgba(52, 211, 153, 0.22);
                border: 1px solid rgba(52, 211, 153, 0.75);
                border-radius: 10px;
            }
            .alm-trash-item.dragging {
                cursor: grabbing;
                transform: translate(-50%, -50%) scale(1.25);
                z-index: 20;
            }
            .alm-trash-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                color: #4ade80;
                font-weight: 900;
                font-size: 0.9rem;
                text-shadow: 0 1px 4px #000;
                pointer-events: none;
                z-index: 25;
                animation: almSnowFloat 0.7s ease-out forwards;
                white-space: nowrap;
            }
            .alm-trash-pop.gold {
                color: #facc15;
            }
            .alm-trash-pop.emerald {
                color: #34d399;
            }

            /* Зона об'єднання овочів/фруктів (70 сходинка) */
            .alm-merge-zone {
                position: relative;
                width: 100%;
                height: 225px;
                border-radius: 14px;
                background: radial-gradient(circle at top, #2d1625 0%, #150c18 100%);
                border: 2px solid rgba(251, 113, 133, 0.55);
                overflow: hidden;
                touch-action: none;
                box-shadow: inset 0 0 22px rgba(0, 0, 0, 0.72);
            }
            .alm-merge-zone.locked {
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.65;
            }
            .alm-merge-item {
                position: absolute;
                transform: translate(-50%, -50%);
                width: 44px;
                height: 44px;
                border-radius: 12px;
                background: rgba(30, 27, 46, 0.92);
                border: 2px solid rgba(251, 113, 133, 0.6);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: grab;
                z-index: 5;
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
                transition: transform 0.08s, border-color 0.1s, box-shadow 0.1s;
                touch-action: none;
            }
            .alm-merge-item.dragging {
                cursor: grabbing;
                transform: translate(-50%, -50%) scale(1.2);
                border-color: #facc15;
                z-index: 20;
            }
            .alm-merge-item.merge-target-highlight {
                border-color: #4ade80;
                box-shadow: 0 0 14px rgba(74, 222, 128, 0.85);
                transform: translate(-50%, -50%) scale(1.12);
            }
            .alm-merge-item.merge-pop-in {
                animation: almMergePopIn 0.25s ease-out;
            }
            @keyframes almMergePopIn {
                0% { transform: translate(-50%, -50%) scale(0.5); }
                70% { transform: translate(-50%, -50%) scale(1.18); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }
            .alm-merge-emoji {
                font-size: 1.35rem;
                line-height: 1;
            }
            .alm-merge-lvl-badge {
                font-size: 0.58rem;
                font-weight: 900;
                color: #fda4af;
                margin-top: 1px;
            }
            .alm-merge-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                color: #fda4af;
                font-weight: 900;
                font-size: 0.92rem;
                background: rgba(15, 23, 42, 0.88);
                border: 1px solid #fb7185;
                padding: 3px 9px;
                border-radius: 999px;
                pointer-events: none;
                z-index: 30;
                white-space: nowrap;
                animation: almSnowFloat 0.8s ease-out forwards;
            }

            /* Бічний топ */
            .alm-snow-side-lb {
                background: var(--card-bg);
                border: 2px solid rgba(56, 189, 248, 0.35);
                border-radius: 16px;
                padding: 12px;
                width: 100%;
                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
            }
            .alm-snow-lb-title {
                font-size: 0.92rem;
                font-weight: 900;
                color: #7dd3fc;
                text-align: center;
            }
            .alm-snow-lb-sub {
                font-size: 0.7rem;
                color: #94a3b8;
                text-align: center;
                margin-bottom: 8px;
            }
            .alm-snow-lb-list {
                display: flex;
                flex-direction: column;
                gap: 6px;
                max-height: 360px;
                overflow-y: auto;
            }
            .alm-snow-lb-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6px;
                padding: 7px 9px;
                border-radius: 9px;
                background: rgba(0, 0, 0, 0.28);
                border: 1px solid rgba(255, 255, 255, 0.08);
                font-size: 0.78rem;
            }
            .alm-snow-lb-row.is-player {
                border-color: #38bdf8;
                background: rgba(14, 116, 144, 0.28);
            }
            .alm-snow-lb-rank {
                font-weight: 900;
                color: #facc15;
                min-width: 24px;
            }
            .alm-snow-lb-name {
                flex: 1;
                color: #fff;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .alm-snow-lb-val {
                color: #7dd3fc;
                font-weight: 800;
                white-space: nowrap;
            }

            /* Вкладка Усі множники */
            .alm-mult-total-box {
                background: linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(14, 165, 233, 0.18));
                border: 2px solid #a855f7;
                border-radius: 14px;
                padding: 14px;
                text-align: center;
                margin-bottom: 14px;
            }
            .alm-mult-total-label {
                font-size: 0.82rem;
                color: #e2e8f0;
                margin-bottom: 4px;
            }
            .alm-mult-total-value {
                font-size: 2rem;
                font-weight: 900;
                color: #4ade80;
                text-shadow: 0 0 12px rgba(74, 222, 128, 0.5);
            }
            .alm-mult-total-rate {
                font-size: 0.84rem;
                color: #cbd5e1;
                margin-top: 4px;
            }
            .alm-mult-section-title {
                font-size: 0.8rem;
                font-weight: 800;
                color: #94a3b8;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin: 10px 0 8px 0;
            }
            .alm-mult-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }
            .alm-mult-item {
                background: rgba(0, 0, 0, 0.28);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                padding: 9px 10px;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .alm-mult-item-name {
                font-size: 0.74rem;
                color: #cbd5e1;
            }
            .alm-mult-item-val {
                font-size: 1.05rem;
                font-weight: 900;
            }

            /* Топ */
            .alm-lb-subtabs {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
                margin-bottom: 12px;
            }
            .alm-lb-pill {
                padding: 8px 4px;
                border-radius: 10px;
                border: 1px solid rgba(250, 204, 21, 0.35);
                background: rgba(0, 0, 0, 0.28);
                color: #cbd5e1;
                font-size: 0.73rem;
                font-weight: 800;
                cursor: pointer;
                transition: all 0.15s;
            }
            .alm-lb-pill.active {
                background: linear-gradient(135deg, #f59e0b, #d97706);
                border-color: #fef08a;
                color: #111827;
            }
            .alm-leaderboard-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                max-height: 360px;
                overflow-y: auto;
            }
            .alm-lb-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                padding: 10px 12px;
                border-radius: 12px;
                background: rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.08);
            }
            .alm-lb-row.is-player {
                border: 2px solid var(--accent-gold);
                background: linear-gradient(135deg, #1e1730, #2c1d47);
            }
            .alm-lb-rank {
                font-weight: 900;
                font-size: 1rem;
                color: var(--accent-gold);
                min-width: 34px;
            }
            .alm-lb-name {
                font-weight: 700;
                font-size: 0.9rem;
                color: #fff;
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .alm-lb-val {
                font-weight: 800;
                font-size: 0.85rem;
                color: #4ade80;
                white-space: nowrap;
            }
        `;
        document.head.appendChild(style);
    }

    function ensureDomSetup() {
        injectStyles();

        const nav = document.querySelector('.tab-nav');
        if (nav) {
            if (!document.getElementById('btn-tab-aura-larp')) {
                const mainBtn = document.createElement('button');
                mainBtn.id = 'btn-tab-aura-larp';
                mainBtn.className = 'tab-btn';
                mainBtn.type = 'button';
                mainBtn.innerHTML = '👾 Аура Ларп Монстер';
                mainBtn.onclick = function () {
                    enterAuraLarpMonsterMode();
                };
                nav.appendChild(mainBtn);
            }

            if (!document.getElementById('alm-nav-home')) {
                const homeBtn = document.createElement('button');
                homeBtn.id = 'alm-nav-home';
                homeBtn.className = 'tab-btn alm-mode-nav-btn';
                homeBtn.type = 'button';
                homeBtn.innerHTML = '🏠 Додому';
                homeBtn.onclick = exitAuraLarpMonsterMode;
                nav.appendChild(homeBtn);
            }
        }

        const gameScreen = document.getElementById('game-screen');
        if (gameScreen && !document.getElementById('tab-aura-larp')) {
            const tabDiv = document.createElement('div');
            tabDiv.id = 'tab-aura-larp';
            tabDiv.className = 'tab-content';
            gameScreen.appendChild(tabDiv);
        }
    }

    function hookMainGameFunctions() {
        if (typeof window.switchTab === 'function' && !window.switchTab._auraLarpHooked) {
            const origSwitchTab = window.switchTab;
            window.switchTab = function (tabName) {
                if (isAuraLarpModeActive && tabName !== 'aura-larp') {
                    isAuraLarpModeActive = false;
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                        rafId = null;
                    }
                    updateNavVisibility();
                    persistAuraLarpState(false);
                }
                return origSwitchTab.apply(this, arguments);
            };
            window.switchTab._auraLarpHooked = true;
        }

        if (typeof window.saveGame === 'function' && !window.saveGame._auraLarpHooked) {
            const origSaveGame = window.saveGame;
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
                return origSaveGame.apply(this, arguments);
            };
            window.saveGame._auraLarpHooked = true;
        }
    }

    function handleMainGameReady() {
        const s = initAuraLarpMonsterState();
        ensureDomSetup();
        hookMainGameFunctions();

        if (s.wasActive && !isAuraLarpModeActive) {
            enterAuraLarpMonsterMode();
        } else if (!isGlobalTimeVerified && !isCheckingGlobalTime) {
            verifyGlobalTimeAndApplyOfflineProgress();
        }
    }

    function bootstrapAuraLarpMonster() {
        initAuraLarpMonsterState();
        ensureDomSetup();
        hookMainGameFunctions();

        window.addEventListener('pointerup', () => {
            isPointerSwipingSnow = false;
        });
        window.addEventListener('pointercancel', () => {
            isPointerSwipingSnow = false;
        });

        window.onMainGameLoaded = function () {
            handleMainGameReady();
        };

        lastLarpTickTime = Date.now();
        setInterval(() => {
            const now = Date.now();
            const dt = Math.min(1.0, Math.max(0, (now - lastLarpTickTime) / 1000));
            lastLarpTickTime = now;
            tickAuraLarpLogic(dt);
        }, 100);

        // Автозбереження та синхронізація всіх топів кожні 3 секунди
        setInterval(() => {
            persistAuraLarpState(false);
            syncLarpLeaderboard(false);

            if (isAuraLarpModeActive) {
                if (activeLarpSubTab === 'leaderboard') {
                    renderLarpLeaderboardList();
                } else if (activeLarpSubTab === 'room') {
                    if (activeRoomStep === 20) renderSnowLeaderboardList();
                    else if (activeRoomStep === 30) renderTrashLeaderboardList();
                    else if (activeRoomStep === 50) renderFeatherLeaderboardList();
                    else if (activeRoomStep === 70) renderVitaminLeaderboardList();
                }
            }
        }, 3000);

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                persistAuraLarpState(false);
            } else if (document.visibilityState === 'visible' && isAuraLarpModeActive && isMainGameReady()) {
                verifyGlobalTimeAndApplyOfflineProgress();
            }
        });

        window.addEventListener('beforeunload', () => {
            persistAuraLarpState(false);
        });

        // Якщо основна гра вже встигла завантажитись до запуску bootstrapAuraLarpMonster
        if (isMainGameReady()) {
            handleMainGameReady();
        }
    }

    // Експорт глобальних функцій модуля
    window.enterAuraLarpMonsterMode = enterAuraLarpMonsterMode;
    window.exitAuraLarpMonsterMode = exitAuraLarpMonsterMode;
    window.switchAuraLarpSubTab = switchLarpSubTab;
    window.switchAuraLarpLeaderboardType = switchLeaderboardType;
    window.moveAuraLarpToStep = moveToStep;
    window.unlockNextAuraLarpStep = unlockNextStep;
    window.openAuraLarpRoomAtStep = openRoomAtStep;
    window.buyAuraLarpRoomUpgrade = buyRoomMultiplierUpgrade;
    window.buyAuraLarpSnowMultUpgrade = buySnowMultUpgrade;
    window.buyAuraLarpSnowSpeedUpgrade = buySnowSpeedUpgrade;
    window.buyAuraLarpSnowLarpUpgrade = buySnowLarpUpgrade;
    window.buyAuraLarpTrashMultUpgrade = buyTrashMultUpgrade;
    window.buyAuraLarpTrashSpeedUpgrade = buyTrashSpeedUpgrade;
    window.buyAuraLarpTrashLarpUpgrade = buyTrashLarpUpgrade;
    window.buyAuraLarpStepSpeedUpgrade = buyStepSpeedUpgrade;
    window.buyAuraLarpOfflineUpgrade = buyOfflineLarpUpgrade;
    window.buyAuraLarpFeatherMultUpgrade = buyFeatherMultUpgrade;
    window.buyAuraLarpFeatherLarpUpgrade = buyFeatherLarpUpgrade;
    window.attackAuraLarpChicken = attackChickenMob;
    window.buyAuraLarpGoldSnowUpgrade = buyGoldSnowUpgrade;
    window.buyAuraLarpEmeraldSnowUpgrade = buyEmeraldSnowUpgrade;
    window.buyAuraLarpGoldTrashUpgrade = buyGoldTrashUpgrade;
    window.buyAuraLarpEmeraldTrashUpgrade = buyEmeraldTrashUpgrade;
    window.buyAuraLarpVitaminMultUpgrade = buyVitaminMultUpgrade;
    window.buyAuraLarpMergeLv2Upgrade = buyMergeLv2Upgrade;
    window.buyAuraLarpMergeLarpUpgrade = buyMergeLarpUpgrade;
    window.sellAuraLarpMergeItem = sellHighestOrRandomMergeItem;
    window.activateAuraLarpSnowstorm = activateSnowstorm;
    window.buyAuraLarpStormDurationUpgrade = buyStormDurationUpgrade;
    window.buyAuraLarpStormCooldownUpgrade = buyStormCooldownUpgrade;
    window.buyAuraLarpStormSpeedUpgrade = buyStormSpeedUpgrade;
    window.buyAuraLarpMobDamageUpgrade = buyMobDamageUpgrade;
    window.buyAuraLarpMobRespawnUpgrade = buyMobRespawnUpgrade;
    window.retryAuraLarpGlobalTime = verifyGlobalTimeAndApplyOfflineProgress;
    window.dismissAuraLarpOfflineReport = dismissOfflineReport;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapAuraLarpMonster);
    } else {
        setTimeout(bootstrapAuraLarpMonster, 0);
    }
})();
