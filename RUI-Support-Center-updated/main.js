/**
 * RUI Support Center - Main Logic
 * UI, search, resources, localization and PointSKY interactions.
 */

'use strict';

const translations = {
    zh: {
        lang_select: '语言 / Language',
        menu_gnss: 'GNSS 接收机', menu_mobile: '移动测绘', menu_ag: '农业导航', menu_marine: '海洋测量', menu_uav: '无人机系统', menu_software: '软件',
        link_manual: '说明书', link_firmware: '固件', link_software: '软件', link_faq: 'FAQ',
        hero_title: '欢迎来到 <span>RUI</span> 技术支持', hero_desc: '您的说明书、固件和技术支持一站式中心。',
        search_label: '搜索产品型号', search_placeholder: '搜索型号，例如 i93、CGO、LandStar', search_go: '搜索', search_results: '搜索结果',
        search_empty: '请输入产品型号。', no_search_results: '没有找到相关型号。', search_match_count: '找到 {count} 个相关型号',
        card_doc_title: '最新公告', card_doc_desc: '查看固件更新日志、服务器维护通知及重要新闻。',
        card_ticket_title: '联系技术支持', card_ticket_desc: '遇到技术难题？请通过常用渠道联系我。',
        btn_browse: '浏览', btn_submit: '联系', legal_pending: '隐私政策与服务条款正在完善', official_site: 'CHCNAV 官方网站',
        contact_title: '联系技术支持', contact_subtitle: '请选择常用的联系方式：', send_email: '发送邮件',
        latest_release: '🔔 最新发布', download_now: '立即查看', released: '发布日期：',
        resource_firmware: '固件', resource_software: '软件', resource_manual: '说明书', resource_faq: 'FAQ',
        resource_download: '下载', resource_view: '查看', resource_unavailable: '暂无资料', resource_verify: '链接待核验', no_resources: '当前没有可用资料。', date_unknown: '日期未提供',
        news_title: '最新公告与更新日志', no_news: '暂无公告。',
        ps_title: '🛰️ PointSKY 寻星助手', ps_subtitle: '专业版 v2.2', ps_desc_card: '专业 L-Band 卫星寻星计算工具。', btn_open_tool: '打开工具',
        ps_label_sat: '📡 卫星选择', ps_label_loc: '📍 地面站位置', ps_btn_cover: '🗺️ 覆盖图',
        ps_opt_as: 'APAC - 亚太/俄罗斯 (83.5°E)', ps_opt_am: 'Americas - 美洲 (98°W)',
        ps_btn_auto: '⌖ 自动定位', ps_btn_calc: '开始计算', ps_ph_lat: '纬度', ps_ph_lon: '经度', ps_ph_alt: '高度 (m)',
        ps_lbl_az: '方位角', ps_lbl_el: '俯仰角', ps_lbl_dist: '直线距离', ps_lbl_compass: '寻星指南针',
        ps_btn_compass_on: '📱 启用罗盘', ps_btn_compass_off: '📱 关闭罗盘', ps_msg_locating: '定位中…', ps_msg_ok: '✔ 定位成功',
        ps_msg_fail: '无法获取位置，请检查浏览器权限。', ps_invalid_location: '请输入有效经纬度：纬度 -90～90，经度 -180～180。',
        ps_warn_low: '⚠️ 仰角过低', ps_status_good: '✅ 信号条件良好', ps_status_invisible: '⛔ 卫星不可见', ps_sat_info: '当前选择：',
        compass_denied: '罗盘权限未授予。', compass_unavailable: '此设备不支持浏览器罗盘。'
    },
    en: {
        lang_select: 'Language',
        menu_gnss: 'GNSS Receivers', menu_mobile: 'Mobile Mapping', menu_ag: 'Agriculture', menu_marine: 'Marine Survey', menu_uav: 'UAV Systems', menu_software: 'Software',
        link_manual: 'Manual', link_firmware: 'Firmware', link_software: 'Software', link_faq: 'FAQ',
        hero_title: 'Welcome to <span>RUI</span> Support', hero_desc: 'Your one-stop center for manuals, firmware and technical assistance.',
        search_label: 'Search product model', search_placeholder: 'Search a model, e.g. i93, CGO, LandStar', search_go: 'Search', search_results: 'Search results',
        search_empty: 'Enter a product model.', no_search_results: 'No matching model was found.', search_match_count: '{count} matching model(s) found',
        card_doc_title: 'Latest News', card_doc_desc: 'Firmware changelogs, server maintenance and important updates.',
        card_ticket_title: 'Contact Support', card_ticket_desc: 'Facing a technical issue? Contact me through your preferred channel.',
        btn_browse: 'Browse', btn_submit: 'Contact', legal_pending: 'Privacy policy and terms are being prepared', official_site: 'Official CHCNAV website',
        contact_title: 'Contact Support', contact_subtitle: 'Choose your preferred contact channel:', send_email: 'Send email',
        latest_release: '🔔 Latest release', download_now: 'View release', released: 'Released: ',
        resource_firmware: 'Firmware', resource_software: 'Software', resource_manual: 'Manual', resource_faq: 'FAQ',
        resource_download: 'Download', resource_view: 'View', resource_unavailable: 'Not available', resource_verify: 'Link pending verification', no_resources: 'No resources are currently available.', date_unknown: 'Date not provided',
        news_title: 'Latest news and release notes', no_news: 'No news is available.',
        ps_title: '🛰️ PointSKY Finder', ps_subtitle: 'Pro v2.2', ps_desc_card: 'Professional L-Band satellite pointing calculator.', btn_open_tool: 'Open tool',
        ps_label_sat: '📡 Satellite', ps_label_loc: '📍 Ground location', ps_btn_cover: '🗺️ Coverage map',
        ps_opt_as: 'APAC - Asia/Russia (83.5°E)', ps_opt_am: 'Americas (98°W)',
        ps_btn_auto: '⌖ Auto locate', ps_btn_calc: 'Calculate', ps_ph_lat: 'Latitude', ps_ph_lon: 'Longitude', ps_ph_alt: 'Altitude (m)',
        ps_lbl_az: 'Azimuth', ps_lbl_el: 'Elevation', ps_lbl_dist: 'Distance', ps_lbl_compass: 'Pointing compass',
        ps_btn_compass_on: '📱 Enable compass', ps_btn_compass_off: '📱 Disable compass', ps_msg_locating: 'Locating…', ps_msg_ok: '✔ Located',
        ps_msg_fail: 'Location could not be obtained. Check browser permission.', ps_invalid_location: 'Enter valid coordinates: latitude -90 to 90 and longitude -180 to 180.',
        ps_warn_low: '⚠️ Low elevation', ps_status_good: '✅ Good signal conditions', ps_status_invisible: '⛔ Satellite not visible', ps_sat_info: 'Selected: ',
        compass_denied: 'Compass permission was not granted.', compass_unavailable: 'Browser compass is not supported on this device.'
    },
    ru: {
        lang_select: 'Язык',
        menu_gnss: 'ГНСС-приёмники', menu_mobile: 'Мобильное картографирование', menu_ag: 'Агронавигация', menu_marine: 'Гидрография', menu_uav: 'БПЛА', menu_software: 'Программы',
        link_manual: 'Инструкция', link_firmware: 'Прошивка', link_software: 'Программа', link_faq: 'FAQ',
        hero_title: 'Добро пожаловать в поддержку <span>RUI</span>', hero_desc: 'Единый центр инструкций, прошивок и технической поддержки.',
        search_label: 'Поиск модели', search_placeholder: 'Введите модель: i93, CGO, LandStar', search_go: 'Найти', search_results: 'Результаты поиска',
        search_empty: 'Введите модель устройства.', no_search_results: 'Подходящая модель не найдена.', search_match_count: 'Найдено моделей: {count}',
        card_doc_title: 'Новости', card_doc_desc: 'Журнал обновлений, обслуживание серверов и важные уведомления.',
        card_ticket_title: 'Связаться с поддержкой', card_ticket_desc: 'Возникла техническая проблема? Выберите удобный канал связи.',
        btn_browse: 'Открыть', btn_submit: 'Связаться', legal_pending: 'Политика конфиденциальности и условия готовятся', official_site: 'Официальный сайт CHCNAV',
        contact_title: 'Техническая поддержка', contact_subtitle: 'Выберите удобный канал связи:', send_email: 'Написать письмо',
        latest_release: '🔔 Последняя версия', download_now: 'Открыть', released: 'Дата выпуска: ',
        resource_firmware: 'Прошивка', resource_software: 'Программа', resource_manual: 'Инструкция', resource_faq: 'FAQ',
        resource_download: 'Скачать', resource_view: 'Открыть', resource_unavailable: 'Нет данных', resource_verify: 'Ссылка проверяется', no_resources: 'Материалы пока недоступны.', date_unknown: 'Дата не указана',
        news_title: 'Новости и журнал изменений', no_news: 'Новостей пока нет.',
        ps_title: '🛰️ Поиск PointSKY', ps_subtitle: 'Pro v2.2', ps_desc_card: 'Калькулятор наведения на спутник L-Band.', btn_open_tool: 'Открыть',
        ps_label_sat: '📡 Спутник', ps_label_loc: '📍 Местоположение', ps_btn_cover: '🗺️ Карта покрытия',
        ps_opt_as: 'APAC - Азия/Россия (83.5°E)', ps_opt_am: 'Америка (98°W)',
        ps_btn_auto: '⌖ Автопоиск', ps_btn_calc: 'Рассчитать', ps_ph_lat: 'Широта', ps_ph_lon: 'Долгота', ps_ph_alt: 'Высота (м)',
        ps_lbl_az: 'Азимут', ps_lbl_el: 'Угол места', ps_lbl_dist: 'Расстояние', ps_lbl_compass: 'Компас',
        ps_btn_compass_on: '📱 Включить компас', ps_btn_compass_off: '📱 Выключить компас', ps_msg_locating: 'Определение…', ps_msg_ok: '✔ Готово',
        ps_msg_fail: 'Не удалось определить местоположение. Проверьте разрешение браузера.', ps_invalid_location: 'Введите корректные координаты: широта от -90 до 90, долгота от -180 до 180.',
        ps_warn_low: '⚠️ Низкий угол', ps_status_good: '✅ Хорошие условия сигнала', ps_status_invisible: '⛔ Спутник не виден', ps_sat_info: 'Выбрано: ',
        compass_denied: 'Нет разрешения на использование компаса.', compass_unavailable: 'Компас браузера не поддерживается на этом устройстве.'
    },
    kk: {
        lang_select: 'Тіл', menu_gnss: 'GNSS қабылдағыштары', menu_mobile: 'Мобильді карталау', menu_ag: 'Агронавигация', menu_marine: 'Гидрография', menu_uav: 'ҰҰА жүйелері', menu_software: 'Бағдарламалар',
        link_manual: 'Нұсқаулық', link_firmware: 'Микробағдарлама', link_software: 'Бағдарлама', link_faq: 'FAQ',
        hero_title: '<span>RUI</span> қолдау орталығы', hero_desc: 'Нұсқаулықтар, микробағдарламалар және техникалық қолдау.',
        search_label: 'Модельді іздеу', search_placeholder: 'Модельді енгізіңіз: i93, CGO, LandStar', search_go: 'Іздеу',
        card_doc_title: 'Жаңалықтар', card_doc_desc: 'Жаңартулар мен техникалық қызмет көрсету туралы хабарламалар.', card_ticket_title: 'Қолдау қызметі', card_ticket_desc: 'Техникалық мәселе бар ма? Байланыс арнасын таңдаңыз.',
        btn_browse: 'Ашу', btn_submit: 'Байланысу', ps_title: '🛰️ PointSKY іздеу', ps_desc_card: 'L-Band спутнигін бағыттау құралы.', btn_open_tool: 'Ашу'
    },
    uz: {
        lang_select: 'Til', menu_gnss: 'GNSS qabul qiluvchilar', menu_mobile: 'Mobil xaritalash', menu_ag: 'Qishloq xo‘jaligi', menu_marine: 'Dengiz geodeziyasi', menu_uav: 'PUA tizimlari', menu_software: 'Dasturlar',
        link_manual: 'Qo‘llanma', link_firmware: 'Mikrodastur', link_software: 'Dastur', link_faq: 'FAQ',
        hero_title: '<span>RUI</span> yordam markazi', hero_desc: 'Qo‘llanmalar, mikrodasturlar va texnik yordam markazi.',
        search_label: 'Modelni qidirish', search_placeholder: 'Modelni kiriting: i93, CGO, LandStar', search_go: 'Qidirish',
        card_doc_title: 'Yangiliklar', card_doc_desc: 'Yangilanishlar va texnik xizmat xabarlari.', card_ticket_title: 'Yordam bilan bog‘lanish', card_ticket_desc: 'Texnik muammo bormi? Aloqa kanalini tanlang.',
        btn_browse: 'Ochish', btn_submit: 'Bog‘lanish', ps_title: '🛰️ PointSKY qidiruv', ps_desc_card: 'L-Band sun’iy yo‘ldoshini yo‘naltirish vositasi.', btn_open_tool: 'Ochish'
    },
    mn: {
        lang_select: 'Хэл', menu_gnss: 'GNSS хүлээн авагч', menu_mobile: 'Мобайл зураглал', menu_ag: 'Хөдөө аж ахуй', menu_marine: 'Далайн хэмжилт', menu_uav: 'Нисгэгчгүй онгоц', menu_software: 'Програм',
        link_manual: 'Гарын авлага', link_firmware: 'Төхөөрөмжийн програм', link_software: 'Програм', link_faq: 'FAQ',
        hero_title: '<span>RUI</span> дэмжлэг', hero_desc: 'Гарын авлага, програм болон техникийн тусламжийн нэгдсэн төв.',
        search_label: 'Загвар хайх', search_placeholder: 'Загвар оруулна уу: i93, CGO, LandStar', search_go: 'Хайх',
        card_doc_title: 'Мэдээ', card_doc_desc: 'Шинэчлэл болон үйлчилгээний мэдэгдэл.', card_ticket_title: 'Дэмжлэгтэй холбогдох', card_ticket_desc: 'Техникийн асуудал байна уу? Холбоо барих сувгаа сонгоно уу.',
        btn_browse: 'Нээх', btn_submit: 'Холбогдох', ps_title: '🛰️ PointSKY хайгч', ps_desc_card: 'L-Band хиймэл дагуул чиглүүлэх хэрэгсэл.', btn_open_tool: 'Нээх'
    },
    uk: {
        lang_select: 'Мова', menu_gnss: 'GNSS-приймачі', menu_mobile: 'Мобільне картографування', menu_ag: 'Агронавігація', menu_marine: 'Морська геодезія', menu_uav: 'БПЛА', menu_software: 'Програми',
        link_manual: 'Інструкція', link_firmware: 'Прошивка', link_software: 'Програма', link_faq: 'FAQ',
        hero_title: 'Підтримка <span>RUI</span>', hero_desc: 'Єдиний центр інструкцій, прошивок і технічної підтримки.',
        search_label: 'Пошук моделі', search_placeholder: 'Введіть модель: i93, CGO, LandStar', search_go: 'Знайти',
        card_doc_title: 'Новини', card_doc_desc: 'Журнал оновлень та повідомлення про обслуговування.', card_ticket_title: 'Зв’язатися з підтримкою', card_ticket_desc: 'Виникла технічна проблема? Виберіть канал зв’язку.',
        btn_browse: 'Відкрити', btn_submit: 'Зв’язатися', ps_title: '🛰️ Пошук PointSKY', ps_desc_card: 'Інструмент наведення на супутник L-Band.', btn_open_tool: 'Відкрити'
    }
};

