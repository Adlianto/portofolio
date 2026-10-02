import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WorksSection } from '@/components/sections/WorksSection';
import { LedgerSection } from '@/components/sections/LedgerSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { ArsenalSection } from '@/components/sections/ArsenalSection';
import { HobbiesSection } from '@/components/sections/HobbiesSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink-primary selection:bg-ink-primary selection:text-canvas flex flex-col justify-between p-4 sm:p-8 lg:p-12 relative overflow-x-hidden font-space transition-colors duration-200">
      {/* Background Noise Grid */}
      <div className="bg-grain-optimized fixed inset-0 pointer-events-none z-50 opacity-40" />

      {/* Hero & Top Navigation */}
      <HeroSection />

      {/* Main Content Sections */}
      <main className="my-auto py-6 relative z-10 flex flex-col">
        <WorksSection />
        <LedgerSection />
        <ManifestoSection />
        <ArsenalSection />
        <HobbiesSection />
      </main>

      {/* Interactive Contact Ledger & Footer */}
      <ContactSection />

      {/* Clean Editorial Side Rails */}
      <div className="hidden lg:block fixed left-3 top-1/2 -translate-y-1/2 writing-mode-vertical rotate-180 text-[10px] font-mono tracking-widest text-ink-muted/50 pointer-events-none z-10">
        SYSTEM: OPTIMAL // COORD: -6.2088° S, 106.8456° E // JKT (UTC+07:00)
      </div>
      <div className="hidden lg:block fixed right-3 top-1/2 -translate-y-1/2 writing-mode-vertical text-[10px] font-mono tracking-widest text-ink-muted/50 pointer-events-none z-10">
        HIGH-CRAFT REFINED INTERFACES &amp; RESILIENT BACKEND SYSTEMS
      </div>
    </div>
  );
}
