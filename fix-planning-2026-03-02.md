# Fix Planning - 2026-03-02

## Ringkasan Temuan

### Total Issues Berdasarkan Severity

| Severity | Total | Status |
| --- | ---: | --- |
| Critical | 0 | Tidak ada blocker fungsional saat ini |
| Major | 1 | Perlu difix minggu ini |
| Minor | 2 | Bisa dijadwalkan setelah major selesai |

### Area yang Terdampak

- `src/layouts/Layout.astro` (strategi font loading non-blocking vs kompatibilitas CSP strict)
- `PROGRESS.md` (sinkronisasi Known Issues/Pending Tasks terhadap kondisi repo aktual)
- `docs/technical_overview.md` (dokumentasi policy font loading dan image loading agar konsisten)

---

## Daftar Perbaikan per Prioritas

### Priority 1 (Critical)

- Tidak ada issue Critical berdasarkan review terbaru.

### Priority 2 (Major)

1. Hardening strategi font loading agar tetap non-blocking namun tidak bergantung pada inline handler yang rentan diblokir CSP strict.

### Priority 3 (Minor)

1. Sinkronkan `PROGRESS.md` agar Known Issues dan Pending Tasks sesuai kondisi aktual repo.
2. Dokumentasikan keputusan final font/image loading policy di `docs/technical_overview.md` agar reviewer berikutnya punya referensi tunggal.

---

## Detail per Issue

### ISSUE-MAJ-01 - Font loading belum robust untuk CSP strict

- **Deskripsi masalah**
  - Implementasi font saat ini menggunakan `media="print"` + inline `onload` (`this.media='all'`). Secara performa ini non-blocking, namun inline handler dapat diblokir saat CSP diperketat (tanpa allowance untuk inline script attributes), sehingga font custom berisiko tidak ter-apply.
- **Lokasi (file:line)**
  - `src/layouts/Layout.astro:64`
  - `src/layouts/Layout.astro:65`
- **Solusi yang direkomendasikan**
  - Pilih salah satu strategi final yang konsisten:
    - **Opsi A (disarankan, jangka menengah)**: migrasi ke self-hosted/managed font pipeline Astro agar tidak bergantung pada inline event attribute.
    - **Opsi B (jangka pendek)**: tetap pakai pattern sekarang, tetapi dokumentasikan requirement CSP secara eksplisit agar tidak menjadi silent regression saat policy security berubah.
  - Pertahankan `preconnect` dan `noscript` fallback untuk graceful degradation.
- **Contoh kode perbaikan (jika relevan)**

```astro
<!-- Opsi jangka pendek: pertahankan non-blocking + dokumentasi CSP requirement -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
  media="print"
  onload="this.media='all'"
/>
<noscript>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
  />
</noscript>
```

- **Estimasi waktu pengerjaan**
  - 45-90 menit (implementasi strategi + validasi `npm run build`).
- **Dependency**
  - Tidak bergantung issue lain, tetapi menjadi dependency untuk finalisasi dokumentasi policy (ISSUE-MIN-02).

### ISSUE-MIN-01 - Status `PROGRESS.md` tidak sinkron dengan kondisi repo

- **Deskripsi masalah**
  - Beberapa entri `Known Issues` dan `Pending Tasks` tidak lagi akurat terhadap kondisi aktual (contoh: `README outdated` masih tercatat padahal README sudah Astro, favicon sudah tersedia).
- **Lokasi (file:line)**
  - `PROGRESS.md:100`
  - `PROGRESS.md:106`
  - `PROGRESS.md:109`
- **Solusi yang direkomendasikan**
  - Update `Known Issues` dan `Pending Tasks` berbasis kondisi repo saat ini.
  - Hapus atau tandai selesai item yang sudah resolved.
- **Contoh kode perbaikan (jika relevan)**

```md
## Known Issues

| Issue | Status | Notes |
|-------|--------|-------|
| `ts(6133)` hint on font `onload` | Accepted | False-positive checker parsing HTML attribute. |
```

- **Estimasi waktu pengerjaan**
  - 10-20 menit.
- **Dependency**
  - Independen, bisa paralel dengan ISSUE-MAJ-01.

### ISSUE-MIN-02 - Policy font/image loading belum terdokumentasi sebagai acuan tunggal

- **Deskripsi masalah**
  - Keputusan teknis terbaru (`priority` untuk logo, tradeoff font loading) sudah ada di kode, tetapi belum dirapikan sebagai guideline eksplisit untuk mencegah drift pada PR berikutnya.
- **Lokasi (file:line)**
  - `docs/technical_overview.md`
  - `src/components/ui/Navbar.astro:29`
  - `src/layouts/Layout.astro:58`
- **Solusi yang direkomendasikan**
  - Tambahkan subsection singkat di `docs/technical_overview.md`:
    - Kapan gunakan `priority` pada Astro `Image`.
    - Strategi font loading yang dipilih beserta tradeoff CSP/performance.
    - Checklist verifikasi (`npm run build`) setelah perubahan head/assets.
- **Contoh kode perbaikan (jika relevan)**

```md
### Asset Loading Policy
- Navbar logo menggunakan `priority` karena berada di initial viewport.
- Font loading menggunakan strategi non-blocking yang dipilih tim dan dicatat bersama tradeoff CSP.
- Setiap perubahan di head/assets wajib lulus `npm run build`.
```

- **Estimasi waktu pengerjaan**
  - 15-30 menit.
- **Dependency**
  - Sebaiknya setelah ISSUE-MAJ-01 agar dokumen mencerminkan keputusan final.

---

## Execution Plan

### Urutan Pengerjaan Berdasarkan Dependency

1. `ISSUE-MAJ-01` - finalisasi strategi font loading robust CSP di `Layout.astro`.
2. `ISSUE-MIN-02` - dokumentasikan policy final font/image loading di `docs/technical_overview.md`.
3. `ISSUE-MIN-01` - sinkronisasi `PROGRESS.md` agar status issue/task akurat.
4. Regression gate - jalankan `npm run build` dan pastikan pipeline tetap hijau.

### Estimasi Timeline Keseluruhan

- Total estimasi: **80-155 menit**.
- Breakdown:
  - Step 1: 45-90 menit
  - Step 2: 15-30 menit
  - Step 3: 10-20 menit
  - Step 4 (verification): 10-15 menit

### Milestone & Checkpoint

- **Milestone A - CSP-Robust Font Strategy**
  - Checkpoint: strategi font loading final dipilih, diimplementasi, dan tidak menghasilkan regresi build.
- **Milestone B - Policy Documentation Locked**
  - Checkpoint: guideline font/image loading tercatat jelas di `docs/technical_overview.md`.
- **Milestone C - Progress Tracking Accurate**
  - Checkpoint: `PROGRESS.md` mencerminkan kondisi aktual issue dan pending tasks.
- **Milestone D - Ready to Merge**
  - Checkpoint: `npm run build` hijau, tidak ada issue Major yang tersisa.