const languageTags = { zh: 'zh-CN', en: 'en', ru: 'ru', kk: 'kk', uz: 'uz', mn: 'mn', uk: 'uk' };
const productDisplayNames = {
    ibase: 'iBase', landstar: 'LandStar', coprocess: 'CoProcess', mapcloud: 'MapCloud',
    gnsstool: 'GNSSTool', sharelocation: 'ShareLocation', rinex: 'RINEX Converter', cgbas: 'CGBAS'
};

let currentLang = 'zh';
let activeResource = null;
let lastSearchQuery = '';
let currentAzimuth = 0;
let compassActive = false;
let toastRelease = null;
const modalReturnFocus = new WeakMap();

function getI18n(key) {
    return translations[currentLang]?.[key] ?? translations.en[key] ?? key;
}

function formatI18n(key, values = {}) {
    return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, String(value)), getI18n(key));
}

function productName(id) {
    return productDisplayNames[id] || id.toUpperCase();
}

function setLanguageDropdown(open) {
    const dropdown = document.getElementById('langDropdown');
    const button = document.getElementById('languageButton');
    dropdown.classList.toggle('show', open);
    button.setAttribute('aria-expanded', String(open));
}

function changeLanguage(langCode, persist = true) {
    const normalized = langCode === 'ua' ? 'uk' : langCode;
    currentLang = translations[normalized] ? normalized : 'en';
    document.documentElement.lang = languageTags[currentLang];

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = getI18n(element.dataset.i18n);
        if (element.tagName === 'INPUT') {
            element.placeholder = value;
        } else if (value.includes('<span>') || value.includes('</span>')) {
            element.innerHTML = value;
        } else {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-close-modal]').forEach((button) => {
        button.setAttribute('aria-label', currentLang === 'zh' ? '关闭' : currentLang === 'ru' ? 'Закрыть' : 'Close');
    });
    updateSatInfo();
    updateCompassButton();
    updateToastLanguage();

    if (activeResource) renderResourceModal(activeResource.type, activeResource.model);
    if (document.getElementById('searchResultModal').classList.contains('is-open') && lastSearchQuery) renderSearchResults(lastSearchQuery);
    if (persist) localStorage.setItem('rui_language', currentLang);
    setLanguageDropdown(false);
}

