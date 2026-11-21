# English Path

Aplikasi belajar bahasa Inggris gratis, dari **A1 Basic** sampai **C2 Expert**, dengan penjelasan dalam bahasa Indonesia.

**Buka aplikasinya:** https://iiddon.github.io/english-study/

- 36 pelajaran tata bahasa, masing-masing 20 soal (pilihan ganda, isian, benar/salah, susun kalimat)
- Bacaan dan latihan berbicara di setiap level (ucapan dinilai otomatis di Chrome)
- Ulangan pintar (spaced repetition) untuk soal yang salah dan flashcard
- Misi harian, XP, streak, lencana, dan game cocokkan kata
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
