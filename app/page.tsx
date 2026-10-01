'use client';

import React, { useState } from 'react';
import { Bebas_Neue, Instrument_Serif, Space_Grotesk } from 'next/font/google';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const EditorialStyles = () => (
  <style jsx global>{`
    .font-bebas {
      font-family: var(--font-bebas), sans-serif;
    }
    .font-space {
      font-family: var(--font-space), sans-serif;
    }
    .font-serif-italic {
      font-family: var(--font-serif), serif;
      font-style: italic;
    }

    .bg-grain-optimized {
      background-image: 
        radial-gradient(rgba(41, 28, 14, 0.08) 1px, transparent 0),
        radial-gradient(rgba(41, 28, 14, 0.08) 1px, transparent 0);
      background-size: 24px 24px;
      background-position: 0 0, 12px 12px;
    }

    .writing-mode-vertical {
      writing-mode: vertical-rl;
    }

    @keyframes slideUpFade {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-reveal-1 {
      animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
      opacity: 0;
    }
    .animate-reveal-2 {
      animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
      opacity: 0;
    }
    .animate-reveal-3 {
      animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
      opacity: 0;
    }
    .animate-reveal-4 {
      animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards;
      opacity: 0;
    }

    @keyframes logoLoopScrollLeft {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
    @keyframes logoLoopScrollRight {
      0% { transform: translate3d(-50%, 0, 0); }
      100% { transform: translate3d(0, 0, 0); }
    }
    .animate-logo-loop-left {
      animation: logoLoopScrollLeft 22s linear infinite;
      will-change: transform;
    }
    .animate-logo-loop-right {
      animation: logoLoopScrollRight 22s linear infinite;
      will-change: transform;
    }
    .animate-logo-loop-left:hover,
    .animate-logo-loop-right:hover {
      animation-play-state: paused;
    }
  `}</style>
);