function createButton(text, className, onClick, disabled = false) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.textContent = text;
    button.disabled = disabled;
    if (onClick) button.addEventListener('click', onClick);
    return button;
}

function isSoftwareModel(model) {
    return menuConfig.some((category) => category.type === 'software' && category.items.includes(model));
}

function initMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.replaceChildren();

    menuConfig.forEach((category) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';

        const navLink = createButton(category.labelKey, 'nav-link');
        navLink.dataset.i18n = category.labelKey;
        navLink.setAttribute('aria-expanded', 'false');
        navItem.appendChild(navLink);

        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menu';

        category.items.forEach((model) => {
            const group = document.createElement('div');
            group.className = 'product-group';

            const title = document.createElement('span');
            title.className = 'product-title';
            title.textContent = productName(model);

            const links = document.createElement('div');
            links.className = 'product-links';
            const types = [
                { type: 'manual', key: 'link_manual' },
                { type: 'firmware', key: category.type === 'software' ? 'link_software' : 'link_firmware' },
                { type: 'faq', key: 'link_faq' }
            ];

            types.forEach(({ type, key }) => {
                const data = getResourceData(type, model);
                const button = createButton(key, 'product-link', () => openResourceModal(type, model), !data.length);
                button.dataset.i18n = key;
                if (!data.length) button.title = getI18n('resource_unavailable');
                links.appendChild(button);
            });

            group.append(title, links);
            dropdown.appendChild(group);
        });

        navLink.addEventListener('click', () => {
            const willOpen = !navItem.classList.contains('open');
            document.querySelectorAll('.nav-item.open').forEach((item) => {
                item.classList.remove('open');
                item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
            });
            navItem.classList.toggle('open', willOpen);
            navLink.setAttribute('aria-expanded', String(willOpen));
        });

        navItem.appendChild(dropdown);
        navMenu.appendChild(navItem);
    });
}

