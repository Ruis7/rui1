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
        { version: 'v1.3.12', date: '2025-12-29', url:'https://chcnavigation.jianguoyun.com/p/DTm-gwsQtq_UCxiE-JgGIAA'},
        { version: 'v1.3.7', date: '2025-12-01', url: 'https://chcnavigation.jianguoyun.com/p/DYau6gcQtq_UCxjFtZMGIAA' },
        // 原链接与 V1.3.7 重复，核验前不向客户提供下载。
        { version: 'V1.3.5', date: '2025-11-10', url: '', verified: false },
        { version: 'V1.2.13', date: '2025-09-23', url: 'https://chcnavigation.jianguoyun.com/p/DYoSKLcQtq_UCxiYkY8GIAA' }
    ],
    'i93': [
        { version: 'V1.6.3', date: '2026-07-27', url: 'https://chcnavigation.jianguoyun.com/p/DSrFXYsQtq_UCxinoasGIAA' },
        { version: 'V1.5.4', date: '2026-03-11', url: 'https://chcnavigation.jianguoyun.com/p/DdS72x0Qtq_UCxiX8Z8GIAA' },
        { version: 'V1.5.2', date: '2026-01-21', url: 'https://chcnavigation.jianguoyun.com/p/DUaypfUQtq_UCxj2jpsGIAA' },
        { version: 'V1.3.8.2', date: '2025-04-01', url: 'https://chcnavigation.jianguoyun.com/p/DeF3R4YQtq_UCxjKlfgFIAA' },
        { version: 'V1.3.7', date: '2024-12-12', url: 'https://chcnavigation.jianguoyun.com/p/DRpFc9AQtq_UCxi8pOUFIAA' },
        { version: 'V1.3.6', date: '2024-10-15', url: 'https://chcnavigation.jianguoyun.com/p/DbSr6HkQtq_UCxjWquIFIAA' },
        { version: 'V1.2.9', date: '2024-03-31', url: 'https://chcnavigation.jianguoyun.com/p/DUOUYD0Qtq_UCxjFhsgFIAA' }
    ],
    'i89': [
        { version: 'V1.5.2', date: '2026-01-21', url: 'https://chcnavigation.jianguoyun.com/p/DXG_lfYQtq_UCxjwjZsGIAA' },
        { version: 'V1.3.8', date: '2024-12-27', url: 'https://chcnavigation.jianguoyun.com/p/DXYjrugQtq_UCxj-yeYFIAA' },
        { version: 'V1.3.5', date: '2024-10-15', url: 'https://chcnavigation.jianguoyun.com/p/DZ-RVnIQtq_UCxjXquIFIAA' },
        { version: 'OEM Board', date: '2025-02-28', url: 'https://chcnavigation.jianguoyun.com/p/DQ4O7hUQtq_UCxjNjdgFIAA'},
        { version: 'Radio', date: '2025-02-28', url: 'https://chcnavigation.jianguoyun.com/p/DXDybjUQtq_UCxiDx5UGIAA'}
    ],
    'i85': [
        { version: 'V1.3.2', date: '2026-08-27', url: 'https://chcnavigation.jianguoyun.com/p/DWQxG1gQtq_UCxishqwGIAA' },
        { version: 'V1.1.6.4', date: '2026-03-27', url: 'https://chcnavigation.jianguoyun.com/p/DX3y-1QQtq_UCxjDvKQGIAA' },
        { version: 'V1.1.6', date: '2026-03-27', url: 'https://chcnavigation.jianguoyun.com/p/Daz-6eEQtq_UCxi966AGIAA' },
        { version: 'V1.0.14', date: '2025-09-15', url: 'https://chcnavigation.jianguoyun.com/p/DVDEQUkQtq_UCxit3o4GIAA' },
        { version: 'V1.0.12', date: '2025-08-26', url: 'https://chcnavigation.jianguoyun.com/p/Ddf4fVIQtq_UCxizx5UGIAA' }
    ],
    'i83': [
        {"version": "V1.5.2", "date": "2026-08-03", "url": "https://chcnavigation.jianguoyun.com/p/DSyvVQwQtq_UCxjfoKsGIAA"},
        { version: 'V1.3.11.2', date: '2025-04-03', url: 'https://chcnavigation.jianguoyun.com/p/DYr_2AQQtq_UCxjvvvoFIAA' },
        { version: 'V1.3.10', date: '2025-01-23', url: 'https://chcnavigation.jianguoyun.com/p/DdjPGVgQtq_UCxif0esFIAA' }
    ],
    'i76': [
        {"version": "V1.7.1", "date": "2026-07-27", "url": "https://chcnavigation.jianguoyun.com/p/DQD0FMQQtq_UCxj5oKsGIAA"},
        { version: 'V1.5.1', date: '2026-01-21', url: 'https://chcnavigation.jianguoyun.com/p/Dda06AEQtq_UCxj-jJsGIAA' },
        { version: 'V1.4.3.3', date: '2025-09-26', url: 'https://chcnavigation.jianguoyun.com/p/DaWjPlgQtq_UCxjZlpIGIAA' },
        { version: 'V1.4.3', date: '2025-03-27', url: 'https://chcnavigation.jianguoyun.com/p/DQi4BBcQtq_UCxj_mYUGIAA' }
    ],
    'i73': [
        { version: 'V2.9.3', date: '2025-09-25', url: 'https://chcnavigation.jianguoyun.com/p/DT5Dk6kQtq_UCxi6opMGIAA' },
        { version: 'V2.6.5', date: '2023-11-10', url: 'https://chcnavigation.jianguoyun.com/p/DcMlYS0Qtq_UCxiZx5UGIAA' }
    ],
    'ibase': [
        {"version": "V3.1.2", "date": "2026-06-10", "url": "https://chcnavigation.jianguoyun.com/p/DWLSFKAQtq_UCxingKoGIAA", "notesUrl": "https://chcnavigation.jianguoyun.com/p/DWL6yUQQtq_UCxjUm6oGIAA"},
        { version: 'V3.0.4', date: '2026-02-04', url: 'https://chcnavigation.jianguoyun.com/p/DcH5BdYQtq_UCxiT7p0GIAA' },
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
        { version: 'LandStar-8.3.2.20261119', date: '2026-12-07', availableNow: true, url: 'https://chcnavigation.jianguoyun.com/p/DTzj5yUQtq_UCxi8y7EGIAA' },
        { version: 'LandStar-8.3.0.20260616', date: '2026-06-16', url: 'https://chcnavigation.jianguoyun.com/p/Df19vB4Qtq_UCxj59aYGIAA' },
        { version: 'LandStar-8.2.0.4.20260320', date: '2026-03-20', url: 'https://chcnavigation.jianguoyun.com/p/DSSt7oQQtq_UCxj55Z8GIAA' },
        { version: 'LandStar-8.2.0.3.20260306', date: '2026-03-09', url: 'https://chcnavigation.jianguoyun.com/p/Ddjh87cQtq_UCxiU4J4GIAA' },
        { version: 'LandStar-8.2.0.3.20260111', date: '2026-01-11', url: 'https://chcnavigation.jianguoyun.com/p/DQecQMwQtq_UCxiOzJkGIAA' },
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
    'landstar': [ { title: 'LandStar 8.2 User Manual', date: '2025-12-10', url: 'https://chcnavigation.jianguoyun.com/p/DdM_hnIQtq_UCxiK64oGIAA' } ],
    'nx510': [{ title: 'NX510_User manual', date: '2025-12-10', url:'https://chcnavigation.jianguoyun.com/p/DUBluY4Qtq_UCxjQ2MEFIAA'}],
    'apache3': [{ title: 'Apache3_User manual', date: '2025-07-16', url:'https://chcnavigation.jianguoyun.com/p/DaUmlfkQtq_UCxis3JUGIAA'}], 
    'apache4': [{ title: 'Apache4 User Manual', date: '2025-03-10', url:'https://chcnavigation.jianguoyun.com/p/DZaw7OUQtq_UCxiirYwGIAA'}], 
    'apache6': [{ title: 'Apache6_User manual', date: '2025-09-02', url:'https://chcnavigation.jianguoyun.com/p/DRiHkaAQtq_UCxiK6ogGIAA'}],
    'x500': [],
    'cgo': [{ title: 'CGO 2 User Manual', date: '2025-09-02', url:'https://chcnavigation.jianguoyun.com/p/DTjx4JUQtq_UCxi-5cUFIAA'}], 
    'coprocess': [],
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
    'i83':[
        { title :'I83 FAQ' ,  date:'2025-12-15', url:'https://chcnavigation.jianguoyun.com/p/DUvXYUcQtq_UCxir-JgGIAA'}
    ],
    'i76':[
        { title :'I76 FAQ' ,  date:'2025-12-15', url:'https://chcnavigation.jianguoyun.com/p/DeBXH_MQtq_UCxit-JgGIAA'}
    ],
    'i73':[
        { title :'I73 FAQ' ,  date:'2025-12-15', url:'https://chcnavigation.jianguoyun.com/p/DUWzeSUQtq_UCxijq5MGIAA'}
    ],
    'ibase':[
        { title :'IBase FAQ' ,  date:'2025-12-15', url:'https://chcnavigation.jianguoyun.com/p/DYVxl9gQtq_UCxiX74kGIAA'}
    ],
    'lt60h':[
        { title :'LT60H FAQ' ,  date:'2025-12-15', url:'https://chcnavigation.jianguoyun.com/p/DR-iwC8Qtq_UCxiv9sAFIAA'}
    ],
    'lt700':[],
    'lt700h':[
        { title :'LT700H FAQ' ,  date:'2025-12-15', url:'https://chcnavigation.jianguoyun.com/p/DWmyZrsQtq_UCxiy-JgGIAA'}
    ],
    'lt800':[
        // 原链接与 LT60H FAQ 重复，核验前不向客户提供下载。
        { title :'LT800 FAQ' ,  date:'2025-12-15', url:'', verified: false }
    ],
    'lt800h':[
         { title :'LT800H FAQ' ,  date:'2025-12-15', url:'https://chcnavigation.jianguoyun.com/p/Db0fusAQtq_UCxi2_vsFIAA'}
    ],
    'nx510':[
        { title:'NX510 FAQ', date:'2024-12-15',url:'https://chcnavigation.jianguoyun.com/p/DRFVOTkQtq_UCxi3-JgGIAA'}
    ],
    'apache3':[],
    'apache4':[
        { title:'Apache4 FAQ', date:'2025-02-15',url:'https://chcnavigation.jianguoyun.com/p/Dc_9DiMQtq_UCxjc2JEGIAA'}
    ],
    'apache6':[
        { title:'Apache6 FAQ', date:'2025-09-10',url:'https://chcnavigation.jianguoyun.com/p/DT1iVfoQtq_UCxi6-JgGIAA'}
    ],
    'x500':[
        { title:'X500 FAQ', date:'2024-11-20',url:'https://chcnavigation.jianguoyun.com/p/DXGR6kwQ4vqeDBjGipYGIAA'}
    ],
    'landstar': [
        { title:'FAQ LandStar software', date:'2024-12-12',url:'https://chcnavigation.jianguoyun.com/p/DVUAd74Qtq_UCxi9-JgGIAA'},
    ],
    'cgo': [
        { title:'FAQ-CGO software', date:'2025-01-15',url:'https://chcnavigation.jianguoyun.com/p/DSbdnjoQtq_UCxit7tQFIAA'},
    ],
    'coprocess': [
        { title:'FAQ-Coprocess software', date:'2025-12-10',url:'https://chcnavigation.jianguoyun.com/p/DbNVtpEQ4vqeDBjMipYGIAA'},
    ],
    'mapcloud': [], 
    'gnsstool': [], 
    'sharelocation': [], 
    'rinex': [], 
    'cgbas': [],
    'p5e': [],
    'p5u':[
        { title:'FAQ-How to use OpenVPN function for P5.pdf',  date:'2023-10-25',url:'https://chcnavigation.jianguoyun.com/p/DTRz0m0Qtq_UCxjpsuwFIAA'},
        { title:'How to log in to the P5 web interface by LAN cable.pdf',  date:'2024-12-05',url:'https://chcnavigation.jianguoyun.com/p/De1aJfIQtq_UCxily_cFIAA'},
        { title:'How to remotely download static data from P5.pdf',  date:'2023-06-02',url:'https://chcnavigation.jianguoyun.com/p/DSVnTJkQtq_UCxiZoPUFIAA'},
        { title:'How to share one antenna between P5U and P5S.mp4',  date:'2024-10-25',url:'https://chcnavigation.jianguoyun.com/p/DdUgAWMQtq_UCxjcxeMFIAA'},
    ]
};

