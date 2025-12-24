/* -------------------------------------------------------
   RUI Support Center - 数据中心
   ------------------------------------------------------- */

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
        items: ['lt60h', 'lt700', 'lt700h', 'lt800', 'lt800h']
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
        items: [ 'landstar','cgo','coprocess', 'mapcloud', 'gnsstool', 'sharelocation', 'rinex', 'cgbas']
    }
];

const firmwareDatabase = {
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
        { version: 'OEM Board', date: '2025-02-28', url: 'https://chcnavigation.jianguoyun.com/p/DQ4O7hUQtq_UCxjNjdgFIAA'},
        { version: 'Radio', date: '2025-02-28', url: 'https://chcnavigation.jianguoyun.com/p/DXDybjUQtq_UCxiDx5UGIAA'}
    ],
    'i85': [
        { version: 'V1.0.14', date: '2025-09-15', url: 'https://chcnavigation.jianguoyun.com/p/DVDEQUkQtq_UCxit3o4GIAA' },
        { version: 'V1.0.12', date: '2025-08-26', url: 'https://chcnavigation.jianguoyun.com/p/Ddf4fVIQtq_UCxizx5UGIAA' }
    ],
    'i83': [
        { version: 'V1.3.11.2', date: '2025-04-03', url: 'https://chcnavigation.jianguoyun.com/p/DYr_2AQQtq_UCxjvvvoFIAA' },
        { version: 'V1.3.10', date: '2025-01-23', url: 'https://chcnavigation.jianguoyun.com/p/DdjPGVgQtq_UCxif0esFIAA' }
    ],
    'i76': [
        { version: 'V1.4.3.3', date: '2025-09-26', url: 'https://chcnavigation.jianguoyun.com/p/DaWjPlgQtq_UCxjZlpIGIAA' },
        { version: 'V1.4.3', date: '2025-03-27', url: 'https://chcnavigation.jianguoyun.com/p/DQi4BBcQtq_UCxj_mYUGIAA' }
    ],
    'i73': [
        { version: 'V2.9.3', date: '2025-09-25', url: 'https://chcnavigation.jianguoyun.com/p/DT5Dk6kQtq_UCxi6opMGIAA' },
        { version: 'V2.6.5', date: '2023-11-10', url: 'https://chcnavigation.jianguoyun.com/p/DcMlYS0Qtq_UCxiZx5UGIAA' }
    ],
    'ibase': [
        { version: 'V2.4.4.2', date: '2025-05-21', url: 'https://chcnavigation.jianguoyun.com/p/DVrwOREQtq_UCxjfnoEGIAA' },
        { version: 'V2.4.4', date: '2024-06-06', url: 'https://chcnavigation.jianguoyun.com/p/DVAyuNYQtq_UCxiwtdAFIAA' }
    ], 
    'p5u': [],
    'p5e': [],
    'lt60h': [ { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DQ1ny7YQtq_UCxjiyJUGIAA' } ],
    'lt700': [ { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DZ7YAjEQtq_UCxjgyJUGIAA' } ],
    'lt700h': [ { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DdJv9fkQtq_UCxjW3ocGIAAA' } ],
    'lt800': [ { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DSTkp2YQtq_UCxjjyJUGIAA' } ],
    'lt800h': [ { version: 'OS and Update tool', url: 'https://chcnavigation.jianguoyun.com/p/DUlm69oQtq_UCxjkyJUGIAA' } ],
    'landstar': [
        { version: 'LandStar-8.2.0.1.20251211', date: '2025-12-12', url: 'https://chcnavigation.jianguoyun.com/p/DadrWnsQtq_UCxii7ZUGIAA' },
        { version: 'LandStar-8.2.0.1.20251117', date: '2025-11-17', url: 'https://chcnavigation.jianguoyun.com/p/DfkEdLsQtq_UCxjBtZMGIAA' },
        { version: 'LandStar-8.2.0.1.20250925', date: '2025-09-25', url: 'https://chcnavigation.jianguoyun.com/p/Dc6dTGQQtq_UCxiSi4wGIAA' },
        { version: 'LandStar-8.2.0.1.20250827', date: '2025-08-27', url: 'https://chcnavigation.jianguoyun.com/p/DQWn0G0Qtq_UCxjjjogGIAA' }
    ],
    'nx510': [],
    'apache3': [], 
    'apache4': [], 
    'apache6': [],
    'x500': [],
    'cgo': [
        { version:'CGO-2.3.3', date:'2025-09-24', url:'https://chcnavigation.jianguoyun.com/p/DVZOVyEQtq_UCxjR6IsGIAA'},
    ], 
   'coprocess':[
      { version:'Coprocess 2025-1.0.3', date:'2025-12-05', url:'https://chcnavigation.jianguoyun.com/p/DTQwb9gQ4vqeDBjTzJIGIAA'}
   ],
    'mapcloud': [ { version:'MapCloud', date:'2024-10-21', url:'https://chcnavigation.jianguoyun.com/p/DZv4an8Qtq_UCxjw_uEFIAA'},], 
    'gnsstool': [ { version:'GNSSTool', date:'2025-01-29', url:'https://chcnavigation.jianguoyun.com/p/DUcLJogQtq_UCxjk3JUGIAA'},], 
    'sharelocation': [ { version:'Sharelocation', date:'', url:'https://chcnavigation.jianguoyun.com/p/DX8QMLAQtq_UCxjs3JUGIAA'},], 
    'rinex': [ { version:'RINEX Converter', date:'', url:'https://chcnavigation.jianguoyun.com/p/DQaoitEQtq_UCxiaiP8FIAA'},], 
    'cgbas': [ 
        { version:'CGBAS-CORS_V1.3.4.0_X86_64', date:'2025-12-02', url:'https://chcnavigation.jianguoyun.com/p/DebMXjMQtq_UCxiYqZUGIAA'},
        { version:'CGBAS-CORS_V1.3.2.0_X86_64', date:'2025-10-15', url:'https://chcnavigation.jianguoyun.com/p/DUhwJuYQtq_UCxjl-Y0GIAA'},
        { version:'CGBAS-CORS_V1.3.1.0_X86_64', date:'2025-07-08', url:'https://chcnavigation.jianguoyun.com/p/DcWx4WgQtq_UCxjJ8IEGIAA'},
        { version:'CGBAS-CORS_V1.3.0.0_X86_64', date:'2025-05-07', url:'https://chcnavigation.jianguoyun.com/p/DQb3HDYQtq_UCxjIp_oFIAA'},
        { version:'CGBAS-CORS_V1.2.1.1_X86_64', date:'2025-02-19', url:'https://chcnavigation.jianguoyun.com/p/DR2PXpcQtq_UCxiTie0FIAA'}
    ]
};

const manualDatabase = {
    'i100': [ { title: 'ViLi i100 User Manual.pdf', date: '2025-09-10', url: 'https://chcnavigation.jianguoyun.com/p/DfcMfJ0Qtq_UCxj6t4wGIAA' } ],
    'i93': [ { title: 'i93 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DbfejloQtq_UCxiztMMFIAA' } ],
    'i89': [ { title: 'i89 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DanI8GoQtq_UCxi0xMMFIAA' } ],
    'i85': [ { title: 'i85 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DedrIhAQtq_UCxiv04cGIAA' } ],
    'i83': [ { title: 'i83 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/Davkc5MQtq_UCxjuo-4FIAA' } ],
    'i76': [ { title: 'i76 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/Dd273WMQtq_UCxiulsQFIAA' } ],
    'i73': [ { title: 'i73 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DeXRRdoQtq_UCxibi84FIAA' } ],
    'p5u': [ { title: 'P5U user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DQNFHgQQtq_UCxjkj90FIAA' } ],
    'p5e': [ { title: 'P5E user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DT5cHrMQtq_UCxjCpN8FIAA' } ],
    'ibase': [ { title: 'Ibase user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DSkCFSoQtq_UCxiKtdAFIAA' } ],
    'lt60h': [ { title: 'LT60H user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DQjVTn0Qtq_UCxjf9esFIAA' } ],
    'lt700': [ { title: 'LT700 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DfhO2C4Qtq_UCxjQ74kGIAA' } ],
    'lt700h': [ { title: 'LT700H user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/Dcvg258Qtq_UCxiAiIgGIAA' } ],
    'lt800': [ { title: 'LT800 user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DWX-XA4Qtq_UCxjAhdUFIAA' } ],
    'lt800h': [ { title: 'LT800H user manual', date: '', url: 'https://chcnavigation.jianguoyun.com/p/DV6ILx8Qtq_UCxjnhdMFIAA' } ],
    'landstar': [ { title: 'LandStar8.2_User manual', date: '2025-12-10', url: 'https://chcnavigation.jianguoyun.com/p/DdM_hnIQtq_UCxiK64oGIAA' } ],
    'nx510': [{ title: 'NX510_User manual', date: '2025-12-10', url:'https://chcnavigation.jianguoyun.com/p/DUBluY4Qtq_UCxjQ2MEFIAA'}],
    'apache3': [{ title: 'Apache3_User manual', date: '2025-07-16', url:'https://chcnavigation.jianguoyun.com/p/DaUmlfkQtq_UCxis3JUGIAA'}], 
    'apache4': [{ title: 'Apache4_User manual', date: '2025-3-10', url:'https://chcnavigation.jianguoyun.com/p/DZaw7OUQtq_UCxiirYwGIAA'}], 
    'apache6': [{ title: 'Apache6_User manual', date: '2025-09-02', url:'https://chcnavigation.jianguoyun.com/p/DRiHkaAQtq_UCxiK6ogGIAA'}],
    'x500': [],
    'cgo': [{ title: 'CGO 2_User manual', date: '2025-09-02', url:'https://chcnavigation.jianguoyun.com/p/DTjx4JUQtq_UCxi-5cUFIAA'}], 
    'mapcloud': [{ title: 'MapCloud User Manual.pdf', date: '2024-09-02', url:'https://chcnavigation.jianguoyun.com/p/DVd6JjQQtq_UCxjEysMFIAA'}], 
    'gnsstool': [], 
    'sharelocation': [], 
    'rinex': [], 
    'cgbas': []
};

/* 4️⃣ FAQ 数据库 (FAQ Database) */
const faqDatabase = {
    'i93': [
        { title: 'FAQ-How to register a receiver.pdf', date: '2024-12-10', url: 'https://chcnavigation.jianguoyun.com/p/DYpEU6oQtq_UCxiBr-0FIAA' },
        { title: 'FAQ-How to upgrade the firmware or board of a receiver.pdf', date: '2024-11-05', url: 'https://chcnavigation.jianguoyun.com/p/DZ1FKZcQtq_UCxiToe8FIAA' },
        { title: 'How to export static data.pdf', date: '2024-11-05', url: 'https://chcnavigation.jianguoyun.com/p/DVQnE3YQtq_UCxjyjOoFIAA' },
        { title: 'How to replace the screen group.mp4', date: '2024-11-05', url: 'https://chcnavigation.jianguoyun.com/p/DQJHxUgQtq_UCxi3k_gFIAA' }
    ],
    // 如果没有数据，保持空数组，系统会提示 "No FAQs found"
    'i100': [
        { title :'ViLi i100_Dealers_FAQ_2025.09.13.pdf' ,  date:'2025-09-15', url:'https://chcnavigation.jianguoyun.com/p/DTfTpVgQtq_UCxj_2pIGIAA'}
    ],
    'i89':[
        { title:'FAQ-How to register a receiver.pdf', date:'2024-12-10',url:'https://chcnavigation.jianguoyun.com/p/DXgo2p8Qtq_UCxjm5ZUGIAA'},
        { title:'FAQ-How to upgrade the firmware or board of a receiver', date:'2024-12-10',url:'https://chcnavigation.jianguoyun.com/p/DdBsyGYQtq_UCxiV_oQGIAA'},
        { title:'How to export static data', date:'2024-12-10',url:'https://chcnavigation.jianguoyun.com/p/DZ1Yjg4Qtq_UCxjn5ZUGIAA'}
    ],
    'i85':[],
    'i83':[],
    'i76':[],
    'i73':[],
    'lt60h':[],
    'lt700':[],
    'lt700h':[],
    'lt800':[],
    'lt800h':[],
    'nx510':[],
    'apache3':[],
    'apache4':[],
    'apache6':[],
    'landstar': [],
    'cgo': [],
    'mapcloud': [], 
    'gnsstool': [], 
    'sharelocation': [], 
    'rinex': [], 
    'cgbas': [],
    'p5e': [],
    'p5u':[
        { title:'FAQ-How to use OpenVPN function for P5.pdf',  date:'2023-10-25',url:'https://chcnavigation.jianguoyun.com/p/DTRz0m0Qtq_UCxjpsuwFIAA'},
        { title:'How to login p5’s website by Lan cable.pdf',  date:'2024-12-5',url:'https://chcnavigation.jianguoyun.com/p/De1aJfIQtq_UCxily_cFIAA'},
        { title:'how to remotely download static data from P5.pdf',  date:'2023-6-2',url:'https://chcnavigation.jianguoyun.com/p/DSVnTJkQtq_UCxiZoPUFIAA'},
        { title:'How to share one antenna between P5U and P5S.mp4',  date:'2024-10-25',url:'https://chcnavigation.jianguoyun.com/p/DdUgAWMQtq_UCxjcxeMFIAA'},
    ]
};









