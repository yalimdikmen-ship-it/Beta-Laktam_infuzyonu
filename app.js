
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



const STABILITY = {
 piptazo:"Extended infusion sırasında yalnız kurumca valide edilmiş dilüent, konsantrasyon ve saklama koşullarını kullanın. Aminoglikozidlerle aynı torbada hazırlamayın.",
 mero:"Meropenem çözeltide sıcaklık ve konsantrasyona duyarlıdır. Validasyonu olmayan 24 saatlik oda sıcaklığı continuous infusion kullanılmamalıdır; 3 saatlik EI pratik varsayılandır.",
 cefepime:"Uzatılmış infüzyonda ürün/konsantrasyon stabilitesi ve Y-site uyumluluğu doğrulanmalıdır. Renal yetmezlikte nörotoksisite açısından yakın izlem gerekir.",
 ceftazidime:"3 saatlik EI uygulanabilir; continuous infusion için stabilite, sıcaklık ve torba değişim süresi kurumca valide edilmelidir.",
 cazavi:"Extended/continuous kullanım yalnız ürün ve kurum stabilite verileri doğrulanarak yapılmalıdır.",
 ceftolo:"Extended/continuous kullanımda ürün stabilitesi ve yerel farmasi validasyonu gerekir.",
 cefiderocol:"3 saatlik infüzyon standart uygulamadır; üretici hazırlama ve saklama talimatına uyun.",
 merovab:"3 saatlik infüzyon standart uygulamadır; üretici hazırlama ve renal doz talimatına uyun."
};
function updateEcmoUI(){
 const e=$("ecmo").value;
 $("ecmoFlowWrap").classList.toggle("hidden",e==="none");
 if(e==="none"){$("ecmoSummary").classList.add("hidden");return}
 $("ecmoSummary").classList.remove("hidden");
 const both=$("rrt").value!=="none";
 $("ecmoSummary").innerHTML=`<div class="ecmo-banner">${e==="vv"?"VV-ECMO":"VA-ECMO"} aktif${both?" + renal replasman tedavisi":""}. ECMO tek başına otomatik doz azaltma nedeni değildir; renal klirens/RRT, MIC, enfeksiyon odağı ve mümkünse TDM birlikte değerlendirilmelidir.</div>`;
}
$("ecmo").addEventListener("change",updateEcmoUI);
$("ecmoFlow").addEventListener("input",updateEcmoUI);
$("rrt").addEventListener("change",updateEcmoUI);

function ecmoAdvice(key, crcl, rrt){
 const e=$("ecmo").value;
 if(e==="none") return "ECMO yok. Renal fonksiyon/RRT ve enfeksiyon özelliklerine göre standart karar yolu kullanılır.";
 let t=`${e==="vv"?"VV-ECMO":"VA-ECMO"} mevcut. ECMO varlığı tek başına beta-laktam dozunun azaltılması için yeterli değildir. `;
 if(key==="mero"){
   t+="2026 ASAP-ECMO verilerinde meropenem klirensini kreatinin klirensi ve eşzamanlı RRT belirgin etkilerken ECMO akımı santral dağılım hacmini etkiledi. Prolonged/continuous strateji ve mümkünse TDM düşünülmelidir.";
 } else if(key==="cefepime"){
   t+="Erişkin ECMO PK verilerinde 2 g q8h, 3 saat infüzyon normal/augmented renal klirens veya seçilmiş CVVHDF hastalarında hedef maruziyeti destekledi; nörotoksisite riski nedeniyle renal fonksiyon ve mümkünse TDM birlikte izlenmelidir.";
 } else {
   t+="Bu ilaç için ECMO-spesifik doz verisi sınırlıdır; standart ağır-hasta dozu renal fonksiyon/RRT temelinde seçilmeli, yüksek MIC/ARC durumunda prolonged infusion ve TDM düşünülmelidir.";
 }
 if(rrt!=="none") t+=" ECMO + RRT birlikte olduğundan RRT modalitesi/effluent ve rezidüel renal fonksiyon doz kararında özellikle önemlidir.";
 return t;
}

let disclaimerAcceptedAt=null;
function updateBMI(){const w=+$("weight").value,h=+$("height").value/100;if(w&&h)$("bmi").value=(w/(h*h)).toFixed(1)}
["weight","height"].forEach(x=>$(x).addEventListener("input",updateBMI)); updateBMI();
$("rrt").addEventListener("change",()=>{$("effluentWrap").classList.toggle("hidden",$("rrt").value!=="crrt");updateRenal()});
$("acceptDisclaimer").addEventListener("change",()=>{
 if($("acceptDisclaimer").checked){disclaimerAcceptedAt=new Date();$("acceptStamp").textContent="✓ KLİNİK GÜVENLİK UYARISI OKUNDU VE KABUL EDİLDİ — "+disclaimerAcceptedAt.toLocaleString("tr-TR");$("acceptStamp").classList.remove("hidden");$("printBtn").disabled=false;$("nurseBtn").disabled=false}
 else{disclaimerAcceptedAt=null;$("acceptStamp").classList.add("hidden");$("printBtn").disabled=true;$("nurseBtn").disabled=true;$("nursing").classList.add("hidden")}
});


