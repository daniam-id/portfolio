# UX Improvements Plan

> Meningkatkan User Experience (UX) dengan konten yang lebih relevan, visualisasi tech stack, dan social proof.

---

## 📋 Summary

| Area | Change |
|------|--------|
| **Projects** | Update data dengan 2 real projects + 2 realistic dummy projects (total 4) |
| **Tech Stack** | Tambahkan icons menggunakan Devicon (SVG/CDN) |
| **About Stats** | Update stats: "1+ Years Exp", "2+ Projects Done" |
| **Testimonials** | Tambahkan section Testimonials dengan 1 real + 2 placeholder |

---

## 🎯 Proposed Changes

### Component: Projects Section

#### [MODIFY] [projects-section.tsx](file:///home/dnm/project/portfolio/src/components/sections/projects-section.tsx)

- Update `projects` array data:
    1. **Real Project 1** (TBD: User to fill details later)
    2. **Real Project 2** (TBD: User to fill details later)
    3. **Dummy Project 1**: "Travel Journal App" (React Native, Expo, Firebase)
    4. **Dummy Project 2**: "Finance Tracker" (Vue.js, Supabase, Tailwind)
- Layout adjustment: Grid 2x2 untuk 4 projects

---

### Component: Tech Stack Section

#### [MODIFY] [tech-stack-section.tsx](file:///home/dnm/project/portfolio/src/components/sections/tech-stack-section.tsx)

- Integrasi **Devicon** (via CDN atau SVG import)
- Update `stack` array untuk include icon URL/Class
- Layout: Grid card dengan icon di atas/samping nama tech
- Hover effect: Icon berwarna saat hover (grayscale default)

**Example Data Structure:**
```typescript
{
  name: "React",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
}
```

---

### Component: About Section

#### [MODIFY] [about-section.tsx](file:///home/dnm/project/portfolio/src/components/sections/about-section.tsx)

- Update stats numbers:
    - `2+` -> `1+` Years Experience
    - `10+` -> `2+` Projects Done
- Tambahkan **Testimonials** subsection di bawah stats
- Structure Testimonials:
    - Quote text
    - Client Name
    - Role/Company
    - Avatar (optional)

---

## 📦 Dependencies

- No new npm packages required (Devicon via CDN)

---

## 🔧 File Changes Summary

| Action | File | Priority |
|--------|------|----------|
| MODIFY | `src/components/sections/projects-section.tsx` | P1 |
| MODIFY | `src/components/sections/tech-stack-section.tsx` | P1 |
| MODIFY | `src/components/sections/about-section.tsx` | P2 |

---

## ✅ Verification Plan

### Visual Check
- [ ] Projects section menampilkan 4 items dengan layout rapi
- [ ] Tech stack icons muncul dan load dengan benar (tidak broken image)
- [ ] Stats updated sesuai request
- [ ] Testimonials section render dengan benar
- [ ] Responsive check di mobile

---

## 🚀 Implementation Order

1. **Update Projects**: Masukkan data dummy & structure real projects
2. **Update Tech Stack**: Implementasi Devicon icons
3. **Update About**: Ubah stats & tambah testimonials placeholder
