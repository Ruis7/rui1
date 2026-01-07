/**
 * RUI Support Center - Main Logic
 */

// ==========================================
// 1. 全局辅助函数 (Global Utilities)
// ==========================================

window.toggleMenu = function() {
    document.getElementById('navMenu').classList.toggle('active');
};

window.toggleSubmenu = function(element) {
    if (window.innerWidth <= 768) {
        const dropdown = element.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown-menu')) {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
                element.style.color = 'inherit';
            } else {
                document.querySelectorAll('.dropdown-menu').forEach(d => d.style.display = 'none');
                dropdown.style.display = 'block';
                element.style.color = 'var(--primary-color)';
            }
        }
    }
};

window.toggleLanguage = function(event) {
    event.stopPropagation();
    document.getElementById('langDropdown').classList.toggle('show');
};

window.addEventListener('click', function(e) {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// ==========================================
// 2. 国际化翻译 (I18n)
// ==========================================
const translations = {
    'zh': { 
        'lang_select': '语言 / Language ▾', 
        'menu_gnss': 'GNSS 接收机', 'menu_mobile': '移动测绘', 'menu_ag': '农业导航', 'menu_marine': '海洋测量', 'menu_uav': '无人机系统', 'menu_software': '软件', 
        'link_manual': '说明书', 'link_firmware': '固件', 'link_software': '软件', 'link_faq': 'FAQ', 
        'hero_title': '欢迎来到 <span>RUI</span> 技术支持', 'hero_desc': '您的说明书、固件和技术支持一站式中心。', 
        'card_fw_title': '你好', 'card_fw_desc': '欢迎关注', 
        'card_doc_title': '最新公告', 
        'card_doc_desc': '查看固件更新日志、服务器维护通知及重要新闻。',
        'card_ticket_title': '售后工单', 'card_ticket_desc': '遇到技术难题？提交工单，我将为您解答。', 
        'btn_download': '更多 >', 'btn_browse': '浏览 >', 'btn_submit': '提交 >' 
    },
    'en': { 
        'lang_select': 'Language ▾', 
        'menu_gnss': 'GNSS Receivers', 'menu_mobile': 'Mobile Mapping', 'menu_ag': 'Agriculture', 'menu_marine': 'Marine Survey', 'menu_uav': 'UAV Systems', 'menu_software': 'Software', 
        'link_manual': 'Manual', 'link_firmware': 'Firmware', 'link_software': 'Software', 'link_faq': 'FAQ', 
        'hero_title': 'Welcome to <span>RUI’s</span> Support', 'hero_desc': 'Your one-stop destination for Manuals, Firmware, and Assistance.', 
        'card_fw_title': 'Hello', 'card_fw_desc': 'HI))', 
        'card_doc_title': 'Latest News', 
        'card_doc_desc': 'Firmware changelogs, server maintenance, and updates.',
        'card_ticket_title': 'Support Ticket', 'card_ticket_desc': 'Facing issues? Submit a ticket to our engineers.', 
        'btn_download': 'More >', 'btn_browse': 'Browse >', 'btn_submit': 'Submit >' 
    },
    'ru': { 
        'lang_select': 'Язык ▾', 
        'menu_gnss': 'ГНСС Приемники', 'menu_mobile': 'Мобильное картографирование', 'menu_ag': 'Агронавигация', 'menu_marine': 'Морская геодезия', 'menu_uav': 'БПЛА', 'menu_software': 'Программы', 
        'link_manual': 'Инструкция', 'link_firmware': 'Прошивка', 'link_software': 'Программа', 'link_faq': 'FAQ', 
        'hero_title': 'Добро пожаловать в <span>RUI‘s</span>', 'hero_desc': 'Ваш единый центр документации, прошивок и техподдержки.', 
        'card_fw_title': 'Добро пожаловать!', 'card_fw_desc': 'Добро пожаловать!', 
        'card_doc_title': 'Новости', 
        'card_doc_desc': 'Журнал обновлений и уведомления о техобслуживании.', 
        'card_ticket_title': 'Техподдержка', 'card_ticket_desc': 'Возникли проблемы? Свяжитесь со мной.', 
        'btn_download': 'Более >', 'btn_browse': 'Обзор >', 'btn_submit': 'Отправить >' 
    },
    'kk': { 
        'lang_select': 'Тіл ▾', 
        'menu_gnss': 'GNSS қабылдағыштары', 'menu_mobile': 'Мобильді карталау', 'menu_ag': 'Агронавигация', 'menu_marine': 'Гидрография', 'menu_uav': 'ҰАА жүйелері', 'menu_software': 'Бағдарламалар',
        'link_manual': 'Нұсқаулық', 'link_firmware': 'Бағдарлама', 'link_software': 'Бағдарлама', 'link_faq': 'FAQ',
        'hero_title': '<span>RUI’s</span> қолдау орталығы', 'hero_desc': 'Нұсқаулықтар, микробағдарламалар және техникалық қолдау орталығы.', 
        'card_fw_title': 'Сәлем', 'card_fw_desc': 'Қош келдіңіз', 
        'card_doc_title': 'Жаңалықтар', 
        'card_doc_desc': 'Жаңартулар мен техникалық қызмет көрсету туралы хабарламалар.', 
        'card_ticket_title': 'Қолдау билеті', 'card_ticket_desc': 'Техникалық мәселелер бар ма? Билет жіберіңіз.', 
        'btn_download': 'Толығырақ >', 'btn_browse': 'Шолу >', 'btn_submit': 'Жіберу >' 
    },
    'uz': { 
        'lang_select': 'Til ▾', 
        'menu_gnss': 'GNSS qabul qiluvchilar', 'menu_mobile': 'Mobil xaritalash', 'menu_ag': 'Qishloq xo\'jaligi', 'menu_marine': 'Dengiz geodeziyasi', 'menu_uav': 'PUA tizimlari', 'menu_software': 'Dasturlar',
        'link_manual': 'Qo\'llanma', 'link_firmware': 'Mikrodastur', 'link_software': 'Dastur', 'link_faq': 'FAQ',
        'hero_title': '<span>RUI"s</span> Yordam Markazi', 'hero_desc': 'Qo\'llanmalar va mikrodasturlar uchun yagona manzil.', 
        'card_fw_title': 'Salom', 'card_fw_desc': 'Xush kelibsiz', 
        'card_doc_title': 'Yangiliklar', 
        'card_doc_desc': 'Yangilanishlar va server xizmat ko\'rsatish xabarlari.',
        'card_ticket_title': 'Yordam chiptasi', 'card_ticket_desc': 'Muammo bormi? So\'rov yuboring.', 
        'btn_download': 'Ko\'proq >', 'btn_browse': 'Ko\'rish >', 'btn_submit': 'Yuborish >' 
    },
    'mn': { 
        'lang_select': 'Хэл ▾', 
        'menu_gnss': 'GNSS Хүлээн авагч', 'menu_mobile': 'Мобайл зураглал', 'menu_ag': 'Хөдөө аж ахуй', 'menu_marine': 'Далайн хэмжилт', 'menu_uav': 'Нисгэгчгүй онгоц', 'menu_software': 'Програм',
        'link_manual': 'Гарын авлага', 'link_firmware': 'Програм', 'link_software': 'Програм', 'link_faq': 'FAQ',
        'hero_title': '<span>RUI"s</span> Дэмжлэг', 'hero_desc': 'Гарын авлага, техникийн туслалцааны нэгдсэн төв.', 
        'card_fw_title': 'Сайн байна уу', 'card_fw_desc': 'Тавтай морил', 
        'card_doc_title': 'Мэдээ', 
        'card_doc_desc': 'Программын шинэчлэл болон серверийн засвар үйлчилгээ.',
        'card_ticket_title': 'Тусламжийн хүсэлт', 'card_ticket_desc': 'Асуудал гарсан уу? Бидэнд хандана уу.', 
        'btn_download': 'Дэлгэрэнгүй >', 'btn_browse': 'Харах >', 'btn_submit': 'Илгээх >' 
    },
    'ua': { 
        'lang_select': 'Мова ▾', 
        'menu_gnss': 'GNSS Приймачі', 'menu_mobile': 'Мобільне картографування', 'menu_ag': 'Агронавігація', 'menu_marine': 'Морська геодезія', 'menu_uav': 'БПЛА', 'menu_software': 'Програми',
        'link_manual': 'Інструкція', 'link_firmware': 'Прошивка', 'link_software': 'Програма', 'link_faq': 'FAQ',
        'hero_title': 'Підтримка <span>RUI</span>', 'hero_desc': 'Ваш єдиний центр для інструкцій та прошивок.', 
        'card_fw_title': 'Вітаю', 'card_fw_desc': 'Ласкаво просимо', 
        'card_doc_title': 'Новини', 
        'card_doc_desc': 'Журнал оновлень та повідомлення про обслуговування.', 
        'card_ticket_title': 'Техпідтримка', 'card_ticket_desc': 'Є питання? Надішліть запит.', 
        'btn_download': 'Більше >', 'btn_browse': 'Огляд >', 'btn_submit': 'Надіслати >' 
    }
};

window.changeLanguage = function(langCode) {
    const dict = translations[langCode];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            dict[key].includes('<') ? el.innerHTML = dict[key] : el.textContent = dict[key];
        }
    });
};

