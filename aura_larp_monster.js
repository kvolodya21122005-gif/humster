// ==========================================
// ОКРЕМИЙ МОДУЛЬ: АУРА ЛАРП МОНСТЕР (v8)
// Підключення в index.html: <script src="aura_larp_monster.js"></script>
// ==========================================

(function () {
    const STORAGE_KEY = 'hrundel_aura_larp_monster_v3';

    // Конфігурація всіх 140 сходинок (сходинка / множник / ціна в ларпах)
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
        { step: 100, mult: 85.0, cost: 29200000 },
        { step: 101, mult: 87.0, cost: 23400000 },
        { step: 102, mult: 89.0, cost: 27500000 },
        { step: 103, mult: 91.0, cost: 32000000 },
        { step: 104, mult: 93.0, cost: 39000000 },
        { step: 105, mult: 95.0, cost: 44000000 },
        { step: 106, mult: 97.0, cost: 52000000 },
        { step: 107, mult: 100.0, cost: 61000000 },
        { step: 108, mult: 102.0, cost: 68000000 },
        { step: 109, mult: 105.0, cost: 76000000 },
        { step: 110, mult: 107.0, cost: 83000000 },
        { step: 111, mult: 110.0, cost: 96000000 },
        { step: 112, mult: 112.0, cost: 134000000 },
        { step: 113, mult: 115.0, cost: 165000000 },
        { step: 114, mult: 117.0, cost: 220000000 },
        { step: 115, mult: 120.0, cost: 260000000 },
        { step: 116, mult: 122.0, cost: 310000000 },
        { step: 117, mult: 125.0, cost: 370000000 },
        { step: 118, mult: 127.0, cost: 420000000 },
        { step: 119, mult: 130.0, cost: 490000000 },
        { step: 120, mult: 132.0, cost: 520000000 },
        { step: 121, mult: 136.0, cost: 750000000 },
        { step: 122, mult: 140.0, cost: 920000000 },
        { step: 123, mult: 144.0, cost: 1270000000 },
        { step: 124, mult: 148.0, cost: 1860000000 },
        { step: 125, mult: 152.0, cost: 2530000000 },
        { step: 126, mult: 156.0, cost: 3890000000 },
        { step: 127, mult: 160.0, cost: 4240000000 },
        { step: 128, mult: 163.0, cost: 5410000000 },
        { step: 129, mult: 166.0, cost: 7730000000 },
        { step: 130, mult: 170.0, cost: 8980000000 },
        { step: 131, mult: 174.0, cost: 13400000000 },
        { step: 132, mult: 177.0, cost: 17900000000 },
        { step: 133, mult: 180.0, cost: 24600000000 },
        { step: 134, mult: 184.0, cost: 27000000000 },
        { step: 135, mult: 188.0, cost: 34000000000 },
        { step: 136, mult: 192.0, cost: 39000000000 },
        { step: 137, mult: 196.0, cost: 43000000000 },
        { step: 138, mult: 200.0, cost: 46000000000 },
        { step: 139, mult: 205.0, cost: 57000000000 },
        { step: 140, mult: 206.0, cost: 70000000000 }
    ];

    const MAX_STEP = STAIRS_CONFIG.length; // 140
    const ROOM_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 110, 120, 130];

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
    const OFFLINE_UPG_MAX_LVL = 100;

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

    // Кімната 110 сходинки (Прибиральник сміття для 30 кімнати)
    const CLEANER_BASE_DURATION_MIN = 5.0; // 5 хвилин
    const CLEANER_DURATION_STEP_MIN = 0.1; // +0.1 хв
    const CLEANER_COOLDOWN_HR = 8.0; // раз на 8 годин
    const CLEANER_DURATION_BASE_COST = 300000000; // 300 млн ларпів
    const CLEANER_DURATION_COST_SCALE = 1.25;

    // Кімната 120 сходинки (Буріння вниз — Камінь та 4 знаряддя)
    const DRILL1_BASE_STONE = 10;
    const DRILL1_BASE_CD_SEC = 4.0;
    const DRILL1_CD_STEP_SEC = 0.1;
    const DRILL1_CD_BASE_COST = 1000000000; // 1б ларп
    const DRILL1_CD_COST_SCALE = 2.0;
    const DRILL1_CD_MAX_LVL = 20;

    const DRILL2_UNLOCK_STONE = 5000;
    const DRILL2_BASE_STONE = 750;
    const DRILL2_BASE_CD_MIN = 8.0; // 8 хв
    const DRILL2_CD_STEP_MIN = 0.2; // -0.2 хв
    const DRILL2_CD_BASE_COST = 100000000000; // 100б ларп
    const DRILL2_CD_COST_SCALE = 2.0;
    const DRILL2_CD_MAX_LVL = 20;

    const DRILL3_BASE_CD_MIN = 40.0; // 40 хв
    const DRILL4_BASE_CD_HR = 4.0; // 4 години

    const STONE_MULT_BASE_COST = 50;
    const STONE_MULT_COST_SCALE = 1.15;

    const STONE_LARP_BASE_COST = 25;
    const STONE_LARP_COST_SCALE = 1.22;

    // Кімната 130 сходинки (Телепортер)
    const TELEPORT_BASE_DURATION_MIN = 15.0; // 15 хв
    const TELEPORT_DURATION_STEP_MIN = 0.5; // +0.5 хв
    const TELEPORT_DURATION_BASE_COST = 2000000000; // 2б ларп
    const TELEPORT_DURATION_COST_SCALE = 1.3;

    const TELEPORT_BASE_COOLDOWN_HR = 16.0; // 16 годин
    const TELEPORT_COOLDOWN_STEP_HR = 0.1; // -0.1 год
    const TELEPORT_COOLDOWN_BASE_COST = 10000000000; // 10б ларп
    const TELEPORT_COOLDOWN_COST_SCALE = 1.25;
    const TELEPORT_COOLDOWN_MAX_LVL = 100;

    const TELEPORT_BASE_TRAVEL_SEC = 7; // 7 сек
    const TELEPORT_TRAVEL_STEP_SEC = 1; // -1 сек
    const TELEPORT_TRAVEL_BASE_COST = 80000000000; // 80б ларп
    const TELEPORT_TRAVEL_COST_SCALE = 2.7;
    const TELEPORT_TRAVEL_MAX_LVL = 5;

    // Геометрія візуальних сходинок (гарантовано вміщує всі 140 сходинок у лівій зоні до центру екрана)
    const ROW_HEIGHT = 44;
    const STEP_BAR_PX = 42;
    const STEP_BASE_PX = 14;
    const STEP_INDENT_PCT_PER_LEVEL = 0.19; // на 140 сходинці: 14px + 26.41% + 42px < 46% ширини

    let moduleState = null;
    let isAuraLarpModeActive = false;
    let activeLarpSubTab = 'stairs'; // 'stairs' | 'room' | 'multipliers' | 'leaderboard'
    let activeRoomStep = 10; // 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 110 | 120 | 130
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
            // Кімната 80 (Сніжна буря) + Кімната 90 (Прокачки мобів)
            stormDurationLvl: 0,
            stormCooldownLvl: 0,
            stormSpeedLvl: 0,
            stormActiveEndMs: null,
            stormCooldownEndMs: null,
            mobDamageLvl: 0,
            mobRespawnLvl: 0,
            // Кімната 110 (Прибиральник)
            cleanerDurationLvl: 0,
            cleanerActiveEndMs: null,
            cleanerCooldownEndMs: null,
            // Кімната 120 (Буріння вниз — Камінь)
            stone: 0,
            totalStone: 0,
            drillDepthMeters: 0,
            stoneMultLvl: 0,
            stoneLarpMultLvl: 0,
            drill1CdLvl: 0,
            drill1ReadyAtMs: null,
            drill2Unlocked: false,
            drill2CdLvl: 0,
            drill2ReadyAtMs: null,
            drill3Unlocked: false,
            drill3ReadyAtMs: null,
            drill4Unlocked: false,
            drill4ReadyAtMs: null,
            // Кімната 130 (Телепортер)
            teleportDurationLvl: 0,
            teleportCooldownLvl: 0,
            teleportTravelLvl: 0,
            teleportActiveEndMs: null,
            teleportCooldownEndMs: null,
            teleportingToStep: null,
            teleportArrivalEndMs: null,
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

        // Кімната 40 (Швидкість та Офлайн, макс 100 рівень)
        if (typeof s.stepSpeedLvl !== 'number' || isNaN(s.stepSpeedLvl) || s.stepSpeedLvl < 0) s.stepSpeedLvl = 0;
        if (typeof s.offlineLarpLvl !== 'number' || isNaN(s.offlineLarpLvl) || s.offlineLarpLvl < 0) s.offlineLarpLvl = 0;
        if (s.offlineLarpLvl > OFFLINE_UPG_MAX_LVL) s.offlineLarpLvl = OFFLINE_UPG_MAX_LVL;

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

        // Кімната 80 (Сніжна буря) + Кімната 90 (Прокачки мобів)
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

        // Кімната 110 (Прибиральник)
        if (typeof s.cleanerDurationLvl !== 'number' || isNaN(s.cleanerDurationLvl) || s.cleanerDurationLvl < 0) {
            s.cleanerDurationLvl = 0;
        }
        if (typeof s.cleanerActiveEndMs !== 'number' || isNaN(s.cleanerActiveEndMs) || s.cleanerActiveEndMs <= 0) {
            s.cleanerActiveEndMs = null;
        }
        if (typeof s.cleanerCooldownEndMs !== 'number' || isNaN(s.cleanerCooldownEndMs) || s.cleanerCooldownEndMs <= 0) {
            s.cleanerCooldownEndMs = null;
        }

        // Кімната 120 (Буріння вниз — Камінь)
        if (typeof s.stone !== 'number' || isNaN(s.stone) || s.stone < 0) s.stone = 0;
        if (typeof s.totalStone !== 'number' || isNaN(s.totalStone) || s.totalStone < s.stone) {
            s.totalStone = s.stone;
        }
        if (typeof s.drillDepthMeters !== 'number' || isNaN(s.drillDepthMeters) || s.drillDepthMeters < 0) {
            s.drillDepthMeters = 0;
        }
        if (typeof s.stoneMultLvl !== 'number' || isNaN(s.stoneMultLvl) || s.stoneMultLvl < 0) s.stoneMultLvl = 0;
        if (typeof s.stoneLarpMultLvl !== 'number' || isNaN(s.stoneLarpMultLvl) || s.stoneLarpMultLvl < 0) s.stoneLarpMultLvl = 0;

        if (typeof s.drill1CdLvl !== 'number' || isNaN(s.drill1CdLvl) || s.drill1CdLvl < 0) s.drill1CdLvl = 0;
        if (s.drill1CdLvl > DRILL1_CD_MAX_LVL) s.drill1CdLvl = DRILL1_CD_MAX_LVL;
        if (typeof s.drill1ReadyAtMs !== 'number' || isNaN(s.drill1ReadyAtMs) || s.drill1ReadyAtMs <= 0) {
            s.drill1ReadyAtMs = null;
        }

        s.drill2Unlocked = Boolean(s.drill2Unlocked);
        if (typeof s.drill2CdLvl !== 'number' || isNaN(s.drill2CdLvl) || s.drill2CdLvl < 0) s.drill2CdLvl = 0;
        if (s.drill2CdLvl > DRILL2_CD_MAX_LVL) s.drill2CdLvl = DRILL2_CD_MAX_LVL;
        if (typeof s.drill2ReadyAtMs !== 'number' || isNaN(s.drill2ReadyAtMs) || s.drill2ReadyAtMs <= 0) {
            s.drill2ReadyAtMs = null;
        }

        s.drill3Unlocked = Boolean(s.drill3Unlocked);
        if (typeof s.drill3ReadyAtMs !== 'number' || isNaN(s.drill3ReadyAtMs) || s.drill3ReadyAtMs <= 0) {
            s.drill3ReadyAtMs = null;
        }
        s.drill4Unlocked = Boolean(s.drill4Unlocked);
        if (typeof s.drill4ReadyAtMs !== 'number' || isNaN(s.drill4ReadyAtMs) || s.drill4ReadyAtMs <= 0) {
            s.drill4ReadyAtMs = null;
        }

        // Кімната 130 (Телепортер)
        if (typeof s.teleportDurationLvl !== 'number' || isNaN(s.teleportDurationLvl) || s.teleportDurationLvl < 0) {
            s.teleportDurationLvl = 0;
        }
        if (typeof s.teleportCooldownLvl !== 'number' || isNaN(s.teleportCooldownLvl) || s.teleportCooldownLvl < 0) {
            s.teleportCooldownLvl = 0;
        }
        if (s.teleportCooldownLvl > TELEPORT_COOLDOWN_MAX_LVL) s.teleportCooldownLvl = TELEPORT_COOLDOWN_MAX_LVL;
        if (typeof s.teleportTravelLvl !== 'number' || isNaN(s.teleportTravelLvl) || s.teleportTravelLvl < 0) {
            s.teleportTravelLvl = 0;
        }
        if (s.teleportTravelLvl > TELEPORT_TRAVEL_MAX_LVL) s.teleportTravelLvl = TELEPORT_TRAVEL_MAX_LVL;

        if (typeof s.teleportActiveEndMs !== 'number' || isNaN(s.teleportActiveEndMs) || s.teleportActiveEndMs <= 0) {
            s.teleportActiveEndMs = null;
        }
        if (typeof s.teleportCooldownEndMs !== 'number' || isNaN(s.teleportCooldownEndMs) || s.teleportCooldownEndMs <= 0) {
            s.teleportCooldownEndMs = null;
        }
        if (typeof s.teleportingToStep !== 'number' || isNaN(s.teleportingToStep) || !ROOM_STEPS.includes(s.teleportingToStep)) {
            s.teleportingToStep = null;
        }
        if (typeof s.teleportArrivalEndMs !== 'number' || isNaN(s.teleportArrivalEndMs) || s.teleportArrivalEndMs <= 0) {
            s.teleportArrivalEndMs = null;
            s.teleportingToStep = null;
        }

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
            + (s.stormDurationLvl || 0) * 10000
            + (s.cleanerDurationLvl || 0) * 15000
            + (s.totalStone || 0) * 200
            + (s.stoneMultLvl || 0) * 20000
            + (s.stoneLarpMultLvl || 0) * 20000
            + (s.teleportDurationLvl || 0) * 30000;
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
        const clampedLvl = Math.min(OFFLINE_UPG_MAX_LVL, s.offlineLarpLvl || 0);
        return clampedLvl * OFFLINE_UPG_STEP_PCT;
    }

    function getNextOfflineLarpPercent() {
        return Math.min(100, getOfflineLarpPercent() + OFFLINE_UPG_STEP_PCT);
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

    // Кімната 110 сходинки (Прибиральник сміття для 30 кімнати)
    function getCleanerDurationMinutes() {
        const s = initAuraLarpMonsterState();
        return Number((CLEANER_BASE_DURATION_MIN + (s.cleanerDurationLvl || 0) * CLEANER_DURATION_STEP_MIN).toFixed(1));
    }

    function getNextCleanerDurationMinutes() {
        const s = initAuraLarpMonsterState();
        return Number((CLEANER_BASE_DURATION_MIN + ((s.cleanerDurationLvl || 0) + 1) * CLEANER_DURATION_STEP_MIN).toFixed(1));
    }

    function getCleanerDurationUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(CLEANER_DURATION_BASE_COST * Math.pow(CLEANER_DURATION_COST_SCALE, s.cleanerDurationLvl || 0));
    }

    function isCleanerActive() {
        const s = initAuraLarpMonsterState();
        return Boolean(s.cleanerActiveEndMs && getCurrentNowMs() < s.cleanerActiveEndMs);
    }

    // Кімната 120 сходинки (Буріння вниз — Камінь та 4 знаряддя)
    function getStoneMultiplier() {
    const s = initAuraLarpMonsterState();
    return 1 + (s.stoneMultLvl || 0);
    }
    
    function getNextStoneMultiplier() {
        return getStoneMultiplier() + 1;
    }

    function getStoneMultUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(STONE_MULT_BASE_COST * Math.pow(STONE_MULT_COST_SCALE, s.stoneMultLvl || 0));
    }

    function getStoneLarpMultiplier() {
    const s = initAuraLarpMonsterState();
    const lvl = s.stoneLarpMultLvl || 0;
    if (lvl <= 0) return 1.0;
    return Number((1.2 + (lvl - 1) * 0.2).toFixed(2));
    }
    
    function getNextStoneLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        const lvl = s.stoneLarpMultLvl || 0;
        return Number((1.2 + lvl * 0.2).toFixed(2));
    }

    function getStoneLarpUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(STONE_LARP_BASE_COST * Math.pow(STONE_LARP_COST_SCALE, s.stoneLarpMultLvl || 0));
    }

    function getDrill1CooldownSec() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(DRILL1_CD_MAX_LVL, s.drill1CdLvl || 0);
        return Number(Math.max(0.5, DRILL1_BASE_CD_SEC - lvl * DRILL1_CD_STEP_SEC).toFixed(1));
    }

    function getNextDrill1CooldownSec() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(DRILL1_CD_MAX_LVL, (s.drill1CdLvl || 0) + 1);
        return Number(Math.max(0.5, DRILL1_BASE_CD_SEC - nextLvl * DRILL1_CD_STEP_SEC).toFixed(1));
    }

    function getDrill1CdUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(DRILL1_CD_BASE_COST * Math.pow(DRILL1_CD_COST_SCALE, s.drill1CdLvl || 0));
    }

    function getDrill2CooldownMin() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(DRILL2_CD_MAX_LVL, s.drill2CdLvl || 0);
        return Number(Math.max(0.5, DRILL2_BASE_CD_MIN - lvl * DRILL2_CD_STEP_MIN).toFixed(1));
    }

    function getNextDrill2CooldownMin() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(DRILL2_CD_MAX_LVL, (s.drill2CdLvl || 0) + 1);
        return Number(Math.max(0.5, DRILL2_BASE_CD_MIN - nextLvl * DRILL2_CD_STEP_MIN).toFixed(1));
    }

    function getDrill2CdUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(DRILL2_CD_BASE_COST * Math.pow(DRILL2_CD_COST_SCALE, s.drill2CdLvl || 0));
    }

    // Кімната 130 сходинки (Телепортер)
    function getTeleportDurationMinutes() {
        const s = initAuraLarpMonsterState();
        return Number((TELEPORT_BASE_DURATION_MIN + (s.teleportDurationLvl || 0) * TELEPORT_DURATION_STEP_MIN).toFixed(1));
    }

    function getNextTeleportDurationMinutes() {
        const s = initAuraLarpMonsterState();
        return Number((TELEPORT_BASE_DURATION_MIN + ((s.teleportDurationLvl || 0) + 1) * TELEPORT_DURATION_STEP_MIN).toFixed(1));
    }

    function getTeleportDurationUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(TELEPORT_DURATION_BASE_COST * Math.pow(TELEPORT_DURATION_COST_SCALE, s.teleportDurationLvl || 0));
    }

    function getTeleportCooldownHours() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(TELEPORT_COOLDOWN_MAX_LVL, s.teleportCooldownLvl || 0);
        return Number(Math.max(1.0, TELEPORT_BASE_COOLDOWN_HR - lvl * TELEPORT_COOLDOWN_STEP_HR).toFixed(1));
    }

    function getNextTeleportCooldownHours() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(TELEPORT_COOLDOWN_MAX_LVL, (s.teleportCooldownLvl || 0) + 1);
        return Number(Math.max(1.0, TELEPORT_BASE_COOLDOWN_HR - nextLvl * TELEPORT_COOLDOWN_STEP_HR).toFixed(1));
    }

    function getTeleportCooldownUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(TELEPORT_COOLDOWN_BASE_COST * Math.pow(TELEPORT_COOLDOWN_COST_SCALE, s.teleportCooldownLvl || 0));
    }

    function getTeleportTravelSeconds() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(TELEPORT_TRAVEL_MAX_LVL, s.teleportTravelLvl || 0);
        return Math.max(1, TELEPORT_BASE_TRAVEL_SEC - lvl * TELEPORT_TRAVEL_STEP_SEC);
    }

    function getNextTeleportTravelSeconds() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(TELEPORT_TRAVEL_MAX_LVL, (s.teleportTravelLvl || 0) + 1);
        return Math.max(1, TELEPORT_BASE_TRAVEL_SEC - nextLvl * TELEPORT_TRAVEL_STEP_SEC);
    }

    function getTeleportTravelUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(TELEPORT_TRAVEL_BASE_COST * Math.pow(TELEPORT_TRAVEL_COST_SCALE, s.teleportTravelLvl || 0));
    }

    function isTeleporterActive() {
        const s = initAuraLarpMonsterState();
        return Boolean(s.teleportActiveEndMs && getCurrentNowMs() < s.teleportActiveEndMs);
    }

    // Загальний множник Ларпів (для поточної сходинки)
    function getTotalLarpMultiplier() {
        const stairMult = getStairMultiplier();
        const roomMult = getRoomLarpMultiplier();
        const snowLarpMult = getSnowLarpMultiplier();
        const trashLarpMult = getTrashLarpMultiplier();
        const featherLarpMult = getFeatherLarpMultiplier();
        const mergeLarpMult = getMergeLarpMultiplier();
        const stoneLarpMult = getStoneLarpMultiplier();
        return Number((stairMult * roomMult * snowLarpMult * trashLarpMult * featherLarpMult * mergeLarpMult * stoneLarpMult).toFixed(4));
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
        const stoneLarpMult = getStoneLarpMultiplier();
        return Number((highestStairMult * roomMult * snowLarpMult * trashLarpMult * featherLarpMult * mergeLarpMult * stoneLarpMult).toFixed(4));
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

    function formatStoneValue(val) {
        return formatWholeNumber(val);
    }

    function formatMultValue(val) {
        if (Math.abs(val - Math.round(val)) < 1e-6) {
            return Math.round(val).toString();
        }
        return Number(val.toFixed(2)).toString();
    }

    function formatArrivalSeconds(seconds) {
        const clamped = Math.max(0.1, Number(seconds) || 0);
        if (clamped >= 10) {
            return `${Math.ceil(clamped)} сек`;
        }
        return `${clamped.toFixed(1)} сек`;
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
        if (stepNumber === 120) {
            return {
                icon: '🪨',
                name: 'Камінь',
                value: formatStoneValue(s.stone),
                color: '#a8a29e'
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
        const wholeTotalStone = Math.floor(s.totalStone || s.stone || 0);
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
                totalStone: wholeTotalStone,
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
            return `${formatLarpValue(player.totalLarp || 0)} ларп`;
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

    function renderStoneLeaderboardList() {
        const s = initAuraLarpMonsterState();
        renderSideResourceLeaderboard('alm-stone-lb-list', 'totalStone', '🪨', s.totalStone || s.stone || 0);
    }

    // ------------------------------------------
    // ДІЇ ГРАВЦЯ (СХОДИ, КІМНАТИ, ТЕЛЕПОРТ ТА ПРОКАЧКИ)
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
        s.teleportingToStep = null;
        s.teleportArrivalEndMs = null;
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

        if (stepNumber >= 1 && stepNumber <= s.maxUnlockedStep && (stepNumber !== s.targetStep || s.teleportingToStep)) {
            s.teleportingToStep = null;
            s.teleportArrivalEndMs = null;

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
            if (isAuraLarpModeActive && activeLarpSubTab === 'room') {
                renderAuraLarpMonsterUI(false);
            } else {
                updateAllDynamicElements(true, false);
            }
        }
    }

    function teleportToRoomStep(roomStep) {
        const s = initAuraLarpMonsterState();
        if (!ROOM_STEPS.includes(roomStep)) return;
        if (s.maxUnlockedStep < roomStep) return;
        if (!isTeleporterActive()) return;
        if (s.currentStep === roomStep && s.targetStep === roomStep) return;

        const now = getCurrentNowMs();
        const travelMs = getTeleportTravelSeconds() * 1000;

        // Зупиняємо пішу ходу, фіксуємо поточну цілу сходинку та запускаємо відлік телепортації
        if (s.currentStep !== s.targetStep) {
            s.currentStep = Math.min(s.maxUnlockedStep, Math.max(1, Math.round(getVisualStepPosition())));
        }
        s.targetStep = s.currentStep;
        s.moveProgressSec = 0;

        s.teleportingToStep = roomStep;
        s.teleportArrivalEndMs = now + travelMs;

        activeRoomStep = roomStep;
        activeLarpSubTab = 'room';

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function openRoomAtStep(roomStep) {
        activeRoomStep = ROOM_STEPS.includes(roomStep) ? roomStep : 10;
        activeLarpSubTab = 'room';
        persistAuraLarpState(false);
        renderAuraLarpMonsterUI(false);
    }

    function goToRoom20FromStorm() {
        moveToStep(20);
        openRoomAtStep(20);
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

    // Кімната 40 прокачки (Швидкість та Офлайн макс 100 рівень)
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
        if ((s.offlineLarpLvl || 0) >= OFFLINE_UPG_MAX_LVL) return;

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

    // Кімната 110 (Прибиральник сміття для 30 кімнати)
    function activateRoomCleaner() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 110 || s.currentStep !== 110 || s.targetStep !== 110) return;

        const now = getCurrentNowMs();
        if (s.cleanerCooldownEndMs && now < s.cleanerCooldownEndMs) return;

        const durationMs = getCleanerDurationMinutes() * 60 * 1000;
        const cooldownMs = CLEANER_COOLDOWN_HR * 3600 * 1000;

        s.cleanerActiveEndMs = now + durationMs;
        s.cleanerCooldownEndMs = now + cooldownMs;

        // Одразу прибираємо усе поточне сміття з 30 кімнати
        collectAllActiveTrashByCleaner();

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyCleanerDurationUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 110 || s.currentStep !== 110 || s.targetStep !== 110) return;

        const cost = getCleanerDurationUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.cleanerDurationLvl = (s.cleanerDurationLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 120 (Буріння вниз — Камінь та 4 знаряддя)
    function useDrillTool(toolNumber) {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 120 || s.currentStep !== 120 || s.targetStep !== 120) return;

        const now = getCurrentNowMs();
        const stoneMult = getStoneMultiplier();
        let gainedStone = 0;
        let depthGain = 0;

        if (toolNumber === 1) {
            if (s.drill1ReadyAtMs && now < s.drill1ReadyAtMs) return;
            gainedStone = DRILL1_BASE_STONE * stoneMult;
            depthGain = 1;
            s.drill1ReadyAtMs = now + getDrill1CooldownSec() * 1000;
        } else if (toolNumber === 2) {
            if (!s.drill2Unlocked) return;
            if (s.drill2ReadyAtMs && now < s.drill2ReadyAtMs) return;
            gainedStone = DRILL2_BASE_STONE * stoneMult;
            depthGain = 25;
            s.drill2ReadyAtMs = now + getDrill2CooldownMin() * 60 * 1000;
        } else {
            return;
        }

        s.stone = Number((s.stone + gainedStone).toFixed(4));
        s.totalStone = Number((s.totalStone + gainedStone).toFixed(4));
        s.drillDepthMeters = (s.drillDepthMeters || 0) + depthGain;

        const zoneEl = document.getElementById('alm-drill-zone');
        if (zoneEl) {
            const pop = document.createElement('div');
            pop.className = 'alm-drill-pop';
            pop.style.left = '50%';
            pop.style.top = '36%';
            pop.textContent = `+${formatStoneValue(gainedStone)} 🪨  (⬇️ +${depthGain} м)`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 850);
        }

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    function unlockDrillTool2() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 120 || s.currentStep !== 120 || s.targetStep !== 120) return;
        if (s.drill2Unlocked) return;
        if (s.stone < DRILL2_UNLOCK_STONE) return;

        s.stone = Number((s.stone - DRILL2_UNLOCK_STONE).toFixed(4));
        s.drill2Unlocked = true;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyStoneMultUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 120 || s.currentStep !== 120 || s.targetStep !== 120) return;

        const cost = getStoneMultUpgradeCost();
        if (s.stone < cost) return;

        s.stone = Number((s.stone - cost).toFixed(4));
        s.stoneMultLvl = (s.stoneMultLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyStoneLarpUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 120 || s.currentStep !== 120 || s.targetStep !== 120) return;

        const cost = getStoneLarpUpgradeCost();
        if (s.stone < cost) return;

        s.stone = Number((s.stone - cost).toFixed(4));
        s.stoneLarpMultLvl = (s.stoneLarpMultLvl || 0) + 1;

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyDrill1CdUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 120 || s.currentStep !== 120 || s.targetStep !== 120) return;
        if ((s.drill1CdLvl || 0) >= DRILL1_CD_MAX_LVL) return;

        const cost = getDrill1CdUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.drill1CdLvl = (s.drill1CdLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyDrill2CdUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 120 || s.currentStep !== 120 || s.targetStep !== 120) return;
        if (!s.drill2Unlocked) return;
        if ((s.drill2CdLvl || 0) >= DRILL2_CD_MAX_LVL) return;

        const cost = getDrill2CdUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.drill2CdLvl = (s.drill2CdLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    // Кімната 130 (Телепортер)
    function activateTeleporter() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 130 || s.currentStep !== 130 || s.targetStep !== 130) return;

        const now = getCurrentNowMs();
        if (s.teleportCooldownEndMs && now < s.teleportCooldownEndMs) return;

        const durationMs = getTeleportDurationMinutes() * 60 * 1000;
        const cooldownMs = getTeleportCooldownHours() * 3600 * 1000;

        s.teleportActiveEndMs = now + durationMs;
        s.teleportCooldownEndMs = now + cooldownMs;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyTeleportDurationUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 130 || s.currentStep !== 130 || s.targetStep !== 130) return;

        const cost = getTeleportDurationUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.teleportDurationLvl = (s.teleportDurationLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyTeleportCooldownUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 130 || s.currentStep !== 130 || s.targetStep !== 130) return;
        if ((s.teleportCooldownLvl || 0) >= TELEPORT_COOLDOWN_MAX_LVL) return;

        const cost = getTeleportCooldownUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.teleportCooldownLvl = (s.teleportCooldownLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyTeleportTravelUpgrade() {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 130 || s.currentStep !== 130 || s.targetStep !== 130) return;
        if ((s.teleportTravelLvl || 0) >= TELEPORT_TRAVEL_MAX_LVL) return;

        const cost = getTeleportTravelUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.teleportTravelLvl = (s.teleportTravelLvl || 0) + 1;

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
                btnEl.disabled = !canInteractWithRoom(80);
                btnEl.textContent = `🌨️ Викликати сніжну бурю (${getStormDurationMinutes()} хв)`;
            }
        }
    }

    function updateCleanerDynamicHud() {
        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();
        const statusEl = document.getElementById('alm-cleaner-status-text');
        const btnEl = document.getElementById('alm-cleaner-activate-btn');
        const room30TimerEl = document.getElementById('alm-room30-cleaner-timer');

        const active = s.cleanerActiveEndMs && now < s.cleanerActiveEndMs;
        const onCooldown = s.cleanerCooldownEndMs && now < s.cleanerCooldownEndMs;

        if (room30TimerEl && active) {
            const leftSec = Math.max(0, (s.cleanerActiveEndMs - now) / 1000);
            room30TimerEl.textContent = formatTimerMmSs(leftSec);
        }

        if (!statusEl && !btnEl) return;

        if (active) {
            const leftSec = Math.max(0, (s.cleanerActiveEndMs - now) / 1000);
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#4ade80;font-weight:900;">🧹 Прибиральник працює у 30 кімнаті! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
            }
            if (btnEl) {
                btnEl.disabled = true;
                btnEl.textContent = `🧹 Працює (${formatTimerMmSs(leftSec)})`;
            }
        } else if (onCooldown) {
            const cdLeftSec = Math.max(0, (s.cleanerCooldownEndMs - now) / 1000);
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#f59e0b;font-weight:800;">⏳ Відпочинок прибиральника: ${formatTimerMmSs(cdLeftSec)}</span>`;
            }
            if (btnEl) {
                btnEl.disabled = true;
                btnEl.textContent = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
            }
        } else {
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#4ade80;font-weight:800;">✅ Прибиральник готовий до роботи!</span>`;
            }
            if (btnEl) {
                btnEl.disabled = !canInteractWithRoom(110);
                btnEl.textContent = `🧹 Найняти прибиральника (${getCleanerDurationMinutes()} хв)`;
            }
        }
    }

    function updateDrillDynamicHud() {
        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();

        const balEl = document.getElementById('alm-stone-balance');
        const totalEl = document.getElementById('alm-stone-total');
        const depthEl = document.getElementById('alm-drill-depth-val');
        if (balEl) balEl.textContent = formatStoneValue(s.stone);
        if (totalEl) totalEl.textContent = formatStoneValue(s.totalStone);
        if (depthEl) depthEl.textContent = `${formatWholeNumber(s.drillDepthMeters || 0)} м`;

        const canAct = canInteractWithRoom(120);

        // Знаряддя 1
        const d1Btn = document.getElementById('alm-drill-tool-1-btn');
        const d1Status = document.getElementById('alm-drill-tool-1-status');
        if (d1Btn && d1Status) {
            if (s.drill1ReadyAtMs && now < s.drill1ReadyAtMs) {
                const leftSec = Math.max(0.1, (s.drill1ReadyAtMs - now) / 1000);
                d1Btn.disabled = true;
                d1Status.textContent = `⏳ ${leftSec.toFixed(1)} сек`;
            } else {
                d1Btn.disabled = !canAct;
                d1Status.textContent = canAct ? '⛏️ БУРИТИ' : '🚶 Підійдіть на 120 сх.';
            }
        }

        // Знаряддя 2
        const d2Btn = document.getElementById('alm-drill-tool-2-btn');
        const d2Status = document.getElementById('alm-drill-tool-2-status');
        if (d2Btn && d2Status) {
            if (!s.drill2Unlocked) {
                d2Btn.disabled = !(canAct && s.stone >= DRILL2_UNLOCK_STONE);
                d2Status.textContent = `🪨 Купити: ${formatStoneValue(DRILL2_UNLOCK_STONE)}`;
            } else if (s.drill2ReadyAtMs && now < s.drill2ReadyAtMs) {
                const leftSec = Math.max(0, (s.drill2ReadyAtMs - now) / 1000);
                d2Btn.disabled = true;
                d2Status.textContent = `⏳ ${formatTimerMmSs(leftSec)}`;
            } else {
                d2Btn.disabled = !canAct;
                d2Status.textContent = canAct ? '🛠️ БУРИТИ' : '🚶 Підійдіть на 120 сх.';
            }
        }
    }

    function updateTeleporterDynamicHud() {
        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();
        const statusEl = document.getElementById('alm-teleport-status-text');
        const btnEl = document.getElementById('alm-teleport-activate-btn');
        const tpTimerEl = document.getElementById('alm-teleport-travel-timer');

        if (tpTimerEl && s.teleportingToStep && s.teleportArrivalEndMs && now < s.teleportArrivalEndMs) {
            const leftSec = Math.max(0.1, (s.teleportArrivalEndMs - now) / 1000);
            tpTimerEl.textContent = formatArrivalSeconds(leftSec);
        }

        if (!statusEl && !btnEl) return;

        const active = s.teleportActiveEndMs && now < s.teleportActiveEndMs;
        const onCooldown = s.teleportCooldownEndMs && now < s.teleportCooldownEndMs;

        if (active) {
            const leftSec = Math.max(0, (s.teleportActiveEndMs - now) / 1000);
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#c084fc;font-weight:900;">🌀 Телепортер активний! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
            }
            if (btnEl) {
                btnEl.disabled = true;
                btnEl.textContent = `🌀 Активний (${formatTimerMmSs(leftSec)})`;
            }
        } else if (onCooldown) {
            const cdLeftSec = Math.max(0, (s.teleportCooldownEndMs - now) / 1000);
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#f59e0b;font-weight:800;">⏳ Перезарядка телепортера: ${formatTimerMmSs(cdLeftSec)}</span>`;
            }
            if (btnEl) {
                btnEl.disabled = true;
                btnEl.textContent = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
            }
        } else {
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#4ade80;font-weight:800;">✅ Телепортер готовий до активації!</span>`;
            }
            if (btnEl) {
                btnEl.disabled = !canInteractWithRoom(130);
                btnEl.textContent = `🌀 Активувати телепортер (${getTeleportDurationMinutes()} хв)`;
            }
        }
    }

    // ------------------------------------------
    // МЕХАНІКА СНІЖИНОК (20 СХОДИНКА + ЗОЛОТІ x10 / СМАРАГДОВІ x1000)
    // ------------------------------------------
    function canInteractWithRoom(stepNumber) {
        const s = initAuraLarpMonsterState();
        return s.maxUnlockedStep >= stepNumber && s.currentStep === stepNumber && s.targetStep === stepNumber && !s.teleportingToStep;
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
    // МЕХАНІКА ПРИБИРАННЯ СМІТТЯ (30 СХОДИНКА + ЗОЛОТЕ x10 / СМАРАГДОВЕ x1000 + ПРИБИРАЛЬНИК 110 КІМНАТИ)
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

        // Якщо працює Прибиральник зі 110 кімнати — одразу прибираємо сміття автоматично!
        if (isCleanerActive()) {
            const s = initAuraLarpMonsterState();
            const rarity = item.rarity || 'normal';
            const rarityMult = rarity === 'emerald' ? 1000 : (rarity === 'gold' ? 10 : 1);
            const gain = getTrashMultiplier() * rarityMult;

            s.trash = Number((s.trash + gain).toFixed(4));
            s.totalTrash = Number((s.totalTrash + gain).toFixed(4));

            const zoneEl = document.getElementById('alm-trash-zone');
            if (zoneEl) {
                const pop = document.createElement('div');
                pop.className = 'alm-trash-pop' + (rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : ''));
                pop.style.left = '50%';
                pop.style.top = '50%';
                const badge = rarity === 'emerald' ? ' 💎x1000' : (rarity === 'gold' ? ' ✨x10' : '');
                pop.textContent = `🧹 +${formatTrashValue(gain)} 🗑️${badge}`;
                zoneEl.appendChild(pop);
                setTimeout(() => {
                    if (pop.parentNode) pop.parentNode.removeChild(pop);
                }, 700);
            }

            updateTrashCounterText();
            updateRoomUpgradeButtons();
            return;
        }

        activeTrashItems.push(item);

        const zoneEl = document.getElementById('alm-trash-zone');
        if (zoneEl) {
            const el = createTrashElement(item);
            zoneEl.appendChild(el);
            updateTrashCounterText();
        }
    }

    function collectAllActiveTrashByCleaner() {
        if (activeTrashItems.length === 0) return;
        const ids = activeTrashItems.map(t => t.id);
        ids.forEach(id => collectTrashById(id));
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

        // Перевірка закінчення сніжної бурі (80 кімната)
        if (s.stormActiveEndMs && now >= s.stormActiveEndMs) {
            s.stormActiveEndMs = null;
            if (isAuraLarpModeActive && activeLarpSubTab === 'room' && (activeRoomStep === 20 || activeRoomStep === 80)) {
                renderAuraLarpMonsterUI(false);
            }
        }
        if (s.stormCooldownEndMs && now >= s.stormCooldownEndMs) {
            s.stormCooldownEndMs = null;
        }

        // Перевірка закінчення роботи прибиральника (110 кімната)
        if (s.cleanerActiveEndMs && now >= s.cleanerActiveEndMs) {
            s.cleanerActiveEndMs = null;
            if (isAuraLarpModeActive && activeLarpSubTab === 'room' && (activeRoomStep === 30 || activeRoomStep === 110)) {
                renderAuraLarpMonsterUI(false);
            }
        }
        if (s.cleanerCooldownEndMs && now >= s.cleanerCooldownEndMs) {
            s.cleanerCooldownEndMs = null;
        }

        // Перевірка перезарядки знарядь буріння (120 кімната)
        if (s.drill1ReadyAtMs && now >= s.drill1ReadyAtMs) {
            s.drill1ReadyAtMs = null;
        }
        if (s.drill2ReadyAtMs && now >= s.drill2ReadyAtMs) {
            s.drill2ReadyAtMs = null;
        }

        // Перевірка телепортера (130 кімната)
        if (s.teleportActiveEndMs && now >= s.teleportActiveEndMs) {
            s.teleportActiveEndMs = null;
            if (isAuraLarpModeActive && activeLarpSubTab === 'room') {
                renderAuraLarpMonsterUI(false);
            }
        }
        if (s.teleportCooldownEndMs && now >= s.teleportCooldownEndMs) {
            s.teleportCooldownEndMs = null;
        }
        if (s.teleportingToStep && s.teleportArrivalEndMs && now >= s.teleportArrivalEndMs) {
            const arrivedStep = s.teleportingToStep;
            s.currentStep = arrivedStep;
            s.targetStep = arrivedStep;
            s.moveProgressSec = 0;
            s.highestStep = Math.max(s.highestStep || 1, arrivedStep);
            s.teleportingToStep = null;
            s.teleportArrivalEndMs = null;
            persistAuraLarpState(false);
            if (isAuraLarpModeActive) {
                renderAuraLarpMonsterUI(activeLarpSubTab === 'stairs');
            }
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
        if (!s.teleportingToStep && s.currentStep !== s.targetStep) {
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

        // 4. Спавн та автоматичне прибирання сміття (якщо відкрита 30 сходинка)
        if (s.maxUnlockedStep >= 30) {
            if (isCleanerActive() && activeTrashItems.length > 0) {
                collectAllActiveTrashByCleaner();
            }

            const trashInterval = getTrashSpawnInterval();
            if (activeTrashItems.length < MAX_TRASH_ITEMS || isCleanerActive()) {
                trashSpawnAccumSec += dt;
                while (trashSpawnAccumSec >= trashInterval && (activeTrashItems.length < MAX_TRASH_ITEMS || isCleanerActive())) {
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
            roomBuyBtn.disabled = !(canInteractWithRoom(10) && s.larp >= getRoomUpgradeCost());
        }

        // Кімната 20 (Сніжинки)
        const snowMultBtn = document.getElementById('alm-snow-mult-btn');
        if (snowMultBtn) {
            snowMultBtn.disabled = !(canInteractWithRoom(20) && s.snow >= getSnowMultUpgradeCost());
        }
        const snowSpeedBtn = document.getElementById('alm-snow-speed-btn');
        if (snowSpeedBtn) {
            const isMax = (s.snowSpeedLvl || 0) >= SNOW_SPEED_MAX_LVL;
            snowSpeedBtn.disabled = !(!isMax && canInteractWithRoom(20) && s.snow >= getSnowSpeedUpgradeCost());
        }
        const snowLarpBtn = document.getElementById('alm-snow-larp-btn');
        if (snowLarpBtn) {
            snowLarpBtn.disabled = !(canInteractWithRoom(20) && s.snow >= getSnowLarpUpgradeCost());
        }

        // Кімната 30 (Сміття)
        const trashMultBtn = document.getElementById('alm-trash-mult-btn');
        if (trashMultBtn) {
            trashMultBtn.disabled = !(canInteractWithRoom(30) && s.trash >= getTrashMultUpgradeCost());
        }
        const trashSpeedBtn = document.getElementById('alm-trash-speed-btn');
        if (trashSpeedBtn) {
            const isMax = (s.trashSpeedLvl || 0) >= TRASH_SPEED_MAX_LVL;
            trashSpeedBtn.disabled = !(!isMax && canInteractWithRoom(30) && s.trash >= getTrashSpeedUpgradeCost());
        }
        const trashLarpBtn = document.getElementById('alm-trash-larp-btn');
        if (trashLarpBtn) {
            trashLarpBtn.disabled = !(canInteractWithRoom(30) && s.trash >= getTrashLarpUpgradeCost());
        }

        // Кімната 40 (Швидкість та Офлайн макс 100)
        const stepSpeedBtn = document.getElementById('alm-step-speed-btn');
        if (stepSpeedBtn) {
            stepSpeedBtn.disabled = !(canInteractWithRoom(40) && s.larp >= getSpeedUpgradeCost());
        }
        const offlineLarpBtn = document.getElementById('alm-offline-larp-btn');
        if (offlineLarpBtn) {
            const isOfflineMax = (s.offlineLarpLvl || 0) >= OFFLINE_UPG_MAX_LVL;
            offlineLarpBtn.disabled = !(!isOfflineMax && canInteractWithRoom(40) && s.larp >= getOfflineUpgradeCost());
        }

        // Кімната 50 (Пір'я)
        const featherMultBtn = document.getElementById('alm-feather-mult-btn');
        if (featherMultBtn) {
            featherMultBtn.disabled = !(canInteractWithRoom(50) && s.feathers >= getFeatherMultUpgradeCost());
        }
        const featherLarpBtn = document.getElementById('alm-feather-larp-btn');
        if (featherLarpBtn) {
            featherLarpBtn.disabled = !(canInteractWithRoom(50) && s.feathers >= getFeatherLarpUpgradeCost());
        }

        // Кімната 60 (Шанси золотих та смарагдових сніжинок / сміття)
        const goldSnowBtn = document.getElementById('alm-gold-snow-btn');
        if (goldSnowBtn) {
            const isMax = (s.goldSnowLvl || 0) >= GOLD_SNOW_MAX_LVL;
            goldSnowBtn.disabled = !(!isMax && canInteractWithRoom(60) && s.larp >= getGoldSnowUpgradeCost());
        }
        const emeraldSnowBtn = document.getElementById('alm-emerald-snow-btn');
        if (emeraldSnowBtn) {
            const isMax = (s.emeraldSnowLvl || 0) >= EMERALD_SNOW_MAX_LVL;
            emeraldSnowBtn.disabled = !(!isMax && canInteractWithRoom(60) && s.larp >= getEmeraldSnowUpgradeCost());
        }
        const goldTrashBtn = document.getElementById('alm-gold-trash-btn');
        if (goldTrashBtn) {
            const isMax = (s.goldTrashLvl || 0) >= GOLD_TRASH_MAX_LVL;
            goldTrashBtn.disabled = !(!isMax && canInteractWithRoom(60) && s.larp >= getGoldTrashUpgradeCost());
        }
        const emeraldTrashBtn = document.getElementById('alm-emerald-trash-btn');
        if (emeraldTrashBtn) {
            const isMax = (s.emeraldTrashLvl || 0) >= EMERALD_TRASH_MAX_LVL;
            emeraldTrashBtn.disabled = !(!isMax && canInteractWithRoom(60) && s.larp >= getEmeraldTrashUpgradeCost());
        }

        // Кімната 70 (Вітаміни та Овочі)
        const vitMultBtn = document.getElementById('alm-vit-mult-btn');
        if (vitMultBtn) {
            vitMultBtn.disabled = !(canInteractWithRoom(70) && s.vitamins >= getVitaminMultUpgradeCost());
        }
        const mergeLv2Btn = document.getElementById('alm-merge-lv2-btn');
        if (mergeLv2Btn) {
            const isMax = (s.mergeLv2ChanceLvl || 0) >= MERGE_LV2_MAX_LVL;
            mergeLv2Btn.disabled = !(!isMax && canInteractWithRoom(70) && s.vitamins >= getMergeLv2UpgradeCost());
        }
        const mergeLarpBtn = document.getElementById('alm-merge-larp-btn');
        if (mergeLarpBtn) {
            mergeLarpBtn.disabled = !(canInteractWithRoom(70) && s.vitamins >= getMergeLarpUpgradeCost());
        }

        // Кімната 80 (Сніжна буря)
        const stormDurBtn = document.getElementById('alm-storm-dur-btn');
        if (stormDurBtn) {
            stormDurBtn.disabled = !(canInteractWithRoom(80) && s.larp >= getStormDurationUpgradeCost());
        }
        const stormCdBtn = document.getElementById('alm-storm-cd-btn');
        if (stormCdBtn) {
            const isMax = (s.stormCooldownLvl || 0) >= STORM_COOLDOWN_MAX_LVL;
            stormCdBtn.disabled = !(!isMax && canInteractWithRoom(80) && s.larp >= getStormCooldownUpgradeCost());
        }
        const stormSpdBtn = document.getElementById('alm-storm-spd-btn');
        if (stormSpdBtn) {
            const isMax = (s.stormSpeedLvl || 0) >= STORM_SPAWN_MAX_LVL;
            stormSpdBtn.disabled = !(!isMax && canInteractWithRoom(80) && s.larp >= getStormSpeedUpgradeCost());
        }

        // Кімната 90 (Прокачки мобів)
        const mobDmgBtn = document.getElementById('alm-mob-dmg-btn');
        if (mobDmgBtn) {
            const isMax = (s.mobDamageLvl || 0) >= MOB_DMG_MAX_LVL;
            mobDmgBtn.disabled = !(!isMax && canInteractWithRoom(90) && s.larp >= getMobDamageUpgradeCost());
        }
        const mobRespawnBtn = document.getElementById('alm-mob-respawn-btn');
        if (mobRespawnBtn) {
            const isMax = (s.mobRespawnLvl || 0) >= MOB_SPAWN_MAX_LVL;
            mobRespawnBtn.disabled = !(!isMax && canInteractWithRoom(90) && s.larp >= getMobRespawnUpgradeCost());
        }

        // Кімната 110 (Прибиральник)
        const cleanerDurBtn = document.getElementById('alm-cleaner-dur-btn');
        if (cleanerDurBtn) {
            cleanerDurBtn.disabled = !(canInteractWithRoom(110) && s.larp >= getCleanerDurationUpgradeCost());
        }

        // Кімната 120 (Буріння вниз)
        const stoneMultBtn = document.getElementById('alm-stone-mult-btn');
        if (stoneMultBtn) {
            stoneMultBtn.disabled = !(canInteractWithRoom(120) && s.stone >= getStoneMultUpgradeCost());
        }
        const stoneLarpBtn = document.getElementById('alm-stone-larp-btn');
        if (stoneLarpBtn) {
            stoneLarpBtn.disabled = !(canInteractWithRoom(120) && s.stone >= getStoneLarpUpgradeCost());
        }
        const drill1CdBtn = document.getElementById('alm-drill1-cd-btn');
        if (drill1CdBtn) {
            const isMax = (s.drill1CdLvl || 0) >= DRILL1_CD_MAX_LVL;
            drill1CdBtn.disabled = !(!isMax && canInteractWithRoom(120) && s.larp >= getDrill1CdUpgradeCost());
        }
        const drill2CdBtn = document.getElementById('alm-drill2-cd-btn');
        if (drill2CdBtn) {
            const isMax = (s.drill2CdLvl || 0) >= DRILL2_CD_MAX_LVL;
            drill2CdBtn.disabled = !(!isMax && s.drill2Unlocked && canInteractWithRoom(120) && s.larp >= getDrill2CdUpgradeCost());
        }

        // Кімната 130 (Телепортер)
        const tpDurBtn = document.getElementById('alm-tp-dur-btn');
        if (tpDurBtn) {
            tpDurBtn.disabled = !(canInteractWithRoom(130) && s.larp >= getTeleportDurationUpgradeCost());
        }
        const tpCdBtn = document.getElementById('alm-tp-cd-btn');
        if (tpCdBtn) {
            const isMax = (s.teleportCooldownLvl || 0) >= TELEPORT_COOLDOWN_MAX_LVL;
            tpCdBtn.disabled = !(!isMax && canInteractWithRoom(130) && s.larp >= getTeleportCooldownUpgradeCost());
        }
        const tpTravelBtn = document.getElementById('alm-tp-travel-btn');
        if (tpTravelBtn) {
            const isMax = (s.teleportTravelLvl || 0) >= TELEPORT_TRAVEL_MAX_LVL;
            tpTravelBtn.disabled = !(!isMax && canInteractWithRoom(130) && s.larp >= getTeleportTravelUpgradeCost());
        }
    }

    function updateAllDynamicElements(forceStateSync, autoScrollToPlayer) {
        updateTopGameHeader();
        if (!isAuraLarpModeActive) return;

        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();

        const larpValEl = document.getElementById('alm-larp-balance');
        const larpWordEl = document.getElementById('alm-larp-word');
        const larpRateEl = document.getElementById('alm-larp-rate');
        const stepBadgeEl = document.getElementById('alm-step-badge');

        if (larpValEl) larpValEl.textContent = formatLarpValue(s.larp);
        if (larpWordEl) larpWordEl.textContent = 'ларп';
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

        // Живий таймер прибуття персонажа у кімнаті (якщо персонаж уже йде або телепортується туди)
        const roomArrivalTimerEl = document.getElementById('alm-room-arrival-timer');
        if (roomArrivalTimerEl) {
            if (s.teleportingToStep === activeRoomStep && s.teleportArrivalEndMs && now < s.teleportArrivalEndMs) {
                const leftSec = Math.max(0.1, (s.teleportArrivalEndMs - now) / 1000);
                roomArrivalTimerEl.textContent = formatArrivalSeconds(leftSec);
            } else if (s.targetStep === activeRoomStep && s.currentStep !== activeRoomStep) {
                const visStep = getVisualStepPosition();
                const leftSec = Math.max(0.1, Math.abs(activeRoomStep - visStep) / getCharacterMoveSpeed());
                roomArrivalTimerEl.textContent = formatArrivalSeconds(leftSec);
            }
        }

        updateRoomUpgradeButtons();
        updateSnowCounterText();
        updateTrashCounterText();
        updateChickenDynamicHud();
        updateMergeCounterText();
        updateStormDynamicHud();
        updateCleanerDynamicHud();
        updateDrillDynamicHud();
        updateTeleporterDynamicHud();

        const charEl = document.getElementById('alm-character');
        const trackEl = document.getElementById('alm-stairs-track');
        if (charEl && trackEl) {
            const visStep = getVisualStepPosition();
            const isTeleporting = Boolean(s.teleportingToStep && s.teleportArrivalEndMs && now < s.teleportArrivalEndMs);
            const isMoving = !isTeleporting && s.currentStep !== s.targetStep;

            const leftCss = getStepCenterCss(visStep);
            const bottomPx = (visStep - 1) * ROW_HEIGHT + 24;

            charEl.style.left = leftCss;
            charEl.style.bottom = `${bottomPx}px`;
            charEl.classList.toggle('is-moving', isMoving || isTeleporting);

            const statusBubble = document.getElementById('alm-char-status');
            if (statusBubble) {
                if (isTeleporting) {
                    const leftSec = Math.max(0.1, (s.teleportArrivalEndMs - now) / 1000);
                    statusBubble.style.display = 'block';
                    statusBubble.textContent = `⚡ ${s.teleportingToStep} (${formatArrivalSeconds(leftSec)})`;
                } else if (isMoving) {
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
                const isCurrent = stepNum === s.currentStep && s.currentStep === s.targetStep && !s.teleportingToStep;
                const isTarget = (stepNum === s.targetStep && s.currentStep !== s.targetStep) || stepNum === s.teleportingToStep;

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

    // Універсальний банер стану кімнати (заблокована / персонаж іде сюди з таймером / кнопка піти сюди без перекидання на сходи)
    function renderRoomStatusBanner(s, roomStep, actionGoalPhrase) {
        if (s.maxUnlockedStep < roomStep) {
            return `
                <div class="alm-room-alert locked">
                    🔒 <b>Кімната заблокована!</b> Відкрийте <b>${roomStep}-ту сходинку</b> у вкладці «Сходи»!
                </div>
            `;
        }

        if (canInteractWithRoom(roomStep)) {
            return '';
        }

        const now = getCurrentNowMs();
        const isTeleportingHere = s.teleportingToStep === roomStep && s.teleportArrivalEndMs && now < s.teleportArrivalEndMs;
        const isWalkingHere = !isTeleportingHere && s.targetStep === roomStep && s.currentStep !== roomStep;
        const tpActive = isTeleporterActive();

        if (isTeleportingHere) {
            const leftSec = Math.max(0.1, (s.teleportArrivalEndMs - now) / 1000);
            return `
                <div class="alm-room-alert warning">
                    <div>⚡ Телепортація на <b>${roomStep}-ту сходинку</b>! Персонаж з'явиться через: <b id="alm-room-arrival-timer" style="color:#c084fc;">${formatArrivalSeconds(leftSec)}</b></div>
                </div>
            `;
        }

        if (isWalkingHere) {
            const visStep = getVisualStepPosition();
            const leftSec = Math.max(0.1, Math.abs(roomStep - visStep) / getCharacterMoveSpeed());
            return `
                <div class="alm-room-alert warning">
                    <div>🏃 Персонаж іде на <b>${roomStep}-ту сходинку</b> (зараз: ${s.currentStep}). Дійде через: <b id="alm-room-arrival-timer" style="color:#38bdf8;">${formatArrivalSeconds(leftSec)}</b></div>
                    ${tpActive ? `
                        <button class="alm-mini-go-btn" style="background:rgba(168,85,247,0.22);border-color:#a855f7;color:#e9d5ff;" onclick="window.teleportAuraLarpToStep(${roomStep})">
                            ⚡ Телепортуватись (${getTeleportTravelSeconds()} сек)
                        </button>
                    ` : ''}
                </div>
            `;
        }

        return `
            <div class="alm-room-alert warning">
                <div>🚶 ${actionGoalPhrase} персонаж має стояти на <b>${roomStep}-й сходинці</b> (зараз: ${s.currentStep}).</div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;width:100%;">
                    <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(${roomStep})">
                        Піти на ${roomStep} сходинку
                    </button>
                    ${tpActive ? `
                        <button class="alm-mini-go-btn" style="background:rgba(168,85,247,0.22);border-color:#a855f7;color:#e9d5ff;" onclick="window.teleportAuraLarpToStep(${roomStep})">
                            ⚡ Телепортуватись (${getTeleportTravelSeconds()} сек)
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }

    function renderRoomTabHtml(s) {
        const roomMult = getRoomLarpMultiplier();
        const nextRoomMult = getNextRoomLarpMultiplier();
        const roomCost = getRoomUpgradeCost();

        const isRoom10Unlocked = s.maxUnlockedStep >= 10;
        const isCharacterAtRoom10 = canInteractWithRoom(10);

        const isRoom20Unlocked = s.maxUnlockedStep >= 20;
        const isCharacterAtRoom20 = canInteractWithRoom(20);

        const isRoom30Unlocked = s.maxUnlockedStep >= 30;
        const isCharacterAtRoom30 = canInteractWithRoom(30);

        const isRoom40Unlocked = s.maxUnlockedStep >= 40;
        const isCharacterAtRoom40 = canInteractWithRoom(40);

        const isRoom50Unlocked = s.maxUnlockedStep >= 50;
        const isCharacterAtRoom50 = canInteractWithRoom(50);

        const isRoom60Unlocked = s.maxUnlockedStep >= 60;
        const isCharacterAtRoom60 = canInteractWithRoom(60);

        const isRoom70Unlocked = s.maxUnlockedStep >= 70;
        const isCharacterAtRoom70 = canInteractWithRoom(70);

        const isRoom80Unlocked = s.maxUnlockedStep >= 80;
        const isCharacterAtRoom80 = canInteractWithRoom(80);

        const isRoom90Unlocked = s.maxUnlockedStep >= 90;
        const isCharacterAtRoom90 = canInteractWithRoom(90);

        const isRoom110Unlocked = s.maxUnlockedStep >= 110;
        const isCharacterAtRoom110 = canInteractWithRoom(110);

        const isRoom120Unlocked = s.maxUnlockedStep >= 120;
        const isCharacterAtRoom120 = canInteractWithRoom(120);

        const isRoom130Unlocked = s.maxUnlockedStep >= 130;
        const isCharacterAtRoom130 = canInteractWithRoom(130);

        // Кнопки вибору між кімнатами
        let roomSelectorHtml = `<div class="alm-room-selector">`;
        ROOM_STEPS.forEach(rStep => {
            const unlocked = s.maxUnlockedStep >= rStep;
            const isSelected = activeRoomStep === rStep;
            const roomLabels = {
                10: '10 (Ларпи)',
                20: '20 (Сніг)',
                30: '30 (Сміття)',
                40: '40 (Швидк./Офл.)',
                50: "50 (Пір'я)",
                60: '60 (Рідкість)',
                70: '70 (Вітаміни)',
                80: '80 (Буря)',
                90: '90 (Моби)',
                110: '110 (Прибир.)',
                120: '120 (Буріння)',
                130: '130 (Телепорт)'
            };
            const label = roomLabels[rStep] || `${rStep}`;
            roomSelectorHtml += `
                <button class="alm-room-pill ${isSelected ? 'active' : ''} ${unlocked ? '' : 'locked'}"
                        onclick="window.openAuraLarpRoomAtStep(${rStep})">
                    ${unlocked ? '🚪' : '🔒'} ${label}
                </button>
            `;
        });
        roomSelectorHtml += `</div>`;

        // Вміст кімнати 10 сходинки
        if (activeRoomStep === 10) {
            const canBuy = isCharacterAtRoom10 && s.larp >= roomCost;
            const statusBanner = renderRoomStatusBanner(s, 10, 'Щоб купувати прокачки в цій кімнаті,');

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">⚡ ПОКРАЩЕННЯ КІМНАТИ (10 СХОДИНКА)</div>

                    <div class="alm-hero-upg-card emerald-theme ${isRoom10Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">📈</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Множник Ларпів
                                <span class="alm-lvl-pill">Рів. ${s.roomMultLvl}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Множник: <b>x${formatMultValue(roomMult)}</b> → <span style="color:#4ade80;font-weight:900;">x${formatMultValue(nextRoomMult)}</span>
                            </div>
                            <div class="alm-hero-upg-cost">
                                Ціна: <span>${formatLarpValue(roomCost)} ларп</span>
                            </div>
                        </div>
                        <button id="alm-room-buy-btn" class="alm-hero-upg-btn" ${canBuy ? '' : 'disabled'} onclick="window.buyAuraLarpRoomUpgrade()">
                            Купити
                        </button>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 20 сходинки (Збір сніжинок)
        if (activeRoomStep === 20) {
            const statusBanner = renderRoomStatusBanner(s, 20, 'Щоб збирати сніжинки та купувати прокачки,');

            const snowMult = getSnowMultiplier();
            const nextSnowMult = getNextSnowMultiplier();
            const snowMultCost = getSnowMultUpgradeCost();
            const canBuySnowMult = isCharacterAtRoom20 && s.snow >= snowMultCost;

            const curInterval = getSnowSpawnInterval();
            const nextInterval = getNextSnowSpawnInterval();
            const speedCost = getSnowSpeedUpgradeCost();
            const isSpeedMax = (s.snowSpeedLvl || 0) >= SNOW_SPEED_MAX_LVL;
            const canBuySpeed = !isSpeedMax && isCharacterAtRoom20 && s.snow >= speedCost;

            const snowLarpMult = getSnowLarpMultiplier();
            const nextSnowLarpMult = getNextSnowLarpMultiplier();
            const snowLarpCost = getSnowLarpUpgradeCost();
            const canBuySnowLarp = isCharacterAtRoom20 && s.snow >= snowLarpCost;

            const goldSnowChance = getGoldSnowChancePct();
            const emeraldSnowChance = getEmeraldSnowChancePct();
            const stormActive = isSnowstormActive();
            const stormLeftSec = stormActive ? Math.max(0, (s.stormActiveEndMs - getCurrentNowMs()) / 1000) : 0;

            let flakesHtml = '';
            activeSnowflakes.forEach(f => {
                const rarity = f.rarity || 'normal';
                const extraCls = rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : '');
                flakesHtml += `
                    <div class="alm-snowflake-item${extraCls}" data-flake-id="${f.id}" style="left:${f.xPct}%;top:${f.yPct}%;">❄️</div>
                `;
            });

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                ${stormActive ? `
                    <div class="alm-room-alert" style="background:rgba(56,189,248,0.16);border:1px solid rgba(56,189,248,0.5);color:#bae6fd;margin-bottom:8px;">
                        🌨️ <b>СНІЖНА БУРЯ АКТИВНА!</b> Сніжинки падають кожні <b>${getStormSnowSpawnInterval()} сек</b>! Залишилось: <b id="alm-room20-storm-timer">${formatTimerMmSs(stormLeftSec)}</b>
                    </div>
                ` : ''}

                <div class="alm-room-split-grid ${isRoom20Unlocked ? '' : 'dimmed'}">
                    <!-- Ліва колонка: Зона сніжинок -->
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span style="color:#bae6fd;font-weight:900;">❄️ ЗОНА СНІЖИНОК</span>
                            <span id="alm-snow-count-badge" class="alm-zone-counter">${activeSnowflakes.length} / ${MAX_SNOWFLAKES}</span>
                        </div>

                        <div id="alm-snow-zone" class="alm-snow-zone ${isCharacterAtRoom20 ? '' : 'disabled-zone'}">
                            ${flakesHtml}
                            <div class="alm-snow-hint">Проведіть пальцем або курсором по сніжинках!</div>
                        </div>

                        <div class="alm-zone-bottom-pill">
                            <span>❄️ Зібрано: <b id="alm-snow-balance" style="color:#38bdf8;">${formatSnowValue(s.snow)}</b></span>
                            <span style="color:#94a3b8;">Всього: <b id="alm-snow-total" style="color:#e2e8f0;">${formatSnowValue(s.totalSnow)}</b></span>
                        </div>

                        ${(goldSnowChance > 0 || emeraldSnowChance > 0) ? `
                            <div style="display:flex;justify-content:center;gap:12px;font-size:0.75rem;color:#cbd5e1;margin-top:4px;">
                                <span>✨ Золоті (x10): <b style="color:#facc15;">${goldSnowChance}%</b></span>
                                <span>💎 Смарагдові (x1000): <b style="color:#4ade80;">${emeraldSnowChance}%</b></span>
                            </div>
                        ` : ''}
                    </div>

                    <!-- Права колонка: Прокачки та Топ зібраних сніжинок -->
                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">⚡ ПРОКАЧКИ ЗА СНІЖИНКИ</div>

                            <div class="alm-compact-upg-list">
                                <!-- 1. Множник сніжинок -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">❄️ Множник сніжинок <span class="alm-lvl-pill">Рів. ${s.snowMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Збір: <b>x${snowMult}</b> → <span style="color:#38bdf8;font-weight:800;">x${nextSnowMult}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatSnowValue(snowMultCost)} ❄️</b></div>
                                    </div>
                                    <button id="alm-snow-mult-btn" class="alm-compact-upg-btn snow" ${canBuySnowMult ? '' : 'disabled'} onclick="window.buyAuraLarpSnowMult()">
                                        Купити
                                    </button>
                                </div>

                                <!-- 2. Швидкість появи сніжинок -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">⏱️ Швидкість появи <span class="alm-lvl-pill">Рів. ${s.snowSpeedLvl || 0}/${SNOW_SPEED_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">
                                            Поява: <b>${curInterval}с</b> → <span style="color:#38bdf8;font-weight:800;">${isSpeedMax ? '0.2с (МАКС)' : `${nextInterval}с`}</span>
                                        </div>
                                        <div class="alm-compact-upg-cost">
                                            ${isSpeedMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <b>${formatSnowValue(speedCost)} ❄️</b>`}
                                        </div>
                                    </div>
                                    <button id="alm-snow-speed-btn" class="alm-compact-upg-btn snow" ${canBuySpeed ? '' : 'disabled'} onclick="window.buyAuraLarpSnowSpeed()">
                                        ${isSpeedMax ? 'Макс' : 'Купити'}
                                    </button>
                                </div>

                                <!-- 3. Множник Ларпів -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🔮 Множник Ларпів <span class="alm-lvl-pill">Рів. ${s.snowLarpMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Множник: <b>x${formatMultValue(snowLarpMult)}</b> → <span style="color:#4ade80;font-weight:800;">x${formatMultValue(nextSnowLarpMult)}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatSnowValue(snowLarpCost)} ❄️</b></div>
                                    </div>
                                    <button id="alm-snow-larp-btn" class="alm-compact-upg-btn emerald" ${canBuySnowLarp ? '' : 'disabled'} onclick="window.buyAuraLarpSnowLarp()">
                                        Купити
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 ТОП ЗІБРАНИХ СНІЖИНОК</div>
                            <div id="alm-snow-lb-list" class="alm-snow-lb-list"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 30 сходинки (Прибирання сміття)
        if (activeRoomStep === 30) {
            const statusBanner = renderRoomStatusBanner(s, 30, 'Щоб прибирати сміття та купувати прокачки,');

            const trashMult = getTrashMultiplier();
            const nextTrashMult = getNextTrashMultiplier();
            const trashMultCost = getTrashMultUpgradeCost();
            const canBuyTrashMult = isCharacterAtRoom30 && s.trash >= trashMultCost;

            const curTrashInterval = getTrashSpawnInterval();
            const nextTrashInterval = getNextTrashSpawnInterval();
            const trashSpeedCost = getTrashSpeedUpgradeCost();
            const isTrashSpeedMax = (s.trashSpeedLvl || 0) >= TRASH_SPEED_MAX_LVL;
            const canBuyTrashSpeed = !isTrashSpeedMax && isCharacterAtRoom30 && s.trash >= trashSpeedCost;

            const trashLarpMult = getTrashLarpMultiplier();
            const nextTrashLarpMult = getNextTrashLarpMultiplier();
            const trashLarpCost = getTrashLarpUpgradeCost();
            const canBuyTrashLarp = isCharacterAtRoom30 && s.trash >= trashLarpCost;

            const goldTrashChance = getGoldTrashChancePct();
            const emeraldTrashChance = getEmeraldTrashChancePct();
            const cleanerActive = isCleanerActive();
            const cleanerLeftSec = cleanerActive ? Math.max(0, (s.cleanerActiveEndMs - getCurrentNowMs()) / 1000) : 0;

            let trashHtml = '';
            activeTrashItems.forEach(t => {
                const rarity = t.rarity || 'normal';
                const extraCls = rarity === 'gold' ? ' gold' : (rarity === 'emerald' ? ' emerald' : '');
                trashHtml += `
                    <div class="alm-trash-item${extraCls}" data-trash-id="${t.id}" style="left:${t.xPct}%;top:${t.yPct}%;">${t.icon}</div>
                `;
            });

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                ${cleanerActive ? `
                    <div class="alm-room-alert" style="background:rgba(34,197,94,0.16);border:1px solid rgba(34,197,94,0.5);color:#bbf7d0;margin-bottom:8px;">
                        🧹 <b>ПРИБИРАЛЬНИК ПРАЦЮЄ!</b> Усе сміття прибирається автоматично ще: <b id="alm-room30-cleaner-timer">${formatTimerMmSs(cleanerLeftSec)}</b>
                    </div>
                ` : ''}

                <div class="alm-room-split-grid ${isRoom30Unlocked ? '' : 'dimmed'}">
                    <!-- Ліва колонка: Зона прибирання сміття -->
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span style="color:#fde047;font-weight:900;">🗑️ ЗОНА ПРИБИРАННЯ</span>
                            <span id="alm-trash-count-badge" class="alm-zone-counter" style="color:#fde047;background:rgba(250,204,21,0.16);">${activeTrashItems.length} / ${MAX_TRASH_ITEMS}</span>
                        </div>

                        <div id="alm-trash-zone" class="alm-trash-zone ${isCharacterAtRoom30 ? '' : 'disabled-zone'}">
                            <div id="alm-trash-bin" class="alm-trash-bin">
                                <span class="alm-trash-bin-icon">🗑️</span>
                                <span class="alm-trash-bin-text">СЮДИ</span>
                            </div>
                            ${trashHtml}
                            <div class="alm-snow-hint">Перетягніть сміття у кошик посередині!</div>
                        </div>

                        <div class="alm-zone-bottom-pill">
                            <span>🗑️ Зібрано: <b id="alm-trash-balance" style="color:#facc15;">${formatTrashValue(s.trash)}</b></span>
                            <span style="color:#94a3b8;">Всього: <b id="alm-trash-total" style="color:#e2e8f0;">${formatTrashValue(s.totalTrash)}</b></span>
                        </div>

                        ${(goldTrashChance > 0 || emeraldTrashChance > 0) ? `
                            <div style="display:flex;justify-content:center;gap:12px;font-size:0.75rem;color:#cbd5e1;margin-top:4px;">
                                <span>✨ Золоте (x10): <b style="color:#facc15;">${goldTrashChance}%</b></span>
                                <span>💎 Смарагдове (x1000): <b style="color:#4ade80;">${emeraldTrashChance}%</b></span>
                            </div>
                        ` : ''}
                    </div>

                    <!-- Права колонка: Прокачки та Топ прибраного сміття -->
                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">⚡ ПРОКАЧКИ ЗА СМІТТЯ</div>

                            <div class="alm-compact-upg-list">
                                <!-- 1. Множник сміття -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🗑️ Множник сміття <span class="alm-lvl-pill">Рів. ${s.trashMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Прибирання: <b>x${trashMult}</b> → <span style="color:#facc15;font-weight:800;">x${nextTrashMult}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatTrashValue(trashMultCost)} 🗑️</b></div>
                                    </div>
                                    <button id="alm-trash-mult-btn" class="alm-compact-upg-btn trash" ${canBuyTrashMult ? '' : 'disabled'} onclick="window.buyAuraLarpTrashMult()">
                                        Купити
                                    </button>
                                </div>

                                <!-- 2. Швидкість появи сміття -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">⏱️ Швидкість появи <span class="alm-lvl-pill">Рів. ${s.trashSpeedLvl || 0}/${TRASH_SPEED_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">
                                            Поява: <b>${curTrashInterval}с</b> → <span style="color:#facc15;font-weight:800;">${isTrashSpeedMax ? '0.4с (МАКС)' : `${nextTrashInterval}с`}</span>
                                        </div>
                                        <div class="alm-compact-upg-cost">
                                            ${isTrashSpeedMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <b>${formatTrashValue(trashSpeedCost)} 🗑️</b>`}
                                        </div>
                                    </div>
                                    <button id="alm-trash-speed-btn" class="alm-compact-upg-btn trash" ${canBuyTrashSpeed ? '' : 'disabled'} onclick="window.buyAuraLarpTrashSpeed()">
                                        ${isTrashSpeedMax ? 'Макс' : 'Купити'}
                                    </button>
                                </div>

                                <!-- 3. Множник Ларпів -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🔮 Множник Ларпів <span class="alm-lvl-pill">Рів. ${s.trashLarpMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Множник: <b>x${formatMultValue(trashLarpMult)}</b> → <span style="color:#4ade80;font-weight:800;">x${formatMultValue(nextTrashLarpMult)}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatTrashValue(trashLarpCost)} 🗑️</b></div>
                                    </div>
                                    <button id="alm-trash-larp-btn" class="alm-compact-upg-btn emerald" ${canBuyTrashLarp ? '' : 'disabled'} onclick="window.buyAuraLarpTrashLarp()">
                                        Купити
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 ТОП ПРИБРАНОГО СМІТТЯ</div>
                            <div id="alm-trash-lb-list" class="alm-snow-lb-list"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 40 сходинки (Швидкість пересування + Офлайн-фарм макс 100 рівень)
        if (activeRoomStep === 40) {
            const statusBanner = renderRoomStatusBanner(s, 40, 'Щоб купувати прокачки в цій кімнаті,');

            const curSpeed = getCharacterMoveSpeed();
            const nextSpeed = getNextCharacterMoveSpeed();
            const speedCost = getSpeedUpgradeCost();
            const canBuySpeed = isCharacterAtRoom40 && s.larp >= speedCost;

            const curOfflinePct = getOfflineLarpPercent();
            const nextOfflinePct = getNextOfflineLarpPercent();
            const offlineCost = getOfflineUpgradeCost();
            const isOfflineMax = (s.offlineLarpLvl || 0) >= OFFLINE_UPG_MAX_LVL;
            const canBuyOffline = !isOfflineMax && isCharacterAtRoom40 && s.larp >= offlineCost;

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">⚡ ПОКРАЩЕННЯ КІМНАТИ (40 СХОДИНКА)</div>

                    <!-- 1. Швидкість пересування по сходинках -->
                    <div class="alm-hero-upg-card snow-theme ${isRoom40Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🏃</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Швидкість персонажа
                                <span class="alm-lvl-pill">Рів. ${s.stepSpeedLvl || 0}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Швидкість: <b>${curSpeed} сх/с</b> → <span style="color:#38bdf8;font-weight:900;">${nextSpeed} сх/с</span> (+1%)
                            </div>
                            <div class="alm-hero-upg-cost">
                                Ціна: <span>${formatLarpValue(speedCost)} ларп</span>
                            </div>
                        </div>
                        <button id="alm-step-speed-btn" class="alm-hero-upg-btn snow" ${canBuySpeed ? '' : 'disabled'} onclick="window.buyAuraLarpStepSpeed()">
                            Купити
                        </button>
                    </div>

                    <!-- 2. Офлайн-заробіток (від найвищої сходинки, макс 100 рівень) -->
                    <div class="alm-hero-upg-card purple-theme ${isRoom40Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🌙</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Офлайн-заробіток Ларпів
                                <span class="alm-lvl-pill">Рів. ${s.offlineLarpLvl || 0}/${OFFLINE_UPG_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Від доходу ${getHighestUnlockedStepNumber()}-ї сх.: <b>${curOfflinePct}%</b> → <span style="color:#c084fc;font-weight:900;">${isOfflineMax ? '100% (МАКС)' : `${nextOfflinePct}%`}</span>
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${isOfflineMax ? '<span style="color:#4ade80;font-weight:800;">МАКСИМАЛЬНИЙ РІВЕНЬ (100%)</span>' : `Ціна: <span>${formatLarpValue(offlineCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-offline-larp-btn" class="alm-hero-upg-btn purple" ${canBuyOffline ? '' : 'disabled'} onclick="window.buyAuraLarpOfflineUpgrade()">
                            ${isOfflineMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 50 сходинки (Моб Бойова Квочка Ряба + Пір'я)
        if (activeRoomStep === 50) {
            const statusBanner = renderRoomStatusBanner(s, 50, 'Щоб атакувати моба та купувати прокачки,');

            const featherMult = getFeatherMultiplier();
            const nextFeatherMult = getNextFeatherMultiplier();
            const featherMultCost = getFeatherMultUpgradeCost();
            const canBuyFeatherMult = isCharacterAtRoom50 && s.feathers >= featherMultCost;

            const featherLarpMult = getFeatherLarpMultiplier();
            const nextFeatherLarpMult = getNextFeatherLarpMultiplier();
            const featherLarpCost = getFeatherLarpUpgradeCost();
            const canBuyFeatherLarp = isCharacterAtRoom50 && s.feathers >= featherLarpCost;

            const isRespawning = Boolean(s.chickenRespawnEndMs && getCurrentNowMs() < s.chickenRespawnEndMs);
            const leftRespawnSec = isRespawning ? Math.max(0, (s.chickenRespawnEndMs - getCurrentNowMs()) / 1000) : 0;
            const hpPct = Math.max(0, Math.min(100, ((isRespawning ? 0 : s.chickenHp) / CHICKEN_MAX_HP) * 100));
            const clickDmg = getChickenClickDamage();
            const respawnDurSec = getChickenRespawnDurationSec();
            const dropPreview = Math.round(CHICKEN_BASE_FEATHER_DROP * featherMult);

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-room-split-grid ${isRoom50Unlocked ? '' : 'dimmed'}">
                    <!-- Ліва колонка: Арена моба -->
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span style="color:#fdba74;font-weight:900;">🐔 ${CHICKEN_MOB_NAME.toUpperCase()}</span>
                            <span class="alm-zone-counter" style="color:#fdba74;background:rgba(251,146,60,0.16);">⚔️ -${clickDmg} HP / удар</span>
                        </div>

                        <div id="alm-chicken-arena" class="alm-chicken-arena ${isCharacterAtRoom50 ? '' : 'disabled-zone'}">
                            <div class="alm-chicken-hp-wrap">
                                <div class="alm-chicken-hp-bar">
                                    <div id="alm-chicken-hp-fill" class="alm-chicken-hp-fill" style="width:${hpPct}%;"></div>
                                </div>
                                <div id="alm-chicken-hp-text" class="alm-chicken-hp-text">
                                    ${isRespawning ? '0' : Math.ceil(s.chickenHp)} / ${CHICKEN_MAX_HP} HP
                                </div>
                            </div>

                            ${isRespawning ? `
                                <div class="alm-chicken-respawn-box">
                                    <div style="font-size:2.4rem;margin-bottom:4px;">⏳</div>
                                    <div style="font-size:0.86rem;font-weight:800;color:#fdba74;">Квочка відпочиває</div>
                                    <div style="font-size:0.8rem;color:#cbd5e1;margin-top:3px;">
                                        З'явиться через: <b id="alm-chicken-respawn-timer" style="color:#facc15;font-size:1rem;">${formatTimerMmSs(leftRespawnSec)}</b>
                                    </div>
                                </div>
                            ` : `
                                <button id="alm-chicken-mob-btn" class="alm-chicken-mob-btn"
                                        ${isCharacterAtRoom50 ? '' : 'disabled'}
                                        onclick="window.attackAuraLarpChicken(event)">
                                    <span class="alm-chicken-sprite">🐔</span>
                                    <span class="alm-chicken-drop-badge">Нагорода: +${formatFeatherValue(dropPreview)} 🪶</span>
                                </button>
                                <div class="alm-snow-hint">Натискайте на Бойову Квочку Рябу (відродження: ${respawnDurSec}с)!</div>
                            `}
                        </div>

                        <div class="alm-zone-bottom-pill">
                            <span>🪶 Пір'я: <b id="alm-feather-balance" style="color:#fb923c;">${formatFeatherValue(s.feathers)}</b></span>
                            <span style="color:#94a3b8;">Всього: <b id="alm-feather-total" style="color:#e2e8f0;">${formatFeatherValue(s.totalFeathers)}</b></span>
                        </div>
                    </div>

                    <!-- Права колонка: Прокачки за пір'я та Топ пір'я -->
                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">⚡ ПРОКАЧКИ ЗА ПІР'Я</div>

                            <div class="alm-compact-upg-list">
                                <!-- 1. Множник пір'я -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🪶 Множник пір'я <span class="alm-lvl-pill">Рів. ${s.featherMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Випадіння: <b>x${formatMultValue(featherMult)}</b> → <span style="color:#fb923c;font-weight:800;">x${formatMultValue(nextFeatherMult)}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatFeatherValue(featherMultCost)} 🪶</b></div>
                                    </div>
                                    <button id="alm-feather-mult-btn" class="alm-compact-upg-btn feather" ${canBuyFeatherMult ? '' : 'disabled'} onclick="window.buyAuraLarpFeatherMult()">
                                        Купити
                                    </button>
                                </div>

                                <!-- 2. Множник Ларпів -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🔮 Множник Ларпів <span class="alm-lvl-pill">Рів. ${s.featherLarpMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Множник: <b>x${formatMultValue(featherLarpMult)}</b> → <span style="color:#4ade80;font-weight:800;">x${formatMultValue(nextFeatherLarpMult)}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatFeatherValue(featherLarpCost)} 🪶</b></div>
                                    </div>
                                    <button id="alm-feather-larp-btn" class="alm-compact-upg-btn emerald" ${canBuyFeatherLarp ? '' : 'disabled'} onclick="window.buyAuraLarpFeatherLarp()">
                                        Купити
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 ТОП ЗІБРАНОГО ПІР'Я</div>
                            <div id="alm-feather-lb-list" class="alm-snow-lb-list"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 60 сходинки (Шанси золотих х10 та смарагдових х1000 сніжинок і сміття)
        if (activeRoomStep === 60) {
            const statusBanner = renderRoomStatusBanner(s, 60, 'Щоб купувати прокачки в цій кімнаті,');

            const gSnowLvl = s.goldSnowLvl || 0;
            const gSnowPct = getGoldSnowChancePct();
            const gSnowNextPct = Number(Math.min(100, gSnowPct + GOLD_SNOW_STEP_PCT).toFixed(2));
            const gSnowCost = getGoldSnowUpgradeCost();
            const gSnowMax = gSnowLvl >= GOLD_SNOW_MAX_LVL;
            const canBuyGSnow = !gSnowMax && isCharacterAtRoom60 && s.larp >= gSnowCost;

            const eSnowLvl = s.emeraldSnowLvl || 0;
            const eSnowPct = getEmeraldSnowChancePct();
            const eSnowNextPct = Number(Math.min(100, eSnowPct + EMERALD_SNOW_STEP_PCT).toFixed(2));
            const eSnowCost = getEmeraldSnowUpgradeCost();
            const eSnowMax = eSnowLvl >= EMERALD_SNOW_MAX_LVL;
            const canBuyESnow = !eSnowMax && isCharacterAtRoom60 && s.larp >= eSnowCost;

            const gTrashLvl = s.goldTrashLvl || 0;
            const gTrashPct = getGoldTrashChancePct();
            const gTrashNextPct = Number(Math.min(100, gTrashPct + GOLD_TRASH_STEP_PCT).toFixed(2));
            const gTrashCost = getGoldTrashUpgradeCost();
            const gTrashMax = gTrashLvl >= GOLD_TRASH_MAX_LVL;
            const canBuyGTrash = !gTrashMax && isCharacterAtRoom60 && s.larp >= gTrashCost;

            const eTrashLvl = s.emeraldTrashLvl || 0;
            const eTrashPct = getEmeraldTrashChancePct();
            const eTrashNextPct = Number(Math.min(100, eTrashPct + EMERALD_TRASH_STEP_PCT).toFixed(2));
            const eTrashCost = getEmeraldTrashUpgradeCost();
            const eTrashMax = eTrashLvl >= EMERALD_TRASH_MAX_LVL;
            const canBuyETrash = !eTrashMax && isCharacterAtRoom60 && s.larp >= eTrashCost;

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">💎 РІДКІСНІ ПРЕДМЕТИ (60 СХОДИНКА)</div>

                    <!-- 1. Золота сніжинка (x10) -->
                    <div class="alm-hero-upg-card gold-theme ${isRoom60Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">❄️✨</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Золота сніжинка (x10)
                                <span class="alm-lvl-pill">Рів. ${gSnowLvl}/${GOLD_SNOW_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Шанс появи: <b>${gSnowPct}%</b> → <span style="color:#facc15;font-weight:900;">${gSnowMax ? '100% (МАКС)' : `${gSnowNextPct}%`}</span>
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${gSnowMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <span>${formatLarpValue(gSnowCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-gold-snow-btn" class="alm-hero-upg-btn gold" ${canBuyGSnow ? '' : 'disabled'} onclick="window.buyAuraLarpGoldSnow()">
                            ${gSnowMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>

                    <!-- 2. Смарагдова сніжинка (x1000) -->
                    <div class="alm-hero-upg-card emerald-theme ${isRoom60Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">❄️💎</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Смарагдова сніжинка (x1000)
                                <span class="alm-lvl-pill">Рів. ${eSnowLvl}/${EMERALD_SNOW_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Шанс появи: <b>${eSnowPct}%</b> → <span style="color:#4ade80;font-weight:900;">${eSnowMax ? '100% (МАКС)' : `${eSnowNextPct}%`}</span>
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${eSnowMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <span>${formatLarpValue(eSnowCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-emerald-snow-btn" class="alm-hero-upg-btn" ${canBuyESnow ? '' : 'disabled'} onclick="window.buyAuraLarpEmeraldSnow()">
                            ${eSnowMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>

                    <!-- 3. Золоте сміття (x10) -->
                    <div class="alm-hero-upg-card gold-theme ${isRoom60Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🗑️✨</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Золоте сміття (x10)
                                <span class="alm-lvl-pill">Рів. ${gTrashLvl}/${GOLD_TRASH_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Шанс появи: <b>${gTrashPct}%</b> → <span style="color:#facc15;font-weight:900;">${gTrashMax ? '100% (МАКС)' : `${gTrashNextPct}%`}</span>
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${gTrashMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <span>${formatLarpValue(gTrashCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-gold-trash-btn" class="alm-hero-upg-btn gold" ${canBuyGTrash ? '' : 'disabled'} onclick="window.buyAuraLarpGoldTrash()">
                            ${gTrashMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>

                    <!-- 4. Смарагдове сміття (x1000) -->
                    <div class="alm-hero-upg-card emerald-theme ${isRoom60Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🗑️💎</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Смарагдове сміття (x1000)
                                <span class="alm-lvl-pill">Рів. ${eTrashLvl}/${EMERALD_TRASH_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Шанс появи: <b>${eTrashPct}%</b> → <span style="color:#4ade80;font-weight:900;">${eTrashMax ? '100% (МАКС)' : `${eTrashNextPct}%`}</span>
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${eTrashMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <span>${formatLarpValue(eTrashCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-emerald-trash-btn" class="alm-hero-upg-btn" ${canBuyETrash ? '' : 'disabled'} onclick="window.buyAuraLarpEmeraldTrash()">
                            ${eTrashMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 70 сходинки (Об'єднання овочів та фруктів — Вітаміни, БЕЗ кнопки "Звільнити місце")
        if (activeRoomStep === 70) {
            const statusBanner = renderRoomStatusBanner(s, 70, "Щоб об'єднувати овочі та фрукти,");

            const vitMult = getVitaminMultiplier();
            const nextVitMult = getNextVitaminMultiplier();
            const vitMultCost = getVitaminMultUpgradeCost();
            const canBuyVitMult = isCharacterAtRoom70 && s.vitamins >= vitMultCost;

            const lv2Pct = getMergeLv2ChancePct();
            const nextLv2Pct = getNextMergeLv2ChancePct();
            const lv2Cost = getMergeLv2UpgradeCost();
            const isLv2Max = (s.mergeLv2ChanceLvl || 0) >= MERGE_LV2_MAX_LVL;
            const canBuyLv2 = !isLv2Max && isCharacterAtRoom70 && s.vitamins >= lv2Cost;

            const mergeLarpMult = getMergeLarpMultiplier();
            const nextMergeLarpMult = getNextMergeLarpMultiplier();
            const mergeLarpCost = getMergeLarpUpgradeCost();
            const canBuyMergeLarp = isCharacterAtRoom70 && s.vitamins >= mergeLarpCost;

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
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-room-split-grid ${isRoom70Unlocked ? '' : 'dimmed'}">
                    <!-- Ліва колонка: Зона об'єднання овочів і фруктів -->
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span style="color:#86efac;font-weight:900;">🥗 ОБ'ЄДНАННЯ ПЛОДІВ</span>
                            <span id="alm-merge-count-badge" class="alm-zone-counter" style="color:#86efac;background:rgba(34,197,94,0.16);">${activeMergeItems.length} / ${MAX_MERGE_ITEMS}</span>
                        </div>

                        <div id="alm-merge-zone" class="alm-merge-zone ${isCharacterAtRoom70 ? '' : 'disabled-zone'}">
                            ${mergeItemsHtml}
                            <div class="alm-snow-hint">Перетягніть 2 однакові овочі чи фрукти один на одного!</div>
                        </div>

                        <div class="alm-zone-bottom-pill">
                            <span>💊 Вітаміни: <b id="alm-vitamin-balance" style="color:#4ade80;">${formatVitaminValue(s.vitamins)}</b></span>
                            <span style="color:#94a3b8;">Всього: <b id="alm-vitamin-total" style="color:#e2e8f0;">${formatVitaminValue(s.totalVitamins)}</b></span>
                        </div>
                    </div>

                    <!-- Права колонка: Прокачки за вітаміни та Топ вітамінів -->
                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">⚡ ПРОКАЧКИ ЗА ВІТАМІНИ</div>

                            <div class="alm-compact-upg-list">
                                <!-- 1. Множник вітамінів -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">💊 Множник вітамінів <span class="alm-lvl-pill">Рів. ${s.vitaminMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Отримання: <b>x${formatMultValue(vitMult)}</b> → <span style="color:#4ade80;font-weight:800;">x${formatMultValue(nextVitMult)}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatVitaminValue(vitMultCost)} 💊</b></div>
                                    </div>
                                    <button id="alm-vit-mult-btn" class="alm-compact-upg-btn emerald" ${canBuyVitMult ? '' : 'disabled'} onclick="window.buyAuraLarpVitaminMult()">
                                        Купити
                                    </button>
                                </div>

                                <!-- 2. Шанс спавну овоча 2 рівня -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🍅 Шанс 2-го рівня <span class="alm-lvl-pill">Рів. ${s.mergeLv2ChanceLvl || 0}/${MERGE_LV2_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">
                                            Поява 🍅: <b>${lv2Pct}%</b> → <span style="color:#4ade80;font-weight:800;">${isLv2Max ? '100% (МАКС)' : `${nextLv2Pct}%`}</span>
                                        </div>
                                        <div class="alm-compact-upg-cost">
                                            ${isLv2Max ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <b>${formatVitaminValue(lv2Cost)} 💊</b>`}
                                        </div>
                                    </div>
                                    <button id="alm-merge-lv2-btn" class="alm-compact-upg-btn emerald" ${canBuyLv2 ? '' : 'disabled'} onclick="window.buyAuraLarpMergeLv2()">
                                        ${isLv2Max ? 'Макс' : 'Купити'}
                                    </button>
                                </div>

                                <!-- 3. Множник Ларпів -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🔮 Множник Ларпів <span class="alm-lvl-pill">Рів. ${s.mergeLarpMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Множник: <b>x${formatMultValue(mergeLarpMult)}</b> → <span style="color:#4ade80;font-weight:800;">x${formatMultValue(nextMergeLarpMult)}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatVitaminValue(mergeLarpCost)} 💊</b></div>
                                    </div>
                                    <button id="alm-merge-larp-btn" class="alm-compact-upg-btn emerald" ${canBuyMergeLarp ? '' : 'disabled'} onclick="window.buyAuraLarpMergeLarp()">
                                        Купити
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 ТОП ЗІБРАНИХ ВІТАМІНІВ</div>
                            <div id="alm-vitamin-lb-list" class="alm-snow-lb-list"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 80 сходинки (Сніжна буря + кнопка "Піти у 20 кімнату" під час активної бурі)
        if (activeRoomStep === 80) {
            const statusBanner = renderRoomStatusBanner(s, 80, 'Щоб запустити бурю чи купувати прокачки,');

            const now = getCurrentNowMs();
            const stormActive = Boolean(s.stormActiveEndMs && now < s.stormActiveEndMs);
            const stormOnCd = Boolean(s.stormCooldownEndMs && now < s.stormCooldownEndMs);

            const curDurMin = getStormDurationMinutes();
            const nextDurMin = getNextStormDurationMinutes();
            const durCost = getStormDurationUpgradeCost();
            const canBuyDur = isCharacterAtRoom80 && s.larp >= durCost;

            const curCdHr = getStormCooldownHours();
            const nextCdHr = getNextStormCooldownHours();
            const cdCost = getStormCooldownUpgradeCost();
            const isCdMax = (s.stormCooldownLvl || 0) >= STORM_COOLDOWN_MAX_LVL;
            const canBuyCd = !isCdMax && isCharacterAtRoom80 && s.larp >= cdCost;

            const curStormSpd = getStormSnowSpawnInterval();
            const nextStormSpd = getNextStormSnowSpawnInterval();
            const stormSpdCost = getStormSpeedUpgradeCost();
            const isSpdMax = (s.stormSpeedLvl || 0) >= STORM_SPAWN_MAX_LVL;
            const canBuySpd = !isSpdMax && isCharacterAtRoom80 && s.larp >= stormSpdCost;

            const canActivateStorm = isCharacterAtRoom80 && !stormActive && !stormOnCd;

            let stormStatusLine = `<span style="color:#4ade80;font-weight:800;">✅ Сніжна буря готова до запуску!</span>`;
            let stormBtnText = `🌨️ Викликати сніжну бурю (${curDurMin} хв)`;
            if (stormActive) {
                const leftSec = Math.max(0, (s.stormActiveEndMs - now) / 1000);
                stormStatusLine = `<span style="color:#38bdf8;font-weight:900;">🌨️ Сніжна буря вирує! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
                stormBtnText = `🌨️ Буря активна (${formatTimerMmSs(leftSec)})`;
            } else if (stormOnCd) {
                const cdLeftSec = Math.max(0, (s.stormCooldownEndMs - now) / 1000);
                stormStatusLine = `<span style="color:#f59e0b;font-weight:800;">⏳ Перезарядка бурі: ${formatTimerMmSs(cdLeftSec)}</span>`;
                stormBtnText = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
            }

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">🌨️ СНІЖНА БУРЯ (80 СХОДИНКА)</div>

                    <!-- Блок запуску Сніжної бурі -->
                    <div class="alm-storm-hero-box ${isRoom80Unlocked ? '' : 'dimmed'}">
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
                        ${stormActive ? `
                            <button class="alm-storm-launch-btn"
                                    style="margin-top:8px;background:linear-gradient(180deg, #22c55e, #16a34a);color:#052e16;"
                                    onclick="window.goToRoom20FromStorm()">
                                ❄️ Піти у 20 кімнату
                            </button>
                        ` : ''}
                    </div>

                    <!-- 1. Тривалість бурі (+0.1 хв) -->
                    <div class="alm-hero-upg-card snow-theme ${isRoom80Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⏳</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Тривалість бурі
                                <span class="alm-lvl-pill">Рів. ${s.stormDurationLvl || 0}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Тривалість: <b>${curDurMin} хв</b> → <span style="color:#38bdf8;font-weight:900;">${nextDurMin} хв</span> (+0.1 хв)
                            </div>
                            <div class="alm-hero-upg-cost">
                                Ціна: <span>${formatLarpValue(durCost)} ларп</span>
                            </div>
                        </div>
                        <button id="alm-storm-dur-btn" class="alm-hero-upg-btn snow" ${canBuyDur ? '' : 'disabled'} onclick="window.buyAuraLarpStormDuration()">
                            Купити
                        </button>
                    </div>

                    <!-- 2. Перезарядка бурі (-0.1 год) -->
                    <div class="alm-hero-upg-card purple-theme ${isRoom80Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🔄</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Перезарядка бурі
                                <span class="alm-lvl-pill">Рів. ${s.stormCooldownLvl || 0}/${STORM_COOLDOWN_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Кулдаун: <b>${curCdHr} год</b> → <span style="color:#c084fc;font-weight:900;">${isCdMax ? '0.5 год (МАКС)' : `${nextCdHr} год`}</span> (-0.1 год)
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${isCdMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <span>${formatLarpValue(cdCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-storm-cd-btn" class="alm-hero-upg-btn purple" ${canBuyCd ? '' : 'disabled'} onclick="window.buyAuraLarpStormCooldown()">
                            ${isCdMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>

                    <!-- 3. Швидкість появи сніжинок під час бурі (-0.005 сек) -->
                    <div class="alm-hero-upg-card snow-theme ${isRoom80Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">❄️⚡</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Швидкість бурі
                                <span class="alm-lvl-pill">Рів. ${s.stormSpeedLvl || 0}/${STORM_SPAWN_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Поява сніжинок: <b>${curStormSpd}с</b> → <span style="color:#38bdf8;font-weight:900;">${isSpdMax ? '0.03с (МАКС)' : `${nextStormSpd}с`}</span>
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${isSpdMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <span>${formatLarpValue(stormSpdCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-storm-spd-btn" class="alm-hero-upg-btn snow" ${canBuySpd ? '' : 'disabled'} onclick="window.buyAuraLarpStormSpeed()">
                            ${isSpdMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 90 сходинки (Прокачки мобів: шкода +1 та швидкість відродження -1%)
        if (activeRoomStep === 90) {
            const statusBanner = renderRoomStatusBanner(s, 90, 'Щоб купувати прокачки в цій кімнаті,');

            const curDmg = getChickenClickDamage();
            const nextDmg = curDmg + 1;
            const dmgCost = getMobDamageUpgradeCost();
            const isDmgMax = (s.mobDamageLvl || 0) >= MOB_DMG_MAX_LVL;
            const canBuyDmg = !isDmgMax && isCharacterAtRoom90 && s.larp >= dmgCost;

            const curSpawnReduction = Math.min(MOB_SPAWN_MAX_LVL, s.mobRespawnLvl || 0);
            const nextSpawnReduction = Math.min(MOB_SPAWN_MAX_LVL, curSpawnReduction + 1);
            const curRespawnSec = getChickenRespawnDurationSec();
            const nextRespawnSec = Math.max(1, Math.round(CHICKEN_BASE_RESPAWN_SEC * (1 - nextSpawnReduction / 100)));
            const spawnCost = getMobRespawnUpgradeCost();
            const isSpawnMax = (s.mobRespawnLvl || 0) >= MOB_SPAWN_MAX_LVL;
            const canBuySpawn = !isSpawnMax && isCharacterAtRoom90 && s.larp >= spawnCost;

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">⚔️ ПРОКАЧКИ МОБІВ (90 СХОДИНКА)</div>

                    <!-- 1. Шкода по мобу (+1 за рівень, до +90) -->
                    <div class="alm-hero-upg-card crimson-theme ${isRoom90Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🗡️</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Шкода по мобах
                                <span class="alm-lvl-pill">Рів. ${s.mobDamageLvl || 0}/${MOB_DMG_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Шкода (50 сх.): <b>${curDmg} HP</b> → <span style="color:#fb7185;font-weight:900;">${isDmgMax ? '100 HP (МАКС)' : `${nextDmg} HP`}</span> (+1 HP)
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${isDmgMax ? '<span style="color:#4ade80;">МАКСИМУМ (+90 HP)</span>' : `Ціна: <span>${formatLarpValue(dmgCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-mob-dmg-btn" class="alm-hero-upg-btn crimson" ${canBuyDmg ? '' : 'disabled'} onclick="window.buyAuraLarpMobDamage()">
                            ${isDmgMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>

                    <!-- 2. Швидкість появи мобів (-1% за рівень, до -60%) -->
                    <div class="alm-hero-upg-card gold-theme ${isRoom90Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⏱️</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Швидкість появи мобів
                                <span class="alm-lvl-pill">Рів. ${s.mobRespawnLvl || 0}/${MOB_SPAWN_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Відродження: <b>${curRespawnSec}с (-${curSpawnReduction}%)</b> → <span style="color:#facc15;font-weight:900;">${isSpawnMax ? `${curRespawnSec}с (-60% МАКС)` : `${nextRespawnSec}с (-${nextSpawnReduction}%)`}</span>
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${isSpawnMax ? '<span style="color:#4ade80;">МАКСИМУМ (-60%)</span>' : `Ціна: <span>${formatLarpValue(spawnCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-mob-respawn-btn" class="alm-hero-upg-btn gold" ${canBuySpawn ? '' : 'disabled'} onclick="window.buyAuraLarpMobRespawn()">
                            ${isSpawnMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 110 сходинки (Прибиральник сміття для 30 кімнати)
        if (activeRoomStep === 110) {
            const statusBanner = renderRoomStatusBanner(s, 110, 'Щоб найняти прибиральника чи купити прокачку,');

            const now = getCurrentNowMs();
            const cleanerActive = Boolean(s.cleanerActiveEndMs && now < s.cleanerActiveEndMs);
            const cleanerOnCd = Boolean(s.cleanerCooldownEndMs && now < s.cleanerCooldownEndMs);

            const curDurMin = getCleanerDurationMinutes();
            const nextDurMin = getNextCleanerDurationMinutes();
            const durCost = getCleanerDurationUpgradeCost();
            const canBuyDur = isCharacterAtRoom110 && s.larp >= durCost;
            const canHireCleaner = isCharacterAtRoom110 && !cleanerActive && !cleanerOnCd;

            let cleanerStatusLine = `<span style="color:#4ade80;font-weight:800;">✅ Прибиральник готовий до роботи!</span>`;
            let cleanerBtnText = `🧹 Найняти прибиральника (${curDurMin} хв)`;
            if (cleanerActive) {
                const leftSec = Math.max(0, (s.cleanerActiveEndMs - now) / 1000);
                cleanerStatusLine = `<span style="color:#4ade80;font-weight:900;">🧹 Прибиральник працює у 30 кімнаті! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
                cleanerBtnText = `🧹 Працює (${formatTimerMmSs(leftSec)})`;
            } else if (cleanerOnCd) {
                const cdLeftSec = Math.max(0, (s.cleanerCooldownEndMs - now) / 1000);
                cleanerStatusLine = `<span style="color:#f59e0b;font-weight:800;">⏳ Відпочинок прибиральника: ${formatTimerMmSs(cdLeftSec)}</span>`;
                cleanerBtnText = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
            }

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">🧹 ПРИБИРАЛЬНИК (110 СХОДИНКА)</div>

                    <div class="alm-storm-hero-box ${isRoom110Unlocked ? '' : 'dimmed'}" style="border-color:rgba(250,204,21,0.45);background:linear-gradient(180deg, rgba(250,204,21,0.14), rgba(15,23,42,0.92));">
                        <div style="font-size:0.84rem;color:#cbd5e1;margin-bottom:8px;">
                            Автоматично прибирає усе сміття з <b style="color:#fde047;">30-ї кімнати</b> протягом <b>${curDurMin} хв</b>, навіть якщо ви перебуваєте в іншій зоні! (Доступно раз на <b>8 год</b>)
                        </div>
                        <div id="alm-cleaner-status-text" style="font-size:0.84rem;margin-bottom:10px;">
                            ${cleanerStatusLine}
                        </div>
                        <button id="alm-cleaner-activate-btn" class="alm-storm-launch-btn"
                                style="background:linear-gradient(180deg, #facc15, #eab308);color:#1e293b;"
                                ${canHireCleaner ? '' : 'disabled'}
                                onclick="window.activateAuraLarpCleaner()">
                            ${cleanerBtnText}
                        </button>
                    </div>

                    <!-- Прокачка тривалості прибиральника (+0.1 хв за 300млн ларпів, x1.25) -->
                    <div class="alm-hero-upg-card gold-theme ${isRoom110Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⏱️</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Тривалість прибирання
                                <span class="alm-lvl-pill">Рів. ${s.cleanerDurationLvl || 0}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Час роботи: <b>${curDurMin} хв</b> → <span style="color:#facc15;font-weight:900;">${nextDurMin} хв</span> (+0.1 хв)
                            </div>
                            <div class="alm-hero-upg-cost">
                                Ціна: <span>${formatLarpValue(durCost)} ларп</span>
                            </div>
                        </div>
                        <button id="alm-cleaner-dur-btn" class="alm-hero-upg-btn gold" ${canBuyDur ? '' : 'disabled'} onclick="window.buyAuraLarpCleanerDuration()">
                            Купити
                        </button>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 120 сходинки (Буріння вниз — Камінь та 4 знаряддя)
        if (activeRoomStep === 120) {
            const statusBanner = renderRoomStatusBanner(s, 120, 'Щоб бурити вниз та купувати прокачки,');

            const now = getCurrentNowMs();
            const stoneMult = getStoneMultiplier();
            const nextStoneMult = getNextStoneMultiplier();
            const stoneMultCost = getStoneMultUpgradeCost();
            const canBuyStoneMult = isCharacterAtRoom120 && s.stone >= stoneMultCost;

            const stoneLarpMult = getStoneLarpMultiplier();
            const nextStoneLarpMult = getNextStoneLarpMultiplier();
            const stoneLarpCost = getStoneLarpUpgradeCost();
            const canBuyStoneLarp = isCharacterAtRoom120 && s.stone >= stoneLarpCost;

            // Знаряддя 1
            const d1CdSec = getDrill1CooldownSec();
            const d1NextCdSec = getNextDrill1CooldownSec();
            const d1CdCost = getDrill1CdUpgradeCost();
            const isD1CdMax = (s.drill1CdLvl || 0) >= DRILL1_CD_MAX_LVL;
            const canBuyD1Cd = !isD1CdMax && isCharacterAtRoom120 && s.larp >= d1CdCost;
            const d1OnCd = Boolean(s.drill1ReadyAtMs && now < s.drill1ReadyAtMs);
            const d1LeftSec = d1OnCd ? Math.max(0.1, (s.drill1ReadyAtMs - now) / 1000) : 0;
            const d1Yield = DRILL1_BASE_STONE * stoneMult;

            // Знаряддя 2
            const d2Unlocked = Boolean(s.drill2Unlocked);
            const d2CdMin = getDrill2CooldownMin();
            const d2NextCdMin = getNextDrill2CooldownMin();
            const d2CdCost = getDrill2CdUpgradeCost();
            const isD2CdMax = (s.drill2CdLvl || 0) >= DRILL2_CD_MAX_LVL;
            const canBuyD2Cd = d2Unlocked && !isD2CdMax && isCharacterAtRoom120 && s.larp >= d2CdCost;
            const d2OnCd = Boolean(d2Unlocked && s.drill2ReadyAtMs && now < s.drill2ReadyAtMs);
            const d2LeftSec = d2OnCd ? Math.max(0, (s.drill2ReadyAtMs - now) / 1000) : 0;
            const d2Yield = DRILL2_BASE_STONE * stoneMult;

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-room-split-grid ${isRoom120Unlocked ? '' : 'dimmed'}">
                    <!-- Ліва колонка: Шахта буріння вниз і 4 знаряддя -->
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span style="color:#d6d3d1;font-weight:900;">⛏️ БУРІННЯ ВНИЗ</span>
                            <span class="alm-zone-counter" style="color:#e7e5e4;background:rgba(168,162,158,0.2);">⬇️ Глибина: <b id="alm-drill-depth-val">${formatWholeNumber(s.drillDepthMeters || 0)} м</b></span>
                        </div>

                        <div id="alm-drill-zone" class="alm-drill-zone ${isCharacterAtRoom120 ? '' : 'disabled-zone'}">
                            <div class="alm-drill-tools-grid">
                                <!-- Знаряддя 1 -->
                                <div class="alm-drill-tool-card">
                                    <div class="alm-drill-tool-top">
                                        <span class="alm-drill-tool-icon">⛏️</span>
                                        <div>
                                            <div class="alm-drill-tool-title">1. Ручний бур</div>
                                            <div class="alm-drill-tool-sub">+${formatStoneValue(d1Yield)} 🪨 • КД: ${d1CdSec}с</div>
                                        </div>
                                    </div>
                                    <button id="alm-drill-tool-1-btn" class="alm-drill-action-btn"
                                            ${(!isCharacterAtRoom120 || d1OnCd) ? 'disabled' : ''}
                                            onclick="window.useAuraLarpDrillTool(1)">
                                        <span id="alm-drill-tool-1-status">${d1OnCd ? `⏳ ${d1LeftSec.toFixed(1)} сек` : (isCharacterAtRoom120 ? '⛏️ БУРИТИ' : '🚶 Підійдіть на 120 сх.')}</span>
                                    </button>
                                </div>

                                <!-- Знаряддя 2 -->
                                <div class="alm-drill-tool-card ${d2Unlocked ? '' : 'locked-tool'}">
                                    <div class="alm-drill-tool-top">
                                        <span class="alm-drill-tool-icon">🛠️</span>
                                        <div>
                                            <div class="alm-drill-tool-title">2. Перфоратор</div>
                                            <div class="alm-drill-tool-sub">+${formatStoneValue(d2Yield)} 🪨 • КД: ${d2CdMin} хв</div>
                                        </div>
                                    </div>
                                    ${d2Unlocked ? `
                                        <button id="alm-drill-tool-2-btn" class="alm-drill-action-btn"
                                                ${(!isCharacterAtRoom120 || d2OnCd) ? 'disabled' : ''}
                                                onclick="window.useAuraLarpDrillTool(2)">
                                            <span id="alm-drill-tool-2-status">${d2OnCd ? `⏳ ${formatTimerMmSs(d2LeftSec)}` : (isCharacterAtRoom120 ? '🛠️ БУРИТИ' : '🚶 Підійдіть на 120 сх.')}</span>
                                        </button>
                                    ` : `
                                        <button id="alm-drill-tool-2-btn" class="alm-drill-action-btn unlock-btn"
                                                ${(isCharacterAtRoom120 && s.stone >= DRILL2_UNLOCK_STONE) ? '' : 'disabled'}
                                                onclick="window.unlockAuraLarpDrill2()">
                                            <span id="alm-drill-tool-2-status">🪨 Купити: ${formatStoneValue(DRILL2_UNLOCK_STONE)}</span>
                                        </button>
                                    `}
                                </div>

                                <!-- Знаряддя 3 -->
                                <div class="alm-drill-tool-card locked-tool">
                                    <div class="alm-drill-tool-top">
                                        <span class="alm-drill-tool-icon">⚙️</span>
                                        <div>
                                            <div class="alm-drill-tool-title">3. Бурова установка</div>
                                            <div class="alm-drill-tool-sub">КД: ${DRILL3_BASE_CD_MIN} хв</div>
                                        </div>
                                    </div>
                                    <div class="alm-drill-locked-tag">🔒 Знайдіть на вищих кімнатах</div>
                                </div>

                                <!-- Знаряддя 4 -->
                                <div class="alm-drill-tool-card locked-tool">
                                    <div class="alm-drill-tool-top">
                                        <span class="alm-drill-tool-icon">🚜</span>
                                        <div>
                                            <div class="alm-drill-tool-title">4. Лазерний бур</div>
                                            <div class="alm-drill-tool-sub">КД: ${DRILL4_BASE_CD_HR} год</div>
                                        </div>
                                    </div>
                                    <div class="alm-drill-locked-tag">🔒 Знайдіть на вищих кімнатах</div>
                                </div>
                            </div>
                        </div>

                        <div class="alm-zone-bottom-pill">
                            <span>🪨 Камінь: <b id="alm-stone-balance" style="color:#d6d3d1;">${formatStoneValue(s.stone)}</b></span>
                            <span style="color:#94a3b8;">Всього: <b id="alm-stone-total" style="color:#e2e8f0;">${formatStoneValue(s.totalStone)}</b></span>
                        </div>
                    </div>

                    <!-- Права колонка: Прокачки та Топ зібраного каменю -->
                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">⚡ ПРОКАЧКИ ШАХТИ</div>

                            <div class="alm-compact-upg-list">
                                <!-- 1. Множник каменю (x2 за 50 каменю, x1.15) -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🪨 Множник каменю <span class="alm-lvl-pill">Рів. ${s.stoneMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Видобуток: <b>x${formatStoneValue(stoneMult)}</b> → <span style="color:#d6d3d1;font-weight:800;">x${formatStoneValue(nextStoneMult)}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatStoneValue(stoneMultCost)} 🪨</b></div>
                                    </div>
                                    <button id="alm-stone-mult-btn" class="alm-compact-upg-btn stone" ${canBuyStoneMult ? '' : 'disabled'} onclick="window.buyAuraLarpStoneMult()">
                                        Купити
                                    </button>
                                </div>

                                <!-- 2. Множник ларпів (x1.2 за 25 каменю, x1.22) -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🔮 Множник Ларпів <span class="alm-lvl-pill">Рів. ${s.stoneLarpMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Множник: <b>x${formatMultValue(stoneLarpMult)}</b> → <span style="color:#4ade80;font-weight:800;">x${formatMultValue(nextStoneLarpMult)}</span></div>
                                        <div class="alm-compact-upg-cost">Ціна: <b>${formatStoneValue(stoneLarpCost)} 🪨</b></div>
                                    </div>
                                    <button id="alm-stone-larp-btn" class="alm-compact-upg-btn emerald" ${canBuyStoneLarp ? '' : 'disabled'} onclick="window.buyAuraLarpStoneLarp()">
                                        Купити
                                    </button>
                                </div>

                                <!-- 3. Час ресету 1-го знаряддя (-0.1 сек за 1b ларп, x2, макс 20) -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">⛏️ Ресет 1-го бура <span class="alm-lvl-pill">Рів. ${s.drill1CdLvl || 0}/${DRILL1_CD_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">
                                            Кулдаун: <b>${d1CdSec}с</b> → <span style="color:#38bdf8;font-weight:800;">${isD1CdMax ? '2.0с (МАКС)' : `${d1NextCdSec}с`}</span>
                                        </div>
                                        <div class="alm-compact-upg-cost">
                                            ${isD1CdMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <b>${formatLarpValue(d1CdCost)} ларп</b>`}
                                        </div>
                                    </div>
                                    <button id="alm-drill1-cd-btn" class="alm-compact-upg-btn" ${canBuyD1Cd ? '' : 'disabled'} onclick="window.buyAuraLarpDrill1Cd()">
                                        ${isD1CdMax ? 'Макс' : 'Купити'}
                                    </button>
                                </div>

                                <!-- 4. Час ресету 2-го знаряддя (-0.2 хв за 100b ларп, x2, макс 20) -->
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">🛠️ Ресет 2-го бура <span class="alm-lvl-pill">Рів. ${s.drill2CdLvl || 0}/${DRILL2_CD_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">
                                            Кулдаун: <b>${d2CdMin} хв</b> → <span style="color:#38bdf8;font-weight:800;">${isD2CdMax ? '4.0 хв (МАКС)' : `${d2NextCdMin} хв`}</span>
                                        </div>
                                        <div class="alm-compact-upg-cost">
                                            ${!d2Unlocked ? '<span style="color:#f59e0b;">Спочатку купіть 2-й бур</span>' : (isD2CdMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <b>${formatLarpValue(d2CdCost)} ларп</b>`)}
                                        </div>
                                    </div>
                                    <button id="alm-drill2-cd-btn" class="alm-compact-upg-btn" ${canBuyD2Cd ? '' : 'disabled'} onclick="window.buyAuraLarpDrill2Cd()">
                                        ${isD2CdMax ? 'Макс' : 'Купити'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 ТОП ЗІБРАНОГО КАМЕНЮ</div>
                            <div id="alm-stone-lb-list" class="alm-snow-lb-list"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Вміст кімнати 130 сходинки (Телепортер)
        if (activeRoomStep === 130) {
            const statusBanner = renderRoomStatusBanner(s, 130, 'Щоб активувати телепортер чи купити прокачки,');

            const now = getCurrentNowMs();
            const tpActive = Boolean(s.teleportActiveEndMs && now < s.teleportActiveEndMs);
            const tpOnCd = Boolean(s.teleportCooldownEndMs && now < s.teleportCooldownEndMs);

            const curDurMin = getTeleportDurationMinutes();
            const nextDurMin = getNextTeleportDurationMinutes();
            const durCost = getTeleportDurationUpgradeCost();
            const canBuyDur = isCharacterAtRoom130 && s.larp >= durCost;

            const curCdHr = getTeleportCooldownHours();
            const nextCdHr = getNextTeleportCooldownHours();
            const cdCost = getTeleportCooldownUpgradeCost();
            const isCdMax = (s.teleportCooldownLvl || 0) >= TELEPORT_COOLDOWN_MAX_LVL;
            const canBuyCd = !isCdMax && isCharacterAtRoom130 && s.larp >= cdCost;

            const curTravelSec = getTeleportTravelSeconds();
            const nextTravelSec = getNextTeleportTravelSeconds();
            const travelCost = getTeleportTravelUpgradeCost();
            const isTravelMax = (s.teleportTravelLvl || 0) >= TELEPORT_TRAVEL_MAX_LVL;
            const canBuyTravel = !isTravelMax && isCharacterAtRoom130 && s.larp >= travelCost;

            const canActivateTp = isCharacterAtRoom130 && !tpActive && !tpOnCd;

            let tpStatusLine = `<span style="color:#4ade80;font-weight:800;">✅ Телепортер готовий до активації!</span>`;
            let tpBtnText = `🌀 Активувати телепортер (${curDurMin} хв)`;
            if (tpActive) {
                const leftSec = Math.max(0, (s.teleportActiveEndMs - now) / 1000);
                tpStatusLine = `<span style="color:#c084fc;font-weight:900;">🌀 Телепортер активний! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
                tpBtnText = `🌀 Активний (${formatTimerMmSs(leftSec)})`;
            } else if (tpOnCd) {
                const cdLeftSec = Math.max(0, (s.teleportCooldownEndMs - now) / 1000);
                tpStatusLine = `<span style="color:#f59e0b;font-weight:800;">⏳ Перезарядка телепортера: ${formatTimerMmSs(cdLeftSec)}</span>`;
                tpBtnText = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
            }

            let quickTeleportGridHtml = '';
            if (tpActive) {
                const unlockedRooms = ROOM_STEPS.filter(r => s.maxUnlockedStep >= r && r !== 130);
                quickTeleportGridHtml = `
                    <div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(168,85,247,0.3);">
                        <div style="font-size:0.78rem;color:#e9d5ff;font-weight:800;margin-bottom:6px;">
                            ⚡ Швидка телепортація на будь-яку доступну кімнату (за ${curTravelSec} сек):
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;">
                            ${unlockedRooms.map(r => `
                                <button class="alm-mini-go-btn" style="background:rgba(168,85,247,0.22);border-color:#a855f7;color:#f3e8ff;"
                                        onclick="window.teleportAuraLarpToStep(${r})">
                                    ⚡ ${r} кімн.
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            return `
                ${roomSelectorHtml}
                ${statusBanner}

                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">🌀 ТЕЛЕПОРТЕР (130 СХОДИНКА)</div>

                    <div class="alm-storm-hero-box ${isRoom130Unlocked ? '' : 'dimmed'}" style="border-color:rgba(168,85,247,0.5);background:linear-gradient(180deg, rgba(168,85,247,0.16), rgba(15,23,42,0.92));">
                        <div style="font-size:0.84rem;color:#cbd5e1;margin-bottom:8px;">
                            Після активації протягом <b>${curDurMin} хв</b> ви можете телепортуватись на будь-яку відкриту кімнату всього за <b style="color:#c084fc;">${curTravelSec} сек</b>! (Перезарядка: <b>${curCdHr} год</b>)
                        </div>
                        <div id="alm-teleport-status-text" style="font-size:0.84rem;margin-bottom:10px;">
                            ${tpStatusLine}
                        </div>
                        <button id="alm-teleport-activate-btn" class="alm-storm-launch-btn"
                                style="background:linear-gradient(180deg, #a855f7, #7e22ce);color:#fff;"
                                ${canActivateTp ? '' : 'disabled'}
                                onclick="window.activateAuraLarpTeleporter()">
                            ${tpBtnText}
                        </button>
                        ${quickTeleportGridHtml}
                    </div>

                    <!-- 1. Тривалість дії телепортера (+0.5 хв за 2б ларп, x1.3) -->
                    <div class="alm-hero-upg-card purple-theme ${isRoom130Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⏳</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Тривалість дії
                                <span class="alm-lvl-pill">Рів. ${s.teleportDurationLvl || 0}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Дія: <b>${curDurMin} хв</b> → <span style="color:#c084fc;font-weight:900;">${nextDurMin} хв</span> (+0.5 хв)
                            </div>
                            <div class="alm-hero-upg-cost">
                                Ціна: <span>${formatLarpValue(durCost)} ларп</span>
                            </div>
                        </div>
                        <button id="alm-tp-dur-btn" class="alm-hero-upg-btn purple" ${canBuyDur ? '' : 'disabled'} onclick="window.buyAuraLarpTeleportDuration()">
                            Купити
                        </button>
                    </div>

                    <!-- 2. Кулдаун телепортера (-0.1 год за 10б ларп, x1.25, макс 100) -->
                    <div class="alm-hero-upg-card snow-theme ${isRoom130Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🔄</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Кулдаун телепортера
                                <span class="alm-lvl-pill">Рів. ${s.teleportCooldownLvl || 0}/${TELEPORT_COOLDOWN_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Перезарядка: <b>${curCdHr} год</b> → <span style="color:#38bdf8;font-weight:900;">${isCdMax ? '6.0 год (МАКС)' : `${nextCdHr} год`}</span> (-0.1 год)
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${isCdMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <span>${formatLarpValue(cdCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-tp-cd-btn" class="alm-hero-upg-btn snow" ${canBuyCd ? '' : 'disabled'} onclick="window.buyAuraLarpTeleportCooldown()">
                            ${isCdMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>

                    <!-- 3. Час телепортації (-1 сек за 80б ларп, x2.7, макс 5) -->
                    <div class="alm-hero-upg-card gold-theme ${isRoom130Unlocked ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⚡</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">
                                Час телепортації
                                <span class="alm-lvl-pill">Рів. ${s.teleportTravelLvl || 0}/${TELEPORT_TRAVEL_MAX_LVL}</span>
                            </div>
                            <div class="alm-hero-upg-effect">
                                Швидкість: <b>${curTravelSec} сек</b> → <span style="color:#facc15;font-weight:900;">${isTravelMax ? '2 сек (МАКС)' : `${nextTravelSec} сек`}</span> (-1 сек)
                            </div>
                            <div class="alm-hero-upg-cost">
                                ${isTravelMax ? '<span style="color:#4ade80;">МАКСИМУМ</span>' : `Ціна: <span>${formatLarpValue(travelCost)} ларп</span>`}
                            </div>
                        </div>
                        <button id="alm-tp-travel-btn" class="alm-hero-upg-btn gold" ${canBuyTravel ? '' : 'disabled'} onclick="window.buyAuraLarpTeleportTravel()">
                            ${isTravelMax ? 'Макс' : 'Купити'}
                        </button>
                    </div>
                </div>
            `;
        }

        return '';
    }

    function renderMultipliersTabHtml(s) {
        const stairMult = getStairMultiplier();
        const roomMult = getRoomLarpMultiplier();
        const snowLarpMult = getSnowLarpMultiplier();
        const trashLarpMult = getTrashLarpMultiplier();
        const featherLarpMult = getFeatherLarpMultiplier();
        const mergeLarpMult = getMergeLarpMultiplier();
        const stoneLarpMult = getStoneLarpMultiplier();
        const totalMult = getTotalLarpMultiplier();
        const totalIncome = getLarpPerSecond();

        return `
            <div class="alm-centered-room-section">
                <div class="alm-section-heading">📊 МНОЖНИКИ ЛАРПІВ</div>

                <div class="alm-mult-total-card">
                    <div style="font-size:0.8rem;color:#cbd5e1;font-weight:700;">ЗАГАЛЬНИЙ МНОЖНИК ЛАРПІВ</div>
                    <div class="alm-mult-total-value">x${formatMultValue(totalMult)}</div>
                    <div style="font-size:0.84rem;color:#4ade80;font-weight:800;">
                        Поточний дохід: ${formatMultValue(totalIncome)} ларп/сек
                    </div>
                </div>

                <div class="alm-mult-list">
                    <div class="alm-mult-item">
                        <span class="alm-mult-item-name">🪜 Сходинка (${s.currentStep}-та)</span>
                        <span class="alm-mult-item-val">x${formatMultValue(stairMult)}</span>
                    </div>
                    <div class="alm-mult-item">
                        <span class="alm-mult-item-name">🚪 Кімната 10 сходинки (Рів. ${s.roomMultLvl})</span>
                        <span class="alm-mult-item-val">x${formatMultValue(roomMult)}</span>
                    </div>
                    <div class="alm-mult-item">
                        <span class="alm-mult-item-name">❄️ Кімната 20 сходинки — Сніжинки (Рів. ${s.snowLarpMultLvl || 0})</span>
                        <span class="alm-mult-item-val">x${formatMultValue(snowLarpMult)}</span>
                    </div>
                    <div class="alm-mult-item">
                        <span class="alm-mult-item-name">🗑️ Кімната 30 сходинки — Сміття (Рів. ${s.trashLarpMultLvl || 0})</span>
                        <span class="alm-mult-item-val">x${formatMultValue(trashLarpMult)}</span>
                    </div>
                    <div class="alm-mult-item">
                        <span class="alm-mult-item-name">🪶 Кімната 50 сходинки — Пір'я (Рів. ${s.featherLarpMultLvl || 0})</span>
                        <span class="alm-mult-item-val">x${formatMultValue(featherLarpMult)}</span>
                    </div>
                    <div class="alm-mult-item">
                        <span class="alm-mult-item-name">💊 Кімната 70 сходинки — Вітаміни (Рів. ${s.mergeLarpMultLvl || 0})</span>
                        <span class="alm-mult-item-val">x${formatMultValue(mergeLarpMult)}</span>
                    </div>
                    <div class="alm-mult-item">
                        <span class="alm-mult-item-name">🪨 Кімната 120 сходинки — Камінь (Рів. ${s.stoneLarpMultLvl || 0})</span>
                        <span class="alm-mult-item-val">x${formatMultValue(stoneLarpMult)}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function renderAuraLarpMonsterUI(autoScrollToPlayer) {
        const container = document.getElementById('tab-aura-larp-monster');
        if (!container) return;

        const prevViewport = document.getElementById('alm-stairs-viewport');
        const prevScrollTop = prevViewport ? prevViewport.scrollTop : null;

        const s = initAuraLarpMonsterState();
        const totalHeight = MAX_STEP * ROW_HEIGHT + 36;
        const visStep = getVisualStepPosition();
        const isTeleporting = Boolean(s.teleportingToStep && s.teleportArrivalEndMs && getCurrentNowMs() < s.teleportArrivalEndMs);
        const isMoving = !isTeleporting && s.currentStep !== s.targetStep;

        let statusAlertsHtml = '';
        if (noInternetError && getOfflineLarpPercent() > 0) {
            statusAlertsHtml += `
                <div class="alm-offline-banner error">
                    <span>⚠️ Немає інтернету! Офлайн-фарм недоступний без підключення до мережі.</span>
                    <button class="alm-mini-go-btn" onclick="window.retryAuraLarpGlobalTime()">Перевірити</button>
                </div>
            `;
        } else if (offlineRewardReport) {
            statusAlertsHtml += `
                <div class="alm-offline-banner success">
                    <span>
                        🌙 Поки вас не було (<b>${formatDurationUk(offlineRewardReport.elapsedSec)}</b>), ви заробили
                        <b style="color:#4ade80;">+${formatLarpValue(offlineRewardReport.earnedOffline)} ларп</b>
                        (${offlineRewardReport.offlinePct}% від ${offlineRewardReport.highestStep}-ї сх.)!
                    </span>
                    <button class="alm-mini-go-btn" onclick="window.dismissAuraLarpOfflineReport()">Ок</button>
                </div>
            `;
        }

        const nextStep = s.maxUnlockedStep + 1;
        const nextObj = nextStep <= MAX_STEP ? STAIRS_CONFIG.find(item => item.step === nextStep) : null;
        const canUnlock = nextObj ? s.larp >= nextObj.cost : false;

        let mainContentHtml = '';

        if (activeLarpSubTab === 'stairs') {
            let rowsHtml = '';
            for (let stepNum = MAX_STEP; stepNum >= 1; stepNum--) {
                const cfg = STAIRS_CONFIG[stepNum - 1];
                const isUnlocked = stepNum <= s.maxUnlockedStep;
                const isNext = stepNum === s.maxUnlockedStep + 1;
                const isCurrent = stepNum === s.currentStep && s.currentStep === s.targetStep && !isTeleporting;
                const isTarget = (stepNum === s.targetStep && s.currentStep !== s.targetStep) || stepNum === s.teleportingToStep;
                const isRoomStep = ROOM_STEPS.includes(stepNum);

                let rowClass = 'alm-stair-row';
                if (isUnlocked) rowClass += ' unlocked';
                else if (isNext) rowClass += ' next-unlock';
                else rowClass += ' locked';

                if (isCurrent) rowClass += ' current-step';
                if (isTarget) rowClass += ' target-step';

                const stepBarLeft = getStepLeftCss(stepNum);
                const centerInfoLeft = `calc(${STEP_BASE_PX + STEP_BAR_PX + 10}px + ${((stepNum - 1) * STEP_INDENT_PCT_PER_LEVEL).toFixed(3)}%)`;

                rowsHtml += `
                    <div class="${rowClass}" data-step="${stepNum}" onclick="window.moveAuraLarpToStep(${stepNum})">
                        <div class="alm-step-bar" style="left:${stepBarLeft};"></div>

                        <div class="alm-step-center-info" style="left:${centerInfoLeft};">
                            <span class="alm-step-num">${stepNum}</span>
                            <span class="alm-step-mult">x${formatMultValue(cfg.mult)}</span>
                        </div>

                        <div class="alm-step-right-slot">
                            ${isRoomStep ? `
                                <button class="alm-room-chip-btn ${isUnlocked ? '' : 'locked'}"
                                        onclick="event.stopPropagation(); window.openAuraLarpRoomAtStep(${stepNum});">
                                    🚪 Кімната
                                </button>
                            ` : ''}
                            ${!isUnlocked && cfg.cost > 0 ? `
                                <span class="alm-step-cost-tag">${formatLarpValue(cfg.cost)} ларп</span>
                            ` : ''}
                        </div>
                    </div>
                `;
            }

            const charLeftCss = getStepCenterCss(visStep);
            const charBottomPx = (visStep - 1) * ROW_HEIGHT + 24;

            mainContentHtml = `
                <div class="alm-stairs-header-bar">
                    <span class="alm-stairs-caption">Сходи (від 1 до ${MAX_STEP})</span>
                    ${nextObj ? `
                        <button id="alm-unlock-btn" class="alm-unlock-step-btn" ${canUnlock ? '' : 'disabled'} onclick="window.unlockNextAuraLarpStep()">
                            🔓 Відкрити ${nextObj.step} сх. (${formatLarpValue(nextObj.cost)} ларп)
                        </button>
                    ` : `<span style="color:#4ade80;font-weight:800;font-size:0.82rem;">👑 Усі ${MAX_STEP} сходинок відкрито!</span>`}
                </div>

                <div id="alm-stairs-viewport" class="alm-stairs-viewport">
                    <div id="alm-stairs-track" class="alm-stairs-track" style="height:${totalHeight}px;">
                        ${rowsHtml}
                        <div id="alm-character" class="alm-character ${(isMoving || isTeleporting) ? 'is-moving' : ''}"
                             style="left:${charLeftCss}; bottom:${charBottomPx}px;">
                            <div id="alm-char-status" class="alm-char-status" style="display:${(isMoving || isTeleporting) ? 'block' : 'none'};">
                                ${isTeleporting ? `⚡ ${s.teleportingToStep}` : (isMoving ? `🏃 ${s.targetStep}` : '')}
                            </div>
                            <div class="alm-char-avatar">🐷</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (activeLarpSubTab === 'room') {
            mainContentHtml = renderRoomTabHtml(s);
        } else if (activeLarpSubTab === 'multipliers') {
            mainContentHtml = renderMultipliersTabHtml(s);
        } else if (activeLarpSubTab === 'leaderboard') {
            mainContentHtml = `
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">🏆 ТОП ГРАВЦІВ</div>

                    <div class="alm-lb-subtabs">
                        <button class="alm-lb-tab-btn ${activeLeaderboardType === 'highestStep' ? 'active' : ''}"
                                onclick="window.switchAuraLarpLeaderboardType('highestStep')">
                            🪜 Найвища сходинка
                        </button>
                        <button class="alm-lb-tab-btn ${activeLeaderboardType === 'larpPerSec' ? 'active' : ''}"
                                onclick="window.switchAuraLarpLeaderboardType('larpPerSec')">
                            ⚡ Ларпів/сек
                        </button>
                        <button class="alm-lb-tab-btn ${activeLeaderboardType === 'totalLarp' ? 'active' : ''}"
                                onclick="window.switchAuraLarpLeaderboardType('totalLarp')">
                            🔮 За весь час
                        </button>
                    </div>

                    <div id="alm-leaderboard-list" class="alm-leaderboard-list">
                        <div style="text-align:center;color:#94a3b8;padding:24px;">Завантаження рейтингу...</div>
                    </div>
                </div>
            `;
        }

        container.innerHTML = `
            <div class="alm-wrapper">
                <!-- Верхній мінімалістичний рядок навігації -->
                <div class="alm-topbar">
                    <button class="alm-back-btn" onclick="window.exitAuraLarpMonsterMode()">
                        ← Назад
                    </button>
                    <div class="alm-topbar-center">
                        <span class="alm-topbar-title">Аура Ларп Монстер</span>
                        <span class="alm-topbar-step-pill">Сх. <b id="alm-step-badge">${s.currentStep}</b>/${MAX_STEP}</span>
                    </div>
                    <!--
                    <button id="alm-reset-btn" class="alm-reset-btn" onclick="window.handleResetAuraLarpClick()">
                        ${resetConfirmPending ? 'Точно?' : 'Обнулити'}
                    </button>
                    -->
                </div>

                ${statusAlertsHtml}

                <!-- Блок балансу -->
                <div class="alm-balance-card">
                    <div class="alm-balance-row">
                        <span class="alm-balance-icon">🔮</span>
                        <span id="alm-larp-balance" class="alm-balance-value">${formatLarpValue(s.larp)}</span>
                        <span id="alm-larp-word" class="alm-balance-unit">ларп</span>
                    </div>
                    <div id="alm-larp-rate" class="alm-balance-rate">${formatMultValue(getLarpPerSecond())} ларп/сек</div>
                </div>

                <!-- 4 нижні вкладки -->
                <div class="alm-subtabs-nav">
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'stairs' ? 'active' : ''}"
                            onclick="window.switchAuraLarpSubTab('stairs')">
                        🪜 Сходи
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'room' ? 'active' : ''}"
                            onclick="window.switchAuraLarpSubTab('room')">
                        🚪 Кімнати
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'multipliers' ? 'active' : ''}"
                            onclick="window.switchAuraLarpSubTab('multipliers')">
                        📊 Множники
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'leaderboard' ? 'active' : ''}"
                            onclick="window.switchAuraLarpSubTab('leaderboard')">
                        🏆 Топ
                    </button>
                </div>

                <!-- Контент активної підвкладки -->
                <div class="alm-main-card">
                    ${mainContentHtml}
                </div>
            </div>
        `;

        if (activeLarpSubTab === 'stairs') {
            if (autoScrollToPlayer) {
                updateAllDynamicElements(false, true);
            } else if (prevScrollTop !== null) {
                const newViewport = document.getElementById('alm-stairs-viewport');
                if (newViewport) newViewport.scrollTop = prevScrollTop;
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
            } else if (activeRoomStep === 120) {
                renderStoneLeaderboardList();
            }
        } else if (activeLarpSubTab === 'leaderboard') {
            renderLarpLeaderboardList();
        }
    }

    // ------------------------------------------
    // ОБНУЛЕННЯ ЛОКАЦІЇ
    // ------------------------------------------
    function handleResetAuraLarpClick() {
        const btn = document.getElementById('alm-reset-btn');
        if (!resetConfirmPending) {
            resetConfirmPending = true;
            if (btn) {
                btn.textContent = 'Точно?';
                btn.classList.add('confirm');
            }
            if (resetConfirmTimer) clearTimeout(resetConfirmTimer);
            resetConfirmTimer = setTimeout(() => {
                resetConfirmPending = false;
                const b = document.getElementById('alm-reset-btn');
                if (b) {
                    b.textContent = 'Обнулити';
                    b.classList.remove('confirm');
                }
            }, 3500);
            return;
        }

        if (resetConfirmTimer) clearTimeout(resetConfirmTimer);
        resetConfirmPending = false;

        const fresh = getDefaultModuleState();
        fresh.wasActive = true;
        if (isGlobalTimeVerified) {
            fresh.lastGlobalTime = Date.now() + globalTimeOffsetMs;
        }

        activeSnowflakes = [];
        snowSpawnAccumSec = 0;
        activeTrashItems = [];
        trashSpawnAccumSec = 0;
        draggingTrashId = null;
        activeMergeItems = [];
        mergeSpawnAccumSec = 0;
        draggingMergeId = null;
        offlineRewardReport = null;
        activeRoomStep = 10;

        moduleState = fresh;
        attachStateToRoot(fresh);
        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(true);
    }

    // ------------------------------------------
    // ПЕРЕМИКАННЯ МІЖ ОСНОВНОЮ ГРОЮ ТА ЛОКАЦІЄЮ
    // ------------------------------------------
    function enterAuraLarpMonsterMode() {
        const s = initAuraLarpMonsterState();
        isAuraLarpModeActive = true;

        const gameScreen = document.getElementById('game-screen');
        if (!gameScreen) return;

        gameScreen.classList.add('alm-mode-active');

        const tabNav = gameScreen.querySelector('.tab-nav');
        if (tabNav) tabNav.style.display = 'none';

        const lanaBanner = document.getElementById('lana-buff-banner');
        if (lanaBanner) lanaBanner.style.display = 'none';

        gameScreen.querySelectorAll('.tab-content').forEach(el => {
            if (el.id === 'tab-aura-larp-monster') {
                el.style.display = 'flex';
                el.classList.add('active');
            } else {
                el.style.display = 'none';
                el.classList.remove('active');
            }
        });

        activeLarpSubTab = s.savedSubTab || 'stairs';
        activeRoomStep = ROOM_STEPS.includes(s.savedRoomStep) ? s.savedRoomStep : (ROOM_STEPS.includes(s.currentStep) ? s.currentStep : 10);

        updateTopGameHeader();
        persistAuraLarpState(false);
        renderAuraLarpMonsterUI(true);
        startVisualAnimationLoop();
        verifyGlobalTimeAndApplyOfflineProgress();
    }

    function exitAuraLarpMonsterMode() {
        isAuraLarpModeActive = false;

        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }

        const gameScreen = document.getElementById('game-screen');
        if (!gameScreen) return;

        gameScreen.classList.remove('alm-mode-active');

        const tabNav = gameScreen.querySelector('.tab-nav');
        if (tabNav) tabNav.style.display = '';

        const almTab = document.getElementById('tab-aura-larp-monster');
        if (almTab) {
            almTab.style.display = 'none';
            almTab.classList.remove('active');
        }

        gameScreen.querySelectorAll('.tab-content').forEach(el => {
            if (el.id !== 'tab-aura-larp-monster') {
                el.style.display = '';
            }
        });

        updateTopGameHeader();

        if (typeof window.switchTab === 'function') {
            window.switchTab('clicker');
        }
        persistAuraLarpState(true);
    }

    // ------------------------------------------
    // ІН'ЄКЦІЯ КНОПКИ В ОСНОВНЕ МЕНЮ ТА СТИЛІВ
    // ------------------------------------------
    function injectNavigationAndTab() {
        const gameScreen = document.getElementById('game-screen');
        if (!gameScreen) return;

        const tabNav = gameScreen.querySelector('.tab-nav');
        if (tabNav && !document.getElementById('nav-btn-aura-larp')) {
            const navBtn = document.createElement('button');
            navBtn.id = 'nav-btn-aura-larp';
            navBtn.className = 'tab-btn alm-entry-tab-btn';
            navBtn.innerHTML = '👾 Аура Ларп Монстер';
            navBtn.onclick = enterAuraLarpMonsterMode;
            tabNav.appendChild(navBtn);
        }

        if (!document.getElementById('tab-aura-larp-monster')) {
            const tabContainer = document.createElement('div');
            tabContainer.id = 'tab-aura-larp-monster';
            tabContainer.className = 'tab-content';
            gameScreen.appendChild(tabContainer);
        }
    }

    function injectStyles() {
        if (document.getElementById('aura-larp-monster-styles')) return;

        const style = document.createElement('style');
        style.id = 'aura-larp-monster-styles';
        style.textContent = `
            .alm-entry-tab-btn {
                flex: 1 1 100% !important;
                background: linear-gradient(90deg, #1e1b4b, #311042) !important;
                border: 1px solid #a855f7 !important;
                color: #f3e8ff !important;
                box-shadow: 0 2px 10px rgba(168, 85, 247, 0.25);
            }

            .alm-top-badge {
                min-width: 128px;
                transition: border-color 0.2s, color 0.2s;
            }
            .alm-top-larp {
                color: #e9d5ff !important;
                border-color: #a855f7 !important;
            }

            #tab-aura-larp-monster {
                width: 100%;
                max-width: 780px;
                padding: 8px 12px 24px 12px;
                flex-direction: column;
                align-items: center;
                flex: 1;
            }

            .alm-wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .alm-topbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                background: #131726;
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 14px;
                padding: 8px 10px;
            }

            .alm-back-btn {
                background: rgba(255, 255, 255, 0.07);
                border: 1px solid rgba(255, 255, 255, 0.14);
                color: #e2e8f0;
                padding: 6px 12px;
                border-radius: 10px;
                font-size: 0.8rem;
                font-weight: 700;
                cursor: pointer;
                white-space: nowrap;
            }

            .alm-topbar-center {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: center;
            }

            .alm-topbar-title {
                font-size: 0.92rem;
                font-weight: 800;
                color: #f8fafc;
            }

            .alm-topbar-step-pill {
                background: rgba(168, 85, 247, 0.2);
                border: 1px solid rgba(168, 85, 247, 0.45);
                color: #e9d5ff;
                font-size: 0.75rem;
                padding: 2px 8px;
                border-radius: 999px;
                font-weight: 700;
            }

            .alm-reset-btn {
                background: rgba(239, 68, 68, 0.12);
                border: 1px solid rgba(239, 68, 68, 0.35);
                color: #fca5a5;
                padding: 6px 10px;
                border-radius: 10px;
                font-size: 0.76rem;
                font-weight: 700;
                cursor: pointer;
                white-space: nowrap;
            }
            .alm-reset-btn.confirm {
                background: #dc2626;
                border-color: #f87171;
                color: #fff;
            }

            .alm-offline-banner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                padding: 9px 12px;
                border-radius: 12px;
                font-size: 0.8rem;
                line-height: 1.35;
                background: rgba(245, 158, 11, 0.14);
                border: 1px solid rgba(245, 158, 11, 0.4);
                color: #fde68a;
            }
            .alm-offline-banner.error {
                background: rgba(239, 68, 68, 0.14);
                border: 1px solid rgba(239, 68, 68, 0.45);
                color: #fecaca;
            }
            .alm-offline-banner.success {
                background: rgba(34, 197, 94, 0.14);
                border: 1px solid rgba(34, 197, 94, 0.45);
                color: #bbf7d0;
            }

            .alm-balance-card {
                background: linear-gradient(135deg, #161b2e, #1e1633);
                border: 1px solid rgba(168, 85, 247, 0.35);
                border-radius: 16px;
                padding: 12px 16px;
                text-align: center;
            }

            .alm-balance-row {
                display: flex;
                align-items: baseline;
                justify-content: center;
                gap: 6px;
            }

            .alm-balance-icon { font-size: 1.3rem; }
            .alm-balance-value {
                font-size: 1.75rem;
                font-weight: 900;
                color: #f8fafc;
                letter-spacing: 0.3px;
            }
            .alm-balance-unit {
                font-size: 1rem;
                font-weight: 800;
                color: #c084fc;
            }
            .alm-balance-rate {
                margin-top: 2px;
                font-size: 0.82rem;
                font-weight: 700;
                color: #4ade80;
            }

            .alm-subtabs-nav {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 6px;
            }

            .alm-subtab-btn {
                padding: 9px 4px;
                background: #131726;
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: #94a3b8;
                border-radius: 12px;
                font-size: 0.78rem;
                font-weight: 800;
                cursor: pointer;
                transition: all 0.15s;
            }
            .alm-subtab-btn.active {
                background: #251d3d;
                border-color: #a855f7;
                color: #ffffff;
                box-shadow: 0 2px 10px rgba(168, 85, 247, 0.25);
            }

            .alm-main-card {
                background: #131726;
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 16px;
                padding: 12px;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            /* --- СХОДИ --- */
            .alm-stairs-header-bar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                flex-wrap: wrap;
            }

            .alm-stairs-caption {
                font-size: 0.82rem;
                font-weight: 800;
                color: #94a3b8;
            }

            .alm-unlock-step-btn {
                background: linear-gradient(180deg, #f59e0b, #d97706);
                border: none;
                color: #0f172a;
                padding: 7px 12px;
                border-radius: 10px;
                font-size: 0.78rem;
                font-weight: 900;
                cursor: pointer;
            }
            .alm-unlock-step-btn:disabled {
                background: #334155;
                color: #94a3b8;
                cursor: not-allowed;
            }

            .alm-stairs-viewport {
                width: 100%;
                height: 410px;
                max-height: 56vh;
                overflow-y: auto;
                overflow-x: hidden;
                background: #0d101b;
                border: 1px solid rgba(255, 255, 255, 0.07);
                border-radius: 14px;
                position: relative;
            }

            .alm-stairs-track {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }

            .alm-stair-row {
                position: relative;
                height: 44px;
                width: 100%;
                border-bottom: 1px solid rgba(255, 255, 255, 0.035);
                cursor: pointer;
                transition: background 0.15s;
            }
            .alm-stair-row.unlocked:hover { background: rgba(168, 85, 247, 0.08); }
            .alm-stair-row.current-step { background: rgba(34, 197, 94, 0.07); }
            .alm-stair-row.target-step { background: rgba(56, 189, 248, 0.07); }
            .alm-stair-row.locked { opacity: 0.52; cursor: default; }

            .alm-step-bar {
                position: absolute;
                bottom: 10px;
                width: 42px;
                height: 11px;
                border-radius: 6px;
                background: #334155;
                border: 1px solid rgba(255, 255, 255, 0.16);
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
                transition: all 0.2s;
            }
            .alm-stair-row.unlocked .alm-step-bar {
                background: linear-gradient(90deg, #9333ea, #c084fc);
                border-color: #e9d5ff;
            }
            .alm-stair-row.current-step .alm-step-bar {
                background: linear-gradient(90deg, #22c55e, #4ade80);
                border-color: #bbf7d0;
                box-shadow: 0 0 10px rgba(74, 222, 128, 0.65);
            }
            .alm-stair-row.next-unlock .alm-step-bar {
                background: linear-gradient(90deg, #d97706, #f59e0b);
                border-color: #fde68a;
            }

            .alm-step-center-info {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                gap: 6px;
                pointer-events: none;
                white-space: nowrap;
            }
            .alm-step-num {
                font-size: 0.88rem;
                font-weight: 900;
                color: #f8fafc;
            }
            .alm-step-mult {
                font-size: 0.78rem;
                font-weight: 800;
                color: #4ade80;
                background: rgba(34, 197, 94, 0.12);
                padding: 1px 6px;
                border-radius: 6px;
            }

            .alm-step-right-slot {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .alm-room-chip-btn {
                background: rgba(56, 189, 248, 0.18);
                border: 1px solid rgba(56, 189, 248, 0.5);
                color: #bae6fd;
                font-size: 0.72rem;
                font-weight: 800;
                padding: 3px 8px;
                border-radius: 8px;
                cursor: pointer;
            }
            .alm-room-chip-btn.locked {
                background: rgba(148, 163, 184, 0.12);
                border-color: rgba(148, 163, 184, 0.3);
                color: #94a3b8;
            }

            .alm-step-cost-tag {
                font-size: 0.72rem;
                font-weight: 800;
                color: #fbbf24;
                background: rgba(245, 158, 11, 0.12);
                padding: 2px 7px;
                border-radius: 6px;
            }

            .alm-character {
                position: absolute;
                transform: translateX(-50%);
                z-index: 20;
                pointer-events: none;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .alm-char-avatar {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background: #1e293b;
                border: 2px solid #facc15;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
            }

            .alm-character.is-moving .alm-char-avatar {
                animation: almCharHop 0.32s infinite alternate ease-in-out;
                border-color: #38bdf8;
            }

            @keyframes almCharHop {
                0% { transform: translateY(0) scale(1); }
                100% { transform: translateY(-5px) scale(1.06); }
            }

            .alm-char-status {
                font-size: 0.68rem;
                font-weight: 900;
                color: #38bdf8;
                background: rgba(15, 23, 42, 0.9);
                border: 1px solid rgba(56, 189, 248, 0.45);
                padding: 1px 6px;
                border-radius: 6px;
                margin-bottom: 2px;
                white-space: nowrap;
            }

            /* --- КІМНАТИ --- */
            .alm-room-selector {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
                margin-bottom: 2px;
            }

            .alm-room-pill {
                padding: 7px 6px;
                border-radius: 10px;
                background: #0f1320;
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: #cbd5e1;
                font-size: 0.74rem;
                font-weight: 800;
                cursor: pointer;
                text-align: center;
            }
            .alm-room-pill.active {
                background: rgba(168, 85, 247, 0.22);
                border-color: #a855f7;
                color: #ffffff;
            }
            .alm-room-pill.locked {
                opacity: 0.65;
            }

            .alm-room-alert {
                padding: 10px 12px;
                border-radius: 12px;
                font-size: 0.8rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                text-align: center;
            }
            .alm-room-alert.locked {
                background: rgba(239, 68, 68, 0.12);
                border: 1px solid rgba(239, 68, 68, 0.35);
                color: #fecaca;
            }
            .alm-room-alert.warning {
                background: rgba(245, 158, 11, 0.13);
                border: 1px solid rgba(245, 158, 11, 0.4);
                color: #fde68a;
            }

            .alm-mini-go-btn {
                background: rgba(255, 255, 255, 0.12);
                border: 1px solid rgba(255, 255, 255, 0.25);
                color: #ffffff;
                padding: 5px 12px;
                border-radius: 8px;
                font-size: 0.76rem;
                font-weight: 800;
                cursor: pointer;
            }

            .alm-centered-room-section {
                width: 100%;
                max-width: 540px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .alm-section-heading {
                font-size: 0.8rem;
                font-weight: 900;
                color: #94a3b8;
                letter-spacing: 0.5px;
                text-align: center;
                padding-bottom: 2px;
            }

            .alm-storm-hero-box {
                background: linear-gradient(180deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.9));
                border: 1px solid rgba(56, 189, 248, 0.45);
                border-radius: 14px;
                padding: 14px;
                text-align: center;
            }
            .alm-storm-hero-box.dimmed {
                opacity: 0.55;
            }

            .alm-storm-launch-btn {
                width: 100%;
                padding: 11px 14px;
                border-radius: 11px;
                border: none;
                background: linear-gradient(180deg, #38bdf8, #0284c7);
                color: #082f49;
                font-size: 0.88rem;
                font-weight: 900;
                cursor: pointer;
                box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
            }
            .alm-storm-launch-btn:disabled {
                background: #334155;
                color: #94a3b8;
                box-shadow: none;
                cursor: not-allowed;
            }

            .alm-hero-upg-card {
                display: flex;
                align-items: center;
                gap: 12px;
                background: #111522;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 14px;
                padding: 12px 14px;
            }
            .alm-hero-upg-card.dimmed { opacity: 0.55; }
            .alm-hero-upg-card.emerald-theme { border-color: rgba(34, 197, 94, 0.35); }
            .alm-hero-upg-card.snow-theme { border-color: rgba(56, 189, 248, 0.35); }
            .alm-hero-upg-card.purple-theme { border-color: rgba(168, 85, 247, 0.35); }
            .alm-hero-upg-card.gold-theme { border-color: rgba(250, 204, 21, 0.4); }
            .alm-hero-upg-card.crimson-theme { border-color: rgba(244, 63, 94, 0.4); }

            .alm-hero-upg-icon {
                width: 46px;
                height: 46px;
                min-width: 46px;
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.05);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
            }

            .alm-hero-upg-body {
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 3px;
            }

            .alm-hero-upg-title {
                font-size: 0.9rem;
                font-weight: 800;
                color: #f8fafc;
                display: flex;
                align-items: center;
                gap: 6px;
                flex-wrap: wrap;
            }

            .alm-lvl-pill {
                font-size: 0.7rem;
                font-weight: 800;
                background: rgba(168, 85, 247, 0.22);
                color: #e9d5ff;
                padding: 1px 7px;
                border-radius: 6px;
            }

            .alm-hero-upg-effect {
                font-size: 0.78rem;
                color: #cbd5e1;
            }
            .alm-hero-upg-cost {
                font-size: 0.78rem;
                font-weight: 700;
                color: #fbbf24;
            }

            .alm-hero-upg-btn {
                padding: 10px 14px;
                border-radius: 10px;
                border: none;
                background: linear-gradient(180deg, #22c55e, #16a34a);
                color: #052e16;
                font-size: 0.82rem;
                font-weight: 900;
                cursor: pointer;
                white-space: nowrap;
            }
            .alm-hero-upg-btn.snow {
                background: linear-gradient(180deg, #38bdf8, #0284c7);
                color: #082f49;
            }
            .alm-hero-upg-btn.purple {
                background: linear-gradient(180deg, #c084fc, #9333ea);
                color: #ffffff;
            }
            .alm-hero-upg-btn.gold {
                background: linear-gradient(180deg, #facc15, #eab308);
                color: #1e293b;
            }
            .alm-hero-upg-btn.crimson {
                background: linear-gradient(180deg, #fb7185, #e11d48);
                color: #ffffff;
            }
            .alm-hero-upg-btn:disabled {
                background: #334155 !important;
                color: #94a3b8 !important;
                cursor: not-allowed;
            }

            /* --- SPLIT GRID ДЛЯ КІМНАТ 20, 30, 50, 70, 120 --- */
            .alm-room-split-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
                width: 100%;
                align-items: start;
            }
            .alm-room-split-grid.dimmed { opacity: 0.55; }

            @media (max-width: 660px) {
                .alm-room-split-grid {
                    grid-template-columns: 1fr;
                }
            }

            .alm-room-left-col,
            .alm-room-right-col {
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 100%;
            }

            .alm-zone-topbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.78rem;
                padding: 0 2px;
            }

            .alm-zone-counter {
                background: rgba(56, 189, 248, 0.16);
                color: #38bdf8;
                font-weight: 800;
                padding: 2px 8px;
                border-radius: 8px;
                font-size: 0.74rem;
            }

            .alm-snow-zone {
                position: relative;
                width: 100%;
                height: 290px;
                border-radius: 16px;
                background: radial-gradient(circle at 50% 25%, #162942, #0b1322 80%);
                border: 2px solid rgba(56, 189, 248, 0.35);
                overflow: hidden;
                touch-action: none;
                user-select: none;
                -webkit-user-select: none;
            }
            .alm-snow-zone.disabled-zone {
                opacity: 0.65;
            }

            .alm-snow-hint {
                position: absolute;
                bottom: 8px;
                left: 0;
                right: 0;
                text-align: center;
                font-size: 0.72rem;
                color: rgba(226, 232, 240, 0.65);
                pointer-events: none;
                padding: 0 8px;
            }

            .alm-snowflake-item {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 1.7rem;
                cursor: pointer;
                filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.75));
                animation: almSnowFloat 2.4s infinite alternate ease-in-out;
                padding: 6px;
                z-index: 5;
            }
            .alm-snowflake-item.gold {
                filter: drop-shadow(0 0 11px rgba(250, 204, 21, 0.95));
                transform: translate(-50%, -50%) scale(1.14);
            }
            .alm-snowflake-item.gold::after {
                content: '✨';
                position: absolute;
                top: -2px;
                right: -2px;
                font-size: 0.75rem;
            }
            .alm-snowflake-item.emerald {
                filter: drop-shadow(0 0 13px rgba(74, 222, 128, 1));
                transform: translate(-50%, -50%) scale(1.22);
            }
            .alm-snowflake-item.emerald::after {
                content: '💎';
                position: absolute;
                top: -2px;
                right: -2px;
                font-size: 0.78rem;
            }

            @keyframes almSnowFloat {
                0% { transform: translate(-50%, -50%) rotate(-8deg) scale(0.96); }
                100% { transform: translate(-50%, -55%) rotate(8deg) scale(1.06); }
            }

            .alm-snow-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 0.85rem;
                font-weight: 900;
                color: #7dd3fc;
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
                pointer-events: none;
                animation: almPopUp 0.65s ease-out forwards;
                z-index: 15;
                white-space: nowrap;
            }
            .alm-snow-pop.gold { color: #facc15; font-size: 0.94rem; }
            .alm-snow-pop.emerald { color: #4ade80; font-size: 1rem; }

            @keyframes almPopUp {
                0% { opacity: 1; transform: translate(-50%, -50%) scale(0.9); }
                100% { opacity: 0; transform: translate(-50%, -135%) scale(1.12); }
            }

            .alm-zone-bottom-pill {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #0f1320;
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 10px;
                padding: 8px 12px;
                font-size: 0.8rem;
            }

            /* --- КІМНАТА 30: ЗОНА СМІТТЯ --- */
            .alm-trash-zone {
                position: relative;
                width: 100%;
                height: 290px;
                border-radius: 16px;
                background: radial-gradient(circle at 50% 50%, #262115, #12100b 82%);
                border: 2px solid rgba(250, 204, 21, 0.35);
                overflow: hidden;
                touch-action: none;
                user-select: none;
                -webkit-user-select: none;
            }
            .alm-trash-zone.disabled-zone {
                opacity: 0.65;
            }

            .alm-trash-bin {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 72px;
                height: 72px;
                border-radius: 50%;
                background: rgba(250, 204, 21, 0.14);
                border: 2px dashed rgba(250, 204, 21, 0.55);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                pointer-events: none;
                transition: transform 0.15s, background 0.15s, border-color 0.15s;
                z-index: 2;
            }
            .alm-trash-bin.bin-highlight {
                transform: translate(-50%, -50%) scale(1.14);
                background: rgba(34, 197, 94, 0.25);
                border-color: #4ade80;
            }
            .alm-trash-bin-icon { font-size: 1.55rem; }
            .alm-trash-bin-text {
                font-size: 0.62rem;
                font-weight: 900;
                color: #fde047;
                letter-spacing: 0.4px;
            }

            .alm-trash-item {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 1.65rem;
                cursor: grab;
                filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.8));
                padding: 6px;
                z-index: 6;
                touch-action: none;
            }
            .alm-trash-item.gold {
                filter: drop-shadow(0 0 11px rgba(250, 204, 21, 0.95));
                transform: translate(-50%, -50%) scale(1.14);
            }
            .alm-trash-item.gold::after {
                content: '✨';
                position: absolute;
                top: -2px;
                right: -2px;
                font-size: 0.75rem;
            }
            .alm-trash-item.emerald {
                filter: drop-shadow(0 0 13px rgba(74, 222, 128, 1));
                transform: translate(-50%, -50%) scale(1.22);
            }
            .alm-trash-item.emerald::after {
                content: '💎';
                position: absolute;
                top: -2px;
                right: -2px;
                font-size: 0.78rem;
            }
            .alm-trash-item.dragging {
                cursor: grabbing;
                transform: translate(-50%, -50%) scale(1.25);
                z-index: 20;
            }

            .alm-trash-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 0.9rem;
                font-weight: 900;
                color: #fde047;
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
                pointer-events: none;
                animation: almPopUp 0.7s ease-out forwards;
                z-index: 15;
                white-space: nowrap;
            }
            .alm-trash-pop.gold { color: #facc15; font-size: 0.98rem; }
            .alm-trash-pop.emerald { color: #4ade80; font-size: 1.04rem; }

            /* --- КІМНАТА 50: АРЕНА МОБА (БОЙОВА КВОЧКА РЯБА) --- */
            .alm-chicken-arena {
                position: relative;
                width: 100%;
                height: 290px;
                border-radius: 16px;
                background: radial-gradient(circle at 50% 45%, #341c12, #150c08 85%);
                border: 2px solid rgba(251, 146, 60, 0.4);
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 12px;
                user-select: none;
                -webkit-user-select: none;
            }
            .alm-chicken-arena.disabled-zone {
                opacity: 0.65;
            }

            .alm-chicken-hp-wrap {
                position: absolute;
                top: 12px;
                left: 14px;
                right: 14px;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .alm-chicken-hp-bar {
                width: 100%;
                height: 12px;
                background: rgba(0, 0, 0, 0.55);
                border: 1px solid rgba(251, 146, 60, 0.45);
                border-radius: 999px;
                overflow: hidden;
            }

            .alm-chicken-hp-fill {
                height: 100%;
                background: linear-gradient(90deg, #ef4444, #f97316);
                transition: width 0.12s ease-out;
            }

            .alm-chicken-hp-text {
                text-align: center;
                font-size: 0.74rem;
                font-weight: 900;
                color: #fed7aa;
            }

            .alm-chicken-mob-btn {
                background: radial-gradient(circle, rgba(251, 146, 60, 0.22), rgba(251, 146, 60, 0.04) 70%);
                border: 2px solid rgba(251, 146, 60, 0.45);
                border-radius: 22px;
                padding: 14px 22px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                transition: transform 0.08s;
                margin-top: 14px;
            }
            .alm-chicken-mob-btn:active:not(:disabled) {
                transform: scale(0.92);
            }
            .alm-chicken-mob-btn:disabled {
                cursor: not-allowed;
            }
            .alm-chicken-mob-btn.hit {
                animation: almMobHitShake 0.22s ease-out;
            }

            @keyframes almMobHitShake {
                0% { transform: scale(0.92) rotate(-4deg); }
                50% { transform: scale(1.03) rotate(4deg); }
                100% { transform: scale(1) rotate(0deg); }
            }

            .alm-chicken-sprite {
                font-size: 4.2rem;
                line-height: 1;
                filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.75));
            }

            .alm-chicken-drop-badge {
                font-size: 0.74rem;
                font-weight: 800;
                color: #fdba74;
                background: rgba(0, 0, 0, 0.45);
                padding: 3px 10px;
                border-radius: 999px;
            }

            .alm-chicken-respawn-box {
                text-align: center;
                background: rgba(0, 0, 0, 0.45);
                border: 1px solid rgba(251, 146, 60, 0.3);
                border-radius: 14px;
                padding: 16px 20px;
                margin-top: 14px;
            }

            .alm-dmg-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 1rem;
                font-weight: 900;
                color: #f87171;
                text-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
                pointer-events: none;
                animation: almPopUp 0.6s ease-out forwards;
                z-index: 20;
            }

            .alm-feather-loot-pop {
                position: absolute;
                left: 50%;
                top: 48%;
                transform: translate(-50%, -50%);
                font-size: 1.15rem;
                font-weight: 900;
                color: #fdba74;
                background: rgba(15, 23, 42, 0.88);
                border: 1px solid #fb923c;
                padding: 4px 12px;
                border-radius: 999px;
                pointer-events: none;
                animation: almPopUp 1.1s ease-out forwards;
                z-index: 25;
                white-space: nowrap;
            }

            /* --- КІМНАТА 70: ЗОНА ОБ'ЄДНАННЯ ОВОЧІВ ТА ФРУКТІВ --- */
            .alm-merge-zone {
                position: relative;
                width: 100%;
                height: 290px;
                border-radius: 16px;
                background: radial-gradient(circle at 50% 45%, #132c1e, #0a1710 85%);
                border: 2px solid rgba(34, 197, 94, 0.4);
                overflow: hidden;
                touch-action: none;
                user-select: none;
                -webkit-user-select: none;
            }
            .alm-merge-zone.disabled-zone {
                opacity: 0.65;
            }

            .alm-merge-item {
                position: absolute;
                transform: translate(-50%, -50%);
                width: 44px;
                height: 44px;
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(74, 222, 128, 0.45);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: grab;
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.65);
                z-index: 6;
                touch-action: none;
                transition: transform 0.12s, border-color 0.12s, box-shadow 0.12s;
            }
            .alm-merge-item.dragging {
                cursor: grabbing;
                transform: translate(-50%, -50%) scale(1.22);
                border-color: #facc15;
                z-index: 20;
            }
            .alm-merge-item.merge-target-highlight {
                transform: translate(-50%, -50%) scale(1.15);
                border-color: #4ade80;
                box-shadow: 0 0 14px rgba(74, 222, 128, 0.9);
            }
            .alm-merge-item.merge-pop-in {
                animation: almMergePopIn 0.28s ease-out;
            }

            @keyframes almMergePopIn {
                0% { transform: translate(-50%, -50%) scale(0.55); }
                70% { transform: translate(-50%, -50%) scale(1.2); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }

            .alm-merge-emoji {
                font-size: 1.5rem;
                line-height: 1;
            }
            .alm-merge-lvl-badge {
                position: absolute;
                bottom: -4px;
                right: -4px;
                background: #16a34a;
                color: #ffffff;
                font-size: 0.62rem;
                font-weight: 900;
                padding: 1px 4px;
                border-radius: 6px;
                border: 1px solid #bbf7d0;
                line-height: 1.1;
            }

            .alm-merge-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 0.92rem;
                font-weight: 900;
                color: #4ade80;
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.95);
                pointer-events: none;
                animation: almPopUp 0.8s ease-out forwards;
                z-index: 25;
                white-space: nowrap;
            }

            /* --- КІМНАТА 120: БУРІННЯ ВНИЗ (ШАХТА І 4 ЗНАРЯДДЯ) --- */
            .alm-drill-zone {
                position: relative;
                width: 100%;
                min-height: 290px;
                border-radius: 16px;
                background: radial-gradient(circle at 50% 30%, #292524, #141211 85%);
                border: 2px solid rgba(168, 162, 158, 0.42);
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
            }
            .alm-drill-zone.disabled-zone {
                opacity: 0.65;
            }

            .alm-drill-tools-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 8px;
                width: 100%;
            }

            .alm-drill-tool-card {
                background: rgba(28, 25, 23, 0.92);
                border: 1px solid rgba(214, 211, 209, 0.22);
                border-radius: 12px;
                padding: 8px 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
            }
            .alm-drill-tool-card.locked-tool {
                opacity: 0.68;
                border-style: dashed;
            }

            .alm-drill-tool-top {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .alm-drill-tool-icon {
                font-size: 1.45rem;
            }
            .alm-drill-tool-title {
                font-size: 0.8rem;
                font-weight: 800;
                color: #f5f5f4;
            }
            .alm-drill-tool-sub {
                font-size: 0.72rem;
                color: #a8a29e;
                font-weight: 700;
            }

            .alm-drill-action-btn {
                padding: 7px 11px;
                border-radius: 9px;
                border: none;
                background: linear-gradient(180deg, #d6d3d1, #a8a29e);
                color: #1c1917;
                font-size: 0.74rem;
                font-weight: 900;
                cursor: pointer;
                white-space: nowrap;
            }
            .alm-drill-action-btn.unlock-btn {
                background: linear-gradient(180deg, #f59e0b, #d97706);
                color: #0f172a;
            }
            .alm-drill-action-btn:disabled {
                background: #334155 !important;
                color: #94a3b8 !important;
                cursor: not-allowed;
            }

            .alm-drill-locked-tag {
                font-size: 0.7rem;
                font-weight: 800;
                color: #94a3b8;
                background: rgba(255, 255, 255, 0.06);
                padding: 4px 8px;
                border-radius: 8px;
                text-align: right;
            }

            .alm-drill-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 0.95rem;
                font-weight: 900;
                color: #f5f5f4;
                background: rgba(28, 25, 23, 0.9);
                border: 1px solid #a8a29e;
                padding: 4px 10px;
                border-radius: 999px;
                pointer-events: none;
                animation: almPopUp 0.85s ease-out forwards;
                z-index: 25;
                white-space: nowrap;
            }

            /* --- ПРАВА ПАНЕЛЬ ПРОКАЧОК ТА ТОПУ --- */
            .alm-side-panel-box {
                background: #101524;
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 14px;
                padding: 10px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .alm-side-panel-title {
                font-size: 0.76rem;
                font-weight: 900;
                color: #94a3b8;
                letter-spacing: 0.4px;
            }

            .alm-compact-upg-list {
                display: flex;
                flex-direction: column;
                gap: 7px;
            }

            .alm-compact-upg-card {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 10px;
                padding: 8px 10px;
            }

            .alm-compact-upg-info {
                display: flex;
                flex-direction: column;
                gap: 2px;
            }
            .alm-compact-upg-name {
                font-size: 0.8rem;
                font-weight: 800;
                color: #f8fafc;
                display: flex;
                align-items: center;
                gap: 5px;
                flex-wrap: wrap;
            }
            .alm-compact-upg-desc {
                font-size: 0.74rem;
                color: #cbd5e1;
            }
            .alm-compact-upg-cost {
                font-size: 0.74rem;
                color: #fbbf24;
            }

            .alm-compact-upg-btn {
                padding: 7px 11px;
                border-radius: 8px;
                border: none;
                background: linear-gradient(180deg, #38bdf8, #0284c7);
                color: #082f49;
                font-size: 0.76rem;
                font-weight: 900;
                cursor: pointer;
                white-space: nowrap;
            }
            .alm-compact-upg-btn.trash {
                background: linear-gradient(180deg, #facc15, #eab308);
                color: #1e293b;
            }
            .alm-compact-upg-btn.feather {
                background: linear-gradient(180deg, #fb923c, #ea580c);
                color: #ffffff;
            }
            .alm-compact-upg-btn.emerald {
                background: linear-gradient(180deg, #22c55e, #16a34a);
                color: #052e16;
            }
            .alm-compact-upg-btn.stone {
                background: linear-gradient(180deg, #d6d3d1, #a8a29e);
                color: #1c1917;
            }
            .alm-compact-upg-btn:disabled {
                background: #334155 !important;
                color: #94a3b8 !important;
                cursor: not-allowed;
            }

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
                padding: 6px 8px;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.03);
                font-size: 0.76rem;
            }
            .alm-snow-lb-row.is-player {
                background: rgba(56, 189, 248, 0.14);
                border: 1px solid rgba(56, 189, 248, 0.4);
            }
            .alm-snow-lb-rank {
                font-weight: 900;
                color: #facc15;
                min-width: 24px;
            }
            .alm-snow-lb-name {
                flex: 1;
                color: #f1f5f9;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .alm-snow-lb-val {
                color: #e2e8f0;
                font-weight: 800;
                white-space: nowrap;
            }

            /* --- МНОЖНИКИ --- */
            .alm-mult-total-card {
                background: linear-gradient(135deg, #172033, #23183b);
                border: 1px solid rgba(168, 85, 247, 0.4);
                border-radius: 14px;
                padding: 14px;
                text-align: center;
            }
            .alm-mult-total-value {
                font-size: 1.8rem;
                font-weight: 900;
                color: #facc15;
                margin: 2px 0;
            }

            .alm-mult-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .alm-mult-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #111522;
                border: 1px solid rgba(255, 255, 255, 0.07);
                border-radius: 10px;
                padding: 10px 12px;
                font-size: 0.84rem;
            }
            .alm-mult-item-name { color: #cbd5e1; font-weight: 700; }
            .alm-mult-item-val { color: #4ade80; font-weight: 900; }

            /* --- ТОП ГРАВЦІВ --- */
            .alm-lb-subtabs {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
            }
            .alm-lb-tab-btn {
                padding: 8px 4px;
                background: #0f1320;
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: #94a3b8;
                border-radius: 10px;
                font-size: 0.74rem;
                font-weight: 800;
                cursor: pointer;
            }
            .alm-lb-tab-btn.active {
                background: rgba(168, 85, 247, 0.22);
                border-color: #a855f7;
                color: #ffffff;
            }

            .alm-leaderboard-list {
                display: flex;
                flex-direction: column;
                gap: 6px;
                max-height: 360px;
                overflow-y: auto;
            }

            .alm-lb-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                background: #111522;
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 10px;
                padding: 9px 12px;
                font-size: 0.84rem;
            }
            .alm-lb-row.is-player {
                border-color: #facc15;
                background: linear-gradient(90deg, rgba(250, 204, 21, 0.12), rgba(168, 85, 247, 0.14));
            }
            .alm-lb-rank {
                font-weight: 900;
                color: #facc15;
                min-width: 30px;
            }
            .alm-lb-name {
                flex: 1;
                font-weight: 700;
                color: #f8fafc;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .alm-lb-val {
                font-weight: 800;
                color: #4ade80;
                white-space: nowrap;
            }
        `;
        document.head.appendChild(style);
    }

    // ------------------------------------------
    // ГЛОБАЛЬНІ ХЕНДЛЕРИ ТА ЗАПУСК МОДУЛЯ
    // ------------------------------------------
    window.enterAuraLarpMonsterMode = enterAuraLarpMonsterMode;
    window.exitAuraLarpMonsterMode = exitAuraLarpMonsterMode;
    window.switchAuraLarpSubTab = switchLarpSubTab;
    window.switchAuraLarpLeaderboardType = switchLeaderboardType;
    window.unlockNextAuraLarpStep = unlockNextStep;
    window.moveAuraLarpToStep = moveToStep;
    window.teleportAuraLarpToStep = teleportToRoomStep;
    window.openAuraLarpRoomAtStep = openRoomAtStep;
    window.goToRoom20FromStorm = goToRoom20FromStorm;
    window.buyAuraLarpRoomUpgrade = buyRoomMultiplierUpgrade;
    window.buyAuraLarpSnowMult = buySnowMultUpgrade;
    window.buyAuraLarpSnowSpeed = buySnowSpeedUpgrade;
    window.buyAuraLarpSnowLarp = buySnowLarpUpgrade;
    window.buyAuraLarpTrashMult = buyTrashMultUpgrade;
    window.buyAuraLarpTrashSpeed = buyTrashSpeedUpgrade;
    window.buyAuraLarpTrashLarp = buyTrashLarpUpgrade;
    window.buyAuraLarpStepSpeed = buyStepSpeedUpgrade;
    window.buyAuraLarpOfflineUpgrade = buyOfflineLarpUpgrade;
    window.buyAuraLarpFeatherMult = buyFeatherMultUpgrade;
    window.buyAuraLarpFeatherLarp = buyFeatherLarpUpgrade;
    window.attackAuraLarpChicken = attackChickenMob;
    window.buyAuraLarpGoldSnow = buyGoldSnowUpgrade;
    window.buyAuraLarpEmeraldSnow = buyEmeraldSnowUpgrade;
    window.buyAuraLarpGoldTrash = buyGoldTrashUpgrade;
    window.buyAuraLarpEmeraldTrash = buyEmeraldTrashUpgrade;
    window.buyAuraLarpVitaminMult = buyVitaminMultUpgrade;
    window.buyAuraLarpMergeLv2 = buyMergeLv2Upgrade;
    window.buyAuraLarpMergeLarp = buyMergeLarpUpgrade;
    window.activateAuraLarpSnowstorm = activateSnowstorm;
    window.buyAuraLarpStormDuration = buyStormDurationUpgrade;
    window.buyAuraLarpStormCooldown = buyStormCooldownUpgrade;
    window.buyAuraLarpStormSpeed = buyStormSpeedUpgrade;
    window.buyAuraLarpMobDamage = buyMobDamageUpgrade;
    window.buyAuraLarpMobRespawn = buyMobRespawnUpgrade;
    window.activateAuraLarpCleaner = activateRoomCleaner;
    window.buyAuraLarpCleanerDuration = buyCleanerDurationUpgrade;
    window.useAuraLarpDrillTool = useDrillTool;
    window.unlockAuraLarpDrill2 = unlockDrillTool2;
    window.buyAuraLarpStoneMult = buyStoneMultUpgrade;
    window.buyAuraLarpStoneLarp = buyStoneLarpUpgrade;
    window.buyAuraLarpDrill1Cd = buyDrill1CdUpgrade;
    window.buyAuraLarpDrill2Cd = buyDrill2CdUpgrade;
    window.activateAuraLarpTeleporter = activateTeleporter;
    window.buyAuraLarpTeleportDuration = buyTeleportDurationUpgrade;
    window.buyAuraLarpTeleportCooldown = buyTeleportCooldownUpgrade;
    window.buyAuraLarpTeleportTravel = buyTeleportTravelUpgrade;
    window.handleResetAuraLarpClick = handleResetAuraLarpClick;
    window.retryAuraLarpGlobalTime = verifyGlobalTimeAndApplyOfflineProgress;
    window.dismissAuraLarpOfflineReport = dismissOfflineReport;

    window.onMainGameLoaded = function () {
        const s = initAuraLarpMonsterState();
        injectStyles();
        injectNavigationAndTab();
        updateTopGameHeader();

        if (s.wasActive) {
            enterAuraLarpMonsterMode();
        } else {
            verifyGlobalTimeAndApplyOfflineProgress();
        }
    };

    // Глобальні слухачі для перетягування сміття (30 кімната), овочів/фруктів (70 кімната) та свайпу сніжинок (20 кімната)
    window.addEventListener('pointermove', (e) => {
        if (draggingTrashId !== null) {
            moveDraggingTrash(draggingTrashId, e.clientX, e.clientY);
        }
        if (draggingMergeId !== null) {
            moveDraggingMerge(draggingMergeId, e.clientX, e.clientY);
        }
        if (isPointerSwipingSnow && isAuraLarpModeActive && activeLarpSubTab === 'room' && activeRoomStep === 20 && canInteractWithRoom(20)) {
            const target = document.elementFromPoint(e.clientX, e.clientY);
            const flakeEl = target && target.closest ? target.closest('.alm-snowflake-item') : null;
            if (flakeEl) {
                const id = Number(flakeEl.dataset.flakeId);
                if (id) collectSnowflakeById(id);
            }
        }
    });

    function finishActiveDrags(clientX, clientY) {
        isPointerSwipingSnow = false;

        if (draggingTrashId !== null) {
            const finishedId = draggingTrashId;
            draggingTrashId = null;

            const el = document.querySelector(`.alm-trash-item[data-trash-id="${finishedId}"]`);
            if (el) el.classList.remove('dragging');

            checkTrashDropIntoCenter(finishedId, clientX, clientY);
        }

        if (draggingMergeId !== null) {
            const finishedMergeId = draggingMergeId;
            draggingMergeId = null;

            const el = document.querySelector(`.alm-merge-item[data-merge-id="${finishedMergeId}"]`);
            if (el) el.classList.remove('dragging');

            tryCombineDraggedMergeItem(finishedMergeId);
        }
    }

    window.addEventListener('pointerup', (e) => {
        finishActiveDrags(e.clientX, e.clientY);
    });

    window.addEventListener('pointercancel', () => {
        finishActiveDrags(null, null);
    });

    // Основний фоновий тік (працює навіть коли гравець у звичайній вкладці клікера)
    setInterval(() => {
        const now = Date.now();
        const dt = Math.min(1.0, Math.max(0.01, (now - lastLarpTickTime) / 1000));
        lastLarpTickTime = now;

        tickAuraLarpLogic(dt);
        if (isAuraLarpModeActive) {
            updateAllDynamicElements(true, false);
        }
    }, 100);

    // Автозбереження та синхронізація всіх таблиць лідерів кожні 3 секунди
    setInterval(() => {
        if (!isMainGameReady()) return;
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
                else if (activeRoomStep === 120) renderStoneLeaderboardList();
            }
        }
    }, 3000);

    window.addEventListener('online', () => {
        if (!isGlobalTimeVerified) {
            verifyGlobalTimeAndApplyOfflineProgress();
        }
    });

    window.addEventListener('beforeunload', () => {
        persistAuraLarpState(false);
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectStyles();
            injectNavigationAndTab();
        });
    } else {
        injectStyles();
        injectNavigationAndTab();
    }
})();