function getResourceData(type, model) {
    const databases = { firmware: firmwareDatabase, manual: manualDatabase, faq: faqDatabase };
    const data = databases[type]?.[model];
    return Array.isArray(data) ? data : [];
}

function parseDate(dateString) {
    if (!dateString || !/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return new Date(0);
    const date = new Date(`${dateString}T00:00:00Z`);
    return Number.isNaN(date.getTime()) ? new Date(0) : date;
}

function sortedResources(items) {
    return [...items].sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

function resourceTypeLabel(type, model) {
    if (type === 'firmware') return getI18n(isSoftwareModel(model) ? 'resource_software' : 'resource_firmware');
    return getI18n(`resource_${type}`);
}

function renderResourceModal(type, model) {
    activeResource = { type, model };
    const title = document.getElementById('resourceModalTitle');
    const list = document.getElementById('resourceModalList');
    const data = sortedResources(getResourceData(type, model));
    title.textContent = `${productName(model)} · ${resourceTypeLabel(type, model)}`;
    list.replaceChildren();

    if (!data.length) {
        const empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = getI18n('no_resources');
        list.appendChild(empty);
        return;
    }

    data.forEach((item) => {
        const row = document.createElement('article');
        row.className = 'firmware-item';

        const info = document.createElement('div');
        info.className = 'fw-info';
        const name = document.createElement('strong');
        name.className = 'fw-version';
        name.textContent = item.version || item.title || productName(model);
        const date = document.createElement('span');
        date.className = 'fw-date';
        date.textContent = item.date || getI18n('date_unknown');
        info.append(name, date);

        if (item.verified === false) {
            const badge = document.createElement('span');
            badge.className = 'verification-badge';
            badge.textContent = getI18n('resource_verify');
            row.append(info, badge);
        } else {
            const link = document.createElement('a');
            link.className = 'fw-download-btn';
            link.href = item.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = getI18n(type === 'firmware' ? 'resource_download' : 'resource_view');
            row.append(info, link);
        }
        list.appendChild(row);
    });
}

function openResourceModal(type, model) {
    renderResourceModal(type, model);
    openModal('resourceModal');
}

function normalizeModel(value) {
    return value.toLowerCase().replace(/[\s_.-]+/g, '');
}

function allModels() {
    return [...new Set(menuConfig.flatMap((category) => category.items))];
}

function findModels(query) {
    const normalizedQuery = normalizeModel(query);
    const models = allModels();
    const exact = models.find((model) => normalizeModel(model) === normalizedQuery);
    if (exact) return [exact];
    return models.filter((model) => {
        const normalizedModel = normalizeModel(model);
        const display = normalizeModel(productName(model));
        return normalizedModel.includes(normalizedQuery) || display.includes(normalizedQuery) || normalizedQuery.includes(normalizedModel);
    }).slice(0, 10);
}

function addSearchResourceButton(container, type, model) {
    const data = getResourceData(type, model);
    const label = `${resourceTypeLabel(type, model)} (${data.length})`;
    const button = createButton(label, 'resource-choice-btn', () => {
        closeModal('searchResultModal', false);
        openResourceModal(type, model);
    }, data.length === 0);
    container.appendChild(button);
}

function renderSearchResults(query) {
    lastSearchQuery = query;
    const matches = findModels(query);
    const summary = document.getElementById('searchResultSummary');
    const list = document.getElementById('searchResultList');
    list.replaceChildren();

    if (!matches.length) {
        summary.textContent = getI18n('no_search_results');
        return false;
    }

    summary.textContent = formatI18n('search_match_count', { count: matches.length });
    matches.forEach((model) => {
        const item = document.createElement('article');
        item.className = 'search-result-item';
        const heading = document.createElement('h3');
        heading.textContent = productName(model);
        const actions = document.createElement('div');
        actions.className = 'search-result-actions';
        addSearchResourceButton(actions, 'firmware', model);
        addSearchResourceButton(actions, 'manual', model);
        addSearchResourceButton(actions, 'faq', model);
        item.append(heading, actions);
        list.appendChild(item);
    });
    return true;
}

function performSearch() {
    const input = document.getElementById('searchInput');
    const status = document.getElementById('searchStatus');
    const query = input.value.trim();
    status.textContent = '';
    if (!query) {
        status.textContent = getI18n('search_empty');
        input.focus();
        return;
    }
    renderSearchResults(query);
    openModal('searchResultModal');
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modalReturnFocus.set(modal, document.activeElement);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.querySelector('.modal-content')?.focus());
}

function closeModal(id, restoreFocus = true) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (id === 'toolModal') stopCompass();
    if (id === 'resourceModal') activeResource = null;
    if (!document.querySelector('.modal.is-open')) document.body.classList.remove('modal-open');
    if (restoreFocus) modalReturnFocus.get(modal)?.focus?.();
}