const TechIcons = [
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

const TechIconItem = ({ icon }: { icon: typeof TechIcons[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-transform duration-150 transform hover:scale-125 cursor-pointer flex items-center justify-center p-2 rounded-xl relative group text-[#291C0E]"
      style={{
        opacity: isHovered ? 1 : 0.75,
        filter: isHovered ? 'drop-shadow(0 0 8px rgba(41, 28, 14, 0.2))' : 'none',
      }}
      title={icon.name}
    >
      {icon.svg}
    </div>
  );
};

const LargeIconOnlyLoop = ({ direction = 'left' }: { direction?: 'left' | 'right' }) => {
  const animClass = direction === 'left' ? 'animate-logo-loop-left' : 'animate-logo-loop-right';

  return (
    <div className="w-full overflow-hidden py-4 sm:py-5 border-y border-[#291C0E]/20 my-3 select-none bg-[#291C0E]/[0.02]">
      <div className={`flex gap-16 sm:gap-20 items-center ${animClass} w-max`}>
        {[...TechIcons, ...TechIcons].map((icon, idx) => (
          <TechIconItem key={`icon-loop-${direction}-${idx}`} icon={icon} />
        ))}
      </div>
    </div>
  );
};

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  problem: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  index: number;
}

const StaggeredProjectItem = ({
  id,
  title,
  category,
  problem,
  tech,
  repoUrl,
  liveUrl,
  index,
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-6 sm:py-8 border-b border-[#291C0E]/20 relative overflow-hidden group transition-all duration-500 hover:bg-[#291C0E]/[0.03] px-2 sm:px-4"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex flex-col gap-4 relative z-10">
        {/* Main Row: Numerals, Title, Category, Action Links & Arrow */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex items-baseline gap-4 sm:gap-8">
            <span
              className={`text-xs font-mono font-bold transition-all duration-300 ${
                isHovered ? 'text-[#6E473B] translate-x-1' : 'text-[#291C0E]/60'
              }`}
            >
              {id}
            </span>

            <h4
              className={`font-bebas text-4xl sm:text-6xl lg:text-7xl tracking-tight transition-all duration-500 transform ${
                isHovered ? 'text-[#6E473B] translate-x-3' : 'text-[#291C0E]'
              }`}
            >
              {title}
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-space">
            <span
              className={`font-serif-italic text-base sm:text-lg text-[#6E473B] transition-all duration-300 transform ${
                isHovered ? 'translate-y-0 opacity-100' : 'sm:-translate-y-1 opacity-80'
              }`}
            >
              {category}
            </span>

            {/* Direct Action Links */}
            <div className="flex items-center gap-2">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[10px] uppercase font-bold tracking-widest border border-[#291C0E]/40 px-2.5 py-1 rounded-sm hover:bg-[#291C0E] hover:text-[#E1D4C2] transition-colors"
                >
                  [ REPO ]
                </a>
              )}
              {liveUrl && liveUrl !== '#' && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[10px] uppercase font-bold tracking-widest bg-[#6E473B] text-[#E1D4C2] px-2.5 py-1 rounded-sm hover:bg-[#291C0E] transition-colors"
                >
                  [ LIVE ]
                </a>
              )}
              <div
                className={`w-8 h-8 rounded-full border border-[#291C0E]/40 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  isHovered
                    ? 'bg-[#6E473B] text-[#E1D4C2] border-[#6E473B] rotate-45 scale-110'
                    : 'bg-transparent text-[#291C0E]'
                }`}
              >
                →
              </div>
            </div>
          </div>
        </div>

        {/* Sub Row: Problem Statement & Tech Stack Pills */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-2 border-t border-[#291C0E]/10">
          <p className="text-xs sm:text-sm font-space text-[#291C0E]/80 max-w-2xl leading-relaxed">
            {problem}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tech.map((t, idx) => (
              <span
                key={t}
                className={`font-mono text-[10px] uppercase border border-[#291C0E]/30 px-2 py-0.5 rounded-full transition-all duration-300 transform ${
                  isHovered
                    ? 'scale-100 opacity-100 bg-[#291C0E] text-[#E1D4C2]'
                    : 'scale-95 opacity-70 bg-transparent text-[#291C0E]'
                }`}
                style={{
                  transitionDelay: `${idx * 40}ms`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-[#6E473B] transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`}
      />
    </div>
  );
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [dispatchSent, setDispatchSent] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('contoh@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDispatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) return;
    setDispatchSent(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setDispatchSent(false);
    }, 4000);
  };

  const projects = [
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

  const principles = [
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

  const arsenalCategories = [
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

  const personalFacets = [
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

  const toyExperiments = [
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

  const deskGear = [
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

  const soundVibes = [
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

  const leisureCulture = [
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

  return (
    <div
      className={`min-h-screen bg-[#D8CCC4] text-[#291C0E] selection:bg-[#291C0E] selection:text-[#D8CCC4] flex flex-col justify-between p-4 sm:p-8 lg:p-12 relative overflow-x-hidden ${bebasNeue.variable} ${instrumentSerif.variable} ${spaceGrotesk.variable} font-space`}
    >
      <EditorialStyles />

      {/* Background Noise Grid Ringan */}
      <div className="bg-grain-optimized fixed inset-0 pointer-events-none z-50 opacity-40" />

      {/* Top Header */}
      <header className="w-full flex justify-between items-center border-b border-[#291C0E]/20 pb-4 relative z-10 animate-reveal-1 gap-4">
        {/* Left: Identity & Live Availability Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
          <div className="text-xs uppercase tracking-widest font-bold">
            <span>bell</span>
            <span className="text-[#6E473B] mx-2">/</span>
            <span className="font-normal opacity-80">Fullstack Engineer</span>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-[#6E473B] tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-[#6E473B] animate-pulse" />
            <span>[ AVAILABLE FOR ROLES ]</span>
          </div>
        </div>

        {/* Center: Anchor Navigation */}
        <nav className="hidden md:flex text-[11px] font-mono tracking-widest uppercase gap-6 lg:gap-8 opacity-80">
          <a href="#" className="hover:text-[#6E473B] transition-colors">
            01. HOME
          </a>
          <a href="#works" className="hover:text-[#6E473B] transition-colors">
            02. PROJECTS
          </a>
          <a href="#about" className="hover:text-[#6E473B] transition-colors">
            03. ABOUT
          </a>
          <a href="#hobbies" className="hover:text-[#6E473B] transition-colors">
            04. HOBI
          </a>
          <a href="#contact" className="hover:text-[#6E473B] transition-colors">
            05. CONTACT
          </a>
        </nav>

        {/* Right: Quick Action Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="font-mono text-[11px] font-bold uppercase tracking-widest border border-[#291C0E]/30 px-3.5 py-1.5 hover:bg-[#291C0E] hover:text-[#E1D4C2] transition-all cursor-pointer whitespace-nowrap"
          >
            {copied ? '[ COPIED ✓ ]' : 'COPY EMAIL'}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="my-auto py-6 relative z-10 flex flex-col">
        {/* Hero Section */}
        <div className="relative py-4">
          <div className="animate-reveal-1 flex items-center gap-2 mb-2 text-xs font-mono uppercase text-[#6E473B]">
            <span className="opacity-60">SYSTEMS & ARCHITECTURE</span>
            <span className="h-px bg-[#6E473B]/40 flex-1 max-w-[60px]" />
            <span className="font-serif-italic text-lg text-[#291C0E] tracking-normal">
              crafting brutalist & high-performance engineering
            </span>
          </div>

          <div className="animate-reveal-1 overflow-hidden">
            <h1 className="font-bebas text-[#6E473B] text-[18vw] leading-[0.78] font-black uppercase tracking-tighter block text-left">
              FULLSTACK
            </h1>
          </div>

          <div className="animate-reveal-2 overflow-hidden -mt-[2vw]">
            <h2 className="font-bebas text-[#291C0E] text-[20vw] leading-[0.75] font-black uppercase tracking-tight block text-left">
              DEVELOPER
            </h2>
          </div>

          {/* Editorial Micro-Spec Box */}
          <div className="animate-reveal-2 mt-4 lg:mt-0 lg:absolute lg:right-0 lg:bottom-4 max-w-md border-t lg:border-l lg:border-t-0 border-[#291C0E]/20 pt-3 lg:pt-0 lg:pl-6 text-[#291C0E] flex flex-col gap-2">
            <p className="font-serif-italic text-base sm:text-lg leading-snug text-[#291C0E]">
              &ldquo;Architecting high-performance web systems, scalable backend logic, and refined tactile interfaces.&rdquo;
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase text-[#6E473B] tracking-wider">
              <span>LOC: JAKARTA, ID (GMT+7)</span>
              <span className="opacity-40">/</span>
              <span>STACK: LARAVEL · NEXT.JS · C++</span>
              <span className="opacity-40">/</span>
              <span className="text-[#291C0E] font-bold">SPEC: PRODUCTION-READY</span>
            </div>
          </div>
        </div>

        {/* Banner / Strategic Callout */}
        <div
          id="capability"
          className="animate-reveal-3 w-full bg-[#291C0E] text-[#E1D4C2] p-5 sm:p-7 my-6 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase text-[#6E473B] tracking-widest font-bold">
                [ PRODUCTION ARCHITECTURE & RELIABILITY ]
              </span>
              <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-[#E1D4C2]">
                HIGH-THROUGHPUT CODE · ZERO COMPROMISE
              </h3>
            </div>

            <a
              href="#works"
              className="text-xs uppercase font-bold tracking-widest border border-[#E1D4C2]/30 px-5 py-3 hover:bg-[#E1D4C2] hover:text-[#291C0E] transition-all whitespace-nowrap"
            >
              EXPLORE ARCHIVE ↓
            </a>
          </div>
        </div>

        <div className="animate-reveal-3">
          <LargeIconOnlyLoop direction="left" />
        </div>

        {/* Selected Works Section */}
        <section id="works" className="animate-reveal-4 mt-4">
          <div className="flex justify-between items-center mb-2 text-xs font-mono uppercase text-[#6E473B]">
            <span>[ SELECTED INDEX ]</span>
            <span>PROVEN SYSTEMS & PRODUCTION REPOSITORIES</span>
          </div>

          <div className="flex flex-col border-t border-[#291C0E]/20">
            {projects.map((proj, idx) => (
              <StaggeredProjectItem
                key={proj.id}
                id={proj.id}
                title={proj.title}
                category={proj.category}
                problem={proj.problem}
                tech={proj.tech}
                repoUrl={proj.repoUrl}
                liveUrl={proj.liveUrl}
                index={idx}
              />
            ))}
          </div>
        </section>

        <div id="timeline" className="animate-reveal-4 mt-6">
          <LargeIconOnlyLoop direction="right" />
        </div>

        {/* SECTION 1: IDENTITY LEDGER / AUTOBIOGRAPHY */}
        <section id="about" className="animate-reveal-4 mt-12 sm:mt-16 border-t border-[#291C0E]/20 pt-8 sm:pt-10">
          <div className="flex justify-between items-center mb-6 text-xs font-mono uppercase text-[#6E473B]">
            <span>[ IDENTITY LEDGER / AUTOBIOGRAPHY ]</span>
            <span>DOSSIER NO. 01 // CORE PROFILE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Compact Monospaced Profile Metadata */}
            <div className="lg:col-span-4 flex flex-col gap-5 font-mono text-xs border-b lg:border-b-0 lg:border-r border-[#291C0E]/20 pb-6 lg:pb-0 lg:pr-8">
              <div className="border-b border-[#291C0E]/20 pb-3">
                <span className="text-[10px] uppercase text-[#6E473B] tracking-widest block mb-1">
                  ENGINEER SPEC
                </span>
                <h3 className="font-bebas text-3xl tracking-wide text-[#291C0E]">
                  BELL
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-[10px] uppercase text-[#6E473B] block">PRIMARY CALLING</span>
                  <p className="font-bold text-[#291C0E]">Fullstack Systems Architect & Creative Technologist</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-[#6E473B] block">GEOGRAPHIC COORDINATES</span>
                  <p className="text-[#291C0E]">Jakarta, Indonesia · UTC+07:00 (WIB)</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-[#6E473B] block">CORE DOMAIN SPECIALTY</span>
                  <p className="text-[#291C0E]">High-Throughput Engines, Real-Time Dashboards, Numerical Simulations</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-[#6E473B] block">FORMAL DISCIPLINE</span>
                  <p className="text-[#291C0E]">Computer Science Core · Algorithmic Foundation</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-[#6E473B] block">STATUS & ENGAGEMENT</span>
                  <p className="text-[#6E473B] font-bold">Open for Senior Engineering Roles & Architecture Consulting</p>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Manifesto / Editorial Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-sm sm:text-base font-space leading-relaxed text-[#291C0E]/90">
              <h3 className="font-serif-italic text-2xl sm:text-3xl text-[#291C0E]">
                Building resilient digital software that refuses to compromise between structural reliability and tactile aesthetic craftsmanship.
              </h3>

              <p>
                In an ecosystem often inundated with throwaway code, bloated dependencies, and homogeneous SaaS templates, I approach software construction with the discipline of an architect and the rigorous eye of a typographer. My journey started with a fascination for how data flows across networks, how state mutates deterministically, and how humans interact with machines through screens.
              </p>

              <p>
                Throughout my work, I operate across both ends of the engineering spectrum. On the backend, I architect mission-critical platforms in <strong className="text-[#291C0E] font-bold">Laravel, MySQL, and Redis</strong> where race conditions are unacceptable, inventory locks must be atomic, and telemetry pipelines must ingest high-density data streams in real time. On the frontend, I engineer fluid, tactile web applications using <strong className="text-[#291C0E] font-bold">React, Next.js, and TypeScript</strong>, ensuring every keyframe, hover transition, and layout computation honors the user’s cognitive flow.
              </p>

              <p>
                Beyond standard product stacks, my curiosity regularly pushes me into scientific and low-level computation. Constructing a numerical <strong className="text-[#291C0E] font-bold">Gravitational Lensing Engine in C++</strong> reinforced a foundational truth: true architectural mastery is not about memorizing framework APIs, but understanding the mathematical equations, memory models, and algorithmic bottlenecks that govern reality.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: PHILOSOPHY & MANIFESTO */}
        <section id="manifesto" className="animate-reveal-4 mt-12 sm:mt-16 border-t border-[#291C0E]/20 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-2">
            <div>
              <span className="font-mono text-xs uppercase text-[#6E473B] tracking-widest block mb-1">
                [ PHILOSOPHY & MANIFESTO ]
              </span>
              <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-[#291C0E]">
                HOW I THINK & BUILD
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#6E473B] uppercase tracking-wider">
              NON-NEGOTIABLE BENCHMARKS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#291C0E]/20">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="p-6 sm:p-8 border-r border-b border-[#291C0E]/20 flex flex-col justify-between hover:bg-[#291C0E]/[0.02] transition-colors group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-bold text-[#6E473B]">
                      {principle.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E473B] opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="font-bebas text-2xl sm:text-3xl text-[#291C0E] mb-2 tracking-wide group-hover:text-[#6E473B] transition-colors">
                    {principle.title}
                  </h4>

                  <p className="font-serif-italic text-sm sm:text-base text-[#6E473B] mb-3 leading-snug">
                    &ldquo;{principle.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-[#291C0E]/80 font-space leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: TECHNICAL SPECS (ARSENAL) */}
        <section id="arsenal" className="animate-reveal-4 mt-12 sm:mt-16 border-t border-[#291C0E]/20 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-2">
            <div>
              <span className="font-mono text-xs uppercase text-[#6E473B] tracking-widest block mb-1">
                [ TECHNICAL SPECS ]
              </span>
              <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-[#291C0E]">
                DAILY ARSENAL & TOOLING
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#6E473B] uppercase tracking-wider">
              BATTLE-TESTED STACKS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-[#291C0E]/20">
            {arsenalCategories.map((cat, idx) => (
              <div
                key={cat.domain}
                className="p-6 border-r border-b border-[#291C0E]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#6E473B] mb-3 tracking-widest flex items-center gap-2">
                    <span>SECTION 0{idx + 1}</span>
                    <span className="opacity-40">/</span>
                    <span>{cat.domain}</span>
                  </div>

                  <ul className="flex flex-col divide-y divide-[#291C0E]/10">
                    {cat.items.map((item) => (
                      <li key={item.name} className="py-2.5 flex justify-between items-center text-xs">
                        <span className="font-bold text-[#291C0E]">{item.name}</span>
                        <span className="font-mono text-[10px] text-[#6E473B]">{item.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: THE HUMAN BEHIND THE TERMINAL */}
        <section className="animate-reveal-4 mt-12 sm:mt-16 border-t border-[#291C0E]/20 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-2">
            <div>
              <span className="font-mono text-xs uppercase text-[#6E473B] tracking-widest block mb-1">
                [ THE HUMAN BEHIND THE TERMINAL ]
              </span>
              <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-[#291C0E]">
                BEYOND THE CODE
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#6E473B] uppercase tracking-wider">
              INTELLECTUAL OBSESSIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalFacets.map((facet) => (
              <div
                key={facet.label}
                className="p-5 border border-[#291C0E]/20 bg-[#291C0E]/[0.02] flex flex-col justify-between hover:border-[#6E473B] transition-colors"
              >
                <div>
                  <h4 className="font-mono text-xs uppercase font-bold text-[#6E473B] mb-2 tracking-wider">
                    {facet.label}
                  </h4>
                  <p className="text-xs sm:text-sm font-space text-[#291C0E]/80 leading-relaxed">
                    {facet.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: HOBBIES & CURATED PURSUITS */}
        <section id="hobbies" className="animate-reveal-4 mt-12 sm:mt-16 border-t border-[#291C0E]/20 pt-8 sm:pt-10">
          {/* Real-time Leisure Ticker */}
          <div className="border border-[#291C0E]/20 bg-[#291C0E]/[0.02] p-4 sm:p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#6E473B] animate-pulse" />
              <span className="font-mono text-xs uppercase font-bold text-[#291C0E] tracking-wider">
                [ REAL-TIME LEISURE TICKER ]
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#291C0E]/80">
              <div>
                <span className="text-[#6E473B] text-[10px] block">CURRENT CURIOSITY</span>
                <span>Audio WebGL Shaders</span>
              </div>
              <div>
                <span className="text-[#6E473B] text-[10px] block">ON HEAVY ROTATION</span>
                <span>Casiopea · Mint Jams (1982)</span>
              </div>
              <div>
                <span className="text-[#6E473B] text-[10px] block">DAILY CUP</span>
                <span>Ethiopian Natural Roast</span>
              </div>
            </div>
          </div>

          {/* Catalogue Index */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-2">
            <div>
              <span className="font-mono text-xs uppercase text-[#6E473B] tracking-widest block mb-1">
                [ CATALOGUE INDEX ]
              </span>
              <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-[#291C0E]">
                CURIOSITY & DOWNTIME ARCHIVE
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#6E473B] uppercase tracking-wider">
              SELECT CATEGORY TO INSPECT
            </span>
          </div>

          <Tabs defaultValue="experiments" className="w-full">
            <TabsList className="w-full flex-wrap justify-start gap-2 bg-transparent p-0 border-b border-[#291C0E]/20 pb-4 mb-6">
              <TabsTrigger
                value="experiments"
                className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-[#291C0E]/30 rounded-none data-[state=active]:bg-[#291C0E] data-[state=active]:text-[#E1D4C2] hover:bg-[#291C0E]/10 transition-all cursor-pointer"
              >
                01. TOY EXPERIMENTS
              </TabsTrigger>
              <TabsTrigger
                value="gear"
                className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-[#291C0E]/30 rounded-none data-[state=active]:bg-[#291C0E] data-[state=active]:text-[#E1D4C2] hover:bg-[#291C0E]/10 transition-all cursor-pointer"
              >
                02. DESK & GEAR
              </TabsTrigger>
              <TabsTrigger
                value="sound"
                className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-[#291C0E]/30 rounded-none data-[state=active]:bg-[#291C0E] data-[state=active]:text-[#E1D4C2] hover:bg-[#291C0E]/10 transition-all cursor-pointer"
              >
                03. SOUNDTRACK & VIBES
              </TabsTrigger>
              <TabsTrigger
                value="culture"
                className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-[#291C0E]/30 rounded-none data-[state=active]:bg-[#291C0E] data-[state=active]:text-[#E1D4C2] hover:bg-[#291C0E]/10 transition-all cursor-pointer"
              >
                04. CINEMA, GAMES & RITUALS
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: TOY EXPERIMENTS */}
            <TabsContent value="experiments" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {toyExperiments.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 border border-[#291C0E]/20 bg-[#291C0E]/[0.02] flex flex-col justify-between hover:bg-[#291C0E]/[0.04] transition-colors relative group"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-xs font-bold text-[#6E473B] flex items-center gap-1.5">
                          <span>{exp.id}</span>
                          <span className="opacity-40">/</span>
                          <span>{exp.category}</span>
                        </span>
                        <Badge
                          variant="outline"
                          className="font-mono text-[9px] uppercase border-[#291C0E]/40 text-[#291C0E] rounded-none py-0.5 px-1.5"
                        >
                          {exp.status}
                        </Badge>
                      </div>

                      <h4 className="font-bebas text-2xl sm:text-3xl text-[#291C0E] mb-2 tracking-wide group-hover:text-[#6E473B] transition-colors">
                        {exp.title}
                      </h4>

                      <p className="text-xs sm:text-sm font-space text-[#291C0E]/80 leading-relaxed mb-6">
                        {exp.lorem}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#291C0E]/10">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase border border-[#291C0E]/30 px-2 py-0.5 rounded-full text-[#291C0E]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* TAB 2: DESK & GEAR */}
            <TabsContent value="gear" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deskGear.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 border border-[#291C0E]/20 bg-[#291C0E]/[0.02] flex flex-col justify-between hover:bg-[#291C0E]/[0.04] transition-colors group"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-xs text-[#6E473B] uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="font-mono text-[10px] uppercase border border-[#6E473B]/40 text-[#6E473B] px-2 py-0.5 font-bold">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="font-bebas text-2xl sm:text-3xl text-[#291C0E] mb-2 tracking-wide group-hover:text-[#6E473B] transition-colors">
                        {item.name}
                      </h4>

                      <p className="font-mono text-[11px] text-[#6E473B] mb-3 leading-relaxed">
                        {item.specs}
                      </p>

                      <p className="text-xs sm:text-sm font-space text-[#291C0E]/80 leading-relaxed">
                        {item.lorem}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* TAB 3: SOUNDTRACK & VIBES */}
            <TabsContent value="sound" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {soundVibes.map((vibe) => (
                  <div
                    key={vibe.title}
                    className="p-6 border border-[#291C0E]/20 bg-[#291C0E]/[0.02] flex flex-col justify-between hover:bg-[#291C0E]/[0.04] transition-colors group"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-[#6E473B] uppercase tracking-widest block mb-2">
                        {vibe.era}
                      </span>

                      <h4 className="font-bebas text-2xl sm:text-3xl text-[#291C0E] mb-3 tracking-wide group-hover:text-[#6E473B] transition-colors">
                        {vibe.title}
                      </h4>

                      <p className="text-xs sm:text-sm font-space text-[#291C0E]/80 leading-relaxed mb-6">
                        {vibe.lorem}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#291C0E]/10">
                      <span className="font-mono text-[10px] uppercase text-[#6E473B] block mb-2">
                        FEATURED ARTISTS / RECORDS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {vibe.artists.map((artist) => (
                          <span
                            key={artist}
                            className="font-mono text-[10px] uppercase border border-[#291C0E]/30 px-2 py-0.5 rounded-full"
                          >
                            {artist}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* TAB 4: CINEMA & RITUALS */}
            <TabsContent value="culture" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leisureCulture.map((item) => (
                  <div
                    key={item.theme}
                    className="p-6 border border-[#291C0E]/20 bg-[#291C0E]/[0.02] flex flex-col justify-between hover:bg-[#291C0E]/[0.04] transition-colors group"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-[#6E473B] uppercase tracking-widest block mb-2">
                        {item.format}
                      </span>

                      <h4 className="font-bebas text-2xl sm:text-3xl text-[#291C0E] mb-3 tracking-wide group-hover:text-[#6E473B] transition-colors">
                        {item.theme}
                      </h4>

                      <p className="text-xs sm:text-sm font-space text-[#291C0E]/80 leading-relaxed mb-6">
                        {item.lorem}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#291C0E]/10">
                      <span className="font-mono text-[10px] uppercase text-[#6E473B] block mb-2">
                        CURATED ANTHOLOGY
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.favs.map((fav) => (
                          <span
                            key={fav}
                            className="font-mono text-[10px] uppercase border border-[#291C0E]/30 px-2 py-0.5 rounded-full"
                          >
                            {fav}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

      </main>

      {/* Interactive Contact Ledger & Footer */}
      <footer
        id="contact"
        className="w-full relative z-10 mt-12 sm:mt-16 bg-[#D8CCC4] text-[#291C0E] border-t border-[#291C0E]/20 pt-10 sm:pt-14 pb-6 animate-reveal-4 flex flex-col gap-10 sm:gap-12"
      >
        {/* Ledger Header & Availability Ticker */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-6 border-b border-[#291C0E]/20">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#6E473B] tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-[#6E473B]" />
              <span>[ 05 // INTERACTIVE CONTACT LEDGER ]</span>
              <span className="text-[#291C0E]/40">·</span>
              <span className="text-[#291C0E]/60">DIRECT DISPATCH TERMINAL</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-6xl lg:text-7xl tracking-wider uppercase text-[#291C0E] leading-none">
              INITIATE DIRECT DISPATCH
            </h2>
            <p className="text-xs sm:text-sm font-space text-[#291C0E]/80 leading-relaxed max-w-xl">
              Whether structuring high-concurrency systems, discussing tailored fullstack engineering, or exploring technical leadership—transmit a brief dispatch or connect across direct channels.
            </p>
          </div>

          {/* Availability Ticker (Pulse) */}
          <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider bg-[#291C0E]/[0.03] border border-[#291C0E]/20 px-3.5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-[#291C0E] font-bold">
              [ OPEN FOR COLLABORATION &amp; SELECTIVE ROLES ]
            </span>
          </div>
        </div>

        {/* Two-Column Contact Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Kolom Kiri: Direct Dispatch Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[#291C0E]/20 pb-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#291C0E]/80 font-bold">
                {'// 01. DIRECT DISPATCH FORM'}
              </span>
              <span className="font-mono text-[10px] uppercase text-[#6E473B] tracking-wider font-semibold">
                BUFFER: {dispatchSent ? 'TRANSMITTED' : 'AWAITING_INPUT'}
              </span>
            </div>

            <form onSubmit={handleDispatchSubmit} className="flex flex-col gap-5">
              {/* Field: Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="dispatch-name" className="font-mono text-[10px] uppercase tracking-widest text-[#291C0E]/70 font-semibold">
                  NAME / IDENTIFIER <span className="text-[#6E473B]">*</span>
                </label>
                <input
                  id="dispatch-name"
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. John Doe / Engineering Lead"
                  className="w-full bg-transparent border-b border-[#291C0E]/30 focus:border-[#291C0E] outline-none py-2 font-mono text-xs sm:text-sm text-[#291C0E] transition-colors placeholder:text-[#291C0E]/40 rounded-none"
                />
              </div>

              {/* Field: Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="dispatch-email" className="font-mono text-[10px] uppercase tracking-widest text-[#291C0E]/70 font-semibold">
                  RETURN CHANNEL (EMAIL) <span className="text-[#6E473B]">*</span>
                </label>
                <input
                  id="dispatch-email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="e.g. lead@organization.com"
                  className="w-full bg-transparent border-b border-[#291C0E]/30 focus:border-[#291C0E] outline-none py-2 font-mono text-xs sm:text-sm text-[#291C0E] transition-colors placeholder:text-[#291C0E]/40 rounded-none"
                />
              </div>

              {/* Field: Brief Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="dispatch-message" className="font-mono text-[10px] uppercase tracking-widest text-[#291C0E]/70 font-semibold">
                  BRIEF MESSAGE / SCOPE <span className="text-[#6E473B]">*</span>
                </label>
                <textarea
                  id="dispatch-message"
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Outline engineering requirements, challenge parameters, or role details..."
                  className="w-full bg-transparent border-b border-[#291C0E]/30 focus:border-[#291C0E] outline-none py-2 font-mono text-xs sm:text-sm text-[#291C0E] transition-colors placeholder:text-[#291C0E]/40 resize-none rounded-none"
                />
              </div>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={dispatchSent}
                  className="font-mono text-xs uppercase font-bold tracking-widest border border-[#291C0E]/30 text-[#291C0E] px-6 py-3 hover:bg-[#291C0E] hover:text-[#E1D4C2] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {dispatchSent ? '[ DISPATCH TRANSMITTED ✓ ]' : '[ SEND DISPATCH → ]'}
                </button>

                {dispatchSent ? (
                  <span className="font-mono text-[10px] text-emerald-700 font-semibold">
                    {'// TELEMETRY LOGGED: INBOX BUFFER UPDATED'}
                  </span>
                ) : (
                  <span className="font-mono text-[10px] text-[#291C0E]/60">
                    {'// DIRECT TRANSMISSION VIA ASYNC DISPATCH'}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Kolom Kanan: Direct Telemetry & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[#291C0E]/20 pb-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#291C0E]/80 font-bold">
                {'// 02. DIRECT TELEMETRY & CHANNELS'}
              </span>
              <span className="font-mono text-[10px] uppercase text-[#6E473B] tracking-wider font-semibold">
                ONLINE // TLS 1.3
              </span>
            </div>

            {/* Quick Copy Email Box */}
            <div className="border border-[#291C0E]/20 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase text-[#291C0E]/60">
                <span>PRIMARY INBOX</span>
                <span>RESPONSE TIME: &lt; 24H</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#291C0E]">
                  contoh@gmail.com
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono text-xs uppercase font-bold tracking-widest border border-[#291C0E]/30 text-[#291C0E] px-4 py-2 hover:bg-[#291C0E] hover:text-[#E1D4C2] transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
                >
                  {copied ? '[ COPIED ✓ ]' : '[ COPY EMAIL ]'}
                </button>
              </div>
            </div>

            {/* External Links Ledger Table */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#291C0E]/60">
                INDEXED EXTERNAL NODES:
              </span>
              <div className="border border-[#291C0E]/20 divide-y divide-[#291C0E]/20 text-xs font-mono">
                <a
                  href="https://github.com/Adlianto"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 hover:bg-[#291C0E]/[0.03] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#6E473B] font-bold">01</span>
                    <span className="uppercase font-bold tracking-wider text-[#291C0E]">
                      GITHUB
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#291C0E]/70 group-hover:text-[#291C0E]">
                    <span className="text-[11px]">@Adlianto</span>
                    <span className="text-sm font-bold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 hover:bg-[#291C0E]/[0.03] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#6E473B] font-bold">02</span>
                    <span className="uppercase font-bold tracking-wider text-[#291C0E]">
                      LINKEDIN
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#291C0E]/70 group-hover:text-[#291C0E]">
                    <span className="text-[11px]">in/bell-dev</span>
                    <span className="text-sm font-bold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                </a>

                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 hover:bg-[#291C0E]/[0.03] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#6E473B] font-bold">03</span>
                    <span className="uppercase font-bold tracking-wider text-[#291C0E]">
                      TELEGRAM / DISCORD
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#291C0E]/70 group-hover:text-[#291C0E]">
                    <span className="text-[11px]">@bell_sys</span>
                    <span className="text-sm font-bold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Fast Nav helper */}
            <div className="flex justify-between items-center text-[10px] font-mono uppercase text-[#291C0E]/60 pt-2 border-t border-[#291C0E]/15">
              <span>TIMEZONE: GMT+7 (WESTERN INDONESIA)</span>
              <a href="#" className="hover:text-[#6E473B] transition-colors">
                [ RETURN TO TOP ↑ ]
              </a>
            </div>
          </div>
        </div>

        {/* Micro Bottom Bar */}
        <div className="w-full border-t border-[#291C0E]/20 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono uppercase text-[#291C0E]/70 gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#6E473B]" />
            <span>© 2026 BELL · FULLSTACK &amp; SYSTEMS ARCHITECT</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] tracking-wider">
            <span>COORD: -6.2088° S, 106.8456° E</span>
            <span className="text-[#6E473B]">/</span>
            <span>JAKARTA, ID (UTC+07:00)</span>
            <span className="text-[#6E473B]">/</span>
            <span className="text-emerald-700 font-semibold">STATUS: OPTIMAL</span>
          </div>
        </div>
      </footer>

      {/* Clean Editorial Side Rails */}
      <div className="hidden lg:block fixed left-3 top-1/2 -translate-y-1/2 writing-mode-vertical rotate-180 text-[10px] font-mono tracking-widest text-[#6E473B]/50 pointer-events-none z-10">
        SYSTEM: OPTIMAL // COORD: -6.2088° S, 106.8456° E // JKT (UTC+07:00)
      </div>
      <div className="hidden lg:block fixed right-3 top-1/2 -translate-y-1/2 writing-mode-vertical text-[10px] font-mono tracking-widest text-[#6E473B]/50 pointer-events-none z-10">
        HIGH-CRAFT REFINED INTERFACES & RESILIENT BACKEND SYSTEMS
      </div>
    </div>
  );
}


