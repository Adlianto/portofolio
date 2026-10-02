import React from 'react';
import { principles } from '@/data/portfolio';

export function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="animate-reveal-4 mt-12 sm:mt-16 border-t border-border-hairline pt-8 sm:pt-10 section-cv"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-2">
        <div>
          <span className="font-mono text-xs uppercase text-ink-muted tracking-widest block mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
            [ PHILOSOPHY &amp; MANIFESTO ]
          </span>
          <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-ink-primary">
            HOW I THINK &amp; BUILD
          </h3>
        </div>
        <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          NON-NEGOTIABLE BENCHMARKS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border-hairline">
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="p-6 sm:p-8 border-r border-b border-border-hairline flex flex-col justify-between hover:bg-surface-1/40 transition-colors group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs font-bold text-ink-primary">
                  {principle.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              <h4 className="font-bebas text-2xl sm:text-3xl text-ink-primary mb-2 tracking-wide group-hover:translate-x-1 transition-transform">
                {principle.title}
              </h4>

              <p className="font-serif-italic text-sm sm:text-base text-ink-muted mb-3 leading-snug">
                &ldquo;{principle.tagline}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-ink-muted font-space leading-relaxed">
                {principle.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