// ==========================================
// 3. 动态菜单生成
// ==========================================
function initMenu() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu || typeof menuConfig === 'undefined') return;
    
    navMenu.innerHTML = ''; 

    menuConfig.forEach(category => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';

        const navLink = document.createElement('div');
        navLink.className = 'nav-link';
        navLink.setAttribute('data-i18n', category.labelKey); 
        navLink.textContent = category.labelKey; 
        navLink.onclick = function() { window.toggleSubmenu(this); }; 
        navItem.appendChild(navLink);

        if (category.items && category.items.length > 0) {
            const dropdown = document.createElement('div');
            dropdown.className = 'dropdown-menu';

            category.items.forEach(productId => {
                const productGroup = document.createElement('div');
                productGroup.className = 'product-group';
                const downloadLabelKey = (category.type === 'software') ? 'link_software' : 'link_firmware';

                productGroup.innerHTML = `
                    <span class="product-title">${productId.toUpperCase()}</span>
                    <div class="product-links">
                        <a href="#" onclick="openManualModal('${productId}'); return false;" data-i18n="link_manual">Manual</a> | 
                        <a href="#" onclick="openFirmwareModal('${productId}'); return false;" data-i18n="${downloadLabelKey}">Download</a> | 
                        <a href="#" onclick="openFaqModal('${productId}'); return false;" data-i18n="link_faq">FAQ</a> | 
                    </div>
                `;
                dropdown.appendChild(productGroup);
            });
            navItem.appendChild(dropdown);
        }
        navMenu.appendChild(navItem);
    });
    window.changeLanguage('zh'); 
}

