# Roadmap

Roadmap ini menggambarkan arah pengembangan Go POS Playground saat ini. Prioritas dapat berubah berdasarkan hasil pembelajaran, kebutuhan operasional, dan temuan selama pengembangan.

## ✅ Completed

- Autentikasi JWT dengan sliding session
- Otorisasi berbasis role dan manajemen pengguna
- Manajemen barang, pelanggan, supplier, dan master data
- Transaksi penjualan, pembelian, pembatalan, dan pengelolaan stok atomik
- Piutang dan pembayaran piutang
- Dashboard dan rekap harian berbasis zona waktu Asia/Jakarta
- Export laporan bulanan Excel multi-sheet dan laporan PDF
- Frontend loader refactor berbasis route aktif
- Pemisahan state dan operasi ke domain composables
- Seed generator untuk data demo yang dapat direproduksi

## 🟨 In Progress

- Migrasi dan cleanup TypeScript pada frontend
- Cleanup activity tracker dan lifecycle sliding session
- Perluasan automated test untuk business flow utama
- Cleanup kode frontend lama setelah migrasi Nuxt

## ⬜ Planned

- Backend pagination
- Pencarian, sorting, dan filtering di API
- Refresh token rotation atau session server-side
- Audit log aktivitas pengguna
- Pemulihan data yang menggunakan soft delete
- Benchmark dan performance baseline
- Docker dan deployment configuration
- Redis untuk caching atau session support
- Background job atau queue untuk proses berat

## Not Planned Yet

Elasticsearch dan komponen infrastruktur lain belum menjadi prioritas sampai kebutuhan pencarian, skala data, atau hasil benchmark menunjukkan alasan yang jelas untuk menambahkannya.
