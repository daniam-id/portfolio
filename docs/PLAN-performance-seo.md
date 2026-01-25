# Performance & SEO Improvements Plan

> Meningkatkan performa loading dan optimasi SEO untuk portfolio Adam Daniam, dengan fokus pada keywords Web & AI Development.

---

## 📋 Summary

| Area | Change |
|------|--------|
| **SEO Meta Tags** | Update title, description, keywords, canonical URL |
| **Open Graph** | Generate OG Image + tambahkan OG meta tags |
| **Structured Data** | JSON-LD untuk Person, WebSite, ProfilePage |
| **Performance** | Image optimization, font loading, prefetch/preload |

---

## 🎯 Proposed Changes

### SEO: Meta Tags Update

#### [MODIFY] [Layout.astro](file:///home/dnm/project/portfolio/src/layouts/Layout.astro)

- Update `<title>` default: "Adam Daniam - Web & AI Developer"
- Add `<meta name="description">`: "Adam Daniam is a creative Web Developer and AI Solutions specialist. Building modern, fast, and intelligent digital experiences."
- Add `<meta name="keywords">`: "web developer, ai developer, react developer, nextjs developer, ai solutions, web development indonesia"
- Add `<meta name="author">`: "Adam Daniam"
- Add `<link rel="canonical">` (placeholder URL)

---

### SEO: Open Graph & Twitter Cards

#### [MODIFY] [Layout.astro](file:///home/dnm/project/portfolio/src/layouts/Layout.astro)

Add OG meta tags:
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Adam Daniam - Web & AI Developer" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://yourdomain.com" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Adam Daniam - Web & AI Developer" />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="/og-image.png" />
```

#### [NEW] [og-image.png](file:///home/dnm/project/portfolio/public/og-image.png)

- Generate using `generate_image` tool
- Style: Modern, dark theme, dengan nama "Adam Daniam" + tagline
- Size: 1200x630 (standard OG image)

---

### SEO: Structured Data (JSON-LD)

#### [MODIFY] [Layout.astro](file:///home/dnm/project/portfolio/src/layouts/Layout.astro)

Add JSON-LD script in `<head>`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Adam Daniam",
      "jobTitle": "Web & AI Developer",
      "url": "https://yourdomain.com",
      "sameAs": ["https://github.com/...", "https://linkedin.com/in/..."]
    },
    {
      "@type": "WebSite",
      "name": "Adam Daniam Portfolio",
      "url": "https://yourdomain.com"
    },
    {
      "@type": "ProfilePage",
      "mainEntity": { "@id": "#person" }
    }
  ]
}
```

---

### Performance: Image Optimization

#### [MODIFY] Image Components

- Semua `<img>` tags sudah pakai `ImageWithSkeleton` (lazy loading via state)
- Tambahkan `loading="lazy"` attribute ke semua images
- Tambahkan `decoding="async"` untuk non-critical images

---

### Performance: Font Loading

#### [MODIFY] [Layout.astro](file:///home/dnm/project/portfolio/src/layouts/Layout.astro)

- Add `<link rel="preload">` untuk Geist Sans & Geist Mono fonts
- Use `font-display: swap` untuk prevent FOIT (Flash of Invisible Text)

---

### Performance: Prefetch & Preload

#### [MODIFY] [Layout.astro](file:///home/dnm/project/portfolio/src/layouts/Layout.astro)

- Preload critical CSS
- Preconnect ke external domains (CDN, Unsplash, etc.):
  ```html
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="preconnect" href="https://images.unsplash.com" />
  <link rel="preconnect" href="https://cdn.simpleicons.org" />
  ```

---

## 📦 Dependencies

- No new npm packages required

---

## 🔧 File Changes Summary

| Action | File | Priority |
|--------|------|----------|
| GENERATE | `public/og-image.png` | P0 |
| MODIFY | `src/layouts/Layout.astro` | P0 |
| MODIFY | `src/components/ui/image-with-skeleton.tsx` | P1 |

---

## ✅ Verification Plan

### SEO Check
- [ ] Meta tags visible di `<head>` saat inspect element
- [ ] OG Image muncul saat di-share (test via [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] JSON-LD valid (test via [Google Rich Results Test](https://search.google.com/test/rich-results))

### Performance Check
- [ ] Lighthouse score > 90 untuk Performance
- [ ] No font loading flash (FOIT)
- [ ] Images lazy loaded (check Network tab)

---

## 🚀 Implementation Order

1. **Generate OG Image**: Buat gambar untuk social sharing
2. **Update Layout.astro**: Add meta tags, OG tags, JSON-LD, preconnect
3. **Optimize Images**: Add loading/decoding attributes
4. **Test**: Run Lighthouse & validate structured data