function trapModalFocus(event, modal) {
    const selector = 'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = [...modal.querySelectorAll(selector)].filter((element) => !element.hidden && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

function openContactModal() {
    openModal('contactModal');
}

function openNewsModal() {
    activeResource = null;
    const title = document.getElementById('resourceModalTitle');
    const list = document.getElementById('resourceModalList');
    title.textContent = getI18n('news_title');
    list.replaceChildren();

    if (!Array.isArray(newsDatabase) || !newsDatabase.length) {
        const empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = getI18n('no_news');
        list.appendChild(empty);
    } else {
        [...newsDatabase].sort((a, b) => parseDate(b.date) - parseDate(a.date)).forEach((item) => {
            const article = document.createElement('article');
            article.className = 'news-item';
            const header = document.createElement('div');
            header.className = 'news-item-header';
            const heading = document.createElement('h3');
            heading.textContent = item.title;
            const tag = document.createElement('span');
            tag.className = `news-tag news-tag-${String(item.tag || '').toLowerCase()}`;
            tag.textContent = item.tag || 'Update';
            header.append(heading, tag);
            const date = document.createElement('time');
            date.className = 'news-date';
            date.dateTime = item.date || '';
            date.textContent = item.date || getI18n('date_unknown');
            const changes = document.createElement('ul');
            changes.className = 'release-notes';
            const entries = Array.isArray(item.changes) ? item.changes : [String(item.desc || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()];
            entries.filter(Boolean).forEach((change) => {
                const line = document.createElement('li');
                line.textContent = change;
                changes.appendChild(line);
            });
            article.append(header, date, changes);
            list.appendChild(article);
        });
    }
    openModal('resourceModal');
}

function findLatestRelease() {
    let latest = null;
    Object.entries(firmwareDatabase).forEach(([model, items]) => {
        if (!Array.isArray(items)) return;
        items.forEach((item) => {
            if (!item.url || item.verified === false || !item.date) return;
            if (!latest || parseDate(item.date) > parseDate(latest.item.date)) latest = { model, item };
        });
    });
    return latest;
}

function updateToastLanguage() {
    if (!toastRelease) return;
    document.getElementById('toastDate').textContent = `${getI18n('released')}${toastRelease.item.date}`;
}

function initUpdateToast() {
    if (sessionStorage.getItem('rui_toast_closed')) return;
    toastRelease = findLatestRelease();
    if (!toastRelease) return;
    document.getElementById('toastModel').textContent = productName(toastRelease.model);
    document.getElementById('toastVer').textContent = toastRelease.item.version;
    const toast = document.getElementById('updateToast');
    const link = document.getElementById('toastLink');
    link.href = toastRelease.item.url;
    updateToastLanguage();
    window.setTimeout(() => {
        toast.classList.add('show');
        toast.setAttribute('aria-hidden', 'false');
        link.removeAttribute('tabindex');
    }, 1800);
}

function closeUpdateToast() {
    const toast = document.getElementById('updateToast');
    toast.classList.remove('show');
    toast.setAttribute('aria-hidden', 'true');
    document.getElementById('toastLink').setAttribute('tabindex', '-1');
    sessionStorage.setItem('rui_toast_closed', 'true');
}

function initParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('particleCanvas');
    const hero = document.getElementById('heroSection');
    const context = canvas.getContext('2d');
    const particles = [];
    let animationFrame = 0;
    let running = false;

    function resize() {
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(hero.clientWidth * ratio);
        canvas.height = Math.round(hero.clientHeight * ratio);
        canvas.style.width = `${hero.clientWidth}px`;
        canvas.style.height = `${hero.clientHeight}px`;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    hero.addEventListener('pointermove', (event) => {
        const rect = hero.getBoundingClientRect();
        const amount = window.innerWidth < 768 ? 1 : 2;
        for (let index = 0; index < amount && particles.length < 70; index += 1) {
            particles.push({
                x: event.clientX - rect.left, y: event.clientY - rect.top,
                size: Math.random() * 4 + 1, speedX: Math.random() * 3 - 1.5, speedY: Math.random() * 3 - 1.5
            });
        }
    });

    function draw() {
        context.clearRect(0, 0, hero.clientWidth, hero.clientHeight);
        particles.forEach((particle) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.size -= 0.09;
            context.fillStyle = particle.size % 2 > 1 ? '#F37021' : 'rgba(255,255,255,.8)';
            context.beginPath();
            context.arc(particle.x, particle.y, Math.max(particle.size, 0), 0, Math.PI * 2);
            context.fill();
        });
        for (let index = particles.length - 1; index >= 0; index -= 1) if (particles[index].size <= 0.2) particles.splice(index, 1);
        if (running) animationFrame = requestAnimationFrame(draw);
    }

    new IntersectionObserver(([entry]) => {
        running = entry.isIntersecting;
        cancelAnimationFrame(animationFrame);
        if (running) draw();
    }).observe(hero);

    window.addEventListener('resize', resize, { passive: true });
    resize();
}

function initMap() {
    const container = document.getElementById('global-map-bg');
    if (!window.echarts || !window.echarts.getMap?.('world')) {
        container.classList.add('map-fallback');
        return;
    }

    try {
        const chart = window.echarts.init(container);
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const cityMap = {
            Shanghai: [121.4737, 31.2304], Moscow: [37.6173, 55.7558], Kyiv: [30.5234, 50.4501], Tbilisi: [44.8271, 41.7151],
            Minsk: [27.5615, 53.9045], Astana: [71.4304, 51.1605], Tashkent: [69.2401, 41.2995], Bishkek: [74.5698, 42.8746],
            Dushanbe: [68.787, 38.5358], Yerevan: [44.509, 40.1872], Baku: [49.8671, 40.4093], Ashgabat: [58.3261, 37.9601], Ulaanbaatar: [106.9176, 47.9212]
        };
        const centers = ['Moscow', 'Shanghai'];
        const data = Object.entries(cityMap).map(([name, value]) => ({
            name,
            value: [...value, centers.includes(name) ? 15 : 8]
        }));
        const streamLines = [];
        Object.entries(cityMap).forEach(([cityName, coordinates]) => {
            if (centers.includes(cityName)) return;
            centers.forEach((centerName) => {
                streamLines.push({
                    fromName: cityName,
                    toName: centerName,
                    coords: [coordinates, cityMap[centerName]]
                });
            });
        });
        chart.setOption({
            animation: !reducedMotion,
            backgroundColor: 'transparent',
            geo: { map: 'world', roam: false, zoom: 2.6, center: [70, 45], label: { show: false }, itemStyle: { areaColor: '#092838', borderColor: '#154e6b' }, emphasis: { itemStyle: { areaColor: '#0b354d' } } },
            series: [
                {
                    name: 'Service nodes',
                    type: reducedMotion ? 'scatter' : 'effectScatter',
                    coordinateSystem: 'geo',
                    data,
                    symbolSize: (value) => value[2],
                    showEffectOn: 'render',
                    rippleEffect: { brushType: 'stroke', scale: 3, period: 4 },
                    label: { show: true, formatter: '{b}', position: 'right', color: '#8dcfff', fontSize: 11, textBorderColor: '#021019', textBorderWidth: 2 },
                    itemStyle: { color: '#00eaff', shadowBlur: 9, shadowColor: '#00eaff' },
                    zlevel: 3
                },
                {
                    name: 'Data streams',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    data: streamLines,
                    zlevel: 2,
                    effect: { show: !reducedMotion, period: 4.5, trailLength: 0.28, color: '#ff8b45', symbol: 'circle', symbolSize: 4 },
                    lineStyle: { color: '#f37021', width: 0.8, opacity: 0.2, curveness: 0.22 }
                },
                {
                    name: 'Data paths',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    data: streamLines,
                    zlevel: 1,
                    lineStyle: { color: '#56c7ff', width: 0.5, opacity: 0.11, curveness: 0.22 }
                }
            ]
        });
        window.addEventListener('resize', () => chart.resize(), { passive: true });
    } catch (error) {
        container.classList.add('map-fallback');
        console.warn('Background map could not be initialized.', error);
    }
}

const satDB = { region_as: { lon: 83.5 }, region_am: { lon: -98 } };

function updateSatInfo() {
    const select = document.getElementById('psSat');
    if (!select) return;
    document.getElementById('satInfoDisplay').textContent = `${getI18n('ps_sat_info')}${select.options[select.selectedIndex].text}`;
}

function setPointSkyStatus(status) {
    const states = { invisible: 'psInvisible', warning: 'psWarn', good: 'psOk' };
    Object.entries(states).forEach(([name, id]) => {
        document.getElementById(id).hidden = name !== status;
    });
}

function calculatePointSky() {
    const latitudeInput = document.getElementById('psLat');
    const longitudeInput = document.getElementById('psLon');
    const error = document.getElementById('psFormError');
    const latitude = Number.parseFloat(latitudeInput.value);
    const longitude = Number.parseFloat(longitudeInput.value);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        error.textContent = getI18n('ps_invalid_location');
        latitudeInput.focus();
        return;
    }
    error.textContent = '';

    const satelliteLongitude = satDB[document.getElementById('psSat').value].lon;
    const RAD = Math.PI / 180;
    const DEG = 180 / Math.PI;
    const RE = 6378.137;
    const RS = 42164;
    const phi = latitude * RAD;
    const lambda = longitude * RAD;
    const lambdaSatellite = satelliteLongitude * RAD;
    const deltaLambda = lambdaSatellite - lambda;

    // Intentionally retained from the original PointSKY implementation.
    const azimuthRadians = Math.atan2(Math.tan(deltaLambda), Math.sin(phi));
    let azimuth;
    if (latitude > 0) azimuth = 180 + azimuthRadians * DEG;
    else azimuth = 360 + azimuthRadians * DEG;
    azimuth = (azimuth + 360) % 360;
    currentAzimuth = azimuth;

    const cosGamma = Math.cos(phi) * Math.cos(deltaLambda);
    const sinGamma = Math.sqrt(Math.max(0, 1 - cosGamma * cosGamma));
    const elevationRadians = Math.atan((cosGamma - 0.1513) / sinGamma);
    const elevation = elevationRadians * DEG;
    const distance = Math.sqrt(RE * RE + RS * RS - 2 * RE * RS * cosGamma);

    document.getElementById('resAz').textContent = `${azimuth.toFixed(1)}°`;
    document.getElementById('resEl').textContent = `${elevation.toFixed(1)}°`;
    document.getElementById('resDist').textContent = `${distance.toFixed(0)} km`;
    document.getElementById('resEl').classList.toggle('danger-value', elevation < 10);
    setPointSkyStatus(elevation < 0 ? 'invisible' : elevation < 10 ? 'warning' : 'good');
    updateCompassUI(0);
}

