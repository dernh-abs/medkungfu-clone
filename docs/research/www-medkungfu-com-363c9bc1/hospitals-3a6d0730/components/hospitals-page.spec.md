# MedKungFu /hospitals Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/hospitals-3a6d0730/rendered.html`
**Route:** `src/app/hospitals/page.tsx`
**Images:** `public/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-*.jpg` (7 downloaded)

## Hero (green gradient banner)
- `<header role="banner" aria-label="Hospitals Hero" class="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-[#1B4D3E] via-[#2E7D5A] to-[#1B4D3E]">`
- Decorative overlay: `absolute inset-0 z-0` containing 2 gradient divs (top-right white/5, bottom black/20)
- Content: `container-custom relative z-10 px-4 py-20 text-center text-white`
  - Eyebrow pill: `inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6` + check-circle 16px + "Premium Healthcare Network"
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat leading-tight` "Partner Hospitals"
  - P: `text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed`
  - Stats `<dl class="flex flex-wrap justify-center gap-8 mt-8">`: 3× `text-center` (dt `text-3xl font-bold text-white`, dd `text-sm text-white/70`) + divider `w-px h-12 bg-white/20`
    - 100+ / Partner Hospitals; 6 / Major Cities; 50+ / Specialties
- Bottom wave SVG: `absolute bottom-0 left-0 right-0` with `<svg viewBox="0 0 1440 120" class="w-full">` path fill #F5F7FA (copy verbatim)

## Hospital Directory (INTERACTION MODEL: click-driven city filter)
- `<section aria-labelledby="hospitals-list-heading" class="container-custom px-4 py-16">`
- City filter `<nav aria-label="City filter">`: `<div class="flex flex-wrap gap-3 justify-center">` with buttons:
  - Active: `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-[#1B4D3E] text-white shadow-lg scale-105`
  - Inactive: `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-white text-gray-600 hover:bg-[#1B4D3E]/10 hover:text-[#1B4D3E] border border-gray-200`
  - Buttons: All Cities / Beijing / Shanghai / Guangzhou / Chengdu / Hainan
- Status: `text-center mb-8` — `<p class="text-gray-600">Showing <span class="font-semibold text-[#1B4D3E]">N</span> hospitals[ in X]</p>`
- Grid: `<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">`
- **Card** (`<li class="group relative">` + `<a href="/hospitals/<slug>" class="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1B4D3E]/20 hover:shadow-xl focus:ring-4 focus:ring-[#7CB342]/25">`):
  - Featured badge: `absolute top-4 left-4 z-10 bg-gradient-to-r from-[#1B4D3E] to-[#2E7D5A] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg` + star 12px + "Featured"
  - `<figure class="h-52 overflow-hidden relative">`: img `w-full h-full object-cover group-hover:scale-105 transition-transform duration-700` + hover gradient overlay + grade badge `absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#1B4D3E] shadow-md`
  - `<article class="flex flex-1 flex-col p-6">`:
    - H3 `text-xl font-bold text-[#1A1A2E] mb-1 group-hover:text-[#1B4D3E] transition-colors duration-300`
    - Optional subtitle `<p class="text-sm text-gray-500 mb-3">`
    - 3 stat pills `<ul class="flex flex-wrap gap-2 mb-4">` each `px-2.5 py-1 bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs rounded-md font-medium`
    - Description `<p class="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">`
    - Location/Specialties `<dl class="space-y-2.5 mb-4">`: map-pin 16px + "Location" (truncate) + award 16px + "Specialties" (line-clamp-2)
    - 2 stats `<dl class="grid grid-cols-2 gap-3 mb-5 p-3 bg-gradient-to-br from-[#1B4D3E]/5 to-[#2E7D5A]/5 rounded-xl border border-[#1B4D3E]/10">` (dt `text-lg font-bold text-[#1B4D3E]`, dd `text-xs text-gray-500`)
    - View Details: `mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#1B4D3E] py-3 text-center font-medium text-white shadow-md transition-all duration-300 group-hover:bg-[#143D30] group-hover:shadow-lg` + arrow-right 16px (group-hover:translate-x-1)
- Empty state (city with 0): "No hospitals found" + "Try selecting a different city filter"

## Data (7 hospitals)
City filter mapping: Shanghai(Proton, Longhua, Guanghua), Hainan(Ruijin), Guangzhou(Sun Yat-sen), Beijing(Gaobo), Shenzhen→only "All"(Hengsheng). Chengdu = 0.

1. **Shanghai Proton & Heavy Ion Center** / slug shanghai-proton-heavy-ion / Grade A Tertiary / img hospital-shanghai-proton.jpg / city Shanghai
   - pills: First in China, 9,317+ Cases, 50+ Conditions
   - desc: China's first tumor specialty medical institution offering both proton and heavy ion advanced radiotherapy, treating over 50 conditions
   - loc Shanghai / spec Heavy Ion Therapy, Proton Therapy / stats: 9,317 cases·Total Treated | 1,000+/year·Annual Volume
2. **Ruijin Hospital Hainan** / ruijin-hainan / National Regional Medical Center / hospital-ruijin-hainan.jpg / city Hainan
   - subtitle: Ruijin Hospital Hainan Branch, SJTU School of Medicine
   - pills: Four Licensed Policies, 219 Licensed Drugs, Major Diseases on Island
   - desc: The only public medical institution in Lecheng Pilot Zone, transferring Shanghai Ruijin Hospital resources, main channel for international innovative drugs entering China
   - loc Hainan Boao / spec Oncology, Cardiology, Neuroscience / stats: 219 items·Licensed Drugs/Devices | 151 items·First in China
3. **Longhua Hospital** / longhua / Grade A Tertiary / hospital-longhua.jpg / city Shanghai
   - subtitle: Longhua Hospital Affiliated to Shanghai University of TCM
   - pills: #1 TCM Performance, 2 TCM Masters, 1,750 Beds
   - desc: One of the four earliest TCM clinical bases nationwide, with significant advantages in TCM treatment of malignant tumors, bone degenerative diseases, nephropathy
   - loc Shanghai / spec TCM Oncology, Orthopedics, Nephrology / stats: 5.36M+·Outpatient Visits | 96,800·Discharged Patients
4. **Sun Yat-sen Memorial Hospital** / sun-yat-sen-memorial / Grade A Tertiary / hospital-sun-yatsen.jpg / city Guangzhou
   - subtitle: Sun Yat-sen Memorial Hospital, SYSU
   - pills: First Western Hospital in China, 7 National Key Disciplines, 4 Organ Transplants
   - desc: Founded in 1835, birthplace of Western medicine in China, breast tumor center with 57% breast-conserving rate
   - loc Guangzhou / spec Breast Oncology, Cardiology, Urology / stats: 7·National Key Disciplines | 17·Clinical Key Specialties
5. **Guanghua Hospital** / guanghua / Grade A Tertiary / hospital-guanghua.jpg / city Shanghai
   - subtitle: Guanghua Hospital Affiliated to Shanghai University of TCM
   - pills: #1 TCM Performance, 2 TCM Masters, 1,750 Beds
   - desc: One of the four earliest TCM clinical bases nationwide, with significant advantages in TCM treatment of malignant tumors, bone degenerative diseases, nephropathy
   - loc Shanghai / spec Joint Disease, Rheumatology, TCM-Integrated / stats: 5.36M+·Outpatient Visits | 96,800·Discharged Patients
6. **Beijing Gaobo Hospital** / beijing-gaobo / International Research Hospital / hospital-beijing-gaobo.jpg / city Beijing
   - pills: Beijing's First International Research Hospital, 179 Clinical Trials, Serving 10+ Countries
   - desc: Beijing's first international research hospital, focusing on solid tumors, hematologic diseases, and brain science, with deep cooperation with Mass General Brigham and Mayo Clinic
   - loc Beijing / spec Solid Tumors, Hematologic Diseases, Neuroscience / stats: 100,000㎡·Total Building Area | 500 beds·Planned Beds
7. **Shenzhen Hengsheng Hospital** / shenzhen-hengsheng / National Tertiary General Hospital / hospital-shenzhen-hengsheng.webp / city Shenzhen (only under All)
   - pills: Fosun Health Member, ISO15189 Accredited, ART Qualification
   - desc: National Grade 3 comprehensive hospital, Fosun Health member, integrating medical care, research, teaching, rehabilitation and preventive healthcare, with ART qualification
   - loc Shenzhen Bao'an / spec Reproductive Medicine, Gastroenterology, Orthopaedics, International Medical Center / stats: 1,100+·Staff | 38·Departments

## Responsive
- Hero stats wrap. Grid 3→2→1 cols (lg/md/base). Filter pills wrap.
- All cards Reveal (translateY 30 for below-fold, opacity 1 in-view).

## Icons
check-circle, star, map-pin, award, arrow-right (all in shared map).