$("nurseBtn").addEventListener("click",()=>{
  if(!disclaimerAcceptedAt){
    alert("Hemşire uygulama kartını görüntülemek için klinik güvenlik uyarısını okuyup kabul etmeniz gerekir.");
    return;
  }
  $("nursing").classList.toggle("hidden");
  $("nurseBtn").textContent = $("nursing").classList.contains("hidden")
    ? "👩‍⚕️ HEMŞİRE KARTINI GÖSTER"
    : "👩‍⚕️ HEMŞİRE KARTINI GİZLE";
});

function renalDoseText(k,c,r,e){
 if(r==="crrt"){
  if(k==="piptazo")return e?`4.5 g IV q8h / 4 saat (EI); CRRT effluent ${e} mL/kg/saat — yüksek effluent/rezidüel klirenste hedefi TDM/yerel protokolle doğrula`:"CRRT: effluent dozu girilmeden kesinleştirme yapmayın";
  if(k==="mero")return e?`1 g IV q8h / 3 saat EI başlangıç yaklaşımı; CRRT effluent ${e} mL/kg/saat, rezidüel renal fonksiyon ve MIC ile doğrula`:"CRRT: effluent dozu girilmeden kesinleştirme yapmayın";
  if(k==="cefepime")return e?`1 g IV q8h / 4 saat EI başlangıç yaklaşımı; CRRT effluent ${e} mL/kg/saat ve nörotoksisite/TDM ile doğrula`:"CRRT: effluent dozu girilmeden kesinleştirme yapmayın";
  if(k==="cefiderocol"){if(!e)return "CRRT: effluent dozu girilmeden doz oluşturulamaz";if(e<7.5)return "1.5 g IV q12h / 3 saat";if(e<=15)return "1.5 g IV q8h / 3 saat";if(e<=30)return "2 g IV q8h / 3 saat";return "2 g IV q6h / 3 saat"}
  return "CRRT: ilaç-spesifik yerel/üretici tablosuyla doğrulayın";
 }
 if(r==="ihd"||r==="sled")return "IHD/SLED: kesin otomatik doz verilmez; yerel RRT protokolüyle doğrulayın";
 if(!c)return null;
 if(k==="piptazo")return c>20?"4.5 g IV q8h / 4 saat (EI)":"CrCl <20: kısa infüzyon renal rejimine geç";
 if(k==="mero"){if(c>50)return "1 g IV q8h / 3 saat";if(c>=26)return "1 g IV q12h / 3 saat";return "CrCl <26: kısa infüzyon renal rejimi"}
 if(k==="cefepime"){if(c>60)return "2 g IV q8h / 4 saat";if(c>=30)return "2 g IV q12h / 4 saat";return "CrCl <30: kısa infüzyon renal rejimi"}
 if(k==="ceftazidime"){if(c>50)return "2 g IV q8h / 4 saat";if(c>=31)return "2 g IV q12h / 4 saat";return "CrCl <31: kısa infüzyon renal rejimi"}
 if(k==="cefiderocol"){if(c>=120)return "2 g IV q6h / 3 saat";if(c>=60)return "2 g IV q8h / 3 saat";if(c>=30)return "1.5 g IV q8h / 3 saat";if(c>=15)return "1 g IV q8h / 3 saat";return "0.75 g IV q12h / 3 saat; IHD varsa HD sonrası"}
 if(k==="merovab"){if(c>50)return "4 g IV q8h / 3 saat";if(c>=30)return "2 g IV q8h / 3 saat";if(c>=15)return "2 g IV q12h / 3 saat";return "1 g IV q12h / 3 saat"}
 return null
}

