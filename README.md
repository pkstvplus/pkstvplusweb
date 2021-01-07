# PKS TV+

[![Netlify Status](https://api.netlify.com/api/v1/badges/40f42642-37f1-4101-8972-2fc255c054ee/deploy-status)](https://app.netlify.com/sites/pkstvplus/deploys)
![Daily Build](https://github.com/pkstvplus/pkstvplusweb/workflows/Daily%20Build/badge.svg)

## FAQ

### Mengapa ada aplikasi ini?
YouTube memang merupakan media publikasi yang sangat efektif, namun algoritma YouTube memungkinkan kita untuk hanya menikmati video-video yang sebelumnya kita tonton/like. Sehingga konten-konten edukatif dari PKS TV (dan lebih-lebih lagi, konten PKS TV lokal) kurang begitu mendapatkan perhatian dari audience. Sementara, developer merasa bahwa dalam rangka memperluas dakwah digital, sekaligus mengedukasi umat dan masyarakat (cieeeh) khususnya edukasi politik, penting konten-konten semacam ini perlu di*leverage* sehingga tidak tenggelam ditelan lautan konten YouTube yang campur aduk dengan konten-konten lainnya termasuk yang mengandung hoax dan misinformasi.

### Apa dibalik nama PKS TV+?
Terinspirasi dari layanan streaming Apple TV+ dan Disney+. Ya boleh lah dianggap Disney+ tapi isinya konten-konten PKS.

### Apa bedanya PKS TV sama PKS TV+?
Seperti bedanya Apple TV (hardware) dan Apple TV+ (layanan streaming). PKS TV itu humasnya DPP (dan DPW, dan DPD, dst) PKS, PKS TV+ itu aplikasi aggregator konten-konten PKS TV.

### Aplikasi *aggregator*? Sejenis buaya kah?
~itu alligator~ 🐊

Aplikasi aggregator itu artinya aplikasi yang mengumpulkan konten-konten dari internet di satu tempat. Tahu Google News, MSN News, atau aplikasi BaBe kan? Itu contoh aplikasi aggregator untuk berita. Nah PKS TV ini aggregator untuk video-video yang sudah ada di Youtube, yang diupload oleh PKS TV.

### Terus, maksudnya tanda plus? Apa ada plus-plusnya gitu?
Iya. Selain konten-konten PKS TV, kita juga mengaggregasi konten dari fraksi, konten-konten lokal, vlog dari para tokoh-tokoh PKS seperti Ust. Hidayat Nur Wahid, Mardani Ali Sera, Ledia Hanifa, Gamal Albinsaid, dan lain-lain. Selain itu juga konten tausyiah, nasyid, berita terkini, banyak deh!

### Mengapa logonya beda sama PKS TV?
Untuk menandai bahwa aplikasi ini bukan aplikasi resmi PKS TV, DPP PKS atau DPW/DPD di bawahnya. Aplikasi ini unofficial, murni inisiatif ~kader~ simpatisan. (itulah hebatnya PKS, sampai simpatisan aja rela bela-belain bikin aplikasi macam ini.)

### Bikin aplikasi kaya gini, dibayar berapa sama DPP?
Dibayar pake *"syukron jazakallah akhy..."*

Karena ini project iseng-iseng developer jadi belum mau dimonetisasi dulu. Nanti setelah fitur-fiturnya siap publish, ke depannya akan ada link untuk infaq/donasi.

Tapi juga ga menutup kemungkinan kalo ada orang DPP yang baca file README.md ini, mau bantu biar aplikasi ini lebih bagus. Silahkan hubungi developer [di sini.](https://wa.me/6285349672828)

### Rencana fiturnya apa saja?
- Video
  - PKS TV
  - PKS TV Daerah
  - Fraksi PKS
  - Tokoh-tokoh PKS
  - Taujih Ulama'
  - PKS Muda
  - Live Makkah/Madinah
  - Nasyid/Hiburan Islami
- Berita
  - Press Release
  - Berita
  - Original Content
  
### Oh iya, developer kader bukan? Aktif di DPD mana?
Simpatisan. S-I-M-P-A-T-I-S-A-N.

Kalo mau dibilang bukan kader, karena tidak punya KTA (dan berkali-kali disuruh MR bikin KTA, nggak pernah mau dan gak akan bikin dalam waktu dekat). Kalau mau dibilang kader, karena aktif di kira-kira 80% agenda dalam lingkup DPD PKS (dengan paksaan MR).

Aktif di DPD PKS Kotawaringin Timur, Kalimantan Tengah.

## Informasi Teknis
Aplikasi ini merupakan sebuah aplikasi web berbasis [Node.js](https://nodejs.org/en/), yang mengadopsi prinsip [JAMStack](https://jamstack.org/). Dibangun menggunakan [Eleventy](https://11ty.dev/), salah satu generator situs statik paling tersohor di jagad per-situs-statik-an dan banyak dipakai oleh para developer web. Tampilan antarmukanya didesain dengan menggunakan komponen dari [AMP](https://amp.dev/), alasannya supaya ringan dan kencang khususnya bila diakses dari hp-hp murah para kader yang mereknya siomay, mito atau apalah itu. Selain itu juga memanfaatkan [TailwindCSS](https://tailwindcss.com/). Dihosting \*gratis\* di [Netlify](https://netlify.com/).

### Panduan build di lokal
Silahkan clone dulu repo ini:
```
git clone https://github.com/pkstvplus/pkstvplusweb.git
```
atau (GitHub CLI)
```
gh repo clone pkstvplus/pkstvplusweb
```
kemudian install semua dependensi
```
npm install
```
atau (yarn)
```
yarn
```
kemudian jalankan perintah:
```
npm start
```
kemudian buka [localhost:8080](http://localhost:8080)

### Ingin berkontribusi?
Silahkan kirim pull request ya 😁