// ==========================================
// 4. 弹窗与智能搜索逻辑 (Smart Search & Modals)
// ==========================================

function lockScroll() { document.body.style.overflow = 'hidden'; }
function unlockScroll() { document.body.style.overflow = ''; }

window.openFirmwareModal = function(productModel) {
    const modal = document.getElementById('firmwareModal');
    const title = document.getElementById('modalTitle');
    const list = document.getElementById('modalList');
    
    title.textContent = productModel.toUpperCase() + ' DOWNLOADS';
    list.innerHTML = '';
    
    const data = firmwareDatabase[productModel];
    
    if (!data) {
        list.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">🚫 Configuration not found.</p>';
    } else if (data.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">📭 No firmware currently available.</p>';
    } else {
        data.forEach(item => {
            const row = document.createElement('div');
            row.className = 'firmware-item';
            row.innerHTML = `
                <div class="fw-info">
                    <span class="fw-version">💾 ${item.version}</span>
                    <span class="fw-date">${item.date ? '📅 ' + item.date : ''}</span>
                </div>
                <a href="${item.url}" class="fw-download-btn" target="_blank">Download</a>
            `;
            list.appendChild(row);
        });
    }
    modal.style.display = 'block';
    lockScroll();
};

window.openManualModal = function(productModel) {
    const modal = document.getElementById('firmwareModal');
    const title = document.getElementById('modalTitle');
    const list = document.getElementById('modalList');
    
    title.textContent = productModel.toUpperCase() + ' MANUALS';
    list.innerHTML = '';
    
    const data = manualDatabase[productModel];
    
    if (!data || data.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">📭 No manuals found.</p>';
    } else {
        data.forEach(item => {
            const row = document.createElement('div');
            row.className = 'firmware-item';
            row.innerHTML = `
                <div class="fw-info">
                    <span class="fw-version">📄 ${item.title}</span>
                    <span class="fw-date">${item.date || ''}</span>
                </div>
                <a href="${item.url}" class="fw-download-btn" target="_blank">View</a>
            `;
            list.appendChild(row);
        });
    }
    modal.style.display = 'block';
    lockScroll();
};

