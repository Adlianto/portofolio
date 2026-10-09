'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  toyExperiments,
  deskGear,
  soundVibes,
  leisureCulture,
} from '@/data/portfolio';

export function CatalogueIndexTabs() {
  return (
    <Tabs defaultValue="experiments" className="w-full">
      <TabsList className="w-full flex-wrap justify-start gap-2 bg-transparent p-0 border-b border-border-hairline pb-4 mb-6">
        <TabsTrigger
          value="experiments"
          className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-border-strong rounded-none text-ink-primary data-[state=active]:bg-ink-primary data-[state=active]:text-canvas data-[state=active]:border-accent-vermilion hover:bg-surface-1 transition-all cursor-pointer relative"
        >
          01. TOY EXPERIMENTS
        </TabsTrigger>
        <TabsTrigger
          value="gear"
          className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-border-strong rounded-none text-ink-primary data-[state=active]:bg-ink-primary data-[state=active]:text-canvas data-[state=active]:border-accent-vermilion hover:bg-surface-1 transition-all cursor-pointer relative"
        >
          02. DESK &amp; GEAR
        </TabsTrigger>
        <TabsTrigger
          value="sound"
          className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-border-strong rounded-none text-ink-primary data-[state=active]:bg-ink-primary data-[state=active]:text-canvas data-[state=active]:border-accent-vermilion hover:bg-surface-1 transition-all cursor-pointer relative"
        >
          03. SOUNDTRACK &amp; VIBES
        </TabsTrigger>
        <TabsTrigger
          value="culture"
          className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-border-strong rounded-none text-ink-primary data-[state=active]:bg-ink-primary data-[state=active]:text-canvas data-[state=active]:border-accent-vermilion hover:bg-surface-1 transition-all cursor-pointer relative"
        >
          04. CINEMA, GAMES &amp; RITUALS
        </TabsTrigger>
      </TabsList>

      {/* TAB 1: TOY EXPERIMENTS */}
      <TabsContent value="experiments" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toyExperiments.map((exp) => (
            <div
              key={exp.id}
              className="p-6 border border-border-hairline bg-surface-1/40 flex flex-col justify-between hover:bg-surface-1/80 hover:border-border-strong transition-all relative group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs font-bold text-ink-muted flex items-center gap-1.5">
                    <span>{exp.id}</span>
                    <span className="opacity-40">/</span>
                    <span>{exp.category}</span>
                  </span>
                  <Badge
                    variant="outline"
                    className="font-mono text-[9px] uppercase border-border-strong text-ink-muted rounded-none py-0.5 px-1.5"
                  >
                    {exp.status}
                  </Badge>
                </div>

                <h4 className="font-bebas text-2xl sm:text-3xl text-ink-primary mb-2 tracking-wide group-hover:translate-x-1 transition-transform">
                  {exp.title}
                </h4>

                <p className="text-xs sm:text-sm font-space text-ink-muted leading-relaxed mb-6">
                  {exp.lorem}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-hairline/60">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase border border-border-hairline px-2 py-0.5 rounded-full text-ink-muted"
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
              className="p-6 border border-border-hairline bg-surface-1/40 flex flex-col justify-between hover:bg-surface-1/80 hover:border-border-strong transition-all group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-xs text-ink-muted uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase border border-border-strong text-ink-muted px-2 py-0.5 font-bold">
                    {item.tag}
                  </span>
                </div>

                <h4 className="font-bebas text-2xl sm:text-3xl text-ink-primary mb-2 tracking-wide group-hover:translate-x-1 transition-transform">
                  {item.name}
                </h4>

                <p className="font-mono text-[11px] text-ink-muted mb-3 leading-relaxed">
                  {item.specs}
                </p>

                <p className="text-xs sm:text-sm font-space text-ink-muted leading-relaxed">
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
              className="p-6 border border-border-hairline bg-surface-1/40 flex flex-col justify-between hover:bg-surface-1/80 hover:border-border-strong transition-all group"
            >
              <div>
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest block mb-2 font-semibold">
                  {vibe.era}
                </span>

                <h4 className="font-bebas text-2xl sm:text-3xl text-ink-primary mb-3 tracking-wide group-hover:translate-x-1 transition-transform">
                  {vibe.title}
                </h4>

                <p className="text-xs sm:text-sm font-space text-ink-muted leading-relaxed mb-6">
                  {vibe.lorem}
                </p>
              </div>

              <div className="pt-4 border-t border-border-hairline/60">
                <span className="font-mono text-[10px] uppercase text-ink-muted block mb-2 font-semibold">
                  FEATURED ARTISTS / RECORDS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {vibe.artists.map((artist) => (
                    <span
                      key={artist}
                      className="font-mono text-[10px] uppercase border border-border-hairline px-2 py-0.5 rounded-full text-ink-muted"
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

      {/* TAB 4 */}
      <TabsContent value="culture" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leisureCulture.map((item) => (
            <div
              key={item.theme}
              className="p-6 border border-border-hairline bg-surface-1/40 flex flex-col justify-between hover:bg-surface-1/80 hover:border-border-strong transition-all group"
            >
              <div>
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest block mb-2 font-semibold">
                  {item.format}
                </span>

                <h4 className="font-bebas text-2xl sm:text-3xl text-ink-primary mb-3 tracking-wide group-hover:translate-x-1 transition-transform">
                  {item.theme}
                </h4>

                <p className="text-xs sm:text-sm font-space text-ink-muted leading-relaxed mb-6">
                  {item.lorem}
                </p>
              </div>

              <div className="pt-4 border-t border-border-hairline/60">
                <span className="font-mono text-[10px] uppercase text-ink-muted block mb-2 font-semibold">
                  CURATED ANTHOLOGY
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.favs.map((fav) => (
                    <span
                      key={fav}
                      className="font-mono text-[10px] uppercase border border-border-hairline px-2 py-0.5 rounded-full text-ink-muted"
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
  );
}
