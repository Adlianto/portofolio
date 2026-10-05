import React from 'react';
import { CopyEmailButton } from '@/components/CopyEmailButton';
import { ThemeToggle } from '@/components/ThemeToggle';

export function HeroSection() {
  return (
    <>
      {/* Top Header */}
      <header className="w-full flex justify-between items-center border-b border-border-hairline pb-4 relative z-10 animate-reveal-1 gap-4">
        {/* Left: Identity & Live Availability Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
          <div className="text-xs uppercase tracking-widest font-bold text-ink-primary">
            <span>bell</span>
            <span className="text-ink-muted/40 mx-2">/</span>
            <span className="font-normal text-ink-muted">Fullstack Engineer</span>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-ink-primary tracking-wider font-semibold">
            <span className="inline-block w-2 h-2 rounded-full bg-accent-vermilion animate-pulse" />
            <span>[ AVAILABLE FOR ROLES ]</span>
          </div>
        </div>

        {/* Center: Anchor Navigation */}
        <nav className="hidden md:flex text-[11px] font-mono tracking-widest uppercase gap-6 lg:gap-8 text-ink-muted">
          <a href="#" className="hover:text-ink-primary transition-colors">
            01. HOME
          </a>
          <a href="#works" className="hover:text-ink-primary transition-colors">
            02. PROJECTS
          </a>
          <a href="#about" className="hover:text-ink-primary transition-colors">
            03. ABOUT
          </a>
          <a href="#hobbies" className="hover:text-ink-primary transition-colors">
            04. HOBI
          </a>
          <a href="#contact" className="hover:text-ink-primary transition-colors">
            05. CONTACT
          </a>
        </nav>

        {/* Right: Quick Action Client Islands (Theme Toggle & Copy Email) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />
          <CopyEmailButton
            label="COPY EMAIL"
            copiedLabel="[ COPIED ✓ ]"
            className="font-mono text-[11px] font-bold uppercase tracking-widest border border-border-strong px-3.5 py-1.5 hover:bg-ink-primary hover:text-canvas transition-all cursor-pointer whitespace-nowrap text-ink-primary"
          />
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-4">
        <div className="animate-reveal-1 flex items-center gap-2 mb-2 text-xs font-mono uppercase text-ink-muted">
          <span className="opacity-75">SYSTEMS &amp; ARCHITECTURE</span>
          <span className="h-px bg-border-hairline flex-1 max-w-[60px]" />
          <span className="font-serif-italic text-lg text-ink-primary tracking-normal">
            crafting brutalist &amp; high-performance engineering
          </span>
        </div>

        {/* Display Titles */}
        <div className="overflow-hidden min-h-[14vw]">
          <h1 className="font-bebas text-accent-hero text-[18vw] leading-[0.78] font-black uppercase tracking-tighter block text-left select-none transition-colors duration-200">
            FULLSTACK
          </h1>
        </div>

        <div className="overflow-hidden -mt-[2vw] min-h-[15vw]">
          <h2 className="font-bebas text-ink-primary text-[20vw] leading-[0.75] font-black uppercase tracking-tight block text-left select-none transition-colors duration-200">
            DEVELOPER
          </h2>
        </div>
      </div>

      {/* Banner / Strategic Callout */}
      <div
        id="capability"
        className="animate-reveal-3 w-full bg-surface-contrast text-surface-contrast-text border border-border-hairline p-5 sm:p-7 my-6 relative overflow-hidden transition-colors duration-200"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase text-surface-contrast-text/80 tracking-widest font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
              [ PRODUCTION ARCHITECTURE &amp; RELIABILITY ]
            </span>
            <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-surface-contrast-text">
              HIGH-THROUGHPUT CODE · ZERO COMPROMISE
            </h3>
          </div>

          <a
            href="#works"
            className="text-xs uppercase font-bold tracking-widest border border-surface-contrast-text/30 px-5 py-3 hover:bg-surface-contrast-text hover:text-surface-contrast transition-all whitespace-nowrap"
          >
            EXPLORE ARCHIVE ↓
          </a>
        </div>
      </div>
    </>
  );
}
