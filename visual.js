const backgroundKeys = ['software', 'gnss', 'mobile', 'ag', 'marine', 'uav'];
const visualWords = {
    zh: ['数字地形', '背景', '暂停轮换', '播放轮换', '最新版本', '历史版本'],
    en: ['Digital terrain', 'Background', 'Pause rotation', 'Play rotation', 'Latest version', 'Version history'],
    ru: ['Цифровой рельеф', 'Фон', 'Приостановить смену фона', 'Запустить смену фона', 'Последняя версия', 'История версий'],
    kk: ['Сандық жер бедері', 'Фон', 'Ауыстыруды кідірту', 'Ауыстыруды бастау', 'Соңғы нұсқа', 'Нұсқалар тарихы'],
    uz: ['Raqamli relyef', 'Fon', 'Almashishni toʻxtatish', 'Almashishni boshlash', 'Soʻnggi versiya', 'Versiyalar tarixi'],
    mn: ['Дижитал гадарга', 'Дэвсгэр', 'Солилтыг түр зогсоох', 'Солилтыг эхлүүлэх', 'Сүүлийн хувилбар', 'Хувилбарын түүх'],
    uk: ['Цифровий рельєф', 'Фон', 'Призупинити зміну фону', 'Запустити зміну фону', 'Остання версія', 'Історія версій']
};
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
let activeBackground = 'software';
let rotationPreference;
try { rotationPreference = localStorage.getItem('ruis_background_play'); } catch {}
let rotationTimer;
const backgroundControls = document.getElementById('backgroundControls');
const hero = document.getElementById('heroSection');

function backgroundForModel(model) {
    const normalized = normalizeModel(model);
    if (normalized === 'aa6') return 'uav';
    if (['p5', 'cgbas', 'pointsky', 'gnsstool'].includes(normalized)) return 'gnss';
    if (['rs10', 'coprocess'].includes(normalized)) return 'mobile';
    return menuConfig.find(category => category.items.includes(normalized))?.categoryId;
}

function isBackgroundPlaying() {
    return rotationPreference === 'true' || (rotationPreference !== 'false' && !motionPreference.matches);
}

function updateBackgroundControls() {
    const words = visualWords[currentLang];
    const playing = isBackgroundPlaying();
    backgroundControls.setAttribute('aria-label', words[1]);
    for (const button of backgroundControls.querySelectorAll('[data-background]')) {
        const key = button.dataset.background;
        button.title = key === 'software' ? words[0] : getI18n(menuConfig.find(category => category.categoryId === key).labelKey);
        button.setAttribute('aria-label', button.title);
        button.setAttribute('aria-pressed', String(activeBackground === key));
    }
    const toggle = document.getElementById('backgroundToggle');
    toggle.textContent = playing ? 'Ⅱ' : '▶';
    toggle.title = playing ? words[2] : words[3];
    toggle.setAttribute('aria-label', toggle.title);
    clearTimeout(rotationTimer);
    if (playing && !document.hidden && !document.body.classList.contains('modal-open')) {
        rotationTimer = setTimeout(() => {
            const next = (backgroundKeys.indexOf(activeBackground) + 1) % backgroundKeys.length;
            selectBackground(backgroundKeys[next]);
        }, 12000);
    }
}

function selectBackground(key) {
    if (!backgroundKeys.includes(key)) return;
    activeBackground = key;
    hero.dataset.background = key;
    updateBackgroundControls();
}

function linkSearchBackground(query, model) {
    const normalized = normalizeModel(query);
    const key = backgroundForModel(model || normalized) || backgroundForModel(normalized);
    if (key) selectBackground(key);
}

backgroundKeys.forEach(key => {
    const button = createButton('', 'background-dot', () => selectBackground(key));
    button.dataset.background = key;
    backgroundControls.append(button);
});
document.getElementById('backgroundToggle').addEventListener('click', () => {
    const playing = isBackgroundPlaying();
    rotationPreference = String(!playing);
    try { localStorage.setItem('ruis_background_play', rotationPreference); } catch {}
    updateBackgroundControls();
});
document.addEventListener('visibilitychange', updateBackgroundControls);
motionPreference.addEventListener('change', updateBackgroundControls);
selectBackground('software');

document.getElementById('uavQuickModels').addEventListener('click', (event) => {
    const model = event.target.closest('[data-uav-model]')?.dataset.uavModel;
    if (!model) return;
    document.getElementById('searchInput').value = model;
    performSearch();
});