window.openFaqModal = function(productModel) {
    const modal = document.getElementById('firmwareModal'); 
    const title = document.getElementById('modalTitle');
    const list = document.getElementById('modalList');
    
    title.textContent = productModel.toUpperCase() + ' FAQ';
    list.innerHTML = '';
    
    let data = [];
    if (typeof faqDatabase !== 'undefined' && faqDatabase[productModel]) {
        data = faqDatabase[productModel];
    }
    
    if (!data || data.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">📭 No FAQs found.</p>';
    } else {
        data.forEach(item => {
            const row = document.createElement('div');
            row.className = 'firmware-item';
            row.innerHTML = `
                <div class="fw-info">
                    <span class="fw-version">❓ ${item.title}</span>
                    <span class="fw-date">${item.date || ''}</span>
                </div>
                <a href="${item.url}" class="fw-download-btn" target="_blank">View</a>
            `;
            list.appendChild(row);
        });
    }
    
    modal.style.display = 'block';
    if (document.body.style.overflow) document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    document.getElementById('firmwareModal').style.display = 'none';
    unlockScroll();
};

window.openContactModal = function() {
    document.getElementById('contactModal').style.display = 'block';
    lockScroll();
};
window.closeContactModal = function() {
    document.getElementById('contactModal').style.display = 'none';
    unlockScroll();
};

window.openSearchChoiceModal = function(model) {
    const modal = document.getElementById('searchChoiceModal');
    document.getElementById('searchResultTitle').textContent = "RESULT: " + model.toUpperCase();
    const btnContainer = document.getElementById('searchResultBtns');
    btnContainer.innerHTML = '';

    const fwBtn = document.createElement('button');
    fwBtn.className = 'search-btn';
    fwBtn.innerHTML = '💾 Download Firmware / Software';
    fwBtn.onclick = function() { 
        modal.style.display = 'none'; 
        openFirmwareModal(model); 
    };
    btnContainer.appendChild(fwBtn);

    const docBtn = document.createElement('button');
    docBtn.className = 'search-btn';
    docBtn.innerHTML = '📄 View Manuals';
    docBtn.onclick = function() { 
        modal.style.display = 'none'; 
        openManualModal(model); 
    };
    btnContainer.appendChild(docBtn);

    modal.style.display = 'block';
    lockScroll();
};
window.closeSearchChoiceModal = function() {
    document.getElementById('searchChoiceModal').style.display = 'none';
    unlockScroll();
};

window.performSearch = function() {
    const input = document.getElementById('searchInput');
    const query = input.value.trim().toLowerCase();
    
    if (!query) {
        alert("Please enter a model name.");
        return;
    }

    const allModels = new Set([
        ...Object.keys(firmwareDatabase),
        ...Object.keys(manualDatabase)
    ]);

    if (allModels.has(query)) {
        openSearchChoiceModal(query);
        return;
    }

    const partialMatch = Array.from(allModels).find(m => m.includes(query));
    
    if (partialMatch) {
        openSearchChoiceModal(partialMatch);
    } else {
        alert(`Product "${query}" not found. Try generic names like 'i93', 'CGO' or 'Landstar'.`);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") window.performSearch();
        });
    }
});

// ==========================================
// 5. 高性能粒子动画 (Particle Engine)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const heroSection = document.getElementById('heroSection');
    
    let particlesArray = [];
    let animationId;
    let isAnimating = false;
    
    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const mouse = { x: null, y: null };

    heroSection.addEventListener('mousemove', function(event) {
        const rect = heroSection.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
        
        const count = window.innerWidth < 768 ? 1 : 3;
        for (let i = 0; i < count; i++) {
            particlesArray.push(new Particle());
        }
    });

    class Particle {
        constructor() {
            this.x = mouse.x;
            this.y = mouse.y;
            this.size = Math.random() * 4 + 1; 
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = Math.random() > 0.5 ? 'rgba(243, 112, 33, 1)' : 'rgba(255, 255, 255, 0.8)';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function connectParticles() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 50) {
                    ctx.strokeStyle = 'rgba(243, 112, 33, 0.2)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function handleParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            
            if (particlesArray[i].size <= 0.3) {
                particlesArray.splice(i, 1);
                i--;
            }
        }
        connectParticles();
        
        if (isAnimating) {
            animationId = requestAnimationFrame(handleParticles);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isAnimating) {
                    isAnimating = true;
                    handleParticles();
                }
            } else {
                isAnimating = false;
                cancelAnimationFrame(animationId);
            }
        });
    });
    
    observer.observe(heroSection);
});

