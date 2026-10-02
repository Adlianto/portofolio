import React from 'react';

export function LedgerSection() {
  return (
    <section
      id="about"
      className="animate-reveal-4 mt-12 sm:mt-16 border-t border-border-hairline pt-8 sm:pt-10 section-cv"
    >
      <div className="flex justify-between items-center mb-6 text-xs font-mono uppercase text-ink-muted">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
          [ IDENTITY LEDGER / AUTOBIOGRAPHY ]
        </span>
        <span className="opacity-70">DOSSIER NO. 01 // CORE PROFILE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Compact Monospaced Profile Metadata */}
        <div className="lg:col-span-4 flex flex-col gap-5 font-mono text-xs border-b lg:border-b-0 lg:border-r border-border-hairline pb-6 lg:pb-0 lg:pr-8">
          <div className="border-b border-border-hairline pb-3">
            <span className="text-[10px] uppercase text-ink-muted tracking-widest block mb-1">
              ENGINEER SPEC
            </span>
            <h3 className="font-bebas text-3xl tracking-wide text-ink-primary">
              BELL
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[10px] uppercase text-ink-muted block">PRIMARY CALLING</span>
              <p className="font-bold text-ink-primary">Fullstack Systems Architect &amp; Creative Technologist</p>
            </div>

            <div>
              <span className="text-[10px] uppercase text-ink-muted block">GEOGRAPHIC COORDINATES</span>
              <p className="text-ink-primary">Jakarta, Indonesia · UTC+07:00 (WIB)</p>
            </div>

            <div>
              <span className="text-[10px] uppercase text-ink-muted block">CORE DOMAIN SPECIALTY</span>
              <p className="text-ink-primary">High-Throughput Engines, Real-Time Dashboards, Numerical Simulations</p>
            </div>

            <div>
              <span className="text-[10px] uppercase text-ink-muted block">FORMAL DISCIPLINE</span>
              <p className="text-ink-primary">Computer Science Core · Algorithmic Foundation</p>
            </div>

            <div>
              <span className="text-[10px] uppercase text-ink-muted block">STATUS &amp; ENGAGEMENT</span>
              <p className="text-ink-primary font-bold flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion animate-pulse shrink-0" />
                <span>Open for Senior Engineering Roles &amp; Architecture Consulting</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Technical Manifesto / Editorial Narrative */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-sm sm:text-base font-space leading-relaxed text-ink-muted">
          <h3 className="font-serif-italic text-2xl sm:text-3xl text-ink-primary leading-tight">
            Building resilient digital software that refuses to compromise between structural reliability and tactile aesthetic craftsmanship.
          </h3>

          <p>
            In an ecosystem often inundated with throwaway code, bloated dependencies, and homogeneous SaaS templates, I approach software construction with the discipline of an architect and the rigorous eye of a typographer. My journey started with a fascination for how data flows across networks, how state mutates deterministically, and how humans interact with machines through screens.
          </p>

          <p>
            Throughout my work, I operate across both ends of the engineering spectrum. On the backend, I architect mission-critical platforms in <strong className="text-ink-primary font-bold">Laravel, MySQL, and Redis</strong> where race conditions are unacceptable, inventory locks must be atomic, and telemetry pipelines must ingest high-density data streams in real time. On the frontend, I engineer fluid, tactile web applications using <strong className="text-ink-primary font-bold">React, Next.js, and TypeScript</strong>, ensuring every keyframe, hover transition, and layout computation honors the user’s cognitive flow.
          </p>

          <p>
            Beyond standard product stacks, my curiosity regularly pushes me into scientific and low-level computation. Constructing a numerical <strong className="text-ink-primary font-bold">Gravitational Lensing Engine in C++</strong> reinforced a foundational truth: true architectural mastery is not about memorizing framework APIs, but understanding the mathematical equations, memory models, and algorithmic bottlenecks that govern reality.
          </p>
        </div>
      </div>
    </section>
  );
}
