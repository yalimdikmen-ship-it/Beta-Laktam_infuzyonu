
const DRUGS = {
  piptazo: {
    name:"Piperasilin/tazobaktam",
    loading:"4.5 g IV / 30 dk",
    maintenance:"4.5 g IV q8h",
    infusion:"Her doz 4 saatte",
    pkpd:"Hedef: 100% fT > MIC; ağır enfeksiyonda daha yüksek maruziyet düşün",
    prep:"Örnek yerel uygulama: 4.5 g dozu kurumca valide edilmiş uygun dilüent/hacimde hazırlayın. 100 mL kullanılıyorsa 4 saat için pompa hızı 25 mL/saat olur. Ürün-konsantrasyon stabilitesini yerel eczane protokolüyle doğrulayın.",
    warnings:[
      "İlk yükleme dozu uzatılmamalı/geciktirilmemeli.",
      "Aminoglikozidlerle aynı torbada hazırlanmaz; mümkünse ayrı lümen.",
      "ARC veya yüksek MIC durumunda hedefe ulaşamama riski artabilir.",
      "Renal fonksiyon bozulduğunda idame rejimini yerel renal doz tablosuyla doğrulayın."
    ]
  },
  mero: {
    name:"Meropenem",
    loading:"1–2 g IV / yaklaşık 30 dk",
    maintenance:"1–2 g IV q8h (endikasyon/MIC'e göre)",
    infusion:"Her doz 3 saatte",
    pkpd:"Hedef: 100% fT > MIC; ağır enfeksiyonda 100% fT > 4×MIC düşünülebilir",
    prep:"3 saatlik extended infusion tercih edilen pratik yaklaşımdır. Konsantrasyon, dilüent ve sıcaklık meropenem stabilitesini belirgin etkiler; 24 saatlik sürekli infüzyon ancak kurumca valide edilmiş stabilite koşulları varsa kullanılmalıdır.",
    warnings:[
      "Valproik asit/valproat ile klinik olarak önemli etkileşim: valproat düzeyi ciddi düşebilir; kombinasyondan mümkünse kaçının.",
      "ARC, yüksek MIC veya Pseudomonas enfeksiyonunda yetersiz maruziyet riski artar.",
      "AKI'da kreatinin hızla değişiyorsa tek bir CrCl hesabına dayanmayın.",
      "Renal replasman tedavisinde bu prototip kesin doz üretmez."
    ]
  },
  cefepime: {
    name:"Sefepim",
    loading:"2 g IV / yaklaşık 30 dk",
    maintenance:"2 g IV q8h (ağır enfeksiyonda tipik; renal ayar gerekir)",
    infusion:"Her doz 3–4 saatte",
    pkpd:"Hedef: 100% fT > MIC; toksisite riskini de gözet",
    prep:"Kurumca valide edilmiş dilüent ve konsantrasyon kullanın. Uzatılmış infüzyon damar yolunu uzun süre işgal edeceğinden Y-site kontrolünü her eşzamanlı ilaç için yapın.",
    warnings:[
      "Renal yetmezlikte nörotoksisite riski: ensefalopati, miyoklonus, afazi, nöbet/nonkonvülzif status açısından izlem.",
      "Vankomisin, aminoglikozidler, metronidazol ve aminofilin ile aynı solüsyonda hazırlamayın; Y-site uyumluluğunu ayrıca doğrulayın.",
      "AKI'da idame dozunu dinamik renal fonksiyona göre yeniden değerlendirin."
    ]
  },
  ceftazidime: {
    name:"Seftazidim",
    loading:"2 g IV / yaklaşık 30 dk",
    maintenance:"2 g IV q8h (ağır Gram-negatif enfeksiyonda tipik)",
    infusion:"Her doz 3 saatte",
    pkpd:"Hedef: 100% fT > MIC",
    prep:"3 saatlik extended infusion uygulanabilir. Sürekli infüzyon düşünülüyorsa stabilite, torba değişim süresi ve sıcaklık kurum tarafından valide edilmelidir.",
    warnings:[
      "Pseudomonas ve yüksek MIC durumlarında prolonged infusion avantajı daha anlamlı olabilir.",
      "Renal fonksiyona göre idame doz/interval doğrulanmalıdır.",
      "Y-site verisi yoksa eşzamanlı uygulamayı uyumlu kabul etmeyin."
    ]
  },
  cazavi: {
    name:"Seftazidim/avibaktam",
    loading:"Rutin ayrı yükleme dozu yerine ilk doz gecikmeden başlanır; yerel protokolü izleyin",
    maintenance:"2.5 g IV q8h (normal renal fonksiyonda standart erişkin rejim)",
    infusion:"En az 2 saatte; seçilmiş kritik hastada daha uzun infüzyon kurum protokolüne göre",
    pkpd:"Seftazidim için zaman > MIC + avibaktam maruziyeti birlikte önemlidir",
    prep:"Dirençli Gram-negatif enfeksiyonlarda kullanılır. Extended/continuous strateji uygulanacaksa lokal stabilite ve farmasi validasyonu gerekir.",
    warnings:[
      "Renal doz değişiklikleri önemlidir; hızla değişen renal fonksiyonda sık yeniden değerlendirme gerekir.",
      "Yüksek MIC/MDR etkenlerde enfeksiyon hastalıkları/klinik eczacılık ve mümkünse TDM desteği tercih edilir."
    ]
  },
  ceftolo: {
    name:"Seftolozan/tazobaktam",
    loading:"İlk doz gecikmeden başlanır; ayrı yükleme stratejisi yerel protokole göre",
    maintenance:"HAP/VAP: 3 g IV q8h (normal renal fonksiyonda)",
    infusion:"Standart uygulama + seçilmiş kritik hastada prolonged infusion kurum protokolüne göre",
    pkpd:"Seftolozan için fT > MIC hedeflenir",
    prep:"MDR Pseudomonas gibi seçilmiş endikasyonlarda kullanılabilir. Extended/continuous kullanımda ürün stabilitesi ve lokal protokol doğrulanmalıdır.",
    warnings:[
      "Renal fonksiyon değişikliklerinde doz hızla yetersiz veya aşırı hale gelebilir.",
      "CRRT için effluent hızı ve rezidüel renal fonksiyon dikkate alınmalıdır."
    ]
  },
  cefiderocol: {
    name:"Sefiderokol",
    loading:"İlk doz gecikmeden uygulanır",
    maintenance:"2 g IV q8h (normal renal fonksiyonda tipik)",
    infusion:"3 saatte",
    pkpd:"Zaman-bağımlı β-laktam hedefi; MIC ve renal klirens önemlidir",
    prep:"3 saatlik infüzyon ilacın standart uygulamasının parçasıdır. Üretici/kurum hazırlama talimatına uyun.",
    warnings:[
      "Augmented renal clearance durumunda daha sık doz aralığı gerekebilir; kurum protokolü/ürün bilgisiyle doğrulayın.",
      "Dirençli Gram-negatif enfeksiyonlarda duyarlılık sonucu ve enfeksiyon uzmanı değerlendirmesi önemlidir."
    ]
  },
  merovab: {
    name:"Meropenem/vaborbaktam",
    loading:"İlk doz gecikmeden uygulanır",
    maintenance:"4 g IV q8h (2 g meropenem + 2 g vaborbaktam; normal renal fonksiyonda)",
    infusion:"3 saatte",
    pkpd:"Meropenem fT > MIC + vaborbaktam maruziyeti",
    prep:"3 saatlik infüzyon standart uygulamadır. Renal fonksiyon için ürün bilgisi/yerel protokol doğrulanmalıdır.",
    warnings:[
      "Karbapenem sınıfı nedeniyle valproat etkileşimi dikkate alınmalıdır.",
      "Renal replasman tedavisinde bu prototip kesin doz üretmez."
    ]
  }
};

