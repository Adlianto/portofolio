import React from 'react';

export interface TechIcon {
  name: string;
  svg: React.ReactNode;
}

export const TechIcons: TechIcon[] = [
  {
    name: 'React',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2.1" />
        <g fill="none" stroke="currentColor" strokeWidth="1.6">
          <ellipse cx="12" cy="12" rx="4.2" ry="9.8" />
          <ellipse cx="12" cy="12" rx="4.2" ry="9.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="4.2" ry="9.8" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.586 18.27L9.848 8.132v7.716H8.252V6.85h1.765l7.33 9.616V6.85h1.595v11.42z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <rect x="1.5" y="1.5" width="21" height="21" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 8h5.5v2H8.8V17H6.7v-7H5V8zm8.2 0h5v1.9h-3.2v1.5h3v1.9h-3v1.7h3.4V17H13.2V8z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <rect x="1.5" y="1.5" width="21" height="21" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11.5 11v5.2c0 1.1-.6 1.8-1.7 1.8-.9 0-1.5-.5-1.8-1.1l1.3-.8c.2.4.4.6.6.6.3 0 .5-.2.5-.5V11h1.1zm5.7 2.1c-.4-.3-.9-.5-1.4-.7-.5-.2-.8-.4-.8-.7 0-.3.2-.5.6-.5.4 0 .7.2.9.5l1.2-.8c-.4-.7-1.2-1.1-2.1-1.1-1.3 0-2.1.8-2.1 1.9 0 1.1.7 1.6 1.6 2 .6.2.9.4.9.8 0 .4-.3.6-.8.6-.6 0-1-.3-1.3-.8l-1.3.8c.5.9 1.4 1.4 2.6 1.4 1.5 0 2.3-.8 2.3-2 0-1-.5-1.4-1.2-1.7z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <path d="M12 2 2.7 7.3v10.4L12 23l9.3-5.3V7.3L12 2zm7.3 14.8L12 21l-7.3-4.2V8.2L12 4l7.3 4.2v8.6z" />
        <path d="M12 7.5 7.5 10v4l4.5 2.5 4.5-2.5v-4L12 7.5z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <path d="M23.546 10.93 13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l3.01 3.01c.642-.22 1.385-.078 1.9.435.72.72.72 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-2.014l-2.81-2.81v6.295c.22.106.425.25.602.427.719.719.719 1.884 0 2.604-.719.719-1.881.719-2.6 0-.719-.72-.719-1.885 0-2.604.228-.228.5-.385.793-.472V9.014c-.293-.087-.565-.244-.793-.472-.54-.54-.673-1.334-.406-2.01L5.64 3.692 1.454 7.878c-.604.604-.604 1.582 0 2.186l10.479 10.48c.604.603 1.582.603 2.186 0l9.427-9.428c.604-.603.604-1.581 0-2.186z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" />
        <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" />
        <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" />
        <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" />
        <path d="M19 38V57C13.7533 57 9.5 52.7467 9.5 47.5C9.5 42.2533 13.7533 38 19 38Z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    svg: (
      <svg className="w-10 h-10 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
        <path d="M12 1 24 22H0z" />
      </svg>
    ),
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    id: '01',
    title: 'E-Commerce Web Engine',
    category: 'Fullstack Platform',
    problem:
      'Architected high-throughput checkout engine with atomic inventory locking, OAuth 2.0 social authentication, and automated multi-channel payment gateway callbacks.',
    tech: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'Redis', 'OAuth'],
    repoUrl: 'https://github.com/Adlianto',
    liveUrl: '#',
  },
  {
    id: '02',
    title: 'Fleet Logistics Dashboard',
    category: 'Real-Time Monitoring',
    problem:
      'Built mission-critical telematics hub handling real-time telemetry streaming, geofence host alert dispatching, and high-density tabular fleet analytics.',
    tech: ['Laravel', 'Inertia.js', 'React', 'TypeScript', 'WebSockets', 'Leaflet'],
    repoUrl: 'https://github.com/Adlianto',
    liveUrl: '#',
  },
  {
    id: '03',
    title: 'Gravitational Lensing Engine',
    category: 'Scientific Computation',
    problem:
      'Simulated null geodesic ray propagation in Schwarzschild spacetime metrics via high-performance numerical Runge-Kutta integration and ray marching rendering.',
    tech: ['C++', 'Ray Marching', 'Numerical Methods', 'WebGL', 'GLSL', 'Math'],
    repoUrl: 'https://github.com/Adlianto',
    liveUrl: '#',
  },
];

export interface PrincipleItem {
  number: string;
  title: string;
  tagline: string;
  desc: string;
}

