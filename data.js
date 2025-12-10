/* -------------------------------------------------------
   RUI Support Center - 数据中心 (Data Center)
   包含：
   1. menuConfig: 定义网页菜单结构
   2. firmwareDatabase: 所有的固件/软件下载链接
   3. manualDatabase: 所有的说明书链接
   ------------------------------------------------------- */

/* 1️⃣ 菜单结构配置 (Menu Structure) */
const menuConfig = [
    {
        categoryId: 'gnss',
        labelKey: 'menu_gnss',
        type: 'hardware',
        items: ['i100', 'i93', 'i89', 'i85', 'i83', 'i76', 'i73', 'ibase', 'p5u', 'p5e']
    },
    {
        categoryId: 'mobile',
        labelKey: 'menu_mobile',
        type: 'hardware',
        items: ['lt60h', 'lt700', 'lt700h', 'lt800', 'lt800h', 'landstar']
    },
    {
        categoryId: 'ag',
        labelKey: 'menu_ag',
        type: 'hardware',
        items: ['nx510']
    },
    {
        categoryId: 'marine',
        labelKey: 'menu_marine',
        type: 'hardware',
        items: ['apache3', 'apache4', 'apache6']
    },
    {
        categoryId: 'uav',
        labelKey: 'menu_uav',
        type: 'hardware',
        items: ['x500']
    },
    {
        categoryId: 'software',
        labelKey: 'menu_software',
        type: 'software', 
        items: ['cgo', 'mapcloud', 'gnsstool', 'sharelocation', 'rinex', 'cgbas']
    }
];