function generate(){
  const key=$("drug").value, d=DRUGS[key], crcl=+$("crcl").value, rrt=$("rrt").value, eff=+$("effluent").value;
  if(rrt==="crrt" && (!eff || eff<5)){
    alert("CRRT için effluent dozunu mL/kg/saat olarak giriniz. Bu değer doz değerlendirmesinde kullanılacaktır.");
    $("effluent").focus();
    return;
  }
  const mic=$("mic").value, shock=$("shock").checked, aki=$("aki").checked;
  $("resultTitle").textContent=d.name;
  $("loading").textContent=d.loading;
  const renalRec=renalDoseText(key,crcl,rrt,eff); $("maintenance").textContent=renalRec||d.maintenance;
  $("infusion").textContent=d.infusion;
  $("pkpd").textContent=d.pkpd;
  $("prep").textContent=d.prep;
  $("stability").textContent=STABILITY[key] || "İlaç-spesifik stabiliteyi güncel ürün bilgisi ve yerel eczane protokolüyle doğrulayın.";
  $("extracorp").textContent=ecmoAdvice(key,crcl,rrt);

  let warnings=[...d.warnings];
  if(shock) warnings.unshift("Septik şok: terapötik konsantrasyona hızlı ulaşmak için ilk dozun geciktirilmemesi ve yükleme yaklaşımı önemlidir.");
  if(mic) warnings.push(`Girilen MIC: ${mic} mg/L. Hedef başarısı yalnız bu prototipten hesaplanamaz; breakpoint, serbest konsantrasyon ve TDM ile birlikte değerlendirin.`);
  if(crcl>=130 || $("arc").checked) warnings.push("ARC uyarısı aktif: standart idame maruziyeti yetersiz kalabilir.");
  if(aki) warnings.push("AKI aktif: renal fonksiyon dinamik olduğundan doz sık yeniden değerlendirilmelidir.");
  if(rrt!=="none") warnings.push("RRT aktif: effluent/rezidüel renal fonksiyon ve yerel doz tablosu birlikte değerlendirilmelidir.");
  if($("ecmo").value!=="none") warnings.push(ecmoAdvice(key,crcl,rrt));

  $("warnings").innerHTML="<ul>"+warnings.map(x=>`<li>${x}</li>`).join("")+"</ul>";

  let riskClass="green", riskText="Standart prolonged-infusion değerlendirme yolu.";
  if(rrt!=="none" || aki || (crcl>0 && crcl<30)){riskClass="red";riskText="Yüksek doğrulama gereksinimi: renal fonksiyon/RRT nedeniyle otomatik idame dozu kullanmayın."}
  else if(crcl>=130 || $("arc").checked || mic || shock){riskClass="amber";riskText="PK/PD hedef başarısızlığı riski artabilir; prolonged infusion ve klinik doğrulama önemli."}
  $("riskBanner").innerHTML=`<div class="risk ${riskClass}">${riskText}</div>`;

  $("nursing").textContent =
`${d.name}\n✓ KLİNİK GÜVENLİK UYARISI OKUNDU VE KABUL EDİLDİ\nKabul: ${disclaimerAcceptedAt ? disclaimerAcceptedAt.toLocaleString("tr-TR") : "Henüz kabul edilmedi"}\nHEKİM TARAFINDAN KLİNİK OLARAK DOĞRULANMADAN UYGULAMAYA GEÇİLMEZ.\n\nYükleme / ilk doz: ${d.loading}
İdame: ${renalRec || d.maintenance}
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
function fillPrintSheet(){
  const key=$("drug").value, d=DRUGS[key];
  const sexMap={male:"Erkek",female:"Kadın"};
  const rrtMap={none:"Yok",crrt:"CRRT",ihd:"Aralıklı hemodiyaliz",sled:"SLED / PIRRT"};
  const siteMap={
    sepsis:"Sepsis / odağı belirsiz",hap:"HAP / VAP",bsi:"Bakteriyemi",
    iai:"İntraabdominal",uti:"Komplike üriner",cns:"SSS enfeksiyonu",other:"Diğer"
  };
  const crcl=+$("crcl").value, eff=+$("effluent").value;
  const renalRec=renalDoseText(key,crcl,$("rrt").value,eff);
  $("psDate").textContent=new Date().toLocaleDateString("tr-TR");
  $("psAcceptTime").textContent=disclaimerAcceptedAt ? disclaimerAcceptedAt.toLocaleString("tr-TR") : "—";
  $("psAge").textContent=$("age").value || "—";
  $("psSex").textContent=sexMap[$("sex").value] || "—";
  $("psWeight").textContent=($("weight").value||"—")+" kg";
  $("psHeightBmi").textContent=($("height").value||"—")+" cm / BMI "+($("bmi").value||"—");
  $("psScr").textContent=($("scr").value||"—")+" mg/dL";
  $("psCrcl").textContent=($("crcl").value||"—")+" mL/dk";
  $("psRrt").textContent=rrtMap[$("rrt").value] || "—";
  $("psEffluent").textContent=$("rrt").value==="crrt" && $("effluent").value ? $("effluent").value+" mL/kg/saat" : "—";
  const e=$("ecmo").value, ef=$("ecmoFlow").value;
  $("psEcmo").textContent=e==="none"?"Yok":`${e==="vv"?"VV-ECMO":"VA-ECMO"}${ef?" / "+ef+" L/dk":""}`;
  $("psSite").textContent=siteMap[$("site").value] || "—";
  $("psOrganism").textContent=$("organism").value || "Bilinmiyor";
  $("psMic").textContent=$("mic").value ? $("mic").value+" mg/L" : "Bilinmiyor";
  $("psDrug").textContent=d.name;
  $("psLoading").textContent=d.loading;
  $("psMaintenance").textContent=renalRec || d.maintenance;
  $("psInfusion").textContent=d.infusion;
  $("psPkpd").textContent=d.pkpd;
  $("psPrep").textContent=d.prep;
  $("psWarnings").textContent=d.warnings.slice(0,3).join(" • ");
  const compat=$("compatResult").innerText.trim();
  $("psCompat").textContent=compat || "Bu hastaya özgü Y-site değerlendirmesi yapılmadı.";
}
$("printBtn").addEventListener("click",()=>{
  if(!disclaimerAcceptedAt){
    alert("PDF için klinik güvenlik uyarısını okuyup kabul etmeniz gerekir.");
    return;
  }
  fillPrintSheet();
  window.print();
});

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
