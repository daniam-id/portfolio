# Fix Planning - 2026-03-01

## Ringkasan Temuan

### Total Issues Berdasarkan Severity

- **Critical:** 2
- **Major:** 4
- **Minor:** 2
- **Total:** 8

### Area yang Terdampak

- **SEO metadata & discoverability:** `src/layouts/Layout.astro`, `astro.config.mjs`, `public/robots.txt`
- **Navigasi lintas halaman:** `src/config/site.ts`, `src/components/ui/Navbar.astro`, `scripts/validate-nav.mjs`
- **Quality gate (lint/CI):** `scripts/download-icons.js`, `eslint.config.mjs`
- **Type safety & URL consistency blog:** `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`

---

## Daftar Perbaikan per Prioritas

### Priority 1 (Critical)

1. Canonical/OG/Twitter URL masih hardcoded ke root domain untuk semua halaman.
2. `validate-nav` tidak memvalidasi format `/#id` sehingga ada blind spot validasi anchor.

### Priority 2 (Major)

1. Pola `href` nav campuran (`#...` vs `/#...`) memicu perilaku navigasi tidak konsisten dari route `/blog/*`.
2. Lint gagal karena `require()` di `scripts/download-icons.js` (rule `no-require-imports`).
3. CTA contact masih hardcoded `#contact` di navbar, memperkuat issue lintas-halaman.
4. Inkonistensi trailing slash pada route blog (`/blog` vs `/blog/`).

### Priority 3 (Minor)

1. Penggunaan `any` di list post blog menurunkan type safety.
2. Belum ada checklist regression ringan untuk skenario nav lintas-halaman + metadata SEO per route.

---

## Detail per Issue

### C1 - Canonical/OG/Twitter URL tidak dinamis per route

- **Deskripsi masalah**
  - Metadata URL (`canonical`, `og:url`, `twitter:url`) selalu menunjuk root domain, termasuk saat halaman blog/detail blog dirender.
- **Lokasi**
  - `src/layouts/Layout.astro:33`
  - `src/layouts/Layout.astro:37`
  - `src/layouts/Layout.astro:47`
- **Solusi yang direkomendasikan**
  - Hitung URL absolut dari path request/page saat render layout.
  - Gunakan URL dinamis yang konsisten untuk canonical, `og:url`, dan `twitter:url`.
- **Contoh kode perbaikan**

```astro
---
const siteUrl = "https://adamdev.web.id";
const canonicalUrl = new URL(Astro.url.pathname, siteUrl).toString();
---
<link rel="canonical" href={canonicalUrl} />
<meta property="og:url" content={canonicalUrl} />
<meta property="twitter:url" content={canonicalUrl} />
```

- **Estimasi waktu pengerjaan**
  - 45-60 menit (implementasi + verifikasi build + cek output HTML).
- **Dependency**
  - Tidak tergantung issue lain (bisa dikerjakan paling awal).

### C2 - Validator nav tidak meng-cover `/#id`

- **Deskripsi masalah**
  - Regex validator saat ini hanya menangkap `#id`, sehingga `/#projects` dan `/#tech` tidak ikut divalidasi.
- **Lokasi**
  - `scripts/validate-nav.mjs:21`
  - `src/config/site.ts:43`
  - `src/config/site.ts:44`
- **Solusi yang direkomendasikan**
  - Perluas regex agar mendukung dua pola: `#id` dan `/#id`.
  - Normalisasi hasil ke id murni (`projects`, `tech`) sebelum dibandingkan.
- **Contoh kode perbaikan**

```js
const hrefRegex = /href:\s*["'](?:\/?#)([a-zA-Z0-9_-]+)["']/g;
```

- **Estimasi waktu pengerjaan**
  - 30-45 menit (update regex + test `npm run validate:nav`).
- **Dependency**
  - Tidak tergantung issue lain, tapi sebaiknya selesai sebelum M1.

### M1 - Pola nav campuran bikin UX lintas-halaman tidak konsisten

- **Deskripsi masalah**
  - Link `#about`/`#services` bekerja baik di homepage, tapi dari `/blog/*` mengarah ke hash di halaman blog yang tidak punya target section.
- **Lokasi**
  - `src/config/site.ts:41`
  - `src/config/site.ts:42`
  - `src/components/ui/Navbar.astro:32`
  - `src/components/ui/Navbar.astro:130`
- **Solusi yang direkomendasikan**
  - Samakan strategi link section menjadi absolute-home anchor (`/#about`, `/#services`, dst), atau normalisasi runtime berdasarkan route aktif.
  - Pilih satu strategi dan terapkan konsisten pada desktop/mobile nav.
- **Contoh kode perbaikan**

```ts
// src/config/site.ts
{ name: "About", href: "/#about" },
{ name: "Services", href: "/#services" },
```

- **Estimasi waktu pengerjaan**
  - 45-75 menit (refactor link + regression check nav desktop/mobile).
- **Dependency**
  - Sebaiknya setelah C2 agar validator sudah siap meng-cover format final.

### M2 - Lint failure karena `require()` pada script `.js`

- **Deskripsi masalah**
  - `npm run lint` gagal akibat `@typescript-eslint/no-require-imports` pada `scripts/download-icons.js`.
- **Lokasi**
  - `scripts/download-icons.js:1`
  - `scripts/download-icons.js:2`
  - `scripts/download-icons.js:3`
  - `eslint.config.mjs:15`
