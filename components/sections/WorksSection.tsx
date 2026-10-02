import React from 'react';
import { projects, ProjectItem } from '@/data/portfolio';

interface StaggeredProjectProps extends ProjectItem {
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
}: StaggeredProjectProps) => {
  return (
    <div
      className="py-6 sm:py-8 border-b border-border-hairline relative overflow-hidden group transition-all duration-300 hover:bg-surface-1/50 px-2 sm:px-4"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex flex-col gap-4 relative z-10">
        {/* Main Row: Numerals, Title, Category, Action Links & Arrow */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex items-baseline gap-4 sm:gap-8">
            <span className="text-xs font-mono font-bold transition-all duration-300 text-ink-muted group-hover:text-ink-primary group-hover:translate-x-1">
              {id}
            </span>

            <h4 className="font-bebas text-4xl sm:text-6xl lg:text-7xl tracking-tight transition-all duration-300 transform text-ink-primary group-hover:translate-x-2">
              {title}
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-space">
            <span className="font-serif-italic text-base sm:text-lg text-ink-muted transition-all duration-300 transform opacity-90 sm:-translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-ink-primary">
              {category}
            </span>

            {/* Direct Action Links */}
            <div className="flex items-center gap-2">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase font-bold tracking-widest border border-border-strong text-ink-primary px-2.5 py-1 rounded-sm hover:bg-ink-primary hover:text-canvas transition-colors"
                >
                  [ REPO ]
                </a>
              )}
              {liveUrl && liveUrl !== '#' && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase font-bold tracking-widest bg-ink-primary text-canvas px-2.5 py-1 rounded-sm hover:opacity-90 transition-opacity"
                >
                  [ LIVE ]
                </a>
              )}
              <div className="w-8 h-8 rounded-full border border-border-strong flex items-center justify-center font-bold text-sm transition-all duration-300 bg-transparent text-ink-primary group-hover:border-accent-vermilion group-hover:text-accent-vermilion group-hover:rotate-45 group-hover:scale-105">
                ↗
              </div>
            </div>
          </div>
        </div>

        {/* Sub Row: Problem Statement & Tech Stack Pills */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-2 border-t border-border-hairline/60">
          <p className="text-xs sm:text-sm font-space text-ink-muted max-w-2xl leading-relaxed">
            {problem}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tech.map((t, idx) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase border border-border-strong/60 px-2 py-0.5 rounded-full transition-all duration-300 transform scale-95 opacity-80 bg-transparent text-ink-primary group-hover:scale-100 group-hover:opacity-100 group-hover:bg-ink-primary group-hover:text-canvas"
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

      {/* Single Vermilion Hairline Underline Tipis on Hover */}
      <div className="absolute bottom-0 left-0 h-[1.5px] bg-accent-vermilion transition-all duration-300 w-0 group-hover:w-full" />
    </div>
  );
};

export function WorksSection() {
  return (
    <>
      {/* Selected Works Section */}
      <section id="works" className="animate-reveal-4 mt-4 section-cv">
        <div className="flex justify-between items-center mb-2 text-xs font-mono uppercase text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
            [ SELECTED INDEX ]
          </span>
          <span className="opacity-70">PROVEN SYSTEMS &amp; PRODUCTION REPOSITORIES</span>
        </div>

        <div className="flex flex-col border-t border-border-hairline">
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
    </>
  );
}
