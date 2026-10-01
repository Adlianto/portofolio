# DESIGN SYSTEM & BRAND GUIDELINES
**Single Source of Truth (SSOT) — Portfolio Architecture**

Dokumen ini adalah **panduan baku dan absolut** untuk seluruh perancangan antarmuka, pembuatan komponen, serta refaktor layout pada repositori ini. Setiap perubahan atau penambahan kode UI **wajib tunduk** pada token dan aturan di bawah ini tanpa deviasi.

---

## 1. Palette Tokens (Earthy Swiss Brutalism)

Palet warna didesain dengan konsep **Warm Earth Tactile & Editorial Print**. Menghindari warna sintetis/neon, dan mengedepankan tone organik kertas tua (parchment/sand), tinta espresso pekat, serta aksen terracotta.

### Core Swatches

| Token Name | HEX Code | Peruntukan Utama | Catatan Kontras |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#D8CCC4` | Warna dasar seluruh viewport / canvas | Sand / Oatmeal / Raw paper tone |
| **Primary Ink (Text / Dark)** | `#291C0E` | Teks utama, heading gelap, dark container | Deep Espresso / Charcoal Bark |
| **Terracotta Accent** | `#6E473B` | Aksen primer, status dot, link hover, active indicator | Warm Clay / Rust Earth |
| **Parchment Light (Inverted)**| `#E1D4C2` | Teks pada container gelap, border inversi | Cream Chalk / Unbleached Linen |

### Alpha & Surface States

| State / Layer | Utility / RGBA | Keterangan & Penggunaan |
| :--- | :--- | :--- |
| **Hairline Dividers** | `border-[#291C0E]/20` (`rgba(41,28,14,0.2)`) | Garis batas horizontal & vertikal editorial |
| **Subtle Hairlines** | `border-[#291C0E]/30` & `/40` | Border pill badge, circular icon button |
| **Inverted Hairlines** | `border-[#E1D4C2]/30` | Border button / pill pada banner gelap (`#291C0E`) |
| **Row Hover Tint** | `bg-[#291C0E]/[0.03]` | Subtle highlight baris saat kursor melintas |
| **Marquee Loop Track** | `bg-[#291C0E]/[0.02]` | Latar belakang subtle pada logo marquee |
| **Text Muted / Subtitle** | `text-[#291C0E]/60` - `opacity-70` | Index nomor list (`01`), metadata |
| **Selection Highlight** | `selection:bg-[#291C0E] selection:text-[#D8CCC4]` | Text selection bawaan browser |
| **Grain Background** | `radial-gradient(rgba(41, 28, 14, 0.08) 1px, transparent 0)` | Grid noise dot 24x24px, fixed overlay `opacity-40` |

### Custom Cursor Feedback Colors

- **Idle State**:
  - Border: `rgba(110, 71, 59, 0.4)` (`#6E473B` @ 40%)
  - Fill: `rgba(110, 71, 59, 0.08)`
- **Hover Interactive (`<a>`, `<button>`, `cursor-pointer`)**:
  - Border: `rgba(41, 28, 14, 0.6)` (`#291C0E` @ 60%)
  - Fill: `rgba(41, 28, 14, 0.15)`
  - Scale: `2.4x`, backdrop blur `1px`

---

## 2. Typography Hierarchy

Sistem tipografi menggunakan perpaduan kontras tinggi antara **Industrial Wood-type Grotesk**, **Classical Editorial Serif**, dan **Clean Monospace Data**.

### Installed Fonts (`next/font/google`)

| Font Family | CSS Variable | Class Helper | Peruntukan |
| :--- | :--- | :--- | :--- |
| **Bebas Neue** | `--font-bebas` | `.font-bebas` | Display mega-titles, section titles, nomor besar |
| **Instrument Serif** | `--font-serif` | `.font-serif-italic` | Aksen sastra / editorial sub-tagline, kategori seni |
| **Space Grotesk** | `--font-space` | `.font-space` | Body text, UI label, button, navigation link |
| **Geist Mono** / **Mono** | `--font-geist-mono` | `font-mono` | Tech stack pill, timestamp, index numeral, metadata |

