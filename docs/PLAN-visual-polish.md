# Visual Polish Improvements Plan

> Meningkatkan profesionalisme portfolio dengan menambahkan Navigation, Footer, Scroll Animations, dan Loading States.

---

## 📋 Summary

| Aspect | Decision |
|--------|----------|
| **Navbar** | Floating + Hide-on-scroll (transparan, blur backdrop, hide saat scroll down, show saat scroll up) |
| **Footer** | Simple (copyright + social icons) |
| **Scroll Animations** | Subtle (fade-in halus, almost invisible) |
| **Loading States** | Skeleton loading untuk images |

---

## 🎯 Proposed Changes

### Component: Navigation

#### [NEW] [Navbar.tsx](file:///home/dnm/project/portfolio/src/components/ui/navbar.tsx)

- Floating navbar dengan `fixed top-0` positioning
- Blur backdrop effect (`backdrop-blur-md bg-background/80`)
- Hide-on-scroll behavior menggunakan `useState` + `useEffect` untuk detect scroll direction
- Logo/brand di kiri, navigation links di tengah, CTA button di kanan
- Mobile responsive dengan hamburger menu
- Smooth transition untuk show/hide (`translate-y-0` ↔ `-translate-y-full`)

**Structure:**
```
Navbar
├── Logo/Brand
├── Nav Links (Home, About, Services, Projects, Contact)
├── CTA Button (Book a Call / Let's Talk)
└── Mobile Menu (hamburger toggle)
```

---

### Component: Footer

#### [NEW] [Footer.tsx](file:///home/dnm/project/portfolio/src/components/ui/footer.tsx)

- Simple layout: Copyright text + Social Icons
- Social icons: GitHub, LinkedIn, Twitter/X, Instagram (configurable)
- Menggunakan `lucide-react` untuk icons
- Subtle border top sebagai separator
- Responsive: stack vertikal di mobile

**Structure:**
```
Footer
├── Copyright: "© 2026 [Name]. All rights reserved."
└── Social Icons: [GitHub] [LinkedIn] [Twitter] [Instagram]
```

---

### Component: Scroll Animations

#### [NEW] [motion-wrapper.tsx](file:///home/dnm/project/portfolio/src/components/ui/motion-wrapper.tsx)

- Reusable wrapper component menggunakan Framer Motion
- Animasi: `opacity: 0 → 1` dengan `transition: { duration: 0.6, ease: "easeOut" }`
- Trigger: `whileInView` dengan `viewport: { once: true, margin: "-100px" }`
- Optional: slight `translateY` untuk subtle slide-up effect

**Usage:**
```tsx
<MotionWrapper>
  <AboutSection />
</MotionWrapper>
```

#### [MODIFY] [index.astro](file:///home/dnm/project/portfolio/src/pages/index.astro)

- Wrap setiap section dengan `MotionWrapper`
- Tambahkan delay stagger untuk visual flow

---

### Component: Loading States

#### [NEW] [image-skeleton.tsx](file:///home/dnm/project/portfolio/src/components/ui/image-skeleton.tsx)

- Skeleton placeholder saat image loading
- Animated pulse effect (`animate-pulse`)
- Aspect ratio matching untuk prevent layout shift
- Fade transition dari skeleton ke actual image

#### [MODIFY] Sections dengan images

| File | Changes |
|------|---------|
| `about-section.tsx` | Replace `<img>` dengan `<ImageWithSkeleton>` |
| `projects-section.tsx` | Replace `<img>` dengan `<ImageWithSkeleton>` |
| `hero-04.tsx` | Replace `<img>` dengan `<ImageWithSkeleton>` |

---

### Layout Integration

#### [MODIFY] [Layout.astro](file:///home/dnm/project/portfolio/src/layouts/Layout.astro)

- Import dan render `<Navbar />` di atas `<slot />`
- Import dan render `<Footer />` di bawah `<slot />`
- Tambahkan `pt-20` pada body untuk navbar offset (optional, bisa juga transparent overlay)

---

## 📦 Dependencies

| Package | Purpose | Status |
|---------|---------|--------|
| `framer-motion` | Scroll animations | ✅ Check if installed |

---

## 🔧 File Changes Summary

| Action | File | Priority |
|--------|------|----------|
| CREATE | `src/components/ui/navbar.tsx` | P0 |
| CREATE | `src/components/ui/footer.tsx` | P0 |
| CREATE | `src/components/ui/motion-wrapper.tsx` | P1 |
| CREATE | `src/components/ui/image-skeleton.tsx` | P2 |
| MODIFY | `src/layouts/Layout.astro` | P0 |
| MODIFY | `src/pages/index.astro` | P1 |
| MODIFY | `src/components/sections/about-section.tsx` | P2 |
| MODIFY | `src/components/sections/projects-section.tsx` | P2 |
| MODIFY | `src/components/ui/hero-04.tsx` | P2 |

---

## ✅ Verification Plan

### Visual Check
- [ ] Navbar visible dan hide/show saat scroll
- [ ] Navbar blur effect bekerja
- [ ] Mobile menu berfungsi
- [ ] Footer render dengan benar
- [ ] Social links clickable
- [ ] Scroll animations trigger saat section masuk viewport
- [ ] Skeleton loading muncul sebelum image load

### Technical Check
- [ ] No hydration errors di console
- [ ] No layout shift (CLS) saat images load
- [ ] Responsive di mobile/tablet/desktop
- [ ] Dark mode compatible

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (jika available)

---

## 🚀 Implementation Order

```
Phase 1: Core Layout
├── 1.1 Create Navbar component
├── 1.2 Create Footer component
└── 1.3 Integrate ke Layout.astro

Phase 2: Animations
├── 2.1 Install/verify framer-motion
├── 2.2 Create MotionWrapper component
└── 2.3 Apply ke sections di index.astro

Phase 3: Loading States
├── 3.1 Create ImageWithSkeleton component
└── 3.2 Replace <img> tags di sections
```

---

## ⚠️ Notes

- Navbar perlu `client:load` directive karena ada interactivity (scroll detection, mobile menu)
- Footer bisa static (no hydration needed)
- MotionWrapper perlu `client:visible` untuk optimal performance
- Pastikan test di dark mode juga