export const principles: PrincipleItem[] = [
  {
    number: '01',
    title: 'Craft Over Shortcuts',
    tagline: 'Code as permanent architecture, not temporary disposable glue.',
    desc: 'Speed is meaningless if the foundation fractures under scale. Every schema, atomic transaction, and state boundary is built with deterministic precision and comprehensive failure isolation.',
  },
  {
    number: '02',
    title: 'Tactile Brutalism',
    tagline: 'Software with weight, deliberate typographic scale, and physical presence.',
    desc: 'Rejecting sterile, generic corporate templates in favor of high-craft Swiss editorial discipline. Clean hairlines, unapologetic contrast, and spring-damped micro-interactions that respect human intuition.',
  },
  {
    number: '03',
    title: 'Deterministic Simplicity',
    tagline: 'Ruthless reduction of superfluous dependencies and state bloat.',
    desc: 'The best engineering is often what you consciously choose not to write. By leveraging native primitives, atomic database locks, and strict typing, we eliminate entire categories of production bugs.',
  },
  {
    number: '04',
    title: 'First-Principles Curiosity',
    tagline: 'Exploring where abstractions leak—into numerical physics, math, and bare metal.',
    desc: 'True technical leadership stems from understanding what happens beneath the frameworks. Whether writing numerical Runge-Kutta ray marchers in C++ or structuring real-time telematics hubs, fundamentals dictate velocity.',
  },
];

export interface ArsenalCategory {
  domain: string;
  items: { name: string; note: string }[];
}

export const arsenalCategories: ArsenalCategory[] = [
  {
    domain: 'Core Languages & Runtimes',
    items: [
      { name: 'TypeScript', note: 'Strict Type Systems' },
      { name: 'JavaScript (ESNext)', note: 'V8 & Web APIs' },
      { name: 'PHP 8.x', note: 'Robust OOP & Concurrency' },
      { name: 'C++', note: 'Numerical Simulation & Math' },
      { name: 'SQL', note: 'PostgreSQL & MySQL Query Tuning' },
    ],
  },
  {
    domain: 'Architectures & Frameworks',
    items: [
      { name: 'Laravel Ecosystem', note: 'Queues, Events, Inertia' },
      { name: 'Next.js & React 19', note: 'App Router & Server Actions' },
      { name: 'Tailwind CSS v4', note: 'Token-Driven Design Systems' },
      { name: 'Redis', note: 'Caching, Atomic Locks & PubSub' },
      { name: 'WebGL & GLSL', note: 'Scientific Shaders & Math' },
    ],
  },
  {
    domain: 'Engineering Tooling & Systems',
    items: [
      { name: 'Git & GitHub', note: 'Branching & CI Workflows' },
      { name: 'Docker', note: 'Isolated Multi-Service Stacks' },
      { name: 'Linux / POSIX', note: 'CLI, Shell & Server Ops' },
      { name: 'Figma', note: 'Design Tokens & Prototyping' },
      { name: 'Postman / Bruno', note: 'Strict Contract Testing' },
    ],
  },
];

export interface PersonalFacet {
  label: string;
  detail: string;
}

export const personalFacets: PersonalFacet[] = [
  {
    label: 'ASTROPHYSICS & NUMERICAL SIMULATION',
    detail:
      'Captivated by relativistic mechanics and null geodesics around black holes. Built custom ray marching engines to compute gravitational photon bending from scratch.',
  },
  {
    label: 'EDITORIAL PRINT & SWISS TYPOGRAPHY',
    detail:
      'Deep collector of 20th-century European typographic posters, broadsheet newspapers, and bauhaus-inspired grid systems.',
  },
  {
    label: 'SPECIALTY EXTRACTION',
    detail:
      'Treating coffee extraction variables (water TDS, grind micron distribution, temperature profiling) with the exact same calibration as memory leak profiling.',
  },
];

export interface ToyExperiment {
  id: string;
  title: string;
  category: string;
  lorem: string;
  tags: string[];
  status: string;
}