// ==========================================
// 6. 智能更新推送逻辑 (Auto Update Notification)
// ==========================================

function parseDate(dateStr) {
    if (!dateStr) return new Date(0); 
    return new Date(dateStr);
}

function findLatestFirmware() {
    let latestItem = null;
    let latestDate = new Date(0);
    let latestModel = '';

    if (typeof firmwareDatabase !== 'undefined') {
        for (const [model, list] of Object.entries(firmwareDatabase)) {
            if (Array.isArray(list)) {
                list.forEach(item => {
                    const itemDate = parseDate(item.date);
                    if (itemDate > latestDate && item.url) { 
                        latestDate = itemDate;
                        latestItem = item;
                        latestModel = model;
                    }
                });
            }
        }
    }

    return { item: latestItem, model: latestModel };
}

function initUpdateToast() {
    if (sessionStorage.getItem('rui_toast_closed')) return;

    const result = findLatestFirmware();
    if (!result.item) return; 

    const { item, model } = result;
    
    document.getElementById('toastModel').textContent = model.toUpperCase();
    document.getElementById('toastVer').textContent = item.version;
    document.getElementById('toastDate').textContent = 'Released: ' + item.date;
    document.getElementById('toastLink').href = item.url;
    
    setTimeout(() => {
        document.getElementById('updateToast').classList.add('show');
    }, 2500);
}

window.closeUpdateToast = function() {
    const toast = document.getElementById('updateToast');
    toast.classList.remove('show');
    sessionStorage.setItem('rui_toast_closed', 'true');
};

// ==========================================
// 7. 公告弹窗逻辑 (News Modal)
// ==========================================
window.openNewsModal = function() {
    const modal = document.getElementById('firmwareModal'); 
    const title = document.getElementById('modalTitle');
    const list = document.getElementById('modalList');
    
    title.textContent = 'LATEST NEWS & LOGS';
    list.innerHTML = '';
    
    if (typeof newsDatabase === 'undefined' || newsDatabase.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">📭 No news available.</p>';
    } else {
        newsDatabase.forEach(item => {
            const row = document.createElement('div');
            row.className = 'firmware-item'; 
            
            let tagColor = '#999';
            let borderColor = 'rgba(153,153,153,0.3)';
            
            if(item.tag === 'Software') { tagColor = '#28a745'; borderColor = 'rgba(40, 167, 69, 0.3)'; }
            else if(item.tag === 'Firmware') { tagColor = '#17a2b8'; borderColor = 'rgba(23, 162, 184, 0.3)'; }
            else if(item.tag === 'Service') { tagColor = '#ffc107'; borderColor = 'rgba(255, 193, 7, 0.3)'; }
            else if(item.tag === 'Website') { tagColor = '#F37021'; borderColor = 'rgba(243, 112, 33, 0.3)'; }
            
            row.innerHTML = `
                <div class="fw-info" style="width: 100%;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span class="fw-version" style="font-size:15px; color:#fff;">${item.title}</span>
                        <span style="font-size:11px; color:${tagColor}; border:1px solid ${borderColor}; padding:1px 6px; border-radius:4px; font-family:var(--font-tech); text-transform: uppercase;">${item.tag}</span>
                    </div>
                    <div style="font-size:13px; color:#aaa; display:flex; justify-content:space-between;">
                        <span style="max-width: 75%; opacity: 0.8;">${item.desc || ''}</span>
                        <span class="fw-date" style="color:#666;">📅 ${item.date}</span>
                    </div>
                </div>
            `;
            list.appendChild(row);
        });
    }
    
    modal.style.display = 'block';
    if(document.body.style.overflow) document.body.style.overflow = 'hidden';
};