const incompat = {
  piptazo:{
    "Amikasin":"red","Gentamisin":"red","Tobramisin":"red"
  },
  cefepime:{
    "Vankomisin":"red","Metronidazol":"red","Gentamisin":"red","Tobramisin":"red","Aminofilin":"red"
  },
  mero:{
    "Valproat":"red"
  }
};

const $ = id => document.getElementById(id);

function populate(){
  const options = Object.entries(DRUGS).map(([k,v])=>`<option value="${k}">${v.name}</option>`).join("");
  $("drug").innerHTML = options;
  $("compatDrug").innerHTML = options;
}
populate();

function cg(){
  const age=+$("age").value, wt=+$("weight").value, scr=+$("scr").value;
  if(!age||!wt||!scr) return;
  let crcl=((140-age)*wt)/(72*scr);
  if($("sex").value==="female") crcl*=0.85;
  $("crcl").value=Math.max(0,Math.round(crcl));
  updateRenal();
}

function updateRenal(){
  const crcl=+$("crcl").value;
  const rrt=$("rrt").value;
  const aki=$("aki").checked;
  const arc=$("arc").checked || crcl>=130;
  let msgs=[];
  if(rrt!=="none") msgs.push("🔴 Renal replasman tedavisi: kesin doz yerel RRT tablosundan doğrulanmalı.");
  if(aki) msgs.push("🟠 AKI / dinamik renal fonksiyon: tek CrCl değerine dayalı otomatik doz güvenilir değildir.");
  if(arc) msgs.push("🟠 ARC riski: beta-laktam klirensi artmış olabilir; maksimum doz/prolonged infusion/TDM düşünülmeli.");
  if(!msgs.length && crcl) {
    if(crcl<30) msgs.push("🟠 Belirgin renal fonksiyon azalması: idame doz/interval ayarı gerekir.");
    else if(crcl<60) msgs.push("🟡 Orta derecede renal fonksiyon azalması: ilaç-spesifik idame ayarı kontrol edilmeli.");
    else msgs.push("🟢 CrCl belirgin düşük görünmüyor; yine de ilaç-spesifik renal eşikleri kontrol edin.");
  }
  $("renalSummary").innerHTML=msgs.join("<br>") || "CrCl girin veya Cockcroft–Gault hesaplayın.";
}

