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
    ibase: {
        ru: ['После сброса к заводским настройкам включаются BeiDou B1C и B2A. Исправлены известные проблемы.'],
        kk: ['Зауыттық баптаулар қалпына келтірілгенде BeiDou B1C және B2A қосылады. Белгілі ақаулар түзетілді.'],
        uz: ['Zavod sozlamalari tiklangach, BeiDou B1C va B2A yoqiladi. Ma’lum muammolar tuzatildi.'],
        mn: ['Үйлдвэрийн тохиргоог сэргээхэд BeiDou B1C ба B2A идэвхжинэ. Мэдэгдэж байсан асуудлуудыг зассан.'],
        uk: ['Після скидання до заводських налаштувань вмикаються BeiDou B1C і B2A. Виправлено відомі проблеми.']
    },
    i83: {
        ru: ['Исправлены формат GGA с поправкой IMU и временные метки NMEA. Добавлены гостевой режим и переключение GP/GN. После сброса включаются BeiDou B1C и B2A.'],
        kk: ['IMU түзетілген GGA пішімі мен NMEA уақыт белгілері түзетілді. Қонақ режимі және GP/GN ауыстыру қосылды. Зауыттық қалпына келтіруден кейін BeiDou B1C және B2A қосылады.'],
        uz: ['IMU tuzatishli GGA formati va NMEA vaqt belgilari tuzatildi. Mehmon rejimi hamda GP/GN almashtirish qo‘shildi. Zavod sozlamalari tiklangach, BeiDou B1C va B2A yoqiladi.'],
        mn: ['IMU засвартай GGA формат болон NMEA цагийн тэмдгийг зассан. Зочны горим, GP/GN сэлгэлт нэмэгдсэн. Үйлдвэрийн тохиргоо сэргээхэд BeiDou B1C, B2A идэвхжинэ.'],
        uk: ['Виправлено формат GGA з поправкою IMU та часові мітки NMEA. Додано гостьовий режим і перемикання GP/GN. Після скидання активуються BeiDou B1C і B2A.']
    },
    i76: {
        ru: ['Исправлены задержки Bluetooth на некоторых планшетах и временные метки NMEA. Добавлены гостевой режим, GGA с поправкой IMU, переключение GP/GN и управление статическими файлами через веб-интерфейс. Для i76 DistLink 110102009N.'],
        kk: ['Кейбір планшеттердегі Bluetooth кідірісі және NMEA уақыт белгілері түзетілді. Қонақ режимі, IMU түзетілген GGA, GP/GN ауыстыру және веб-интерфейсте статикалық файлдарды басқару қосылды. i76 DistLink 110102009N үшін.'],
        uz: ['Ayrim planshetlarda Bluetooth kechikishi va NMEA vaqt belgilari tuzatildi. Mehmon rejimi, IMU tuzatishli GGA, GP/GN almashtirish va veb-interfeysda statik fayllarni boshqarish qo‘shildi. i76 DistLink 110102009N uchun.'],
        mn: ['Зарим таблетын Bluetooth саатал болон NMEA цагийн тэмдгийг зассан. Зочны горим, IMU засвартай GGA, GP/GN сэлгэлт, вебээр статик файл удирдах боломж нэмэгдсэн. i76 DistLink 110102009N-д зориулсан.'],
        uk: ['Усунено затримки Bluetooth на деяких планшетах і виправлено часові мітки NMEA. Додано гостьовий режим, GGA з поправкою IMU, перемикання GP/GN і керування статичними файлами через вебінтерфейс. Для i76 DistLink 110102009N.']
    },
    i93: {
        ru: ['Добавлены гостевой режим и ID виртуальной базовой станции VRS.', 'После сброса включаются BeiDou B1C и B2A. Веб-интерфейс контроллера открывается в настольном режиме.', 'Артикулы A11611980901070507 и 110102003Y. Обновляйте через веб-интерфейс приёмника или LandStar. Сделайте резервную копию, зарядите батарею выше 50% и не выключайте приёмник.'],
        kk: ['Қонақ режимі және VRS виртуалды базалық станциясының идентификаторы қосылды.', 'Зауыттық қалпына келтіруден кейін BeiDou B1C және B2A қосылады. Контроллердің веб-интерфейсі компьютерлік режимде ашылады.', 'Артикулдар A11611980901070507 және 110102003Y. Қабылдағыш веб-интерфейсі немесе LandStar арқылы жаңартыңыз. Деректерді сақтық көшірмелеп, зарядты 50%-дан жоғары ұстаңыз және қабылдағышты өшірмеңіз.'],
        uz: ['Mehmon rejimi va VRS virtual baza stansiyasi identifikatori qo‘shildi.', 'Zavod sozlamalari tiklangach, BeiDou B1C va B2A yoqiladi. Kontroller veb-interfeysi kompyuter rejimida ochiladi.', 'Artikullar A11611980901070507 va 110102003Y. Qabul qilgich veb-interfeysi yoki LandStar orqali yangilang. Ma’lumotlarni zaxiralang, zaryad 50% dan yuqori bo‘lsin va qurilmani o‘chirmang.'],
        mn: ['Зочны горим болон VRS виртуал суурь станцын ID нэмэгдсэн.', 'Үйлдвэрийн тохиргоог сэргээхэд BeiDou B1C ба B2A идэвхжинэ. Удирдлагын вэб интерфэйс компьютерийн горимоор нээгдэнэ.', 'A11611980901070507 болон 110102003Y дугаартай загварт тохирно. Хүлээн авагчийн вэб эсвэл LandStar-аар шинэчилнэ. Өгөгдлөө нөөцөлж, цэнэгийг 50%-аас дээш байлгаж, төхөөрөмжийг унтраахгүй.'],
        uk: ['Додано гостьовий режим та ID віртуальної базової станції VRS.', 'Після скидання активуються BeiDou B1C і B2A. Вебінтерфейс контролера за замовчуванням відкривається у версії для ПК.', 'Артикули A11611980901070507 і 110102003Y. Оновлюйте через вебінтерфейс приймача або LandStar. Зробіть резервну копію, заряд має перевищувати 50%, не вимикайте приймач.']
    },
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
    'V3.1.2': { source: newsDatabase.find(entry => entry.title === 'iBase Firmware V3.1.2'), languages: localizedReleaseChanges.ibase },
    'V1.7.1': { source: newsDatabase.find(entry => entry.title === 'i76 Firmware V1.7.1'), languages: localizedReleaseChanges.i76 },
    'V1.5.2': { source: newsDatabase.find(entry => entry.title === 'i83 Firmware V1.5.2'), languages: localizedReleaseChanges.i83 },
    'LandStar-8.3.2.20261119': { source: newsDatabase.find(entry => entry.title === 'LandStar 8.3.2.20261119'), languages: localizedReleaseChanges.landstar },
    'V1.6.3': { source: newsDatabase.find(entry => entry.title === 'i93 Firmware V1.6.3'), languages: localizedReleaseChanges.i93 },
    'V1.3.2': { source: newsDatabase.find(entry => entry.title === 'i85 Firmware V1.3.2'), languages: localizedReleaseChanges.i85 }
};

function releaseNotesButton(model, item) {
    const notes = (model === 'landstar' && item.version === 'LandStar-8.3.2.20261119')
        || (model === 'ibase' && item.version === 'V3.1.2')
        || (model === 'i83' && item.version === 'V1.5.2')
        || (model === 'i76' && item.version === 'V1.7.1')
        || (model === 'i93' && item.version === 'V1.6.3')
        || (model === 'i85' && item.version === 'V1.3.2')
        ? releaseNotesByVersion[item.version] : null;
    if (!notes?.source) return null;
    return createButton(releaseNoteLabels[currentLang][0], 'release-notes-button', () => {
        const modal = document.getElementById('releaseNotesModal');
        const resource = document.getElementById('resourceModal');
        const language = document.getElementById('releaseNotesLanguage');
        if (resource.classList.contains('is-open')) resource.inert = true;
        language.value = currentLang;
        const source = document.getElementById('releaseNotesSource');
        source.hidden = !notes.source.sourceUrl;
        if (notes.source.sourceUrl) source.href = notes.source.sourceUrl;
        else source.removeAttribute('href');
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