// ==========================================
// 8. 全球动态背景地图逻辑 (Global Map Background)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    var mapContainer = document.getElementById('global-map-bg');
    if (!mapContainer) return; // 防止页面没加载完报错

    var myChart = echarts.init(mapContainer);

    // --- 1. 数据定义：上海+独联体首都 (英文版) ---
    var geoCoordMap = {
        'Shanghai': [121.4737, 31.2304],
        'Moscow': [37.6173, 55.7558],    // 俄罗斯
        'Kyiv': [30.5234, 50.4501],      // 乌克兰
        'Tbilisi': [44.8271, 41.7151],   // 格鲁吉亚
        'Minsk': [27.5615, 53.9045],     // 白俄罗斯
        'Astana': [71.4304, 51.1605],    // 哈萨克斯坦
        'Tashkent': [69.2401, 41.2995],  // 乌兹别克斯坦
        'Bishkek': [74.5698, 42.8746],   // 吉尔吉斯斯坦
        'Dushanbe': [68.7870, 38.5358],  // 塔吉克斯坦
        'Yerevan': [44.5090, 40.1872],   // 亚美尼亚
        'Baku': [49.8671, 40.4093],      // 阿塞拜疆
        'Ashgabat': [58.3261, 37.9601]   // 土库曼斯坦
    };

    // --- 2. 自动生成：呼吸灯数据 ---
    var breathingCitiesData = [];
    for (var key in geoCoordMap) {
        // 双中心：Moscow/Shanghai 光圈大，其他小
        var weight = (key === 'Moscow' || key === 'Shanghai') ? 150 : 60;
        breathingCitiesData.push({
            name: key,
            value: geoCoordMap[key].concat(weight)
        });
    }

    // --- 3. 自动生成：双中心汇聚流光连线 ---
    var streamLineData = [];
    var centers = ['Shanghai', 'Moscow']; // 更新为英文中心名

    for (var cityName in geoCoordMap) {
        var startPoint = geoCoordMap[cityName];
        centers.forEach(function(centerName) {
            // 不自己连自己
            if (cityName !== centerName) {
                var endPoint = geoCoordMap[centerName];
                streamLineData.push({
                    fromName: cityName,
                    toName: centerName,
                    coords: [startPoint, endPoint]
                });
            }
        });
    }

    // --- 4. ECharts 配置项 ---
    var option = {
        backgroundColor: 'transparent', // 保持透明，配合 CSS 背景色
        
        geo: {
            map: 'world',
            roam: true, // 开启漫游，方便你查看细节
            zoom: 2.6, // 🔍 放大地图
            center: [70, 45], // 🎯 视野中心定位在中亚/独联体区域，裁掉美洲和非洲
            label: { emphasis: { show: false } },
            itemStyle: {
                normal: {
                    areaColor: '#092838', // 陆地深蓝
                    borderColor: '#154e6b', // 边界线
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: '#0b354d' // 鼠标悬停略微变亮
                }
            }
        },
        
        series: [
            // 图层1：呼吸灯节点
            {
                name: 'Service Nodes',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: breathingCitiesData,
                symbolSize: function (val) { return val[2] / 10; }, // 稍微调小一点，避免放大后太拥挤
                showEffectOn: 'render',
                rippleEffect: { brushType: 'stroke', scale: 3, period: 4 },
                label: {
                    normal: {
                        formatter: '{b}', position: 'right', show: true,
                        fontSize: 11, // 英文名称
                        color: '#8dcfff', opacity: 0.9,
                        textBorderColor: '#000', textBorderWidth: 2
                    }
                },
                itemStyle: {
                    normal: { color: '#00eaff', shadowBlur: 10, shadowColor: '#00eaff' }
                },
                zlevel: 1
            },
            
            // 图层2：动态流光
            {
                name: 'Data Link',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true, period: 5, trailLength: 0.2,
                    color: '#F37021', // 使用品牌橙色
                    symbol: 'circle', symbolSize: 3
                },
                lineStyle: {
                    normal: { color: '#F37021', width: 0, opacity: 0, curveness: 0.2 }
                },
                data: streamLineData
            },
            
            // 图层3：弱背景连线
            {
                type: 'lines',
                zlevel: 1,
                lineStyle: {
                    normal: { color: '#4af', width: 0.5, opacity: 0.05, curveness: 0.2 }
                },
                data: streamLineData
            }
        ]
    };

    myChart.setOption(option);

    // 窗口调整
    window.addEventListener('resize', function () {
        myChart.resize();
    });
});

// 页面加载入口
document.addEventListener('DOMContentLoaded', function() {
    initMenu(); 
    initUpdateToast();
});
