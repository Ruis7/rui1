const releaseNoteLabels = {
    zh: ['更新内容', '说明语言', '关闭'],
    en: ['What’s new', 'Release notes language', 'Close'],
    ru: ['Что нового', 'Язык описания', 'Закрыть'],
    kk: ['Жаңалықтар', 'Сипаттама тілі', 'Жабу'],
    uz: ['Yangiliklar', 'Izoh tili', 'Yopish'],
    mn: ['Шинэ зүйлс', 'Тайлбарын хэл', 'Хаах'],
    uk: ['Що нового', 'Мова опису', 'Закрити']
};
const releaseNoteLanguages = {
    zh: '简体中文', en: 'English', ru: 'Русский', kk: 'Қазақша',
    uz: 'Oʻzbekcha', mn: 'Монгол', uk: 'Українська'
};
const localizedReleaseChanges = {
    landstar: {
        ru: ['Лазерная разбивка точек, линий и поверхностей с совместимым RTK-приёмником.', 'Группируйте часто используемые инструменты и настраивайте интерфейс.', 'Добавлены карты WFS 2.0, настройка прозрачности и экспорт в GC3, FLD и SDR.', 'Ускорена обработка снимков при визуальной съёмке. Улучшены дорожная разбивка, работа со слоями DWG/DXF, просмотр CAD и работа с тахеометром.', 'Добавлены калибровка поворота по двум точкам, расчёт треугольника, опорные линии, уравнения пикетажа и выбор числа участков.'],
        kk: ['Үйлесімді лазерлік RTK қабылдағышымен нүктелерді, сызықтар мен беттерді жерге шығару.', 'Жиі қолданылатын құралдарды топтастырып, интерфейсті өзіңізге бейімдеңіз.', 'WFS 2.0 карталары, мөлдірлікті реттеу және GC3, FLD, SDR форматтарына экспорт қосылды.', 'Визуалды түсірілім суреттері жылдамырақ өңделеді. Жолды жерге шығару, DWG/DXF қабаттары, CAD көрінісі және тахеометрмен жұмыс жақсарды.', 'Екі нүктелі бұрылыс калибрлеуі, үшбұрыш есептеуі, тірек сызықтар, пикетаж теңдеулері және аудан бөліктерінің санын таңдау қосылды.'],
        uz: ['Mos lazerli RTK qabul qilgich bilan nuqta, chiziq va yuzalarni joyga ko‘chiring.', 'Ko‘p ishlatiladigan asboblarni guruhlab, interfeysni moslang.', 'WFS 2.0 xaritalari, shaffoflik sozlamasi hamda GC3, FLD va SDR eksporti qo‘shildi.', 'Vizual o‘lchov suratlari tezroq qayta ishlanadi. Yo‘l belgilash, DWG/DXF qatlamlari, CAD ko‘rish va taxeometr bilan ishlash yaxshilandi.', 'Ikki nuqtali burilish kalibrlashi, uchburchak hisobi, tayanch chiziqlar, piket tenglamalari va maydon bo‘laklari sonini tanlash qo‘shildi.'],
        mn: ['Тохирох лазер RTK хүлээн авагчаар цэг, шугам, гадаргууг газарт тэмдэглэнэ.', 'Түгээмэл хэрэглэдэг хэрэгслээ бүлэглэж, интерфэйсээ тохируулна.', 'WFS 2.0 газрын зураг, тунгалагшлын тохиргоо, GC3, FLD, SDR экспорт нэмэгдсэн.', 'Дүрслэлийн хэмжилтийн зураг хурдан боловсруулагдана. Замын тавилт, DWG/DXF давхарга, CAD харагдац, тахеометрийн ажиллагаа сайжирсан.', 'Хоёр цэгийн эргэлтийн тохируулга, гурвалжны тооцоо, лавлах шугам, пикетийн тэгшитгэл, талбайн хэсгийн тоог сонгох боломж нэмэгдсэн.'],
        uk: ['Лазерне винесення точок, ліній і поверхонь сумісним RTK-приймачем.', 'Групуйте часто вживані інструменти й налаштовуйте інтерфейс під себе.', 'Додано карти WFS 2.0, регулювання прозорості та експорт у GC3, FLD і SDR.', 'Прискорено обробку знімків візуального знімання. Покращено винесення доріг, роботу з шарами DWG/DXF, перегляд CAD і роботу з тахеометром.', 'Додано калібрування повороту за двома точками, розрахунок трикутника, опорні лінії, рівняння пікетажу та вибір кількості ділянок.']
    },
    i85: {
        ru: ['Исправлены расхождения временных меток NMEA при одинаковой частоте вывода.', 'После сброса к заводским настройкам BeiDou B1C и B2A включены по умолчанию.', 'Добавлены гостевой режим, GGA с поправкой IMU и переключение GP/GN в веб-интерфейсе.', 'Перед обновлением сохраните резервную копию. Заряд должен быть выше 50%. Не выключайте приёмник во время обновления.'],
        kk: ['Бірдей жиілікте шығатын NMEA деректерінің уақыт белгілері түзетілді.', 'Зауыттық баптауларға қайтарған соң BeiDou B1C және B2A әдепкіде қосылады.', 'Қонақ режимі, IMU түзетуі бар GGA және веб-интерфейсте GP/GN ауыстыру қосылды.', 'Жаңарту алдында деректердің сақтық көшірмесін жасаңыз. Қуат 50%-дан жоғары болсын, қабылдағышты өшірмеңіз.'],
        uz: ['Bir xil chastotada uzatiladigan NMEA vaqt belgilaridagi tafovut tuzatildi.', 'Zavod sozlamalariga qaytgach, BeiDou B1C va B2A sukut bo‘yicha yoqiladi.', 'Mehmon rejimi, IMU tuzatishli GGA va veb-interfeysda GP/GN almashtirish qo‘shildi.', 'Yangilashdan avval ma’lumotlarni zaxiralang. Quvvat 50% dan yuqori bo‘lsin va qabul qilgichni o‘chirmang.'],
        mn: ['Ижил давтамжаар гарах NMEA өгөгдлийн цагийн тэмдгийн зөрүүг зассан.', 'Үйлдвэрийн тохиргоог сэргээхэд BeiDou B1C, B2A анхдагчаар идэвхжинэ.', 'Зочны горим, IMU засвартай GGA болон вэб интерфэйсийн GP/GN сэлгэлт нэмэгдсэн.', 'Шинэчлэхийн өмнө өгөгдлөө нөөцөлнө. Цэнэг 50%-аас дээш байх ёстой. Шинэчлэх үед төхөөрөмжийг унтрааж болохгүй.'],
        uk: ['Виправлено розбіжності часових міток NMEA за однакової частоти виведення.', 'Після скидання до заводських налаштувань BeiDou B1C і B2A увімкнено за замовчуванням.', 'Додано гостьовий режим, GGA з поправкою IMU та перемикання GP/GN у вебінтерфейсі.', 'Перед оновленням зробіть резервну копію. Заряд має перевищувати 50%. Під час оновлення не вимикайте приймач.']
    }
};