### Sizing Scale & Leading Rules

| Tingkat / Peran | Ukuran (Size) | Leading (Line Height) | Tracking | Font & Case |
| :--- | :--- | :--- | :--- | :--- |
| **Mega Display 1** | `18vw` – `20vw` | `0.75` – `0.78` (Ultra-tight) | `tracking-tighter` | `Bebas Neue`, Uppercase, Black |
| **Section Banner** | `text-3xl` – `text-6xl` | `0.9` – `1.0` | `tracking-wider` | `Bebas Neue`, Uppercase |
| **Project Row Title** | `text-4xl` – `text-7xl` | `1.0` | `tracking-tight` | `Bebas Neue`, Uppercase |
| **Editorial Italic Accent** | `text-base` – `text-lg` | `1.2` – `1.4` | `tracking-normal` | `Instrument Serif`, Italic |
| **Primary UI / Nav** | `text-xs` (12px) | `1.5` | `tracking-widest` | `Space Grotesk`, Uppercase, Bold |
| **Metadata & Badges** | `text-[10px]` – `text-[11px]` | `1.2` | `tracking-widest` | `Mono`, Uppercase, Medium/Bold |
| **Vertical Rail Text** | `text-[10px]` | Normal | `tracking-widest` | `Mono`, Uppercase, Rotated |

> **Aturan Wajib Tipografi:**
> - Judul besar (`Bebas Neue`) **wajib** menggunakan line-height rapat (`leading-[0.75]` - `leading-[0.85]`). Jangan gunakan `leading-relaxed` pada Bebas Neue!
> - Elemen metadata atau status teks selalu diapit bracket atau slash editorial: `[ SELECTED INDEX ]`, `bell / Fullstack`.

---

## 3. Aesthetic & Layout Rules

### Desain: Swiss Brutalist meets High-Fashion Editorial

1. **Struktur Grid Terbuka (Open Frame & Hairlines)**:
   - Layout disusun berdasarkan garis pemisah tipis horizontal (`border-b`, `border-t`) yang membentang rapi dari ujung ke ujung.
   - Tidak menggunakan floating card berdinding tebal atau drop-shadow mengapung.
2. **Padding & Spacing Rhythm**:
   - **Outer Viewport Container**: `p-4 sm:p-8 lg:p-12`.
   - **Height Model**: `min-h-screen flex flex-col justify-between`. Komposisi halaman mengisi satu kesatuan visual yang kohesif.
   - **Section Separators**: Margin vertikal terukur (`my-4`, `py-6 sm:py-8`).
3. **Komponen & Pattern Baku**:
   - **Row Item (Project/List Item)**:
     - Struktur: Nomor urut mono (`01`), Judul display raksasa (`Bebas Neue`), Kategori serif miring (`Instrument Serif Italic`), pill teknologi mono, dan tombol panah melingkar (`→`).
     - State Hover: Title dan nomor bergeser horizontal (`translate-x-3`), teks beralih ke warna Terracotta (`#6E473B`), garis indikator bawah (`h-[2px] bg-[#6E473B]`) memanjang dari `w-0` menjadi `w-full`.
   - **Badges & Tech Pills**:
     - Format: `font-mono text-[10px] uppercase border border-[#291C0E]/30 px-2 py-0.5 rounded-full`.
     - State Hover: Inversi total menjadi `bg-[#291C0E] text-[#E1D4C2]`.
   - **Solid Dark Banner (Block Accent)**:
     - Kontainer penuh warna pekat `#291C0E` dengan teks `#E1D4C2`.
     - Tombol aksi di dalam banner berupa box tajam ber-border `border-[#E1D4C2]/30 hover:bg-[#E1D4C2] hover:text-[#291C0E]`.
   - **Infinite Marquee Loop**:
     - Loop logo teknologi horizontal dua arah (`left` dan `right`) berkecepatan 22s linier.
     - Terbungkus dalam border tipis `border-y border-[#291C0E]/20 bg-[#291C0E]/[0.02]`. Pause saat hover (`hover:paused`).
   - **Editorial Side Rails**:
     - Teks tipis di margin kiri & kanan layar desktop (`hidden lg:block fixed left-3 / right-3`), ditulis vertikal (`writing-mode-vertical rotate-180`), warna aksen teredam (`text-[#6E473B]/50`).
   - **Paper Grain Overlay**:
     - Elemen background grain tetap aktif di seluruh halaman (`bg-grain-optimized fixed inset-0 pointer-events-none z-50 opacity-40`) untuk memberikan tekstur cetak koran/majalah analog.

