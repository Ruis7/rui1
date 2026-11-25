/* RUIS resource hub — derived from the original data.js, no duplicated records. */
const hubWords = {
 zh:['产品资源中心','版本更新中心','工具与支持','查找适用于设备的固件、说明书和技术资料。','资源库中最近发布的有日期记录的版本。','收藏产品','全部产品','产品型号','固件 / 软件','说明书','技术文档','暂无匹配产品','收藏','取消收藏'],
 en:['Product library','Release center','Tools & support','Find firmware, manuals and technical resources for your equipment.','Recent dated releases from the resource library.','Saved products','All products','Product models','Firmware / software','Manuals','Technical documents','No matching products','Save','Remove saved'],
 ru:['Каталог оборудования','Центр обновлений','Инструменты и поддержка','Прошивки, инструкции и технические материалы для вашего оборудования.','Последние версии с указанной датой выпуска.','Избранное','Все продукты','Модели','Прошивки / ПО','Инструкции','Технические документы','Нет подходящих продуктов','В избранное','Удалить из избранного'],
 kk:['Өнімдер каталогы','Жаңартулар','Құралдар және қолдау','Жабдыққа арналған файлдар мен нұсқаулықтар.','Соңғы күні көрсетілген нұсқалар.','Таңдаулылар','Барлық өнімдер','Модельдер','Микробағдарлама / БҚ','Нұсқаулықтар','Техникалық құжаттар','Өнім табылмады','Сақтау','Жою'],
 uz:['Mahsulotlar katalogi','Yangilanishlar','Vositalar va yordam','Uskunangiz uchun dasturlar va qoʻllanmalar.','Sanasi koʻrsatilgan soʻnggi versiyalar.','Saqlanganlar','Barcha mahsulotlar','Modellar','Dasturlar','Qoʻllanmalar','Texnik hujjatlar','Mahsulot topilmadi','Saqlash','Oʻchirish'],
 mn:['Бүтээгдэхүүний сан','Шинэчлэл','Хэрэгсэл ба дэмжлэг','Төхөөрөмжийн программ ба гарын авлага.','Огноотой сүүлийн хувилбарууд.','Хадгалсан','Бүх бүтээгдэхүүн','Загвар','Программ','Гарын авлага','Техникийн баримт','Бүтээгдэхүүн олдсонгүй','Хадгалах','Устгах'],
 uk:['Каталог продуктів','Центр оновлень','Інструменти та підтримка','Прошивки, інструкції та технічні матеріали.','Останні версії із зазначеною датою.','Обране','Усі продукти','Моделі','Прошивки / ПЗ','Інструкції','Технічні документи','Продукти не знайдено','Зберегти','Видалити']
};
const hubKeys=['hub_products','hub_releases','hub_tools','hub_catalog_desc','hub_release_desc','hub_saved','hub_all','hub_models','hub_fw','hub_manual','hub_docs','hub_empty','hub_save','hub_remove'];
Object.entries(hubWords).forEach(([lang,words])=>hubKeys.forEach((key,i)=>translations[lang][key]=words[i]));
const icons={gnss:'GNSS',mobile:'MAP',ag:'AG',marine:'HYDRO',uav:'UAV',software:'SW'};
let hubCategory='all',savedOnly=false;
let savedModels=new Set();try{savedModels=new Set(JSON.parse(localStorage.getItem('ruis_saved')||'[]'));}catch{}
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e;}
function hubButton(txt,cls,handler){const b=el('button',cls,txt);b.type='button';b.addEventListener('click',handler);return b;}
function renderHub(){
 const grid=document.getElementById('productGrid');if(!grid)return;
 const query=document.getElementById('catalogSearch').value.trim();
 const matches=query ? findModels(query) : [];
 const filters=document.getElementById('categoryFilters');filters.replaceChildren();
 [{categoryId:'all',labelKey:'hub_all'},...menuConfig].forEach(c=>{const b=hubButton(getI18n(c.labelKey),'filter-chip',()=>{hubCategory=c.categoryId;selectBackground(c.categoryId === 'all' ? 'software' : c.categoryId);renderHub();filters.querySelector('[aria-pressed="true"]')?.focus();});b.setAttribute('aria-pressed',String(hubCategory===c.categoryId));filters.append(b);});
 renderRecentUpdates();
 const quick=document.getElementById('quickModels');quick.replaceChildren();['landstar','i93','i100','cgbas'].forEach(m=>quick.append(hubButton(productName(m),'quick-model',()=>{document.getElementById('catalogSearch').value=productName(m);hubCategory='all';savedOnly=false;selectBackground(backgroundForModel(m));renderHub();document.getElementById('catalog').scrollIntoView({behavior:'smooth'});}))); 
 document.getElementById('savedToggle').setAttribute('aria-pressed',String(savedOnly));grid.replaceChildren();
 menuConfig.filter(c=>hubCategory==='all'||c.categoryId===hubCategory).forEach(c=>c.items.filter(m=>(!savedOnly||savedModels.has(m))&&(!query||matches.includes(m))).forEach(m=>{
 const card=el('article','product-card');const top=el('div','product-card-top');top.append(el('span','product-symbol',icons[c.categoryId]));const saved=savedModels.has(m);const star=hubButton(saved?'★':'☆','save-product',()=>{savedModels.has(m)?savedModels.delete(m):savedModels.add(m);try{localStorage.setItem('ruis_saved',JSON.stringify([...savedModels]));}catch{}renderHub();});star.setAttribute('aria-label',`${getI18n(saved?'hub_remove':'hub_save')} ${productName(m)}`);star.setAttribute('aria-pressed',String(saved));top.append(star);card.append(top,el('span','product-category',getI18n(c.labelKey)),el('h3','',productName(m)));
 const actions=el('div','product-actions');['firmware','manual','faq'].forEach(type=>{const n=getResourceData(type,m).length;const b=hubButton(type==='firmware' && latestProductRelease(m) ? productUi[currentLang][9] : `${resourceTypeLabel(type,m)} · ${n}`,'resource-chip',()=>openResourceModal(type,m));b.disabled=!n;actions.append(b);});card.append(actions);addProductShortcuts(card,m);grid.append(card);
 }));if(!grid.children.length){const empty=el('div','hub-empty',getI18n('hub_empty'));appendModelSuggestions(empty,query,showProduct);grid.append(empty);}
 const releases=document.getElementById('releaseList');releases.replaceChildren();
 Object.entries(firmwareDatabase).flatMap(([m,items])=>items.filter(x=>x.url&&x.verified!==false&&x.date).map(x=>({...x,model:m}))).sort((a,b)=>parseDate(b.date)-parseDate(a.date)).slice(0,8).forEach(x=>{const row=el('article','release-row');const info=el('div','release-info');info.append(el('strong','',productName(x.model)),el('span','',x.version));const link=el('a','release-download',getI18n('resource_download')+' ↗');link.href=x.url;link.target='_blank';link.rel='noopener noreferrer';const actions=el('div','release-row-actions');const notes=releaseNotesButton(x.model,x);if(notes)actions.append(notes);if(availableRelease(x))actions.append(link);row.append(el('time','',releaseDateLabel(x.date,x.availableNow)),info,hubButton(getI18n('hub_releases')+' →','secondary-btn',()=>openResourceModal('firmware',x.model)),actions);releases.append(row);});
}
document.addEventListener('DOMContentLoaded',()=>{document.getElementById('catalogSearch').addEventListener('input',event=>{const query=event.target.value.trim();const matches=findModels(query);if(matches.length===1)linkSearchBackground(query,matches[0]);renderHub();});document.getElementById('savedToggle').addEventListener('click',()=>{savedOnly=!savedOnly;renderHub();});renderHub();});
