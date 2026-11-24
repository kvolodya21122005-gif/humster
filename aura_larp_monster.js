// ==========================================
// ОКРЕМИЙ МОДУЛЬ: АУРА ЛАРП МОНСТЕР (v9)
// Підключення в index.html: <script src="aura_larp_monster.js"></script>
// ==========================================

(function () {
    const STORAGE_KEY = 'hrundel_aura_larp_monster_v3';

    // Конфігурація всіх 160 сходинок (сходинка / множник / ціна в ларпах)
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
        { step: 140, mult: 210.0, cost: 70000000000 },
        { step: 141, mult: 215.0, cost: 90000000000 },
        { step: 142, mult: 220.0, cost: 120000000000 },
        { step: 143, mult: 225.0, cost: 140000000000 },
        { step: 144, mult: 230.0, cost: 170000000000 },
        { step: 145, mult: 235.0, cost: 210000000000 },
        { step: 146, mult: 240.0, cost: 250000000000 },
        { step: 147, mult: 245.0, cost: 340000000000 },
        { step: 148, mult: 250.0, cost: 420000000000 },
        { step: 149, mult: 260.0, cost: 500000000000 },
        { step: 150, mult: 270.0, cost: 600000000000 },
        { step: 151, mult: 280.0, cost: 750000000000 },
        { step: 152, mult: 290.0, cost: 900000000000 },
        { step: 153, mult: 300.0, cost: 1200000000000 },
        { step: 154, mult: 310.0, cost: 1600000000000 },
        { step: 155, mult: 325.0, cost: 2000000000000 },
        { step: 156, mult: 340.0, cost: 2500000000000 },
        { step: 157, mult: 355.0, cost: 2800000000000 },
        { step: 158, mult: 370.0, cost: 3200000000000 },
        { step: 159, mult: 385.0, cost: 3600000000000 },
        { step: 160, mult: 400.0, cost: 4000000000000 },
        { step: 161, mult: 420.0, cost: 4500000000000 },
        { step: 162, mult: 440.0, cost: 5000000000000 },
        { step: 163, mult: 460.0, cost: 5500000000000 },
        { step: 164, mult: 480.0, cost: 6300000000000 },
        { step: 165, mult: 500.0, cost: 6800000000000 },
        { step: 166, mult: 520.0, cost: 7500000000000 },
        { step: 167, mult: 540.0, cost: 8200000000000 },
        { step: 168, mult: 560.0, cost: 8900000000000 },
        { step: 169, mult: 580.0, cost: 9400000000000 },
        { step: 170, mult: 600.0, cost: 10000000000000 }
    ];

    const MAX_STEP = STAIRS_CONFIG.length; // 160
    const ROOM_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 110, 120, 130, 140, 150, 160];

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

    // Кімната 50 сходинки (Моб Бойова Квочка Ряба + Когут + Золотий Когут)
    const CHICKEN_MOB_NAME = 'Бойова Квочка Ряба';
    const CHICKEN_MAX_HP = 1000;
    const ROOSTER_MAX_HP = 100000;
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

    // Кімната 90 сходинки (Прокачки мобів для 50 та 150 сходинок)
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

    // Кімната 140 сходинки (Обмін сніжинок -> Вогняні сніжинки)
    const SNOW_TO_FIRE_SNOW_RATE = 100000; // 100 тисяч сніжинок = 1 вогняна сніжинка
    const SNOW_EXCHANGE_PCT = 0.10; // 10% від усіх поточних сніжинок за один клік
    const FIRE_SNOW_MULT_BASE_COST = 10; // 10, 30, 60, 100, 150... (+10*рівень)
    const FIRE_SNOW_SNOW_BOOST_BASE_COST = 25; // 25, 75, 150, 250, 375... (+25*рівень)
    const FIRE_SNOW_LARP_BASE_COST = 25; // 25, 75, 150, 250, 375... (+25*рівень)

    // Кімната 150 сходинки (Бос Орангутанг — Голови орангутанга)
    const ORANGUTAN_MOB_NAME = 'Орангутанг';
    const ORANGUTAN_MAX_HP = 100000;
    const ORANGUTAN_BASE_RESPAWN_SEC = 48 * 3600; // 48 годин
    const ORANGUTAN_BTN_SPAWN_SEC = 2.0; // кнопочки навколо кожні 2 сек
    const MAX_ORANGUTAN_BTNS = 6;
    const ORANGUTAN_BOMB_BASE_COST = 250; // 250 вогняних сніжинок
    const ORANGUTAN_BOMB_COST_STEP = 25; // -25 вогняних сніжинок за рівень
    const ORANGUTAN_BOMB_MAX_LVL = 6; // максимум 6 рівень
    const ORANGUTAN_BOMB_COOLDOWN_SEC = 600; // кожні 10 хвилин
    const ORANGUTAN_BOMB_DMG_MULT = 150; // шкода 90 кімнати * 150

    // Кімната 160 сходинки (Когут та Золотий Когут для 50 кімнати)
    const ROOSTER_CHANCE_BASE_COST = 1e12; // 1T ларпів
    const ROOSTER_CHANCE_COST_SCALE = 1.2;
    const ROOSTER_CHANCE_MAX_LVL = 100;

    const GOLDEN_ROOSTER_CHANCE_BASE_COST = 5e14; // 500T ларпів
    const GOLDEN_ROOSTER_CHANCE_COST_SCALE = 1.25;
    const GOLDEN_ROOSTER_CHANCE_MAX_LVL = 100;
    const GOLDEN_ROOSTER_REQUIRED_KILLS = 3; // умова: вбити 3 когута

    // Пасивний буст для ніку "Ларцу"
    const LARTSU_NICKNAME_MULT = 1;

    // Геометрія візуальних сходинок (гарантовано вміщує всі 160 сходинок у лівій зоні до центру екрана)
    const ROW_HEIGHT = 44;
    const STEP_BAR_PX = 42;
    const STEP_BASE_PX = 14;
    const STEP_INDENT_PCT_PER_LEVEL = 0.19;

    let moduleState = null;
    let isAuraLarpModeActive = false;
    let activeLarpSubTab = 'stairs'; // 'stairs' | 'room' | 'multipliers' | 'leaderboard'
    let activeRoomStep = 10;
    let activeLeaderboardType = 'highestStep'; // 'highestStep' | 'larpPerSec' | 'totalLarp'

    let lastLarpTickTime = Date.now();
    let rafId = null;
    let lastLeaderboardSyncMs = 0;
    let resetConfirmPending = false;
    let resetConfirmTimer = null;
    let lastNormalTabId = 'clicker';
    let headerObserver = null;
    let isUpdatingHeaderInternally = false;
    let lastHeaderSnapshot = {
        active: null,
        larpVal: '',
        cpsVal: '',
        roomIcon: '',
        roomVal: '',
        roomSub: '',
        roomColor: ''
    };

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

    // Стан кнопочок навколо боса Орангутанга (150 сходинка)
    let activeOrangutanButtons = []; // [{ id, xPct, yPct }]
    let nextOrangutanBtnId = 1;
    let orangutanBtnSpawnAccumSec = 0;

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
            // Кімната 50 (Курочка, Когут, Золотий Когут та Пір'я)
            feathers: 0,
            totalFeathers: 0,
            featherMultLvl: 0,
            featherLarpMultLvl: 0,
            chickenHp: CHICKEN_MAX_HP,
            chickenRespawnEndMs: null,
            room50MobType: 'chicken', // 'chicken' | 'rooster' | 'golden_rooster'
            roostersKilled: 0,
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
            // Кімната 140 (Вогняні сніжинки)
            fireSnow: 0,
            totalFireSnow: 0,
            fireSnowMultLvl: 0,
            fireSnowSnowBoostLvl: 0,
            fireSnowLarpLvl: 0,
            // Кімната 150 (Бос Орангутанг)
            orangutanHeads: 0,
            totalOrangutanHeads: 0,
            orangutanHp: ORANGUTAN_MAX_HP,
            orangutanRespawnEndMs: null,
            orangutanBombCooldownEndMs: null,
            orangutanHeadMultLvl: 0,
            orangutanBombCostLvl: 0,
            orangutanLarpLvl: 0,
            // Кімната 160 (Когут та Золотий Когут)
            roosterChanceLvl: 0,
            goldenRoosterChanceLvl: 0,
            // Збереження сесії
            lastGlobalTime: null,
            wasActive: false,
            savedSubTab: 'stairs',
            savedRoomStep: 10
        };
    }

    function getRoom50MobConfig(mobType) {
        if (mobType === 'golden_rooster') {
            return {
                type: 'golden_rooster',
                name: 'Золотий Когут',
                icon: '🐓✨',
                maxHp: ROOSTER_MAX_HP,
                featherBonusMult: 250,
                btnClass: 'golden-rooster'
            };
        }
        if (mobType === 'rooster') {
            return {
                type: 'rooster',
                name: 'Когут',
                icon: '🐓',
                maxHp: ROOSTER_MAX_HP,
                featherBonusMult: 25,
                btnClass: 'rooster'
            };
        }
        return {
            type: 'chicken',
            name: CHICKEN_MOB_NAME,
            icon: '🐔',
            maxHp: CHICKEN_MAX_HP,
            featherBonusMult: 1,
            btnClass: ''
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

        // Кімната 50 (Курочка, Когут, Золотий Когут та Пір'я)
        if (typeof s.feathers !== 'number' || isNaN(s.feathers) || s.feathers < 0) s.feathers = 0;
        if (typeof s.totalFeathers !== 'number' || isNaN(s.totalFeathers) || s.totalFeathers < s.feathers) {
            s.totalFeathers = s.feathers;
        }
        if (typeof s.featherMultLvl !== 'number' || isNaN(s.featherMultLvl) || s.featherMultLvl < 0) s.featherMultLvl = 0;
        if (typeof s.featherLarpMultLvl !== 'number' || isNaN(s.featherLarpMultLvl) || s.featherLarpMultLvl < 0) s.featherLarpMultLvl = 0;
        if (!['chicken', 'rooster', 'golden_rooster'].includes(s.room50MobType)) {
            s.room50MobType = 'chicken';
        }
        if (typeof s.roostersKilled !== 'number' || isNaN(s.roostersKilled) || s.roostersKilled < 0) {
            s.roostersKilled = 0;
        }
        const mobCfg = getRoom50MobConfig(s.room50MobType);
        if (typeof s.chickenHp !== 'number' || isNaN(s.chickenHp) || s.chickenHp < 0 || s.chickenHp > mobCfg.maxHp) {
            s.chickenHp = mobCfg.maxHp;
        }
        if (typeof s.chickenRespawnEndMs !== 'number' || isNaN(s.chickenRespawnEndMs) || s.chickenRespawnEndMs <= 0) {
            s.chickenRespawnEndMs = null;
        }
        if (s.chickenHp <= 0 && !s.chickenRespawnEndMs) {
            s.chickenHp = mobCfg.maxHp;
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

        // Кімната 140 (Вогняні сніжинки)
        if (typeof s.fireSnow !== 'number' || isNaN(s.fireSnow) || s.fireSnow < 0) s.fireSnow = 0;
        if (typeof s.totalFireSnow !== 'number' || isNaN(s.totalFireSnow) || s.totalFireSnow < s.fireSnow) {
            s.totalFireSnow = s.fireSnow;
        }
        if (typeof s.fireSnowMultLvl !== 'number' || isNaN(s.fireSnowMultLvl) || s.fireSnowMultLvl < 0) {
            s.fireSnowMultLvl = 0;
        }
        if (typeof s.fireSnowSnowBoostLvl !== 'number' || isNaN(s.fireSnowSnowBoostLvl) || s.fireSnowSnowBoostLvl < 0) {
            s.fireSnowSnowBoostLvl = 0;
        }
        if (typeof s.fireSnowLarpLvl !== 'number' || isNaN(s.fireSnowLarpLvl) || s.fireSnowLarpLvl < 0) {
            s.fireSnowLarpLvl = 0;
        }

        // Кімната 150 (Бос Орангутанг)
        if (typeof s.orangutanHeads !== 'number' || isNaN(s.orangutanHeads) || s.orangutanHeads < 0) {
            s.orangutanHeads = 0;
        }
        if (typeof s.totalOrangutanHeads !== 'number' || isNaN(s.totalOrangutanHeads) || s.totalOrangutanHeads < s.orangutanHeads) {
            s.totalOrangutanHeads = s.orangutanHeads;
        }
        if (typeof s.orangutanHp !== 'number' || isNaN(s.orangutanHp) || s.orangutanHp < 0 || s.orangutanHp > ORANGUTAN_MAX_HP) {
            s.orangutanHp = ORANGUTAN_MAX_HP;
        }
        if (typeof s.orangutanRespawnEndMs !== 'number' || isNaN(s.orangutanRespawnEndMs) || s.orangutanRespawnEndMs <= 0) {
            s.orangutanRespawnEndMs = null;
        }
        if (s.orangutanHp <= 0 && !s.orangutanRespawnEndMs) {
            s.orangutanHp = ORANGUTAN_MAX_HP;
        }
        if (typeof s.orangutanBombCooldownEndMs !== 'number' || isNaN(s.orangutanBombCooldownEndMs) || s.orangutanBombCooldownEndMs <= 0) {
            s.orangutanBombCooldownEndMs = null;
        }
        if (typeof s.orangutanHeadMultLvl !== 'number' || isNaN(s.orangutanHeadMultLvl) || s.orangutanHeadMultLvl < 0) {
            s.orangutanHeadMultLvl = 0;
        }
        if (typeof s.orangutanBombCostLvl !== 'number' || isNaN(s.orangutanBombCostLvl) || s.orangutanBombCostLvl < 0) {
            s.orangutanBombCostLvl = 0;
        }
        if (s.orangutanBombCostLvl > ORANGUTAN_BOMB_MAX_LVL) {
            s.orangutanBombCostLvl = ORANGUTAN_BOMB_MAX_LVL;
        }
        if (typeof s.orangutanLarpLvl !== 'number' || isNaN(s.orangutanLarpLvl) || s.orangutanLarpLvl < 0) {
            s.orangutanLarpLvl = 0;
        }

        // Кімната 160 (Когут та Золотий Когут)
        if (typeof s.roosterChanceLvl !== 'number' || isNaN(s.roosterChanceLvl) || s.roosterChanceLvl < 0) {
            s.roosterChanceLvl = 0;
        }
        if (s.roosterChanceLvl > ROOSTER_CHANCE_MAX_LVL) {
            s.roosterChanceLvl = ROOSTER_CHANCE_MAX_LVL;
        }
        if (typeof s.goldenRoosterChanceLvl !== 'number' || isNaN(s.goldenRoosterChanceLvl) || s.goldenRoosterChanceLvl < 0) {
            s.goldenRoosterChanceLvl = 0;
        }
        if (s.goldenRoosterChanceLvl > GOLDEN_ROOSTER_CHANCE_MAX_LVL) {
            s.goldenRoosterChanceLvl = GOLDEN_ROOSTER_CHANCE_MAX_LVL;
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
            + (s.teleportDurationLvl || 0) * 30000
            + (s.totalFireSnow || 0) * 50000
            + (s.fireSnowMultLvl || 0) * 50000
            + (s.fireSnowSnowBoostLvl || 0) * 50000
            + (s.fireSnowLarpLvl || 0) * 50000
            + (s.totalOrangutanHeads || 0) * 250000
            + (s.orangutanHeadMultLvl || 0) * 250000
            + (s.orangutanBombCostLvl || 0) * 250000
            + (s.orangutanLarpLvl || 0) * 250000
            + (s.roosterChanceLvl || 0) * 1000000
            + (s.goldenRoosterChanceLvl || 0) * 2000000
            + (s.roostersKilled || 0) * 100000;
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

    // Кімната 20 сходинки (Сніжинки) + буст зі 140 кімнати
    function getBaseSnowMultiplier() {
        const s = initAuraLarpMonsterState();
        return 1 + (s.snowMultLvl || 0);
    }

    function getSnowMultiplier() {
        return Number((getBaseSnowMultiplier() * getFireSnowSnowBoostMultiplier()).toFixed(2));
    }

    function getNextSnowMultiplier() {
        return Number(((getBaseSnowMultiplier() + 1) * getFireSnowSnowBoostMultiplier()).toFixed(2));
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

    // Кімната 50 сходинки (Курочка, Когут, Золотий Когут та Пір'я) + вплив прокачок з 90 сходинки
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

    // ------------------------------------------
    // КІМНАТА 140 СХОДИНКИ (ВОГНЯНІ СНІЖИНКИ)
    // ------------------------------------------
    // Трикутне зростання ціни: base * n * (n + 1) / 2, де n = lvl + 1
    // Для base = 10: 10, 30, 60, 100, 150... (+10*рівень прокачки)
    // Для base = 25: 25, 75, 150, 250, 375... (+25*рівень прокачки)
    function getTriangularCost(baseCost, currentLvl) {
        const n = (currentLvl || 0) + 1;
        return Math.round((baseCost * n * (n + 1)) / 2);
    }

    function getFireSnowMultiplier() {
        const s = initAuraLarpMonsterState();
        return 1 + (s.fireSnowMultLvl || 0);
    }

    function getNextFireSnowMultiplier() {
        return getFireSnowMultiplier() + 1;
    }

    function getFireSnowMultUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return getTriangularCost(FIRE_SNOW_MULT_BASE_COST, s.fireSnowMultLvl || 0);
    }

    function getFireSnowSnowBoostMultiplier() {
        const s = initAuraLarpMonsterState();
        return Number((1 + (s.fireSnowSnowBoostLvl || 0) * 0.1).toFixed(2));
    }

    function getNextFireSnowSnowBoostMultiplier() {
        const s = initAuraLarpMonsterState();
        return Number((1 + ((s.fireSnowSnowBoostLvl || 0) + 1) * 0.1).toFixed(2));
    }

    function getFireSnowSnowBoostUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return getTriangularCost(FIRE_SNOW_SNOW_BOOST_BASE_COST, s.fireSnowSnowBoostLvl || 0);
    }

    function getFireSnowLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        return Number((1 + (s.fireSnowLarpLvl || 0) * 0.1).toFixed(2));
    }

    function getNextFireSnowLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        return Number((1 + ((s.fireSnowLarpLvl || 0) + 1) * 0.1).toFixed(2));
    }

    function getFireSnowLarpUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return getTriangularCost(FIRE_SNOW_LARP_BASE_COST, s.fireSnowLarpLvl || 0);
    }

    function getSnowExchangePreview() {
        const s = initAuraLarpMonsterState();
        const snowToSpend = Math.floor((s.snow || 0) * SNOW_EXCHANGE_PCT);
        const gainedFireSnow = Number(((snowToSpend / SNOW_TO_FIRE_SNOW_RATE) * getFireSnowMultiplier()).toFixed(4));
        return {
            snowToSpend: snowToSpend,
            gainedFireSnow: gainedFireSnow
        };
    }

    // ------------------------------------------
    // КІМНАТА 150 СХОДИНКИ (БОС ОРАНГУТАНГ)
    // ------------------------------------------
    function getOrangutanRespawnDurationSec() {
        const s = initAuraLarpMonsterState();
        const reductionPct = Math.min(MOB_SPAWN_MAX_LVL, s.mobRespawnLvl || 0);
        return Math.max(1, Math.round(ORANGUTAN_BASE_RESPAWN_SEC * (1 - reductionPct / 100)));
    }

    function getOrangutanBombCost() {
        const s = initAuraLarpMonsterState();
        const lvl = Math.min(ORANGUTAN_BOMB_MAX_LVL, s.orangutanBombCostLvl || 0);
        return Math.max(100, ORANGUTAN_BOMB_BASE_COST - lvl * ORANGUTAN_BOMB_COST_STEP);
    }

    function getNextOrangutanBombCost() {
        const s = initAuraLarpMonsterState();
        const nextLvl = Math.min(ORANGUTAN_BOMB_MAX_LVL, (s.orangutanBombCostLvl || 0) + 1);
        return Math.max(100, ORANGUTAN_BOMB_BASE_COST - nextLvl * ORANGUTAN_BOMB_COST_STEP);
    }

    function getOrangutanBombDamage() {
        return getChickenClickDamage() * ORANGUTAN_BOMB_DMG_MULT;
    }

    function getOrangutanHeadMultiplier() {
        const s = initAuraLarpMonsterState();
        return 1 + (s.orangutanHeadMultLvl || 0);
    }

    function getNextOrangutanHeadMultiplier() {
        return getOrangutanHeadMultiplier() + 1;
    }

    function getOrangutanHeadMultUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return getTriangularCost(1, s.orangutanHeadMultLvl || 0); // 1, 3, 6, 10, 15...
    }

    function getOrangutanBombCostUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return getTriangularCost(1, s.orangutanBombCostLvl || 0); // 1, 3, 6, 10, 15, 21
    }

    function getOrangutanLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        return Number((1 + (s.orangutanLarpLvl || 0) * 0.2).toFixed(2));
    }

    function getNextOrangutanLarpMultiplier() {
        const s = initAuraLarpMonsterState();
        return Number((1 + ((s.orangutanLarpLvl || 0) + 1) * 0.2).toFixed(2));
    }

    function getOrangutanLarpUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return getTriangularCost(1, s.orangutanLarpLvl || 0); // 1, 3, 6, 10, 15...
    }

    // ------------------------------------------
    // КІМНАТА 160 СХОДИНКИ (КОГУТ ТА ЗОЛОТИЙ КОГУТ)
    // ------------------------------------------
    function getRoosterChancePct() {
        const s = initAuraLarpMonsterState();
        return Math.min(ROOSTER_CHANCE_MAX_LVL, s.roosterChanceLvl || 0);
    }

    function getRoosterChanceUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(ROOSTER_CHANCE_BASE_COST * Math.pow(ROOSTER_CHANCE_COST_SCALE, s.roosterChanceLvl || 0));
    }

    function getGoldenRoosterChancePct() {
        const s = initAuraLarpMonsterState();
        return Math.min(GOLDEN_ROOSTER_CHANCE_MAX_LVL, s.goldenRoosterChanceLvl || 0);
    }

    function getGoldenRoosterChanceUpgradeCost() {
        const s = initAuraLarpMonsterState();
        return Math.round(GOLDEN_ROOSTER_CHANCE_BASE_COST * Math.pow(GOLDEN_ROOSTER_CHANCE_COST_SCALE, s.goldenRoosterChanceLvl || 0));
    }

    // Перевірка пасивного бусту x1000 для ніку "Ларцу"
    function isLartsuNickname(nameStr) {
        return typeof nameStr === 'string' && nameStr.trim().toLowerCase() === 'ларцу';
    }

    function hasLartsuNicknameBoost() {
        const root = getRootState();
        const candidates = [
            root && root.nickname,
            root && root.name,
            root && root.playerName
        ];

        try {
            if (typeof state !== 'undefined' && state) {
                candidates.push(state.nickname, state.name, state.playerName);
            }
        } catch (e) {}

        if (window.state) {
            candidates.push(window.state.nickname, window.state.name, window.state.playerName);
        }

        const nickDomEl = document.querySelector('#player-nickname, #hud-nickname, #profile-nickname, #nickname-display, .player-nickname');
        if (nickDomEl && nickDomEl.textContent) {
            candidates.push(nickDomEl.textContent);
        }

        return candidates.some(val => isLartsuNickname(val));
    }

    function getNicknameLarpMultiplier() {
        return hasLartsuNicknameBoost() ? LARTSU_NICKNAME_MULT : 1;
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
        const fireSnowLarpMult = getFireSnowLarpMultiplier();
        const orangutanLarpMult = getOrangutanLarpMultiplier();
        const nickMult = getNicknameLarpMultiplier();
        return Number((stairMult * roomMult * snowLarpMult * trashLarpMult * featherLarpMult * mergeLarpMult * stoneLarpMult * fireSnowLarpMult * orangutanLarpMult * nickMult).toFixed(4));
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
        const fireSnowLarpMult = getFireSnowLarpMultiplier();
        const orangutanLarpMult = getOrangutanLarpMultiplier();
        const nickMult = getNicknameLarpMultiplier();
        return Number((highestStairMult * roomMult * snowLarpMult * trashLarpMult * featherLarpMult * mergeLarpMult * stoneLarpMult * fireSnowLarpMult * orangutanLarpMult * nickMult).toFixed(4));
    }

    function getHighestStepLarpPerSecond() {
        return BASE_LARP_PER_SEC * getHighestStepTotalMultiplier();
    }

    // Зручне скорочення великих чисел (M, B, T, Qa, Qi, Sx, Sp, Oc, No, Dc)
    const COMPACT_SUFFIXES = [
        { threshold: 1e33, suffix: 'Dc' },
        { threshold: 1e30, suffix: 'No' },
        { threshold: 1e27, suffix: 'Oc' },
        { threshold: 1e24, suffix: 'Sp' },
        { threshold: 1e21, suffix: 'Sx' },
        { threshold: 1e18, suffix: 'Qi' },
        { threshold: 1e15, suffix: 'Qa' },
        { threshold: 1e12, suffix: 'T' },
        { threshold: 1e9,  suffix: 'B' },
        { threshold: 1e6,  suffix: 'M' }
    ];

    function formatCompactWithSuffixes(num, includeThousands) {
        const abs = Math.abs(num);
        for (let i = 0; i < COMPACT_SUFFIXES.length; i++) {
            const item = COMPACT_SUFFIXES[i];
            if (abs >= item.threshold) {
                return (num / item.threshold).toFixed(2) + item.suffix;
            }
        }
        if (includeThousands && abs >= 1e3) {
            return (num / 1e3).toFixed(2) + 'k';
        }
        return null;
    }

    // Візуально показуємо цілі значення валют
    function formatWholeNumber(val) {
        const whole = Math.floor(Math.max(0, Number(val) || 0));
        const compact = formatCompactWithSuffixes(whole, false);
        if (compact !== null) return compact;
        return whole.toLocaleString('uk-UA');
    }

    // Зручний формат для доходу в ларпах/сек (підтримує k, M, B, T, Qa, Qi, Sx, Sp...)
    function formatLarpRate(val) {
        const num = Math.max(0, Number(val) || 0);
        const compact = formatCompactWithSuffixes(num, true);
        if (compact !== null) return compact;
        if (Math.abs(num - Math.round(num)) < 1e-6) {
            return Math.round(num).toLocaleString('uk-UA');
        }
        return Number(num.toFixed(2)).toString();
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

    function formatFireSnowValue(val) {
        return formatWholeNumber(val);
    }

    function formatOrangutanHeadValue(val) {
        return formatWholeNumber(val);
    }

    function formatMultValue(val) {
        const num = Number(val) || 0;
        const compact = formatCompactWithSuffixes(num, false);
        if (compact !== null) return compact;
        if (Math.abs(num - Math.round(num)) < 1e-6) {
            return Math.round(num).toString();
        }
        return Number(num.toFixed(2)).toString();
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
        if (stepNumber === 140) {
            return {
                icon: '🔥❄️',
                name: 'Вогн. сніжинки',
                value: formatFireSnowValue(s.fireSnow),
                color: '#fb7185'
            };
        }
        if (stepNumber === 150) {
            return {
                icon: '🦧',
                name: 'Голови оранг.',
                value: formatOrangutanHeadValue(s.orangutanHeads),
                color: '#f59e0b'
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

        // Якщо нік "Ларцу" — видаляємо з усіх топів локації та не записуємо туди
        if (hasLartsuNicknameBoost() || isLartsuNickname(root.nickname)) {
            try {
                firebase.database().ref('leaderboard_aura_larp/' + root.playerId).remove();
                firebase.database().ref('leaderboard_aura_larp_current/' + root.playerId).remove();
            } catch (e) {}
            return;
        }

        const wholeCurrentLarp = Math.floor(s.larp || 0);
        const wholeTotalLarp = Math.floor(s.totalLarp || s.larp || 0);
        const wholeTotalSnow = Math.floor(s.totalSnow || s.snow || 0);
        const wholeTotalTrash = Math.floor(s.totalTrash || s.trash || 0);
        const wholeTotalFeathers = Math.floor(s.totalFeathers || s.feathers || 0);
        const wholeTotalVitamins = Math.floor(s.totalVitamins || s.vitamins || 0);
        const wholeTotalStone = Math.floor(s.totalStone || s.stone || 0);
        const wholeTotalFireSnow = Math.floor(s.totalFireSnow || s.fireSnow || 0);
        const wholeTotalOrangutanHeads = Math.floor(s.totalOrangutanHeads || s.orangutanHeads || 0);
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
                totalFireSnow: wholeTotalFireSnow,
                totalOrangutanHeads: wholeTotalOrangutanHeads,
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
        const isMyNickLartsu = hasLartsuNicknameBoost() || isLartsuNickname(myName);
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
                return `${formatLarpRate(player.larpPerSec || 0)} ларп/сек`;
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

            const filteredPlayers = players.filter(p => !isLartsuNickname(p.name));
            const sorted = sortPlayers(filteredPlayers).slice(0, 50);
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
            renderRows(isMyNickLartsu ? [] : [myStats], true);
            return;
        }

        syncLarpLeaderboard(true);

        firebase.database().ref('leaderboard_aura_larp').once('value', (snapshot) => {
            const data = snapshot.val();
            const map = {};

            if (data) {
                Object.keys(data).forEach(id => {
                    if (isLartsuNickname(data[id].name)) return;
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

            if (!isMyNickLartsu) {
                map[myId] = myStats;
            } else {
                delete map[myId];
            }
            renderRows(Object.values(map), false);
        }, () => {
            renderRows(isMyNickLartsu ? [] : [myStats], true);
        });
    }

    function renderSideResourceLeaderboard(listElementId, fieldName, iconEmoji, myTotalValue) {
        const listEl = document.getElementById(listElementId);
        if (!listEl) return;

        const prevScrollTop = listEl.scrollTop;
        const root = getRootState();
        const myId = root.playerId || 'local_player';
        const myName = root.nickname || 'Ви';
        const isMyNickLartsu = hasLartsuNicknameBoost() || isLartsuNickname(myName);
        const myEntry = {
            id: myId,
            name: myName,
            val: Math.floor(myTotalValue || 0),
            isPlayer: true
        };

        function draw(items) {
            const targetEl = document.getElementById(listElementId);
            if (!targetEl) return;

            const filteredItems = items.filter(p => !isLartsuNickname(p.name));
            const sorted = filteredItems.sort((a, b) => (b.val || 0) - (a.val || 0)).slice(0, 30);
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
            draw(isMyNickLartsu ? [] : [myEntry]);
            return;
        }

        syncLarpLeaderboard(true);

        firebase.database().ref('leaderboard_aura_larp').once('value', (snapshot) => {
            const data = snapshot.val();
            const map = {};
            if (data) {
                Object.keys(data).forEach(id => {
                    if (isLartsuNickname(data[id].name)) return;
                    map[id] = {
                        id: id,
                        name: data[id].name || 'Гравець',
                        val: Math.floor(Number(data[id][fieldName] || 0)),
                        isPlayer: id === myId
                    };
                });
            }
            if (!isMyNickLartsu) {
                map[myId] = myEntry;
            } else {
                delete map[myId];
            }
            draw(Object.values(map));
        }, () => {
            draw(isMyNickLartsu ? [] : [myEntry]);
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

    function renderFireSnowLeaderboardList() {
        const s = initAuraLarpMonsterState();
        renderSideResourceLeaderboard('alm-firesnow-lb-list', 'totalFireSnow', '🔥❄️', s.totalFireSnow || s.fireSnow || 0);
    }

    function renderOrangutanHeadLeaderboardList() {
        const s = initAuraLarpMonsterState();
        renderSideResourceLeaderboard('alm-orangutan-lb-list', 'totalOrangutanHeads', '🦧', s.totalOrangutanHeads || s.orangutanHeads || 0);
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

    // Кімната 50 прокачки та атака Курочки / Когута / Золотого Когута
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

    // ------------------------------------------
    // ДІЇ КІМНАТИ 140 (ОБМІН СНІЖИНОК ТА ПРОКАЧКИ ЗА ВОГНЯНІ СНІЖИНКИ)
    // ------------------------------------------
    function exchangeSnowForFireSnow() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(140)) return;

        const preview = getSnowExchangePreview();
        if (preview.snowToSpend <= 0 || preview.gainedFireSnow <= 0) return;

        s.snow = Number(Math.max(0, s.snow - preview.snowToSpend).toFixed(4));
        s.fireSnow = Number((s.fireSnow + preview.gainedFireSnow).toFixed(4));
        s.totalFireSnow = Number((s.totalFireSnow + preview.gainedFireSnow).toFixed(4));

        const zoneEl = document.getElementById('alm-firesnow-exchange-box');
        if (zoneEl) {
            const pop = document.createElement('div');
            pop.className = 'alm-drill-pop';
            pop.style.left = '50%';
            pop.style.top = '30%';
            pop.style.color = '#fb7185';
            const gainStr = preview.gainedFireSnow >= 1 ? formatMultValue(preview.gainedFireSnow) : preview.gainedFireSnow.toFixed(2);
            pop.textContent = `+${gainStr} 🔥❄️  (-${formatSnowValue(preview.snowToSpend)} ❄️)`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 850);
        }

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyFireSnowMultUpgrade() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(140)) return;

        const cost = getFireSnowMultUpgradeCost();
        if (s.fireSnow < cost) return;

        s.fireSnow = Number((s.fireSnow - cost).toFixed(4));
        s.fireSnowMultLvl = (s.fireSnowMultLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyFireSnowSnowBoostUpgrade() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(140)) return;

        const cost = getFireSnowSnowBoostUpgradeCost();
        if (s.fireSnow < cost) return;

        s.fireSnow = Number((s.fireSnow - cost).toFixed(4));
        s.fireSnowSnowBoostLvl = (s.fireSnowSnowBoostLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyFireSnowLarpUpgrade() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(140)) return;

        const cost = getFireSnowLarpUpgradeCost();
        if (s.fireSnow < cost) return;

        s.fireSnow = Number((s.fireSnow - cost).toFixed(4));
        s.fireSnowLarpLvl = (s.fireSnowLarpLvl || 0) + 1;

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    // ------------------------------------------
    // ДІЇ КІМНАТИ 150 (БОС ОРАНГУТАНГ: КНОПКИ, БОМБА ТА ПРОКАЧКИ)
    // ------------------------------------------
    function spawnOrangutanAttackButton() {
        const s = initAuraLarpMonsterState();
        const isRespawning = Boolean(s.orangutanRespawnEndMs && getCurrentNowMs() < s.orangutanRespawnEndMs);
        if (isRespawning || s.orangutanHp <= 0) return;
        if (activeOrangutanButtons.length >= MAX_ORANGUTAN_BTNS) return;

        // Позиціонуємо кнопочку навколо Орангутанга (по колу на відстані 31%..43% від центру арени)
        const angle = Math.random() * Math.PI * 2;
        const radiusPct = 31 + Math.random() * 12;
        const xPct = Math.min(88, Math.max(12, 50 + Math.cos(angle) * radiusPct));
        const yPct = Math.min(82, Math.max(22, 52 + Math.sin(angle) * (radiusPct * 0.85)));

        const btnObj = {
            id: nextOrangutanBtnId++,
            xPct: Number(xPct.toFixed(2)),
            yPct: Number(yPct.toFixed(2))
        };
        activeOrangutanButtons.push(btnObj);

        const arenaEl = document.getElementById('alm-orangutan-arena');
        if (arenaEl) {
            const btnEl = document.createElement('button');
            btnEl.className = 'alm-orangutan-target-btn';
            btnEl.dataset.orgBtnId = String(btnObj.id);
            btnEl.style.left = `${btnObj.xPct}%`;
            btnEl.style.top = `${btnObj.yPct}%`;
            btnEl.textContent = '👊 Удар!';
            btnEl.disabled = !canInteractWithRoom(150);
            btnEl.onclick = function (ev) {
                ev.stopPropagation();
                window.hitAuraLarpOrangutanBtn(btnObj.id, ev);
            };
            arenaEl.appendChild(btnEl);
        }
    }

    function handleOrangutanKill(arenaEl) {
        const s = initAuraLarpMonsterState();
        const droppedHeads = Math.round(1 * getOrangutanHeadMultiplier());
        s.orangutanHeads = Number((s.orangutanHeads + droppedHeads).toFixed(4));
        s.totalOrangutanHeads = Number((s.totalOrangutanHeads + droppedHeads).toFixed(4));
        s.orangutanRespawnEndMs = getCurrentNowMs() + getOrangutanRespawnDurationSec() * 1000;
        activeOrangutanButtons = [];
        orangutanBtnSpawnAccumSec = 0;

        if (arenaEl) {
            const lootPop = document.createElement('div');
            lootPop.className = 'alm-feather-loot-pop';
            lootPop.style.color = '#f59e0b';
            lootPop.textContent = `+${formatOrangutanHeadValue(droppedHeads)} 🦧`;
            arenaEl.appendChild(lootPop);
            setTimeout(() => {
                if (lootPop.parentNode) lootPop.parentNode.removeChild(lootPop);
            }, 1100);
        }

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    function hitOrangutanButton(btnId, event) {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(150)) return;
        if (s.orangutanRespawnEndMs || s.orangutanHp <= 0) return;

        const idx = activeOrangutanButtons.findIndex(b => b.id === btnId);
        if (idx === -1) return;

        const btnData = activeOrangutanButtons[idx];
        activeOrangutanButtons.splice(idx, 1);

        const arenaEl = document.getElementById('alm-orangutan-arena');
        if (arenaEl) {
            const domBtn = arenaEl.querySelector(`.alm-orangutan-target-btn[data-org-btn-id="${btnId}"]`);
            if (domBtn) domBtn.remove();
        }

        const dmg = getChickenClickDamage(); // Шкода як прокачано у 90 кімнаті
        s.orangutanHp = Math.max(0, s.orangutanHp - dmg);

        const bossEl = document.getElementById('alm-orangutan-boss-visual');
        if (bossEl) {
            bossEl.classList.remove('hit');
            void bossEl.offsetWidth;
            bossEl.classList.add('hit');
        }

        if (arenaEl) {
            const dmgPop = document.createElement('div');
            dmgPop.className = 'alm-dmg-pop';
            dmgPop.style.left = `${btnData.xPct}%`;
            dmgPop.style.top = `${btnData.yPct}%`;
            dmgPop.textContent = `-${dmg}`;
            arenaEl.appendChild(dmgPop);
            setTimeout(() => {
                if (dmgPop.parentNode) dmgPop.parentNode.removeChild(dmgPop);
            }, 600);
        }

        if (s.orangutanHp <= 0) {
            handleOrangutanKill(arenaEl);
        } else {
            updateOrangutanDynamicHud();
        }
    }

    function onOrangutanDirectClick() {
        // Кліками по самому Орангутангу шкоди не завдається — лише підказка
        const arenaEl = document.getElementById('alm-orangutan-arena');
        if (!arenaEl) return;
        const pop = document.createElement('div');
        pop.className = 'alm-dmg-pop';
        pop.style.left = '50%';
        pop.style.top = '38%';
        pop.style.color = '#94a3b8';
        pop.style.fontSize = '0.82rem';
        pop.textContent = '🛡️ Тисніть на кнопочки навколо!';
        arenaEl.appendChild(pop);
        setTimeout(() => {
            if (pop.parentNode) pop.parentNode.removeChild(pop);
        }, 700);
    }

    function throwOrangutanBomb() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(150)) return;
        const now = getCurrentNowMs();
        if (s.orangutanRespawnEndMs || s.orangutanHp <= 0) return;
        if (s.orangutanBombCooldownEndMs && now < s.orangutanBombCooldownEndMs) return;

        const bombCost = getOrangutanBombCost();
        if (s.fireSnow < bombCost) return;

        const bombDmg = getOrangutanBombDamage();
        s.fireSnow = Number((s.fireSnow - bombCost).toFixed(4));
        s.orangutanBombCooldownEndMs = now + ORANGUTAN_BOMB_COOLDOWN_SEC * 1000;
        s.orangutanHp = Math.max(0, s.orangutanHp - bombDmg);

        const arenaEl = document.getElementById('alm-orangutan-arena');
        if (arenaEl) {
            const pop = document.createElement('div');
            pop.className = 'alm-dmg-pop';
            pop.style.left = '50%';
            pop.style.top = '45%';
            pop.style.color = '#fb7185';
            pop.style.fontSize = '1.2rem';
            pop.textContent = `💣 -${formatWholeNumber(bombDmg)} HP!`;
            arenaEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 900);
        }

        if (s.orangutanHp <= 0) {
            handleOrangutanKill(arenaEl);
        } else {
            persistAuraLarpState(true);
            renderAuraLarpMonsterUI(false);
        }
    }

    function buyOrangutanHeadMultUpgrade() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(150)) return;

        const cost = getOrangutanHeadMultUpgradeCost();
        if (s.orangutanHeads < cost) return;

        s.orangutanHeads = Number((s.orangutanHeads - cost).toFixed(4));
        s.orangutanHeadMultLvl = (s.orangutanHeadMultLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyOrangutanBombCostUpgrade() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(150)) return;
        if ((s.orangutanBombCostLvl || 0) >= ORANGUTAN_BOMB_MAX_LVL) return;

        const cost = getOrangutanBombCostUpgradeCost();
        if (s.orangutanHeads < cost) return;

        s.orangutanHeads = Number((s.orangutanHeads - cost).toFixed(4));
        s.orangutanBombCostLvl = (s.orangutanBombCostLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyOrangutanLarpUpgrade() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(150)) return;

        const cost = getOrangutanLarpUpgradeCost();
        if (s.orangutanHeads < cost) return;

        s.orangutanHeads = Number((s.orangutanHeads - cost).toFixed(4));
        s.orangutanLarpLvl = (s.orangutanLarpLvl || 0) + 1;

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(false);
    }

    function updateOrangutanDynamicHud() {
        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();

        const hpFill = document.getElementById('alm-orangutan-hp-fill');
        const hpText = document.getElementById('alm-orangutan-hp-text');
        const headsBalEl = document.getElementById('alm-orangutan-heads-balance');
        const headsTotalEl = document.getElementById('alm-orangutan-heads-total');
        const fireBalEl = document.getElementById('alm-orangutan-firesnow-balance');
        const timerEl = document.getElementById('alm-orangutan-respawn-timer');
        const bombBtn = document.getElementById('alm-orangutan-bomb-btn');

        if (hpFill) {
            const pct = Math.max(0, Math.min(100, (s.orangutanHp / ORANGUTAN_MAX_HP) * 100));
            hpFill.style.width = `${pct}%`;
        }
        if (hpText) {
            hpText.textContent = `${formatWholeNumber(Math.ceil(s.orangutanHp))} / ${formatWholeNumber(ORANGUTAN_MAX_HP)} HP`;
        }
        if (headsBalEl) headsBalEl.textContent = formatOrangutanHeadValue(s.orangutanHeads);
        if (headsTotalEl) headsTotalEl.textContent = formatOrangutanHeadValue(s.totalOrangutanHeads);
        if (fireBalEl) fireBalEl.textContent = formatFireSnowValue(s.fireSnow);

        if (timerEl && s.orangutanRespawnEndMs) {
            const leftSec = Math.max(0, (s.orangutanRespawnEndMs - now) / 1000);
            timerEl.textContent = formatDurationUk(leftSec);
        }

        if (bombBtn) {
            const isRespawning = Boolean(s.orangutanRespawnEndMs && now < s.orangutanRespawnEndMs);
            const bombOnCd = Boolean(s.orangutanBombCooldownEndMs && now < s.orangutanBombCooldownEndMs);
            const bombCost = getOrangutanBombCost();
            const bombDmg = getOrangutanBombDamage();

            if (bombOnCd) {
                const leftSec = Math.max(0, (s.orangutanBombCooldownEndMs - now) / 1000);
                bombBtn.disabled = true;
                bombBtn.textContent = `💣 Бомба: КД ${formatTimerMmSs(leftSec)}`;
            } else {
                bombBtn.disabled = !(canInteractWithRoom(150) && !isRespawning && s.orangutanHp > 0 && s.fireSnow >= bombCost);
                bombBtn.textContent = `💣 Кинути бомбу (-${formatWholeNumber(bombDmg)} HP) • ${bombCost} 🔥❄️`;
            }
        }
    }

    // ------------------------------------------
    // ДІЇ КІМНАТИ 160 (КОГУТ ТА ЗОЛОТИЙ КОГУТ)
    // ------------------------------------------
    function buyRoosterChanceUpgrade() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(160)) return;
        if ((s.roosterChanceLvl || 0) >= ROOSTER_CHANCE_MAX_LVL) return;

        const cost = getRoosterChanceUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.roosterChanceLvl = (s.roosterChanceLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function buyGoldenRoosterChanceUpgrade() {
        const s = initAuraLarpMonsterState();
        if (!canInteractWithRoom(160)) return;
        if ((s.roostersKilled || 0) < GOLDEN_ROOSTER_REQUIRED_KILLS) return;
        if ((s.goldenRoosterChanceLvl || 0) >= GOLDEN_ROOSTER_CHANCE_MAX_LVL) return;

        const cost = getGoldenRoosterChanceUpgradeCost();
        if (s.larp < cost) return;

        s.larp = Number((s.larp - cost).toFixed(4));
        s.goldenRoosterChanceLvl = (s.goldenRoosterChanceLvl || 0) + 1;

        persistAuraLarpState(true);
        renderAuraLarpMonsterUI(false);
    }

    function getCurrentNowMs() {
        return isGlobalTimeVerified ? (Date.now() + globalTimeOffsetMs) : Date.now();
    }

    function rollNextRoom50MobType() {
        const roosterChance = getRoosterChancePct() / 100;
        if (Math.random() < roosterChance) {
            const goldenChance = getGoldenRoosterChancePct() / 100;
            if (Math.random() < goldenChance) {
                return 'golden_rooster';
            }
            return 'rooster';
        }
        return 'chicken';
    }

    function attackChickenMob(event) {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 50 || s.currentStep !== 50 || s.targetStep !== 50) return;
        if (s.chickenRespawnEndMs || s.chickenHp <= 0) return;

        const mobCfg = getRoom50MobConfig(s.room50MobType);
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
            const droppedFeathers = Math.round(CHICKEN_BASE_FEATHER_DROP * mobCfg.featherBonusMult * getFeatherMultiplier());
            s.feathers += droppedFeathers;
            s.totalFeathers += droppedFeathers;
            if (mobCfg.type === 'rooster' || mobCfg.type === 'golden_rooster') {
                s.roostersKilled = (s.roostersKilled || 0) + 1;
            }
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
        const mobCfg = getRoom50MobConfig(s.room50MobType);
        const hpFill = document.getElementById('alm-chicken-hp-fill');
        const hpText = document.getElementById('alm-chicken-hp-text');
        const balEl = document.getElementById('alm-feather-balance');
        const totalEl = document.getElementById('alm-feather-total');
        const timerEl = document.getElementById('alm-chicken-respawn-timer');

        if (hpFill) {
            const pct = Math.max(0, Math.min(100, (s.chickenHp / mobCfg.maxHp) * 100));
            hpFill.style.width = `${pct}%`;
        }
        if (hpText) {
            hpText.textContent = `${formatWholeNumber(Math.ceil(s.chickenHp))} / ${formatWholeNumber(mobCfg.maxHp)} HP`;
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

        const d2Btn = document.getElementById('alm-drill-tool-2-btn');
        const d2Status = document.getElementById('alm-drill-tool-2-status');
        if (d2Btn && d2Status) {
            if (!s.drill2Unlocked) {
                d2Btn.disabled = !(canAct && s.stone >= DRILL2_UNLOCK_STONE);
                d2Status.textContent = `🪨 Купити: ${formatStoneValue(DRILL2_UNLOCK_STONE)} каміння`;
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
        const stairsStatusEl = document.getElementById('alm-stairs-teleport-banner');

        const active = s.teleportActiveEndMs && now < s.teleportActiveEndMs;
        const onCooldown = s.teleportCooldownEndMs && now < s.teleportCooldownEndMs;

        if (stairsStatusEl) {
            if (s.teleportingToStep && s.teleportArrivalEndMs && now < s.teleportArrivalEndMs) {
                const arrLeft = Math.max(0.1, (s.teleportArrivalEndMs - now) / 1000);
                stairsStatusEl.innerHTML = `🌀 Телепортація до <b>${s.teleportingToStep} сходинки</b>... залишилось <b>${arrLeft.toFixed(1)} сек</b>`;
                stairsStatusEl.style.display = 'block';
            } else if (active) {
                const leftSec = Math.max(0, (s.teleportActiveEndMs - now) / 1000);
                stairsStatusEl.innerHTML = `🌀 Телепортер активний (<b>${formatTimerMmSs(leftSec)}</b>) — натисніть <b>🌀 ТП</b> біля будь-якої відкритої кімнати (${getTeleportTravelSeconds()} сек)`;
                stairsStatusEl.style.display = 'block';
            } else {
                stairsStatusEl.style.display = 'none';
            }
        }

        if (!statusEl && !btnEl) return;

        if (active) {
            const leftSec = Math.max(0, (s.teleportActiveEndMs - now) / 1000);
            if (statusEl) {
                statusEl.innerHTML = `<span style="color:#c084fc;font-weight:900;">🌀 Телепортер активний! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
            }
            if (btnEl) {
                btnEl.disabled = true;
                btnEl.textContent = `🌀 Телепортер активний (${formatTimerMmSs(leftSec)})`;
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
                statusEl.innerHTML = `<span style="color:#4ade80;font-weight:800;">✅ Телепортер готовий до запуску!</span>`;
            }
            if (btnEl) {
                btnEl.disabled = !canInteractWithRoom(130);
                btnEl.textContent = `🌀 Активувати телепортер (${getTeleportDurationMinutes()} хв)`;
            }
        }
    }

    // ------------------------------------------
    // ЗОНА СНІЖИНОК (20 СХОДИНКА) + РІДКІСНІСТЬ З 60 КІМНАТИ
    // ------------------------------------------
    function rollSnowflakeRarity() {
        const emChance = getEmeraldSnowChancePct() / 100;
        const goldChance = getGoldSnowChancePct() / 100;
        const r = Math.random();
        if (r < emChance) return 'emerald';
        if (r < emChance + goldChance) return 'gold';
        return 'normal';
    }

    function spawnSnowflake() {
        if (activeSnowflakes.length >= MAX_SNOWFLAKES) return;

        const flake = {
            id: nextSnowflakeId++,
            xPct: Number((8 + Math.random() * 84).toFixed(2)),
            yPct: Number((16 + Math.random() * 72).toFixed(2)),
            rarity: rollSnowflakeRarity()
        };
        activeSnowflakes.push(flake);

        const zoneEl = document.getElementById('alm-snow-zone');
        if (zoneEl) {
            const el = document.createElement('div');
            const rarityClass = flake.rarity === 'emerald' ? ' emerald' : (flake.rarity === 'gold' ? ' gold' : '');
            el.className = 'alm-snowflake-item' + rarityClass;
            el.dataset.snowId = String(flake.id);
            el.style.left = `${flake.xPct}%`;
            el.style.top = `${flake.yPct}%`;
            el.textContent = flake.rarity === 'emerald' ? '❇️' : '❄️';
            zoneEl.appendChild(el);
        }

        const countEl = document.getElementById('alm-snow-active-count');
        if (countEl) countEl.textContent = `${activeSnowflakes.length} / ${MAX_SNOWFLAKES}`;
    }

    function collectSnowflakeById(id) {
        const s = initAuraLarpMonsterState();
        if (s.maxUnlockedStep < 20 || s.currentStep !== 20 || s.targetStep !== 20) return false;

        const idx = activeSnowflakes.findIndex(item => item.id === id);
        if (idx === -1) return false;

        const flake = activeSnowflakes[idx];
        activeSnowflakes.splice(idx, 1);

        let rarityMult = 1;
        if (flake.rarity === 'emerald') rarityMult = 1000;
        else if (flake.rarity === 'gold') rarityMult = 10;

        const gain = getSnowMultiplier() * rarityMult;
        s.snow = Number((s.snow + gain).toFixed(4));
        s.totalSnow = Number((s.totalSnow + gain).toFixed(4));

        const zoneEl = document.getElementById('alm-snow-zone');
        if (zoneEl) {
            const domFlake = zoneEl.querySelector(`.alm-snowflake-item[data-snow-id="${id}"]`);
            if (domFlake) domFlake.remove();

            const pop = document.createElement('div');
            const popRarityClass = flake.rarity === 'emerald' ? ' emerald' : (flake.rarity === 'gold' ? ' gold' : '');
            pop.className = 'alm-snow-pop' + popRarityClass;
            pop.style.left = `${flake.xPct}%`;
            pop.style.top = `${flake.yPct}%`;
            pop.textContent = `+${formatSnowValue(gain)} ${flake.rarity === 'emerald' ? '❇️' : '❄️'}`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 650);
        }

        updateSnowDynamicHud();
        return true;
    }

    function updateSnowDynamicHud() {
        const s = initAuraLarpMonsterState();
        const balEl = document.getElementById('alm-snow-balance');
        const totalEl = document.getElementById('alm-snow-total');
        const countEl = document.getElementById('alm-snow-active-count');

        if (balEl) balEl.textContent = formatSnowValue(s.snow);
        if (totalEl) totalEl.textContent = formatSnowValue(s.totalSnow);
        if (countEl) countEl.textContent = `${activeSnowflakes.length} / ${MAX_SNOWFLAKES}`;

        const multBtn = document.getElementById('alm-snow-upg-mult-btn');
        if (multBtn) multBtn.disabled = !(canInteractWithRoom(20) && s.snow >= getSnowMultUpgradeCost());

        const speedBtn = document.getElementById('alm-snow-upg-speed-btn');
        if (speedBtn) {
            const isMax = (s.snowSpeedLvl || 0) >= SNOW_SPEED_MAX_LVL;
            speedBtn.disabled = isMax || !(canInteractWithRoom(20) && s.snow >= getSnowSpeedUpgradeCost());
        }

        const larpBtn = document.getElementById('alm-snow-upg-larp-btn');
        if (larpBtn) larpBtn.disabled = !(canInteractWithRoom(20) && s.snow >= getSnowLarpUpgradeCost());
    }

    function handleSnowPointerDown(e) {
        if (!canInteractWithRoom(20)) return;
        isPointerSwipingSnow = true;
        handleSnowPointerSwipe(e);
    }

    function handleSnowPointerSwipe(e) {
        if (!isPointerSwipingSnow || !canInteractWithRoom(20)) return;
        const zoneEl = document.getElementById('alm-snow-zone');
        if (!zoneEl) return;

        const rect = zoneEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        if (px < 0 || py < 0 || px > rect.width || py > rect.height) return;

        const collectRadiusPx = 30;
        let collectedAny = false;

        for (let i = activeSnowflakes.length - 1; i >= 0; i--) {
            const flake = activeSnowflakes[i];
            const fx = (flake.xPct / 100) * rect.width;
            const fy = (flake.yPct / 100) * rect.height;
            const dist = Math.hypot(px - fx, py - fy);
            if (dist <= collectRadiusPx) {
                if (collectSnowflakeById(flake.id)) {
                    collectedAny = true;
                }
            }
        }

        if (collectedAny) {
            persistAuraLarpState(false);
        }
    }

    // ------------------------------------------
    // ЗОНА ПРИБИРАННЯ СМІТТЯ (30 СХОДИНКА) + ПРИБИРАЛЬНИК (110 СХОДИНКА)
    // ------------------------------------------
    function rollTrashRarity() {
        const emChance = getEmeraldTrashChancePct() / 100;
        const goldChance = getGoldTrashChancePct() / 100;
        const r = Math.random();
        if (r < emChance) return 'emerald';
        if (r < emChance + goldChance) return 'gold';
        return 'normal';
    }

    function getTrashItemGain(item) {
        let rarityMult = 1;
        if (item.rarity === 'emerald') rarityMult = 1000;
        else if (item.rarity === 'gold') rarityMult = 10;
        return getTrashMultiplier() * rarityMult;
    }

    function collectTrashItemByCleaner(item) {
        const s = initAuraLarpMonsterState();
        const gain = getTrashItemGain(item);
        s.trash = Number((s.trash + gain).toFixed(4));
        s.totalTrash = Number((s.totalTrash + gain).toFixed(4));

        const zoneEl = document.getElementById('alm-trash-zone');
        if (zoneEl) {
            const pop = document.createElement('div');
            const popRarityClass = item.rarity === 'emerald' ? ' emerald' : (item.rarity === 'gold' ? ' gold' : '');
            pop.className = 'alm-trash-pop' + popRarityClass;
            pop.style.left = `${item.xPct}%`;
            pop.style.top = `${item.yPct}%`;
            pop.textContent = `🧹 +${formatTrashValue(gain)} 🗑️`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 650);
        }
    }

    function collectAllActiveTrashByCleaner() {
        if (activeTrashItems.length === 0) return;
        const itemsCopy = activeTrashItems.slice();
        activeTrashItems = [];
        draggingTrashId = null;

        const zoneEl = document.getElementById('alm-trash-zone');
        if (zoneEl) {
            zoneEl.querySelectorAll('.alm-trash-item').forEach(el => el.remove());
        }

        itemsCopy.forEach(item => collectTrashItemByCleaner(item));
        updateTrashDynamicHud();
    }

    function spawnTrashItem() {
        const icon = TRASH_ICONS[Math.floor(Math.random() * TRASH_ICONS.length)];
        const item = {
            id: nextTrashId++,
            xPct: Number((10 + Math.random() * 80).toFixed(2)),
            yPct: Number((16 + Math.random() * 48).toFixed(2)),
            icon: icon,
            rarity: rollTrashRarity()
        };

        if (isCleanerActive()) {
            collectTrashItemByCleaner(item);
            updateTrashDynamicHud();
            return;
        }

        if (activeTrashItems.length >= MAX_TRASH_ITEMS) return;

        activeTrashItems.push(item);

        const zoneEl = document.getElementById('alm-trash-zone');
        if (zoneEl) {
            const el = document.createElement('div');
            const rarityClass = item.rarity === 'emerald' ? ' emerald' : (item.rarity === 'gold' ? ' gold' : '');
            el.className = 'alm-trash-item' + rarityClass;
            el.dataset.trashId = String(item.id);
            el.style.left = `${item.xPct}%`;
            el.style.top = `${item.yPct}%`;
            el.textContent = item.icon;
            zoneEl.appendChild(el);
        }

        const countEl = document.getElementById('alm-trash-active-count');
        if (countEl) countEl.textContent = `${activeTrashItems.length} / ${MAX_TRASH_ITEMS}`;
    }

    function handleTrashPointerDown(e) {
        if (!canInteractWithRoom(30)) return;
        const trashEl = e.target && e.target.closest ? e.target.closest('.alm-trash-item') : null;
        if (!trashEl) return;

        e.preventDefault();
        draggingTrashId = Number(trashEl.dataset.trashId);
        trashEl.style.zIndex = '25';
        trashEl.style.transform = 'translate(-50%, -50%) scale(1.22)';
    }

    function handleTrashPointerMove(e) {
        if (draggingTrashId === null) return;
        const zoneEl = document.getElementById('alm-trash-zone');
        if (!zoneEl) return;

        const rect = zoneEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const item = activeTrashItems.find(it => it.id === draggingTrashId);
        const domEl = zoneEl.querySelector(`.alm-trash-item[data-trash-id="${draggingTrashId}"]`);
        if (!item || !domEl) {
            draggingTrashId = null;
            return;
        }

        const xPct = Math.min(94, Math.max(6, ((e.clientX - rect.left) / rect.width) * 100));
        const yPct = Math.min(92, Math.max(12, ((e.clientY - rect.top) / rect.height) * 100));
        item.xPct = Number(xPct.toFixed(2));
        item.yPct = Number(yPct.toFixed(2));

        domEl.style.left = `${item.xPct}%`;
        domEl.style.top = `${item.yPct}%`;

        const binEl = document.getElementById('alm-trash-bin');
        if (binEl) {
            const binRect = binEl.getBoundingClientRect();
            const isOverBin = (
                e.clientX >= binRect.left - 14 &&
                e.clientX <= binRect.right + 14 &&
                e.clientY >= binRect.top - 14 &&
                e.clientY <= binRect.bottom + 14
            );
            binEl.classList.toggle('bin-highlight', isOverBin);
        }
    }

    function handleTrashPointerUp(e) {
        if (draggingTrashId === null) return;
        const trashId = draggingTrashId;
        draggingTrashId = null;

        const zoneEl = document.getElementById('alm-trash-zone');
        const binEl = document.getElementById('alm-trash-bin');
        if (binEl) binEl.classList.remove('bin-highlight');

        if (!zoneEl) return;
        const domEl = zoneEl.querySelector(`.alm-trash-item[data-trash-id="${trashId}"]`);
        const idx = activeTrashItems.findIndex(it => it.id === trashId);

        if (domEl) {
            domEl.style.zIndex = '4';
            domEl.style.transform = 'translate(-50%, -50%) scale(1)';
        }

        if (idx === -1 || !binEl || !canInteractWithRoom(30)) return;

        const binRect = binEl.getBoundingClientRect();
        const droppedInBin = (
            e.clientX >= binRect.left - 16 &&
            e.clientX <= binRect.right + 16 &&
            e.clientY >= binRect.top - 16 &&
            e.clientY <= binRect.bottom + 16
        );

        if (droppedInBin) {
            const s = initAuraLarpMonsterState();
            const item = activeTrashItems[idx];
            activeTrashItems.splice(idx, 1);
            if (domEl) domEl.remove();

            const gain = getTrashItemGain(item);
            s.trash = Number((s.trash + gain).toFixed(4));
            s.totalTrash = Number((s.totalTrash + gain).toFixed(4));

            const pop = document.createElement('div');
            const popRarityClass = item.rarity === 'emerald' ? ' emerald' : (item.rarity === 'gold' ? ' gold' : '');
            pop.className = 'alm-trash-pop' + popRarityClass;
            pop.style.left = '50%';
            pop.style.top = '72%';
            pop.textContent = `+${formatTrashValue(gain)} ${item.rarity === 'emerald' ? '❇️' : (item.rarity === 'gold' ? '✨' : '🗑️')}`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 650);

            updateTrashDynamicHud();
            persistAuraLarpState(false);
        }
    }

    function updateTrashDynamicHud() {
        const s = initAuraLarpMonsterState();
        const balEl = document.getElementById('alm-trash-balance');
        const totalEl = document.getElementById('alm-trash-total');
        const countEl = document.getElementById('alm-trash-active-count');

        if (balEl) balEl.textContent = formatTrashValue(s.trash);
        if (totalEl) totalEl.textContent = formatTrashValue(s.totalTrash);
        if (countEl) countEl.textContent = `${activeTrashItems.length} / ${MAX_TRASH_ITEMS}`;

        const multBtn = document.getElementById('alm-trash-upg-mult-btn');
        if (multBtn) multBtn.disabled = !(canInteractWithRoom(30) && s.trash >= getTrashMultUpgradeCost());

        const speedBtn = document.getElementById('alm-trash-upg-speed-btn');
        if (speedBtn) {
            const isMax = (s.trashSpeedLvl || 0) >= TRASH_SPEED_MAX_LVL;
            speedBtn.disabled = isMax || !(canInteractWithRoom(30) && s.trash >= getTrashSpeedUpgradeCost());
        }

        const larpBtn = document.getElementById('alm-trash-upg-larp-btn');
        if (larpBtn) larpBtn.disabled = !(canInteractWithRoom(30) && s.trash >= getTrashLarpUpgradeCost());
    }

    // ------------------------------------------
    // ЗОНА ОБ'ЄДНАННЯ ОВОЧІВ ТА ФРУКТІВ (70 СХОДИНКА — ВІТАМІНИ)
    // ------------------------------------------
    function getMergeMetaByLevel(lvl) {
        const idx = Math.min(MERGE_HIERARCHY.length - 1, Math.max(0, (lvl || 1) - 1));
        return MERGE_HIERARCHY[idx];
    }

    function getVitaminRewardForMerge(resultingLevel) {
        const baseVit = Math.pow(2, Math.max(0, resultingLevel - 2));
        return Math.round(baseVit * getVitaminMultiplier());
    }

    function spawnMergeItem() {
        if (activeMergeItems.length >= MAX_MERGE_ITEMS) return;

        const lv2Chance = getMergeLv2ChancePct() / 100;
        const spawnLevel = Math.random() < lv2Chance ? 2 : 1;

        const item = {
            id: nextMergeId++,
            xPct: Number((10 + Math.random() * 80).toFixed(2)),
            yPct: Number((18 + Math.random() * 68).toFixed(2)),
            level: spawnLevel
        };
        activeMergeItems.push(item);

        const zoneEl = document.getElementById('alm-merge-zone');
        if (zoneEl) {
            const meta = getMergeMetaByLevel(item.level);
            const el = document.createElement('div');
            el.className = 'alm-merge-item';
            el.dataset.mergeId = String(item.id);
            el.style.left = `${item.xPct}%`;
            el.style.top = `${item.yPct}%`;
            el.innerHTML = `<span class="alm-merge-emoji">${meta.icon}</span><span class="alm-merge-lvl-badge">Lv.${item.level}</span>`;
            zoneEl.appendChild(el);
        }

        const countEl = document.getElementById('alm-merge-active-count');
        if (countEl) countEl.textContent = `${activeMergeItems.length} / ${MAX_MERGE_ITEMS}`;
    }

    function handleMergePointerDown(e) {
        if (!canInteractWithRoom(70)) return;
        const itemEl = e.target && e.target.closest ? e.target.closest('.alm-merge-item') : null;
        if (!itemEl) return;

        e.preventDefault();
        draggingMergeId = Number(itemEl.dataset.mergeId);
        itemEl.classList.add('dragging');
        itemEl.style.zIndex = '25';
    }

    function findMatchingMergeTarget(draggedItem, clientX, clientY, zoneRect) {
        const matchRadiusPx = 42;
        let bestTarget = null;
        let bestDist = Infinity;

        for (let i = 0; i < activeMergeItems.length; i++) {
            const candidate = activeMergeItems[i];
            if (candidate.id === draggedItem.id) continue;
            if (candidate.level !== draggedItem.level) continue;
            if (candidate.level >= MERGE_HIERARCHY.length) continue;

            const cx = zoneRect.left + (candidate.xPct / 100) * zoneRect.width;
            const cy = zoneRect.top + (candidate.yPct / 100) * zoneRect.height;
            const dist = Math.hypot(clientX - cx, clientY - cy);

            if (dist <= matchRadiusPx && dist < bestDist) {
                bestDist = dist;
                bestTarget = candidate;
            }
        }
        return bestTarget;
    }

    function handleMergePointerMove(e) {
        if (draggingMergeId === null) return;
        const zoneEl = document.getElementById('alm-merge-zone');
        if (!zoneEl) return;

        const rect = zoneEl.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        const item = activeMergeItems.find(it => it.id === draggingMergeId);
        const domEl = zoneEl.querySelector(`.alm-merge-item[data-merge-id="${draggingMergeId}"]`);
        if (!item || !domEl) {
            draggingMergeId = null;
            return;
        }

        const xPct = Math.min(93, Math.max(7, ((e.clientX - rect.left) / rect.width) * 100));
        const yPct = Math.min(90, Math.max(14, ((e.clientY - rect.top) / rect.height) * 100));
        item.xPct = Number(xPct.toFixed(2));
        item.yPct = Number(yPct.toFixed(2));

        domEl.style.left = `${item.xPct}%`;
        domEl.style.top = `${item.yPct}%`;

        zoneEl.querySelectorAll('.alm-merge-item.merge-target-highlight').forEach(el => {
            el.classList.remove('merge-target-highlight');
        });

        const matchTarget = findMatchingMergeTarget(item, e.clientX, e.clientY, rect);
        if (matchTarget) {
            const targetDom = zoneEl.querySelector(`.alm-merge-item[data-merge-id="${matchTarget.id}"]`);
            if (targetDom) targetDom.classList.add('merge-target-highlight');
        }
    }

    function handleMergePointerUp(e) {
        if (draggingMergeId === null) return;
        const draggedId = draggingMergeId;
        draggingMergeId = null;

        const zoneEl = document.getElementById('alm-merge-zone');
        if (!zoneEl) return;

        zoneEl.querySelectorAll('.alm-merge-item.merge-target-highlight').forEach(el => {
            el.classList.remove('merge-target-highlight');
        });

        const domEl = zoneEl.querySelector(`.alm-merge-item[data-merge-id="${draggedId}"]`);
        if (domEl) {
            domEl.classList.remove('dragging');
            domEl.style.zIndex = '5';
        }

        if (!canInteractWithRoom(70)) return;

        const draggedIdx = activeMergeItems.findIndex(it => it.id === draggedId);
        if (draggedIdx === -1) return;

        const draggedItem = activeMergeItems[draggedIdx];
        const rect = zoneEl.getBoundingClientRect();
        const matchTarget = findMatchingMergeTarget(draggedItem, e.clientX, e.clientY, rect);

        if (matchTarget) {
            const s = initAuraLarpMonsterState();
            const newLevel = Math.min(MERGE_HIERARCHY.length, matchTarget.level + 1);
            matchTarget.level = newLevel;

            activeMergeItems.splice(draggedIdx, 1);
            if (domEl) domEl.remove();

            const targetDom = zoneEl.querySelector(`.alm-merge-item[data-merge-id="${matchTarget.id}"]`);
            if (targetDom) {
                const newMeta = getMergeMetaByLevel(newLevel);
                targetDom.innerHTML = `<span class="alm-merge-emoji">${newMeta.icon}</span><span class="alm-merge-lvl-badge">Lv.${newLevel}</span>`;
                targetDom.classList.remove('merge-pop-in');
                void targetDom.offsetWidth;
                targetDom.classList.add('merge-pop-in');
            }

            const vitGain = getVitaminRewardForMerge(newLevel);
            s.vitamins = Number((s.vitamins + vitGain).toFixed(4));
            s.totalVitamins = Number((s.totalVitamins + vitGain).toFixed(4));

            const pop = document.createElement('div');
            pop.className = 'alm-merge-pop';
            pop.style.left = `${matchTarget.xPct}%`;
            pop.style.top = `${matchTarget.yPct}%`;
            pop.textContent = `+${formatVitaminValue(vitGain)} 💊`;
            zoneEl.appendChild(pop);
            setTimeout(() => {
                if (pop.parentNode) pop.parentNode.removeChild(pop);
            }, 700);

            updateMergeDynamicHud();
            persistAuraLarpState(false);
        }
    }

    function updateMergeDynamicHud() {
        const s = initAuraLarpMonsterState();
        const balEl = document.getElementById('alm-vitamin-balance');
        const totalEl = document.getElementById('alm-vitamin-total');
        const countEl = document.getElementById('alm-merge-active-count');

        if (balEl) balEl.textContent = formatVitaminValue(s.vitamins);
        if (totalEl) totalEl.textContent = formatVitaminValue(s.totalVitamins);
        if (countEl) countEl.textContent = `${activeMergeItems.length} / ${MAX_MERGE_ITEMS}`;

        const multBtn = document.getElementById('alm-merge-upg-mult-btn');
        if (multBtn) multBtn.disabled = !(canInteractWithRoom(70) && s.vitamins >= getVitaminMultUpgradeCost());

        const lv2Btn = document.getElementById('alm-merge-upg-lv2-btn');
        if (lv2Btn) {
            const isMax = (s.mergeLv2ChanceLvl || 0) >= MERGE_LV2_MAX_LVL;
            lv2Btn.disabled = isMax || !(canInteractWithRoom(70) && s.vitamins >= getMergeLv2UpgradeCost());
        }

        const larpBtn = document.getElementById('alm-merge-upg-larp-btn');
        if (larpBtn) larpBtn.disabled = !(canInteractWithRoom(70) && s.vitamins >= getMergeLarpUpgradeCost());
    }
    /*
    // ------------------------------------------
    // КНОПКА ОБНУЛЕННЯ ПРОГРЕСУ АУРА ЛАРП МОНСТЕР
    // ------------------------------------------
    function handleResetAuraLarpClick() {
        if (!resetConfirmPending) {
            resetConfirmPending = true;
            if (resetConfirmTimer) clearTimeout(resetConfirmTimer);
            resetConfirmTimer = setTimeout(() => {
                resetConfirmPending = false;
                if (isAuraLarpModeActive) {
                    const btn = document.getElementById('alm-reset-btn');
                    if (btn) {
                        btn.textContent = '🗑️ Обнулити';
                        btn.classList.remove('confirm');
                    }
                }
            }, 4000);

            const btn = document.getElementById('alm-reset-btn');
            if (btn) {
                btn.textContent = '⚠️ Точно обнулити?';
                btn.classList.add('confirm');
            }
            return;
        }

        resetConfirmPending = false;
        if (resetConfirmTimer) clearTimeout(resetConfirmTimer);

        moduleState = getDefaultModuleState();
        activeSnowflakes = [];
        snowSpawnAccumSec = 0;
        activeTrashItems = [];
        trashSpawnAccumSec = 0;
        draggingTrashId = null;
        activeMergeItems = [];
        mergeSpawnAccumSec = 0;
        draggingMergeId = null;
        activeOrangutanButtons = [];
        orangutanBtnSpawnAccumSec = 0;
        activeLarpSubTab = 'stairs';
        activeRoomStep = 10;
        offlineRewardReport = null;

        if (isGlobalTimeVerified) {
            moduleState.lastGlobalTime = Date.now() + globalTimeOffsetMs;
        }

        persistAuraLarpState(true);
        syncLarpLeaderboard(true);
        renderAuraLarpMonsterUI(true);
    }
    */
   
    // ------------------------------------------
    // ЦИКЛ ОНОВЛЕННЯ ЛОГІКИ ТА АНІМАЦІЇ
    // ------------------------------------------
    function tickAuraLarpLogic(dtSeconds) {
        const s = initAuraLarpMonsterState();
        if (dtSeconds <= 0) return;

        const now = getCurrentNowMs();

        // Перевірка завершення сніжної бурі (80 сходинка)
        let stormEndedJustNow = false;
        if (s.stormActiveEndMs && now >= s.stormActiveEndMs) {
            s.stormActiveEndMs = null;
            stormEndedJustNow = true;
            persistAuraLarpState(true);
        }

        // Перевірка завершення роботи прибиральника (110 сходинка)
        let cleanerEndedJustNow = false;
        if (s.cleanerActiveEndMs && now >= s.cleanerActiveEndMs) {
            s.cleanerActiveEndMs = null;
            cleanerEndedJustNow = true;
            persistAuraLarpState(true);
        }

        // Перевірка завершення дії телепортера та миттєвого переміщення (130 сходинка)
        let teleporterStateChanged = false;
        if (s.teleportActiveEndMs && now >= s.teleportActiveEndMs) {
            s.teleportActiveEndMs = null;
            teleporterStateChanged = true;
        }
        if (s.teleportingToStep && s.teleportArrivalEndMs && now >= s.teleportArrivalEndMs) {
            const destStep = s.teleportingToStep;
            s.teleportingToStep = null;
            s.teleportArrivalEndMs = null;
            s.currentStep = destStep;
            s.targetStep = destStep;
            s.moveProgressSec = 0;
            s.highestStep = Math.max(s.highestStep || 1, destStep);
            teleporterStateChanged = true;
        }
        if (teleporterStateChanged) {
            persistAuraLarpState(true);
            if (isAuraLarpModeActive) {
                renderAuraLarpMonsterUI(activeLarpSubTab === 'stairs');
            }
        }

        // Перевірка респавну моба на 50 сходинці (Квочка / Когут / Золотий Когут)
        if (s.chickenRespawnEndMs && now >= s.chickenRespawnEndMs) {
            s.chickenRespawnEndMs = null;
            s.room50MobType = rollNextRoom50MobType();
            const newMobCfg = getRoom50MobConfig(s.room50MobType);
            s.chickenHp = newMobCfg.maxHp;
            persistAuraLarpState(true);
            if (isAuraLarpModeActive && activeLarpSubTab === 'room' && activeRoomStep === 50) {
                renderAuraLarpMonsterUI(false);
            }
        }

        // Перевірка респавну боса Орангутанга на 150 сходинці
        if (s.orangutanRespawnEndMs && now >= s.orangutanRespawnEndMs) {
            s.orangutanRespawnEndMs = null;
            s.orangutanHp = ORANGUTAN_MAX_HP;
            activeOrangutanButtons = [];
            orangutanBtnSpawnAccumSec = 0;
            persistAuraLarpState(true);
            if (isAuraLarpModeActive && activeLarpSubTab === 'room' && activeRoomStep === 150) {
                renderAuraLarpMonsterUI(false);
            }
        }

        // Спавн кнопочок навколо боса Орангутанга кожні 2 сек на 150 сходинці
        if (s.maxUnlockedStep >= 150 && !s.orangutanRespawnEndMs && s.orangutanHp > 0) {
            if (isAuraLarpModeActive && activeLarpSubTab === 'room' && activeRoomStep === 150 && canInteractWithRoom(150)) {
                orangutanBtnSpawnAccumSec += dtSeconds;
                if (orangutanBtnSpawnAccumSec >= ORANGUTAN_BTN_SPAWN_SEC) {
                    orangutanBtnSpawnAccumSec -= ORANGUTAN_BTN_SPAWN_SEC;
                    spawnOrangutanAttackButton();
                }
            }
        }

        // 1. Пасивний заробіток Ларпів
        const rate = getLarpPerSecond();
        if (rate > 0) {
            const earned = rate * dtSeconds;
            s.larp += earned;
            s.totalLarp += earned;
        }

        // 2. Плавне пересування персонажа по сходинках (з урахуванням бусту швидкості на 40 сходинці)
        let reachedNewStep = false;
        if (!s.teleportingToStep && s.currentStep !== s.targetStep) {
            const moveSpeed = getCharacterMoveSpeed();
            s.moveProgressSec += dtSeconds * moveSpeed;
            while (s.moveProgressSec >= 1.0 && s.currentStep !== s.targetStep) {
                s.moveProgressSec -= 1.0;
                if (s.targetStep > s.currentStep) {
                    s.currentStep += 1;
                } else {
                    s.currentStep -= 1;
                }
                s.highestStep = Math.max(s.highestStep || 1, s.currentStep);
                reachedNewStep = true;
            }
            if (s.currentStep === s.targetStep) {
                s.moveProgressSec = 0;
            }
        }

        // 3. Спавн сніжинок (якщо 20 сходинка вже розблокована)
        if (s.maxUnlockedStep >= 20) {
            const spawnInterval = getEffectiveSnowSpawnInterval();
            if (activeSnowflakes.length < MAX_SNOWFLAKES) {
                snowSpawnAccumSec += dtSeconds;
                let spawnedCount = 0;
                while (snowSpawnAccumSec >= spawnInterval && activeSnowflakes.length < MAX_SNOWFLAKES && spawnedCount < 10) {
                    snowSpawnAccumSec -= spawnInterval;
                    spawnSnowflake();
                    spawnedCount++;
                }
            } else {
                snowSpawnAccumSec = 0;
            }
        }

        // 4. Спавн сміття (якщо 30 сходинка вже розблокована)
        if (s.maxUnlockedStep >= 30) {
            const trashInterval = getTrashSpawnInterval();
            const cleanerOn = isCleanerActive();

            if (cleanerOn && activeTrashItems.length > 0) {
                collectAllActiveTrashByCleaner();
            }

            if (cleanerOn || activeTrashItems.length < MAX_TRASH_ITEMS) {
                trashSpawnAccumSec += dtSeconds;
                let spawnedTrash = 0;
                while (trashSpawnAccumSec >= trashInterval && (isCleanerActive() || activeTrashItems.length < MAX_TRASH_ITEMS) && spawnedTrash < 10) {
                    trashSpawnAccumSec -= trashInterval;
                    spawnTrashItem();
                    spawnedTrash++;
                }
            } else {
                trashSpawnAccumSec = 0;
            }
        }

        // 5. Спавн овочів для об'єднання (якщо 70 сходинка вже розблокована)
        if (s.maxUnlockedStep >= 70) {
            if (activeMergeItems.length < MAX_MERGE_ITEMS) {
                mergeSpawnAccumSec += dtSeconds;
                while (mergeSpawnAccumSec >= MERGE_SPAWN_SEC && activeMergeItems.length < MAX_MERGE_ITEMS) {
                    mergeSpawnAccumSec -= MERGE_SPAWN_SEC;
                    spawnMergeItem();
                }
            } else {
                mergeSpawnAccumSec = 0;
            }
        }

        // Оновлюємо глобальний час у збереженні
        if (isGlobalTimeVerified) {
            s.lastGlobalTime = Date.now() + globalTimeOffsetMs;
        }

        syncLarpLeaderboard(false);

        if (isAuraLarpModeActive) {
            if ((reachedNewStep && activeLarpSubTab === 'room') || (stormEndedJustNow && activeLarpSubTab === 'room') || (cleanerEndedJustNow && activeLarpSubTab === 'room')) {
                renderAuraLarpMonsterUI(false);
            } else {
                updateAllDynamicElements(reachedNewStep, false);
            }
        } else {
            updateTopGameHeader();
        }
    }

    function updateTopGameHeader() {
        const s = initAuraLarpMonsterState();
        const topAuraEl = document.getElementById('aura-count');
        const topCpsEl = document.getElementById('cps-count');
        const topEnergyEl = document.getElementById('energy-count');
        const topEnergySubEl = document.getElementById('energy-timer-subtext');
        const auraBadge = document.querySelector('header .stat-badge.aura');
        const energyBadge = document.querySelector('header .stat-badge.energy');

        if (!topAuraEl || !topCpsEl || !topEnergyEl) return;

        isUpdatingHeaderInternally = true;
        try {
            if (isAuraLarpModeActive) {
                if (auraBadge && !auraBadge.classList.contains('alm-top-larp')) {
                    auraBadge.classList.add('alm-top-larp');
                }
                if (energyBadge && !energyBadge.classList.contains('alm-top-room')) {
                    energyBadge.classList.add('alm-top-room');
                }

                const nextLarpStr = formatLarpValue(s.larp);
                const nextCpsStr = formatLarpRate(getLarpPerSecond());

                const larpNode = topAuraEl.parentElement;
                if (larpNode && (!larpNode.dataset.almMode || lastHeaderSnapshot.active !== true)) {
                    larpNode.dataset.almMode = '1';
                    larpNode.innerHTML = `👾 <span id="aura-count">${nextLarpStr}</span>`;
                } else {
                    const freshAuraEl = document.getElementById('aura-count');
                    if (freshAuraEl && freshAuraEl.textContent !== nextLarpStr) {
                        freshAuraEl.textContent = nextLarpStr;
                    }
                }

                if (topCpsEl.textContent !== nextCpsStr) {
                    topCpsEl.textContent = nextCpsStr;
                }

                const roomCurr = getRoomCurrencyForStep(s.currentStep);
                const secondTopNode = topEnergyEl.parentElement;

                const nextRoomIcon = roomCurr ? roomCurr.icon : '🪜';
                const nextRoomVal = roomCurr ? roomCurr.value : `${s.currentStep} / ${MAX_STEP}`;
                const nextRoomColor = roomCurr ? roomCurr.color : '#38bdf8';
                const nextRoomSub = roomCurr
                    ? `${roomCurr.name} (${s.currentStep} сх.)`
                    : `Множник x${formatMultValue(getStairMultiplier())}`;

                if (
                    secondTopNode &&
                    (!secondTopNode.dataset.almMode ||
                        lastHeaderSnapshot.active !== true ||
                        lastHeaderSnapshot.roomIcon !== nextRoomIcon)
                ) {
                    secondTopNode.dataset.almMode = '1';
                    const colorAttr = roomCurr ? ` style="color:${nextRoomColor};"` : '';
                    secondTopNode.innerHTML = `${nextRoomIcon} <span id="energy-count"${colorAttr}>${nextRoomVal}</span>`;
                } else {
                    const freshEnergyEl = document.getElementById('energy-count');
                    if (freshEnergyEl) {
                        if (freshEnergyEl.textContent !== nextRoomVal) {
                            freshEnergyEl.textContent = nextRoomVal;
                        }
                        const desiredColor = roomCurr ? nextRoomColor : '';
                        if (freshEnergyEl.style.color !== desiredColor) {
                            freshEnergyEl.style.color = desiredColor;
                        }
                    }
                }

                if (topEnergySubEl) {
                    if (topEnergySubEl.style.color !== nextRoomColor) {
                        topEnergySubEl.style.color = nextRoomColor;
                    }
                    if (topEnergySubEl.textContent !== nextRoomSub) {
                        topEnergySubEl.textContent = nextRoomSub;
                    }
                }

                lastHeaderSnapshot = {
                    active: true,
                    larpVal: nextLarpStr,
                    cpsVal: nextCpsStr,
                    roomIcon: nextRoomIcon,
                    roomVal: nextRoomVal,
                    roomSub: nextRoomSub,
                    roomColor: nextRoomColor
                };
            } else {
                if (auraBadge) auraBadge.classList.remove('alm-top-larp');
                if (energyBadge) energyBadge.classList.remove('alm-top-room');

                const root = getRootState();
                const larpNode = topAuraEl.parentElement;
                if (larpNode && larpNode.dataset.almMode) {
                    delete larpNode.dataset.almMode;
                    const auraText = typeof window.formatNum === 'function' ? window.formatNum(root.aura || 0) : '0';
                    larpNode.innerHTML = `✨ <span id="aura-count">${auraText}</span>`;
                } else if (typeof window.formatNum === 'function') {
                    const auraText = window.formatNum(root.aura || 0);
                    if (topAuraEl.textContent !== auraText) topAuraEl.textContent = auraText;
                }

                if (typeof window.getTotalCps === 'function' && typeof window.formatNum === 'function') {
                    const cpsText = window.formatNum(window.getTotalCps());
                    if (topCpsEl.textContent !== cpsText) topCpsEl.textContent = cpsText;
                }

                const secondTopNode = topEnergyEl.parentElement;
                if (secondTopNode && secondTopNode.dataset.almMode) {
                    delete secondTopNode.dataset.almMode;
                    secondTopNode.innerHTML = `⚡ <span id="energy-count">${Math.floor(root.energy || 0)}</span>`;
                } else {
                    const enText = String(Math.floor(root.energy || 0));
                    if (topEnergyEl.textContent !== enText) topEnergyEl.textContent = enText;
                }

                if (topEnergySubEl && lastHeaderSnapshot.active !== false) {
                    topEnergySubEl.style.color = '#3498db';
                    topEnergySubEl.textContent = 'відновл. 30хв';
                }

                lastHeaderSnapshot.active = false;
            }
        } finally {
            isUpdatingHeaderInternally = false;
        }
    }

    function startHeaderAntiJitterObserver() {
        if (headerObserver) return;
        const headerEl = document.querySelector('header');
        if (!headerEl || typeof MutationObserver === 'undefined') return;

        headerObserver = new MutationObserver(function () {
            if (!isAuraLarpModeActive || isUpdatingHeaderInternally) return;
            updateTopGameHeader();
        });

        headerObserver.observe(headerEl, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }

    function stopHeaderAntiJitterObserver() {
        if (headerObserver) {
            headerObserver.disconnect();
            headerObserver = null;
        }
    }

    function updateAllDynamicElements(stepChanged, shouldAutoCenter) {
        const s = initAuraLarpMonsterState();

        updateTopGameHeader();

        const larpBalEl = document.getElementById('alm-larp-balance');
        const larpRateEl = document.getElementById('alm-larp-rate');
        const stepBadgeEl = document.getElementById('alm-current-step-badge');

        if (larpBalEl) larpBalEl.textContent = formatLarpValue(s.larp);
        if (larpRateEl) larpRateEl.textContent = `${formatLarpRate(getLarpPerSecond())} ларп/сек`;
        if (stepBadgeEl) stepBadgeEl.textContent = `${s.currentStep} / ${MAX_STEP}`;

        const nextStep = s.maxUnlockedStep + 1;
        const unlockBtn = document.getElementById('alm-unlock-next-btn');
        if (unlockBtn && nextStep <= MAX_STEP) {
            const nextCfg = STAIRS_CONFIG[nextStep - 1];
            unlockBtn.disabled = s.larp < nextCfg.cost;
        }

        if (activeLarpSubTab === 'room') {
            if (activeRoomStep === 10) {
                const roomBuyBtn = document.getElementById('alm-room-buy-btn');
                if (roomBuyBtn) {
                    const canBuy = canInteractWithRoom(10) && s.larp >= getRoomUpgradeCost();
                    roomBuyBtn.disabled = !canBuy;
                }
            } else if (activeRoomStep === 20) {
                updateSnowDynamicHud();
                updateStormDynamicHud();
            } else if (activeRoomStep === 30) {
                updateTrashDynamicHud();
                updateCleanerDynamicHud();
            } else if (activeRoomStep === 40) {
                const speedBtn = document.getElementById('alm-speed-upg-btn');
                if (speedBtn) {
                    speedBtn.disabled = !(canInteractWithRoom(40) && s.larp >= getSpeedUpgradeCost());
                }
                const offlineBtn = document.getElementById('alm-offline-upg-btn');
                if (offlineBtn) {
                    const isMax = (s.offlineLarpLvl || 0) >= OFFLINE_UPG_MAX_LVL;
                    offlineBtn.disabled = isMax || !(canInteractWithRoom(40) && s.larp >= getOfflineUpgradeCost());
                }
            } else if (activeRoomStep === 50) {
                updateChickenDynamicHud();
                const fMultBtn = document.getElementById('alm-feather-upg-mult-btn');
                if (fMultBtn) fMultBtn.disabled = !(canInteractWithRoom(50) && s.feathers >= getFeatherMultUpgradeCost());
                const fLarpBtn = document.getElementById('alm-feather-upg-larp-btn');
                if (fLarpBtn) fLarpBtn.disabled = !(canInteractWithRoom(50) && s.feathers >= getFeatherLarpUpgradeCost());
            } else if (activeRoomStep === 60) {
                const gsBtn = document.getElementById('alm-goldsnow-upg-btn');
                if (gsBtn) gsBtn.disabled = ((s.goldSnowLvl || 0) >= GOLD_SNOW_MAX_LVL) || !(canInteractWithRoom(60) && s.larp >= getGoldSnowUpgradeCost());
                const esBtn = document.getElementById('alm-emsnow-upg-btn');
                if (esBtn) esBtn.disabled = ((s.emeraldSnowLvl || 0) >= EMERALD_SNOW_MAX_LVL) || !(canInteractWithRoom(60) && s.larp >= getEmeraldSnowUpgradeCost());
                const gtBtn = document.getElementById('alm-goldtrash-upg-btn');
                if (gtBtn) gtBtn.disabled = ((s.goldTrashLvl || 0) >= GOLD_TRASH_MAX_LVL) || !(canInteractWithRoom(60) && s.larp >= getGoldTrashUpgradeCost());
                const etBtn = document.getElementById('alm-emtrash-upg-btn');
                if (etBtn) etBtn.disabled = ((s.emeraldTrashLvl || 0) >= EMERALD_TRASH_MAX_LVL) || !(canInteractWithRoom(60) && s.larp >= getEmeraldTrashUpgradeCost());
            } else if (activeRoomStep === 70) {
                updateMergeDynamicHud();
            } else if (activeRoomStep === 80) {
                updateStormDynamicHud();
                const sdBtn = document.getElementById('alm-storm-dur-btn');
                if (sdBtn) sdBtn.disabled = !(canInteractWithRoom(80) && s.larp >= getStormDurationUpgradeCost());
                const scBtn = document.getElementById('alm-storm-cd-btn');
                if (scBtn) scBtn.disabled = ((s.stormCooldownLvl || 0) >= STORM_COOLDOWN_MAX_LVL) || !(canInteractWithRoom(80) && s.larp >= getStormCooldownUpgradeCost());
                const ssBtn = document.getElementById('alm-storm-spd-btn');
                if (ssBtn) ssBtn.disabled = ((s.stormSpeedLvl || 0) >= STORM_SPAWN_MAX_LVL) || !(canInteractWithRoom(80) && s.larp >= getStormSpeedUpgradeCost());
            } else if (activeRoomStep === 90) {
                const mdBtn = document.getElementById('alm-mob-dmg-btn');
                if (mdBtn) mdBtn.disabled = ((s.mobDamageLvl || 0) >= MOB_DMG_MAX_LVL) || !(canInteractWithRoom(90) && s.larp >= getMobDamageUpgradeCost());
                const mrBtn = document.getElementById('alm-mob-respawn-btn');
                if (mrBtn) mrBtn.disabled = ((s.mobRespawnLvl || 0) >= MOB_SPAWN_MAX_LVL) || !(canInteractWithRoom(90) && s.larp >= getMobRespawnUpgradeCost());
            } else if (activeRoomStep === 110) {
                updateCleanerDynamicHud();
                const cdBtn = document.getElementById('alm-cleaner-dur-btn');
                if (cdBtn) cdBtn.disabled = !(canInteractWithRoom(110) && s.larp >= getCleanerDurationUpgradeCost());
            } else if (activeRoomStep === 120) {
                updateDrillDynamicHud();
                const smBtn = document.getElementById('alm-stone-upg-mult-btn');
                if (smBtn) smBtn.disabled = !(canInteractWithRoom(120) && s.stone >= getStoneMultUpgradeCost());
                const slBtn = document.getElementById('alm-stone-upg-larp-btn');
                if (slBtn) slBtn.disabled = !(canInteractWithRoom(120) && s.stone >= getStoneLarpUpgradeCost());
                const d1CdBtn = document.getElementById('alm-drill1-cd-btn');
                if (d1CdBtn) d1CdBtn.disabled = ((s.drill1CdLvl || 0) >= DRILL1_CD_MAX_LVL) || !(canInteractWithRoom(120) && s.larp >= getDrill1CdUpgradeCost());
                const d2CdBtn = document.getElementById('alm-drill2-cd-btn');
                if (d2CdBtn) d2CdBtn.disabled = (!s.drill2Unlocked || (s.drill2CdLvl || 0) >= DRILL2_CD_MAX_LVL) || !(canInteractWithRoom(120) && s.larp >= getDrill2CdUpgradeCost());
            } else if (activeRoomStep === 130) {
                updateTeleporterDynamicHud();
                const tdBtn = document.getElementById('alm-tp-dur-btn');
                if (tdBtn) tdBtn.disabled = !(canInteractWithRoom(130) && s.larp >= getTeleportDurationUpgradeCost());
                const tcBtn = document.getElementById('alm-tp-cd-btn');
                if (tcBtn) tcBtn.disabled = ((s.teleportCooldownLvl || 0) >= TELEPORT_COOLDOWN_MAX_LVL) || !(canInteractWithRoom(130) && s.larp >= getTeleportCooldownUpgradeCost());
                const ttBtn = document.getElementById('alm-tp-travel-btn');
                if (ttBtn) ttBtn.disabled = ((s.teleportTravelLvl || 0) >= TELEPORT_TRAVEL_MAX_LVL) || !(canInteractWithRoom(130) && s.larp >= getTeleportTravelUpgradeCost());
            } else if (activeRoomStep === 140) {
                const fBal = document.getElementById('alm-firesnow-balance');
                const fTot = document.getElementById('alm-firesnow-total');
                const sBal = document.getElementById('alm-firesnow-snow-available');
                if (fBal) fBal.textContent = formatFireSnowValue(s.fireSnow);
                if (fTot) fTot.textContent = formatFireSnowValue(s.totalFireSnow);
                if (sBal) sBal.textContent = formatSnowValue(s.snow);

                const preview = getSnowExchangePreview();
                const exBtn = document.getElementById('alm-firesnow-exchange-btn');
                if (exBtn) {
                    exBtn.disabled = !(canInteractWithRoom(140) && preview.snowToSpend > 0 && preview.gainedFireSnow > 0);
                    const gainStr = preview.gainedFireSnow >= 1 ? formatMultValue(preview.gainedFireSnow) : preview.gainedFireSnow.toFixed(2);
                    exBtn.textContent = `🔥 Обміняти 10% (-${formatSnowValue(preview.snowToSpend)} ❄️) → +${gainStr} 🔥❄️`;
                }

                const fmBtn = document.getElementById('alm-firesnow-upg-mult-btn');
                if (fmBtn) fmBtn.disabled = !(canInteractWithRoom(140) && s.fireSnow >= getFireSnowMultUpgradeCost());
                const fsBtn = document.getElementById('alm-firesnow-upg-snow-btn');
                if (fsBtn) fsBtn.disabled = !(canInteractWithRoom(140) && s.fireSnow >= getFireSnowSnowBoostUpgradeCost());
                const flBtn = document.getElementById('alm-firesnow-upg-larp-btn');
                if (flBtn) flBtn.disabled = !(canInteractWithRoom(140) && s.fireSnow >= getFireSnowLarpUpgradeCost());
            } else if (activeRoomStep === 150) {
                updateOrangutanDynamicHud();
                const omBtn = document.getElementById('alm-orangutan-upg-mult-btn');
                if (omBtn) omBtn.disabled = !(canInteractWithRoom(150) && s.orangutanHeads >= getOrangutanHeadMultUpgradeCost());
                const obBtn = document.getElementById('alm-orangutan-upg-bomb-btn');
                if (obBtn) {
                    const isMax = (s.orangutanBombCostLvl || 0) >= ORANGUTAN_BOMB_MAX_LVL;
                    obBtn.disabled = isMax || !(canInteractWithRoom(150) && s.orangutanHeads >= getOrangutanBombCostUpgradeCost());
                }
                const olBtn = document.getElementById('alm-orangutan-upg-larp-btn');
                if (olBtn) olBtn.disabled = !(canInteractWithRoom(150) && s.orangutanHeads >= getOrangutanLarpUpgradeCost());
            } else if (activeRoomStep === 160) {
                const rcBtn = document.getElementById('alm-rooster-chance-btn');
                if (rcBtn) {
                    const isMax = (s.roosterChanceLvl || 0) >= ROOSTER_CHANCE_MAX_LVL;
                    rcBtn.disabled = isMax || !(canInteractWithRoom(160) && s.larp >= getRoosterChanceUpgradeCost());
                }
                const grcBtn = document.getElementById('alm-golden-rooster-chance-btn');
                if (grcBtn) {
                    const isMax = (s.goldenRoosterChanceLvl || 0) >= GOLDEN_ROOSTER_CHANCE_MAX_LVL;
                    const hasKills = (s.roostersKilled || 0) >= GOLDEN_ROOSTER_REQUIRED_KILLS;
                    grcBtn.disabled = isMax || !hasKills || !(canInteractWithRoom(160) && s.larp >= getGoldenRoosterChanceUpgradeCost());
                }
            }
        }

        if (activeLarpSubTab === 'stairs') {
            updateTeleporterDynamicHud();

            const charEl = document.getElementById('alm-character');
            if (charEl) {
                const visPos = getVisualStepPosition();
                const bottomPx = (visPos - 1) * ROW_HEIGHT + 12;
                charEl.style.bottom = `${bottomPx}px`;
                charEl.style.left = getStepCenterCss(visPos);

                const statusEl = charEl.querySelector('.alm-char-status');
                const moveSpeed = getCharacterMoveSpeed();
                if (s.teleportingToStep && s.teleportArrivalEndMs && getCurrentNowMs() < s.teleportArrivalEndMs) {
                    const arrLeft = Math.max(0.1, (s.teleportArrivalEndMs - getCurrentNowMs()) / 1000);
                    charEl.classList.add('is-moving');
                    if (statusEl) {
                        statusEl.textContent = `🌀 → ${s.teleportingToStep} (${arrLeft.toFixed(1)}с)`;
                    }
                } else if (s.currentStep !== s.targetStep) {
                    charEl.classList.add('is-moving');
                    const remSteps = Math.abs(s.targetStep - s.currentStep) - s.moveProgressSec;
                    const remSec = Math.max(0.1, remSteps / moveSpeed);
                    if (statusEl) {
                        statusEl.textContent = `→ ${s.targetStep} (${formatArrivalSeconds(remSec)})`;
                    }
                } else {
                    charEl.classList.remove('is-moving');
                    if (statusEl) {
                        statusEl.textContent = `${s.currentStep} сх.`;
                    }
                }
            }

            if (stepChanged) {
                document.querySelectorAll('.alm-stair-row').forEach(row => {
                    const st = Number(row.dataset.step);
                    row.classList.toggle('current-step', st === s.currentStep);
                    row.classList.toggle('target-step', st === s.targetStep && s.targetStep !== s.currentStep);
                });
            }

            if (shouldAutoCenter) {
                scrollToCharacterStep(false);
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
            if (activeLarpSubTab === 'stairs') {
                const s = initAuraLarpMonsterState();
                const charEl = document.getElementById('alm-character');
                if (charEl && s.currentStep !== s.targetStep) {
                    const visPos = getVisualStepPosition();
                    const bottomPx = (visPos - 1) * ROW_HEIGHT + 12;
                    charEl.style.bottom = `${bottomPx}px`;
                    charEl.style.left = getStepCenterCss(visPos);
                }
            }
            rafId = requestAnimationFrame(loop);
        }

        rafId = requestAnimationFrame(loop);
    }

    function scrollToCharacterStep(instant) {
        const viewport = document.getElementById('alm-stairs-viewport');
        if (!viewport) return;

        const visPos = getVisualStepPosition();
        const totalHeight = MAX_STEP * ROW_HEIGHT + 28;
        const charBottom = (visPos - 1) * ROW_HEIGHT + 12;
        const charTopFromTop = totalHeight - charBottom - 36;
        const targetScrollTop = Math.max(0, charTopFromTop - viewport.clientHeight * 0.55);

        if (instant) {
            viewport.scrollTop = targetScrollTop;
        } else {
            viewport.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
        }
    }

    function canInteractWithRoom(roomStep) {
        const s = initAuraLarpMonsterState();
        return s.maxUnlockedStep >= roomStep && s.currentStep === roomStep && s.targetStep === roomStep;
    }

    // ------------------------------------------
    // РЕНДЕР ІНТЕРФЕЙСУ
    // ------------------------------------------
    function renderStairsTabHtml() {
        const s = initAuraLarpMonsterState();
        const totalTrackHeight = MAX_STEP * ROW_HEIGHT + 28;
        const visPos = getVisualStepPosition();
        const initialBottom = (visPos - 1) * ROW_HEIGHT + 12;
        const initialLeft = getStepCenterCss(visPos);
        const moveSpeed = getCharacterMoveSpeed();
        const tpActive = isTeleporterActive();

        const nextStep = s.maxUnlockedStep + 1;
        const nextCfg = nextStep <= MAX_STEP ? STAIRS_CONFIG[nextStep - 1] : null;
        const canBuyNext = nextCfg ? s.larp >= nextCfg.cost : false;

        let rowsHtml = '';
        for (let i = 0; i < STAIRS_CONFIG.length; i++) {
            const item = STAIRS_CONFIG[i];
            const isUnlocked = item.step <= s.maxUnlockedStep;
            const isNextToBuy = item.step === nextStep;
            const isCurrent = item.step === s.currentStep;
            const isTarget = item.step === s.targetStep && s.targetStep !== s.currentStep;
            const hasRoom = ROOM_STEPS.includes(item.step);
            const bottomPos = (item.step - 1) * ROW_HEIGHT + 8;
            const leftBarCss = getStepLeftCss(item.step);

            let rowClass = 'alm-stair-row';
            if (isUnlocked) rowClass += ' unlocked';
            else if (isNextToBuy) rowClass += ' next-unlock';
            else rowClass += ' locked';

            if (isCurrent) rowClass += ' current-step';
            if (isTarget) rowClass += ' target-step';

            let rightInfoHtml = '';
            if (hasRoom) {
                const roomIcons = {
                    10: '🚪 Кімната',
                    20: '❄️ Кімната',
                    30: '🗑️ Кімната',
                    40: '⚡ Кімната',
                    50: '🐔 Кімната',
                    60: '💎 Кімната',
                    70: '🥗 Кімната',
                    80: '🌨️ Кімната',
                    90: '⚔️ Кімната',
                    110: '🧹 Кімната',
                    120: '⛏️ Кімната',
                    130: '🌀 Кімната',
                    140: '🔥❄️ Кімната',
                    150: '🦧 Бос',
                    160: '🐓 Кімната'
                };
                const tpChipHtml = (isUnlocked && tpActive && item.step !== s.currentStep)
                    ? `<button class="alm-room-chip-btn" style="background:rgba(168,85,247,0.28);border-color:#c084fc;color:#f3e8ff;margin-right:4px;" onclick="event.stopPropagation(); window.teleportAuraLarpToStep(${item.step})" title="Миттєво телепортуватись (${getTeleportTravelSeconds()} сек)">🌀 ТП</button>`
                    : '';

                rightInfoHtml += `${tpChipHtml}<button class="alm-room-chip-btn ${isUnlocked ? '' : 'locked'}" onclick="event.stopPropagation(); window.openAuraLarpRoomAtStep(${item.step})">${roomIcons[item.step] || '🚪 Кімната'}</button>`;
            }

            if (!isUnlocked) {
                rightInfoHtml += `<span class="alm-step-cost-tag">${isNextToBuy ? '🔓' : '🔒'} ${formatLarpValue(item.cost)}</span>`;
            }

            rowsHtml += `
                <div class="${rowClass}" data-step="${item.step}" style="bottom: ${bottomPos}px;" onclick="window.moveAuraLarpToStep(${item.step})">
                    <div class="alm-step-bar" style="left: ${leftBarCss}; width: ${STEP_BAR_PX}px;"></div>
                    <div class="alm-step-center-info">
                        <span class="alm-step-num">${item.step}</span>
                        <span class="alm-step-mult">x${formatMultValue(item.mult)}</span>
                    </div>
                    <div class="alm-step-right-slot">${rightInfoHtml}</div>
                </div>
            `;
        }

        const isMoving = s.currentStep !== s.targetStep;
        const remSteps = Math.abs(s.targetStep - s.currentStep) - s.moveProgressSec;
        const remSec = Math.max(0.1, remSteps / moveSpeed);
        const charStatus = isMoving
            ? `→ ${s.targetStep} (${formatArrivalSeconds(remSec)})`
            : `${s.currentStep} сх.`;

        const topActionHtml = nextCfg
            ? `<button id="alm-unlock-next-btn" class="alm-unlock-step-btn" onclick="window.unlockNextAuraLarpStep()" ${canBuyNext ? '' : 'disabled'}>
                   ⬆️ Відкрити ${nextStep} сходинку (${formatLarpValue(nextCfg.cost)} ларп)
               </button>`
            : `<span style="color:#4ade80;font-weight:800;font-size:0.85rem;">🏆 Усі 160 сходинок відкрито!</span>`;

        return `
            <div id="alm-stairs-teleport-banner" class="alm-offline-banner" style="display:none;margin-bottom:8px;border-color:rgba(192,132,252,0.7);background:rgba(88,28,135,0.45);color:#f3e8ff;"></div>
            <div class="alm-stairs-header-bar">
                <span class="alm-stairs-caption">Клікніть по відкритій сходинці, щоб йти</span>
                ${topActionHtml}
            </div>
            <div id="alm-stairs-viewport" class="alm-stairs-viewport">
                <div class="alm-stairs-track" style="height: ${totalTrackHeight}px;">
                    ${rowsHtml}
                    <div id="alm-character" class="alm-character ${isMoving ? 'is-moving' : ''}" style="bottom: ${initialBottom}px; left: ${initialLeft};">
                        <div class="alm-char-status">${charStatus}</div>
                        <div class="alm-char-avatar">👾</div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderRoomTabHtml() {
        const s = initAuraLarpMonsterState();
        const now = getCurrentNowMs();

        const roomLabels = {
            10: '10 сх. • Множник',
            20: '20 сх. • Сніжинки',
            30: '30 сх. • Сміття',
            40: '40 сх. • Швидкість',
            50: '50 сх. • Моб і Пір\'я',
            60: '60 сх. • Шанси x10/x1000',
            70: '70 сх. • Овочі та Вітаміни',
            80: '80 сх. • Сніжна буря',
            90: '90 сх. • Прокачки мобів',
            110: '110 сх. • Прибиральник',
            120: '120 сх. • Буріння вниз',
            130: '130 сх. • Телепортер',
            140: '140 сх. • Вогн. сніжинки',
            150: '150 сх. • Бос Орангутанг',
            160: '160 сх. • Когути (50 сх.)'
        };

        let selectorHtml = `<div class="alm-room-selector">`;
        ROOM_STEPS.forEach(stepNum => {
            const unlocked = s.maxUnlockedStep >= stepNum;
            const active = activeRoomStep === stepNum;
            selectorHtml += `
                <button class="alm-room-pill ${active ? 'active' : ''} ${unlocked ? '' : 'locked'}"
                        onclick="window.openAuraLarpRoomAtStep(${stepNum})">
                    ${unlocked ? '🚪' : '🔒'} ${roomLabels[stepNum]}
                </button>
            `;
        });
        selectorHtml += `</div>`;

        const isRoomUnlocked = s.maxUnlockedStep >= activeRoomStep;
        const isAtThisRoom = s.currentStep === activeRoomStep && s.targetStep === activeRoomStep;

        let accessBannerHtml = '';
        if (!isRoomUnlocked) {
            accessBannerHtml = `
                <div class="alm-room-alert locked">
                    <span>🔒 Кімната ${activeRoomStep} сходинки заблокована. Спочатку відкрийте ${activeRoomStep} сходинку!</span>
                </div>
            `;
        } else if (!isAtThisRoom) {
            const tpReadyBtn = isTeleporterActive()
                ? `<button class="alm-mini-go-btn" style="background:#a855f7;color:#fff;margin-right:4px;" onclick="window.teleportAuraLarpToStep(${activeRoomStep})">🌀 ТП (${getTeleportTravelSeconds()}с)</button>`
                : '';
            accessBannerHtml = `
                <div class="alm-room-alert warning">
                    <span>⚠️ Персонаж на <b>${s.currentStep} сходинці</b>. Потрібно підійти на <b>${activeRoomStep} сходинку</b>!</span>
                    <div style="display:flex;gap:4px;flex-shrink:0;">
                        ${tpReadyBtn}
                        <button class="alm-mini-go-btn" onclick="window.moveAuraLarpToStep(${activeRoomStep})">Підійти</button>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 10 СХОДИНКИ
        // ------------------------------------------
        if (activeRoomStep === 10) {
            const currentMult = getRoomLarpMultiplier();
            const nextMult = getNextRoomLarpMultiplier();
            const cost = getRoomUpgradeCost();
            const canBuy = canInteractWithRoom(10) && s.larp >= cost;

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">🚪 Кімната 10 сходинки — Базовий підсилювач</div>
                    <div class="alm-hero-upg-card ${canInteractWithRoom(10) ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⚡</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Множник Ларпів <span class="alm-lvl-pill">Рівень ${s.roomMultLvl}</span></div>
                            <div class="alm-hero-upg-effect">Поточний: <b>x${formatMultValue(currentMult)}</b> → Наступний: <b>x${formatMultValue(nextMult)}</b></div>
                            <div class="alm-hero-upg-cost">Ціна: <b>${formatLarpValue(cost)}</b> ларп</div>
                        </div>
                        <button id="alm-room-buy-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpRoomUpgrade()" ${canBuy ? '' : 'disabled'}>
                            Покращити
                        </button>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 20 СХОДИНКИ (СНІЖИНКИ)
        // ------------------------------------------
        if (activeRoomStep === 20) {
            const canPlaySnow = canInteractWithRoom(20);
            const snowMult = getSnowMultiplier();
            const nextSnowMult = getNextSnowMultiplier();
            const snowMultCost = getSnowMultUpgradeCost();

            const spawnSec = getSnowSpawnInterval();
            const nextSpawnSec = getNextSnowSpawnInterval();
            const speedLvl = s.snowSpeedLvl || 0;
            const isMaxSpeed = speedLvl >= SNOW_SPEED_MAX_LVL;
            const snowSpeedCost = getSnowSpeedUpgradeCost();

            const snowLarpMult = getSnowLarpMultiplier();
            const nextSnowLarpMult = getNextSnowLarpMultiplier();
            const snowLarpCost = getSnowLarpUpgradeCost();

            const stormActive = isSnowstormActive();
            const stormLeftSec = stormActive ? Math.max(0, (s.stormActiveEndMs - now) / 1000) : 0;

            let flakesHtml = '';
            activeSnowflakes.forEach(flake => {
                const rarityClass = flake.rarity === 'emerald' ? ' emerald' : (flake.rarity === 'gold' ? ' gold' : '');
                flakesHtml += `<div class="alm-snowflake-item${rarityClass}" data-snow-id="${flake.id}" style="left:${flake.xPct}%; top:${flake.yPct}%;">${flake.rarity === 'emerald' ? '❇️' : '❄️'}</div>`;
            });

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                ${stormActive ? `
                    <div class="alm-offline-banner" style="margin-bottom:8px;border-color:rgba(56,189,248,0.65);background:rgba(14,116,144,0.35);color:#bae6fd;">
                        <span>🌨️ <b>Сніжна буря активна!</b> Сніжинки з'являються кожні <b>${getStormSnowSpawnInterval()} сек</b> (залишилось <b id="alm-room20-storm-timer">${formatTimerMmSs(stormLeftSec)}</b>)</span>
                    </div>
                ` : ''}
                <div class="alm-room-split-grid ${canPlaySnow ? '' : 'dimmed'}">
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span>❄️ Баланс: <b id="alm-snow-balance" style="color:#38bdf8;">${formatSnowValue(s.snow)}</b></span>
                            <span>Зібрано всього: <b id="alm-snow-total" style="color:#7dd3fc;">${formatSnowValue(s.totalSnow)}</b></span>
                        </div>
                        <div id="alm-snow-zone" class="alm-snow-zone ${canPlaySnow ? '' : 'disabled-zone'}">
                            <div class="alm-zone-counter" id="alm-snow-active-count">${activeSnowflakes.length} / ${MAX_SNOWFLAKES}</div>
                            <div class="alm-snow-hint">${canPlaySnow ? 'Проведіть пальцем або курсором по сніжинках!' : 'Підійдіть на 20 сходинку для збору'}</div>
                            ${flakesHtml}
                        </div>
                    </div>

                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">❄️ Прокачки за сніжинки</div>
                            <div class="alm-compact-upg-list">
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x2 Сніжинки <span class="alm-lvl-pill">Lv.${s.snowMultLvl}</span></div>
                                        <div class="alm-compact-upg-desc">Збір: x${formatMultValue(snowMult)} → x${formatMultValue(nextSnowMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatSnowValue(snowMultCost)} ❄️</div>
                                    </div>
                                    <button id="alm-snow-upg-mult-btn" class="alm-compact-upg-btn snow"
                                            onclick="window.buyAuraLarpSnowMult()"
                                            ${canPlaySnow && s.snow >= snowMultCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">Швидкість сніжинок <span class="alm-lvl-pill">Lv.${speedLvl}/${SNOW_SPEED_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">${isMaxSpeed ? 'Максимум: 0.2 сек' : `Спавн: ${spawnSec}с → ${nextSpawnSec}с`}</div>
                                        <div class="alm-compact-upg-cost">${isMaxSpeed ? 'МАКС' : `Ціна: ${formatSnowValue(snowSpeedCost)} ❄️`}</div>
                                    </div>
                                    <button id="alm-snow-upg-speed-btn" class="alm-compact-upg-btn snow"
                                            onclick="window.buyAuraLarpSnowSpeed()"
                                            ${!isMaxSpeed && canPlaySnow && s.snow >= snowSpeedCost ? '' : 'disabled'}>${isMaxSpeed ? '✓' : '+'}</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">Множник Ларпів <span class="alm-lvl-pill">Lv.${s.snowLarpMultLvl}</span></div>
                                        <div class="alm-compact-upg-desc">Бонус: x${formatMultValue(snowLarpMult)} → x${formatMultValue(nextSnowLarpMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatSnowValue(snowLarpCost)} ❄️</div>
                                    </div>
                                    <button id="alm-snow-upg-larp-btn" class="alm-compact-upg-btn snow"
                                            onclick="window.buyAuraLarpSnowLarp()"
                                            ${canPlaySnow && s.snow >= snowLarpCost ? '' : 'disabled'}>+</button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 Топ по зібраних сніжинках</div>
                            <div id="alm-snow-lb-list" class="alm-snow-lb-list">
                                <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:8px;">Завантаження...</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 30 СХОДИНКИ (ПРИБИРАННЯ СМІТТЯ)
        // ------------------------------------------
        if (activeRoomStep === 30) {
            const canPlayTrash = canInteractWithRoom(30);
            const trashMult = getTrashMultiplier();
            const nextTrashMult = getNextTrashMultiplier();
            const trashMultCost = getTrashMultUpgradeCost();

            const trashSpawnSec = getTrashSpawnInterval();
            const nextTrashSpawnSec = getNextTrashSpawnInterval();
            const trashSpeedLvl = s.trashSpeedLvl || 0;
            const isMaxTrashSpeed = trashSpeedLvl >= TRASH_SPEED_MAX_LVL;
            const trashSpeedCost = getTrashSpeedUpgradeCost();

            const trashLarpMult = getTrashLarpMultiplier();
            const nextTrashLarpMult = getNextTrashLarpMultiplier();
            const trashLarpCost = getTrashLarpUpgradeCost();

            const cleanerOn = isCleanerActive();
            const cleanerLeftSec = cleanerOn ? Math.max(0, (s.cleanerActiveEndMs - now) / 1000) : 0;

            let trashHtml = '';
            activeTrashItems.forEach(item => {
                const rarityClass = item.rarity === 'emerald' ? ' emerald' : (item.rarity === 'gold' ? ' gold' : '');
                trashHtml += `<div class="alm-trash-item${rarityClass}" data-trash-id="${item.id}" style="left:${item.xPct}%; top:${item.yPct}%;">${item.icon}</div>`;
            });

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                ${cleanerOn ? `
                    <div class="alm-offline-banner" style="margin-bottom:8px;border-color:rgba(74,222,128,0.65);background:rgba(20,83,45,0.45);color:#bbf7d0;">
                        <span>🧹 <b>Прибиральник працює!</b> Усе сміття автоматично збирається у смітник (залишилось <b id="alm-room30-cleaner-timer">${formatTimerMmSs(cleanerLeftSec)}</b>)</span>
                    </div>
                ` : ''}
                <div class="alm-room-split-grid ${canPlayTrash ? '' : 'dimmed'}">
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span>🗑️ Баланс: <b id="alm-trash-balance" style="color:#facc15;">${formatTrashValue(s.trash)}</b></span>
                            <span>Прибрано всього: <b id="alm-trash-total" style="color:#fde047;">${formatTrashValue(s.totalTrash)}</b></span>
                        </div>
                        <div id="alm-trash-zone" class="alm-trash-zone ${canPlayTrash ? '' : 'disabled-zone'}">
                            <div class="alm-zone-counter" id="alm-trash-active-count">${activeTrashItems.length} / ${MAX_TRASH_ITEMS}</div>
                            <div class="alm-snow-hint">${cleanerOn ? '🧹 Прибиральник миттєво збирає сміття!' : (canPlayTrash ? 'Перетягніть сміття у смітник внизу!' : 'Підійдіть на 30 сходинку для прибирання')}</div>
                            ${trashHtml}
                            <div id="alm-trash-bin" class="alm-trash-bin">
                                <span class="alm-trash-bin-icon">🗑️</span>
                                <span class="alm-trash-bin-text">Смітник</span>
                            </div>
                        </div>
                    </div>

                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🗑️ Прокачки за сміття</div>
                            <div class="alm-compact-upg-list">
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x2 Сміття <span class="alm-lvl-pill">Lv.${s.trashMultLvl}</span></div>
                                        <div class="alm-compact-upg-desc">Прибирання: x${trashMult} → x${nextTrashMult}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatTrashValue(trashMultCost)} 🗑️</div>
                                    </div>
                                    <button id="alm-trash-upg-mult-btn" class="alm-compact-upg-btn trash"
                                            onclick="window.buyAuraLarpTrashMult()"
                                            ${canPlayTrash && s.trash >= trashMultCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">Поява сміття <span class="alm-lvl-pill">Lv.${trashSpeedLvl}/${TRASH_SPEED_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">${isMaxTrashSpeed ? 'Максимум: 0.4 сек' : `Спавн: ${trashSpawnSec}с → ${nextTrashSpawnSec}с`}</div>
                                        <div class="alm-compact-upg-cost">${isMaxTrashSpeed ? 'МАКС' : `Ціна: ${formatTrashValue(trashSpeedCost)} 🗑️`}</div>
                                    </div>
                                    <button id="alm-trash-upg-speed-btn" class="alm-compact-upg-btn trash"
                                            onclick="window.buyAuraLarpTrashSpeed()"
                                            ${!isMaxTrashSpeed && canPlayTrash && s.trash >= trashSpeedCost ? '' : 'disabled'}>${isMaxTrashSpeed ? '✓' : '+'}</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">Множник Ларпів <span class="alm-lvl-pill">Lv.${s.trashLarpMultLvl}</span></div>
                                        <div class="alm-compact-upg-desc">Бонус: x${formatMultValue(trashLarpMult)} → x${formatMultValue(nextTrashLarpMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatTrashValue(trashLarpCost)} 🗑️</div>
                                    </div>
                                    <button id="alm-trash-upg-larp-btn" class="alm-compact-upg-btn trash"
                                            onclick="window.buyAuraLarpTrashLarp()"
                                            ${canPlayTrash && s.trash >= trashLarpCost ? '' : 'disabled'}>+</button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 Топ по прибраному сміттю</div>
                            <div id="alm-trash-lb-list" class="alm-snow-lb-list">
                                <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:8px;">Завантаження...</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 40 СХОДИНКИ (ШВИДКІСТЬ ТА ОФЛАЙН-ФАРМ)
        // ------------------------------------------
        if (activeRoomStep === 40) {
            const canAct40 = canInteractWithRoom(40);
            const curSpeed = getCharacterMoveSpeed();
            const nextSpeed = getNextCharacterMoveSpeed();
            const speedBonusPct = (s.stepSpeedLvl || 0) * SPEED_UPG_STEP_PCT;
            const speedCost = getSpeedUpgradeCost();
            const canBuySpeed = canAct40 && s.larp >= speedCost;

            const offlineLvl = s.offlineLarpLvl || 0;
            const isMaxOffline = offlineLvl >= OFFLINE_UPG_MAX_LVL;
            const curOfflinePct = getOfflineLarpPercent();
            const nextOfflinePct = getNextOfflineLarpPercent();
            const offlineCost = getOfflineUpgradeCost();
            const canBuyOffline = !isMaxOffline && canAct40 && s.larp >= offlineCost;

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">⚡ Кімната 40 сходинки — Прискорення та Офлайн-фарм</div>

                    <div class="alm-hero-upg-card ${canAct40 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🏃</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Швидкість пересування <span class="alm-lvl-pill">Рівень ${s.stepSpeedLvl || 0}</span></div>
                            <div class="alm-hero-upg-effect">Бонус: <b>+${speedBonusPct}%</b> (${formatMultValue(curSpeed)} → ${formatMultValue(nextSpeed)} сх/сек)</div>
                            <div class="alm-hero-upg-cost">Ціна: <b>${formatLarpValue(speedCost)}</b> ларп</div>
                        </div>
                        <button id="alm-speed-upg-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpStepSpeed()" ${canBuySpeed ? '' : 'disabled'}>
                            Покращити
                        </button>
                    </div>

                    <div class="alm-hero-upg-card ${canAct40 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🌙</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Офлайн-заробіток ларпів <span class="alm-lvl-pill">Рівень ${offlineLvl}/${OFFLINE_UPG_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">
                                ${isMaxOffline
                                    ? `Максимум: <b>100%</b> від доходу найвищої сходинки (${getHighestUnlockedStepNumber()} сх.)`
                                    : `Офлайн-дохід: <b>${curOfflinePct}%</b> → <b>${nextOfflinePct}%</b> (від ${getHighestUnlockedStepNumber()} сх.)`}
                            </div>
                            <div class="alm-hero-upg-cost">${isMaxOffline ? 'МАКСИМАЛЬНИЙ РІВЕНЬ' : `Ціна: <b>${formatLarpValue(offlineCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-offline-upg-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpOfflineUpgrade()" ${canBuyOffline ? '' : 'disabled'}>
                            ${isMaxOffline ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 50 СХОДИНКИ (БОЙОВА КВОЧКА / КОГУТ / ЗОЛОТИЙ КОГУТ ТА ПІР'Я)
        // ------------------------------------------
        if (activeRoomStep === 50) {
            const canFight = canInteractWithRoom(50);
            const isRespawning = Boolean(s.chickenRespawnEndMs && now < s.chickenRespawnEndMs);
            const respawnLeftSec = isRespawning ? Math.max(0, (s.chickenRespawnEndMs - now) / 1000) : 0;

            const mobCfg = getRoom50MobConfig(s.room50MobType);
            const clickDmg = getChickenClickDamage();
            const respawnDur = getChickenRespawnDurationSec();
            const hpPct = Math.max(0, Math.min(100, (s.chickenHp / mobCfg.maxHp) * 100));
            const featherDrop = Math.round(CHICKEN_BASE_FEATHER_DROP * mobCfg.featherBonusMult * getFeatherMultiplier());

            const fMult = getFeatherMultiplier();
            const nextFMult = getNextFeatherMultiplier();
            const fMultCost = getFeatherMultUpgradeCost();

            const fLarpMult = getFeatherLarpMultiplier();
            const nextFLarpMult = getNextFeatherLarpMultiplier();
            const fLarpCost = getFeatherLarpUpgradeCost();

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-room-split-grid ${canFight ? '' : 'dimmed'}">
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span>🪶 Пір'я: <b id="alm-feather-balance" style="color:#fb923c;">${formatFeatherValue(s.feathers)}</b></span>
                            <span>Зібрано всього: <b id="alm-feather-total" style="color:#fdba74;">${formatFeatherValue(s.totalFeathers)}</b></span>
                        </div>
                        <div id="alm-chicken-arena" class="alm-chicken-arena ${canFight ? '' : 'disabled-zone'}">
                            <div class="alm-chicken-hp-wrap">
                                <div class="alm-chicken-hp-bar">
                                    <div id="alm-chicken-hp-fill" class="alm-chicken-hp-fill" style="width:${hpPct}%;"></div>
                                    <div id="alm-chicken-hp-text" class="alm-chicken-hp-text">${formatWholeNumber(Math.ceil(s.chickenHp))} / ${formatWholeNumber(mobCfg.maxHp)} HP</div>
                                </div>
                            </div>

                            ${isRespawning ? `
                                <div class="alm-chicken-respawn-box">
                                    <div style="font-size:2.4rem;margin-bottom:6px;">🥚</div>
                                    <div style="font-weight:900;color:#fb923c;font-size:0.95rem;">Наступний птах вилупиться через:</div>
                                    <div id="alm-chicken-respawn-timer" style="font-size:1.35rem;font-weight:900;color:#fff;margin-top:4px;">${formatTimerMmSs(respawnLeftSec)}</div>
                                </div>
                            ` : `
                                <button id="alm-chicken-mob-btn" class="alm-chicken-mob-btn ${mobCfg.btnClass}" onclick="window.attackAuraLarpChicken(event)" ${canFight ? '' : 'disabled'}>
                                    <div class="alm-chicken-sprite">${mobCfg.icon}</div>
                                    <div style="font-weight:900;font-size:0.92rem;color:#fff;margin-top:4px;">${mobCfg.name}</div>
                                    <div style="font-size:0.75rem;color:#fdba74;font-weight:800;">Клік: -${clickDmg} HP • Дроп: +${formatFeatherValue(featherDrop)} 🪶${mobCfg.featherBonusMult > 1 ? ` (x${mobCfg.featherBonusMult})` : ''}</div>
                                </button>
                            `}

                            <div class="alm-zone-bottom-pill">⏱️ Респавн: ${formatDurationUk(respawnDur)} • ⚔️ Шкода: ${clickDmg} • 🐓 Когутів вбито: ${s.roostersKilled || 0}</div>
                        </div>
                    </div>

                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🪶 Прокачки за пір'я</div>
                            <div class="alm-compact-upg-list">
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x1.4 Пір'я <span class="alm-lvl-pill">Lv.${s.featherMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Дроп: x${formatMultValue(fMult)} → x${formatMultValue(nextFMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatFeatherValue(fMultCost)} 🪶</div>
                                    </div>
                                    <button id="alm-feather-upg-mult-btn" class="alm-compact-upg-btn feather"
                                            onclick="window.buyAuraLarpFeatherMult()"
                                            ${canFight && s.feathers >= fMultCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x1.3 Ларпи <span class="alm-lvl-pill">Lv.${s.featherLarpMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Бонус: x${formatMultValue(fLarpMult)} → x${formatMultValue(nextFLarpMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatFeatherValue(fLarpCost)} 🪶</div>
                                    </div>
                                    <button id="alm-feather-upg-larp-btn" class="alm-compact-upg-btn feather"
                                            onclick="window.buyAuraLarpFeatherLarp()"
                                            ${canFight && s.feathers >= fLarpCost ? '' : 'disabled'}>+</button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 Топ по зібраному пір'ю</div>
                            <div id="alm-feather-lb-list" class="alm-snow-lb-list">
                                <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:8px;">Завантаження...</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 60 СХОДИНКИ (ШАНСИ ЗОЛОТИХ х10 ТА СМАРАГДОВИХ х1000)
        // ------------------------------------------
        if (activeRoomStep === 60) {
            const canAct60 = canInteractWithRoom(60);

            const gsLvl = s.goldSnowLvl || 0;
            const gsMax = gsLvl >= GOLD_SNOW_MAX_LVL;
            const gsPct = getGoldSnowChancePct();
            const gsNextPct = Number((gsPct + GOLD_SNOW_STEP_PCT).toFixed(2));
            const gsCost = getGoldSnowUpgradeCost();

            const esLvl = s.emeraldSnowLvl || 0;
            const esMax = esLvl >= EMERALD_SNOW_MAX_LVL;
            const esPct = getEmeraldSnowChancePct();
            const esNextPct = Number((esPct + EMERALD_SNOW_STEP_PCT).toFixed(2));
            const esCost = getEmeraldSnowUpgradeCost();

            const gtLvl = s.goldTrashLvl || 0;
            const gtMax = gtLvl >= GOLD_TRASH_MAX_LVL;
            const gtPct = getGoldTrashChancePct();
            const gtNextPct = Number((gtPct + GOLD_TRASH_STEP_PCT).toFixed(2));
            const gtCost = getGoldTrashUpgradeCost();

            const etLvl = s.emeraldTrashLvl || 0;
            const etMax = etLvl >= EMERALD_TRASH_MAX_LVL;
            const etPct = getEmeraldTrashChancePct();
            const etNextPct = Number((etPct + EMERALD_TRASH_STEP_PCT).toFixed(2));
            const etCost = getEmeraldTrashUpgradeCost();

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">💎 Кімната 60 сходинки — Шанси рідкісних сніжинок та сміття</div>

                    <div class="alm-hero-upg-card ${canAct60 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🌟</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Шанс золотої сніжинки (x10) <span class="alm-lvl-pill">Lv.${gsLvl}/${GOLD_SNOW_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">${gsMax ? `Максимум: <b>100%</b>` : `Шанс: <b>${gsPct}%</b> → <b>${gsNextPct}%</b>`}</div>
                            <div class="alm-hero-upg-cost">${gsMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(gsCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-goldsnow-upg-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpGoldSnow()" ${!gsMax && canAct60 && s.larp >= gsCost ? '' : 'disabled'}>
                            ${gsMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>

                    <div class="alm-hero-upg-card emerald-theme ${canAct60 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">❇️</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Шанс смарагдової сніжинки (x1000) <span class="alm-lvl-pill">Lv.${esLvl}</span></div>
                            <div class="alm-hero-upg-effect">${esMax ? `Максимум: <b>100%</b>` : `Шанс: <b>${esPct}%</b> → <b>${esNextPct}%</b>`}</div>
                            <div class="alm-hero-upg-cost">${esMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(esCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-emsnow-upg-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpEmeraldSnow()" ${!esMax && canAct60 && s.larp >= esCost ? '' : 'disabled'}>
                            ${esMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>

                    <div class="alm-hero-upg-card ${canAct60 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">✨</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Шанс золотого сміття (x10) <span class="alm-lvl-pill">Lv.${gtLvl}/${GOLD_TRASH_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">${gtMax ? `Максимум: <b>100%</b>` : `Шанс: <b>${gtPct}%</b> → <b>${gtNextPct}%</b>`}</div>
                            <div class="alm-hero-upg-cost">${gtMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(gtCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-goldtrash-upg-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpGoldTrash()" ${!gtMax && canAct60 && s.larp >= gtCost ? '' : 'disabled'}>
                            ${gtMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>

                    <div class="alm-hero-upg-card emerald-theme ${canAct60 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">💚</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Шанс смарагдового сміття (x1000) <span class="alm-lvl-pill">Lv.${etLvl}</span></div>
                            <div class="alm-hero-upg-effect">${etMax ? `Максимум: <b>100%</b>` : `Шанс: <b>${etPct}%</b> → <b>${etNextPct}%</b>`}</div>
                            <div class="alm-hero-upg-cost">${etMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(etCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-emtrash-upg-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpEmeraldTrash()" ${!etMax && canAct60 && s.larp >= etCost ? '' : 'disabled'}>
                            ${etMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 70 СХОДИНКИ (ОБ'ЄДНАННЯ ОВОЧІВ ТА ФРУКТІВ — ВІТАМІНИ)
        // ------------------------------------------
        if (activeRoomStep === 70) {
            const canMerge = canInteractWithRoom(70);
            const vitMult = getVitaminMultiplier();
            const nextVitMult = getNextVitaminMultiplier();
            const vitMultCost = getVitaminMultUpgradeCost();

            const lv2Lvl = s.mergeLv2ChanceLvl || 0;
            const lv2Max = lv2Lvl >= MERGE_LV2_MAX_LVL;
            const lv2Pct = getMergeLv2ChancePct();
            const nextLv2Pct = getNextMergeLv2ChancePct();
            const lv2Cost = getMergeLv2UpgradeCost();

            const mergeLarpMult = getMergeLarpMultiplier();
            const nextMergeLarpMult = getNextMergeLarpMultiplier();
            const mergeLarpCost = getMergeLarpUpgradeCost();

            let itemsHtml = '';
            activeMergeItems.forEach(item => {
                const meta = getMergeMetaByLevel(item.level);
                itemsHtml += `
                    <div class="alm-merge-item" data-merge-id="${item.id}" style="left:${item.xPct}%; top:${item.yPct}%;">
                        <span class="alm-merge-emoji">${meta.icon}</span>
                        <span class="alm-merge-lvl-badge">Lv.${item.level}</span>
                    </div>
                `;
            });

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-room-split-grid ${canMerge ? '' : 'dimmed'}">
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span>💊 Вітаміни: <b id="alm-vitamin-balance" style="color:#4ade80;">${formatVitaminValue(s.vitamins)}</b></span>
                            <span>Зібрано всього: <b id="alm-vitamin-total" style="color:#86efac;">${formatVitaminValue(s.totalVitamins)}</b></span>
                        </div>
                        <div id="alm-merge-zone" class="alm-merge-zone ${canMerge ? '' : 'disabled-zone'}">
                            <div class="alm-zone-counter" id="alm-merge-active-count">${activeMergeItems.length} / ${MAX_MERGE_ITEMS}</div>
                            <div class="alm-snow-hint">${canMerge ? 'Перетягуйте однакові овочі/фрукти один на одного!' : 'Підійдіть на 70 сходинку для об\'єднання'}</div>
                            ${itemsHtml}
                            <div class="alm-zone-bottom-pill">🥒→🍅→🥕→🫑→🌽→🍆→🥦→🍎→🍐→🍊→🍌→🍇→🍓→🍑→🍍→🍉</div>
                        </div>
                    </div>

                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">💊 Прокачки за вітаміни</div>
                            <div class="alm-compact-upg-list">
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x1.5 Вітаміни <span class="alm-lvl-pill">Lv.${s.vitaminMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Нагорода: x${formatMultValue(vitMult)} → x${formatMultValue(nextVitMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatVitaminValue(vitMultCost)} 💊</div>
                                    </div>
                                    <button id="alm-merge-upg-mult-btn" class="alm-compact-upg-btn emerald"
                                            onclick="window.buyAuraLarpVitaminMult()"
                                            ${canMerge && s.vitamins >= vitMultCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">Шанс Помідора (Lv.2) <span class="alm-lvl-pill">Lv.${lv2Lvl}/${MERGE_LV2_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">${lv2Max ? 'Максимум: 100% 🍅' : `Шанс: ${lv2Pct}% → ${nextLv2Pct}%`}</div>
                                        <div class="alm-compact-upg-cost">${lv2Max ? 'МАКС' : `Ціна: ${formatVitaminValue(lv2Cost)} 💊`}</div>
                                    </div>
                                    <button id="alm-merge-upg-lv2-btn" class="alm-compact-upg-btn emerald"
                                            onclick="window.buyAuraLarpMergeLv2()"
                                            ${!lv2Max && canMerge && s.vitamins >= lv2Cost ? '' : 'disabled'}>${lv2Max ? '✓' : '+'}</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x1.2 Ларпи <span class="alm-lvl-pill">Lv.${s.mergeLarpMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Бонус: x${formatMultValue(mergeLarpMult)} → x${formatMultValue(nextMergeLarpMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatVitaminValue(mergeLarpCost)} 💊</div>
                                    </div>
                                    <button id="alm-merge-upg-larp-btn" class="alm-compact-upg-btn emerald"
                                            onclick="window.buyAuraLarpMergeLarp()"
                                            ${canMerge && s.vitamins >= mergeLarpCost ? '' : 'disabled'}>+</button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 Топ по зібраних вітамінах</div>
                            <div id="alm-vitamin-lb-list" class="alm-snow-lb-list">
                                <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:8px;">Завантаження...</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 80 СХОДИНКИ (СНІЖНА БУРЯ)
        // ------------------------------------------
        if (activeRoomStep === 80) {
            const canAct80 = canInteractWithRoom(80);
            const stormActive = s.stormActiveEndMs && now < s.stormActiveEndMs;
            const stormOnCd = s.stormCooldownEndMs && now < s.stormCooldownEndMs;

            const durMin = getStormDurationMinutes();
            const nextDurMin = getNextStormDurationMinutes();
            const durCost = getStormDurationUpgradeCost();

            const cdLvl = s.stormCooldownLvl || 0;
            const cdMax = cdLvl >= STORM_COOLDOWN_MAX_LVL;
            const cdHr = getStormCooldownHours();
            const nextCdHr = getNextStormCooldownHours();
            const cdCost = getStormCooldownUpgradeCost();

            const spdLvl = s.stormSpeedLvl || 0;
            const spdMax = spdLvl >= STORM_SPAWN_MAX_LVL;
            const spdSec = getStormSnowSpawnInterval();
            const nextSpdSec = getNextStormSnowSpawnInterval();
            const spdCost = getStormSpeedUpgradeCost();

            let statusHtml = `<span style="color:#4ade80;font-weight:800;">✅ Сніжна буря готова до запуску!</span>`;
            let btnText = `🌨️ Викликати сніжну бурю (${durMin} хв)`;
            let btnDisabled = !canAct80;

            if (stormActive) {
                const leftSec = Math.max(0, (s.stormActiveEndMs - now) / 1000);
                statusHtml = `<span style="color:#38bdf8;font-weight:900;">🌨️ Сніжна буря вирує! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
                btnText = `🌨️ Буря активна (${formatTimerMmSs(leftSec)})`;
                btnDisabled = true;
            } else if (stormOnCd) {
                const cdLeftSec = Math.max(0, (s.stormCooldownEndMs - now) / 1000);
                statusHtml = `<span style="color:#f59e0b;font-weight:800;">⏳ Перезарядка бурі: ${formatTimerMmSs(cdLeftSec)}</span>`;
                btnText = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
                btnDisabled = true;
            }

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">🌨️ Кімната 80 сходинки — Виклик сніжної бурі</div>

                    <div class="alm-storm-hero-box ${canAct80 ? '' : 'dimmed'}">
                        <div style="font-size:2.6rem;margin-bottom:6px;">🌨️❄️⚡</div>
                        <div style="font-size:0.92rem;color:#cbd5e1;margin-bottom:8px;line-height:1.4;">
                            Під час сніжної бурі на <b>20 сходинці</b> сніжинки з'являються зі швидкістю <b>1 сніжинка / ${spdSec} сек</b> протягом <b>${durMin} хв</b>!
                        </div>
                        <div id="alm-storm-status-text" style="margin-bottom:10px;font-size:0.9rem;">${statusHtml}</div>
                        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                            <button id="alm-storm-activate-btn" class="alm-storm-launch-btn" onclick="window.activateAuraLarpSnowstorm()" ${btnDisabled ? 'disabled' : ''}>
                                ${btnText}
                            </button>
                            ${stormActive ? `<button class="alm-mini-go-btn" style="padding:10px 14px;font-size:0.86rem;" onclick="window.goToRoom20FromStorm()">❄️ Бігти на 20 сх.</button>` : ''}
                        </div>
                    </div>

                    <div class="alm-hero-upg-card snow-theme ${canAct80 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⏱️</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Тривалість бурі <span class="alm-lvl-pill">Lv.${s.stormDurationLvl || 0}</span></div>
                            <div class="alm-hero-upg-effect">Тривалість: <b>${durMin} хв</b> → <b>${nextDurMin} хв</b></div>
                            <div class="alm-hero-upg-cost">Ціна: <b>${formatLarpValue(durCost)}</b> ларп</div>
                        </div>
                        <button id="alm-storm-dur-btn" class="alm-hero-upg-btn snow" onclick="window.buyAuraLarpStormDuration()" ${canAct80 && s.larp >= durCost ? '' : 'disabled'}>
                            Покращити
                        </button>
                    </div>

                    <div class="alm-hero-upg-card snow-theme ${canAct80 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🔄</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Перезарядка бурі <span class="alm-lvl-pill">Lv.${cdLvl}/${STORM_COOLDOWN_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">${cdMax ? `Мінімум: <b>0.5 год</b>` : `Кулдаун: <b>${cdHr} год</b> → <b>${nextCdHr} год</b>`}</div>
                            <div class="alm-hero-upg-cost">${cdMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(cdCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-storm-cd-btn" class="alm-hero-upg-btn snow" onclick="window.buyAuraLarpStormCooldown()" ${!cdMax && canAct80 && s.larp >= cdCost ? '' : 'disabled'}>
                            ${cdMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>

                    <div class="alm-hero-upg-card snow-theme ${canAct80 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⚡</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Швидкість сніжної бурі <span class="alm-lvl-pill">Lv.${spdLvl}/${STORM_SPAWN_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">${spdMax ? `Максимум: <b>1 сніж. / 0.03 сек</b>` : `Спавн у бурю: <b>${spdSec}с</b> → <b>${nextSpdSec}с</b>`}</div>
                            <div class="alm-hero-upg-cost">${spdMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(spdCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-storm-spd-btn" class="alm-hero-upg-btn snow" onclick="window.buyAuraLarpStormSpeed()" ${!spdMax && canAct80 && s.larp >= spdCost ? '' : 'disabled'}>
                            ${spdMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 90 СХОДИНКИ (ПРОКАЧКИ МОБІВ ДЛЯ 50 ТА 150 КІМНАТ)
        // ------------------------------------------
        if (activeRoomStep === 90) {
            const canAct90 = canInteractWithRoom(90);

            const mdLvl = s.mobDamageLvl || 0;
            const mdMax = mdLvl >= MOB_DMG_MAX_LVL;
            const curDmg = getChickenClickDamage();
            const nextDmg = curDmg + 1;
            const mdCost = getMobDamageUpgradeCost();

            const mrLvl = s.mobRespawnLvl || 0;
            const mrMax = mrLvl >= MOB_SPAWN_MAX_LVL;
            const curRespawnSec = getChickenRespawnDurationSec();
            const nextRespawnSec = Math.max(1, Math.round(CHICKEN_BASE_RESPAWN_SEC * (1 - Math.min(MOB_SPAWN_MAX_LVL, mrLvl + 1) / 100)));
            const curOrgRespawnSec = getOrangutanRespawnDurationSec();
            const mdRespawnCost = getMobRespawnUpgradeCost();

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">⚔️ Кімната 90 сходинки — Прокачки мобів (50 сх. та 150 сх.)</div>

                    <div class="alm-hero-upg-card ${canAct90 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🗡️</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Шкода по мобах <span class="alm-lvl-pill">Lv.${mdLvl}/${MOB_DMG_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">${mdMax ? `Максимум: <b>100 HP / удар</b> (Бомба 150 сх.: 15,000)` : `Удар: <b>${curDmg} HP</b> → <b>${nextDmg} HP</b> (Бомба 150 сх.: ${formatWholeNumber(curDmg * 150)})`}</div>
                            <div class="alm-hero-upg-cost">${mdMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(mdCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-mob-dmg-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpMobDamage()" ${!mdMax && canAct90 && s.larp >= mdCost ? '' : 'disabled'}>
                            ${mdMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>

                    <div class="alm-hero-upg-card ${canAct90 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⏳</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Прискорення спавну мобів <span class="alm-lvl-pill">Lv.${mrLvl}/${MOB_SPAWN_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">${mrMax ? `Максимум: <b>-60%</b> (50 сх.: ${formatDurationUk(curRespawnSec)}, 150 сх.: ${formatDurationUk(curOrgRespawnSec)})` : `Прискорення: <b>-${mrLvl}%</b> → <b>-${mrLvl + 1}%</b> (50 сх.: ${formatDurationUk(curRespawnSec)} → ${formatDurationUk(nextRespawnSec)})`}</div>
                            <div class="alm-hero-upg-cost">${mrMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(mdRespawnCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-mob-respawn-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpMobRespawn()" ${!mrMax && canAct90 && s.larp >= mdRespawnCost ? '' : 'disabled'}>
                            ${mrMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 110 СХОДИНКИ (ПРИБИРАЛЬНИК СМІТТЯ)
        // ------------------------------------------
        if (activeRoomStep === 110) {
            const canAct110 = canInteractWithRoom(110);
            const cleanerOn = s.cleanerActiveEndMs && now < s.cleanerActiveEndMs;
            const cleanerOnCd = s.cleanerCooldownEndMs && now < s.cleanerCooldownEndMs;

            const durMin = getCleanerDurationMinutes();
            const nextDurMin = getNextCleanerDurationMinutes();
            const durCost = getCleanerDurationUpgradeCost();

            let statusHtml = `<span style="color:#4ade80;font-weight:800;">✅ Прибиральник готовий до роботи!</span>`;
            let btnText = `🧹 Найняти прибиральника (${durMin} хв)`;
            let btnDisabled = !canAct110;

            if (cleanerOn) {
                const leftSec = Math.max(0, (s.cleanerActiveEndMs - now) / 1000);
                statusHtml = `<span style="color:#4ade80;font-weight:900;">🧹 Прибиральник працює у 30 кімнаті! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
                btnText = `🧹 Працює (${formatTimerMmSs(leftSec)})`;
                btnDisabled = true;
            } else if (cleanerOnCd) {
                const cdLeftSec = Math.max(0, (s.cleanerCooldownEndMs - now) / 1000);
                statusHtml = `<span style="color:#f59e0b;font-weight:800;">⏳ Відпочинок прибиральника: ${formatTimerMmSs(cdLeftSec)}</span>`;
                btnText = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
                btnDisabled = true;
            }

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">🧹 Кімната 110 сходинки — Автоприбиральник 30 кімнати</div>

                    <div class="alm-storm-hero-box ${canAct110 ? '' : 'dimmed'}" style="border-color:rgba(74,222,128,0.45);background:linear-gradient(145deg, rgba(20,83,45,0.45), rgba(15,23,42,0.92));">
                        <div style="font-size:2.6rem;margin-bottom:6px;">🧹🗑️✨</div>
                        <div style="font-size:0.92rem;color:#cbd5e1;margin-bottom:8px;line-height:1.4;">
                            Раз на <b>${CLEANER_COOLDOWN_HR} годин</b> ви можете найняти прибиральника на <b>${durMin} хв</b> — він автоматично викидатиме все сміття у <b>30 кімнаті</b> замість вас!
                        </div>
                        <div id="alm-cleaner-status-text" style="margin-bottom:10px;font-size:0.9rem;">${statusHtml}</div>
                        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                            <button id="alm-cleaner-activate-btn" class="alm-storm-launch-btn" style="background:linear-gradient(135deg,#22c55e,#16a34a);color:#052e16;" onclick="window.activateAuraLarpCleaner()" ${btnDisabled ? 'disabled' : ''}>
                                ${btnText}
                            </button>
                        </div>
                    </div>

                    <div class="alm-hero-upg-card emerald-theme ${canAct110 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⏱️</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Тривалість роботи прибиральника <span class="alm-lvl-pill">Lv.${s.cleanerDurationLvl || 0}</span></div>
                            <div class="alm-hero-upg-effect">Час роботи: <b>${durMin} хв</b> → <b>${nextDurMin} хв</b></div>
                            <div class="alm-hero-upg-cost">Ціна: <b>${formatLarpValue(durCost)}</b> ларп</div>
                        </div>
                        <button id="alm-cleaner-dur-btn" class="alm-hero-upg-btn" onclick="window.buyAuraLarpCleanerDuration()" ${canAct110 && s.larp >= durCost ? '' : 'disabled'}>
                            Покращити
                        </button>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 120 СХОДИНКИ (БУРІННЯ ВНИЗ — КАМІНЬ ТА 4 ЗНАРЯДДЯ)
        // ------------------------------------------
        if (activeRoomStep === 120) {
            const canDrill = canInteractWithRoom(120);
            const stoneMult = getStoneMultiplier();
            const nextStoneMult = getNextStoneMultiplier();
            const stoneMultCost = getStoneMultUpgradeCost();

            const stoneLarpMult = getStoneLarpMultiplier();
            const nextStoneLarpMult = getNextStoneLarpMultiplier();
            const stoneLarpCost = getStoneLarpUpgradeCost();

            const d1Gain = DRILL1_BASE_STONE * stoneMult;
            const d1CdSec = getDrill1CooldownSec();
            const nextD1CdSec = getNextDrill1CooldownSec();
            const d1CdLvl = s.drill1CdLvl || 0;
            const d1CdMax = d1CdLvl >= DRILL1_CD_MAX_LVL;
            const d1CdCost = getDrill1CdUpgradeCost();
            const d1OnCd = s.drill1ReadyAtMs && now < s.drill1ReadyAtMs;
            const d1LeftSec = d1OnCd ? Math.max(0.1, (s.drill1ReadyAtMs - now) / 1000) : 0;

            const d2Gain = DRILL2_BASE_STONE * stoneMult;
            const d2CdMin = getDrill2CooldownMin();
            const nextD2CdMin = getNextDrill2CooldownMin();
            const d2CdLvl = s.drill2CdLvl || 0;
            const d2CdMax = d2CdLvl >= DRILL2_CD_MAX_LVL;
            const d2CdCost = getDrill2CdUpgradeCost();
            const d2OnCd = s.drill2Unlocked && s.drill2ReadyAtMs && now < s.drill2ReadyAtMs;
            const d2LeftSec = d2OnCd ? Math.max(0, (s.drill2ReadyAtMs - now) / 1000) : 0;

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-room-split-grid ${canDrill ? '' : 'dimmed'}">
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span>🪨 Камінь: <b id="alm-stone-balance" style="color:#d6d3d1;">${formatStoneValue(s.stone)}</b></span>
                            <span>Видобуто всього: <b id="alm-stone-total" style="color:#a8a29e;">${formatStoneValue(s.totalStone)}</b></span>
                        </div>
                        <div id="alm-drill-zone" class="alm-drill-zone ${canDrill ? '' : 'disabled-zone'}">
                            <div class="alm-zone-counter">⬇️ Глибина: <b id="alm-drill-depth-val">${formatWholeNumber(s.drillDepthMeters || 0)} м</b></div>
                            <div class="alm-snow-hint" style="position:relative;top:0;left:0;transform:none;width:100%;margin-bottom:8px;">
                                ${canDrill ? 'Оберіть знаряддя для буріння шахти вниз!' : 'Підійдіть на 120 сходинку для буріння'}
                            </div>

                            <div class="alm-drill-tools-grid">
                                <div class="alm-drill-tool-card">
                                    <div class="alm-drill-tool-top">
                                        <span class="alm-drill-tool-icon">⛏️</span>
                                        <div>
                                            <div class="alm-drill-tool-title">1. Ручне кайло</div>
                                            <div class="alm-drill-tool-sub">+${formatStoneValue(d1Gain)} 🪨 • КД: ${d1CdSec} сек</div>
                                        </div>
                                    </div>
                                    <button id="alm-drill-tool-1-btn" class="alm-drill-action-btn"
                                            onclick="window.useAuraLarpDrillTool(1)"
                                            ${canDrill && !d1OnCd ? '' : 'disabled'}>
                                        <span id="alm-drill-tool-1-status">${d1OnCd ? `⏳ ${d1LeftSec.toFixed(1)} сек` : (canDrill ? '⛏️ БУРИТИ' : '🚶 Підійдіть на 120 сх.')}</span>
                                    </button>
                                </div>

                                <div class="alm-drill-tool-card ${s.drill2Unlocked ? '' : 'locked-tool'}">
                                    <div class="alm-drill-tool-top">
                                        <span class="alm-drill-tool-icon">🛠️</span>
                                        <div>
                                            <div class="alm-drill-tool-title">2. Відбійний молоток</div>
                                            <div class="alm-drill-tool-sub">+${formatStoneValue(d2Gain)} 🪨 • КД: ${d2CdMin} хв</div>
                                        </div>
                                    </div>
                                    ${s.drill2Unlocked ? `
                                        <button id="alm-drill-tool-2-btn" class="alm-drill-action-btn"
                                                onclick="window.useAuraLarpDrillTool(2)"
                                                ${canDrill && !d2OnCd ? '' : 'disabled'}>
                                            <span id="alm-drill-tool-2-status">${d2OnCd ? `⏳ ${formatTimerMmSs(d2LeftSec)}` : (canDrill ? '🛠️ БУРИТИ' : '🚶 Підійдіть на 120 сх.')}</span>
                                        </button>
                                    ` : `
                                        <button id="alm-drill-tool-2-btn" class="alm-drill-action-btn unlock-btn"
                                                onclick="window.unlockAuraLarpDrill2()"
                                                ${canDrill && s.stone >= DRILL2_UNLOCK_STONE ? '' : 'disabled'}>
                                            <span id="alm-drill-tool-2-status">🪨 Купити: ${formatStoneValue(DRILL2_UNLOCK_STONE)} каміння</span>
                                        </button>
                                    `}
                                </div>

                                <div class="alm-drill-tool-card locked-tool">
                                    <div class="alm-drill-tool-top">
                                        <span class="alm-drill-tool-icon">🚜</span>
                                        <div>
                                            <div class="alm-drill-tool-title">3. Бурова установка</div>
                                            <div class="alm-drill-tool-sub">КД: ${DRILL3_BASE_CD_MIN} хв • У розробці</div>
                                        </div>
                                    </div>
                                    <div class="alm-drill-locked-tag">🔒 Поки закрито</div>
                                </div>

                                <div class="alm-drill-tool-card locked-tool">
                                    <div class="alm-drill-tool-top">
                                        <span class="alm-drill-tool-icon">🧨</span>
                                        <div>
                                            <div class="alm-drill-tool-title">4. Глибинний бур-гігант</div>
                                            <div class="alm-drill-tool-sub">КД: ${DRILL4_BASE_CD_HR} год • У розробці</div>
                                        </div>
                                    </div>
                                    <div class="alm-drill-locked-tag">🔒 Поки закрито</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🪨 Прокачки буріння</div>
                            <div class="alm-compact-upg-list">
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x2 Камінь <span class="alm-lvl-pill">Lv.${s.stoneMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Видобуток: x${stoneMult} → x${nextStoneMult}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatStoneValue(stoneMultCost)} 🪨</div>
                                    </div>
                                    <button id="alm-stone-upg-mult-btn" class="alm-compact-upg-btn stone"
                                            onclick="window.buyAuraLarpStoneMult()"
                                            ${canDrill && s.stone >= stoneMultCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x1.2 Ларпи <span class="alm-lvl-pill">Lv.${s.stoneLarpMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Бонус: x${formatMultValue(stoneLarpMult)} → x${formatMultValue(nextStoneLarpMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatStoneValue(stoneLarpCost)} 🪨</div>
                                    </div>
                                    <button id="alm-stone-upg-larp-btn" class="alm-compact-upg-btn stone"
                                            onclick="window.buyAuraLarpStoneLarp()"
                                            ${canDrill && s.stone >= stoneLarpCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">КД 1-го знаряддя <span class="alm-lvl-pill">Lv.${d1CdLvl}/${DRILL1_CD_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">${d1CdMax ? 'Мінімум: 2.0 сек' : `КД: ${d1CdSec}с → ${nextD1CdSec}с`}</div>
                                        <div class="alm-compact-upg-cost">${d1CdMax ? 'МАКС' : `Ціна: ${formatLarpValue(d1CdCost)} ларп`}</div>
                                    </div>
                                    <button id="alm-drill1-cd-btn" class="alm-compact-upg-btn"
                                            onclick="window.buyAuraLarpDrill1Cd()"
                                            ${!d1CdMax && canDrill && s.larp >= d1CdCost ? '' : 'disabled'}>${d1CdMax ? '✓' : '+'}</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">КД 2-го знаряддя <span class="alm-lvl-pill">Lv.${d2CdLvl}/${DRILL2_CD_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">${!s.drill2Unlocked ? 'Спочатку купіть 2-ге знаряддя' : (d2CdMax ? 'Мінімум: 4.0 хв' : `КД: ${d2CdMin} хв → ${nextD2CdMin} хв`)}</div>
                                        <div class="alm-compact-upg-cost">${!s.drill2Unlocked ? 'ЗАКРИТО' : (d2CdMax ? 'МАКС' : `Ціна: ${formatLarpValue(d2CdCost)} ларп`)}</div>
                                    </div>
                                    <button id="alm-drill2-cd-btn" class="alm-compact-upg-btn"
                                            onclick="window.buyAuraLarpDrill2Cd()"
                                            ${s.drill2Unlocked && !d2CdMax && canDrill && s.larp >= d2CdCost ? '' : 'disabled'}>${d2CdMax ? '✓' : '+'}</button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 Топ по видобутому каменю</div>
                            <div id="alm-stone-lb-list" class="alm-snow-lb-list">
                                <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:8px;">Завантаження...</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 130 СХОДИНКИ (ТЕЛЕПОРТЕР)
        // ------------------------------------------
        if (activeRoomStep === 130) {
            const canAct130 = canInteractWithRoom(130);
            const tpActive = s.teleportActiveEndMs && now < s.teleportActiveEndMs;
            const tpOnCd = s.teleportCooldownEndMs && now < s.teleportCooldownEndMs;

            const durMin = getTeleportDurationMinutes();
            const nextDurMin = getNextTeleportDurationMinutes();
            const durCost = getTeleportDurationUpgradeCost();

            const cdLvl = s.teleportCooldownLvl || 0;
            const cdMax = cdLvl >= TELEPORT_COOLDOWN_MAX_LVL;
            const cdHr = getTeleportCooldownHours();
            const nextCdHr = getNextTeleportCooldownHours();
            const cdCost = getTeleportCooldownUpgradeCost();

            const trLvl = s.teleportTravelLvl || 0;
            const trMax = trLvl >= TELEPORT_TRAVEL_MAX_LVL;
            const trSec = getTeleportTravelSeconds();
            const nextTrSec = getNextTeleportTravelSeconds();
            const trCost = getTeleportTravelUpgradeCost();

            let statusHtml = `<span style="color:#4ade80;font-weight:800;">✅ Телепортер готовий до запуску!</span>`;
            let btnText = `🌀 Активувати телепортер (${durMin} хв)`;
            let btnDisabled = !canAct130;

            if (tpActive) {
                const leftSec = Math.max(0, (s.teleportActiveEndMs - now) / 1000);
                statusHtml = `<span style="color:#c084fc;font-weight:900;">🌀 Телепортер активний! Залишилось: ${formatTimerMmSs(leftSec)}</span>`;
                btnText = `🌀 Телепортер активний (${formatTimerMmSs(leftSec)})`;
                btnDisabled = true;
            } else if (tpOnCd) {
                const cdLeftSec = Math.max(0, (s.teleportCooldownEndMs - now) / 1000);
                statusHtml = `<span style="color:#f59e0b;font-weight:800;">⏳ Перезарядка телепортера: ${formatTimerMmSs(cdLeftSec)}</span>`;
                btnText = `⏳ Перезарядка (${formatTimerMmSs(cdLeftSec)})`;
                btnDisabled = true;
            }

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-centered-room-section">
                    <div class="alm-section-heading">🌀 Кімната 130 сходинки — Портальний телепортер</div>

                    <div class="alm-storm-hero-box ${canAct130 ? '' : 'dimmed'}" style="border-color:rgba(192,132,252,0.5);background:linear-gradient(145deg, rgba(88,28,135,0.48), rgba(15,23,42,0.92));">
                        <div style="font-size:2.6rem;margin-bottom:6px;">🌀✨🚪</div>
                        <div style="font-size:0.92rem;color:#e2e8f0;margin-bottom:8px;line-height:1.4;">
                            Активуйте телепортер на <b>${durMin} хв</b>, щоб телепортуватись у будь-яку відкриту кімнату всього за <b>${trSec} сек</b>!
                        </div>
                        <div id="alm-teleport-status-text" style="margin-bottom:10px;font-size:0.9rem;">${statusHtml}</div>
                        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                            <button id="alm-teleport-activate-btn" class="alm-storm-launch-btn" style="background:linear-gradient(135deg,#c084fc,#9333ea);color:#fff;" onclick="window.activateAuraLarpTeleporter()" ${btnDisabled ? 'disabled' : ''}>
                                ${btnText}
                            </button>
                        </div>
                    </div>

                    <div class="alm-hero-upg-card purple-theme ${canAct130 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⏱️</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Час дії телепортера <span class="alm-lvl-pill">Lv.${s.teleportDurationLvl || 0}</span></div>
                            <div class="alm-hero-upg-effect">Тривалість: <b>${durMin} хв</b> → <b>${nextDurMin} хв</b></div>
                            <div class="alm-hero-upg-cost">Ціна: <b>${formatLarpValue(durCost)}</b> ларп</div>
                        </div>
                        <button id="alm-tp-dur-btn" class="alm-hero-upg-btn purple" onclick="window.buyAuraLarpTeleportDuration()" ${canAct130 && s.larp >= durCost ? '' : 'disabled'}>
                            Покращити
                        </button>
                    </div>

                    <div class="alm-hero-upg-card purple-theme ${canAct130 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">🔄</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Перезарядка телепортера <span class="alm-lvl-pill">Lv.${cdLvl}/${TELEPORT_COOLDOWN_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">${cdMax ? `Мінімум: <b>6.0 год</b>` : `Кулдаун: <b>${cdHr} год</b> → <b>${nextCdHr} год</b>`}</div>
                            <div class="alm-hero-upg-cost">${cdMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(cdCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-tp-cd-btn" class="alm-hero-upg-btn purple" onclick="window.buyAuraLarpTeleportCooldown()" ${!cdMax && canAct130 && s.larp >= cdCost ? '' : 'disabled'}>
                            ${cdMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>

                    <div class="alm-hero-upg-card purple-theme ${canAct130 ? '' : 'dimmed'}">
                        <div class="alm-hero-upg-icon">⚡</div>
                        <div class="alm-hero-upg-body">
                            <div class="alm-hero-upg-title">Швидкість телепортації <span class="alm-lvl-pill">Lv.${trLvl}/${TELEPORT_TRAVEL_MAX_LVL}</span></div>
                            <div class="alm-hero-upg-effect">${trMax ? `Мінімум: <b>2 сек</b>` : `Час переміщення: <b>${trSec} сек</b> → <b>${nextTrSec} сек</b>`}</div>
                            <div class="alm-hero-upg-cost">${trMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(trCost)}</b> ларп`}</div>
                        </div>
                        <button id="alm-tp-travel-btn" class="alm-hero-upg-btn purple" onclick="window.buyAuraLarpTeleportTravel()" ${!trMax && canAct130 && s.larp >= trCost ? '' : 'disabled'}>
                            ${trMax ? 'МАКС' : 'Покращити'}
                        </button>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 140 СХОДИНКИ (ВОГНЯНІ СНІЖИНКИ ТА ОБМІН)
        // ------------------------------------------
        if (activeRoomStep === 140) {
            const canAct140 = canInteractWithRoom(140);
            const preview = getSnowExchangePreview();
            const canExchange = canAct140 && preview.snowToSpend > 0 && preview.gainedFireSnow > 0;
            const gainPreviewStr = preview.gainedFireSnow >= 1 ? formatMultValue(preview.gainedFireSnow) : preview.gainedFireSnow.toFixed(2);

            const fMult = getFireSnowMultiplier();
            const nextFMult = getNextFireSnowMultiplier();
            const fMultCost = getFireSnowMultUpgradeCost();

            const fSnowBoost = getFireSnowSnowBoostMultiplier();
            const nextFSnowBoost = getNextFireSnowSnowBoostMultiplier();
            const fSnowBoostCost = getFireSnowSnowBoostUpgradeCost();

            const fLarpMult = getFireSnowLarpMultiplier();
            const nextFLarpMult = getNextFireSnowLarpMultiplier();
            const fLarpCost = getFireSnowLarpUpgradeCost();

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-room-split-grid ${canAct140 ? '' : 'dimmed'}">
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar">
                            <span>🔥❄️ Вогняні: <b id="alm-firesnow-balance" style="color:#fb7185;">${formatFireSnowValue(s.fireSnow)}</b></span>
                            <span>Зібрано всього: <b id="alm-firesnow-total" style="color:#fda4af;">${formatFireSnowValue(s.totalFireSnow)}</b></span>
                        </div>
                        <div id="alm-firesnow-exchange-box" class="alm-storm-hero-box ${canAct140 ? '' : 'dimmed'}" style="border-color:rgba(251,113,133,0.55);background:linear-gradient(145deg, rgba(136,19,55,0.45), rgba(15,23,42,0.94));min-height:240px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                            <div style="font-size:2.8rem;margin-bottom:8px;">❄️ ➡️ 🔥❄️</div>
                            <div style="font-size:0.9rem;color:#fecdd3;font-weight:800;margin-bottom:4px;">
                                Курс обміну: <b>100,000 ❄️</b> = <b>${fMult} 🔥❄️</b> (x${fMult})
                            </div>
                            <div style="font-size:0.82rem;color:#cbd5e1;margin-bottom:12px;">
                                Ваші сніжинки: <b id="alm-firesnow-snow-available" style="color:#38bdf8;">${formatSnowValue(s.snow)}</b> ❄️ (10% = <b>${formatSnowValue(preview.snowToSpend)}</b> ❄️)
                            </div>
                            <button id="alm-firesnow-exchange-btn" class="alm-storm-launch-btn" style="background:linear-gradient(135deg,#fb7185,#e11d48);color:#fff;width:100%;" onclick="window.exchangeSnowForFireSnow()" ${canExchange ? '' : 'disabled'}>
                                🔥 Обміняти 10% (-${formatSnowValue(preview.snowToSpend)} ❄️) → +${gainPreviewStr} 🔥❄️
                            </button>
                        </div>
                    </div>

                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🔥❄️ Прокачки за вогняні сніжинки</div>
                            <div class="alm-compact-upg-list">
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x2 Вогняні сніжинки <span class="alm-lvl-pill">Lv.${s.fireSnowMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">При обміні: x${fMult} → x${nextFMult}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatFireSnowValue(fMultCost)} 🔥❄️</div>
                                    </div>
                                    <button id="alm-firesnow-upg-mult-btn" class="alm-compact-upg-btn fire"
                                            onclick="window.buyAuraLarpFireSnowMult()"
                                            ${canAct140 && s.fireSnow >= fMultCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x1.1 Сніжинки (20 сх.) <span class="alm-lvl-pill">Lv.${s.fireSnowSnowBoostLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Множник: x${formatMultValue(fSnowBoost)} → x${formatMultValue(nextFSnowBoost)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatFireSnowValue(fSnowBoostCost)} 🔥❄️</div>
                                    </div>
                                    <button id="alm-firesnow-upg-snow-btn" class="alm-compact-upg-btn fire"
                                            onclick="window.buyAuraLarpFireSnowSnowBoost()"
                                            ${canAct140 && s.fireSnow >= fSnowBoostCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x1.1 Ларпи <span class="alm-lvl-pill">Lv.${s.fireSnowLarpLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Бонус: x${formatMultValue(fLarpMult)} → x${formatMultValue(nextFLarpMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatFireSnowValue(fLarpCost)} 🔥❄️</div>
                                    </div>
                                    <button id="alm-firesnow-upg-larp-btn" class="alm-compact-upg-btn fire"
                                            onclick="window.buyAuraLarpFireSnowLarp()"
                                            ${canAct140 && s.fireSnow >= fLarpCost ? '' : 'disabled'}>+</button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 Топ по вогняних сніжинках</div>
                            <div id="alm-firesnow-lb-list" class="alm-snow-lb-list">
                                <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:8px;">Завантаження...</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 150 СХОДИНКИ (БОС ОРАНГУТАНГ)
        // ------------------------------------------
        if (activeRoomStep === 150) {
            const canFight150 = canInteractWithRoom(150);
            const isRespawning = Boolean(s.orangutanRespawnEndMs && now < s.orangutanRespawnEndMs);
            const respawnLeftSec = isRespawning ? Math.max(0, (s.orangutanRespawnEndMs - now) / 1000) : 0;

            const clickDmg = getChickenClickDamage(); // Шкода як прокачано у 90 кімнаті
            const respawnDur = getOrangutanRespawnDurationSec();
            const hpPct = Math.max(0, Math.min(100, (s.orangutanHp / ORANGUTAN_MAX_HP) * 100));
            const headDrop = Math.round(1 * getOrangutanHeadMultiplier());

            const bombCost = getOrangutanBombCost();
            const nextBombCost = getNextOrangutanBombCost();
            const bombDmg = getOrangutanBombDamage();
            const bombOnCd = Boolean(s.orangutanBombCooldownEndMs && now < s.orangutanBombCooldownEndMs);
            const bombCdLeftSec = bombOnCd ? Math.max(0, (s.orangutanBombCooldownEndMs - now) / 1000) : 0;
            const canThrowBomb = canFight150 && !isRespawning && s.orangutanHp > 0 && !bombOnCd && s.fireSnow >= bombCost;

            const hMult = getOrangutanHeadMultiplier();
            const nextHMult = getNextOrangutanHeadMultiplier();
            const hMultCost = getOrangutanHeadMultUpgradeCost();

            const bLvl = s.orangutanBombCostLvl || 0;
            const bMax = bLvl >= ORANGUTAN_BOMB_MAX_LVL;
            const bCostUpg = getOrangutanBombCostUpgradeCost();

            const oLarpMult = getOrangutanLarpMultiplier();
            const nextOLarpMult = getNextOrangutanLarpMultiplier();
            const oLarpCost = getOrangutanLarpUpgradeCost();

            let targetBtnsHtml = '';
            if (!isRespawning && s.orangutanHp > 0) {
                activeOrangutanButtons.forEach(btn => {
                    targetBtnsHtml += `
                        <button class="alm-orangutan-target-btn" data-org-btn-id="${btn.id}"
                                style="left:${btn.xPct}%; top:${btn.yPct}%;"
                                onclick="event.stopPropagation(); window.hitAuraLarpOrangutanBtn(${btn.id}, event)"
                                ${canFight150 ? '' : 'disabled'}>
                            👊 Удар!
                        </button>
                    `;
                });
            }

            return `
                ${selectorHtml}
                ${accessBannerHtml}
                <div class="alm-room-split-grid ${canFight150 ? '' : 'dimmed'}">
                    <div class="alm-room-left-col">
                        <div class="alm-zone-topbar" style="flex-wrap:wrap;gap:6px;">
                            <span>🦧 Голови: <b id="alm-orangutan-heads-balance" style="color:#f59e0b;">${formatOrangutanHeadValue(s.orangutanHeads)}</b> (всього: <b id="alm-orangutan-heads-total">${formatOrangutanHeadValue(s.totalOrangutanHeads)}</b>)</span>
                            <span>🔥❄️ Вогн. сніжинки: <b id="alm-orangutan-firesnow-balance" style="color:#fb7185;">${formatFireSnowValue(s.fireSnow)}</b></span>
                        </div>
                        <div id="alm-orangutan-arena" class="alm-chicken-arena alm-orangutan-arena ${canFight150 ? '' : 'disabled-zone'}">
                            <div class="alm-chicken-hp-wrap">
                                <div class="alm-chicken-hp-bar">
                                    <div id="alm-orangutan-hp-fill" class="alm-chicken-hp-fill" style="width:${hpPct}%;background:linear-gradient(90deg,#d97706,#f59e0b);"></div>
                                    <div id="alm-orangutan-hp-text" class="alm-chicken-hp-text">${formatWholeNumber(Math.ceil(s.orangutanHp))} / ${formatWholeNumber(ORANGUTAN_MAX_HP)} HP</div>
                                </div>
                            </div>

                            ${isRespawning ? `
                                <div class="alm-chicken-respawn-box" style="border-color:rgba(245,158,11,0.45);">
                                    <div style="font-size:2.4rem;margin-bottom:6px;">🌴</div>
                                    <div style="font-weight:900;color:#f59e0b;font-size:0.95rem;">Орангутанг повернеться через:</div>
                                    <div id="alm-orangutan-respawn-timer" style="font-size:1.2rem;font-weight:900;color:#fff;margin-top:4px;">${formatDurationUk(respawnLeftSec)}</div>
                                </div>
                            ` : `
                                <div id="alm-orangutan-boss-visual" class="alm-chicken-mob-btn orangutan-boss" onclick="window.onAuraLarpOrangutanDirectClick()">
                                    <div class="alm-chicken-sprite">🦧</div>
                                    <div style="font-weight:900;font-size:0.95rem;color:#fff;margin-top:2px;">${ORANGUTAN_MOB_NAME}</div>
                                    <div style="font-size:0.72rem;color:#fde68a;font-weight:800;">Кнопка: -${clickDmg} HP • Дроп: +${formatOrangutanHeadValue(headDrop)} 🦧</div>
                                </div>
                                ${targetBtnsHtml}
                            `}

                            <div class="alm-zone-bottom-pill">⏱️ Респавн: ${formatDurationUk(respawnDur)} • Кнопки кожні 2 сек</div>
                        </div>

                        <button id="alm-orangutan-bomb-btn" class="alm-bomb-launch-btn" onclick="window.throwOrangutanBomb()" ${canThrowBomb ? '' : 'disabled'}>
                            ${bombOnCd
                                ? `💣 Бомба: КД ${formatTimerMmSs(bombCdLeftSec)}`
                                : `💣 Кинути бомбу (-${formatWholeNumber(bombDmg)} HP) • ${bombCost} 🔥❄️`}
                        </button>
                    </div>

                    <div class="alm-room-right-col">
                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🦧 Прокачки за голови орангутанга</div>
                            <div class="alm-compact-upg-list">
                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x2 Голова орангутанга <span class="alm-lvl-pill">Lv.${s.orangutanHeadMultLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Дроп: x${hMult} → x${nextHMult}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatOrangutanHeadValue(hMultCost)} 🦧</div>
                                    </div>
                                    <button id="alm-orangutan-upg-mult-btn" class="alm-compact-upg-btn amber"
                                            onclick="window.buyAuraLarpOrangutanHeadMult()"
                                            ${canFight150 && s.orangutanHeads >= hMultCost ? '' : 'disabled'}>+</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">Ціна бомби -25 🔥❄️ <span class="alm-lvl-pill">Lv.${bLvl}/${ORANGUTAN_BOMB_MAX_LVL}</span></div>
                                        <div class="alm-compact-upg-desc">${bMax ? `Мінімум: 100 🔥❄️` : `Бомба: ${bombCost} → ${nextBombCost} 🔥❄️`}</div>
                                        <div class="alm-compact-upg-cost">${bMax ? 'МАКС' : `Ціна: ${formatOrangutanHeadValue(bCostUpg)} 🦧`}</div>
                                    </div>
                                    <button id="alm-orangutan-upg-bomb-btn" class="alm-compact-upg-btn amber"
                                            onclick="window.buyAuraLarpOrangutanBombCost()"
                                            ${!bMax && canFight150 && s.orangutanHeads >= bCostUpg ? '' : 'disabled'}>${bMax ? '✓' : '+'}</button>
                                </div>

                                <div class="alm-compact-upg-card">
                                    <div class="alm-compact-upg-info">
                                        <div class="alm-compact-upg-name">x1.2 Ларпи <span class="alm-lvl-pill">Lv.${s.orangutanLarpLvl || 0}</span></div>
                                        <div class="alm-compact-upg-desc">Бонус: x${formatMultValue(oLarpMult)} → x${formatMultValue(nextOLarpMult)}</div>
                                        <div class="alm-compact-upg-cost">Ціна: ${formatOrangutanHeadValue(oLarpCost)} 🦧</div>
                                    </div>
                                    <button id="alm-orangutan-upg-larp-btn" class="alm-compact-upg-btn amber"
                                            onclick="window.buyAuraLarpOrangutanLarp()"
                                            ${canFight150 && s.orangutanHeads >= oLarpCost ? '' : 'disabled'}>+</button>
                                </div>
                            </div>
                        </div>

                        <div class="alm-side-panel-box">
                            <div class="alm-side-panel-title">🏆 Топ по головах орангутанга</div>
                            <div id="alm-orangutan-lb-list" class="alm-snow-lb-list">
                                <div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:8px;">Завантаження...</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ------------------------------------------
        // ВМІСТ КІМНАТИ 160 СХОДИНКИ (КОГУТ ТА ЗОЛОТИЙ КОГУТ ДЛЯ 50 КІМНАТИ)
        // ------------------------------------------
        const canAct160 = canInteractWithRoom(160);

        const rLvl = s.roosterChanceLvl || 0;
        const rMax = rLvl >= ROOSTER_CHANCE_MAX_LVL;
        const rPct = getRoosterChancePct();
        const nextRPct = Math.min(100, rPct + 1);
        const rCost = getRoosterChanceUpgradeCost();

        const grLvl = s.goldenRoosterChanceLvl || 0;
        const grMax = grLvl >= GOLDEN_ROOSTER_CHANCE_MAX_LVL;
        const grPct = getGoldenRoosterChancePct();
        const nextGrPct = Math.min(100, grPct + 1);
        const grCost = getGoldenRoosterChanceUpgradeCost();
        const roostersKilled = s.roostersKilled || 0;
        const hasKilledEnoughRoosters = roostersKilled >= GOLDEN_ROOSTER_REQUIRED_KILLS;
        const effectiveGoldenPct = Number(((rPct / 100) * (grPct / 100) * 100).toFixed(2));

        return `
            ${selectorHtml}
            ${accessBannerHtml}
            <div class="alm-centered-room-section">
                <div class="alm-section-heading">🐓 Кімната 160 сходинки — Когути для 50 кімнати</div>

                <div class="alm-hero-upg-card crimson-theme ${canAct160 ? '' : 'dimmed'}">
                    <div class="alm-hero-upg-icon">🐓</div>
                    <div class="alm-hero-upg-body">
                        <div class="alm-hero-upg-title">Шанс появи Когута на 50 сх. <span class="alm-lvl-pill">Lv.${rLvl}/${ROOSTER_CHANCE_MAX_LVL}</span></div>
                        <div class="alm-hero-upg-effect">
                            ${rMax ? `Максимум: <b>100%</b>` : `Шанс: <b>${rPct}%</b> → <b>${nextRPct}%</b>`} (100,000 HP, <b>x25 пір'я</b>)
                        </div>
                        <div class="alm-hero-upg-cost">${rMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(rCost)}</b> ларп`}</div>
                    </div>
                    <button id="alm-rooster-chance-btn" class="alm-hero-upg-btn crimson" onclick="window.buyAuraLarpRoosterChance()" ${!rMax && canAct160 && s.larp >= rCost ? '' : 'disabled'}>
                        ${rMax ? 'МАКС' : 'Покращити'}
                    </button>
                </div>

                <div class="alm-hero-upg-card gold-theme ${canAct160 && hasKilledEnoughRoosters ? '' : 'dimmed'}">
                    <div class="alm-hero-upg-icon">🐓✨</div>
                    <div class="alm-hero-upg-body">
                        <div class="alm-hero-upg-title">Шанс Золотого Когута <span class="alm-lvl-pill">Lv.${grLvl}/${GOLDEN_ROOSTER_CHANCE_MAX_LVL}</span></div>
                        <div class="alm-hero-upg-effect">
                            ${grMax ? `Максимум: <b>100% від Когута</b>` : `Від Когута: <b>${grPct}%</b> → <b>${nextGrPct}%</b>`} (заг. шанс: <b>${effectiveGoldenPct}%</b>, <b>x250 пір'я</b>)
                        </div>
                        ${!hasKilledEnoughRoosters
                            ? `<div style="color:#f87171;font-size:0.78rem;font-weight:800;margin-top:2px;">🔒 Умова: Вбити ${GOLDEN_ROOSTER_REQUIRED_KILLS} когута на 50 сх. (${roostersKilled}/${GOLDEN_ROOSTER_REQUIRED_KILLS})</div>`
                            : `<div style="color:#4ade80;font-size:0.76rem;font-weight:700;margin-top:2px;">✅ Вбито когутів: ${roostersKilled}</div>`
                        }
                        <div class="alm-hero-upg-cost">${grMax ? 'МАКС' : `Ціна: <b>${formatLarpValue(grCost)}</b> ларп`}</div>
                    </div>
                    <button id="alm-golden-rooster-chance-btn" class="alm-hero-upg-btn gold" onclick="window.buyAuraLarpGoldenRoosterChance()" ${!grMax && hasKilledEnoughRoosters && canAct160 && s.larp >= grCost ? '' : 'disabled'}>
                        ${grMax ? 'МАКС' : 'Покращити'}
                    </button>
                </div>
            </div>
        `;
    }

    function renderMultipliersTabHtml() {
        const s = initAuraLarpMonsterState();
        const stairMult = getStairMultiplier();
        const roomMult = getRoomLarpMultiplier();
        const snowLarpMult = getSnowLarpMultiplier();
        const trashLarpMult = getTrashLarpMultiplier();
        const featherLarpMult = getFeatherLarpMultiplier();
        const mergeLarpMult = getMergeLarpMultiplier();
        const stoneLarpMult = getStoneLarpMultiplier();
        const fireSnowLarpMult = getFireSnowLarpMultiplier();
        const orangutanLarpMult = getOrangutanLarpMultiplier();
        const hasNickBoost = hasLartsuNicknameBoost();
        const totalMult = getTotalLarpMultiplier();
        const totalIncome = getLarpPerSecond();
        const offlinePct = getOfflineLarpPercent();

        const nickBoostItemHtml = hasNickBoost ? `
            <div class="alm-mult-item" style="border-color:rgba(250,204,21,0.55);background:rgba(113,63,18,0.3);">
                <div class="alm-mult-item-name" style="color:#fde047;">👑 Пасивний буст ніку «Ларцу»</div>
                <div class="alm-mult-item-val" style="color:#facc15;">x${formatMultValue(LARTSU_NICKNAME_MULT)}</div>
            </div>
        ` : '';

        return `
            <div class="alm-mult-total-card">
                <div style="font-size:0.85rem;color:#94a3b8;font-weight:700;">ЗАГАЛЬНИЙ МНОЖНИК ЛАРПІВ</div>
                <div class="alm-mult-total-value">x${formatMultValue(totalMult)}</div>
                <div style="font-size:0.92rem;color:#4ade80;font-weight:800;margin-top:4px;">
                    Поточний дохід: ${formatLarpRate(totalIncome)} ларп/сек
                </div>
                <div style="font-size:0.8rem;color:#cbd5e1;margin-top:4px;">
                    🌙 Офлайн-дохід (від ${getHighestUnlockedStepNumber()} сх.): <b>${offlinePct}%</b> (${formatLarpRate(getHighestStepLarpPerSecond() * (offlinePct / 100))} ларп/сек)
                </div>
            </div>

            <div class="alm-mult-list">
                ${nickBoostItemHtml}
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">🪜 Поточна сходинка (${s.currentStep} / ${MAX_STEP})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(stairMult)}</div>
                </div>
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">🚪 Прокачка кімнати 10 сх. (Рівень ${s.roomMultLvl})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(roomMult)}</div>
                </div>
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">❄️ Прокачка сніжинок 20 сх. (Рівень ${s.snowLarpMultLvl})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(snowLarpMult)}</div>
                </div>
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">🗑️ Прокачка сміття 30 сх. (Рівень ${s.trashLarpMultLvl})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(trashLarpMult)}</div>
                </div>
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">🪶 Прокачка пір'я 50 сх. (Рівень ${s.featherLarpMultLvl || 0})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(featherLarpMult)}</div>
                </div>
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">💊 Прокачка вітамінів 70 сх. (Рівень ${s.mergeLarpMultLvl || 0})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(mergeLarpMult)}</div>
                </div>
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">🪨 Прокачка каменю 120 сх. (Рівень ${s.stoneLarpMultLvl || 0})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(stoneLarpMult)}</div>
                </div>
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">🔥❄️ Прокачка вогн. сніжинок 140 сх. (Рівень ${s.fireSnowLarpLvl || 0})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(fireSnowLarpMult)}</div>
                </div>
                <div class="alm-mult-item">
                    <div class="alm-mult-item-name">🦧 Прокачка голів орангутанга 150 сх. (Рівень ${s.orangutanLarpLvl || 0})</div>
                    <div class="alm-mult-item-val">x${formatMultValue(orangutanLarpMult)}</div>
                </div>
            </div>
        `;
    }

    function renderLeaderboardTabHtml() {
        return `
            <div class="alm-lb-subtabs">
                <button class="alm-lb-tab-btn ${activeLeaderboardType === 'highestStep' ? 'active' : ''}"
                        onclick="window.switchAuraLarpLeaderboardType('highestStep')">
                    🪜 Сходинка
                </button>
                <button class="alm-lb-tab-btn ${activeLeaderboardType === 'larpPerSec' ? 'active' : ''}"
                        onclick="window.switchAuraLarpLeaderboardType('larpPerSec')">
                    ⚡ Дохід/сек
                </button>
                <button class="alm-lb-tab-btn ${activeLeaderboardType === 'totalLarp' ? 'active' : ''}"
                        onclick="window.switchAuraLarpLeaderboardType('totalLarp')">
                    👑 Всього ларпів
                </button>
            </div>
            <div id="alm-leaderboard-list" class="alm-leaderboard-list">
                <div style="text-align:center;color:#94a3b8;padding:20px;">Завантаження топу...</div>
            </div>
        `;
    }

    function renderAuraLarpMonsterUI(shouldScrollToChar) {
        const container = document.getElementById('tab-aura-larp-monster');
        if (!container) return;

        const prevViewport = document.getElementById('alm-stairs-viewport');
        const prevScrollTop = prevViewport ? prevViewport.scrollTop : null;

        const s = initAuraLarpMonsterState();
        const resetBtnText = resetConfirmPending ? '⚠️ Точно обнулити?' : '🗑️ Обнулити';
        const resetBtnClass = resetConfirmPending ? 'alm-reset-btn confirm' : 'alm-reset-btn';

        let offlineBannerHtml = '';
        const offlinePct = getOfflineLarpPercent();

        if (isCheckingGlobalTime && offlinePct > 0) {
            offlineBannerHtml = `
                <div class="alm-offline-banner">
                    <span>🌐 Перевірка глобального часу та офлайн-прогресу...</span>
                </div>
            `;
        } else if (noInternetError && offlinePct > 0) {
            offlineBannerHtml = `
                <div class="alm-offline-banner error">
                    <span>⚠️ Відсутній інтернет. Офлайн-фарм (${offlinePct}%) нарахується після відновлення мережі.</span>
                    <button class="alm-mini-go-btn" onclick="window.retryAuraLarpGlobalTime()">Оновити</button>
                </div>
            `;
        } else if (offlineRewardReport) {
            offlineBannerHtml = `
                <div class="alm-offline-banner success">
                    <span>🌙 Офлайн (${formatDurationUk(offlineRewardReport.elapsedSec)}, <b>${offlineRewardReport.offlinePct}%</b> від ${offlineRewardReport.highestStep} сх.): <b>+${formatLarpValue(offlineRewardReport.earnedOffline)} ларп</b></span>
                    <button class="alm-mini-go-btn" onclick="window.dismissAuraLarpOfflineReport()">OK</button>
                </div>
            `;
        }

        let contentHtml = '';
        if (activeLarpSubTab === 'stairs') {
            contentHtml = renderStairsTabHtml();
        } else if (activeLarpSubTab === 'room') {
            contentHtml = renderRoomTabHtml();
        } else if (activeLarpSubTab === 'multipliers') {
            contentHtml = renderMultipliersTabHtml();
        } else {
            contentHtml = renderLeaderboardTabHtml();
        }

        container.innerHTML = `
            <div class="alm-wrapper">
                <div class="alm-topbar">
                    <button class="alm-back-btn" onclick="window.exitAuraLarpMonsterMode()">⬅️ Назад</button>
                    <div class="alm-topbar-center">
                        <span class="alm-topbar-title">👾 Аура Ларп Монстер</span>
                        <span id="alm-current-step-badge" class="alm-topbar-step-pill">${s.currentStep} / ${MAX_STEP}</span>
                    </div>
                    <button id="alm-reset-btn" class="${resetBtnClass}" onclick="window.handleResetAuraLarpClick()" title="Повністю обнулити прогрес Аура Ларп Монстер">
                        ${resetBtnText}
                    </button>
                </div>

                ${offlineBannerHtml}

                <div class="alm-balance-card">
                    <div class="alm-balance-row">
                        <span class="alm-balance-icon">👾</span>
                        <span id="alm-larp-balance" class="alm-balance-value">${formatLarpValue(s.larp)}</span>
                        <span class="alm-balance-unit">ларп</span>
                    </div>
                    <div id="alm-larp-rate" class="alm-balance-rate">${formatLarpRate(getLarpPerSecond())} ларп/сек</div>
                    ${hasLartsuNicknameBoost() ? `<div style="margin-top:4px;font-size:0.78rem;font-weight:900;color:#facc15;">👑 Пасивний буст ніку «Ларцу»: x1000</div>` : ''}
                </div>

                <div class="alm-subtabs-nav">
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'stairs' ? 'active' : ''}"
                            onclick="window.switchAuraLarpSubTab('stairs')">
                        🪜 Сходи
                    </button>
                    <button class="alm-subtab-btn ${activeLarpSubTab === 'room' ? 'active' : ''}"
                            onclick="window.switchAuraLarpSubTab('room')">
                        🚪 Кімната
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

                <div class="alm-main-card">
                    ${contentHtml}
                </div>
            </div>
        `;

        if (activeLarpSubTab === 'stairs') {
            if (shouldScrollToChar) {
                setTimeout(() => scrollToCharacterStep(true), 20);
            } else if (prevScrollTop !== null) {
                const newViewport = document.getElementById('alm-stairs-viewport');
                if (newViewport) newViewport.scrollTop = prevScrollTop;
            }
            updateTeleporterDynamicHud();
        }

        if (activeLarpSubTab === 'room') {
            if (activeRoomStep === 20) {
                const snowZone = document.getElementById('alm-snow-zone');
                if (snowZone) {
                    snowZone.addEventListener('pointerdown', handleSnowPointerDown);
                    snowZone.addEventListener('pointermove', handleSnowPointerSwipe);
                }
                renderSnowLeaderboardList();
            } else if (activeRoomStep === 30) {
                const trashZone = document.getElementById('alm-trash-zone');
                if (trashZone) {
                    trashZone.addEventListener('pointerdown', handleTrashPointerDown);
                }
                renderTrashLeaderboardList();
            } else if (activeRoomStep === 50) {
                renderFeatherLeaderboardList();
            } else if (activeRoomStep === 70) {
                const mergeZone = document.getElementById('alm-merge-zone');
                if (mergeZone) {
                    mergeZone.addEventListener('pointerdown', handleMergePointerDown);
                }
                renderVitaminLeaderboardList();
            } else if (activeRoomStep === 120) {
                renderStoneLeaderboardList();
            } else if (activeRoomStep === 140) {
                renderFireSnowLeaderboardList();
            } else if (activeRoomStep === 150) {
                renderOrangutanHeadLeaderboardList();
            }
        }

        if (activeLarpSubTab === 'leaderboard') {
            renderLarpLeaderboardList();
        }
    }

    function switchAuraLarpSubTab(subTab) {
        if (!['stairs', 'room', 'multipliers', 'leaderboard'].includes(subTab)) return;
        activeLarpSubTab = subTab;
        if (subTab === 'room') {
            const s = initAuraLarpMonsterState();
            if (ROOM_STEPS.includes(s.currentStep)) {
                activeRoomStep = s.currentStep;
            }
        }
        persistAuraLarpState(false);
        renderAuraLarpMonsterUI(subTab === 'stairs');
    }

    // ------------------------------------------
    // ВХІД І ВИХІД З РЕЖИМУ АУРА ЛАРП МОНСТЕР (ОКРЕМА ВКЛАДКА)
    // ------------------------------------------
    function findMainTabNav() {
        const directNav = document.querySelector('.tab-nav, .tabs-nav, .nav-tabs, #tab-nav, .tabs, nav.tabs, .main-tabs');
        if (directNav) return directNav;

        const sampleTabBtn = document.querySelector('.tab-btn:not(#alm-main-tab-btn), .nav-btn:not(#alm-main-tab-btn), [data-tab]:not(#alm-main-tab-btn), button[onclick*="switchTab("]:not(#alm-main-tab-btn)');
        if (sampleTabBtn && sampleTabBtn.parentElement) {
            return sampleTabBtn.parentElement;
        }
        return null;
    }

    function removeAuraLarpFromMinigames() {
        const oldCard = document.getElementById('alm-entry-card');
        if (oldCard) oldCard.remove();

        const oldFallbackBtn = document.getElementById('alm-nav-fallback-btn');
        if (oldFallbackBtn) oldFallbackBtn.remove();

        const minigamesTab = document.getElementById('tab-minigames') || document.querySelector('[id*="minigame"]');
        if (!minigamesTab) return;

        minigamesTab.querySelectorAll('button, .minigame-card, .card, .upgrade-card, [onclick]').forEach(el => {
            if (el.id === 'alm-main-tab-btn') return;
            const onclickVal = el.getAttribute('onclick') || '';
            const textVal = (el.textContent || '').toLowerCase();
            if (onclickVal.includes('enterAuraLarpMonsterMode') || textVal.includes('аура ларп монстер')) {
                const cardContainer = el.closest('.minigame-card, .card, .upgrade-card') || el;
                if (cardContainer && cardContainer !== minigamesTab) {
                    cardContainer.remove();
                } else {
                    el.remove();
                }
            }
        });
    }

    function cleanupAuraLarpModeOnTabSwitch() {
        if (!isAuraLarpModeActive) return;
        isAuraLarpModeActive = false;
        draggingTrashId = null;
        draggingMergeId = null;
        isPointerSwipingSnow = false;

        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }

        const gameScreen = document.getElementById('game-screen');
        if (gameScreen) {
            gameScreen.classList.remove('alm-mode-active');
        }

        const tabBtn = document.getElementById('alm-main-tab-btn');
        if (tabBtn) {
            tabBtn.classList.remove('active');
        }

        const almContainer = document.getElementById('tab-aura-larp-monster');
        if (almContainer) {
            almContainer.classList.remove('active');
            almContainer.style.display = 'none';
        }

        document.querySelectorAll('.tab-content').forEach(tc => {
            if (tc.id !== 'tab-aura-larp-monster') {
                tc.style.display = '';
            }
        });

        updateTopGameHeader();
        persistAuraLarpState(true);
    }

    function installSwitchTabHook() {
        if (typeof window.switchTab === 'function' && !window.switchTab.__almWrapped) {
            const origSwitchTab = window.switchTab;
            const wrappedSwitchTab = function (tabName) {
                if (tabName === 'aura-larp-monster' || tabName === 'tab-aura-larp-monster') {
                    window.enterAuraLarpMonsterMode();
                    return;
                }
                cleanupAuraLarpModeOnTabSwitch();
                return origSwitchTab.apply(this, arguments);
            };
            wrappedSwitchTab.__almWrapped = true;
            window.switchTab = wrappedSwitchTab;
        }
    }

    function bindSiblingTabListeners(tabNav) {
        if (!tabNav || tabNav.__almDelegatedClick) return;
        tabNav.__almDelegatedClick = true;
        tabNav.addEventListener('click', function (e) {
            const clickedBtn = e.target && e.target.closest ? e.target.closest('button, .tab-btn, .nav-btn, [data-tab]') : null;
            if (!clickedBtn || clickedBtn.id === 'alm-main-tab-btn' || clickedBtn.id === 'alm-home-tab-btn') return;
            if (isAuraLarpModeActive) {
                cleanupAuraLarpModeOnTabSwitch();
                clickedBtn.classList.add('active');
            }
        }, true);
    }

    function extractTabIdFromButton(btn) {
        if (!btn) return null;
        const dataTab = btn.getAttribute('data-tab');
        if (dataTab && dataTab !== 'aura-larp-monster' && dataTab !== 'alm-home') {
            return dataTab;
        }
        const onclickAttr = btn.getAttribute('onclick') || '';
        const match = onclickAttr.match(/switchTab\s*\(\s*['"]([^'"]+)['"]\s*\)/);
        if (match && match[1] && match[1] !== 'aura-larp-monster') {
            return match[1];
        }
        return null;
    }

    function syncNavigationTabsVisibility() {
        const tabNav = findMainTabNav();
        if (!tabNav) return;

        const homeTabBtn = document.getElementById('alm-home-tab-btn');
        const mainTabBtn = document.getElementById('alm-main-tab-btn');

        tabNav.querySelectorAll('button, .tab-btn, .nav-btn, [data-tab]').forEach(btn => {
            if (btn.id === 'alm-main-tab-btn' || btn.id === 'alm-home-tab-btn') return;
            if (isAuraLarpModeActive) {
                btn.classList.add('alm-world-tab-hidden');
                btn.classList.remove('active');
            } else {
                btn.classList.remove('alm-world-tab-hidden');
            }
        });

        if (homeTabBtn) {
            homeTabBtn.style.display = isAuraLarpModeActive ? '' : 'none';
            homeTabBtn.classList.remove('active');
        }

        if (mainTabBtn) {
            mainTabBtn.style.display = '';
            mainTabBtn.classList.toggle('active', isAuraLarpModeActive);
        }
    }

    function ensureAuraLarpEntryButton() {
        injectAuraLarpStyles();
        installSwitchTabHook();
        removeAuraLarpFromMinigames();

        const tabNav = findMainTabNav();
        if (!tabNav) return;

        bindSiblingTabListeners(tabNav);

        const siblingTabBtn = tabNav.querySelector('.tab-btn:not(#alm-main-tab-btn):not(#alm-home-tab-btn), .nav-btn:not(#alm-main-tab-btn):not(#alm-home-tab-btn), button:not(#alm-main-tab-btn):not(#alm-home-tab-btn)');
        const baseTabClass = siblingTabBtn
            ? siblingTabBtn.className.replace(/\bactive\b/g, '').replace(/\balm-world-tab-hidden\b/g, '').trim()
            : 'tab-btn';

        let homeTabBtn = document.getElementById('alm-home-tab-btn');
        if (!homeTabBtn) {
            homeTabBtn = document.createElement('button');
            homeTabBtn.id = 'alm-home-tab-btn';
            homeTabBtn.type = 'button';
            homeTabBtn.setAttribute('data-tab', 'alm-home');
            homeTabBtn.className = `${baseTabClass} alm-home-nav-btn`.trim();
            homeTabBtn.textContent = '🏠 Додому';
            homeTabBtn.style.display = isAuraLarpModeActive ? '' : 'none';
            homeTabBtn.onclick = function () {
                window.exitAuraLarpMonsterMode();
            };
            tabNav.appendChild(homeTabBtn);
        }

        const existingNavTrigger = tabNav.querySelector('[onclick*="enterAuraLarpMonsterMode"]');
        if (existingNavTrigger && existingNavTrigger.id !== 'alm-main-tab-btn') {
            existingNavTrigger.id = 'alm-main-tab-btn';
            existingNavTrigger.setAttribute('data-tab', 'aura-larp-monster');
            existingNavTrigger.classList.add('alm-entry-nav-btn');
            existingNavTrigger.textContent = '👾 Аура ларп монстер';
            existingNavTrigger.onclick = function () {
                window.enterAuraLarpMonsterMode();
            };
        } else if (!document.getElementById('alm-main-tab-btn')) {
            const tabBtn = document.createElement('button');
            tabBtn.id = 'alm-main-tab-btn';
            tabBtn.type = 'button';
            tabBtn.setAttribute('data-tab', 'aura-larp-monster');
            tabBtn.className = `${baseTabClass} alm-entry-nav-btn`.trim();
            tabBtn.textContent = '👾 Аура ларп монстер';
            tabBtn.onclick = function () {
                window.enterAuraLarpMonsterMode();
            };
            tabNav.appendChild(tabBtn);
        }

        syncNavigationTabsVisibility();
    }

    function ensureAuraLarpContainer() {
        let container = document.getElementById('tab-aura-larp-monster');
        if (!container) {
            const existingContent = document.querySelector('.tab-content');
            const parentEl = (existingContent && existingContent.parentElement) || document.getElementById('game-screen') || document.body;
            container = document.createElement('div');
            container.id = 'tab-aura-larp-monster';
            container.className = 'tab-content';
            parentEl.appendChild(container);
        }
        return container;
    }

    function cleanupAuraLarpModeOnTabSwitch() {
        if (!isAuraLarpModeActive) return;
        isAuraLarpModeActive = false;
        draggingTrashId = null;
        draggingMergeId = null;
        isPointerSwipingSnow = false;

        stopHeaderAntiJitterObserver();

        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }

        const gameScreen = document.getElementById('game-screen');
        if (gameScreen) {
            gameScreen.classList.remove('alm-mode-active');
        }

        syncNavigationTabsVisibility();

        const almContainer = document.getElementById('tab-aura-larp-monster');
        if (almContainer) {
            almContainer.classList.remove('active');
            almContainer.style.display = 'none';
        }

        document.querySelectorAll('.tab-content').forEach(tc => {
            if (tc.id !== 'tab-aura-larp-monster') {
                tc.style.display = '';
            }
        });

        updateTopGameHeader();
        persistAuraLarpState(true);
    }

    function enterAuraLarpMonsterMode() {
        const s = initAuraLarpMonsterState();
        injectAuraLarpStyles();
        ensureAuraLarpEntryButton();

        const tabNav = findMainTabNav();
        if (tabNav && !isAuraLarpModeActive) {
            const activeWorldBtn = tabNav.querySelector('.active:not(#alm-main-tab-btn):not(#alm-home-tab-btn)');
            const detectedTabId = extractTabIdFromButton(activeWorldBtn);
            if (detectedTabId) {
                lastNormalTabId = detectedTabId;
            }
        }

        isAuraLarpModeActive = true;
        activeLarpSubTab = s.savedSubTab || 'stairs';
        activeRoomStep = ROOM_STEPS.includes(s.savedRoomStep) ? s.savedRoomStep : (ROOM_STEPS.includes(s.currentStep) ? s.currentStep : 10);

        const gameScreen = document.getElementById('game-screen');
        if (gameScreen) {
            gameScreen.classList.add('alm-mode-active');
        }

        if (tabNav) {
            tabNav.style.display = '';
        }
        syncNavigationTabsVisibility();

        document.querySelectorAll('.tab-content').forEach(tc => {
            tc.classList.remove('active');
            tc.style.display = 'none';
        });

        const almContainer = ensureAuraLarpContainer();
        almContainer.classList.add('active');
        almContainer.style.display = 'flex';

        renderAuraLarpMonsterUI(activeLarpSubTab === 'stairs');
        updateTopGameHeader();
        startHeaderAntiJitterObserver();
        startVisualAnimationLoop();
        verifyGlobalTimeAndApplyOfflineProgress();
        syncLarpLeaderboard(true);
        persistAuraLarpState(false);
    }

    function exitAuraLarpMonsterMode() {
        cleanupAuraLarpModeOnTabSwitch();

        const tabNav = findMainTabNav();
        if (tabNav) {
            tabNav.style.display = '';
        }

        if (typeof window.switchTab === 'function') {
            let targetTabId = lastNormalTabId || 'clicker';
            if (tabNav) {
                const candidateBtn = tabNav.querySelector(`[data-tab="${targetTabId}"]:not(#alm-main-tab-btn):not(#alm-home-tab-btn)`)
                    || tabNav.querySelector('.tab-btn:not(#alm-main-tab-btn):not(#alm-home-tab-btn), .nav-btn:not(#alm-main-tab-btn):not(#alm-home-tab-btn), [data-tab]:not(#alm-main-tab-btn):not(#alm-home-tab-btn), button:not(#alm-main-tab-btn):not(#alm-home-tab-btn)');
                const extracted = extractTabIdFromButton(candidateBtn);
                if (extracted) {
                    targetTabId = extracted;
                }
            }
            window.switchTab(targetTabId);
        }

        ensureAuraLarpEntryButton();
        updateTopGameHeader();
    }

    // ------------------------------------------
    // СТИЛІ МОДУЛЯ (ЗБЕРЕЖЕНО ОРИГІНАЛЬНИЙ ДИЗАЙН)
    // ------------------------------------------
    function injectAuraLarpStyles() {
        if (document.getElementById('alm-module-styles')) return;
        const style = document.createElement('style');
        style.id = 'alm-module-styles';
        style.textContent = `
            .alm-world-tab-hidden {
                display: none !important;
            }
            .alm-top-larp,
            .alm-top-room {
                font-variant-numeric: tabular-nums !important;
                min-width: 146px !important;
                box-sizing: border-box !important;
                justify-content: center !important;
                transform: none !important;
                transition: none !important;
                animation: none !important;
            }
            .alm-top-larp #aura-count,
            .alm-top-larp #cps-count,
            .alm-top-room #energy-count,
            .alm-top-room #energy-timer-subtext {
                font-variant-numeric: tabular-nums !important;
                display: inline-block;
            }
            .alm-home-nav-btn {
                background: linear-gradient(135deg, #0ea5e9, #2563eb) !important;
                color: #fff !important;
                border-color: #7dd3fc !important;
                box-shadow: 0 2px 10px rgba(14, 165, 233, 0.35);
            }
            .alm-home-nav-btn:hover {
                filter: brightness(1.08);
            }
            .alm-entry-nav-btn {
                background: linear-gradient(135deg, #7e22ce, #4f46e5) !important;
                color: #fff !important;
                border-color: #c084fc !important;
                box-shadow: 0 2px 10px rgba(147, 51, 234, 0.35);
            }
            .alm-entry-nav-btn:hover {
                filter: brightness(1.08);
            }
            #tab-aura-larp-monster {
                width: 100%;
                max-width: 780px;
                padding: 10px 12px 24px 12px;
                flex-direction: column;
                align-items: center;
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
                background: rgba(15, 23, 42, 0.92);
                border: 1px solid rgba(148, 163, 184, 0.25);
                border-radius: 14px;
                padding: 8px 10px;
            }
            .alm-back-btn {
                background: rgba(51, 65, 85, 0.85);
                color: #f8fafc;
                border: 1px solid rgba(148, 163, 184, 0.35);
                border-radius: 10px;
                padding: 7px 12px;
                font-weight: 800;
                font-size: 0.82rem;
                cursor: pointer;
            }
            .alm-topbar-center {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: center;
            }
            .alm-topbar-title {
                font-weight: 900;
                font-size: 0.98rem;
                color: #f8fafc;
            }
            .alm-topbar-step-pill {
                background: rgba(56, 189, 248, 0.18);
                border: 1px solid rgba(56, 189, 248, 0.45);
                color: #38bdf8;
                font-weight: 900;
                font-size: 0.78rem;
                padding: 3px 9px;
                border-radius: 999px;
            }
            .alm-reset-btn {
                background: rgba(239, 68, 68, 0.16);
                color: #fca5a5;
                border: 1px solid rgba(239, 68, 68, 0.4);
                border-radius: 10px;
                padding: 7px 10px;
                font-weight: 800;
                font-size: 0.78rem;
                cursor: pointer;
            }
            .alm-reset-btn.confirm {
                background: #dc2626;
                color: #fff;
                border-color: #f87171;
            }
            .alm-offline-banner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 12px;
                background: rgba(30, 41, 59, 0.9);
                border: 1px solid rgba(148, 163, 184, 0.3);
                font-size: 0.82rem;
                color: #e2e8f0;
            }
            .alm-offline-banner.error {
                border-color: rgba(239, 68, 68, 0.5);
                background: rgba(127, 29, 29, 0.45);
                color: #fecaca;
            }
            .alm-offline-banner.success {
                border-color: rgba(74, 222, 128, 0.55);
                background: rgba(20, 83, 45, 0.45);
                color: #bbf7d0;
            }
            .alm-balance-card {
                background: linear-gradient(135deg, rgba(30, 27, 75, 0.94), rgba(15, 23, 42, 0.96));
                border: 2px solid rgba(168, 85, 247, 0.45);
                border-radius: 16px;
                padding: 12px 16px;
                text-align: center;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
            }
            .alm-balance-row {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            .alm-balance-icon { font-size: 1.5rem; }
            .alm-balance-value {
                font-size: 1.75rem;
                font-weight: 900;
                color: #f8fafc;
                font-variant-numeric: tabular-nums;
            }
            .alm-balance-unit {
                font-size: 0.95rem;
                font-weight: 800;
                color: #c084fc;
            }
            .alm-balance-rate {
                font-size: 0.88rem;
                font-weight: 800;
                color: #4ade80;
                margin-top: 2px;
            }
            .alm-subtabs-nav {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 6px;
            }
            .alm-subtab-btn {
                background: rgba(15, 23, 42, 0.92);
                border: 1px solid rgba(148, 163, 184, 0.25);
                color: #cbd5e1;
                border-radius: 12px;
                padding: 9px 6px;
                font-weight: 800;
                font-size: 0.82rem;
                cursor: pointer;
                transition: all 0.15s;
            }
            .alm-subtab-btn.active {
                background: linear-gradient(135deg, #7e22ce, #4f46e5);
                color: #fff;
                border-color: #c084fc;
                box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
            }
            .alm-main-card {
                background: rgba(15, 23, 42, 0.92);
                border: 1px solid rgba(148, 163, 184, 0.22);
                border-radius: 16px;
                padding: 12px;
                width: 100%;
            }
            .alm-stairs-header-bar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 10px;
            }
            .alm-stairs-caption {
                font-size: 0.78rem;
                color: #94a3b8;
                font-weight: 700;
            }
            .alm-unlock-step-btn {
                background: linear-gradient(135deg, #22c55e, #16a34a);
                color: #052e16;
                border: none;
                border-radius: 10px;
                padding: 8px 12px;
                font-weight: 900;
                font-size: 0.8rem;
                cursor: pointer;
            }
            .alm-unlock-step-btn:disabled {
                background: #334155;
                color: #94a3b8;
                cursor: not-allowed;
            }
            .alm-stairs-viewport {
                position: relative;
                width: 100%;
                height: 440px;
                overflow-y: auto;
                overflow-x: hidden;
                background: linear-gradient(180deg, rgba(2, 6, 23, 0.95), rgba(15, 23, 42, 0.9));
                border: 1px solid rgba(148, 163, 184, 0.2);
                border-radius: 14px;
            }
            .alm-stairs-track {
                position: relative;
                width: 100%;
            }
            .alm-stair-row {
                position: absolute;
                left: 0;
                right: 0;
                height: 38px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10px;
                border-bottom: 1px solid rgba(148, 163, 184, 0.08);
                cursor: pointer;
                transition: background 0.15s;
            }
            .alm-stair-row.unlocked:hover {
                background: rgba(56, 189, 248, 0.08);
            }
            .alm-stair-row.current-step {
                background: rgba(74, 222, 128, 0.12);
            }
            .alm-stair-row.target-step {
                background: rgba(250, 204, 21, 0.1);
            }
            .alm-step-bar {
                position: absolute;
                bottom: 4px;
                height: 8px;
                border-radius: 6px;
                background: #334155;
            }
            .alm-stair-row.unlocked .alm-step-bar {
                background: linear-gradient(90deg, #38bdf8, #818cf8);
                box-shadow: 0 0 8px rgba(56, 189, 248, 0.45);
            }
            .alm-stair-row.next-unlock .alm-step-bar {
                background: linear-gradient(90deg, #f59e0b, #eab308);
            }
            .alm-step-center-info {
                margin-left: 48%;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            .alm-step-num {
                font-weight: 900;
                font-size: 0.85rem;
                color: #f8fafc;
            }
            .alm-step-mult {
                font-weight: 800;
                font-size: 0.78rem;
                color: #4ade80;
            }
            .alm-step-right-slot {
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .alm-room-chip-btn {
                background: rgba(56, 189, 248, 0.2);
                border: 1px solid rgba(56, 189, 248, 0.55);
                color: #e0f2fe;
                border-radius: 8px;
                padding: 3px 7px;
                font-size: 0.72rem;
                font-weight: 800;
                cursor: pointer;
            }
            .alm-room-chip-btn.locked {
                opacity: 0.55;
            }
            .alm-step-cost-tag {
                font-size: 0.74rem;
                font-weight: 800;
                color: #fbbf24;
            }
            .alm-character {
                position: absolute;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                align-items: center;
                pointer-events: none;
                z-index: 15;
            }
            .alm-char-status {
                background: rgba(15, 23, 42, 0.92);
                border: 1px solid rgba(56, 189, 248, 0.5);
                color: #38bdf8;
                font-size: 0.68rem;
                font-weight: 900;
                padding: 1px 6px;
                border-radius: 8px;
                white-space: nowrap;
                margin-bottom: 2px;
            }
            .alm-char-avatar {
                font-size: 1.45rem;
                filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.8));
            }
            .alm-character.is-moving .alm-char-avatar {
                animation: almBounce 0.35s infinite alternate;
            }
            @keyframes almBounce {
                from { transform: translateY(0); }
                to { transform: translateY(-4px); }
            }
            .alm-room-selector {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-bottom: 10px;
            }
            .alm-room-pill {
                background: rgba(30, 41, 59, 0.85);
                border: 1px solid rgba(148, 163, 184, 0.25);
                color: #cbd5e1;
                border-radius: 10px;
                padding: 6px 9px;
                font-size: 0.75rem;
                font-weight: 800;
                cursor: pointer;
            }
            .alm-room-pill.active {
                background: linear-gradient(135deg, #2563eb, #7c3aed);
                color: #fff;
                border-color: #93c5fd;
            }
            .alm-room-pill.locked {
                opacity: 0.55;
            }
            .alm-room-alert {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 12px;
                margin-bottom: 10px;
                font-size: 0.8rem;
            }
            .alm-room-alert.locked {
                background: rgba(127, 29, 29, 0.45);
                border: 1px solid rgba(239, 68, 68, 0.45);
                color: #fecaca;
            }
            .alm-room-alert.warning {
                background: rgba(120, 53, 15, 0.45);
                border: 1px solid rgba(245, 158, 11, 0.5);
                color: #fde68a;
            }
            .alm-mini-go-btn {
                background: #f59e0b;
                color: #1c1917;
                border: none;
                border-radius: 8px;
                padding: 5px 10px;
                font-weight: 900;
                font-size: 0.76rem;
                cursor: pointer;
            }
            .alm-centered-room-section {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .alm-section-heading {
                font-weight: 900;
                font-size: 0.95rem;
                color: #f8fafc;
                margin-bottom: 2px;
            }
            .alm-hero-upg-card {
                display: flex;
                align-items: center;
                gap: 10px;
                background: rgba(30, 41, 59, 0.85);
                border: 1px solid rgba(148, 163, 184, 0.25);
                border-radius: 14px;
                padding: 12px;
            }
            .alm-hero-upg-card.dimmed,
            .alm-room-split-grid.dimmed,
            .alm-storm-hero-box.dimmed {
                opacity: 0.65;
            }
            .alm-hero-upg-card.emerald-theme {
                border-color: rgba(74, 222, 128, 0.4);
            }
            .alm-hero-upg-card.snow-theme {
                border-color: rgba(56, 189, 248, 0.4);
            }
            .alm-hero-upg-card.purple-theme {
                border-color: rgba(192, 132, 252, 0.45);
            }
            .alm-hero-upg-card.crimson-theme {
                border-color: rgba(248, 113, 113, 0.45);
            }
            .alm-hero-upg-card.gold-theme {
                border-color: rgba(250, 204, 21, 0.5);
            }
            .alm-hero-upg-icon {
                font-size: 1.8rem;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(15, 23, 42, 0.85);
                border-radius: 12px;
                flex-shrink: 0;
            }
            .alm-hero-upg-body {
                flex: 1;
                min-width: 0;
            }
            .alm-hero-upg-title {
                font-weight: 900;
                font-size: 0.9rem;
                color: #f8fafc;
            }
            .alm-lvl-pill {
                display: inline-block;
                background: rgba(168, 85, 247, 0.25);
                border: 1px solid rgba(192, 132, 252, 0.45);
                color: #e9d5ff;
                font-size: 0.7rem;
                padding: 1px 6px;
                border-radius: 6px;
                margin-left: 4px;
            }
            .alm-hero-upg-effect {
                font-size: 0.8rem;
                color: #cbd5e1;
                margin-top: 2px;
            }
            .alm-hero-upg-cost {
                font-size: 0.8rem;
                color: #fbbf24;
                margin-top: 2px;
            }
            .alm-hero-upg-btn {
                background: linear-gradient(135deg, #22c55e, #16a34a);
                color: #052e16;
                border: none;
                border-radius: 10px;
                padding: 9px 14px;
                font-weight: 900;
                font-size: 0.8rem;
                cursor: pointer;
                flex-shrink: 0;
            }
            .alm-hero-upg-btn.snow {
                background: linear-gradient(135deg, #38bdf8, #0284c7);
                color: #fff;
            }
            .alm-hero-upg-btn.purple {
                background: linear-gradient(135deg, #c084fc, #9333ea);
                color: #fff;
            }
            .alm-hero-upg-btn.crimson {
                background: linear-gradient(135deg, #fb7185, #e11d48);
                color: #fff;
            }
            .alm-hero-upg-btn.gold {
                background: linear-gradient(135deg, #facc15, #d97706);
                color: #1c1917;
            }
            .alm-hero-upg-btn:disabled {
                background: #334155 !important;
                color: #94a3b8 !important;
                cursor: not-allowed;
            }
            .alm-room-split-grid {
                display: grid;
                grid-template-columns: 1.15fr 0.85fr;
                gap: 10px;
            }
            @media (max-width: 640px) {
                .alm-room-split-grid {
                    grid-template-columns: 1fr;
                }
            }
            .alm-room-left-col,
            .alm-room-right-col {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .alm-zone-topbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: rgba(30, 41, 59, 0.85);
                border: 1px solid rgba(148, 163, 184, 0.2);
                border-radius: 10px;
                padding: 7px 10px;
                font-size: 0.78rem;
                color: #e2e8f0;
            }
            .alm-snow-zone,
            .alm-trash-zone,
            .alm-chicken-arena,
            .alm-merge-zone,
            .alm-drill-zone {
                position: relative;
                width: 100%;
                height: 290px;
                border-radius: 14px;
                background: radial-gradient(circle at center, rgba(30, 41, 59, 0.9), rgba(2, 6, 23, 0.96));
                border: 1px solid rgba(148, 163, 184, 0.25);
                overflow: hidden;
                touch-action: none;
            }
            .alm-drill-zone {
                height: auto;
                min-height: 290px;
                padding: 36px 10px 12px 10px;
            }
            .alm-zone-counter {
                position: absolute;
                top: 8px;
                right: 10px;
                background: rgba(15, 23, 42, 0.88);
                border: 1px solid rgba(148, 163, 184, 0.28);
                color: #e2e8f0;
                font-size: 0.74rem;
                font-weight: 800;
                padding: 2px 8px;
                border-radius: 8px;
                z-index: 6;
            }
            .alm-snow-hint {
                position: absolute;
                top: 8px;
                left: 10px;
                max-width: 68%;
                font-size: 0.72rem;
                color: #94a3b8;
                font-weight: 700;
                z-index: 5;
                pointer-events: none;
            }
            .alm-zone-bottom-pill {
                position: absolute;
                bottom: 8px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(15, 23, 42, 0.88);
                border: 1px solid rgba(148, 163, 184, 0.25);
                color: #cbd5e1;
                font-size: 0.7rem;
                font-weight: 800;
                padding: 3px 10px;
                border-radius: 999px;
                white-space: nowrap;
                z-index: 6;
            }
            .alm-snowflake-item,
            .alm-trash-item,
            .alm-merge-item {
                position: absolute;
                transform: translate(-50%, -50%);
                font-size: 1.55rem;
                cursor: pointer;
                user-select: none;
                z-index: 4;
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.7));
            }
            .alm-snowflake-item.gold,
            .alm-trash-item.gold {
                filter: drop-shadow(0 0 8px #facc15);
            }
            .alm-snowflake-item.emerald,
            .alm-trash-item.emerald {
                filter: drop-shadow(0 0 10px #4ade80);
            }
            .alm-merge-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                background: rgba(30, 41, 59, 0.9);
                border: 1px solid rgba(74, 222, 128, 0.45);
                border-radius: 10px;
                padding: 3px 6px;
            }
            .alm-merge-item.merge-target-highlight {
                border-color: #facc15;
                box-shadow: 0 0 12px rgba(250, 204, 21, 0.8);
            }
            .alm-merge-lvl-badge {
                font-size: 0.62rem;
                font-weight: 900;
                color: #86efac;
            }
            .alm-trash-bin {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(30, 41, 59, 0.95);
                border: 2px dashed rgba(250, 204, 21, 0.6);
                border-radius: 12px;
                padding: 6px 18px;
                display: flex;
                align-items: center;
                gap: 6px;
                z-index: 3;
            }
            .alm-trash-bin.bin-highlight {
                border-style: solid;
                border-color: #4ade80;
                background: rgba(20, 83, 45, 0.7);
            }
            .alm-trash-bin-text {
                font-size: 0.8rem;
                font-weight: 900;
                color: #fde047;
            }
            .alm-snow-pop,
            .alm-trash-pop,
            .alm-merge-pop,
            .alm-dmg-pop,
            .alm-drill-pop,
            .alm-feather-loot-pop {
                position: absolute;
                transform: translate(-50%, -50%);
                font-weight: 900;
                font-size: 0.92rem;
                color: #38bdf8;
                pointer-events: none;
                z-index: 30;
                text-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
                animation: almFloatPop 0.65s ease-out forwards;
            }
            .alm-snow-pop.gold,
            .alm-trash-pop.gold { color: #facc15; }
            .alm-snow-pop.emerald,
            .alm-trash-pop.emerald,
            .alm-merge-pop { color: #4ade80; }
            .alm-dmg-pop { color: #f87171; }
            .alm-drill-pop { color: #e7e5e4; }
            .alm-feather-loot-pop {
                left: 50%;
                top: 48%;
                font-size: 1.25rem;
                color: #fb923c;
            }
            @keyframes almFloatPop {
                0% { opacity: 1; transform: translate(-50%, -50%) scale(0.9); }
                100% { opacity: 0; transform: translate(-50%, -135%) scale(1.1); }
            }
            .alm-chicken-hp-wrap {
                position: absolute;
                top: 10px;
                left: 10px;
                right: 10px;
                z-index: 6;
            }
            .alm-chicken-hp-bar {
                position: relative;
                width: 100%;
                height: 20px;
                background: rgba(15, 23, 42, 0.92);
                border: 1px solid rgba(248, 113, 113, 0.5);
                border-radius: 10px;
                overflow: hidden;
            }
            .alm-chicken-hp-fill {
                height: 100%;
                background: linear-gradient(90deg, #dc2626, #f97316);
                transition: width 0.08s linear;
            }
            .alm-chicken-hp-text {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.75rem;
                font-weight: 900;
                color: #fff;
                text-shadow: 0 1px 3px #000;
            }
            .alm-chicken-mob-btn {
                position: absolute;
                top: 52%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(30, 41, 59, 0.9);
                border: 2px solid rgba(251, 146, 60, 0.55);
                border-radius: 18px;
                padding: 12px 18px;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                z-index: 5;
            }
            .alm-chicken-mob-btn.rooster {
                border-color: rgba(248, 113, 113, 0.8);
                box-shadow: 0 0 16px rgba(239, 68, 68, 0.35);
            }
            .alm-chicken-mob-btn.golden-rooster {
                border-color: #facc15;
                background: linear-gradient(145deg, rgba(113, 63, 18, 0.7), rgba(30, 41, 59, 0.95));
                box-shadow: 0 0 22px rgba(250, 204, 21, 0.55);
            }
            .alm-chicken-mob-btn.orangutan-boss {
                border-color: rgba(245, 158, 11, 0.75);
                background: linear-gradient(145deg, rgba(120, 53, 15, 0.55), rgba(15, 23, 42, 0.92));
                padding: 10px 14px;
            }
            .alm-chicken-mob-btn.hit {
                animation: almMobHit 0.16s ease-out;
            }
            @keyframes almMobHit {
                0% { transform: translate(-50%, -50%) scale(0.92); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }
            .alm-chicken-sprite {
                font-size: 3.1rem;
                line-height: 1.05;
            }
            .alm-chicken-respawn-box {
                position: absolute;
                top: 52%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(15, 23, 42, 0.94);
                border: 1px solid rgba(251, 146, 60, 0.45);
                border-radius: 16px;
                padding: 14px 18px;
                text-align: center;
                width: 82%;
                z-index: 6;
            }
            .alm-orangutan-target-btn {
                position: absolute;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #ef4444, #b91c1c);
                color: #fff;
                border: 2px solid #fca5a5;
                border-radius: 10px;
                padding: 5px 9px;
                font-size: 0.75rem;
                font-weight: 900;
                cursor: pointer;
                z-index: 12;
                box-shadow: 0 3px 10px rgba(239, 68, 68, 0.55);
                animation: almTargetPop 0.2s ease-out;
            }
            .alm-orangutan-target-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            @keyframes almTargetPop {
                from { transform: translate(-50%, -50%) scale(0.5); }
                to { transform: translate(-50%, -50%) scale(1); }
            }
            .alm-bomb-launch-btn {
                width: 100%;
                background: linear-gradient(135deg, #f97316, #dc2626);
                color: #fff;
                border: 1px solid #fdba74;
                border-radius: 12px;
                padding: 9px 12px;
                font-weight: 900;
                font-size: 0.82rem;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35);
            }
            .alm-bomb-launch-btn:disabled {
                background: #334155;
                color: #94a3b8;
                border-color: rgba(148, 163, 184, 0.25);
                box-shadow: none;
                cursor: not-allowed;
            }
            .alm-storm-hero-box {
                background: linear-gradient(145deg, rgba(14, 116, 144, 0.42), rgba(15, 23, 42, 0.94));
                border: 1px solid rgba(56, 189, 248, 0.45);
                border-radius: 16px;
                padding: 16px;
                text-align: center;
            }
            .alm-storm-launch-btn {
                background: linear-gradient(135deg, #38bdf8, #0284c7);
                color: #fff;
                border: none;
                border-radius: 12px;
                padding: 10px 18px;
                font-weight: 900;
                font-size: 0.88rem;
                cursor: pointer;
            }
            .alm-storm-launch-btn:disabled {
                background: #334155 !important;
                color: #94a3b8 !important;
                cursor: not-allowed;
            }
            .alm-drill-tools-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 8px;
            }
            .alm-drill-tool-card {
                background: rgba(30, 41, 59, 0.85);
                border: 1px solid rgba(168, 162, 158, 0.35);
                border-radius: 12px;
                padding: 9px 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
            }
            .alm-drill-tool-card.locked-tool {
                opacity: 0.72;
            }
            .alm-drill-tool-top {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .alm-drill-tool-icon { font-size: 1.4rem; }
            .alm-drill-tool-title { font-weight: 900; font-size: 0.82rem; color: #f8fafc; }
            .alm-drill-tool-sub { font-size: 0.73rem; color: #a8a29e; }
            .alm-drill-action-btn {
                background: linear-gradient(135deg, #a8a29e, #78716c);
                color: #1c1917;
                border: none;
                border-radius: 9px;
                padding: 7px 11px;
                font-weight: 900;
                font-size: 0.75rem;
                cursor: pointer;
                white-space: nowrap;
            }
            .alm-drill-action-btn.unlock-btn {
                background: linear-gradient(135deg, #f59e0b, #d97706);
                color: #fff;
            }
            .alm-drill-action-btn:disabled {
                background: #334155;
                color: #94a3b8;
                cursor: not-allowed;
            }
            .alm-drill-locked-tag {
                font-size: 0.74rem;
                font-weight: 800;
                color: #94a3b8;
            }
            .alm-side-panel-box {
                background: rgba(30, 41, 59, 0.78);
                border: 1px solid rgba(148, 163, 184, 0.22);
                border-radius: 12px;
                padding: 9px 10px;
            }
            .alm-side-panel-title {
                font-weight: 900;
                font-size: 0.8rem;
                color: #f8fafc;
                margin-bottom: 7px;
            }
            .alm-compact-upg-list {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .alm-compact-upg-card {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                background: rgba(15, 23, 42, 0.85);
                border: 1px solid rgba(148, 163, 184, 0.18);
                border-radius: 10px;
                padding: 7px 9px;
            }
            .alm-compact-upg-name { font-weight: 800; font-size: 0.78rem; color: #f8fafc; }
            .alm-compact-upg-desc { font-size: 0.72rem; color: #cbd5e1; }
            .alm-compact-upg-cost { font-size: 0.72rem; color: #fbbf24; font-weight: 700; }
            .alm-compact-upg-btn {
                background: #22c55e;
                color: #052e16;
                border: none;
                border-radius: 8px;
                width: 32px;
                height: 32px;
                font-weight: 900;
                font-size: 1rem;
                cursor: pointer;
                flex-shrink: 0;
            }
            .alm-compact-upg-btn.snow { background: #38bdf8; color: #082f49; }
            .alm-compact-upg-btn.trash { background: #facc15; color: #422006; }
            .alm-compact-upg-btn.feather { background: #fb923c; color: #431407; }
            .alm-compact-upg-btn.emerald { background: #4ade80; color: #052e16; }
            .alm-compact-upg-btn.stone { background: #a8a29e; color: #1c1917; }
            .alm-compact-upg-btn.fire { background: #fb7185; color: #fff; }
            .alm-compact-upg-btn.amber { background: #f59e0b; color: #1c1917; }
            .alm-compact-upg-btn:disabled {
                background: #334155 !important;
                color: #94a3b8 !important;
                cursor: not-allowed;
            }
            .alm-snow-lb-list {
                max-height: 130px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .alm-snow-lb-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.74rem;
                padding: 4px 7px;
                border-radius: 7px;
                background: rgba(15, 23, 42, 0.75);
                color: #e2e8f0;
            }
            .alm-snow-lb-row.is-player {
                border: 1px solid rgba(250, 204, 21, 0.6);
                background: rgba(113, 63, 18, 0.35);
            }
            .alm-snow-lb-rank { font-weight: 900; width: 28px; color: #fbbf24; }
            .alm-snow-lb-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .alm-snow-lb-val { font-weight: 800; color: #38bdf8; }
            .alm-mult-total-card {
                background: linear-gradient(135deg, rgba(20, 83, 45, 0.45), rgba(15, 23, 42, 0.94));
                border: 1px solid rgba(74, 222, 128, 0.45);
                border-radius: 14px;
                padding: 14px;
                text-align: center;
                margin-bottom: 10px;
            }
            .alm-mult-total-value {
                font-size: 1.8rem;
                font-weight: 900;
                color: #4ade80;
            }
            .alm-mult-list {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .alm-mult-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: rgba(30, 41, 59, 0.82);
                border: 1px solid rgba(148, 163, 184, 0.18);
                border-radius: 10px;
                padding: 9px 12px;
                font-size: 0.82rem;
            }
            .alm-mult-item-name { color: #e2e8f0; font-weight: 700; }
            .alm-mult-item-val { color: #38bdf8; font-weight: 900; }
            .alm-lb-subtabs {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
                margin-bottom: 10px;
            }
            .alm-lb-tab-btn {
                background: rgba(30, 41, 59, 0.85);
                border: 1px solid rgba(148, 163, 184, 0.25);
                color: #cbd5e1;
                border-radius: 10px;
                padding: 7px 6px;
                font-size: 0.78rem;
                font-weight: 800;
                cursor: pointer;
            }
            .alm-lb-tab-btn.active {
                background: #7c3aed;
                color: #fff;
                border-color: #c084fc;
            }
            .alm-leaderboard-list {
                max-height: 360px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .alm-lb-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: rgba(30, 41, 59, 0.85);
                border: 1px solid rgba(148, 163, 184, 0.18);
                border-radius: 10px;
                padding: 9px 12px;
                font-size: 0.84rem;
            }
            .alm-lb-row.is-player {
                border: 1px solid #facc15;
                background: rgba(113, 63, 18, 0.35);
            }
            .alm-lb-rank { font-weight: 900; width: 36px; color: #facc15; }
            .alm-lb-name { flex: 1; font-weight: 800; color: #f8fafc; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .alm-lb-val { font-weight: 800; color: #4ade80; }
        `;
        document.head.appendChild(style);
    }

    // ------------------------------------------
    // ГЛОБАЛЬНІ СЛУХАЧІ ТА ЕКСПОРТ ФУНКЦІЙ
    // ------------------------------------------
    window.addEventListener('pointermove', function (e) {
        if (draggingTrashId !== null) handleTrashPointerMove(e);
        if (draggingMergeId !== null) handleMergePointerMove(e);
    });

    window.addEventListener('pointerup', function (e) {
        isPointerSwipingSnow = false;
        if (draggingTrashId !== null) handleTrashPointerUp(e);
        if (draggingMergeId !== null) handleMergePointerUp(e);
    });

    window.addEventListener('pointercancel', function () {
        isPointerSwipingSnow = false;
        draggingTrashId = null;
        draggingMergeId = null;
    });

    setInterval(function () {
        const now = Date.now();
        const dt = Math.min(2.0, Math.max(0.01, (now - lastLarpTickTime) / 1000));
        lastLarpTickTime = now;
        tickAuraLarpLogic(dt);
        if (!isAuraLarpModeActive) {
            ensureAuraLarpEntryButton();
        }
    }, 100);

    setInterval(function () {
        if (!isAuraLarpModeActive) return;
        if (activeLarpSubTab === 'leaderboard') {
            renderLarpLeaderboardList();
        } else if (activeLarpSubTab === 'room') {
            if (activeRoomStep === 20) renderSnowLeaderboardList();
            else if (activeRoomStep === 30) renderTrashLeaderboardList();
            else if (activeRoomStep === 50) renderFeatherLeaderboardList();
            else if (activeRoomStep === 70) renderVitaminLeaderboardList();
            else if (activeRoomStep === 120) renderStoneLeaderboardList();
            else if (activeRoomStep === 140) renderFireSnowLeaderboardList();
            else if (activeRoomStep === 150) renderOrangutanHeadLeaderboardList();
        }
    }, 3000);

    window.addEventListener('beforeunload', function () {
        persistAuraLarpState(false);
    });

    const prevOnMainGameLoaded = window.onMainGameLoaded;
    window.onMainGameLoaded = function (rootStateArg) {
        if (typeof prevOnMainGameLoaded === 'function') {
            prevOnMainGameLoaded(rootStateArg);
        }
        const s = initAuraLarpMonsterState();
        injectAuraLarpStyles();
        ensureAuraLarpEntryButton();
        if (s.wasActive) {
            enterAuraLarpMonsterMode();
        } else {
            verifyGlobalTimeAndApplyOfflineProgress();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureAuraLarpEntryButton);
    } else {
        ensureAuraLarpEntryButton();
    }

    // Експорт усіх публічних методів у window
    window.initAuraLarpMonsterState = initAuraLarpMonsterState;
    window.ensureAuraLarpEntryButton = ensureAuraLarpEntryButton;
    window.enterAuraLarpMonsterMode = enterAuraLarpMonsterMode;
    window.exitAuraLarpMonsterMode = exitAuraLarpMonsterMode;
    window.switchAuraLarpSubTab = switchAuraLarpSubTab;
    window.switchAuraLarpLeaderboardType = switchLeaderboardType;

    window.unlockNextAuraLarpStep = unlockNextStep;
    window.moveAuraLarpToStep = moveToStep;
    window.teleportAuraLarpToStep = teleportToRoomStep;
    window.openAuraLarpRoomAtStep = openRoomAtStep;
    window.goToRoom20FromStorm = goToRoom20FromStorm;

    // Кімната 10
    window.buyAuraLarpRoomUpgrade = buyRoomMultiplierUpgrade;
    // Кімната 20
    window.buyAuraLarpSnowMult = buySnowMultUpgrade;
    window.buyAuraLarpSnowSpeed = buySnowSpeedUpgrade;
    window.buyAuraLarpSnowLarp = buySnowLarpUpgrade;
    // Кімната 30
    window.buyAuraLarpTrashMult = buyTrashMultUpgrade;
    window.buyAuraLarpTrashSpeed = buyTrashSpeedUpgrade;
    window.buyAuraLarpTrashLarp = buyTrashLarpUpgrade;
    // Кімната 40
    window.buyAuraLarpStepSpeed = buyStepSpeedUpgrade;
    window.buyAuraLarpOfflineUpgrade = buyOfflineLarpUpgrade;
    // Кімната 50
    window.attackAuraLarpChicken = attackChickenMob;
    window.buyAuraLarpFeatherMult = buyFeatherMultUpgrade;
    window.buyAuraLarpFeatherLarp = buyFeatherLarpUpgrade;
    // Кімната 60
    window.buyAuraLarpGoldSnow = buyGoldSnowUpgrade;
    window.buyAuraLarpEmeraldSnow = buyEmeraldSnowUpgrade;
    window.buyAuraLarpGoldTrash = buyGoldTrashUpgrade;
    window.buyAuraLarpEmeraldTrash = buyEmeraldTrashUpgrade;
    // Кімната 70
    window.buyAuraLarpVitaminMult = buyVitaminMultUpgrade;
    window.buyAuraLarpMergeLv2 = buyMergeLv2Upgrade;
    window.buyAuraLarpMergeLarp = buyMergeLarpUpgrade;
    // Кімната 80
    window.activateAuraLarpSnowstorm = activateSnowstorm;
    window.buyAuraLarpStormDuration = buyStormDurationUpgrade;
    window.buyAuraLarpStormCooldown = buyStormCooldownUpgrade;
    window.buyAuraLarpStormSpeed = buyStormSpeedUpgrade;
    // Кімната 90
    window.buyAuraLarpMobDamage = buyMobDamageUpgrade;
    window.buyAuraLarpMobRespawn = buyMobRespawnUpgrade;
    // Кімната 110
    window.activateAuraLarpCleaner = activateRoomCleaner;
    window.buyAuraLarpCleanerDuration = buyCleanerDurationUpgrade;
    // Кімната 120
    window.useAuraLarpDrillTool = useDrillTool;
    window.unlockAuraLarpDrill2 = unlockDrillTool2;
    window.buyAuraLarpStoneMult = buyStoneMultUpgrade;
    window.buyAuraLarpStoneLarp = buyStoneLarpUpgrade;
    window.buyAuraLarpDrill1Cd = buyDrill1CdUpgrade;
    window.buyAuraLarpDrill2Cd = buyDrill2CdUpgrade;
    // Кімната 130
    window.activateAuraLarpTeleporter = activateTeleporter;
    window.buyAuraLarpTeleportDuration = buyTeleportDurationUpgrade;
    window.buyAuraLarpTeleportCooldown = buyTeleportCooldownUpgrade;
    window.buyAuraLarpTeleportTravel = buyTeleportTravelUpgrade;
    // Кімната 140
    window.exchangeSnowForFireSnow = exchangeSnowForFireSnow;
    window.buyAuraLarpFireSnowMult = buyFireSnowMultUpgrade;
    window.buyAuraLarpFireSnowSnowBoost = buyFireSnowSnowBoostUpgrade;
    window.buyAuraLarpFireSnowLarp = buyFireSnowLarpUpgrade;
    // Кімната 150
    window.hitAuraLarpOrangutanBtn = hitOrangutanButton;
    window.onAuraLarpOrangutanDirectClick = onOrangutanDirectClick;
    window.throwOrangutanBomb = throwOrangutanBomb;
    window.buyAuraLarpOrangutanHeadMult = buyOrangutanHeadMultUpgrade;
    window.buyAuraLarpOrangutanBombCost = buyOrangutanBombCostUpgrade;
    window.buyAuraLarpOrangutanLarp = buyOrangutanLarpUpgrade;
    // Кімната 160
    window.buyAuraLarpRoosterChance = buyRoosterChanceUpgrade;
    window.buyAuraLarpGoldenRoosterChance = buyGoldenRoosterChanceUpgrade;

    // Службові функції
    window.handleResetAuraLarpClick = handleResetAuraLarpClick;
    window.retryAuraLarpGlobalTime = verifyGlobalTimeAndApplyOfflineProgress;
    window.dismissAuraLarpOfflineReport = dismissOfflineReport;
})();