/* 2️⃣ 固件与软件数据库 (Firmware & Software Database) */
const firmwareDatabase = {
    // --- GNSS 接收机 ---
    'i100': [
        { version: 'v1.3.7', date: '2025-12-01', url: 'https://chcnavigation.jianguoyun.com/p/DYau6gcQtq_UCxjFtZMGIAA' },
        { version: 'V1.3.5', date: '2025-11-10', url: 'https://chcnavigation.jianguoyun.com/p/DYau6gcQtq_UCxjFtZMGIAA' },
        { version: 'V1.2.13', date: '2025-09-23', url: 'https://chcnavigation.jianguoyun.com/p/DYoSKLcQtq_UCxiYkY8GIAA' }
    ],
    'i93': [
        { version: 'V1.3.8.2', date: '2025-04-01', url: 'https://chcnavigation.jianguoyun.com/p/DeF3R4YQtq_UCxjKlfgFIAA' },
        { version: 'V1.3.7', date: '2024-12-12', url: 'https://chcnavigation.jianguoyun.com/p/DRpFc9AQtq_UCxi8pOUFIAA' },
        { version: 'V1.3.6', date: '2024-10-15', url: 'https://chcnavigation.jianguoyun.com/p/DbSr6HkQtq_UCxjWquIFIAA' },
        { version: 'V1.2.9', date: '2024-03-31', url: 'https://chcnavigation.jianguoyun.com/p/DUOUYD0Qtq_UCxjFhsgFIAA' }
    ],
    'i89': [
        { version: 'V1.3.8', date: '2024-12-27', url: 'https://chcnavigation.jianguoyun.com/p/DXYjrugQtq_UCxj-yeYFIAA' },
        { version: 'V1.3.5', date: '2024-10-15', url: 'https://chcnavigation.jianguoyun.com/p/DZ-RVnIQtq_UCxjXquIFIAA' },
        { version: 'V1.2.9', date: '2024-03-31', url: 'https://chcnavigation.jianguoyun.com/p/Dc7uFUMQtq_UCxiigcsFIAA' },
        { version: 'V1.1.11', date: '2023-11-14', url: 'https://chcnavigation.jianguoyun.com/p/DeaDxvoQtq_UCxjUvcYFIAA' },
        { version: 'V1.1.6.10', date: '2023-08-03', url: 'https://chcnavigation.jianguoyun.com/p/Dc_b5r4Qtq_UCxiFx5UGIAA' },
        { version: 'V1.1.6.9', date: '2023-07-18', url: 'https://chcnavigation.jianguoyun.com/p/DVNk3mMQtq_UCxiGx5UGIAA' },
        { version: 'OEM Board Firmware', date: '2025-02-28', url: 'https://chcnavigation.jianguoyun.com/p/DQ4O7hUQtq_UCxjNjdgFIAA'},
        { version: 'Radio Firmware', date: '2025-02-28', url: 'https://chcnavigation.jianguoyun.com/p/DXDybjUQtq_UCxiDx5UGIAA'}
    ],
    'i85': [
        { version: 'V1.0.14', date: '2025-09-15', url: 'https://chcnavigation.jianguoyun.com/p/DVDEQUkQtq_UCxit3o4GIAA' },
        { version: 'V1.0.12', date: '2025-08-26', url: 'https://chcnavigation.jianguoyun.com/p/Ddf4fVIQtq_UCxizx5UGIAA' }
    ],
    'i83': [
        { version: 'V1.3.11.2', date: '2025-04-03', url: 'https://chcnavigation.jianguoyun.com/p/DYr_2AQQtq_UCxjvvvoFIAA' },
        { version: 'V1.3.10', date: '2025-01-23', url: 'https://chcnavigation.jianguoyun.com/p/DdjPGVgQtq_UCxif0esFIAA' },
        { version: 'V1.3.8', date: '2024-04-29', url: 'https://chcnavigation.jianguoyun.com/p/DT7ZTqMQtq_UCxiau9YFIAA' },
        { version: 'V1.3.2.7', date: '2023-05-26', url: 'https://chcnavigation.jianguoyun.com/p/DYftOugQtq_UCxi4usYFIAA' },
        { version: 'V1.3.2.3', date: '2023-03-22', url: 'https://chcnavigation.jianguoyun.com/p/Dbjby8wQtq_UCxjgx5UGIAA' },
        { version: 'V1.2.8', date: '2022-12-19', url: 'https://chcnavigation.jianguoyun.com/p/DQx9eEgQtq_UCxjhx5UGIAA' },
        { version: 'V1.2.5', date: '2022-07-19', url: 'https://chcnavigation.jianguoyun.com/p/Dbdm33IQtq_UCxjix5UGIAA' },
        { version: 'OEM Board Firmware', date: '#', url: 'https://chcnavigation.jianguoyun.com/p/DaRS_mwQtq_UCxjQx5UGIAA'},
        { version: 'Radio Firmware', date: '#', url: 'https://chcnavigation.jianguoyun.com/p/DbHNHeQQtq_UCxjRx5UGIAA'}
    ],
    'i76': [
        { version: 'V1.4.3.3', date: '2025-09-26', url: 'https://chcnavigation.jianguoyun.com/p/DaWjPlgQtq_UCxjZlpIGIAA' },
        { version: 'V1.4.3', date: '2025-03-27', url: 'https://chcnavigation.jianguoyun.com/p/DQi4BBcQtq_UCxj_mYUGIAA' },
        { version: 'V1.2.5', date: '2024-09-04', url: 'https://chcnavigation.jianguoyun.com/p/DZzax2wQtq_UCxjtx5UGIAA' },
        { version: 'V1.1.9.3', date: '2024-07-04', url: 'https://chcnavigation.jianguoyun.com/p/DWtJswkQtq_UCxjk89gFIAA' },
        { version: 'OEM Board Firmware', date: '#', url: 'https://chcnavigation.jianguoyun.com/p/DQvqKSsQtq_UCxiZqYsGIAA'}
    ],
    'i73': [
        { version: 'V2.9.3', date: '2025-09-25', url: 'https://chcnavigation.jianguoyun.com/p/DT5Dk6kQtq_UCxi6opMGIAA' },
        { version: 'V2.6.5', date: '2023-11-10', url: 'https://chcnavigation.jianguoyun.com/p/DcMlYS0Qtq_UCxiZx5UGIAA' },
        { version: 'V2.5.1', date: '2023-05-26', url: 'https://chcnavigation.jianguoyun.com/p/DZfnEUoQtq_UCxiYx5UGIAA' },
        { version: 'V2.4.3', date: '2022-05-12', url: 'https://chcnavigation.jianguoyun.com/p/DdfwKusQtq_UCxicx5UGIAA' },
        { version: 'OEM Board Firmware', date: '#', url: 'https://chcnavigation.jianguoyun.com/p/DQ-nkoQQtq_UCxiv-8sFIAA' },
        { version: 'Radio Firmware', date: '#', url: 'https://chcnavigation.jianguoyun.com/p/DeLyyCUQtq_UCxihx5UGIAA' }
    ],
    'ibase': [
        { version: 'V2.4.4.2', date: '2025-05-21', url: 'https://chcnavigation.jianguoyun.com/p/DVrwOREQtq_UCxjfnoEGIAA' },
        { version: 'V2.4.4', date: '2024-06-06', url: 'https://chcnavigation.jianguoyun.com/p/DVAyuNYQtq_UCxiwtdAFIAA' },
        { version: 'V2.3.7', date: '2023-11-10', url: 'https://chcnavigation.jianguoyun.com/p/DVW3cOQQtq_UCxjnr8wFIAA' },
        { version: 'V2.2.1', date: '2023-02-04', url: 'https://chcnavigation.jianguoyun.com/p/DQZZSnIQtq_UCxjj1JUGIAA' },
        { version: 'OEM Board Firmware', date: '#', url: 'https://chcnavigation.jianguoyun.com/p/DQ4tSEUQtq_UCxjvhdMFIAA' },
        { version: 'Radio Firmware', date: '#', url: 'https://chcnavigation.jianguoyun.com/p/Dct7QgoQtq_UCxier-kFIAA' }
    ], 
    // ✅ 修复1: ibase 后面加了逗号，并且补上了菜单里有的 p5u 和 p5e
    'p5u': [],
    'p5e': [],

    // --- 移动测绘 (Mobile Mapping) ---
    'lt60h': [
        { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DQ1ny7YQtq_UCxjiyJUGIAA' }
    ],
    'lt700': [
        { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DZ7YAjEQtq_UCxjgyJUGIAA' }
    ],
    'lt700h': [
        { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DdJv9fkQtq_UCxjW3ocGIAAA' }
    ],
    'lt800': [
        { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DSTkp2YQtq_UCxjjyJUGIAA' }
    ],
    'lt800h': [
        { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DUlm69oQtq_UCxjkyJUGIAA' }
    ],
    'landstar': [
        { version: 'LandStar-8.2.0.1.20251117', date: '2025-11-17', url: 'https://chcnavigation.jianguoyun.com/p/DfkEdLsQtq_UCxjBtZMGIAA' },
        { version: 'LandStar-8.2.0.1.20250925', date: '2025-09-25', url: 'https://chcnavigation.jianguoyun.com/p/Dc6dTGQQtq_UCxiSi4wGIAA' },
        { version: 'LandStar-8.2.0.1.20250827', date: '2025-08-27', url: 'https://chcnavigation.jianguoyun.com/p/DQWn0G0Qtq_UCxjjjogGIAA' }
    ],

    // --- 农业导航 (Agriculture) ---
    'nx510': [],

    // --- 海洋测量 (Marine) ---
    'apache3': [],
    'apache4': [],
    'apache6': [],

    // --- 无人机 (UAV) ---
    'x500': [],

    // --- 软件 (Software) ---
    'cgo': [],
    'mapcloud': [],
    'gnsstool': [],
    'sharelocation': [],
    'rinex': [],
    'cgbas': []
};

/* 3️⃣ 说明书数据库 (Manual Database) */
const manualDatabase = {
    // --- GNSS ---
    'i100': [
        { title: 'ViLi i100 User Manual.pdf', date: '2025-09-10', url: 'https://chcnavigation.jianguoyun.com/p/DfcMfJ0Qtq_UCxj6t4wGIAA' }
    ],
    'i93': [
        { title: 'i93 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DbfejloQtq_UCxiztMMFIAA' }
    ],
    'i89': [
        { title: 'i89 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DanI8GoQtq_UCxi0xMMFIAA' }
    ],
    'i85': [
        { title: 'i85 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DedrIhAQtq_UCxiv04cGIAA' }
    ],
    'i83': [
        { title: 'i83 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/Davkc5MQtq_UCxjuo-4FIAA' }
    ],
    'i76': [
        { title: 'i76 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/Dd273WMQtq_UCxiulsQFIAA' }
    ],
    'i73': [
        { title: 'i73 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DeXRRdoQtq_UCxibi84FIAA' }
    ],
    'p5u': [
        { title: 'P5U user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DQNFHgQQtq_UCxjkj90FIAA' }
    ],
    'p5e': [
        { title: 'P5E user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DT5cHrMQtq_UCxjCpN8FIAA' }
    ],
    'ibase': [
        { title: 'Ibase user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DSkCFSoQtq_UCxiKtdAFIAA' }
    ], 
    // ✅ 修复2: ibase 后面加了逗号

    // --- Mobile Mapping ---
    'lt60h': [
        { title: 'LT60H user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DQjVTn0Qtq_UCxjf9esFIAA' }
    ],
    'lt700': [
        { title: 'LT700 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DfhO2C4Qtq_UCxjQ74kGIAA' }
    ],
    'lt700h': [
        { title: 'LT700H user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/Dcvg258Qtq_UCxiAiIgGIAA' }
    ],
    'lt800': [
        { title: 'LT800 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DWX-XA4Qtq_UCxjAhdUFIAA' }
    ],
    'lt800h': [
        { title: 'LT800H user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DV6ILx8Qtq_UCxjnhdMFIAA' }
    ],
    'landstar': [
        { title: 'LandStar8.2_User manual', date: '2025-12-10', url: 'https://chcnavigation.jianguoyun.com/p/DdM_hnIQtq_UCxiK64oGIAA' }
    ],

    // --- Agriculture ---
    'nx510': [],

    // --- Marine ---
    'apache3': [], 'apache4': [], 'apache6': [],

    // --- UAV ---
    'x500': [],

    // --- Software ---
    'cgo': [], 'mapcloud': [], 'gnsstool': [], 'sharelocation': [], 'rinex': [], 'cgbas': []
};