function getAutoLocation() {
    const button = document.getElementById('autoLocationButton');
    const error = document.getElementById('psFormError');
    if (!navigator.geolocation) {
        error.textContent = getI18n('ps_msg_fail');
        return;
    }
    button.disabled = true;
    button.textContent = getI18n('ps_msg_locating');
    navigator.geolocation.getCurrentPosition((position) => {
        document.getElementById('psLat').value = position.coords.latitude.toFixed(6);
        document.getElementById('psLon').value = position.coords.longitude.toFixed(6);
        button.textContent = getI18n('ps_msg_ok');
        error.textContent = '';
        calculatePointSky();
        window.setTimeout(() => {
            button.disabled = false;
            button.textContent = getI18n('ps_btn_auto');
        }, 1500);
    }, () => {
        button.disabled = false;
        button.textContent = getI18n('ps_btn_auto');
        error.textContent = getI18n('ps_msg_fail');
    }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
}

function updateCompassButton() {
    const button = document.getElementById('btnCompass');
    if (!button) return;
    button.textContent = getI18n(compassActive ? 'ps_btn_compass_off' : 'ps_btn_compass_on');
    button.classList.toggle('active', compassActive);
}

function startCompass() {
    window.addEventListener('deviceorientation', handleOrientation);
    compassActive = true;
    updateCompassButton();
}

function stopCompass() {
    window.removeEventListener('deviceorientation', handleOrientation);
    compassActive = false;
    updateCompassButton();
}

async function toggleCompass() {
    const error = document.getElementById('psFormError');
    if (compassActive) {
        stopCompass();
        updateCompassUI(0);
        return;
    }
    if (typeof DeviceOrientationEvent === 'undefined') {
        error.textContent = getI18n('compass_unavailable');
        return;
    }
    try {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            const permission = await DeviceOrientationEvent.requestPermission();
            if (permission !== 'granted') {
                error.textContent = getI18n('compass_denied');
                return;
            }
        }
        error.textContent = '';
        startCompass();
    } catch {
        error.textContent = getI18n('compass_denied');
    }
}