["crcl","rrt","aki","arc"].forEach(id=>$(id).addEventListener("change",updateRenal));
$("calcCrcl").addEventListener("click",cg);

function generate(){
  const key=$("drug").value, d=DRUGS[key], crcl=+$("crcl").value, rrt=$("rrt").value;
  const mic=$("mic").value, shock=$("shock").checked, aki=$("aki").checked;
  $("resultTitle").textContent=d.name;
  $("loading").textContent=d.loading;
  $("maintenance").textContent=d.maintenance;
  $("infusion").textContent=d.infusion;
  $("pkpd").textContent=d.pkpd;
  $("prep").textContent=d.prep;

  let warnings=[...d.warnings];
  if(shock) warnings.unshift("Septik şok: terapötik konsantrasyona hızlı ulaşmak için ilk dozun geciktirilmemesi ve yükleme yaklaşımı önemlidir.");
  if(mic) warnings.push(`Girilen MIC: ${mic} mg/L. Hedef başarısı yalnız bu prototipten hesaplanamaz; breakpoint, serbest konsantrasyon ve TDM ile birlikte değerlendirin.`);
  if(crcl>=130 || $("arc").checked) warnings.push("ARC uyarısı aktif: standart idame maruziyeti yetersiz kalabilir.");
  if(aki) warnings.push("AKI aktif: renal fonksiyon dinamik olduğundan doz sık yeniden değerlendirilmelidir.");
  if(rrt!=="none") warnings.push("RRT aktif: bu sürüm otomatik RRT dozu üretmez; effluent/rezidüel fonksiyon ve yerel tablo gerekir.");

  $("warnings").innerHTML="<ul>"+warnings.map(x=>`<li>${x}</li>`).join("")+"</ul>";

  let riskClass="green", riskText="Standart prolonged-infusion değerlendirme yolu.";
  if(rrt!=="none" || aki || crcl<30){riskClass="red";riskText="Yüksek doğrulama gereksinimi: renal fonksiyon/RRT nedeniyle otomatik idame dozu kullanmayın."}
  else if(crcl>=130 || $("arc").checked || mic || shock){riskClass="amber";riskText="PK/PD hedef başarısızlığı riski artabilir; prolonged infusion ve klinik doğrulama önemli."}
  $("riskBanner").innerHTML=`<div class="risk ${riskClass}">${riskText}</div>`;

  $("nursing").textContent =
`${d.name}
Yükleme / ilk doz: ${d.loading}
İdame: ${d.maintenance}
İnfüzyon: ${d.infusion}

UYARI:
• Aynı lümen/Y-site uyumluluğunu eşzamanlı her ilaç için doğrulayın.
• Veri yoksa ayrı lümen veya flush-sekans yaklaşımı kullanın.
• Hazırlama konsantrasyonu ve stabiliteyi yerel eczane protokolüyle doğrulayın.`;

  $("resultCard").classList.remove("hidden");
  $("resultCard").scrollIntoView({behavior:"smooth",block:"start"});
}

$("generate").addEventListener("click",generate);
$("reset").addEventListener("click",()=>location.reload());
$("printBtn").addEventListener("click",()=>window.print());

$("checkCompat").addEventListener("click",()=>{
  const d=$("compatDrug").value, c=$("coDrug").value;
  if(!c){$("compatResult").textContent="Birlikte verilen ilacı seçin.";return;}
  const status=(incompat[d]||{})[c];
  if(status==="red"){
    $("compatResult").innerHTML=`<strong style="color:#b91c1c">🔴 Ayrı uygulama / uyumsuzluk riski.</strong> ${DRUGS[d].name} + ${c} için aynı torba veya doğrulanmamış Y-site kullanımından kaçının; ayrı lümen tercih edin.`;
  }else{
    $("compatResult").innerHTML=`<strong style="color:#92400e">🟡 Prototip veri tabanında doğrulanmış sonuç yok.</strong> “Kayıt yok” uyumlu anlamına gelmez. Konsantrasyon, dilüent ve üreticiye özgü güncel Y-site kaynağından doğrulayın; doğrulanamıyorsa ayrı lümen kullanın.`;
  }
});

function updateOnline(){
  $("onlineBadge").textContent=navigator.onLine?"Çevrimiçi • PWA hazır":"Offline • Yerel çalışma";
}
window.addEventListener("online",updateOnline);window.addEventListener("offline",updateOnline);updateOnline();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(console.error));
}
