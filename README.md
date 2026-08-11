# β-Laktam ICU PWA — v0.3.2

Offline çalışabilen erişkin yoğun bakım β-laktam prolonged-infusion karar destek **prototipi**.

## Önemli klinik uyarı
Bu yazılım eğitim ve yerel protokol geliştirme amaçlıdır; reçete yerine geçmez. CRRT/IHD/SLED, hızla değişen renal fonksiyon, yüksek MIC ve kompleks PK durumlarında dozlar yerel enfeksiyon/eczane protokolü ile doğrulanmalıdır. Y-site veri tabanı bilinçli olarak konservatiftir: "veri yok" = "uyumlu" değildir.

## Dosyalar
- `index.html` — arayüz
- `styles.css` — görünüm
- `app.js` — karar motoru
- `manifest.webmanifest` — PWA tanımı
- `sw.js` — offline cache
- `icons/` — uygulama ikonları
- `.nojekyll` — GitHub Pages'ın dosyaları doğrudan sunması için

## GitHub Pages ile yayınlama

1. GitHub'da yeni bir repository oluşturun. Örnek ad: `beta-lactam-icu`.
2. Bu ZIP içindeki **dosyaları klasör yapısını bozmadan repository köküne** yükleyin.
3. Commit edin.
4. Repository içinde **Settings → Pages** bölümüne girin.
5. `Build and deployment` altında kaynak olarak **Deploy from a branch** seçin.
6. Branch: `main`, Folder: `/(root)` seçin ve **Save** deyin.
7. GitHub Pages site adresini oluşturduğunda uygulamayı HTTPS üzerinden açın.
8. iPhone/iPad Safari'de: **Paylaş → Ana Ekrana Ekle**. Android/Chrome'da: **Install app / Ana ekrana ekle**.

> Service worker yalnız HTTPS veya localhost üzerinde çalışır. GitHub Pages HTTPS sağladığı için PWA offline cache devreye girer.

## Güncelleme
Kodda değişiklik yaptıktan sonra `sw.js` içindeki `CACHE` sürümünü örn. `beta-lactam-icu-v0.1.1` olarak artırmanız, eski cache'in temiz biçimde yenilenmesini kolaylaştırır.


## v0.2
Ayrıntılı disclaimer/kabul kaydı; PDF ve hemşire kartı kabul kilidi; el yazısı hasta kimliği ve protokol no alanları; BMI; CRRT effluent alanı; genişletilmiş renal karar mantığı.


## v0.3.2
- “PDF HAZIRLA” düğmesi Y-site uyumluluğu bölümünün hemen altına taşındı.
- PDF düğmesi daha büyük ve belirgin hale getirildi.
- Tarayıcı web sayfasını yazdırmak yerine tek A4’e özel protokol baskı sayfası oluşturulur.
- Normal renal fonksiyonda yanlış “yüksek doğrulama gereksinimi” uyarısı veren koşul düzeltildi.


## v0.3.2
- Geliştirici ve kurum bilgisi başlık altına eklendi.
- Uygulamanın en altına temel kaynakça eklendi.
- PDF çıktısına geliştirici/kurum bilgisi ve kısa kaynak notu eklendi.


## v0.3.2
- VV-ECMO ve VA-ECMO seçimi, ECMO akımı ve ECMO+RRT değerlendirmesi eklendi.
- Meropenem ve sefepim için ECMO-spesifik PK/PD karar uyarıları eklendi.
- Stabilite/infüzyon güvenliği paneli eklendi.
- CRRT/RRT uyarıları ekstrakorporeal destek ile entegre edildi.
- PDF çıktısına ECMO bilgisi eklendi.
- ECMO ve prolonged-infusion Y-site kaynakları kaynakçaya eklendi.


## v0.3.2
- Hemşire Uygulama Kartı görünürlüğü geri getirildi.
- Kart sonuç bölümünde belirgin, ayrı bir klinik panel olarak gösterilir.
- Disclaimer kabul edilmeden hemşire kartı açılamaz.
- Kart aç/kapat düğmesi eklendi.
- ECMO, CRRT, stabilite ve PDF özellikleri korunmuştur.


## v0.3.2
- CRRT seçildiğinde effluent dozu mL/kg/saat olarak zorunlu giriş alanıdır.
- Effluent değeri CRRT doz kararında kullanılır ve PDF çıktısında gösterilir.
- Cefiderokol CRRT doz eşikleri effluent mL/kg/saat tabanlıdır.
- Piperasilin/tazobaktam, meropenem ve sefepim CRRT değerlendirmesinde effluent değeri görünürdür.
- AKI (Akut Böbrek Hasarı) ve ARC (Artmış Renal Klirens) açılımları arayüz/uyarılara eklenmiştir.