function handleOrientation(event) {
    let heading = 0;
    if (Number.isFinite(event.webkitCompassHeading)) heading = event.webkitCompassHeading;
    else if (Number.isFinite(event.alpha)) heading = 360 - event.alpha;
    updateCompassUI(heading);
}

function updateCompassUI(heading) {
    document.getElementById('compassDial').style.transform = `rotate(${-heading}deg)`;
    document.getElementById('psArrow').style.transform = `rotate(${currentAzimuth - heading}deg)`;
}

function openToolModal() {
    openModal('toolModal');
    updateSatInfo();
}

function bindEvents() {
    document.getElementById('languageButton').addEventListener('click', (event) => {
        event.stopPropagation();
        setLanguageDropdown(!document.getElementById('langDropdown').classList.contains('show'));
    });
    document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => changeLanguage(button.dataset.lang)));
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.lang-selector')) setLanguageDropdown(false);
        if (!event.target.closest('.nav-item')) {
            document.querySelectorAll('.nav-item.open').forEach((item) => {
                item.classList.remove('open');
                item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
            });
        }
    });

    const mobileButton = document.getElementById('mobileMenuButton');
    mobileButton.addEventListener('click', () => {
        const nav = document.getElementById('navMenu');
        const open = nav.classList.toggle('active');
        mobileButton.setAttribute('aria-expanded', String(open));
    });

    document.getElementById('searchForm').addEventListener('submit', (event) => {
        event.preventDefault();
        performSearch();
    });
    document.querySelector('[data-action="open-tool"]').addEventListener('click', openToolModal);
    document.querySelector('[data-action="open-news"]').addEventListener('click', openNewsModal);
    document.querySelector('[data-action="open-contact"]').addEventListener('click', openContactModal);
    document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => closeModal(button.dataset.closeModal)));
    document.querySelectorAll('.modal').forEach((modal) => modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal(modal.id);
    }));
    document.addEventListener('keydown', (event) => {
        const modal = [...document.querySelectorAll('.modal.is-open')].at(-1);
        if (!modal) return;
        if (event.key === 'Escape') closeModal(modal.id);
        if (event.key === 'Tab') trapModalFocus(event, modal);
    });

    document.getElementById('closeToastButton').addEventListener('click', closeUpdateToast);
    document.getElementById('psSat').addEventListener('change', updateSatInfo);
    document.getElementById('autoLocationButton').addEventListener('click', getAutoLocation);
    document.getElementById('calculatePointSkyButton').addEventListener('click', calculatePointSky);
    document.getElementById('btnCompass').addEventListener('click', toggleCompass);
}

function init() {
    document.getElementById('currentYear').textContent = String(new Date().getFullYear());
    initMenu();
    bindEvents();
    const savedLanguage = localStorage.getItem('rui_language');
    const browserLanguage = navigator.language?.split('-')[0];
    changeLanguage(savedLanguage || (translations[browserLanguage] ? browserLanguage : 'zh'), false);
    initParticles();
    initMap();
    initUpdateToast();
}

document.addEventListener('DOMContentLoaded', init);

// Kept for compatibility with existing bookmarks or external calls.
window.changeLanguage = changeLanguage;
window.performSearch = performSearch;
window.calculatePointSky = calculatePointSky;
window.getAutoLocation = getAutoLocation;
window.toggleCompass = toggleCompass;