const releaseNotesByVersion = {
    'LandStar-8.3.2.20261119': { source: newsDatabase.find(entry => entry.title === 'LandStar 8.3.2.20261119'), languages: localizedReleaseChanges.landstar },
    'V1.3.2': { source: newsDatabase.find(entry => entry.title === 'i85 Firmware V1.3.2'), languages: localizedReleaseChanges.i85 }
};

function releaseNotesButton(model, item) {
    const notes = (model === 'landstar' && item.version === 'LandStar-8.3.2.20261119')
        || (model === 'i85' && item.version === 'V1.3.2')
        ? releaseNotesByVersion[item.version] : null;
    if (!notes?.source) return null;
    return createButton(releaseNoteLabels[currentLang][0], 'release-notes-button', () => {
        const modal = document.getElementById('releaseNotesModal');
        const resource = document.getElementById('resourceModal');
        const language = document.getElementById('releaseNotesLanguage');
        if (resource.classList.contains('is-open')) resource.inert = true;
        language.value = currentLang;
        const render = () => {
            const lang = language.value;
            const [label, languageLabel, close] = releaseNoteLabels[lang];
            modal.lang = lang;
            document.getElementById('releaseNotesTitle').textContent = label;
            document.getElementById('releaseNotesVersion').textContent = notes.source.title;
            document.getElementById('releaseNotesLanguageLabel').textContent = languageLabel;
            modal.querySelector('.close-btn').setAttribute('aria-label', close);
            const entries = lang === 'zh' ? notes.source.changesZh : notes.languages[lang] || notes.source.changes;
            document.getElementById('releaseNotesEntries').replaceChildren(...entries.map(text => {
                const line = document.createElement('li');
                line.textContent = text;
                return line;
            }));
        };
        language.onchange = render;
        render();
        openModal('releaseNotesModal');
    });
}

const releaseNotesLanguage = document.getElementById('releaseNotesLanguage');
for (const [code, label] of Object.entries(releaseNoteLanguages)) {
    releaseNotesLanguage.add(new Option(label, code));
}
