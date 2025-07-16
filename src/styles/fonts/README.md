# Font Assets

## Catatan Penggunaan Font

Pada project ini, saya menggunakan font eksternal yang diunduh secara manual dan tidak menggunakan font internal bawaan `next/font/google` karena terdapat masalah saat development yang mana font tidak terdeteksi oleh next.js. Oleh karena itu, mohon dimaklumkan bahwa implementasi font menggunakan pendekatan manual dengan file `.woff2` yang telah diunduh.

## Font yang Digunakan

### Poppins
- **poppins-regular.woff2** - Font weight: 400 (Regular)
- **poppins-bold.woff2** - Font weight: 700 (Bold)

### Inter
- **inter-regular.woff2** - Font weight: 400 (Regular)
- **inter-bold.woff2** - Font weight: 700 (Bold)

## Implementasi

Font ini akan diimplementasikan menggunakan CSS `@font-face` di file `globals.css` untuk memastikan kompatibilitas dan performa yang optimal.

## Sumber Font

Semua font diunduh dari Google Fonts CDN (fonts.gstatic.com) dengan format `.woff2` untuk performa optimal.