---

## 4. Do's and Don'ts

### ❌ Strictly Forbidden (Don'ts)

1. **JANGAN gunakan warna Neon / Vibrant Web3 / SaaS Generic**:
   - Dilarang memakai warna biru elektrik (`#0066FF`), ungu cyberpunk (`#8B5CF6`), neon green, atau merah primer terang.
2. **JANGAN gunakan Glossy Glassmorphism & Heavy Drop Shadows**:
   - Dilarang membuat card dengan efek kaca buram putih tebal bergradasi (`backdrop-blur-xl bg-white/40 shadow-2xl`).
3. **JANGAN membuat Card Bertumpuk Berlebihan (Nested Box Hell)**:
   - Dilarang menempatkan card bulat di dalam card bulat lain. Gunakan garis pemisah datar (*border hairlines*) ala lembar cetak Swiss.
4. **JANGAN gunakan Border Radius Berlebih pada Layout Utama**:
   - Card/Banner besar harus bersudut tegas (`rounded-none`). `rounded-full` hanya diizinkan untuk pill badge kecil, circular action button, dan custom cursor.
5. **JANGAN merusak Tipografi Proporsional**:
   - Dilarang menggunakan font umum seperti Comic Sans, Arial standar, atau mencampur sembarang font baru tanpa konfigurasi Google Font yang selaras.

### ✅ Mandatory Practices (Do's)

1. **Pertahankan Nuansa Tinta & Kertas Analog**:
   - Selalu pasangkan latar hangat `#D8CCC4` dengan tinta pekat `#291C0E` dan aksen tanah `#6E473B`.
2. **Gunakan Tipografi Sebagai Visual Utama**:
   - Jadikan teks berukuran masif (`vw` units) sebagai elemen grafis arsitektural utama.
3. **Micro-interactions yang Halus & Responsif**:
   - Setiap elemen yang dapat diklik wajib memiliki feedback visual (perubahan warna, sedikit pergeseran translate, atau ekspansi border bawah).
4. **Pertahankan Custom Cursor**:
   - Pastikan interaksi kursor magnetik halus tetap berfungsi dan menyatu secara mulus pada elemen interaktif.
5. **Konsistensi Token CSS**:
   - Wajib merujuk pada token warna dan kelas utilitas yang terdaftar pada dokumen ini di setiap file komponen baru.

---

## 5. Implementasi & Standardisasi Kode

### Quick CSS Class Reference

```css
/* Typography */
font-bebas          /* Bebas Neue - Display / Mega Headers */
font-serif-italic   /* Instrument Serif Italic - Subheadings / Poetic Accents */
font-space          /* Space Grotesk - Body, Nav, Clean Labels */
font-mono           /* Geist Mono - Numerals, Tags, Tech Badges */

/* Color Utility Equivalents */
bg-[#D8CCC4]        /* Canvas Background */
text-[#291C0E]      /* Primary Ink */
text-[#6E473B]      /* Terracotta Accent */
bg-[#291C0E]        /* Inverted Dark Surface */
text-[#E1D4C2]      /* Inverted Light Text */

/* Hairline Borders */
border-[#291C0E]/20 /* Standard Divider */
border-[#291C0E]/30 /* Badge / Pill Outline */
border-[#E1D4C2]/30 /* Inverted Divider */
```

Setiap pembuatan halaman baru atau perombakan komponen ke depan **harus mengadopsi standar ini** secara konsisten.
