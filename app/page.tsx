'use client';

import React, { useState } from 'react';
import { Bebas_Neue, Instrument_Serif, Space_Grotesk } from 'next/font/google';

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
  tech: string[];
  index: number;
}

const StaggeredProjectItem = ({ id, title, category, tech, index }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-6 sm:py-8 border-b border-[#291C0E]/20 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-[#291C0E]/[0.03] px-2 sm:px-4"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 relative z-10">
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

          <div className="hidden md:flex gap-2">
            {tech.map((t, idx) => (
              <span
                key={t}
                className={`font-mono text-[10px] uppercase border border-[#291C0E]/30 px-2 py-0.5 rounded-full transition-all duration-300 transform ${
                  isHovered
                    ? 'scale-100 opacity-100 bg-[#291C0E] text-[#E1D4C2]'
                    : 'scale-95 opacity-60 bg-transparent text-[#291C0E]'
                }`}
                style={{
                  transitionDelay: `${idx * 60}ms`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
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

      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-[#6E473B] transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`}
      />
    </div>
  );
};

export default function Home() {
  const projects = [
    {
      id: '01',
      title: 'Lorem Ipsum',
      category: 'LANDING PAGE',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    },
    {
      id: '02',
      title: 'Lorem Ipsum',
      category: 'FRONTEND',
      tech: ['React', 'TypeScript', 'WebGL'],
    },
    {
      id: '03',
      title: 'Lorem Ipsum',
      category: 'BACKEND',
      tech: ['Canvas API', 'Three.js', 'CSS Grid'],
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
      <header className="w-full flex justify-between items-start border-b border-[#291C0E]/20 pb-4 relative z-10 animate-reveal-1">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#6E473B] animate-pulse" />
          <div className="text-xs uppercase tracking-widest font-bold">
            <span>bell</span>
            <span className="text-[#6E473B] mx-2">/</span>
            <span className="font-normal opacity-80">Fullstack</span>
          </div>
        </div>

        <div className="hidden sm:flex text-[10px] tracking-widest uppercase gap-8 opacity-70">
          <div>Lorem Ipsum</div>
          <div>Lorem Ipsum</div>
          <div>Lorem Ipsum</div>
        </div>

        <div className="text-xs font-bold uppercase tracking-widest hover:text-[#6E473B] transition-colors cursor-pointer">
          CONTACT
        </div>
      </header>

      {/* Main Content Area */}
      <main className="my-auto py-6 relative z-10 flex flex-col">
        {/* Hero Section */}
        <div className="relative">
          <div className="animate-reveal-1 flex items-center gap-2 mb-2 text-xs font-mono uppercase text-[#6E473B]">
            <span className="opacity-60">DIGITAL DESIGN & CODE</span>
            <span className="h-px bg-[#6E473B]/40 flex-1 max-w-[60px]" />
            <span className="font-serif-italic text-lg text-[#291C0E] tracking-normal">
              crafting brutalist interfaces
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
        </div>

        {/* Banner */}
        <div className="animate-reveal-3 w-full bg-[#291C0E] text-[#E1D4C2] p-4 sm:p-6 my-4 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
            <div className="flex items-center gap-4">
              <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase">
                Lorem Ipsum
              </h3>
            </div>

            <a
              href="#works"
              className="text-xs uppercase font-bold tracking-widest border border-[#E1D4C2]/30 px-4 py-4 hover:bg-[#E1D4C2] hover:text-[#291C0E] transition-all"
            >
              EXPLORE ARCHIVE
            </a>
          </div>
        </div>

        <div className="animate-reveal-3">
          <LargeIconOnlyLoop direction="left" />
        </div>

        <section id="works" className="animate-reveal-4 mt-2">
          <div className="flex justify-between items-center mb-2 text-xs font-mono uppercase text-[#6E473B]">
            <span>[ SELECTED INDEX ]</span>
            <span>HOVER TO EXPAND DETAILS</span>
          </div>

          <div className="flex flex-col border-t border-[#291C0E]/20">
            {projects.map((proj, idx) => (
              <StaggeredProjectItem
                key={proj.id}
                id={proj.id}
                title={proj.title}
                category={proj.category}
                tech={proj.tech}
                index={idx}
              />
            ))}
          </div>
        </section>

        <div className="animate-reveal-4 mt-6">
          <LargeIconOnlyLoop direction="right" />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full relative z-10 pt-6 border-t border-[#291C0E]/20 animate-reveal-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono uppercase opacity-75 gap-3 py-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#6E473B]" />
            <span>© 2026 CREATIVE FRONTEND ARCHITECTURE</span>
          </div>
          <div className="flex gap-8 font-bold">
            <a href="https://github.com/Adlianto" target="_blank" rel="noreferrer" className="hover:text-[#6E473B] transition-colors">
              GITHUB
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-[#6E473B] transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>

      <div className="hidden lg:block fixed left-3 top-1/2 -translate-y-1/2 writing-mode-vertical rotate-180 text-[10px] font-mono tracking-widest text-[#6E473B]/50 pointer-events-none z-10">
        Neque porro quisquam est qui dolorem ipsum quia dolor
      </div>
      <div className="hidden lg:block fixed right-3 top-1/2 -translate-y-1/2 writing-mode-vertical text-[10px] font-mono tracking-widest text-[#6E473B]/50 pointer-events-none z-10">
        Neque porro quisquam est qui dolorem ipsum quia dolor
      </div>
    </div>
  );
}
