const productUi = {
    zh: ['固件与软件更新', '下载最新版', '分享产品', '联系技术支持', '查看全部更新', '即将发布', '链接已复制', '你是不是想找', '你好，我需要这个产品的技术支持。', '全部版本'],
    en: ['Firmware & software updates', 'Download latest', 'Share product', 'Contact support', 'All updates', 'Coming soon', 'Link copied', 'Did you mean', 'Hello, I need technical support for this product.', 'All versions'],
    ru: ['Обновления прошивок и ПО', 'Скачать последнюю версию', 'Поделиться', 'Связаться с поддержкой', 'Все обновления', 'Скоро', 'Ссылка скопирована', 'Возможно, вы искали', 'Здравствуйте! Нужна помощь с этим продуктом.', 'Все версии'],
    kk: ['Микробағдарлама және БҚ жаңартулары', 'Соңғы нұсқаны жүктеу', 'Бөлісу', 'Қолдау қызметі', 'Барлық жаңартулар', 'Жақында', 'Сілтеме көшірілді', 'Мүмкін, сіз іздегеніңіз', 'Сәлеметсіз бе! Осы өнім бойынша көмек керек.', 'Барлық нұсқалар'],
    uz: ['Mikrodastur va dastur yangilanishlari', 'So‘nggi versiyani yuklash', 'Ulashish', 'Yordam bilan bog‘lanish', 'Barcha yangilanishlar', 'Tez kunda', 'Havola nusxalandi', 'Balki siz qidirgandirsiz', 'Salom! Ushbu mahsulot bo‘yicha yordam kerak.', 'Barcha versiyalar'],
    mn: ['Төхөөрөмжийн болон программын шинэчлэл', 'Сүүлийн хувилбарыг татах', 'Хуваалцах', 'Тусламж авах', 'Бүх шинэчлэл', 'Тун удахгүй', 'Холбоос хуулсан', 'Та үүнийг хайсан уу', 'Сайн байна уу! Энэ бүтээгдэхүүнд тусламж хэрэгтэй.', 'Бүх хувилбар'],
    uk: ['Оновлення прошивок і ПЗ', 'Завантажити останню версію', 'Поділитися', 'Зв’язатися з підтримкою', 'Усі оновлення', 'Незабаром', 'Посилання скопійовано', 'Можливо, ви шукали', 'Вітаю! Потрібна допомога з цим продуктом.', 'Усі версії']
};

function releaseToday() {
    return new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Moscow' });
}

function availableRelease(item) {
    return Boolean(item.url && item.verified !== false && item.date && (item.availableNow || item.date <= releaseToday()));
}

function latestProductRelease(model) {
    return sortedResources(getResourceData('firmware', model)).find(availableRelease);
}

function releaseDownload(item, label) {
    const link = el('a', 'fw-download-btn latest-download', label);
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
}

function productPermalink(model) {
    const url = new URL(location.protocol === 'file:' ? 'https://ruis1.top/' : location.href);
    url.hash = new URLSearchParams({ product: model }).toString();
    return url.href;
}

function showProduct(model) {
    const input = document.getElementById('catalogSearch');
    input.value = productName(model);
    hubCategory = 'all';
    savedOnly = false;
    selectBackground(backgroundForModel(model));
    renderHub();
    document.getElementById('catalog').scrollIntoView();
}

function openLinkedProduct() {
    const model = new URLSearchParams(location.hash.slice(1)).get('product');
    if (allModels().includes(model)) showProduct(model);
}

function addProductShortcuts(card, model) {
    const words = productUi[currentLang];
    const latest = latestProductRelease(model);
    if (latest) {
        const block = el('div', 'product-latest');
        const actions = el('div', 'product-shortcuts');
        actions.append(releaseDownload(latest, words[1]));
        const notes = releaseNotesButton(model, latest);
        if (notes) actions.append(notes);
        block.append(el('strong', '', latest.version), actions);
        card.append(block);
    }
    const shortcuts = el('div', 'product-shortcuts');
    const share = hubButton(words[2], 'secondary-btn', async () => {
        const url = productPermalink(model);
        try {
            await navigator.clipboard.writeText(url);
            share.textContent = words[6];
        } catch {
            window.prompt(words[2], url);
        }
    });
    const support = hubButton(words[3], 'secondary-btn', () => {
        const draft = [words[8], productName(model), latest?.version, productPermalink(model)].filter(Boolean).join('\n');
        openContactModal({ subject: words[3] + ' · ' + productName(model), draft });
    });
    shortcuts.append(share, support);
    card.append(shortcuts);
}

function renderRecentUpdates() {
    const section = document.getElementById('recentUpdates');
    const words = productUi[currentLang];
    const today = releaseToday();
    const cutoff = new Date(today + 'T00:00:00Z');
    cutoff.setUTCDate(cutoff.getUTCDate() - 30);
    const recent = Object.entries(firmwareDatabase).flatMap(([model, items]) =>
        items.filter(item => item.url && item.verified !== false && item.date >= cutoff.toISOString().slice(0, 10))
            .map(item => ({ ...item, model }))
    ).sort((a, b) => Number(!availableRelease(a)) - Number(!availableRelease(b))
        || (a.date > today ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date))).slice(0, 2);
    section.hidden = !recent.length;
    section.replaceChildren();
    if (!recent.length) return;
    const heading = el('div', 'section-head');
    const all = el('a', 'secondary-btn', words[4]);
    all.href = '#releases';
    heading.append(el('h2', '', words[0]), all);
    section.append(heading);
    for (const item of recent) {
        const row = el('article', 'recent-update');
        const info = el('div', 'release-info');
        const upcoming = !availableRelease(item);
        info.append(el('strong', '', productName(item.model) + ' · ' + item.version),
            el('span', '', [resourceTypeLabel('firmware', item.model), upcoming && words[5], upcoming ? item.date : releaseDateLabel(item.date, item.availableNow)].filter(Boolean).join(' · ')));
        const entry = releaseNotesByVersion[item.version];
        if (entry?.source) {
            const summary = currentLang === 'zh' ? entry.source.changesZh : entry.languages[currentLang] || entry.source.changes;
            info.append(el('span', '', summary[0]));
        }
        const actions = el('div', 'release-row-actions');
        const notes = releaseNotesButton(item.model, item);
        if (notes) actions.append(notes);
        if (!upcoming) actions.append(releaseDownload(item, words[1]));
        row.append(info, actions);
        section.append(row);
    }
}

function suggestedModels(query) {
    const value = normalizeModel(query);
    if (value.length < 3) return [];
    return allModels().filter(model => {
        const target = normalizeModel(model);
        if (Math.abs(target.length - value.length) > 1) return false;
        const long = value.length >= target.length ? value : target;
        const short = value.length >= target.length ? target : value;
        if (long.length === short.length) return [...long].filter((char, i) => char !== short[i]).length === 1;
        return [...long].some((_, i) => long.slice(0, i) + long.slice(i + 1) === short);
    }).slice(0, 4);
}

function appendModelSuggestions(container, query, select) {
    const matches = suggestedModels(query);
    if (!matches.length) return;
    const suggestions = el('div', 'product-shortcuts');
    suggestions.append(el('span', '', productUi[currentLang][7]));
    matches.forEach(model => suggestions.append(hubButton(productName(model), 'secondary-btn', () => select(model))));
    container.append(suggestions);
}

window.addEventListener('hashchange', openLinkedProduct);
document.addEventListener('DOMContentLoaded', openLinkedProduct);
