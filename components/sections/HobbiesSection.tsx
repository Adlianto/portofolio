import React from 'react';
import { personalFacets } from '@/data/portfolio';
import { CatalogueIndexTabs } from '@/components/CatalogueIndexTabs';

export function HobbiesSection() {
  return (
    <>
      {/* SECTION: THE HUMAN BEHIND THE TERMINAL */}
      <section className="animate-reveal-4 mt-12 sm:mt-16 border-t border-border-hairline pt-8 sm:pt-10 section-cv">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-2">
          <div>
            <span className="font-mono text-xs uppercase text-ink-muted tracking-widest block mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
              [ THE HUMAN BEHIND THE TERMINAL ]
            </span>
            <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-ink-primary">
              BEYOND THE CODE
            </h3>
          </div>
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
            INTELLECTUAL OBSESSIONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalFacets.map((facet) => (
            <div
              key={facet.label}
              className="p-5 border border-border-hairline bg-surface-1/40 flex flex-col justify-between hover:border-border-strong transition-colors"
            >
              <div>
                <h4 className="font-mono text-xs uppercase font-bold text-ink-primary mb-2 tracking-wider flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent-vermilion" />
                  {facet.label}
                </h4>
                <p className="text-xs sm:text-sm font-space text-ink-muted leading-relaxed">
                  {facet.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: HOBBIES & CURATED PURSUITS */}
      <section id="hobbies" className="animate-reveal-4 mt-12 sm:mt-16 border-t border-border-hairline pt-8 sm:pt-10 section-cv">
        {/* Real-time Leisure Ticker */}
        <div className="border border-border-hairline bg-surface-1/40 p-4 sm:p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-accent-vermilion animate-pulse" />
            <span className="font-mono text-xs uppercase font-bold text-ink-primary tracking-wider">
              [ REAL-TIME LEISURE TICKER ]
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-ink-muted">
            <div>
              <span className="text-ink-muted text-[10px] block font-semibold">CURRENT CURIOSITY</span>
              <span className="text-ink-primary">Audio WebGL Shaders</span>
            </div>
            <div>
              <span className="text-ink-muted text-[10px] block font-semibold">ON HEAVY ROTATION</span>
              <span className="text-ink-primary">Casiopea · Mint Jams (1982)</span>
            </div>
            <div>
              <span className="text-ink-muted text-[10px] block font-semibold">DAILY CUP</span>
              <span className="text-ink-primary">Ethiopian Natural Roast</span>
            </div>
          </div>
        </div>

        {/* Catalogue Index */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-2">
          <div>
            <span className="font-mono text-xs uppercase text-ink-muted tracking-widest block mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
              [ CATALOGUE INDEX ]
            </span>
            <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-ink-primary">
              CURIOSITY &amp; DOWNTIME ARCHIVE
            </h3>
          </div>
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
            SELECT CATEGORY TO INSPECT
          </span>
        </div>

        {/* Client Island for Interactive Tabs */}
        <CatalogueIndexTabs />
      </section>
    </>
  );
}
