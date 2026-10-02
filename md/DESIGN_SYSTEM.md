# DESIGN SYSTEM & BRAND GUIDELINES
**Single Source of Truth (SSOT) — Dual-Theme Architecture (Warm Coffee Parchment & Linear Noir)**

Dokumen ini adalah **panduan baku dan absolut** untuk seluruh perancangan antarmuka, pembuatan komponen, serta pengelolaan token warna (Light Mode & Dark Mode) pada repositori ini. Setiap perubahan atau penambahan kode UI **wajib tunduk** pada token dan aturan di bawah ini tanpa deviasi.

---

## 1. Dual-Theme Palette Tokens

Sistem tema memadukan dua karakter visual yang presisi:
- **Light Mode — Warm Coffee & Parchment Editorial**: Terinspirasi dari tone analog kertas perkamen hangat (`#E1D4C2`), kartu surface muted sand (`#BEB5A9`), teks tinta espresso pekat (`#291C0E`), dan aksen terracotta roast (`#6E473B`).
- **Dark Mode — Linear Noir & Signal Ember**: Viewport obsidian pekat (`#0D0E10`), surface bento industrial (`#16181B`, `#1F2226`), hairline border gunmetal (`#26292E`), teks gading warm ivory (`#F5F2EB`), serta sentuhan aksen **Vermilion / Signal Ember** (`#F04D36`).

### 1.1. Light Mode (Palette Kopi / Parchment Hangat)

| Token Name | HEX / RGBA Value | Peruntukan Utama | Karakter & Nilai Kontras |
| :--- | :--- | :--- | :--- |
| **Canvas** | `#E1D4C2` | Latar utama seluruh viewport / body | Parchment unbleached paling terang |
| **Surface 1** | `#BEB5A9` | Kartu bento, row hover, ticker track | Warm sand surface bertekstur lembut |
| **Surface 2** | `#B3A99C` | Highlight box, active badge, hover state | Penegas surface elevasi 2 |
| **Surface Contrast** | `#291C0E` | Banner kontras tinggi (Strategic Callout) | Espresso pekat (solid callout background) |
| **Surface Contrast Text** | `#E1D4C2` | Teks di dalam banner kontras | Parchment terang |
| **Text Utama** | `#291C0E` | Teks utama, judul "DEVELOPER", heading | Espresso pekat absolut |
| **Text Muted** | `#6E473B` | Body paragraph, sub-label, deskripsi teknis | Terracotta warm roast |
| **Text Faint** | `rgba(41, 28, 14, 0.40)` | Placeholder form, slash divider | Aksen pasif tipis |
| **Hairline Border** | `rgba(41, 28, 14, 0.20)` | Garis pembatas editorial horizontal & vertikal | Hairline tipis espresso |
| **Border Strong** | `rgba(41, 28, 14, 0.35)` | Border tombol, form input, outline pill | Border interaktif |
| **Hero Display Accent** | `#6E473B` | Kata "FULLSTACK" pada Hero Section | Kontras terracotta harmonis di atas canvas |
| **Single Accent** | `#F04D36` | Dot availability, active indicator, arrow ↗ hover | Vermilion red stamp |

### 1.2. Dark Mode (Linear Noir & Signal Ember)

| Token Name | HEX / RGBA Value | Peruntukan Utama | Karakter & Nilai Kontras |
| :--- | :--- | :--- | :--- |
| **Canvas** | `#0D0E10` | Latar utama seluruh viewport / body | Obsidian Noir pekat |
| **Surface 1** | `#16181B` | Kartu bento, row hover, ticker track | Elevasi industrial level 1 |
| **Surface 2** | `#1F2226` | Highlight box, active badge, hover state | Elevasi industrial level 2 |
| **Surface Contrast** | `#16181B` | Banner kontras tinggi (Strategic Callout) | Slate container dengan border tipis |
| **Surface Contrast Text** | `#F5F2EB` | Teks di dalam banner kontras | Warm ivory |
| **Text Utama** | `#F5F2EB` | Teks utama, judul "DEVELOPER", heading | Warm ivory / off-white berbobot |
| **Text Muted** | `rgba(245, 242, 235, 0.55)` | Body paragraph, sub-label, deskripsi teknis | Teks sekunder nyaman dibaca |
| **Text Faint** | `rgba(245, 242, 235, 0.30)` | Placeholder form, slash divider | Aksen pasif tipis |
| **Hairline Border** | `#26292E` | Garis pembatas editorial horizontal & vertikal | Hairline gunmetal presisi |
| **Border Strong** | `rgba(245, 242, 235, 0.25)` | Border tombol, form input, outline pill | Border interaktif |
| **Hero Display Accent** | `#F04D36` | Kata "FULLSTACK" pada Hero Section | **Vermilion kontras menyala (Signal Ember)** |
| **Single Accent** | `#F04D36` | Dot availability, active indicator, arrow ↗ hover | Signal Ember (Linear signature) |

---

## 2. CSS Variable Tokens & Tailwind Mapping

Semua token warna didefinisikan secara dinamis pada `app/globals.css` menggunakan CSS variables di `:root` dan `.dark`, serta dipetakan ke `@theme inline` Tailwind CSS v4:

| CSS Variable | Tailwind Utility | Nilai Light Mode (`:root`) | Nilai Dark Mode (`.dark`) | Catatan Peruntukan |
| :--- | :--- | :--- | :--- | :--- |
| `--canvas` | `bg-canvas`, `text-canvas` | `#E1D4C2` | `#0D0E10` | Canvas viewport penuh |
| `--surface-1` | `bg-surface-1` | `#BEB5A9` | `#16181B` | Kartu bento & track ticker |
| `--surface-2` | `bg-surface-2` | `#B3A99C` | `#1F2226` | Highlight box & hover |
| `--surface-contrast` | `bg-surface-contrast` | `#291C0E` | `#16181B` | Banner callout strategis |
| `--surface-contrast-text`| `text-surface-contrast-text`| `#E1D4C2` | `#F5F2EB` | Teks di dalam banner callout |
| `--ink-primary` | `text-ink-primary` | `#291C0E` | `#F5F2EB` | Teks utama & kata "DEVELOPER" |
| `--ink-muted` | `text-ink-muted` | `#6E473B` | `rgba(245, 242, 235, 0.55)` | Body teks & sub-label |
| `--border-hairline` | `border-border-hairline` | `rgba(41, 28, 14, 0.20)` | `#26292E` | Hairline divider horizontal/vertikal |
| `--border-strong` | `border-border-strong` | `rgba(41, 28, 14, 0.35)` | `rgba(245, 242, 235, 0.25)` | Outline tombol & form |
| `--accent-hero` | `text-accent-hero` | `#6E473B` | `#F04D36` | **Kata "FULLSTACK" di Hero Section** |
| `--accent-vermilion` | `bg-accent-vermilion` | `#F04D36` | `#F04D36` | Dot status & micro-accent |
| `--grain-dot` | Digunakan di `.bg-grain` | `rgba(41, 28, 14, 0.08)` | `rgba(245, 242, 235, 0.04)` | Tekstur dot noise latar belakang |

---

## 3. Aturan Baku Penempatan Elemen Visual

### 3.1. Judul Display Raksasa ("FULLSTACK DEVELOPER")
- **Kata "FULLSTACK"**:
  - Light Mode: Menggunakan `text-accent-hero` (`#6E473B`) yang memberikan kontras terracotta kopi yang hangat dan selaras dengan latar `#E1D4C2`.
  - Dark Mode: Menggunakan `text-accent-hero` (`#F04D36` Vermilion Ember) yang menyala tajam di atas latar hitam obsidian `#0D0E10`.
- **Kata "DEVELOPER"**:
  - Light Mode: Menggunakan `text-ink-primary` (`#291C0E` espresso pekat).
  - Dark Mode: Menggunakan `text-ink-primary` (`#F5F2EB` warm ivory).

### 3.2. Penempatan Aksen Mikro Vermilion (#F04D36)
Warna `#F04D36` hadir presisi pada titik interaksi taktil:
1. **Dot Indikator Status & Ketersediaan**:
   - `● [ AVAILABLE FOR ROLES ]` (header live pulse).
   - `● SPEC: PRODUCTION-READY` (micro-spec indicator).
   - `● [ REAL-TIME LEISURE TICKER ]` (status downtime).
   - `● Open for Senior Engineering Roles...` (identity ledger).
2. **Active Tab Indicator & Hairline Underline Tipis**:
   - Garis bawah 1.5px meluncur saat hover pada baris projek di `WorksSection` (`h-[1.5px] bg-accent-vermilion`).
   - Active border indicator pada tab bento `CatalogueIndexTabs` (`data-[state=active]:border-accent-vermilion`).
3. **Hover Accent Mikro pada Elemen Interaktif**:
   - Icon panah diagonal `↗` beralih ke warna Vermilion saat hover di `WorksSection` dan external channels.
   - Border ring kursor custom beralih ke Vermilion saat hovering elemen interaktif.
   - Asterisk wajib form kontak (`*`).

---

## 4. Mekanisme Zero-Flash Theme Switching

1. **Anti-FOUC Blocking Script**:
   - Terpasang langsung di dalam tag `<head>` pada `app/layout.tsx`.
   - Mengeksekusi pembacaan `localStorage.getItem('theme')` atau sistem operasi sebelum browser melakukan First Paint (CLS = 0).
2. **Theme Switcher Minimalis (`components/ThemeToggle.tsx`)**:
   - Format monospaced: `[ THEME: LIGHT ]` / `[ THEME: DARK ]` dengan dot aksen Vermilion tunggal `bg-accent-vermilion`.

---

## 5. Do's and Don'ts

### ❌ Strictly Forbidden (Don'ts)
1. **Dilarang memakai warna Acid Lime (#D4E836) atau Cobalt Blue (#2853E6)**.
2. **Dilarang memberikan background merah pekat full-width** (kecuali dot atau micro-accent).
3. **Dilarang menggunakan drop shadows berwarna**.

### ✅ Mandatory Practices (Do's)
1. **Pertahankan Estetika Warm Coffee & Linear Noir**: Kontras elegan, tipografi arsitektural terukur, hairline borders tipis.
2. **Gunakan Semantic Tokens**: Selalu gunakan `bg-canvas`, `text-ink-primary`, `text-accent-hero`, `border-border-hairline`.
3. **Performa & Zero CLS**: Semua nilai warna diatur melalui CSS variables untuk transisi instan dan bebas pergeseran layout.
