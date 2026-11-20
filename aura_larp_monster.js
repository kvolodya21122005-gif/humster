// ==========================================
// ОКРЕМИЙ МОДУЛЬ: АУРА ЛАРП МОНСТЕР (v6)
// Підключення в index.html: <script src="aura_larp_monster-v6.js"></script>
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
    let activeRoomStep = 10; // 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80
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

        if (callMainSave && typeof window.saveGame === 'function') {
            window.saveGame();
        }
    }

    // ------------------------------------------
    // ГЛОБАЛЬНИЙ ЧАС ТА ОФЛАЙН-ПРОГРЕС
    // (Офлайн заробляється враховуючи найвищу відкриту сходинку)
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
        const offlinePct = getOfflineLarpPercent(); // 0% за замовчуванням!

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

        // Офлайн-фарм Ларпів працює враховуючи найвищу відкриту сходинку гравця
        if (offlinePct > 0 && s.lastGlobalTime && globalNowMs > s.lastGlobalTime) {
            const elapsedSec = (globalNowMs - s.lastGlobalTime) / 1000;

            if (elapsedSec >= 2) {
                // Завершуємо пересування персонажа до цільової сходинки за час відсутності
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

                // Офлайн-заробіток розраховується за найвищою відкритою сходинкою
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
        persistAuraLarpState(true);
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

    // Кімната 50 сходинки (Курочка та Пір'я) + вплив прокачок з 80 сходинки
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
        // У топі дохід ларпів рахується за найвищою відкритою сходинкою гравцем
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

            // Окремий прихований топ у базі даних по кількості ларпів на даний момент
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

    // Кімната 80 (Виклик сніжної бурі та прокачки бурі/мобів)
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

        // Візуальний ефект удару та вилітаючої шкоди
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
            hpFill.style.width = `${pct.toFixed(1)}%`;
        }
        if (hpText) {
            hpText.textContent = `${Math.ceil(s.chickenHp)} / ${CHICKEN_MAX_HP} HP`;
        }
        if (balEl) balEl.textContent = formatFeatherValue(s.feathers);
        if (totalEl) totalEl.textContent = formatFeatherValue(s.totalFeathers);

        if (timerEl && s.chickenRespawnEndMs) {
            const remSec = Math.max(0, (s.chickenRespawnEndMs - getCurrentNowMs()) / 1000);
            timerEl.textContent = formatTimerMmSs(remSec);
        }

        const btn1 = document.getElementById('alm-feather-upg-1');
        if (btn1) btn1.disabled = s.feathers < getFeatherMultUpgradeCost();

        const btn2 = document.getElementById('alm-feather-upg-2');
        if (btn2) btn2.disabled = s.feathers < getFeatherLarpUpgradeCost();
    }

    // ------------------------------------------
    // ЛОГІКА СНІЖИНОК (20 СХОДИНКА — ПРОВЕДЕННЯ ПАЛЬЦЕМ)
    // ------------------------------------------
    function rollSnowflakeRarity() {
        const emeraldChance = getEmeraldSnowChancePct() / 100;
        if (emeraldChance > 0 && Math.random() < emeraldChance) {
            return 'emerald';
        }
        const goldChance = getGoldSnowChancePct() / 100;
        if (goldChance > 0 && Math.random() < goldChance) {
            return 'golden';
        }
        return 'normal';
    }

    function spawnSingleSnowflake() {
        if (activeSnowflakes.length >= MAX_SNOWFLAKES) return;

        const rarity = rollSnowflakeRarity();
        const sf = {
            id: nextSnowflakeId++,
            xPct: Number((8 + Math.random() * 84).toFixed(2)),
            yPct: Number((10 + Math.random() * 80).toFixed(2)),
            rarity: rarity
        };
        activeSnowflakes.push(sf);

        const fieldEl = document.getElementById('alm-snow-field');
        if (fieldEl) {
            const el = document.createElement('div');
            el.id = `alm-sf-${sf.id}`;
            el.className = `alm-snowflake-item ${rarity !== 'normal' ? rarity : ''}`;
            el.style.left = `${sf.xPct}%`;
            el.style.top = `${sf.yPct}%`;
            el.textContent = '❄️';
            fieldEl.appendChild(el);
        }

        updateSnowDynamicHud();
    }

    function showFloatingZonePopup(fieldEl, xPx, yPx, text, className) {
        if (!fieldEl) return;
        const pop = document.createElement('div');
        pop.className = className;
        pop.style.left = `${xPx}px`;
        pop.style.top = `${yPx}px`;
        pop.textContent = text;
        fieldEl.appendChild(pop);
        setTimeout(() => {
            if (pop.parentNode) pop.parentNode.removeChild(pop);
        }, 650);
    }

    function collectSnowflakesNearPoint(clientX, clientY) {
        const fieldEl = document.getElementById('alm-snow-field');
        if (!fieldEl || activeSnowflakes.length === 0) return;

        const rect = fieldEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const relX = clientX - rect.left;
        const relY = clientY - rect.top;

        if (relX < -20 || relY < -20 || relX > rect.width + 20 || relY > rect.height + 20) {
            return;
        }

        const HIT_RADIUS_PX = 34;
        const HIT_RADIUS_SQ = HIT_RADIUS_PX * HIT_RADIUS_PX;
        let totalGain = 0;

        for (let i = activeSnowflakes.length - 1; i >= 0; i--) {
            const sf = activeSnowflakes[i];
            const sfX = (sf.xPct / 100) * rect.width;
            const sfY = (sf.yPct / 100) * rect.height;
            const dx = relX - sfX;
            const dy = relY - sfY;

            if (dx * dx + dy * dy <= HIT_RADIUS_SQ) {
                activeSnowflakes.splice(i, 1);

                const sfDom = document.getElementById(`alm-sf-${sf.id}`);
                if (sfDom && sfDom.parentNode) {
                    sfDom.parentNode.removeChild(sfDom);
                }

                const rarityMult = sf.rarity === 'emerald' ? 1000 : (sf.rarity === 'golden' ? 10 : 1);
                const gainPerOne = getSnowMultiplier() * rarityMult;
                totalGain += gainPerOne;

                const popClass = sf.rarity === 'emerald'
                    ? 'alm-snow-pop emerald'
                    : (sf.rarity === 'golden' ? 'alm-snow-pop golden' : 'alm-snow-pop');
                showFloatingZonePopup(fieldEl, sfX, sfY, `+${formatSnowValue(gainPerOne)} ❄️`, popClass);
            }
        }

        if (totalGain > 0) {
            const s = initAuraLarpMonsterState();
            s.snow += totalGain;
            s.totalSnow += totalGain;
            updateSnowDynamicHud();
            syncLarpLeaderboard(false);
        }
    }

    function bindSnowFieldEvents() {
        const fieldEl = document.getElementById('alm-snow-field');
        if (!fieldEl || fieldEl._snowBound) return;
        fieldEl._snowBound = true;

        fieldEl.addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            for (let i = 0; i < e.touches.length; i++) {
                collectSnowflakesNearPoint(e.touches[i].clientX, e.touches[i].clientY);
            }
        }, { passive: false });

        fieldEl.addEventListener('touchmove', (e) => {
            if (e.cancelable) e.preventDefault();
            for (let i = 0; i < e.touches.length; i++) {
                collectSnowflakesNearPoint(e.touches[i].clientX, e.touches[i].clientY);
            }
        }, { passive: false });

        fieldEl.addEventListener('mousedown', (e) => {
            isPointerSwipingSnow = true;
            collectSnowflakesNearPoint(e.clientX, e.clientY);
        });

        fieldEl.addEventListener('mousemove', (e) => {
            if (isPointerSwipingSnow) {
                collectSnowflakesNearPoint(e.clientX, e.clientY);
            }
        });

        window.addEventListener('mouseup', () => {
            isPointerSwipingSnow = false;
        });
    }

    function updateSnowDynamicHud() {
        const s = initAuraLarpMonsterState();

        const balEl = document.getElementById('alm-snow-balance');
        const totalEl = document.getElementById('alm-snow-total');
        const countEl = document.getElementById('alm-snow-active-count');
        const stormBanner = document.getElementById('alm-snow-storm-banner');

        if (balEl) balEl.textContent = formatSnowValue(s.snow);
        if (totalEl) totalEl.textContent = formatSnowValue(s.totalSnow);
        if (countEl) countEl.textContent = `${activeSnowflakes.length} / ${MAX_SNOWFLAKES}`;

        if (stormBanner) {
            if (isSnowstormActive()) {
                const remSec = Math.max(0, (s.stormActiveEndMs - getCurrentNowMs()) / 1000);
                stormBanner.style.display = 'flex';
                stormBanner.textContent = `🌨️ СНІЖНА БУРЯ АКТИВНА! Залишилось: ${formatTimerMmSs(remSec)} (спавн кожні ${getStormSnowSpawnInterval()}с)`;
            } else {
                stormBanner.style.display = 'none';
            }
        }

        const btn1 = document.getElementById('alm-snow-upg-1');
        if (btn1) btn1.disabled = s.snow < getSnowMultUpgradeCost();

        const btn2 = document.getElementById('alm-snow-upg-2');
        if (btn2) {
            const isMax = (s.snowSpeedLvl || 0) >= SNOW_SPEED_MAX_LVL;
            btn2.disabled = isMax || s.snow < getSnowSpeedUpgradeCost();
        }

        const btn3 = document.getElementById('alm-snow-upg-3');
        if (btn3) btn3.disabled = s.snow < getSnowLarpUpgradeCost();
    }

    // ------------------------------------------
    // ЛОГІКА ПРИБИРАННЯ СМІТТЯ (30 СХОДИНКА — ПЕРЕМІЩЕННЯ В ЦЕНТР)
    // ------------------------------------------
    function rollTrashRarity() {
        const emeraldChance = getEmeraldTrashChancePct() / 100;
        if (emeraldChance > 0 && Math.random() < emeraldChance) {
            return 'emerald';
        }
        const goldChance = getGoldTrashChancePct() / 100;
        if (goldChance > 0 && Math.random() < goldChance) {
            return 'golden';
        }
        return 'normal';
    }

    function spawnSingleTrashItem() {
        if (activeTrashItems.length >= MAX_TRASH_ITEMS) return;

        let xPct = 50;
        let yPct = 50;
        for (let tries = 0; tries < 20; tries++) {
            xPct = Number((10 + Math.random() * 80).toFixed(2));
            yPct = Number((12 + Math.random() * 76).toFixed(2));
            const dx = xPct - 50;
            const dy = yPct - 50;
            if (dx * dx + dy * dy >= 18 * 18) break;
        }

        const icon = TRASH_ICONS[Math.floor(Math.random() * TRASH_ICONS.length)];
        const rarity = rollTrashRarity();
        const tr = {
            id: nextTrashId++,
            xPct: xPct,
            yPct: yPct,
            icon: icon,
            rarity: rarity
        };
        activeTrashItems.push(tr);

        const fieldEl = document.getElementById('alm-trash-field');
        if (fieldEl) {
            const el = document.createElement('div');
            el.id = `alm-tr-${tr.id}`;
            el.className = `alm-trash-item ${rarity !== 'normal' ? rarity : ''}`;
            el.style.left = `${tr.xPct}%`;
            el.style.top = `${tr.yPct}%`;
            el.textContent = tr.icon;
            fieldEl.appendChild(el);
        }

        updateTrashDynamicHud();
    }

    function grabTrashAtPoint(clientX, clientY) {
        const fieldEl = document.getElementById('alm-trash-field');
        if (!fieldEl || activeTrashItems.length === 0) return;

        const rect = fieldEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const relX = clientX - rect.left;
        const relY = clientY - rect.top;

        let bestId = null;
        let bestDistSq = 38 * 38;

        for (let i = 0; i < activeTrashItems.length; i++) {
            const tr = activeTrashItems[i];
            const trX = (tr.xPct / 100) * rect.width;
            const trY = (tr.yPct / 100) * rect.height;
            const dSq = (relX - trX) * (relX - trX) + (relY - trY) * (relY - trY);
            if (dSq <= bestDistSq) {
                bestDistSq = dSq;
                bestId = tr.id;
            }
        }

        draggingTrashId = bestId;
        if (draggingTrashId !== null) {
            const dom = document.getElementById(`alm-tr-${draggingTrashId}`);
            if (dom) dom.classList.add('dragging');
        }
    }

    function moveDraggedTrashToPoint(clientX, clientY) {
        if (draggingTrashId === null) return;

        const fieldEl = document.getElementById('alm-trash-field');
        if (!fieldEl) return;

        const idx = activeTrashItems.findIndex(item => item.id === draggingTrashId);
        if (idx === -1) {
            draggingTrashId = null;
            return;
        }

        const rect = fieldEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const relX = Math.max(16, Math.min(rect.width - 16, clientX - rect.left));
        const relY = Math.max(16, Math.min(rect.height - 16, clientY - rect.top));

        const tr = activeTrashItems[idx];
        tr.xPct = Number(((relX / rect.width) * 100).toFixed(2));
        tr.yPct = Number(((relY / rect.height) * 100).toFixed(2));

        const dom = document.getElementById(`alm-tr-${tr.id}`);
        if (dom) {
            dom.style.left = `${tr.xPct}%`;
            dom.style.top = `${tr.yPct}%`;
        }

        const centerX = rect.width * 0.5;
        const centerY = rect.height * 0.5;
        const distCenterSq = (relX - centerX) * (relX - centerX) + (relY - centerY) * (relY - centerY);
        const CENTER_DROP_RADIUS = 46;

        if (distCenterSq <= CENTER_DROP_RADIUS * CENTER_DROP_RADIUS) {
            activeTrashItems.splice(idx, 1);
            draggingTrashId = null;

            if (dom && dom.parentNode) {
                dom.parentNode.removeChild(dom);
            }

            const s = initAuraLarpMonsterState();
            const rarityMult = tr.rarity === 'emerald' ? 1000 : (tr.rarity === 'golden' ? 10 : 1);
            const gain = getTrashMultiplier() * rarityMult;
            s.trash += gain;
            s.totalTrash += gain;

            const popClass = tr.rarity === 'emerald'
                ? 'alm-trash-pop emerald'
                : (tr.rarity === 'golden' ? 'alm-trash-pop golden' : 'alm-trash-pop');
            showFloatingZonePopup(fieldEl, centerX, centerY - 12, `+${formatTrashValue(gain)} 🗑️`, popClass);
            updateTrashDynamicHud();
            syncLarpLeaderboard(false);
        }
    }

    function releaseDraggedTrash() {
        if (draggingTrashId !== null) {
            const dom = document.getElementById(`alm-tr-${draggingTrashId}`);
            if (dom) dom.classList.remove('dragging');
            draggingTrashId = null;
        }
    }

    function bindTrashFieldEvents() {
        const fieldEl = document.getElementById('alm-trash-field');
        if (!fieldEl || fieldEl._trashBound) return;
        fieldEl._trashBound = true;

        fieldEl.addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            if (e.touches.length > 0) {
                grabTrashAtPoint(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: false });

        fieldEl.addEventListener('touchmove', (e) => {
            if (e.cancelable) e.preventDefault();
            if (e.touches.length > 0) {
                moveDraggedTrashToPoint(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: false });

        fieldEl.addEventListener('touchend', () => {
            releaseDraggedTrash();
        });

        fieldEl.addEventListener('touchcancel', () => {
            releaseDraggedTrash();
        });

        fieldEl.addEventListener('mousedown', (e) => {
            grabTrashAtPoint(e.clientX, e.clientY);
        });

        window.addEventListener('mousemove', (e) => {
            if (draggingTrashId !== null) {
                moveDraggedTrashToPoint(e.clientX, e.clientY);
            }
        });

        window.addEventListener('mouseup', () => {
            releaseDraggedTrash();
        });
    }

    function updateTrashDynamicHud() {
        const s = initAuraLarpMonsterState();

        const balEl = document.getElementById('alm-trash-balance');
        const totalEl = document.getElementById('alm-trash-total');
        const countEl = document.getElementById('alm-trash-active-count');

        if (balEl) balEl.textContent = formatTrashValue(s.trash);
        if (totalEl) totalEl.textContent = formatTrashValue(s.totalTrash);
        if (countEl) countEl.textContent = `${activeTrashItems.length} / ${MAX_TRASH_ITEMS}`;

        const btn1 = document.getElementById('alm-trash-upg-1');
        if (btn1) btn1.disabled = s.trash < getTrashMultUpgradeCost();

        const btn2 = document.getElementById('alm-trash-upg-2');
        if (btn2) {
            const isMax = (s.trashSpeedLvl || 0) >= TRASH_SPEED_MAX_LVL;
            btn2.disabled = isMax || s.trash < getTrashSpeedUpgradeCost();
        }

        const btn3 = document.getElementById('alm-trash-upg-3');
        if (btn3) btn3.disabled = s.trash < getTrashLarpUpgradeCost();
    }

    // ------------------------------------------
    // ЛОГІКА ОБ'ЄДНАННЯ ОВОЧІВ ТА ФРУКТІВ (70 СХОДИНКА — ВІТАМІНИ)
    // ------------------------------------------
    function getMergeTierInfo(level) {
        return MERGE_HIERARCHY[Math.min(MERGE_HIERARCHY.length, Math.max(1, level)) - 1];
    }

    function spawnSingleMergeItem() {
        if (activeMergeItems.length >= MAX_MERGE_ITEMS) return;

        let xPct = 50;
        let yPct = 50;
        for (let tries = 0; tries < 25; tries++) {
            xPct = Number((10 + Math.random() * 80).toFixed(2));
            yPct = Number((12 + Math.random() * 76).toFixed(2));
            const tooClose = activeMergeItems.some(other => {
                const dx = other.xPct - xPct;
                const dy = other.yPct - yPct;
                return (dx * dx + dy * dy) < 10 * 10;
            });
            if (!tooClose) break;
        }

        const lv2Chance = getMergeLv2ChancePct() / 100;
        const spawnLevel = (lv2Chance > 0 && Math.random() < lv2Chance) ? 2 : 1;

        const item = {
            id: nextMergeId++,
            xPct: xPct,
            yPct: yPct,
            level: spawnLevel
        };
        activeMergeItems.push(item);

        const fieldEl = document.getElementById('alm-merge-field');
        if (fieldEl) {
            const tier = getMergeTierInfo(item.level);
            const el = document.createElement('div');
            el.id = `alm-mg-${item.id}`;
            el.className = `alm-merge-item lvl-${item.level}`;
            el.style.left = `${item.xPct}%`;
            el.style.top = `${item.yPct}%`;
            el.innerHTML = `<span class="alm-merge-emoji">${tier.icon}</span><span class="alm-merge-badge">${item.level}</span>`;
            fieldEl.appendChild(el);
        }

        updateMergeDynamicHud();
    }

    function grabMergeItemAtPoint(clientX, clientY) {
        const fieldEl = document.getElementById('alm-merge-field');
        if (!fieldEl || activeMergeItems.length === 0) return;

        const rect = fieldEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const relX = clientX - rect.left;
        const relY = clientY - rect.top;

        let bestId = null;
        let bestDistSq = 40 * 40;

        for (let i = 0; i < activeMergeItems.length; i++) {
            const it = activeMergeItems[i];
            const itX = (it.xPct / 100) * rect.width;
            const itY = (it.yPct / 100) * rect.height;
            const dSq = (relX - itX) * (relX - itX) + (relY - itY) * (relY - itY);
            if (dSq <= bestDistSq) {
                bestDistSq = dSq;
                bestId = it.id;
            }
        }

        draggingMergeId = bestId;
        if (draggingMergeId !== null) {
            const dom = document.getElementById(`alm-mg-${draggingMergeId}`);
            if (dom) dom.classList.add('dragging');
        }
    }

    function moveDraggedMergeItemToPoint(clientX, clientY) {
        if (draggingMergeId === null) return;

        const fieldEl = document.getElementById('alm-merge-field');
        if (!fieldEl) return;

        const draggedIdx = activeMergeItems.findIndex(item => item.id === draggingMergeId);
        if (draggedIdx === -1) {
            draggingMergeId = null;
            return;
        }

        const rect = fieldEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const relX = Math.max(20, Math.min(rect.width - 20, clientX - rect.left));
        const relY = Math.max(20, Math.min(rect.height - 20, clientY - rect.top));

        const draggedItem = activeMergeItems[draggedIdx];
        draggedItem.xPct = Number(((relX / rect.width) * 100).toFixed(2));
        draggedItem.yPct = Number(((relY / rect.height) * 100).toFixed(2));

        const dom = document.getElementById(`alm-mg-${draggedItem.id}`);
        if (dom) {
            dom.style.left = `${draggedItem.xPct}%`;
            dom.style.top = `${draggedItem.yPct}%`;
        }
    }

    function releaseDraggedMergeItem() {
        if (draggingMergeId === null) return;

        const fieldEl = document.getElementById('alm-merge-field');
        const draggedIdx = activeMergeItems.findIndex(item => item.id === draggingMergeId);
        const dom = document.getElementById(`alm-mg-${draggingMergeId}`);
        if (dom) dom.classList.remove('dragging');
        draggingMergeId = null;

        if (!fieldEl || draggedIdx === -1) return;

        const rect = fieldEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const draggedItem = activeMergeItems[draggedIdx];
        const dragX = (draggedItem.xPct / 100) * rect.width;
        const dragY = (draggedItem.yPct / 100) * rect.height;

        // Шукаємо інший об'єкт того ж рівня (до 15 рівня включно) поруч для з'єднання
        const MERGE_RADIUS_SQ = 42 * 42;
        let targetIdx = -1;
        let bestDistSq = MERGE_RADIUS_SQ;

        for (let i = 0; i < activeMergeItems.length; i++) {
            if (i === draggedIdx) continue;
            const other = activeMergeItems[i];
            if (other.level !== draggedItem.level) continue;
            if (other.level >= MERGE_HIERARCHY.length) continue; // 16 рівень максимальний

            const ox = (other.xPct / 100) * rect.width;
            const oy = (other.yPct / 100) * rect.height;
            const dSq = (dragX - ox) * (dragX - ox) + (dragY - oy) * (dragY - oy);
            if (dSq <= bestDistSq) {
                bestDistSq = dSq;
                targetIdx = i;
            }
        }

        if (targetIdx !== -1) {
            const targetItem = activeMergeItems[targetIdx];
            const mergedFromLevel = draggedItem.level;
            const newLevel = mergedFromLevel + 1;
            const targetX = (targetItem.xPct / 100) * rect.width;
            const targetY = (targetItem.yPct / 100) * rect.height;

            // Видаляємо перетягнутий елемент з DOM та масиву
            if (dom && dom.parentNode) {
                dom.parentNode.removeChild(dom);
            }
            activeMergeItems.splice(draggedIdx, 1);

            // Оновлюємо цільовий елемент до нового рівня
            targetItem.level = newLevel;
            const newTier = getMergeTierInfo(newLevel);
            const targetDom = document.getElementById(`alm-mg-${targetItem.id}`);
            if (targetDom) {
                targetDom.className = `alm-merge-item lvl-${newLevel} merged-pop`;
                targetDom.innerHTML = `<span class="alm-merge-emoji">${newTier.icon}</span><span class="alm-merge-badge">${newLevel}</span>`;
                setTimeout(() => {
                    targetDom.classList.remove('merged-pop');
                }, 320);
            }

            // Нараховуємо вітаміни: 1 рів. = +2, 2 рів. = +4, 3 рів. = +8, далі вдвічі більше (2^L * множник)
            const s = initAuraLarpMonsterState();
            const baseVitamins = Math.pow(2, mergedFromLevel);
            const gainedVitamins = baseVitamins * getVitaminMultiplier();
            s.vitamins += gainedVitamins;
            s.totalVitamins += gainedVitamins;

            showFloatingZonePopup(
                fieldEl,
                targetX,
                targetY - 14,
                `+${formatVitaminValue(gainedVitamins)} 💊 (${newTier.name})`,
                'alm-vitamin-pop'
            );

            updateMergeDynamicHud();
            syncLarpLeaderboard(false);
        }
    }

    function bindMergeFieldEvents() {
        const fieldEl = document.getElementById('alm-merge-field');
        if (!fieldEl || fieldEl._mergeBound) return;
        fieldEl._mergeBound = true;

        fieldEl.addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            if (e.touches.length > 0) {
                grabMergeItemAtPoint(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: false });

        fieldEl.addEventListener('touchmove', (e) => {
            if (e.cancelable) e.preventDefault();
            if (e.touches.length > 0) {
                moveDraggedMergeItemToPoint(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: false });

        fieldEl.addEventListener('touchend', () => {
            releaseDraggedMergeItem();
        });

        fieldEl.addEventListener('touchcancel', () => {
            releaseDraggedMergeItem();
        });

        fieldEl.addEventListener('mousedown', (e) => {
            grabMergeItemAtPoint(e.clientX, e.clientY);
        });

        window.addEventListener('mousemove', (e) => {
            if (draggingMergeId !== null) {
                moveDraggedMergeItemToPoint(e.clientX, e.clientY);
            }
        });

        window.addEventListener('mouseup', () => {
            releaseDraggedMergeItem();
        });
    }

    function updateMergeDynamicHud() {
        const s = initAuraLarpMonsterState();

        const balEl = document.getElementById('alm-vitamin-balance');
        const totalEl = document.getElementById('alm-vitamin-total');
        const countEl = document.getElementById('alm-merge-active-count');

        if (balEl) balEl.textContent = formatVitaminValue(s.vitamins);
        if (totalEl) totalEl.textContent = formatVitaminValue(s.totalVitamins);
        if (countEl) countEl.textContent = `${activeMergeItems.length} / ${MAX_MERGE_ITEMS}`;

        const btn1 = document.getElementById('alm-merge-upg-1');
        if (btn1) btn1.disabled = s.vitamins < getVitaminMultUpgradeCost();

        const btn2 = document.getElementById('alm-merge-upg-2');
        if (btn2) {
            const isMax = (s.mergeLv2ChanceLvl || 0) >= MERGE_LV2_MAX_LVL;
            btn2.disabled = isMax || s.vitamins < getMergeLv2UpgradeCost();
        }

        const btn3 = document.getElementById('alm-merge-upg-3');
        if (btn3) btn3.disabled = s.vitamins < getMergeLarpUpgradeCost();
    }

    // ------------------------------------------
    // ОНОВЛЕННЯ ЛОГІКИ (ЛАРПИ, РУХ ПО СХОДАХ, ЗОНИ, БУРЯ, МОБ)
    // ------------------------------------------
    function updateAuraLarpMonsterLogic(dt) {
        const s = initAuraLarpMonsterState();
        if (typeof dt !== 'number' || isNaN(dt) || dt <= 0) return;
        if (dt > 60) dt = 60;

        // 1. Автоматичний фарм Ларпів
        const income = getLarpPerSecond() * dt;
        s.larp += income;
        s.totalLarp += income;

        // 2. Пересування персонажа між сходинками
        let stepArrived = false;
        let stepChanged = false;
        const moveSpeed = getCharacterMoveSpeed();
        if (s.currentStep !== s.targetStep) {
            s.moveProgressSec += dt * moveSpeed;
            while (s.moveProgressSec >= 1.0 && s.currentStep !== s.targetStep) {
                s.moveProgressSec -= 1.0;
                s.currentStep += (s.targetStep > s.currentStep ? 1 : -1);
                s.highestStep = Math.max(s.highestStep || 1, s.currentStep);
                stepChanged = true;
            }
            if (s.currentStep === s.targetStep) {
                s.moveProgressSec = 0;
                stepArrived = true;
                syncLarpLeaderboard(false);
            }
        } else {
            s.moveProgressSec = 0;
        }

        const nowMs = getCurrentNowMs();

        // 3. Перевірка завершення сніжної бурі та перезарядки (80 сходинка)
        let stormStateChanged = false;
        if (s.stormActiveEndMs && nowMs >= s.stormActiveEndMs) {
            s.stormActiveEndMs = null;
            stormStateChanged = true;
        }
        if (s.stormCooldownEndMs && nowMs >= s.stormCooldownEndMs) {
            s.stormCooldownEndMs = null;
            stormStateChanged = true;
        }

        // 4. Спавн сніжинок у зоні 20-ї сходинки (враховуючи сніжну бурю)
        if (s.maxUnlockedStep >= 20 && s.currentStep === 20 && s.targetStep === 20) {
            if (activeSnowflakes.length < MAX_SNOWFLAKES) {
                const interval = getEffectiveSnowSpawnInterval();
                snowSpawnAccumSec += dt;
                while (snowSpawnAccumSec >= interval && activeSnowflakes.length < MAX_SNOWFLAKES) {
                    snowSpawnAccumSec -= interval;
                    spawnSingleSnowflake();
                }
            } else {
                snowSpawnAccumSec = 0;
            }
        }

        // 5. Спавн сміття у зоні 30-ї сходинки
        if (s.maxUnlockedStep >= 30 && s.currentStep === 30 && s.targetStep === 30) {
            if (activeTrashItems.length < MAX_TRASH_ITEMS) {
                const interval = getTrashSpawnInterval();
                trashSpawnAccumSec += dt;
                while (trashSpawnAccumSec >= interval && activeTrashItems.length < MAX_TRASH_ITEMS) {
                    trashSpawnAccumSec -= interval;
                    spawnSingleTrashItem();
                }
            } else {
                trashSpawnAccumSec = 0;
            }
        }

        // 6. Перевірка респавну моба Курочка на 50-й сходинці
        let chickenRespawned = false;
        if (s.chickenRespawnEndMs && nowMs >= s.chickenRespawnEndMs) {
            s.chickenRespawnEndMs = null;
            s.chickenHp = CHICKEN_MAX_HP;
            chickenRespawned = true;
        }

        // 7. Спавн овочів/фруктів у кімнаті 70-ї сходинки кожні 3 сек (макс. 20)
        if (s.maxUnlockedStep >= 70 && s.currentStep === 70 && s.targetStep === 70) {
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

        if (isGlobalTimeVerified) {
            s.lastGlobalTime = Date.now() + globalTimeOffsetMs;
        }

        if (isAuraLarpModeActive) {
            if (chickenRespawned && activeLarpSubTab === 'room' && activeRoomStep === 50) {
                renderAuraLarpMonsterUI(false);
                return;
            }
            if (stormStateChanged && activeLarpSubTab === 'room' && activeRoomStep === 80) {
                renderAuraLarpMonsterUI(false);
                return;
            }
            updateAllDynamicElements(stepChanged, stepArrived);
        }
    }

    // ------------------------------------------
    // ВІЗУАЛЬНА АНІМАЦІЯ ПЕРСОНАЖА (60 FPS)
    // ------------------------------------------
    function updateCharacterPinPosition() {
        const pin = document.getElementById('alm-character-pin');
        if (!pin) return;

        const visStep = getVisualStepPosition();
        const rowIndexFromTop = MAX_STEP - visStep;
        const centerY = rowIndexFromTop * ROW_HEIGHT + (ROW_HEIGHT / 2);
        const barLeft = STEP_BASE_LEFT + (visStep - 1) * STEP_INDENT_PER_LEVEL;
        const centerX = barLeft + (STEP_BAR_WIDTH / 2);

        pin.style.transform = `translate3d(${centerX.toFixed(2)}px, ${centerY.toFixed(2)}px, 0) translate(-50%, -50%)`;
    }

    function startVisualAnimationLoop() {
        if (rafId) cancelAnimationFrame(rafId);
        function loop() {
            if (!isAuraLarpModeActive) {
                rafId = null;
                return;
            }
            if (activeLarpSubTab === 'stairs') {
                updateCharacterPinPosition();
            }
            rafId = requestAnimationFrame(loop);
        }
        rafId = requestAnimationFrame(loop);
    }

    function updateRoom80DynamicHud() {
        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();

        const statusEl = document.getElementById('alm-storm-status-text');
        const timerEl = document.getElementById('alm-storm-timer-text');
        const actBtn = document.getElementById('alm-storm-activate-btn');

        const stormActive = Boolean(s.stormActiveEndMs && now < s.stormActiveEndMs);
        const stormOnCd = Boolean(s.stormCooldownEndMs && now < s.stormCooldownEndMs);

        if (statusEl) {
            if (stormActive) {
                statusEl.textContent = `🌨️ Сніжна буря вирує! Сніжинки спавняться кожні ${getStormSnowSpawnInterval()}с`;
                statusEl.style.color = '#7dd3fc';
            } else if (stormOnCd) {
                statusEl.textContent = '⏳ Перезарядка виклику сніжної бурі';
                statusEl.style.color = '#94a3b8';
            } else {
                statusEl.textContent = `✅ Готова до виклику (${getStormDurationMinutes()} хв, спавн ${getStormSnowSpawnInterval()}с)`;
                statusEl.style.color = '#2ecc71';
            }
        }

        if (timerEl) {
            if (stormActive) {
                const remSec = Math.max(0, (s.stormActiveEndMs - now) / 1000);
                timerEl.textContent = `Активна: ${formatTimerMmSs(remSec)}`;
            } else if (stormOnCd) {
                const cdSec = Math.max(0, (s.stormCooldownEndMs - now) / 1000);
                timerEl.textContent = `Доступно через: ${formatTimerMmSs(cdSec)}`;
            } else {
                timerEl.textContent = `Кулдаун після виклику: ${getStormCooldownHours()} год`;
            }
        }

        if (actBtn) {
            actBtn.disabled = stormOnCd;
            actBtn.textContent = stormActive
                ? '🌨️ Буря триває!'
                : (stormOnCd ? '⏳ На перезарядці' : '🌨️ Викликати сніжну бурю');
        }

        const u1 = document.getElementById('alm-r80-upg-1');
        if (u1) u1.disabled = s.larp < getStormDurationUpgradeCost();

        const u2 = document.getElementById('alm-r80-upg-2');
        if (u2) u2.disabled = (s.stormCooldownLvl || 0) >= STORM_COOLDOWN_MAX_LVL || s.larp < getStormCooldownUpgradeCost();

        const u3 = document.getElementById('alm-r80-upg-3');
        if (u3) u3.disabled = (s.stormSpeedLvl || 0) >= STORM_SPAWN_MAX_LVL || s.larp < getStormSpeedUpgradeCost();
    }

    function updateRoom90DynamicHud() {
        const s = initAuraLarpMonsterState();

        const u1 = document.getElementById('alm-r90-upg-1');
        if (u1) u1.disabled = (s.mobDamageLvl || 0) >= MOB_DMG_MAX_LVL || s.larp < getMobDamageUpgradeCost();

        const u2 = document.getElementById('alm-r90-upg-2');
        if (u2) u2.disabled = (s.mobRespawnLvl || 0) >= MOB_SPAWN_MAX_LVL || s.larp < getMobRespawnUpgradeCost();
    }

    function updateAllDynamicElements(stepChanged, stepArrived) {
        const s = initAuraLarpMonsterState();
        const isMoving = s.currentStep !== s.targetStep;
        const visStep = getVisualStepPosition();
        const moveSpeed = getCharacterMoveSpeed();

        const balEl = document.getElementById('alm-top-balance');
        const rateEl = document.getElementById('alm-top-rate');
        const posEl = document.getElementById('alm-top-pos');

        if (balEl) balEl.textContent = formatLarpValue(s.larp);
        if (rateEl) rateEl.textContent = formatMultValue(getLarpPerSecond());
        if (posEl) {
            posEl.textContent = isMoving
                ? `${visStep.toFixed(1)} → ${s.targetStep}`
                : `${s.currentStep}`;
        }

        const roomTabDot = document.getElementById('alm-room-tab-dot');
        if (roomTabDot) {
            roomTabDot.style.display = s.maxUnlockedStep >= 10 ? 'inline-block' : 'none';
        }

        if (activeLarpSubTab === 'stairs') {
            updateCharacterPinPosition();

            if (stepChanged) {
                for (let step = 1; step <= MAX_STEP; step++) {
                    const rowEl = document.getElementById(`alm-stair-row-${step}`);
                    if (!rowEl) continue;
                    if (step === s.currentStep && !isMoving) {
                        rowEl.classList.add('alm-row-current');
                    } else {
                        rowEl.classList.remove('alm-row-current');
                    }
                }
            }

            const nextStep = s.maxUnlockedStep + 1;
            const nextObj = STAIRS_CONFIG.find(item => item.step === nextStep);
            const inlineBuyBtn = document.getElementById('alm-inline-buy-btn');
            const bottomBuyBtn = document.getElementById('alm-bottom-buy-btn');

            if (nextObj) {
                const canAfford = s.larp >= nextObj.cost;
                if (inlineBuyBtn) inlineBuyBtn.disabled = !canAfford;
                if (bottomBuyBtn) bottomBuyBtn.disabled = !canAfford;
            }
        } else if (activeLarpSubTab === 'room') {
            if (stepArrived) {
                renderAuraLarpMonsterUI(false);
                return;
            }

            if (isMoving && s.targetStep === activeRoomStep) {
                const posTextEl = document.getElementById('alm-room-walk-pos');
                const timeTextEl = document.getElementById('alm-room-walk-sec');
                const barFillEl = document.getElementById('alm-room-walk-fill');

                const distSteps = Math.abs(activeRoomStep - visStep);
                const timeLeftSec = distSteps / moveSpeed;
                const totalDist = Math.max(1, activeRoomStep - 1);
                const pct = Math.min(100, Math.max(0, (1 - distSteps / totalDist) * 100));

                if (posTextEl) posTextEl.textContent = visStep.toFixed(1);
                if (timeTextEl) timeTextEl.textContent = `${timeLeftSec.toFixed(1)} сек`;
                if (barFillEl) barFillEl.style.width = `${pct.toFixed(1)}%`;
            } else if (activeRoomStep === 10) {
                const roomCardBtn = document.getElementById('alm-room-upgrade-card');
                if (roomCardBtn) {
                    roomCardBtn.disabled = s.larp < getRoomUpgradeCost();
                }
            } else if (activeRoomStep === 20) {
                updateSnowDynamicHud();
            } else if (activeRoomStep === 30) {
                updateTrashDynamicHud();
            } else if (activeRoomStep === 40) {
                const spdBtn = document.getElementById('alm-r40-speed-btn');
                if (spdBtn) spdBtn.disabled = s.larp < getSpeedUpgradeCost();
                const offBtn = document.getElementById('alm-r40-offline-btn');
                if (offBtn) offBtn.disabled = s.larp < getOfflineUpgradeCost();
            } else if (activeRoomStep === 50) {
                updateChickenDynamicHud();
            } else if (activeRoomStep === 60) {
                const b1 = document.getElementById('alm-r60-btn-1');
                if (b1) b1.disabled = (s.goldSnowLvl || 0) >= GOLD_SNOW_MAX_LVL || s.larp < getGoldSnowUpgradeCost();
                const b2 = document.getElementById('alm-r60-btn-2');
                if (b2) b2.disabled = (s.emeraldSnowLvl || 0) >= EMERALD_SNOW_MAX_LVL || s.larp < getEmeraldSnowUpgradeCost();
                const b3 = document.getElementById('alm-r60-btn-3');
                if (b3) b3.disabled = (s.goldTrashLvl || 0) >= GOLD_TRASH_MAX_LVL || s.larp < getGoldTrashUpgradeCost();
                const b4 = document.getElementById('alm-r60-btn-4');
                if (b4) b4.disabled = (s.emeraldTrashLvl || 0) >= EMERALD_TRASH_MAX_LVL || s.larp < getEmeraldTrashUpgradeCost();
            } else if (activeRoomStep === 70) {
                updateMergeDynamicHud();
            } else if (activeRoomStep === 80) {
                updateRoom80DynamicHud();
            } else if (activeRoomStep === 90) {
                updateRoom90DynamicHud();
            }
        } else if (activeLarpSubTab === 'multipliers') {
            const totalRateEl = document.getElementById('alm-mult-total-rate');
            if (totalRateEl) {
                totalRateEl.textContent = `${formatMultValue(getLarpPerSecond())} ларп/сек`;
            }
        }
    }

    // ------------------------------------------
    // СТИЛІ ТА ІН'ЄКЦІЯ В ІНТЕРФЕЙС ГРИ
    // ------------------------------------------
    function injectStyles() {
        if (document.getElementById('aura-larp-monster-styles')) return;
        const style = document.createElement('style');
        style.id = 'aura-larp-monster-styles';
        style.textContent = `
            #tab-aura-larp {
                width: 100%;
                max-width: 600px;
                padding: 0 12px 24px 12px;
                gap: 12px;
                transition: max-width 0.2s ease;
            }

            #tab-aura-larp.alm-wide-mode {
                max-width: 880px;
            }

            /* Банер відсутності інтернету або офлайн-доходу */
            .alm-offline-banner {
                width: 100%;
                background: #23141b;
                border: 1.5px solid #e74c3c;
                border-radius: 14px;
                padding: 12px 14px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                flex-wrap: wrap;
                color: #fecaca;
                font-size: 0.86rem;
                font-weight: 700;
            }

            .alm-offline-banner.reward {
                background: #0d2b2a;
                border-color: #2ecc71;
                color: #d1fae5;
            }

            .alm-banner-btn {
                background: #f5b82e;
                color: #0b101e;
                border: none;
                border-radius: 8px;
                padding: 7px 12px;
                font-size: 0.8rem;
                font-weight: 900;
                cursor: pointer;
                white-space: nowrap;
            }

            .alm-banner-btn:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }

            /* Верхня панель картки */
            .alm-top-panel {
                width: 100%;
                background: #0b101e;
                border: 1.5px solid #1e2942;
                border-radius: 16px;
                padding: 14px 16px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
            }

            .alm-top-stats {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                flex-wrap: wrap;
            }

            .alm-balance-group {
                display: flex;
                align-items: baseline;
                gap: 8px;
                flex-wrap: wrap;
            }

            .alm-balance-num {
                font-size: 1.55rem;
                font-weight: 900;
                color: #f5b82e;
                letter-spacing: 0.3px;
            }

            .alm-balance-unit {
                font-size: 0.85rem;
                font-weight: 700;
                color: #d99b26;
            }

            .alm-rate-pill {
                background: #101729;
                border: 1px solid #1f2b47;
                border-radius: 10px;
                padding: 5px 10px;
                font-size: 0.85rem;
                font-weight: 700;
                color: #cbd5e1;
                display: inline-flex;
                align-items: center;
                gap: 5px;
            }

            .alm-rate-pill-num {
                color: #2ecc71;
                font-weight: 800;
            }

            .alm-pos-pill {
                background: #101729;
                border: 1px solid #1f2b47;
                border-radius: 10px;
                padding: 5px 12px;
                font-size: 0.85rem;
                font-weight: 800;
                color: #e2e8f0;
                display: inline-flex;
                align-items: center;
                gap: 7px;
            }

            .alm-pos-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #38bdf8;
                box-shadow: 0 0 8px #38bdf8;
            }

            /* Перемикач під-вкладок */
            .alm-subtabs-bar {
                display: flex;
                width: 100%;
                background: #070b14;
                border: 1px solid #1a233a;
                border-radius: 12px;
                padding: 4px;
                gap: 4px;
            }

            .alm-subtab-btn {
                flex: 1;
                padding: 9px 4px;
                border: none;
                border-radius: 9px;
                background: transparent;
                color: #e2e8f0;
                font-size: 0.84rem;
                font-weight: 800;
                cursor: pointer;
                transition: background 0.15s, color 0.15s;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
            }

            .alm-subtab-btn.active {
                background: #f5b82e;
                color: #0b101e;
            }

            .alm-room-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #2ecc71;
                box-shadow: 0 0 6px #2ecc71;
            }

            /* Головне вікно контенту */
            .alm-main-box {
                width: 100%;
                background: #0b101e;
                border: 1.5px solid #1e2942;
                border-radius: 16px;
                padding: 12px;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
            }

            /* Контейнер сходів з сіткою */
            .alm-stairs-scroll {
                width: 100%;
                max-height: 440px;
                overflow-y: auto;
                overflow-x: hidden;
                border-radius: 12px;
                border: 1px solid #192238;
                background-color: #090e1a;
                position: relative;
            }

            .alm-stairs-scroll::-webkit-scrollbar {
                width: 8px;
            }
            .alm-stairs-scroll::-webkit-scrollbar-track {
                background: #0d1323;
            }
            .alm-stairs-scroll::-webkit-scrollbar-thumb {
                background: #475569;
                border-radius: 4px;
            }

            .alm-stairs-stage {
                position: relative;
                width: 100%;
                height: ${MAX_STEP * ROW_HEIGHT}px;
                background-image:
                    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                background-size: 24px 24px;
            }

            .alm-stairs-divider {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 48%;
                width: 1px;
                background: #1e2942;
                pointer-events: none;
                z-index: 1;
            }

            .alm-stair-row {
                position: relative;
                height: ${ROW_HEIGHT}px;
                width: 100%;
                display: flex;
                align-items: center;
                border-bottom: 1px solid rgba(255, 255, 255, 0.03);
                transition: background-color 0.2s;
                z-index: 2;
            }

            .alm-stair-row.alm-row-unlocked {
                cursor: pointer;
            }

            .alm-stair-row.alm-row-unlocked:hover {
                background: rgba(56, 189, 248, 0.05);
            }

            .alm-stair-row.alm-row-room {
                background: rgba(46, 204, 113, 0.06);
            }

            .alm-stair-row.alm-row-room-20 {
                background: rgba(56, 189, 248, 0.08);
            }

            .alm-stair-row.alm-row-room-30 {
                background: rgba(245, 158, 11, 0.08);
            }

            .alm-stair-row.alm-row-room-40 {
                background: rgba(168, 85, 247, 0.09);
            }

            .alm-stair-row.alm-row-room-50 {
                background: rgba(239, 68, 68, 0.09);
            }

            .alm-stair-row.alm-row-room-60 {
                background: rgba(250, 204, 21, 0.09);
            }

            .alm-stair-row.alm-row-room-70 {
                background: rgba(16, 185, 129, 0.09);
            }

            .alm-stair-row.alm-row-room-80 {
                background: rgba(99, 102, 241, 0.11);
            }

            .alm-stair-row.alm-row-room-90 {
                background: rgba(244, 63, 94, 0.11);
            }

            .alm-stair-row.alm-row-current {
                background: rgba(56, 189, 248, 0.14);
            }

            .alm-stair-left {
                width: 48%;
                height: 100%;
                position: relative;
                display: flex;
                align-items: center;
            }

            .alm-step-bar {
                position: absolute;
                height: 10px;
                width: ${STEP_BAR_WIDTH}px;
                border-radius: 3px;
                background: #111827;
                border: 1.5px solid #28354f;
                transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
            }

            .alm-step-bar.unlocked {
                background: #0e3454;
                border-color: #2185c5;
            }

            .alm-step-bar.room-bar {
                background: #114738;
                border-color: #2ecc71;
            }

            .alm-step-bar.room-bar-20 {
                background: #0e3a5c;
                border-color: #38bdf8;
            }

            .alm-step-bar.room-bar-30 {
                background: #422c0b;
                border-color: #f59e0b;
            }

            .alm-step-bar.room-bar-40 {
                background: #351854;
                border-color: #a855f7;
            }

            .alm-step-bar.room-bar-50 {
                background: #47141a;
                border-color: #ef4444;
            }

            .alm-step-bar.room-bar-60 {
                background: #45360b;
                border-color: #eab308;
            }

            .alm-step-bar.room-bar-70 {
                background: #0c3d2e;
                border-color: #10b981;
            }

            .alm-step-bar.room-bar-80 {
                background: #1e2254;
                border-color: #818cf8;
            }

            .alm-step-bar.room-bar-90 {
                background: #4c1124;
                border-color: #fb7185;
            }

            .alm-step-bar.next-buy {
                background: #3a2910;
                border-color: #d99b26;
            }

            .alm-step-connector {
                position: absolute;
                width: 1.5px;
                height: ${ROW_HEIGHT - 10}px;
                background: #28354f;
                bottom: ${ROW_HEIGHT / 2 + 5}px;
                pointer-events: none;
            }

            .alm-step-connector.unlocked {
                background: #2185c5;
            }

            .alm-stair-right {
                width: 52%;
                height: 100%;
                padding: 0 10px 0 12px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6px;
            }

            .alm-stair-info-left {
                display: flex;
                align-items: center;
                gap: 7px;
            }

            .alm-step-number {
                font-size: 0.92rem;
                font-weight: 800;
                color: #64748b;
                min-width: 26px;
            }

            .alm-step-number.bright {
                color: #f8fafc;
            }

            .alm-mult-chip {
                background: #0d1e33;
                border: 1px solid #1d4ed8;
                color: #38bdf8;
                font-size: 0.76rem;
                font-weight: 800;
                padding: 3px 7px;
                border-radius: 6px;
            }

            .alm-inline-buy-btn {
                background: #f5b82e;
                color: #0b101e;
                border: none;
                border-radius: 7px;
                padding: 6px 10px;
                font-size: 0.78rem;
                font-weight: 900;
                cursor: pointer;
                transition: transform 0.1s, opacity 0.15s;
                white-space: nowrap;
            }

            .alm-inline-buy-btn:hover:not(:disabled) {
                transform: scale(1.03);
            }

            .alm-inline-buy-btn:disabled {
                opacity: 0.45;
                cursor: not-allowed;
            }

            .alm-room-chip-btn {
                background: #2ecc71;
                color: #062112;
                border: none;
                border-radius: 7px;
                padding: 5px 10px;
                font-size: 0.78rem;
                font-weight: 900;
                cursor: pointer;
                white-space: nowrap;
            }

            .alm-room-chip-btn.ice {
                background: #38bdf8;
                color: #061826;
            }

            .alm-room-chip-btn.trash {
                background: #f59e0b;
                color: #1c1002;
            }

            .alm-room-chip-btn.purple {
                background: #c084fc;
                color: #18062b;
            }

            .alm-room-chip-btn.boss {
                background: #f87171;
                color: #240606;
            }

            .alm-room-chip-btn.gold {
                background: #facc15;
                color: #1f1602;
            }

            .alm-room-chip-btn.garden {
                background: #34d399;
                color: #042117;
            }

            .alm-room-chip-btn.storm {
                background: #818cf8;
                color: #0b0d29;
            }

            .alm-room-chip-btn.combat {
                background: #fb7185;
                color: #26060d;
            }

            /* Персонаж, що плавно переміщається по сходах */
            .alm-character-pin {
                position: absolute;
                left: 0;
                top: 0;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #38bdf8;
                border: 2px solid #bae6fd;
                box-shadow: 0 0 14px rgba(56, 189, 248, 0.9), 0 0 24px rgba(56, 189, 248, 0.45);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
                pointer-events: none;
                will-change: transform;
            }

            .alm-character-pin svg {
                width: 14px;
                height: 14px;
                fill: #081221;
            }

            /* Нижня панель під сходами */
            .alm-bottom-bar {
                width: 100%;
                background: #0b101e;
                border: 1.5px solid #1e2942;
                border-radius: 14px;
                padding: 12px 16px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                flex-wrap: wrap;
            }

            .alm-bottom-meta {
                font-size: 0.9rem;
                color: #94a3b8;
                font-weight: 700;
            }

            .alm-bottom-meta strong {
                color: #f8fafc;
            }

            .alm-bottom-meta .cyan {
                color: #38bdf8;
                font-weight: 800;
            }

            .alm-bottom-buy-btn {
                background: #f5b82e;
                color: #0b101e;
                border: none;
                border-radius: 10px;
                padding: 11px 20px;
                font-size: 0.92rem;
                font-weight: 900;
                cursor: pointer;
                transition: transform 0.1s, opacity 0.15s;
            }

            .alm-bottom-buy-btn:hover:not(:disabled) {
                transform: scale(1.02);
            }

            .alm-bottom-buy-btn:disabled {
                opacity: 0.45;
                cursor: not-allowed;
            }

            /* Перемикач кімнат (10, 20, 30, 40, 50, 60, 70, 80, 90 сходинки) */
            .alm-room-selector {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
                width: 100%;
                margin-bottom: 12px;
            }

            .alm-room-sel-btn {
                padding: 8px 4px;
                border-radius: 10px;
                border: 1.5px solid #1e2942;
                background: #0e1526;
                color: #cbd5e1;
                font-size: 0.76rem;
                font-weight: 800;
                cursor: pointer;
                transition: all 0.15s;
                text-align: center;
                white-space: nowrap;
            }

            .alm-room-sel-btn.active {
                background: #132a46;
                border-color: #38bdf8;
                color: #ffffff;
            }

            /* Вкладка "Кімната" (10 сходинка) */
            .alm-room-viewport {
                width: 100%;
                min-height: 390px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px 12px;
                text-align: center;
            }

            .alm-room-subtitle {
                font-size: 0.85rem;
                font-weight: 800;
                color: #94a3b8;
                letter-spacing: 0.8px;
                text-transform: uppercase;
                margin-bottom: 14px;
            }

            .alm-room-upgrade-card {
                width: 100%;
                max-width: 340px;
                background: #0d2b2a;
                border: 1.5px solid #1b6b5c;
                border-radius: 16px;
                padding: 22px 18px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                cursor: pointer;
                transition: transform 0.12s, box-shadow 0.2s, opacity 0.2s;
            }

            .alm-room-upgrade-card:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 0 22px rgba(46, 204, 113, 0.25);
            }

            .alm-room-upgrade-card:active:not(:disabled) {
                transform: scale(0.98);
            }

            .alm-room-upgrade-card:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }

            .alm-room-card-label {
                font-size: 0.82rem;
                font-weight: 800;
                color: #94a3b8;
                letter-spacing: 0.6px;
                text-transform: uppercase;
            }

            .alm-room-lvl-badge {
                background: #103c37;
                border: 1px solid #1e7e6c;
                color: #2ecc71;
                font-size: 0.82rem;
                font-weight: 800;
                padding: 3px 12px;
                border-radius: 999px;
            }

            .alm-room-mult-transition {
                font-size: 1.9rem;
                font-weight: 900;
                color: #ffffff;
                letter-spacing: 0.5px;
                margin: 2px 0;
            }

            .alm-room-cost-text {
                font-size: 0.95rem;
                font-weight: 900;
                color: #f5b82e;
            }

            /* Кімната 40 та 60 сходинки (картки прокачок) */
            .alm-r40-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
                width: 100%;
                max-width: 580px;
            }

            @media (max-width: 540px) {
                .alm-r40-grid {
                    grid-template-columns: 1fr;
                }
            }

            .alm-r40-card {
                background: #161029;
                border: 1.5px solid #58288a;
                border-radius: 16px;
                padding: 18px 14px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                cursor: pointer;
                transition: transform 0.12s, box-shadow 0.2s, opacity 0.2s;
            }

            .alm-r40-card:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 0 22px rgba(168, 85, 247, 0.28);
            }

            .alm-r40-card:disabled {
                opacity: 0.58;
                cursor: not-allowed;
            }

            .alm-r40-card.gold-theme {
                background: #231d0c;
                border-color: #b45309;
            }

            .alm-r40-card.emerald-theme {
                background: #0b241b;
                border-color: #059669;
            }

            .alm-r40-card.combat-theme {
                background: #281018;
                border-color: #e11d48;
            }

            .alm-r40-badge {
                background: #251542;
                border: 1px solid #7e3af2;
                color: #d8b4fe;
                font-size: 0.8rem;
                font-weight: 800;
                padding: 3px 12px;
                border-radius: 999px;
            }

            .alm-r40-badge.gold {
                background: #3b2a09;
                border-color: #f59e0b;
                color: #fde68a;
            }

            .alm-r40-badge.emerald {
                background: #0c3829;
                border-color: #10b981;
                color: #6ee7b7;
            }

            .alm-r40-badge.combat {
                background: #451221;
                border-color: #fb7185;
                color: #fecdd3;
            }

            .alm-r40-val {
                font-size: 1.28rem;
                font-weight: 900;
                color: #ffffff;
                line-height: 1.3;
            }

            /* Зони 20, 30, 50, 70 — 2-колонковий макет */
            .alm-snow-layout {
                display: grid;
                grid-template-columns: 1fr 278px;
                gap: 12px;
                width: 100%;
                align-items: start;
            }

            @media (max-width: 680px) {
                .alm-snow-layout {
                    grid-template-columns: 1fr;
                }
            }

            .alm-snow-zone-col {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .alm-snow-hud {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                flex-wrap: wrap;
                background: #0e172a;
                border: 1px solid #1e3a5f;
                border-radius: 12px;
                padding: 10px 12px;
            }

            .alm-snow-stat {
                font-size: 0.84rem;
                font-weight: 800;
                color: #cbd5e1;
            }

            .alm-snow-stat strong {
                color: #38bdf8;
                font-size: 1.02rem;
            }

            .alm-storm-active-strip {
                background: linear-gradient(90deg, #172554, #1e3a8a, #172554);
                border: 1.5px solid #60a5fa;
                border-radius: 10px;
                padding: 7px 12px;
                color: #bae6fd;
                font-size: 0.8rem;
                font-weight: 900;
                text-align: center;
                justify-content: center;
                box-shadow: 0 0 14px rgba(56, 189, 248, 0.3);
            }

            .alm-snow-field {
                position: relative;
                width: 100%;
                height: 390px;
                border-radius: 14px;
                background: radial-gradient(circle at 50% 25%, #112947 0%, #081224 75%, #060c18 100%);
                border: 1.5px solid #25507a;
                overflow: hidden;
                touch-action: none;
                user-select: none;
                -webkit-user-select: none;
                cursor: crosshair;
                box-shadow: inset 0 0 30px rgba(56, 189, 248, 0.12);
            }

            /* Поле прибирання сміття (30 сходинка) */
            .alm-trash-field {
                position: relative;
                width: 100%;
                height: 390px;
                border-radius: 14px;
                background: radial-gradient(circle at 50% 50%, #261f12 0%, #12151f 75%, #080b12 100%);
                border: 1.5px solid #855818;
                overflow: hidden;
                touch-action: none;
                user-select: none;
                -webkit-user-select: none;
                box-shadow: inset 0 0 30px rgba(245, 158, 11, 0.12);
            }

            .alm-trash-center-bin {
                position: absolute;
                left: 50%;
                top: 50%;
                width: 88px;
                height: 88px;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                background: radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(245, 158, 11, 0.08) 70%);
                border: 2px dashed #f59e0b;
                box-shadow: 0 0 22px rgba(245, 158, 11, 0.25);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                pointer-events: none;
                z-index: 2;
            }

            .alm-trash-center-icon {
                font-size: 1.6rem;
                line-height: 1;
            }

            .alm-trash-center-label {
                font-size: 0.65rem;
                font-weight: 900;
                color: #fcd34d;
                text-transform: uppercase;
                margin-top: 3px;
            }

            .alm-trash-item {
                position: absolute;
                font-size: 1.85rem;
                line-height: 1;
                transform: translate(-50%, -50%);
                filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.75));
                cursor: grab;
                z-index: 5;
                transition: transform 0.08s;
            }

            .alm-trash-item.golden {
                filter: drop-shadow(0 0 10px #facc15) drop-shadow(0 0 18px rgba(250, 204, 21, 0.95));
            }

            .alm-trash-item.emerald {
                filter: drop-shadow(0 0 12px #10b981) drop-shadow(0 0 22px rgba(16, 185, 129, 0.98));
            }

            .alm-trash-item.dragging {
                transform: translate(-50%, -50%) scale(1.25);
                cursor: grabbing;
                z-index: 12;
                filter: drop-shadow(0 0 12px rgba(251, 191, 36, 0.9));
            }

            /* Поле об'єднання овочів та фруктів (70 сходинка) */
            .alm-merge-field {
                position: relative;
                width: 100%;
                height: 390px;
                border-radius: 14px;
                background: radial-gradient(circle at 50% 40%, #0f2e22 0%, #0a1b16 75%, #06100d 100%);
                border: 1.5px solid #10b981;
                overflow: hidden;
                touch-action: none;
                user-select: none;
                -webkit-user-select: none;
                box-shadow: inset 0 0 30px rgba(16, 185, 129, 0.14);
            }

            .alm-merge-item {
                position: absolute;
                width: 46px;
                height: 46px;
                border-radius: 50%;
                background: rgba(15, 39, 31, 0.92);
                border: 2px solid #34d399;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.65);
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: grab;
                z-index: 5;
                transition: transform 0.08s;
            }

            .alm-merge-item.dragging {
                transform: translate(-50%, -50%) scale(1.22);
                cursor: grabbing;
                z-index: 15;
                border-color: #fde047;
                box-shadow: 0 0 16px rgba(253, 224, 71, 0.85);
            }

            @keyframes almMergePop {
                0% { transform: translate(-50%, -50%) scale(0.75); }
                55% { transform: translate(-50%, -50%) scale(1.28); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }

            .alm-merge-item.merged-pop {
                animation: almMergePop 0.32s ease-out;
            }

            .alm-merge-emoji {
                font-size: 1.65rem;
                line-height: 1;
                pointer-events: none;
            }

            .alm-merge-badge {
                position: absolute;
                bottom: -4px;
                right: -4px;
                background: #064e3b;
                border: 1px solid #6ee7b7;
                color: #ecfdf5;
                font-size: 0.65rem;
                font-weight: 900;
                padding: 1px 5px;
                border-radius: 999px;
                pointer-events: none;
            }

            .alm-vitamin-pop {
                position: absolute;
                font-size: 0.9rem;
                font-weight: 900;
                color: #6ee7b7;
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
                pointer-events: none;
                animation: almSnowPopAnim 0.7s ease-out forwards;
                z-index: 20;
                white-space: nowrap;
            }

            /* Арена боса Курочка (50 сходинка) */
            .alm-chicken-arena {
                position: relative;
                width: 100%;
                height: 390px;
                border-radius: 14px;
                background: radial-gradient(circle at 50% 35%, #2e1518 0%, #140c14 75%, #09070d 100%);
                border: 1.5px solid #8a2832;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 16px;
                gap: 14px;
                user-select: none;
                -webkit-user-select: none;
            }

            .alm-chicken-title {
                font-size: 1.12rem;
                font-weight: 900;
                color: #fca5a5;
                letter-spacing: 0.4px;
            }

            .alm-chicken-hp-wrap {
                width: 100%;
                max-width: 280px;
                display: flex;
                flex-direction: column;
                gap: 5px;
            }

            .alm-chicken-hp-bar {
                width: 100%;
                height: 14px;
                background: #1f1116;
                border: 1.5px solid #7f1d1d;
                border-radius: 999px;
                overflow: hidden;
            }

            .alm-chicken-hp-fill {
                height: 100%;
                background: linear-gradient(90deg, #ef4444, #f97316);
                border-radius: 999px;
                transition: width 0.08s ease-out;
            }

            .alm-chicken-hp-text {
                font-size: 0.84rem;
                font-weight: 900;
                color: #fecaca;
                text-align: center;
            }

            @keyframes almChickenHit {
                0% { transform: scale(1) rotate(0deg); }
                35% { transform: scale(0.86) rotate(-10deg); }
                70% { transform: scale(1.06) rotate(6deg); }
                100% { transform: scale(1) rotate(0deg); }
            }

            .alm-chicken-mob-btn {
                width: 138px;
                height: 138px;
                border-radius: 50%;
                background: radial-gradient(circle, #471d22 0%, #260e12 75%);
                border: 3px solid #ef4444;
                box-shadow: 0 0 28px rgba(239, 68, 68, 0.35);
                font-size: 4.5rem;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: box-shadow 0.15s;
            }

            .alm-chicken-mob-btn:hover {
                box-shadow: 0 0 36px rgba(239, 68, 68, 0.55);
            }

            .alm-chicken-mob-btn.hit {
                animation: almChickenHit 0.22s ease-out;
            }

            .alm-dmg-pop {
                position: absolute;
                font-size: 1.05rem;
                font-weight: 900;
                color: #f87171;
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
                pointer-events: none;
                animation: almSnowPopAnim 0.6s ease-out forwards;
                z-index: 20;
            }

            .alm-feather-loot-pop {
                position: absolute;
                top: 32%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 1.45rem;
                font-weight: 900;
                color: #fde047;
                text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
                pointer-events: none;
                animation: almSnowPopAnim 1.1s ease-out forwards;
                z-index: 25;
            }

            .alm-snow-hint {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(8, 18, 36, 0.82);
                border: 1px solid rgba(56, 189, 248, 0.25);
                color: #93c5fd;
                font-size: 0.74rem;
                font-weight: 700;
                padding: 4px 12px;
                border-radius: 999px;
                pointer-events: none;
                white-space: nowrap;
                z-index: 8;
            }

            @keyframes almSnowFloat {
                0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
                50% { transform: translate(-50%, -56%) scale(1.08) rotate(12deg); }
            }

            .alm-snowflake-item {
                position: absolute;
                font-size: 1.75rem;
                line-height: 1;
                transform: translate(-50%, -50%);
                filter: drop-shadow(0 0 8px rgba(186, 230, 253, 0.85));
                animation: almSnowFloat 2.2s ease-in-out infinite;
                pointer-events: none;
            }

            .alm-snowflake-item.golden {
                filter: drop-shadow(0 0 10px #facc15) drop-shadow(0 0 18px rgba(250, 204, 21, 0.95));
            }

            .alm-snowflake-item.emerald {
                filter: drop-shadow(0 0 12px #10b981) drop-shadow(0 0 22px rgba(16, 185, 129, 0.98));
            }

            @keyframes almSnowPopAnim {
                0% { opacity: 1; transform: translate(-50%, -50%) scale(0.9); }
                100% { opacity: 0; transform: translate(-50%, -140%) scale(1.15); }
            }

            .alm-snow-pop {
                position: absolute;
                font-size: 0.88rem;
                font-weight: 900;
                color: #bae6fd;
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.85);
                pointer-events: none;
                animation: almSnowPopAnim 0.65s ease-out forwards;
                z-index: 15;
            }

            .alm-snow-pop.golden, .alm-trash-pop.golden {
                color: #fde047;
                font-size: 1.02rem;
            }

            .alm-snow-pop.emerald, .alm-trash-pop.emerald {
                color: #34d399;
                font-size: 1.12rem;
            }

            .alm-trash-pop {
                position: absolute;
                font-size: 0.92rem;
                font-weight: 900;
                color: #fcd34d;
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.85);
                pointer-events: none;
                animation: almSnowPopAnim 0.65s ease-out forwards;
                z-index: 15;
            }

            /* Права панель: Прокачки + Топ зібраного ресурсу */
            .alm-snow-sidebar {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .alm-snow-side-box {
                background: #0e1526;
                border: 1px solid #1e2942;
                border-radius: 13px;
                padding: 10px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .alm-snow-side-title {
                font-size: 0.78rem;
                font-weight: 900;
                color: #93c5fd;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .alm-snow-upg-btn {
                width: 100%;
                background: #102138;
                border: 1.5px solid #244770;
                border-radius: 10px;
                padding: 9px 10px;
                text-align: left;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                gap: 4px;
                transition: transform 0.1s, border-color 0.15s, opacity 0.15s;
            }

            .alm-snow-upg-btn:hover:not(:disabled) {
                border-color: #38bdf8;
                transform: translateY(-1px);
            }

            .alm-snow-upg-btn:disabled {
                opacity: 0.52;
                cursor: not-allowed;
            }

            .alm-snow-upg-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 6px;
                font-size: 0.8rem;
                font-weight: 800;
                color: #f8fafc;
            }

            .alm-snow-upg-lvl {
                font-size: 0.72rem;
                font-weight: 800;
                color: #38bdf8;
                background: #0a1729;
                padding: 2px 7px;
                border-radius: 999px;
                white-space: nowrap;
            }

            .alm-snow-upg-bot {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.78rem;
                font-weight: 800;
            }

            .alm-snow-upg-val {
                color: #2ecc71;
            }

            .alm-snow-upg-cost {
                color: #7dd3fc;
            }

            .alm-snow-lb-list {
                display: flex;
                flex-direction: column;
                gap: 5px;
                max-height: 175px;
                overflow-y: auto;
            }

            .alm-snow-lb-row {
                background: #090e1a;
                border: 1px solid #19243b;
                border-radius: 8px;
                padding: 6px 8px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6px;
                font-size: 0.78rem;
            }

            .alm-snow-lb-row.is-player {
                border-color: #38bdf8;
                background: #0f233c;
            }

            .alm-snow-lb-rank {
                font-weight: 900;
                color: #f5b82e;
                min-width: 24px;
            }

            .alm-snow-lb-name {
                flex: 1;
                font-weight: 700;
                color: #f8fafc;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .alm-snow-lb-val {
                font-weight: 900;
                color: #7dd3fc;
                white-space: nowrap;
            }

            /* Кімната 80 (Сніжна буря + прокачки мобів і бурі) */
            .alm-storm-hero-card {
                width: 100%;
                background: linear-gradient(135deg, #101d3b, #1a2854);
                border: 1.5px solid #6366f1;
                border-radius: 16px;
                padding: 18px 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                margin-bottom: 14px;
                text-align: center;
                box-shadow: 0 0 24px rgba(99, 102, 241, 0.22);
            }

            .alm-storm-activate-btn {
                background: linear-gradient(90deg, #38bdf8, #818cf8);
                color: #060c1f;
                border: none;
                border-radius: 12px;
                padding: 12px 24px;
                font-size: 0.96rem;
                font-weight: 900;
                cursor: pointer;
                transition: transform 0.12s, opacity 0.15s;
            }

            .alm-storm-activate-btn:hover:not(:disabled) {
                transform: scale(1.03);
            }

            .alm-storm-activate-btn:disabled {
                opacity: 0.52;
                cursor: not-allowed;
            }

            .alm-r80-section-title {
                width: 100%;
                text-align: left;
                font-size: 0.8rem;
                font-weight: 900;
                color: #a5b4fc;
                text-transform: uppercase;
                letter-spacing: 0.6px;
                margin: 8px 0 6px 0;
            }

            .alm-r80-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 100%;
            }

            /* Екран руху до кімнати */
            .alm-walk-box {
                width: 100%;
                max-width: 380px;
                background: #0e1526;
                border: 1.5px solid #1e2942;
                border-radius: 14px;
                padding: 14px 16px;
                margin: 14px 0 18px 0;
            }

            .alm-walk-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.85rem;
                font-weight: 700;
                color: #94a3b8;
                margin-bottom: 10px;
            }

            .alm-walk-track {
                width: 100%;
                height: 7px;
                background: #192238;
                border-radius: 999px;
                overflow: hidden;
            }

            .alm-walk-fill {
                height: 100%;
                background: #38bdf8;
                border-radius: 999px;
                transition: width 0.1s linear;
            }

            .alm-walk-status-btn {
                background: #0e182b;
                border: 1.5px solid #1d3557;
                color: #38bdf8;
                border-radius: 10px;
                padding: 10px 20px;
                font-size: 0.88rem;
                font-weight: 800;
                cursor: pointer;
            }

            /* Вкладка "Множники" */
            .alm-mult-container {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 4px;
            }

            .alm-mult-row {
                background: #0e1526;
                border: 1px solid #1e2942;
                border-radius: 12px;
                padding: 12px 14px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
            }

            .alm-mult-summary {
                background: linear-gradient(135deg, #0e172a, #13223d);
                border: 1.5px solid #f5b82e;
                border-radius: 14px;
                padding: 16px 14px;
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 6px;
                margin-top: 4px;
            }

            /* Вкладка "Топ" (4 вкладка) */
            .alm-lb-filters {
                display: flex;
                gap: 6px;
                margin-bottom: 12px;
                flex-wrap: wrap;
            }

            .alm-lb-filter-btn {
                flex: 1;
                min-width: 105px;
                padding: 8px 6px;
                background: #0e1526;
                border: 1px solid #1e2942;
                border-radius: 9px;
                color: #cbd5e1;
                font-size: 0.78rem;
                font-weight: 800;
                cursor: pointer;
                text-align: center;
                transition: all 0.15s;
            }

            .alm-lb-filter-btn.active {
                background: #f5b82e;
                color: #0b101e;
                border-color: #f5b82e;
            }

            .alm-lb-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                max-height: 390px;
                overflow-y: auto;
            }

            .alm-lb-row {
                background: #0e1526;
                border: 1px solid #1e2942;
                border-radius: 11px;
                padding: 11px 14px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }

            .alm-lb-row.is-player {
                border: 1.5px solid #f5b82e;
                background: linear-gradient(135deg, #131b31, #1e2642);
            }

            .alm-lb-rank {
                font-weight: 900;
                font-size: 1.05rem;
                color: #f5b82e;
                min-width: 34px;
            }

            .alm-lb-name {
                flex: 1;
                font-weight: 800;
                font-size: 0.92rem;
                color: #f8fafc;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .alm-lb-val {
                font-weight: 900;
                font-size: 0.88rem;
                color: #2ecc71;
                white-space: nowrap;
            }
        `;
        document.head.appendChild(style);
    }

    function ensureDomSetup() {
        injectStyles();
        const tabNav = document.querySelector('.tab-nav');
        const gameScreen = document.getElementById('game-screen');
        if (!tabNav || !gameScreen) return;

        if (!document.getElementById('btn-tab-aura-larp')) {
            const mainBtn = document.createElement('button');
            mainBtn.id = 'btn-tab-aura-larp';
            mainBtn.className = 'tab-btn';
            mainBtn.textContent = '👾 Аура Ларп Монстер';
            mainBtn.onclick = function () {
                enterAuraLarpMonsterMode();
            };
            tabNav.appendChild(mainBtn);
        }

        if (!document.getElementById('alm-nav-home')) {
            const homeBtn = document.createElement('button');
            homeBtn.id = 'alm-nav-home';
            homeBtn.className = 'tab-btn alm-mode-nav-btn';
            homeBtn.style.display = 'none';
            homeBtn.textContent = '🏠 Додому';
            homeBtn.onclick = exitAuraLarpMonsterMode;
            tabNav.appendChild(homeBtn);
        }

        if (!document.getElementById('tab-aura-larp')) {
            const tabDiv = document.createElement('div');
            tabDiv.id = 'tab-aura-larp';
            tabDiv.className = 'tab-content';
            gameScreen.appendChild(tabDiv);
        }
    }

    function updateNavVisibility() {
        const tabNav = document.querySelector('.tab-nav');
        if (!tabNav) return;

        Array.from(tabNav.children).forEach(btn => {
            const isAlmBtn = btn.classList.contains('alm-mode-nav-btn');
            if (isAuraLarpModeActive) {
                btn.style.display = isAlmBtn ? '' : 'none';
            } else {
                btn.style.display = isAlmBtn ? 'none' : '';
            }
        });
    }

    function enterAuraLarpMonsterMode() {
        ensureDomSetup();
        const s = initAuraLarpMonsterState();
        isAuraLarpModeActive = true;
        activeLarpSubTab = s.savedSubTab || activeLarpSubTab || 'stairs';
        activeRoomStep = s.savedRoomStep || (ROOM_STEPS.includes(s.currentStep) ? s.currentStep : 10);

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

        if (!isGlobalTimeVerified && !isCheckingGlobalTime) {
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
    }

    function switchAuraLarpSubTab(subTab) {
        const s = initAuraLarpMonsterState();
        activeLarpSubTab = subTab;
        if (subTab === 'room') {
            if (ROOM_STEPS.includes(s.targetStep)) {
                activeRoomStep = s.targetStep;
            } else if (ROOM_STEPS.includes(s.currentStep)) {
                activeRoomStep = s.currentStep;
            }
        }
        persistAuraLarpState(false);
        renderAuraLarpMonsterUI(true);
    }

    // ------------------------------------------
    // РЕНДЕР ІНТЕРФЕЙСУ
    // ------------------------------------------
    function renderAuraLarpMonsterUI(scrollToCharacter) {
        ensureDomSetup();
        const s = initAuraLarpMonsterState();

        const container = document.getElementById('tab-aura-larp');
        if (!container) return;

        const existingScrollEl = document.getElementById('alm-stairs-scroll');
        const savedStairsScrollTop = existingScrollEl ? existingScrollEl.scrollTop : null;

        const isWideRoomOpen = activeLarpSubTab === 'room'
            && [20, 30, 50, 70].includes(activeRoomStep)
            && s.maxUnlockedStep >= activeRoomStep
            && s.currentStep === activeRoomStep
            && s.targetStep === activeRoomStep;

        if (isWideRoomOpen) {
            container.classList.add('alm-wide-mode');
        } else {
            container.classList.remove('alm-wide-mode');
        }

        const isMoving = s.currentStep !== s.targetStep;
        const visStep = getVisualStepPosition();
        const moveSpeed = getCharacterMoveSpeed();

        const posLabel = isMoving
            ? `${visStep.toFixed(1)} → ${s.targetStep}`
            : `${s.currentStep}`;

        let bannersHtml = '';

        if (noInternetError && getOfflineLarpPercent() > 0) {
            bannersHtml += `
                <div class="alm-offline-banner">
                    <span>📡 Немає інтернету! Не вдалося отримати глобальний час для підрахунку офлайн-заробітку Ларпів.</span>
                    <button class="alm-banner-btn" ${isCheckingGlobalTime ? 'disabled' : ''} onclick="window.AuraLarpMonster.retryGlobalTime()">
                        ${isCheckingGlobalTime ? 'Перевірка...' : '🔄 Перевірити знову'}
                    </button>
                </div>
            `;
        } else if (isCheckingGlobalTime && getOfflineLarpPercent() > 0) {
            bannersHtml += `
                <div class="alm-offline-banner" style="border-color: #38bdf8; background: #0e1b2e; color: #bae6fd;">
                    <span>⏳ Отримання глобального часу для підрахунку офлайн-фарму Ларпів...</span>
                </div>
            `;
        }

        if (offlineRewardReport && Math.floor(offlineRewardReport.earnedOffline) > 0) {
            bannersHtml += `
                <div class="alm-offline-banner reward">
                    <span>
                        🎉 Поки вас не було (<b>${formatDurationUk(offlineRewardReport.elapsedSec)}</b>, ${offlineRewardReport.offlinePct}% від ${offlineRewardReport.highestStep || getHighestUnlockedStepNumber()}-ї сходинки), зароблено:
                        <b style="color: #f5b82e;">+${formatLarpValue(offlineRewardReport.earnedOffline)} ${pluralizeLarp(offlineRewardReport.earnedOffline)}</b>!
                    </span>
                    <button class="alm-banner-btn" onclick="window.AuraLarpMonster.dismissOfflineReport()">Забрати</button>
                </div>
            `;
        }

        let html = `
            ${bannersHtml}
            <div class="alm-top-panel">
                <div class="alm-top-stats">
                    <div class="alm-balance-group">
                        <span class="alm-balance-num" id="alm-top-balance">${formatLarpValue(s.larp)}</span>
                        <span class="alm-balance-unit">ларпів</span>
                        <span class="alm-rate-pill">
                            <span class="alm-rate-pill-num" id="alm-top-rate">${formatMultValue(getLarpPerSecond())}</span>
                            <span>ларп/сек</span>
                        </span>
                    </div>
                    <div class="alm-pos-pill">
                        <span class="alm-pos-dot"></span>
                        <span id="alm-top-pos">${posLabel}</span>
                    </div>
                </div>

                <div class="alm-subtabs-bar">
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'stairs' ? 'active' : ''}" onclick="window.AuraLarpMonster.switchSubTab('stairs')">
                        Сходи
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'room' ? 'active' : ''}" onclick="window.AuraLarpMonster.switchSubTab('room')">
                        Кімнати
                        <span id="alm-room-tab-dot" class="alm-room-dot" style="display: ${s.maxUnlockedStep >= 10 ? 'inline-block' : 'none'};"></span>
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'multipliers' ? 'active' : ''}" onclick="window.AuraLarpMonster.switchSubTab('multipliers')">
                        Множники
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'leaderboard' ? 'active' : ''}" onclick="window.AuraLarpMonster.switchSubTab('leaderboard')">
                        Топ
                    </button>
                </div>
            </div>
        `;

        if (activeLarpSubTab === 'stairs') {
            const nextStep = s.maxUnlockedStep + 1;
            const nextStepObj = STAIRS_CONFIG.find(item => item.step === nextStep);

            html += `
                <div class="alm-main-box">
                    <div class="alm-stairs-scroll" id="alm-stairs-scroll">
                        <div class="alm-stairs-stage" id="alm-stairs-stage">
                            <div class="alm-stairs-divider"></div>
            `;

            for (let i = STAIRS_CONFIG.length - 1; i >= 0; i--) {
                const st = STAIRS_CONFIG[i];
                const isUnlocked = st.step <= s.maxUnlockedStep;
                const isNextBuy = st.step === nextStep;
                const isCurrentStatic = st.step === s.currentStep && !isMoving;

                const barLeft = STEP_BASE_LEFT + (st.step - 1) * STEP_INDENT_PER_LEVEL;

                let rowClasses = 'alm-stair-row';
                if (isUnlocked) rowClasses += ' alm-row-unlocked';
                if (st.step === 10) rowClasses += ' alm-row-room';
                else if (st.step === 20) rowClasses += ' alm-row-room-20';
                else if (st.step === 30) rowClasses += ' alm-row-room-30';
                else if (st.step === 40) rowClasses += ' alm-row-room-40';
                else if (st.step === 50) rowClasses += ' alm-row-room-50';
                else if (st.step === 60) rowClasses += ' alm-row-room-60';
                else if (st.step === 70) rowClasses += ' alm-row-room-70';
                else if (st.step === 80) rowClasses += ' alm-row-room-80';
                else if (st.step === 90) rowClasses += ' alm-row-room-90';
                if (isCurrentStatic) rowClasses += ' alm-row-current';

                let barClasses = 'alm-step-bar';
                if (st.step === 90 && isUnlocked) barClasses += ' room-bar-90';
                else if (st.step === 80 && isUnlocked) barClasses += ' room-bar-80';
                else if (st.step === 70 && isUnlocked) barClasses += ' room-bar-70';
                else if (st.step === 60 && isUnlocked) barClasses += ' room-bar-60';
                else if (st.step === 50 && isUnlocked) barClasses += ' room-bar-50';
                else if (st.step === 40 && isUnlocked) barClasses += ' room-bar-40';
                else if (st.step === 30 && isUnlocked) barClasses += ' room-bar-30';
                else if (st.step === 20 && isUnlocked) barClasses += ' room-bar-20';
                else if (st.step === 10 && isUnlocked) barClasses += ' room-bar';
                else if (isUnlocked) barClasses += ' unlocked';
                else if (isNextBuy) barClasses += ' next-buy';

                let rightActionHtml = '';
                if (isNextBuy) {
                    rightActionHtml = `
                        <button id="alm-inline-buy-btn" class="alm-inline-buy-btn" ${s.larp < st.cost ? 'disabled' : ''} onclick="event.stopPropagation(); window.AuraLarpMonster.unlockNextStep()">
                            ${formatLarpValue(st.cost)} ${pluralizeLarp(st.cost)}
                        </button>
                    `;
                } else if (st.step === 10 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(10)">
                            Кімната
                        </button>
                    `;
                } else if (st.step === 20 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn ice" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(20)">
                            ❄️ Сніг
                        </button>
                    `;
                } else if (st.step === 30 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn trash" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(30)">
                            🗑️ Сміття
                        </button>
                    `;
                } else if (st.step === 40 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn purple" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(40)">
                            ⚡ Прокачки
                        </button>
                    `;
                } else if (st.step === 50 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn boss" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(50)">
                            🐔 Курочка
                        </button>
                    `;
                } else if (st.step === 60 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn gold" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(60)">
                            ✨ Шанси
                        </button>
                    `;
                } else if (st.step === 70 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn garden" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(70)">
                            🥒 Овочі
                        </button>
                    `;
                } else if (st.step === 80 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn storm" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(80)">
                            🌨️ Буря
                        </button>
                    `;
                } else if (st.step === 90 && isUnlocked) {
                    rightActionHtml = `
                        <button class="alm-room-chip-btn combat" onclick="event.stopPropagation(); window.AuraLarpMonster.openRoom(90)">
                            ⚔️ Моби
                        </button>
                    `;
                }

                html += `
                    <div id="alm-stair-row-${st.step}" class="${rowClasses}" onclick="${isUnlocked ? `window.AuraLarpMonster.moveToStep(${st.step})` : (isNextBuy ? 'window.AuraLarpMonster.unlockNextStep()' : '')}">
                        <div class="alm-stair-left">
                            ${st.step < MAX_STEP ? `<div class="alm-step-connector ${st.step + 1 <= s.maxUnlockedStep ? 'unlocked' : ''}" style="left: ${barLeft + STEP_INDENT_PER_LEVEL + 4}px;"></div>` : ''}
                            <div class="${barClasses}" style="left: ${barLeft}px;"></div>
                        </div>
                        <div class="alm-stair-right">
                            <div class="alm-stair-info-left">
                                <span class="alm-step-number ${(isUnlocked || isNextBuy) ? 'bright' : ''}">${st.step}</span>
                                ${(isUnlocked || isNextBuy) ? `<span class="alm-mult-chip">x${formatMultValue(st.mult)}</span>` : ''}
                            </div>
                            <div>${rightActionHtml}</div>
                        </div>
                    </div>
                `;
            }

            html += `
                            <div id="alm-character-pin" class="alm-character-pin" title="Персонаж">
                                <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            if (nextStepObj) {
                html += `
                    <div class="alm-bottom-bar">
                        <div class="alm-bottom-meta">
                            Сходинка: <strong>${nextStepObj.step}</strong> &nbsp;•&nbsp; Множник: <span class="cyan">x${formatMultValue(nextStepObj.mult)}</span>
                        </div>
                        <button id="alm-bottom-buy-btn" class="alm-bottom-buy-btn" ${s.larp < nextStepObj.cost ? 'disabled' : ''} onclick="window.AuraLarpMonster.unlockNextStep()">
                            Купити — ${formatLarpValue(nextStepObj.cost)} ${pluralizeLarp(nextStepObj.cost)}
                        </button>
                    </div>
                `;
            } else {
                const curStair = STAIRS_CONFIG.find(item => item.step === s.currentStep) || STAIRS_CONFIG[MAX_STEP - 1];
                html += `
                    <div class="alm-bottom-bar">
                        <div class="alm-bottom-meta">
                            Поточна сходинка: <strong>${s.currentStep}</strong> &nbsp;•&nbsp; Множник: <span class="cyan">x${formatMultValue(curStair.mult)}</span>
                        </div>
                        <button class="alm-bottom-buy-btn" disabled>Усі ${MAX_STEP} сходинок відкрито</button>
                    </div>
                `;
            }
        } else if (activeLarpSubTab === 'room') {
            html += `<div class="alm-main-box">`;

            // Перемикач усіх 8 кімнат (10, 20, 30, 40, 50, 60, 70, 80)
            html += `
                <div class="alm-room-selector">
                    <button class="alm-room-sel-btn ${activeRoomStep === 10 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(10)">
                        🚪 10 сх.
                    </button>
                    <button class="alm-room-sel-btn ${activeRoomStep === 20 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(20)">
                        ❄️ 20 сх.
                    </button>
                    <button class="alm-room-sel-btn ${activeRoomStep === 30 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(30)">
                        🗑️ 30 сх.
                    </button>
                    <button class="alm-room-sel-btn ${activeRoomStep === 40 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(40)">
                        ⚡ 40 сх.
                    </button>
                    <button class="alm-room-sel-btn ${activeRoomStep === 50 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(50)">
                        🐔 50 сх.
                    </button>
                    <button class="alm-room-sel-btn ${activeRoomStep === 60 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(60)">
                        ✨ 60 сх.
                    </button>
                    <button class="alm-room-sel-btn ${activeRoomStep === 70 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(70)">
                        🥒 70 сх.
                    </button>
                    <button class="alm-room-sel-btn ${activeRoomStep === 80 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(80)">
                        🌨️ 80 сх.
                    </button>
                    <button class="alm-room-sel-btn ${activeRoomStep === 90 ? 'active' : ''}" onclick="window.AuraLarpMonster.openRoom(90)">
                        ⚔️ 90 сх.
                    </button>
                </div>
            `;

            const roomNames = {
                10: 'КІМНАТА — 10 СХОДИНКА',
                20: 'ЗОНА СНІЖИНОК — 20 СХОДИНКА',
                30: 'ПРИБИРАННЯ СМІТТЯ — 30 СХОДИНКА',
                40: 'ЗАЛ ПРИСКОРЕННЯ ТА ОФЛАЙНУ — 40 СХОДИНКА',
                50: `АРЕНА «${CHICKEN_MOB_NAME.toUpperCase()}» — 50 СХОДИНКА`,
                60: 'ЗАЛ РІДКІСНИХ ШАНСІВ — 60 СХОДИНКА',
                70: 'ОРАНЖЕРЕЯ ОВОЧІВ І ФРУКТІВ — 70 СХОДИНКА',
                80: 'БАШТА СНІЖНОЇ БУРІ — 80 СХОДИНКА',
                90: 'ЗАЛ ПРОКАЧКИ МОБІВ — 90 СХОДИНКА'
            };

            if (s.maxUnlockedStep < activeRoomStep) {
                html += `
                    <div class="alm-room-viewport">
                        <div class="alm-room-subtitle">${roomNames[activeRoomStep]}</div>
                        <div style="color: #94a3b8; font-size: 0.95rem; max-width: 340px; line-height: 1.5; margin-bottom: 16px;">
                            Відкрийте та підніміться на <b style="color: #38bdf8;">${activeRoomStep} сходинку</b> у вкладці «Сходи», щоб увійти до цієї кімнати.
                        </div>
                        <button class="alm-walk-status-btn" onclick="window.AuraLarpMonster.switchSubTab('stairs')">
                            Перейти до сходів
                        </button>
                    </div>
                `;
            } else if (s.currentStep !== activeRoomStep || s.targetStep !== activeRoomStep) {
                const distSteps = Math.abs(activeRoomStep - visStep);
                const timeLeftSec = distSteps / moveSpeed;
                const totalDist = Math.max(1, activeRoomStep - 1);
                const pct = Math.min(100, Math.max(0, (1 - distSteps / totalDist) * 100));
                const isHeadingToRoom = s.targetStep === activeRoomStep;

                html += `
                    <div class="alm-room-viewport">
                        <div style="font-size: 1.05rem; font-weight: 800; color: #f8fafc;">
                            ${isHeadingToRoom ? `Персонаж іде до ${activeRoomStep}-ї сходинки` : `Персонаж на ${s.currentStep}-й сходинці`}
                        </div>
                        <div class="alm-walk-box">
                            <div class="alm-walk-header">
                                <span>Позиція: <strong id="alm-room-walk-pos" style="color: #38bdf8;">${visStep.toFixed(1)}</strong> / ${activeRoomStep}</span>
                                <span id="alm-room-walk-sec">${timeLeftSec.toFixed(1)} сек</span>
                            </div>
                            <div class="alm-walk-track">
                                <div id="alm-room-walk-fill" class="alm-walk-fill" style="width: ${pct.toFixed(1)}%;"></div>
                            </div>
                        </div>
                        ${isHeadingToRoom
                            ? `<button class="alm-walk-status-btn" disabled>Персонаж у дорозі...</button>`
                            : `<button class="alm-walk-status-btn" onclick="window.AuraLarpMonster.moveToStep(${activeRoomStep}); window.AuraLarpMonster.render(false);">Піти до ${activeRoomStep}-ї сходинки</button>`
                        }
                    </div>
                `;
            } else if (activeRoomStep === 10) {
                // КІМНАТА 10 СХОДИНКИ
                const curMult = getRoomLarpMultiplier();
                const nextMult = getNextRoomLarpMultiplier();
                const cost = getRoomUpgradeCost();

                html += `
                    <div class="alm-room-viewport">
                        <div class="alm-room-subtitle">${roomNames[10]}</div>
                        <button id="alm-room-upgrade-card" class="alm-room-upgrade-card" ${s.larp < cost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyRoomMultiplierUpgrade()">
                            <div class="alm-room-card-label">ПРОКАЧКА МНОЖНИКА ЛАРПІВ</div>
                            <div class="alm-room-lvl-badge">Рів. ${s.roomMultLvl}</div>
                            <div class="alm-room-mult-transition">x${formatMultValue(curMult)}&gt;x${formatMultValue(nextMult)}</div>
                            <div class="alm-room-cost-text">${formatLarpValue(cost)} ${pluralizeLarp(cost)}</div>
                        </button>
                    </div>
                `;
            } else if (activeRoomStep === 20) {
                // КІМНАТА 20 СХОДИНКИ — ЗОНА СНІЖИНОК
                const snowMultCur = getSnowMultiplier();
                const snowMultNext = getNextSnowMultiplier();
                const snowMultCost = getSnowMultUpgradeCost();

                const speedLvl = s.snowSpeedLvl || 0;
                const isSpeedMax = speedLvl >= SNOW_SPEED_MAX_LVL;
                const speedCur = getSnowSpawnInterval();
                const speedNext = getNextSnowSpawnInterval();
                const speedCost = getSnowSpeedUpgradeCost();

                const snowLarpCur = getSnowLarpMultiplier();
                const snowLarpNext = getNextSnowLarpMultiplier();
                const snowLarpCost = getSnowLarpUpgradeCost();

                const stormActive = isSnowstormActive();
                const stormRemSec = stormActive ? Math.max(0, (s.stormActiveEndMs - getCurrentNowMs()) / 1000) : 0;

                let snowflakesDom = '';
                activeSnowflakes.forEach(sf => {
                    const rClass = sf.rarity && sf.rarity !== 'normal' ? sf.rarity : '';
                    snowflakesDom += `<div id="alm-sf-${sf.id}" class="alm-snowflake-item ${rClass}" style="left: ${sf.xPct}%; top: ${sf.yPct}%;">❄️</div>`;
                });

                html += `
                    <div class="alm-snow-layout">
                        <div class="alm-snow-zone-col">
                            <div id="alm-snow-storm-banner" class="alm-storm-active-strip" style="display: ${stormActive ? 'flex' : 'none'};">
                                🌨️ СНІЖНА БУРЯ АКТИВНА! Залишилось: ${formatTimerMmSs(stormRemSec)} (спавн кожні ${getStormSnowSpawnInterval()}с)
                            </div>

                            <div class="alm-snow-hud">
                                <div class="alm-snow-stat">❄️ Сніжинок: <strong id="alm-snow-balance">${formatSnowValue(s.snow)}</strong></div>
                                <div class="alm-snow-stat">На полі: <strong id="alm-snow-active-count">${activeSnowflakes.length} / ${MAX_SNOWFLAKES}</strong></div>
                                <div class="alm-snow-stat">Всього: <strong id="alm-snow-total">${formatSnowValue(s.totalSnow)}</strong></div>
                            </div>

                            <div id="alm-snow-field" class="alm-snow-field">
                                ${snowflakesDom}
                                <div class="alm-snow-hint">Проведіть пальцем по сніжинках, щоб зібрати</div>
                            </div>
                        </div>

                        <div class="alm-snow-sidebar">
                            <div class="alm-snow-side-box">
                                <div class="alm-snow-side-title">
                                    <span>⬆️ Прокачки зони</span>
                                </div>

                                <button id="alm-snow-upg-1" class="alm-snow-upg-btn" ${s.snow < snowMultCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buySnowMultUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>1) Множник сніжинок</span>
                                        <span class="alm-snow-upg-lvl">Рів. ${s.snowMultLvl || 0}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">x${snowMultCur} → x${snowMultNext}</span>
                                        <span class="alm-snow-upg-cost">❄️ ${formatSnowValue(snowMultCost)}</span>
                                    </div>
                                </button>

                                <button id="alm-snow-upg-2" class="alm-snow-upg-btn" ${(isSpeedMax || s.snow < speedCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buySnowSpeedUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>2) Швидкість спавну</span>
                                        <span class="alm-snow-upg-lvl">${speedLvl}/${SNOW_SPEED_MAX_LVL}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">${isSpeedMax ? `${speedCur}с (МАКС)` : `${speedCur}с → ${speedNext}с`}</span>
                                        <span class="alm-snow-upg-cost">${isSpeedMax ? 'МАКС' : `❄️ ${formatSnowValue(speedCost)}`}</span>
                                    </div>
                                </button>

                                <button id="alm-snow-upg-3" class="alm-snow-upg-btn" ${s.snow < snowLarpCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buySnowLarpUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>3) Множник Ларпів</span>
                                        <span class="alm-snow-upg-lvl">Рів. ${s.snowLarpMultLvl || 0}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">x${formatMultValue(snowLarpCur)} → x${formatMultValue(snowLarpNext)}</span>
                                        <span class="alm-snow-upg-cost">❄️ ${formatSnowValue(snowLarpCost)}</span>
                                    </div>
                                </button>
                            </div>

                            <div class="alm-snow-side-box">
                                <div class="alm-snow-side-title">
                                    <span>🏆 Топ зібраного снігу</span>
                                </div>
                                <div id="alm-snow-lb-list" class="alm-snow-lb-list">
                                    <div style="color:#94a3b8;font-size:0.78rem;text-align:center;padding:8px;">Завантаження...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else if (activeRoomStep === 30) {
                // КІМНАТА 30 СХОДИНКИ — ПРИБИРАННЯ СМІТТЯ
                const trMultCur = getTrashMultiplier();
                const trMultNext = getNextTrashMultiplier();
                const trMultCost = getTrashMultUpgradeCost();

                const trSpeedLvl = s.trashSpeedLvl || 0;
                const isTrSpeedMax = trSpeedLvl >= TRASH_SPEED_MAX_LVL;
                const trSpeedCur = getTrashSpawnInterval();
                const trSpeedNext = getNextTrashSpawnInterval();
                const trSpeedCost = getTrashSpeedUpgradeCost();

                const trLarpCur = getTrashLarpMultiplier();
                const trLarpNext = getNextTrashLarpMultiplier();
                const trLarpCost = getTrashLarpUpgradeCost();

                let trashDom = '';
                activeTrashItems.forEach(tr => {
                    const rClass = tr.rarity && tr.rarity !== 'normal' ? tr.rarity : '';
                    trashDom += `<div id="alm-tr-${tr.id}" class="alm-trash-item ${rClass}" style="left: ${tr.xPct}%; top: ${tr.yPct}%;">${tr.icon}</div>`;
                });

                html += `
                    <div class="alm-snow-layout">
                        <div class="alm-snow-zone-col">
                            <div class="alm-snow-hud" style="border-color: #78350f;">
                                <div class="alm-snow-stat">🗑️ Сміття: <strong id="alm-trash-balance" style="color: #fbbf24;">${formatTrashValue(s.trash)}</strong></div>
                                <div class="alm-snow-stat">На полі: <strong id="alm-trash-active-count" style="color: #fbbf24;">${activeTrashItems.length} / ${MAX_TRASH_ITEMS}</strong></div>
                                <div class="alm-snow-stat">Всього: <strong id="alm-trash-total" style="color: #fbbf24;">${formatTrashValue(s.totalTrash)}</strong></div>
                            </div>

                            <div id="alm-trash-field" class="alm-trash-field">
                                <div class="alm-trash-center-bin">
                                    <div class="alm-trash-center-icon">♻️</div>
                                    <div class="alm-trash-center-label">Сюди</div>
                                </div>
                                ${trashDom}
                                <div class="alm-snow-hint" style="color: #fde68a; border-color: rgba(245, 158, 11, 0.35);">Перетягніть сміття в центр зони</div>
                            </div>
                        </div>

                        <div class="alm-snow-sidebar">
                            <div class="alm-snow-side-box">
                                <div class="alm-snow-side-title" style="color: #fcd34d;">
                                    <span>⬆️ Прокачки прибирання</span>
                                </div>

                                <button id="alm-trash-upg-1" class="alm-snow-upg-btn" ${s.trash < trMultCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyTrashMultUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>1) Множник сміття</span>
                                        <span class="alm-snow-upg-lvl" style="color: #fbbf24;">Рів. ${s.trashMultLvl || 0}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">x${trMultCur} → x${trMultNext}</span>
                                        <span class="alm-snow-upg-cost" style="color: #fcd34d;">🗑️ ${formatTrashValue(trMultCost)}</span>
                                    </div>
                                </button>

                                <button id="alm-trash-upg-2" class="alm-snow-upg-btn" ${(isTrSpeedMax || s.trash < trSpeedCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyTrashSpeedUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>2) Швидкість спавну</span>
                                        <span class="alm-snow-upg-lvl" style="color: #fbbf24;">${trSpeedLvl}/${TRASH_SPEED_MAX_LVL}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">${isTrSpeedMax ? `${trSpeedCur}с (МАКС)` : `${trSpeedCur}с → ${trSpeedNext}с`}</span>
                                        <span class="alm-snow-upg-cost" style="color: #fcd34d;">${isTrSpeedMax ? 'МАКС' : `🗑️ ${formatTrashValue(trSpeedCost)}`}</span>
                                    </div>
                                </button>

                                <button id="alm-trash-upg-3" class="alm-snow-upg-btn" ${s.trash < trLarpCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyTrashLarpUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>3) Множник Ларпів</span>
                                        <span class="alm-snow-upg-lvl" style="color: #fbbf24;">Рів. ${s.trashLarpMultLvl || 0}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">x${formatMultValue(trLarpCur)} → x${formatMultValue(trLarpNext)}</span>
                                        <span class="alm-snow-upg-cost" style="color: #fcd34d;">🗑️ ${formatTrashValue(trLarpCost)}</span>
                                    </div>
                                </button>
                            </div>

                            <div class="alm-snow-side-box">
                                <div class="alm-snow-side-title" style="color: #fcd34d;">
                                    <span>🏆 Топ зібраного сміття</span>
                                </div>
                                <div id="alm-trash-lb-list" class="alm-snow-lb-list">
                                    <div style="color:#94a3b8;font-size:0.78rem;text-align:center;padding:8px;">Завантаження...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else if (activeRoomStep === 40) {
                // КІМНАТА 40 СХОДИНКИ — ШВИДКІСТЬ ПЕРСОНАЖА ТА ОФЛАЙН-ЗАРОБІТОК
                const curSpd = getCharacterMoveSpeed();
                const nextSpd = getNextCharacterMoveSpeed();
                const spdCost = getSpeedUpgradeCost();

                const curOffPct = getOfflineLarpPercent();
                const nextOffPct = getNextOfflineLarpPercent();
                const offCost = getOfflineUpgradeCost();

                html += `
                    <div class="alm-room-viewport">
                        <div class="alm-room-subtitle">${roomNames[40]}</div>
                        <div class="alm-r40-grid">
                            <button id="alm-r40-speed-btn" class="alm-r40-card" ${s.larp < spdCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyStepSpeedUpgrade()">
                                <div class="alm-room-card-label">1) ШВИДКІСТЬ ПО СХОДИНКАХ</div>
                                <div class="alm-r40-badge">Рів. ${s.stepSpeedLvl || 0} (+${(s.stepSpeedLvl || 0) * SPEED_UPG_STEP_PCT}%)</div>
                                <div class="alm-r40-val">${formatMultValue(curSpd)} → ${formatMultValue(nextSpd)}<div style="font-size:0.82rem;color:#c084fc;margin-top:2px;">сходинок / сек</div></div>
                                <div class="alm-room-cost-text">${formatLarpValue(spdCost)} ${pluralizeLarp(spdCost)}</div>
                            </button>

                            <button id="alm-r40-offline-btn" class="alm-r40-card" ${s.larp < offCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyOfflineLarpUpgrade()">
                                <div class="alm-room-card-label">2) ЗАРОБІТОК ЛАРПІВ ОФЛАЙН</div>
                                <div class="alm-r40-badge">Рів. ${s.offlineLarpLvl || 0}</div>
                                <div class="alm-r40-val">${curOffPct}% → ${nextOffPct}%<div style="font-size:0.82rem;color:#c084fc;margin-top:2px;">від доходу найвищої сходинки</div></div>
                                <div class="alm-room-cost-text">${formatLarpValue(offCost)} ${pluralizeLarp(offCost)}</div>
                            </button>
                        </div>
                    </div>
                `;
            } else if (activeRoomStep === 50) {
                // КІМНАТА 50 СХОДИНКИ — МОБ БОЙОВА КВОЧКА РЯБА
                const fMultCur = getFeatherMultiplier();
                const fMultNext = getNextFeatherMultiplier();
                const fMultCost = getFeatherMultUpgradeCost();

                const fLarpCur = getFeatherLarpMultiplier();
                const fLarpNext = getNextFeatherLarpMultiplier();
                const fLarpCost = getFeatherLarpUpgradeCost();

                const isRespawning = Boolean(s.chickenRespawnEndMs);
                const remSec = isRespawning ? Math.max(0, (s.chickenRespawnEndMs - getCurrentNowMs()) / 1000) : 0;
                const hpPct = Math.max(0, Math.min(100, (s.chickenHp / CHICKEN_MAX_HP) * 100));
                const currentDrop = Math.round(CHICKEN_BASE_FEATHER_DROP * fMultCur);
                const currentDmg = getChickenClickDamage();

                html += `
                    <div class="alm-snow-layout">
                        <div class="alm-snow-zone-col">
                            <div class="alm-snow-hud" style="border-color: #7f1d1d;">
                                <div class="alm-snow-stat">🪶 Пір'їн: <strong id="alm-feather-balance" style="color: #fde047;">${formatFeatherValue(s.feathers)}</strong></div>
                                <div class="alm-snow-stat">Дроп: <strong style="color: #fde047;">${formatFeatherValue(currentDrop)} 🪶</strong></div>
                                <div class="alm-snow-stat">Всього: <strong id="alm-feather-total" style="color: #fde047;">${formatFeatherValue(s.totalFeathers)}</strong></div>
                            </div>

                            <div id="alm-chicken-arena" class="alm-chicken-arena">
                                <div class="alm-chicken-title">🐔 ${CHICKEN_MOB_NAME}</div>

                                ${isRespawning ? `
                                    <div style="font-size: 3.4rem; opacity: 0.45;">🥚</div>
                                    <div style="font-size: 0.95rem; font-weight: 800; color: #fca5a5;">
                                        Моб переможений! Поява через:
                                    </div>
                                    <div id="alm-chicken-respawn-timer" style="font-size: 2rem; font-weight: 900; color: #fde047;">
                                        ${formatTimerMmSs(remSec)}
                                    </div>
                                ` : `
                                    <div class="alm-chicken-hp-wrap">
                                        <div class="alm-chicken-hp-bar">
                                            <div id="alm-chicken-hp-fill" class="alm-chicken-hp-fill" style="width: ${hpPct.toFixed(1)}%;"></div>
                                        </div>
                                        <div id="alm-chicken-hp-text" class="alm-chicken-hp-text">${Math.ceil(s.chickenHp)} / ${CHICKEN_MAX_HP} HP</div>
                                    </div>

                                    <button id="alm-chicken-mob-btn" class="alm-chicken-mob-btn" onclick="window.AuraLarpMonster.attackChicken(event)">
                                        🐔
                                    </button>

                                    <div style="font-size: 0.8rem; font-weight: 800; color: #fecaca;">
                                        Клікайте по мобу, щоб атакувати (<b>-${currentDmg} HP</b> за клік)
                                    </div>
                                `}
                            </div>
                        </div>

                        <div class="alm-snow-sidebar">
                            <div class="alm-snow-side-box">
                                <div class="alm-snow-side-title" style="color: #fde047;">
                                    <span>⬆️ Прокачки пір'я</span>
                                </div>

                                <button id="alm-feather-upg-1" class="alm-snow-upg-btn" ${s.feathers < fMultCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyFeatherMultUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>1) Множник пір'я</span>
                                        <span class="alm-snow-upg-lvl" style="color: #fde047;">Рів. ${s.featherMultLvl || 0}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">x${formatMultValue(fMultCur)} → x${formatMultValue(fMultNext)}</span>
                                        <span class="alm-snow-upg-cost" style="color: #fde047;">🪶 ${formatFeatherValue(fMultCost)}</span>
                                    </div>
                                </button>

                                <button id="alm-feather-upg-2" class="alm-snow-upg-btn" ${s.feathers < fLarpCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyFeatherLarpUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>2) Множник Ларпів</span>
                                        <span class="alm-snow-upg-lvl" style="color: #fde047;">Рів. ${s.featherLarpMultLvl || 0}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">x${formatMultValue(fLarpCur)} → x${formatMultValue(fLarpNext)}</span>
                                        <span class="alm-snow-upg-cost" style="color: #fde047;">🪶 ${formatFeatherValue(fLarpCost)}</span>
                                    </div>
                                </button>
                            </div>

                            <div class="alm-snow-side-box">
                                <div class="alm-snow-side-title" style="color: #fde047;">
                                    <span>🏆 Топ зібраного пір'я</span>
                                </div>
                                <div id="alm-feather-lb-list" class="alm-snow-lb-list">
                                    <div style="color:#94a3b8;font-size:0.78rem;text-align:center;padding:8px;">Завантаження...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else if (activeRoomStep === 60) {
                // КІМНАТА 60 СХОДИНКИ — ШАНСИ ЗОЛОТИХ ТА СМАРАГДОВИХ СНІЖИНОК І СМІТТЯ
                const gSnowLvl = s.goldSnowLvl || 0;
                const gSnowCur = getGoldSnowChancePct();
                const gSnowNext = Number(Math.min(100, gSnowCur + GOLD_SNOW_STEP_PCT).toFixed(2));
                const gSnowCost = getGoldSnowUpgradeCost();
                const gSnowMax = gSnowLvl >= GOLD_SNOW_MAX_LVL;

                const eSnowLvl = s.emeraldSnowLvl || 0;
                const eSnowCur = getEmeraldSnowChancePct();
                const eSnowNext = Number(Math.min(100, eSnowCur + EMERALD_SNOW_STEP_PCT).toFixed(2));
                const eSnowCost = getEmeraldSnowUpgradeCost();
                const eSnowMax = eSnowLvl >= EMERALD_SNOW_MAX_LVL;

                const gTrashLvl = s.goldTrashLvl || 0;
                const gTrashCur = getGoldTrashChancePct();
                const gTrashNext = Number(Math.min(100, gTrashCur + GOLD_TRASH_STEP_PCT).toFixed(2));
                const gTrashCost = getGoldTrashUpgradeCost();
                const gTrashMax = gTrashLvl >= GOLD_TRASH_MAX_LVL;

                const eTrashLvl = s.emeraldTrashLvl || 0;
                const eTrashCur = getEmeraldTrashChancePct();
                const eTrashNext = Number(Math.min(100, eTrashCur + EMERALD_TRASH_STEP_PCT).toFixed(2));
                const eTrashCost = getEmeraldTrashUpgradeCost();
                const eTrashMax = eTrashLvl >= EMERALD_TRASH_MAX_LVL;

                html += `
                    <div class="alm-room-viewport" style="min-height: auto; padding: 12px 6px;">
                        <div class="alm-room-subtitle">${roomNames[60]}</div>
                        <div class="alm-r40-grid">
                            <button id="alm-r60-btn-1" class="alm-r40-card gold-theme" ${(gSnowMax || s.larp < gSnowCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyGoldSnowUpgrade()">
                                <div class="alm-room-card-label">1) ШАНС ЗОЛОТОЇ СНІЖИНКИ</div>
                                <div class="alm-r40-badge gold">Рів. ${gSnowLvl}</div>
                                <div class="alm-r40-val">${gSnowMax ? `${gSnowCur}% (МАКС)` : `${gSnowCur}% → ${gSnowNext}%`}</div>
                                <div class="alm-room-cost-text">${gSnowMax ? 'МАКС' : `${formatLarpValue(gSnowCost)} ${pluralizeLarp(gSnowCost)}`}</div>
                            </button>

                            <button id="alm-r60-btn-2" class="alm-r40-card emerald-theme" ${(eSnowMax || s.larp < eSnowCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyEmeraldSnowUpgrade()">
                                <div class="alm-room-card-label">2) ШАНС СМАРАГДОВОЇ СНІЖИНКИ</div>
                                <div class="alm-r40-badge emerald">Рів. ${eSnowLvl}</div>
                                <div class="alm-r40-val">${eSnowMax ? `${eSnowCur.toFixed(2)}% (МАКС)` : `${eSnowCur.toFixed(2)}% → ${eSnowNext.toFixed(2)}%`}</div>
                                <div class="alm-room-cost-text">${eSnowMax ? 'МАКС' : `${formatLarpValue(eSnowCost)} ${pluralizeLarp(eSnowCost)}`}</div>
                            </button>

                            <button id="alm-r60-btn-3" class="alm-r40-card gold-theme" ${(gTrashMax || s.larp < gTrashCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyGoldTrashUpgrade()">
                                <div class="alm-room-card-label">3) ШАНС ЗОЛОТОГО СМІТТЯ</div>
                                <div class="alm-r40-badge gold">Рів. ${gTrashLvl}</div>
                                <div class="alm-r40-val">${gTrashMax ? `${gTrashCur}% (МАКС)` : `${gTrashCur}% → ${gTrashNext}%`}</div>
                                <div class="alm-room-cost-text">${gTrashMax ? 'МАКС' : `${formatLarpValue(gTrashCost)} ${pluralizeLarp(gTrashCost)}`}</div>
                            </button>

                            <button id="alm-r60-btn-4" class="alm-r40-card emerald-theme" ${(eTrashMax || s.larp < eTrashCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyEmeraldTrashUpgrade()">
                                <div class="alm-room-card-label">4) ШАНС СМАРАГДОВОГО СМІТТЯ</div>
                                <div class="alm-r40-badge emerald">Рів. ${eTrashLvl}</div>
                                <div class="alm-r40-val">${eTrashMax ? `${eTrashCur.toFixed(2)}% (МАКС)` : `${eTrashCur.toFixed(2)}% → ${eTrashNext.toFixed(2)}%`}</div>
                                <div class="alm-room-cost-text">${eTrashMax ? 'МАКС' : `${formatLarpValue(eTrashCost)} ${pluralizeLarp(eTrashCost)}`}</div>
                            </button>
                        </div>
                    </div>
                `;
            } else if (activeRoomStep === 70) {
                // КІМНАТА 70 СХОДИНКИ — ОБ'ЄДНАННЯ ОВОЧІВ І ФРУКТІВ (ВІТАМІНИ)
                const vitMultCur = getVitaminMultiplier();
                const vitMultNext = getNextVitaminMultiplier();
                const vitMultCost = getVitaminMultUpgradeCost();

                const lv2Lvl = s.mergeLv2ChanceLvl || 0;
                const isLv2Max = lv2Lvl >= MERGE_LV2_MAX_LVL;
                const lv2Cur = getMergeLv2ChancePct();
                const lv2Next = getNextMergeLv2ChancePct();
                const lv2Cost = getMergeLv2UpgradeCost();

                const mgLarpCur = getMergeLarpMultiplier();
                const mgLarpNext = getNextMergeLarpMultiplier();
                const mgLarpCost = getMergeLarpUpgradeCost();

                let mergeItemsDom = '';
                activeMergeItems.forEach(it => {
                    const tier = getMergeTierInfo(it.level);
                    mergeItemsDom += `
                        <div id="alm-mg-${it.id}" class="alm-merge-item lvl-${it.level}" style="left: ${it.xPct}%; top: ${it.yPct}%;">
                            <span class="alm-merge-emoji">${tier.icon}</span>
                            <span class="alm-merge-badge">${it.level}</span>
                        </div>
                    `;
                });

                html += `
                    <div class="alm-snow-layout">
                        <div class="alm-snow-zone-col">
                            <div class="alm-snow-hud" style="border-color: #065f46;">
                                <div class="alm-snow-stat">💊 Вітамінів: <strong id="alm-vitamin-balance" style="color: #34d399;">${formatVitaminValue(s.vitamins)}</strong></div>
                                <div class="alm-snow-stat">На полі: <strong id="alm-merge-active-count" style="color: #34d399;">${activeMergeItems.length} / ${MAX_MERGE_ITEMS}</strong></div>
                                <div class="alm-snow-stat">Всього: <strong id="alm-vitamin-total" style="color: #34d399;">${formatVitaminValue(s.totalVitamins)}</strong></div>
                            </div>

                            <div id="alm-merge-field" class="alm-merge-field">
                                ${mergeItemsDom}
                                <div class="alm-snow-hint" style="color: #a7f3d0; border-color: rgba(16, 185, 129, 0.35);">Перетягніть однаковий овоч/фрукт один на одного (до 16 рівня)</div>
                            </div>
                        </div>

                        <div class="alm-snow-sidebar">
                            <div class="alm-snow-side-box">
                                <div class="alm-snow-side-title" style="color: #6ee7b7;">
                                    <span>⬆️ Прокачки оранжереї</span>
                                </div>

                                <button id="alm-merge-upg-1" class="alm-snow-upg-btn" ${s.vitamins < vitMultCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyVitaminMultUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>1) Множник вітамінів</span>
                                        <span class="alm-snow-upg-lvl" style="color: #34d399;">Рів. ${s.vitaminMultLvl || 0}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">x${formatMultValue(vitMultCur)} → x${formatMultValue(vitMultNext)}</span>
                                        <span class="alm-snow-upg-cost" style="color: #6ee7b7;">💊 ${formatVitaminValue(vitMultCost)}</span>
                                    </div>
                                </button>

                                <button id="alm-merge-upg-2" class="alm-snow-upg-btn" ${(isLv2Max || s.vitamins < lv2Cost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyMergeLv2Upgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>2) Шанс на помідор (2 рів.)</span>
                                        <span class="alm-snow-upg-lvl" style="color: #34d399;">${lv2Lvl}/${MERGE_LV2_MAX_LVL}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">${isLv2Max ? `${lv2Cur}% (МАКС)` : `${lv2Cur}% → ${lv2Next}%`}</span>
                                        <span class="alm-snow-upg-cost" style="color: #6ee7b7;">${isLv2Max ? 'МАКС' : `💊 ${formatVitaminValue(lv2Cost)}`}</span>
                                    </div>
                                </button>

                                <button id="alm-merge-upg-3" class="alm-snow-upg-btn" ${s.vitamins < mgLarpCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyMergeLarpUpgrade()">
                                    <div class="alm-snow-upg-top">
                                        <span>3) Множник Ларпів</span>
                                        <span class="alm-snow-upg-lvl" style="color: #34d399;">Рів. ${s.mergeLarpMultLvl || 0}</span>
                                    </div>
                                    <div class="alm-snow-upg-bot">
                                        <span class="alm-snow-upg-val">x${formatMultValue(mgLarpCur)} → x${formatMultValue(mgLarpNext)}</span>
                                        <span class="alm-snow-upg-cost" style="color: #6ee7b7;">💊 ${formatVitaminValue(mgLarpCost)}</span>
                                    </div>
                                </button>
                            </div>

                            <div class="alm-snow-side-box">
                                <div class="alm-snow-side-title" style="color: #6ee7b7;">
                                    <span>🏆 Топ зібраних вітамінів</span>
                                </div>
                                <div id="alm-vitamin-lb-list" class="alm-snow-lb-list">
                                    <div style="color:#94a3b8;font-size:0.78rem;text-align:center;padding:8px;">Завантаження...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else if (activeRoomStep === 80) {
                // КІМНАТА 80 СХОДИНКИ — СНІЖНА БУРЯ
                const now = getCurrentNowMs();
                const stormActive = Boolean(s.stormActiveEndMs && now < s.stormActiveEndMs);
                const stormOnCd = Boolean(s.stormCooldownEndMs && now < s.stormCooldownEndMs);

                const durCur = getStormDurationMinutes();
                const durNext = getNextStormDurationMinutes();
                const durCost = getStormDurationUpgradeCost();

                const cdLvl = s.stormCooldownLvl || 0;
                const isCdMax = cdLvl >= STORM_COOLDOWN_MAX_LVL;
                const cdCur = getStormCooldownHours();
                const cdNext = getNextStormCooldownHours();
                const cdCost = getStormCooldownUpgradeCost();

                const stSpdLvl = s.stormSpeedLvl || 0;
                const isStSpdMax = stSpdLvl >= STORM_SPAWN_MAX_LVL;
                const stSpdCur = getStormSnowSpawnInterval();
                const stSpdNext = getNextStormSnowSpawnInterval();
                const stSpdCost = getStormSpeedUpgradeCost();

                let statusText = `✅ Готова до виклику (${durCur} хв, спавн ${stSpdCur}с)`;
                let statusColor = '#2ecc71';
                let timerText = `Кулдаун після виклику: ${cdCur} год`;

                if (stormActive) {
                    const remSec = Math.max(0, (s.stormActiveEndMs - now) / 1000);
                    statusText = `🌨️ Сніжна буря вирує! Сніжинки спавняться кожні ${stSpdCur}с`;
                    statusColor = '#7dd3fc';
                    timerText = `Активна: ${formatTimerMmSs(remSec)}`;
                } else if (stormOnCd) {
                    const cdSec = Math.max(0, (s.stormCooldownEndMs - now) / 1000);
                    statusText = '⏳ Перезарядка виклику сніжної бурі';
                    statusColor = '#94a3b8';
                    timerText = `Доступно через: ${formatTimerMmSs(cdSec)}`;
                }

                html += `
                    <div class="alm-room-viewport" style="min-height: auto; padding: 10px 6px;">
                        <div class="alm-room-subtitle">${roomNames[80]}</div>

                        <div class="alm-storm-hero-card">
                            <div style="font-size: 1.15rem; font-weight: 900; color: #e0e7ff;">🌨️ Виклик сніжної бурі (для 20 сходинки)</div>
                            <div id="alm-storm-status-text" style="font-size: 0.88rem; font-weight: 800; color: ${statusColor};">${statusText}</div>
                            <div id="alm-storm-timer-text" style="font-size: 1.05rem; font-weight: 900; color: #f5b82e;">${timerText}</div>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
                                <button id="alm-storm-activate-btn" class="alm-storm-activate-btn" ${stormOnCd ? 'disabled' : ''} onclick="window.AuraLarpMonster.activateSnowstorm()">
                                    ${stormActive ? '🌨️ Буря триває!' : (stormOnCd ? '⏳ На перезарядці' : '🌨️ Викликати сніжну бурю')}
                                </button>
                                <button class="alm-walk-status-btn" onclick="window.AuraLarpMonster.openRoom(20)">
                                    ❄️ До сніжинок (20 сх.)
                                </button>
                            </div>
                        </div>

                        <div class="alm-r80-section-title">🌨️ Прокачки сніжної бурі</div>
                        <div class="alm-r80-list">
                            <button id="alm-r80-upg-1" class="alm-snow-upg-btn" ${s.larp < durCost ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyStormDurationUpgrade()">
                                <div class="alm-snow-upg-top">
                                    <span>1) Тривалість бурі (+0.1 хв)</span>
                                    <span class="alm-snow-upg-lvl">Рів. ${s.stormDurationLvl || 0}</span>
                                </div>
                                <div class="alm-snow-upg-bot">
                                    <span class="alm-snow-upg-val">${durCur} хв → ${durNext} хв</span>
                                    <span class="alm-snow-upg-cost" style="color: #f5b82e;">${formatLarpValue(durCost)} ${pluralizeLarp(durCost)}</span>
                                </div>
                            </button>

                            <button id="alm-r80-upg-2" class="alm-snow-upg-btn" ${(isCdMax || s.larp < cdCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyStormCooldownUpgrade()">
                                <div class="alm-snow-upg-top">
                                    <span>2) Частіший виклик бурі (-0.1 год)</span>
                                    <span class="alm-snow-upg-lvl">Рів. ${cdLvl}</span>
                                </div>
                                <div class="alm-snow-upg-bot">
                                    <span class="alm-snow-upg-val">${isCdMax ? `${cdCur} год (МАКС)` : `${cdCur} год → ${cdNext} год`}</span>
                                    <span class="alm-snow-upg-cost" style="color: #f5b82e;">${isCdMax ? 'МАКС' : `${formatLarpValue(cdCost)} ${pluralizeLarp(cdCost)}`}</span>
                                </div>
                            </button>

                            <button id="alm-r80-upg-3" class="alm-snow-upg-btn" ${(isStSpdMax || s.larp < stSpdCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyStormSpeedUpgrade()">
                                <div class="alm-snow-upg-top">
                                    <span>3) Швидкість спавну сніжинок у бурю (-0.005 сек)</span>
                                    <span class="alm-snow-upg-lvl">${stSpdLvl}/${STORM_SPAWN_MAX_LVL}</span>
                                </div>
                                <div class="alm-snow-upg-bot">
                                    <span class="alm-snow-upg-val">${isStSpdMax ? `${stSpdCur}с (МАКС)` : `${stSpdCur}с → ${stSpdNext}с`}</span>
                                    <span class="alm-snow-upg-cost" style="color: #f5b82e;">${isStSpdMax ? 'МАКС' : `${formatLarpValue(stSpdCost)} ${pluralizeLarp(stSpdCost)}`}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                `;
            } else if (activeRoomStep === 90) {
                // КІМНАТА 90 СХОДИНКИ — ПРОКАЧКИ МОБІВ (ШКОДА ТА ШВИДКІСТЬ СПАВНУ)
                const dmgLvl = s.mobDamageLvl || 0;
                const isDmgMax = dmgLvl >= MOB_DMG_MAX_LVL;
                const dmgCur = getChickenClickDamage();
                const dmgNext = dmgCur + 1;
                const dmgCost = getMobDamageUpgradeCost();

                const mobSpdLvl = s.mobRespawnLvl || 0;
                const isMobSpdMax = mobSpdLvl >= MOB_SPAWN_MAX_LVL;
                const mobSpdCost = getMobRespawnUpgradeCost();

                html += `
                    <div class="alm-room-viewport">
                        <div class="alm-room-subtitle">${roomNames[90]}</div>
                        <div class="alm-r40-grid">
                            <button id="alm-r90-upg-1" class="alm-r40-card combat-theme" ${(isDmgMax || s.larp < dmgCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyMobDamageUpgrade()">
                                <div class="alm-room-card-label">1) ШКОДА МОБАМ (+1)</div>
                                <div class="alm-r40-badge combat">Рів. ${dmgLvl} / ${MOB_DMG_MAX_LVL}</div>
                                <div class="alm-r40-val">${isDmgMax ? `${dmgCur} шкоди (МАКС)` : `${dmgCur} → ${dmgNext}`}<div style="font-size:0.82rem;color:#fda4af;margin-top:2px;">шкоди за клік</div></div>
                                <div class="alm-room-cost-text">${isDmgMax ? 'МАКС' : `${formatLarpValue(dmgCost)} ${pluralizeLarp(dmgCost)}`}</div>
                            </button>

                            <button id="alm-r90-upg-2" class="alm-r40-card combat-theme" ${(isMobSpdMax || s.larp < mobSpdCost) ? 'disabled' : ''} onclick="window.AuraLarpMonster.buyMobRespawnUpgrade()">
                                <div class="alm-room-card-label">2) ШВИДКІСТЬ СПАВНУ МОБІВ (-1%)</div>
                                <div class="alm-r40-badge combat">Рів. ${mobSpdLvl} / ${MOB_SPAWN_MAX_LVL}</div>
                                <div class="alm-r40-val">${isMobSpdMax ? `-${mobSpdLvl}% (МАКС)` : `-${mobSpdLvl}% → -${mobSpdLvl + 1}%`}<div style="font-size:0.82rem;color:#fda4af;margin-top:2px;">часу появи моба</div></div>
                                <div class="alm-room-cost-text">${isMobSpdMax ? 'МАКС' : `${formatLarpValue(mobSpdCost)} ${pluralizeLarp(mobSpdCost)}`}</div>
                            </button>
                        </div>
                    </div>
                `;
            }

            html += `</div>`;
        } else if (activeLarpSubTab === 'multipliers') {
            const stairMult = getStairMultiplier();
            const roomMult = getRoomLarpMultiplier();
            const snowLarpMult = getSnowLarpMultiplier();
            const trashLarpMult = getTrashLarpMultiplier();
            const featherLarpMult = getFeatherLarpMultiplier();
            const mergeLarpMult = getMergeLarpMultiplier();
            const totalMult = getTotalLarpMultiplier();
            const perSec = getLarpPerSecond();
            const highestStepNum = getHighestUnlockedStepNumber();
            const highestPerSec = getHighestStepLarpPerSecond();

            html += `
                <div class="alm-main-box">
                    <div class="alm-mult-container">
                        <div class="alm-mult-row">
                            <div>
                                <div style="font-weight: 800; color: #f8fafc; font-size: 0.92rem;">Множник поточної сходинки</div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 2px;">Ви зараз на ${s.currentStep}-й сходинці (найвища: ${highestStepNum})</div>
                            </div>
                            <div style="font-size: 1.15rem; font-weight: 900; color: #38bdf8;">x${formatMultValue(stairMult)}</div>
                        </div>

                        <div class="alm-mult-row">
                            <div>
                                <div style="font-weight: 800; color: #f8fafc; font-size: 0.92rem;">Множник кімнати (10 сходинка)</div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 2px;">Рівень прокачки: ${s.roomMultLvl}</div>
                            </div>
                            <div style="font-size: 1.15rem; font-weight: 900; color: #2ecc71;">x${formatMultValue(roomMult)}</div>
                        </div>

                        <div class="alm-mult-row">
                            <div>
                                <div style="font-weight: 800; color: #f8fafc; font-size: 0.92rem;">Множник сніжної зони (20 сходинка)</div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 2px;">Рівень прокачки: ${s.snowLarpMultLvl || 0}</div>
                            </div>
                            <div style="font-size: 1.15rem; font-weight: 900; color: #7dd3fc;">x${formatMultValue(snowLarpMult)}</div>
                        </div>

                        <div class="alm-mult-row">
                            <div>
                                <div style="font-weight: 800; color: #f8fafc; font-size: 0.92rem;">Множник прибирання (30 сходинка)</div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 2px;">Рівень прокачки: ${s.trashLarpMultLvl || 0}</div>
                            </div>
                            <div style="font-size: 1.15rem; font-weight: 900; color: #fbbf24;">x${formatMultValue(trashLarpMult)}</div>
                        </div>

                        <div class="alm-mult-row">
                            <div>
                                <div style="font-weight: 800; color: #f8fafc; font-size: 0.92rem;">Множник пір'я курочки (50 сходинка)</div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 2px;">Рівень прокачки: ${s.featherLarpMultLvl || 0}</div>
                            </div>
                            <div style="font-size: 1.15rem; font-weight: 900; color: #fde047;">x${formatMultValue(featherLarpMult)}</div>
                        </div>

                        <div class="alm-mult-row">
                            <div>
                                <div style="font-weight: 800; color: #f8fafc; font-size: 0.92rem;">Множник оранжереї (70 сходинка)</div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 2px;">Рівень прокачки: ${s.mergeLarpMultLvl || 0}</div>
                            </div>
                            <div style="font-size: 1.15rem; font-weight: 900; color: #34d399;">x${formatMultValue(mergeLarpMult)}</div>
                        </div>

                        <div class="alm-mult-summary">
                            <div style="font-size: 0.78rem; font-weight: 800; color: #94a3b8; text-transform: uppercase;">Поточний множник (x${formatMultValue(stairMult)} × x${formatMultValue(roomMult)} × x${formatMultValue(snowLarpMult)} × x${formatMultValue(trashLarpMult)} × x${formatMultValue(featherLarpMult)} × x${formatMultValue(mergeLarpMult)})</div>
                            <div style="font-size: 1.55rem; font-weight: 900; color: #f5b82e;">x${formatMultValue(totalMult)}</div>
                            <div id="alm-mult-total-rate" style="font-size: 0.95rem; font-weight: 800; color: #2ecc71;">${formatMultValue(perSec)} ларп/сек</div>
                            <div style="font-size: 0.8rem; font-weight: 700; color: #cbd5e1; margin-top: 4px;">
                                Дохід за найвищою сходинкою (${highestStepNum} сх., для топу та офлайну): <b style="color: #38bdf8;">${formatMultValue(highestPerSec)} ларп/сек</b>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (activeLarpSubTab === 'leaderboard') {
            html += `
                <div class="alm-main-box">
                    <div class="alm-lb-filters">
                        <button class="alm-lb-filter-btn ${activeLeaderboardType === 'highestStep' ? 'active' : ''}" onclick="window.AuraLarpMonster.switchLeaderboard('highestStep')">
                            🪜 Найвища сходинка
                        </button>
                        <button class="alm-lb-filter-btn ${activeLeaderboardType === 'larpPerSec' ? 'active' : ''}" onclick="window.AuraLarpMonster.switchLeaderboard('larpPerSec')">
                            ⚡ Дохід Ларпів
                        </button>
                        <button class="alm-lb-filter-btn ${activeLeaderboardType === 'totalLarp' ? 'active' : ''}" onclick="window.AuraLarpMonster.switchLeaderboard('totalLarp')">
                            💰 Всього Ларпів
                        </button>
                    </div>
                    <div id="alm-leaderboard-list" class="alm-lb-list">
                        <div style="text-align: center; color: #94a3b8; padding: 24px;">⏳ Завантаження таблиці лідерів...</div>
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;

        if (activeLarpSubTab === 'stairs') {
            updateCharacterPinPosition();
            const scrollEl = document.getElementById('alm-stairs-scroll');
            if (scrollEl) {
                if (scrollToCharacter) {
                    const rowIdx = MAX_STEP - visStep;
                    const targetScroll = rowIdx * ROW_HEIGHT - (scrollEl.clientHeight / 2) + (ROW_HEIGHT / 2);
                    scrollEl.scrollTop = Math.max(0, targetScroll);
                } else if (savedStairsScrollTop !== null) {
                    scrollEl.scrollTop = savedStairsScrollTop;
                }
            }
        } else if (activeLarpSubTab === 'room') {
            if (activeRoomStep === 20 && s.currentStep === 20 && s.targetStep === 20) {
                bindSnowFieldEvents();
                renderSnowLeaderboardList();
            } else if (activeRoomStep === 30 && s.currentStep === 30 && s.targetStep === 30) {
                bindTrashFieldEvents();
                renderTrashLeaderboardList();
            } else if (activeRoomStep === 50 && s.currentStep === 50 && s.targetStep === 50) {
                renderFeatherLeaderboardList();
            } else if (activeRoomStep === 70 && s.currentStep === 70 && s.targetStep === 70) {
                bindMergeFieldEvents();
                renderVitaminLeaderboardList();
            }
        } else if (activeLarpSubTab === 'leaderboard') {
            renderLarpLeaderboardList();
        }
    }

    // ------------------------------------------
    // ІНТЕГРАЦІЯ З ОСНОВНИМИ ВКЛАДКАМИ, ТАЙМЕРАМИ ТА ЗБЕРЕЖЕННЯМ
    // ------------------------------------------
    function hookMainGameFunctions() {
        if (typeof window.switchTab === 'function' && !window.switchTab._auraLarpHooked) {
            const origSwitchTab = window.switchTab;
            window.switchTab = function (tabName) {
                if (tabName === 'aura-larp') {
                    enterAuraLarpMonsterMode();
                    return;
                }
                if (isAuraLarpModeActive) {
                    isAuraLarpModeActive = false;
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                        rafId = null;
                    }
                    updateNavVisibility();
                }
                origSwitchTab.apply(this, arguments);
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

    function bootstrapAuraLarpMonster() {
        const s = initAuraLarpMonsterState();
        ensureDomSetup();
        hookMainGameFunctions();

        // Плавний тік логіки кожні 100 мс
        setInterval(() => {
            const now = Date.now();
            const dt = (now - lastLarpTickTime) / 1000;
            lastLarpTickTime = now;
            updateAuraLarpMonsterLogic(dt);
        }, 100);

        // Автозбереження та синхронізація всіх топів кожні 3 секунди
        setInterval(() => {
            persistAuraLarpState(false);
            syncLarpLeaderboard(false);

            if (isAuraLarpModeActive) {
                if (activeLarpSubTab === 'leaderboard') {
                    renderLarpLeaderboardList();
                } else if (activeLarpSubTab === 'room') {
                    if (activeRoomStep === 20 && s.currentStep === 20 && s.targetStep === 20) {
                        renderSnowLeaderboardList();
                    } else if (activeRoomStep === 30 && s.currentStep === 30 && s.targetStep === 30) {
                        renderTrashLeaderboardList();
                    } else if (activeRoomStep === 50 && s.currentStep === 50 && s.targetStep === 50) {
                        renderFeatherLeaderboardList();
                    } else if (activeRoomStep === 70 && s.currentStep === 70 && s.targetStep === 70) {
                        renderVitaminLeaderboardList();
                    }
                }
            }
        }, 3000);

        // Миттєве збереження при виході/переході у фон
        window.addEventListener('beforeunload', () => {
            persistAuraLarpState(false);
        });
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                persistAuraLarpState(false);
            } else if (document.visibilityState === 'visible' && isAuraLarpModeActive) {
                verifyGlobalTimeAndApplyOfflineProgress();
            }
        });

        // Якщо гравець перезавантажив сторінку всередині вкладки "Аура Ларп Монстер", повертаємо його туди ж
        if (s.wasActive) {
            enterAuraLarpMonsterMode();
        }
    }

    // Публічний API модуля
    window.AuraLarpMonster = {
        enter: enterAuraLarpMonsterMode,
        exit: exitAuraLarpMonsterMode,
        switchSubTab: switchAuraLarpSubTab,
        switchLeaderboard: switchLeaderboardType,
        unlockNextStep: unlockNextStep,
        moveToStep: moveToStep,
        openRoom: openRoomAtStep,
        buyRoomMultiplierUpgrade: buyRoomMultiplierUpgrade,
        buySnowMultUpgrade: buySnowMultUpgrade,
        buySnowSpeedUpgrade: buySnowSpeedUpgrade,
        buySnowLarpUpgrade: buySnowLarpUpgrade,
        buyTrashMultUpgrade: buyTrashMultUpgrade,
        buyTrashSpeedUpgrade: buyTrashSpeedUpgrade,
        buyTrashLarpUpgrade: buyTrashLarpUpgrade,
        buyStepSpeedUpgrade: buyStepSpeedUpgrade,
        buyOfflineLarpUpgrade: buyOfflineLarpUpgrade,
        buyFeatherMultUpgrade: buyFeatherMultUpgrade,
        buyFeatherLarpUpgrade: buyFeatherLarpUpgrade,
        attackChicken: attackChickenMob,
        buyGoldSnowUpgrade: buyGoldSnowUpgrade,
        buyEmeraldSnowUpgrade: buyEmeraldSnowUpgrade,
        buyGoldTrashUpgrade: buyGoldTrashUpgrade,
        buyEmeraldTrashUpgrade: buyEmeraldTrashUpgrade,
        buyVitaminMultUpgrade: buyVitaminMultUpgrade,
        buyMergeLv2Upgrade: buyMergeLv2Upgrade,
        buyMergeLarpUpgrade: buyMergeLarpUpgrade,
        activateSnowstorm: activateSnowstorm,
        buyStormDurationUpgrade: buyStormDurationUpgrade,
        buyStormCooldownUpgrade: buyStormCooldownUpgrade,
        buyStormSpeedUpgrade: buyStormSpeedUpgrade,
        buyMobDamageUpgrade: buyMobDamageUpgrade,
        buyMobRespawnUpgrade: buyMobRespawnUpgrade,
        retryGlobalTime: verifyGlobalTimeAndApplyOfflineProgress,
        dismissOfflineReport: dismissOfflineReport,
        render: renderAuraLarpMonsterUI,
        getState: initAuraLarpMonsterState
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapAuraLarpMonster);
    } else {
        setTimeout(bootstrapAuraLarpMonster, 0);
    }
})();