/* 5️⃣ 新闻公告数据库 (News Database) - 新增 */
const newsDatabase = [
    {"title": "i83 Firmware V1.5.2", "date": "2026-08-03", "tag": "Firmware", "sourceUrl": "https://chcnavigation.jianguoyun.com/p/DWGTI2QQtq_UCxi9uqsGIAA", "changesZh": ["修复 IMU 改正 GGA 的格式错误，以及同频率输出时 NMEA 时间戳不一致的问题。", "新增访客模式，可在接收机设置网页切换 GGA 标识（GP/GN）。恢复出厂设置后，北斗 B1C 和 B2A 默认开启。", "适用料号 A19318430901060002、A19318980901070002。升级前请备份数据，确保电量高于 50%，升级期间不要关机。"], "changes": ["Fixed the IMU-corrected GGA format and inconsistent timestamps in NMEA output at the same rate.", "Added guest mode and GP/GN switching in receiver web settings. BeiDou B1C and B2A are enabled after a factory reset.", "Supported part numbers: A19318430901060002 and A19318980901070002. Back up data, keep the battery above 50%, and leave the receiver powered on during the update."]},
    {"title": "i76 Firmware V1.7.1", "date": "2026-07-27", "tag": "Firmware", "sourceUrl": "https://chcnavigation.jianguoyun.com/p/DQue0D0Qtq_UCxjAuqsGIAA", "changesZh": ["修复与部分平板配对时的蓝牙传输延迟，以及同频率输出时 NMEA 时间戳不一致的问题。", "新增访客模式和 IMU 改正 GGA 输出，可在网页切换 GP/GN，并下载或删除静态文件。恢复出厂设置后，北斗 B1C 和 B2A 默认开启。", "适用 i76 DistLink，料号 110102009N。升级前请备份数据，确保电量高于 50%，升级期间不要关机。"], "changes": ["Fixed Bluetooth delays when paired with some tablets and inconsistent timestamps in NMEA output at the same rate.", "Added guest mode, IMU-corrected GGA, GP/GN switching, and static-file download and deletion in the web interface. BeiDou B1C and B2A are enabled after a factory reset.", "For i76 DistLink, part number 110102009N. Back up data, keep the battery above 50%, and leave the receiver powered on during the update."]},
    {
        title: 'i93 Firmware V1.6.3',
        date: '2026-07-27',
        tag: 'Firmware',
        sourceUrl: 'https://chcnavigation.jianguoyun.com/p/DWaiL3kQtq_UCxi5uqsGIAA',
        changesZh: [
            '新增访客模式和 VRS 虚拟基站 ID。',
            '恢复出厂设置后，北斗 B1C 和 B2A 默认开启。手簿网页默认使用电脑版。',
            '适用料号 A11611980901070507、110102003Y。可通过接收机网页或手簿上的 LandStar 升级。升级前请备份，确保电量高于 50%，升级期间不要关机。'
        ],
        changes: [
            'Added guest mode and a VRS virtual base station ID.',
            'BeiDou B1C and B2A are enabled after a factory reset. The controller web interface defaults to desktop view.',
            'Supported part numbers: A11611980901070507 and 110102003Y. Upgrade via the receiver web interface or LandStar on your controller. Back up your data, keep the battery above 50%, and leave the receiver powered on.'
        ]
    },
    {
        title: 'LandStar 8.3.2.20261119', availableNow: true,
        date: '2026-12-07',
        tag: 'Software',
        changesZh: [
            '激光放样：用支持激光的 RTK 做点、线和面放样。',
            '界面可自定义：把常用工具分组，按自己的作业习惯排列。',
            '地图和文件更好用：支持 WFS 2.0 在线地图、调节地图透明度，并新增 GC3、FLD、SDR 等导出格式。',
            '外业操作更顺：视觉测量处理图片更快，改进了道路放样、图层查找、DWG/DXF 图层编辑、CAD 浏览和全站仪操作。',
            '新增两点旋转校准、三角形计算和测量参考线，支持带断链桩号的路线和自定义面积分块数量。'
        ],
        changes: [
            'Use a compatible laser RTK receiver to stake out points, lines and surfaces.',
            'Group your frequent tools and arrange the interface around your workflow.',
            'Use WFS 2.0 online maps, adjust map transparency and export to additional formats including GC3, FLD and SDR.',
            'Process Visual Survey images faster, with improvements to road stakeout, layer search, DWG/DXF layer editing, CAD viewing and total station workflows.',
            'Use two-point rotation calibration, triangle calculations and measurement reference lines. Alignments support station equations, and area division supports a custom block count.'
        ]
    },
    {
        title: 'i85 Firmware V1.3.2',
        date: '2026-08-27',
        tag: 'Firmware',
        changesZh: [
            '修复同频率输出的 NMEA 数据时间戳不一致的问题。',
            '恢复出厂设置后，北斗 B1C 和 B2A 频段默认启用。',
            '新增访客模式和 IMU 改正后的 GGA 输出。接收机网页可切换 GGA 标识（GP/GN）。',
            '升级前备份接收机数据，电量保持在 50% 以上，升级期间请勿关机。'
        ],
        changes: [
            'Fixed inconsistent timestamps in NMEA data output at the same rate.',
            'BeiDou B1C and B2A are enabled by default after a factory reset.',
            'Added guest mode and IMU-corrected GGA output. Switch the GGA talker ID (GP/GN) from the receiver web interface.',
            'Back up receiver data before upgrading, keep the battery above 50%, and leave the receiver powered on during the upgrade.'
        ]
    },
        {
        title: 'i85 Firmware V1.1.6 Release Notes',
        date: '2026-03-27',
        tag: 'Firmware',
        changes: [
            'Added compatibility with the DistLink radio protocol and conventional radio protocols.',
            'Added support for a 4800 baud rate for CHC, TT450 and Transparent radio protocols.',
            'Added the PointSKY PPP mode, configurable in PPP settings.'
        ]
    },
    {
        title: 'LandStar 8.2.0.3 Release Note',
        date: '2026-03-09',
        tag: 'Software',
        changes: [
            'Fixed abnormal coordinate values in the Tree Survey method.',
            'Fixed missing antenna height in the measured base-point elevation for Single Point Localization.',
            'Fixed Sifix and ViLidar points not appearing in exported DWG files.'
        ]
    },
    {
        title: 'LandStar 8.2.0.2 Release Note',
        date: '2025-12-19',
        tag: 'Software',
        changes: [
            'Improved survey-line switching by correcting module data interaction logic.',
            'Fixed crashes caused by translation exceptions in multilingual environments.'
        ]
    },

];