- **Solusi yang direkomendasikan**
  - Opsi A (direkomendasikan): rename file menjadi `.cjs`.
  - Opsi B: migrasi script ke ESM import di `.js`.
- **Contoh kode perbaikan**

```bash
mv scripts/download-icons.js scripts/download-icons.cjs
```

- **Estimasi waktu pengerjaan**
  - 20-30 menit (rename/update referensi + re-run lint).
- **Dependency**
  - Independen; bisa paralel dengan M1.

### M3 - CTA contact hardcoded `#contact` di navbar

- **Deskripsi masalah**
  - CTA "Let's Talk" masih hardcoded `#contact`, sehingga masalah lintas-halaman tetap ada walau sebagian nav sudah absolut.
- **Lokasi**
  - `src/components/ui/Navbar.astro:42`
  - `src/components/ui/Navbar.astro:141`
- **Solusi yang direkomendasikan**
  - Konsistenkan dengan strategi M1 (`/#contact` atau normalisasi route-aware).
- **Contoh kode perbaikan**

```astro
<a href="/#contact">Let's Talk</a>
```

- **Estimasi waktu pengerjaan**
  - 15-25 menit.
- **Dependency**
  - Tergantung keputusan strategi pada M1.

### M4 - Inkonistensi trailing slash route blog

- **Deskripsi masalah**
  - Link balik dari detail article memakai `/blog`, sedangkan list/detail lain konsisten dengan trailing slash.
- **Lokasi**
  - `src/pages/blog/[slug].astro:25`
  - `src/pages/blog/index.astro:35`
- **Solusi yang direkomendasikan**
  - Konsistenkan ke `/blog/` untuk mengurangi redirect/duplikasi URL variant.
- **Contoh kode perbaikan**

```astro
<a href="/blog/">Kembali ke Blog</a>
```

- **Estimasi waktu pengerjaan**
  - 10-15 menit.
- **Dependency**
  - Independen.

### m1 - `any` di map posts blog

- **Deskripsi masalah**
  - `post: any` menghilangkan benefit type checking pada template listing.
- **Lokasi**
  - `src/pages/blog/index.astro:33`
- **Solusi yang direkomendasikan**
  - Gunakan type `CollectionEntry<"blog">` yang sudah tersedia dari `astro:content`.
- **Contoh kode perbaikan**

```ts
posts.map((post: CollectionEntry<"blog">) => (
```

- **Estimasi waktu pengerjaan**
  - 10-20 menit.
- **Dependency**
  - Independen.

### m2 - Tambah regression checklist untuk nav + SEO metadata

- **Deskripsi masalah**
  - Belum ada checklist eksplisit untuk mencegah regresi pada metadata URL per route dan nav lintas-halaman.
- **Lokasi**
  - `AGENTS.md` (panduan verifikasi)
  - `PROGRESS.md` (tracking pekerjaan)
- **Solusi yang direkomendasikan**
  - Tambah checklist singkat: verifikasi canonical/og pada `/`, `/blog/`, `/blog/[slug]/`, serta klik nav dari blog ke section home.
- **Contoh kode perbaikan**

```md
- [ ] Cek canonical/og:url per route utama
- [ ] Cek link nav section dari /blog/ dan /blog/[slug]/
```

- **Estimasi waktu pengerjaan**
  - 20-30 menit.
- **Dependency**
  - Sebaiknya setelah C1, M1, M3 selesai.

---

## Execution Plan

### Urutan Pengerjaan Berdasarkan Dependency

1. **C1** - Dynamic canonical/OG/Twitter URL.
2. **C2** - Perbaiki regex validator nav untuk `#id` dan `/#id`.
3. **M1** - Standarisasi pola nav links lintas-halaman.
4. **M3** - Selaraskan CTA contact dengan strategi nav final.
5. **M2** - Perbaiki lint failure script icons (`.cjs` atau ESM).
6. **M4** - Konsistensi trailing slash blog.
7. **m1** - Hapus `any` pada blog list typing.
8. **m2** - Tambah regression checklist dokumentasi.

### Estimasi Timeline Keseluruhan

- **Total estimasi aktif:** 3.5 - 5.0 jam.
- **Dengan buffer review/verifikasi:** 1 hari kerja.

### Milestone & Checkpoint

#### Milestone 1 - SEO & Validation Foundation
- Scope: C1 + C2
- Checkpoint:
  - `npm run build` pass
  - cek output page `/`, `/blog/`, `/blog/[slug]/` memiliki canonical/og:url benar

#### Milestone 2 - Navigation Reliability
- Scope: M1 + M3 + M4
- Checkpoint:
  - klik nav dari homepage dan `/blog/*` menuju section/home berjalan konsisten
  - tidak ada dead anchor behavior

#### Milestone 3 - Quality Gate Stabilization
- Scope: M2 + m1
- Checkpoint:
  - `npm run lint` pass
  - `npm run build` tetap pass

#### Milestone 4 - Guardrail & Documentation
- Scope: m2
- Checkpoint:
  - checklist regresi terdokumentasi
  - verifikasi final command set terdokumentasi di progress notes

---

## Definition of Done (DoD)

- `npm run lint` **pass** tanpa error.
- `npm run build` **pass** (termasuk `validate:nav` dan `test:links`).
- Metadata URL per route utama valid dan tidak hardcoded ke homepage.
- Navigasi section dari route blog tidak lagi menghasilkan hash mati.
- Tidak ada `any` yang tersisa pada flow listing blog baru.
