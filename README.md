# English Path

Aplikasi belajar bahasa Inggris gratis, dari **A1 Basic** sampai **C2 Expert**, dengan penjelasan dalam bahasa Indonesia.

**Buka aplikasinya:** https://iiddon.github.io/english-study/

- 36 pelajaran tata bahasa, masing-masing 3 babak × 20 soal = 2.160 soal (pilihan ganda, isian, benar/salah, susun kalimat), dengan bintang per babak
- 550+ kosakata bertema untuk flashcard, 18 bacaan, 12 percakapan, 72 kalimat latihan berbicara
- Bacaan dan latihan berbicara di setiap level (ucapan dinilai otomatis di Chrome)
- Ulangan pintar (spaced repetition) untuk soal yang salah dan flashcard
- Percakapan interaktif di setiap level (kafe, hotel, telepon, wawancara kerja, negosiasi)
- Misi harian, kata hari ini, XP, streak, lencana, dan game cocokkan kata
- Maskot Bubu yang bereaksi saat menjawab, kartu hasil dan sertifikat bernama untuk dibagikan
- Simulasi tes berwaktu (tata bahasa, membaca, mendengar) dengan perkiraan level CEFR
- Grafik XP 7/30 hari dan peta kemampuan per skill di Profil
- Kataku: kamus pribadi untuk menyimpan, mencari, dan melatih kata
- Koin & Lemari Bubu: jawab soal untuk dapat koin, dandani Bubu dengan 72 kostum (12 barang khusus terbuka lewat prestasi)
- Mode gelap (otomatis mengikuti perangkat, atau pilih di Profil)
- Bisa dipasang di layar utama HP dan jalan tanpa internet
- Progres tersimpan di perangkat; bisa dipindahkan lewat kode progres di menu Profil

Menemukan soal yang keliru? Ketuk **"Laporkan"** setelah menjawab, atau [buat issue](https://github.com/iiddon/english-study/issues/new).

## Pengembangan

Kode sumber ada di `src/`, lalu digabung menjadi satu `index.html`:

```
python3 build.py              # src/* → index.html
node tests/validate.js        # periksa jumlah soal dan kunci jawaban
node tests/smoke.js           # uji alur aplikasi di Chrome (butuh Playwright)
node tools/make-icons.js      # buat ulang ikon di icons/
```

Naikkan `VERSION` di `sw.js` setiap rilis agar pengguna mendapat versi terbaru.