export const toyExperiments: ToyExperiment[] = [
  {
    id: '01',
    title: 'AUDIO-REACTIVE PARTICLE FIELD',
    category: 'CREATIVE CODING',
    lorem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Simulasi partikel canvas berbasis frekuensi FFT audio real-time.',
    tags: ['Canvas API', 'Web Audio', 'Math', 'WebGL'],
    status: 'PROTOTYPE // ACTIVE',
  },
  {
    id: '02',
    title: 'MINI CHESS ENGINE & BOARD',
    category: 'LOGIC & ALGORITHM',
    lorem:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Algoritma minimax dengan alpha-beta pruning dalam antarmuka monokrom minimalis.',
    tags: ['TypeScript', 'Minimax', 'Bitboards', 'CSS Grid'],
    status: 'EXPERIMENT // IDLE',
  },
  {
    id: '03',
    title: 'PROCEDURAL DITHERING SHADER',
    category: 'VISUAL SHADERS',
    lorem:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Bayer matrix dithering shader untuk rendering tekstur foto bergaya cetak koran retro.',
    tags: ['GLSL', 'Three.js', 'Post-Processing', 'Shader'],
    status: 'LAB // COMPLETE',
  },
];

export interface DeskGear {
  name: string;
  category: string;
  specs: string;
  lorem: string;
  tag: string;
}

export const deskGear: DeskGear[] = [
  {
    name: 'CUSTOM 65% MECHANICAL BOARD',
    category: 'INPUT DEVICE',
    specs: 'Gateron Oil Kings (Lubed) · FR4 Plate · PBT Dye-Sub Retro Keycaps',
    lorem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modifikasi gasket mount untuk profil suara thock yang dalam dan kenyamanan mengetik berjam-jam.',
    tag: 'DAILY DRIVER',
  },
  {
    name: 'PLANAR MAGNETIC HEADPHONES',
    category: 'AUDIO MONITOR',
    specs: 'Open-Back Architecture · Custom Copper Cable · High Dynamic Range',
    lorem:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Akustik soundstage luas untuk fokus coding larut malam.',
    tag: 'REFERENCE SOUND',
  },
  {
    name: 'ROTARY DIAL MACRO CONTROLLER',
    category: 'ERGONOMICS',
    specs: 'QMK/VIA Firmware · Stepped Rotary Encoder · CNC Aluminum Enclosure',
    lorem:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Kontrol volume, scrub timeline, dan workspace cycling instan.',
    tag: 'CUSTOM FIRMWARE',
  },
];

export interface SoundVibe {
  title: string;
  era: string;
  lorem: string;
  artists: string[];
}

export const soundVibes: SoundVibe[] = [
  {
    title: 'SYNTHWAVE & ANALOG CYBERNETICS',
    era: 'NIGHT RUN // 120-130 BPM',
    lorem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bassline berdenyut analog dan melodi synthesizer retro untuk sesi debugging cepat dan refactoring arsitektur.',
    artists: ['Carpenter Brut', 'Lorn', 'Kavinsky', 'Gunship'],
  },
  {
    title: 'POST-ROCK & CINEMATIC CRESCENDOS',
    era: 'DEEP ARCHITECTURE // DYNAMIC RANGE',
    lorem:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Gelombang gitar dinamis yang membangun fokus tanpa distraksi lirik.',
    artists: ['Mogwai', 'Explosions in the Sky', 'MONO', 'Godspeed'],
  },
  {
    title: 'JAPANESE CITY POP & VINTAGE VINYL',
    era: 'WEEKEND LEISURE // ANALOG WARMTH',
    lorem:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos. Irama funk hangat untuk eksperimen koding santai.',
    artists: ['Casiopea', 'Tatsuro Yamashita', 'Masayoshi Takanaka'],
  },
];

export interface LeisureCulture {
  theme: string;
  format: string;
  lorem: string;
  favs: string[];
}

export const leisureCulture: LeisureCulture[] = [
  {
    theme: 'HARD SCI-FI & SPACE ODYSSEY',
    format: 'CINEMA & LITERATURE',
    lorem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Terpesona pada eksplorasi mekanika relativitas umum, dilatasi waktu, dan isolasi kosmik.',
    favs: ['Interstellar', '2001: A Space Odyssey', 'Arrival', 'Solaris'],
  },
  {
    theme: 'ATMOSPHERIC & TACTICAL GAMING',
    format: 'INTERACTIVE MEDIA',
    lorem:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Mengagumi game dengan desain dunia yang hening, arsitektural, dan mekanisme gameplay yang presisi.',
    favs: ['Death Stranding', 'Elden Ring', 'Cyberpunk 2077', 'Portal 2'],
  },
  {
    theme: 'SPECIALTY EXTRACTION & BREW',
    format: 'DAILY RITUAL',
    lorem:
      'Excepteur sint occaecat cupidatat non proident. Mengalibrasi variabel seduh kopi (rasio ekstraksi, suhu air, mikron gilingan) dengan presisi yang sama seperti tuning kode.',
    favs: ['V60 Dripper', 'Ethiopia Yirgacheffe', 'Natural Process', 'Aeropress'],
  },
];
