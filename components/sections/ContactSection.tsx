'use client';

import React, { useState } from 'react';
import { CopyEmailButton } from '@/components/CopyEmailButton';

export function ContactSection() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [dispatchSent, setDispatchSent] = useState(false);

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

  return (
    <footer
      id="contact"
      className="w-full relative z-10 mt-12 sm:mt-16 bg-transparent text-ink-primary border-t border-border-hairline pt-10 sm:pt-14 pb-6 animate-reveal-4 flex flex-col gap-10 sm:gap-12 section-cv"
    >
      {/* Ledger Header & Availability Ticker */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-6 border-b border-border-hairline">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-ink-muted tracking-widest font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
            <span>[ 05 // INTERACTIVE CONTACT LEDGER ]</span>
            <span className="text-ink-faint">·</span>
            <span className="text-ink-muted">DIRECT DISPATCH TERMINAL</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl lg:text-7xl tracking-wider uppercase text-ink-primary leading-none">
            INITIATE DIRECT DISPATCH
          </h2>
          <p className="text-xs sm:text-sm font-space text-ink-muted leading-relaxed max-w-xl">
            Whether structuring high-concurrency systems, discussing tailored fullstack engineering, or exploring technical leadership—transmit a brief dispatch or connect across direct channels.
          </p>
        </div>

        {/* Availability Ticker (Pulse) */}
        <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider bg-surface-1/60 border border-border-hairline px-3.5 py-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-vermilion opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-vermilion" />
          </span>
          <span className="text-ink-primary font-bold">
            [ OPEN FOR COLLABORATION &amp; SELECTIVE ROLES ]
          </span>
        </div>
      </div>

      {/* Two-Column Contact Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Kolom Kiri: Direct Dispatch Form */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-border-hairline pb-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-primary font-bold">
              {'// 01. DIRECT DISPATCH FORM'}
            </span>
            <span className="font-mono text-[10px] uppercase text-ink-muted tracking-wider font-semibold">
              BUFFER: {dispatchSent ? 'TRANSMITTED' : 'AWAITING_INPUT'}
            </span>
          </div>

          <form onSubmit={handleDispatchSubmit} className="flex flex-col gap-5">
            {/* Field: Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="dispatch-name"
                className="font-mono text-[10px] uppercase tracking-widest text-ink-muted font-semibold"
              >
                NAME / IDENTIFIER <span className="text-accent-vermilion">*</span>
              </label>
              <input
                id="dispatch-name"
                type="text"
                required
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="e.g. John Doe / Engineering Lead"
                className="w-full bg-transparent border-b border-border-strong focus:border-accent-vermilion outline-none py-2 font-mono text-xs sm:text-sm text-ink-primary transition-colors placeholder:text-ink-faint rounded-none"
              />
            </div>

            {/* Field: Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="dispatch-email"
                className="font-mono text-[10px] uppercase tracking-widest text-ink-muted font-semibold"
              >
                RETURN CHANNEL (EMAIL) <span className="text-accent-vermilion">*</span>
              </label>
              <input
                id="dispatch-email"
                type="email"
                required
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="e.g. lead@organization.com"
                className="w-full bg-transparent border-b border-border-strong focus:border-accent-vermilion outline-none py-2 font-mono text-xs sm:text-sm text-ink-primary transition-colors placeholder:text-ink-faint rounded-none"
              />
            </div>

            {/* Field: Brief Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="dispatch-message"
                className="font-mono text-[10px] uppercase tracking-widest text-ink-muted font-semibold"
              >
                BRIEF MESSAGE / SCOPE <span className="text-accent-vermilion">*</span>
              </label>
              <textarea
                id="dispatch-message"
                required
                rows={4}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Outline engineering requirements, challenge parameters, or role details..."
                className="w-full bg-transparent border-b border-border-strong focus:border-accent-vermilion outline-none py-2 font-mono text-xs sm:text-sm text-ink-primary transition-colors placeholder:text-ink-faint resize-none rounded-none"
              />
            </div>

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                disabled={dispatchSent}
                className="font-mono text-xs uppercase font-bold tracking-widest border border-border-strong text-ink-primary px-6 py-3 hover:bg-ink-primary hover:text-canvas transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {dispatchSent ? '[ DISPATCH TRANSMITTED ✓ ]' : '[ SEND DISPATCH → ]'}
              </button>

              {dispatchSent ? (
                <span className="font-mono text-[10px] text-accent-vermilion font-semibold">
                  {'// TELEMETRY LOGGED: INBOX BUFFER UPDATED'}
                </span>
              ) : (
                <span className="font-mono text-[10px] text-ink-muted">
                  {'// DIRECT TRANSMISSION VIA ASYNC DISPATCH'}
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Direct Telemetry & Channels */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-border-hairline pb-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-primary font-bold">
              {'// 02. DIRECT TELEMETRY & CHANNELS'}
            </span>
            <span className="font-mono text-[10px] uppercase text-ink-muted tracking-wider font-semibold">
              ONLINE // TLS 1.3
            </span>
          </div>

          {/* Quick Copy Email Box */}
          <div className="border border-border-hairline bg-surface-1/40 p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center text-[10px] font-mono uppercase text-ink-muted">
              <span>PRIMARY INBOX</span>
              <span>RESPONSE TIME: &lt; 24H</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-ink-primary">
                contoh@gmail.com
              </span>
              <CopyEmailButton
                label="[ COPY EMAIL ]"
                copiedLabel="[ COPIED ✓ ]"
                className="font-mono text-xs uppercase font-bold tracking-widest border border-border-strong text-ink-primary px-4 py-2 hover:bg-ink-primary hover:text-canvas transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
              />
            </div>
          </div>

          {/* External Links Ledger Table */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
              INDEXED EXTERNAL NODES:
            </span>
            <div className="border border-border-hairline divide-y divide-border-hairline text-xs font-mono">
              <a
                href="https://github.com/Adlianto"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 hover:bg-surface-1/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-ink-muted group-hover:text-ink-primary font-bold">01</span>
                  <span className="uppercase font-bold tracking-wider text-ink-primary">
                    GITHUB
                  </span>
                </div>
                <div className="flex items-center gap-2 text-ink-muted group-hover:text-ink-primary">
                  <span className="text-[11px]">@Adlianto</span>
                  <span className="text-sm font-bold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-vermilion">
                    ↗
                  </span>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 hover:bg-surface-1/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-ink-muted group-hover:text-ink-primary font-bold">02</span>
                  <span className="uppercase font-bold tracking-wider text-ink-primary">
                    LINKEDIN
                  </span>
                </div>
                <div className="flex items-center gap-2 text-ink-muted group-hover:text-ink-primary">
                  <span className="text-[11px]">in/bell-dev</span>
                  <span className="text-sm font-bold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-vermilion">
                    ↗
                  </span>
                </div>
              </a>

              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 hover:bg-surface-1/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-ink-muted group-hover:text-ink-primary font-bold">03</span>
                  <span className="uppercase font-bold tracking-wider text-ink-primary">
                    TELEGRAM / DISCORD
                  </span>
                </div>
                <div className="flex items-center gap-2 text-ink-muted group-hover:text-ink-primary">
                  <span className="text-[11px]">@bell_sys</span>
                  <span className="text-sm font-bold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-vermilion">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Fast Nav helper */}
          <div className="flex justify-between items-center text-[10px] font-mono uppercase text-ink-muted pt-2 border-t border-border-hairline">
            <span>TIMEZONE: GMT+7 (WESTERN INDONESIA)</span>
            <a href="#" className="hover:text-ink-primary transition-colors">
              [ RETURN TO TOP ↑ ]
            </a>
          </div>
        </div>
      </div>

      {/* Micro Bottom Bar */}
      <div className="w-full border-t border-border-hairline pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono uppercase text-ink-muted gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
          <span>© 2026 BELL · FULLSTACK &amp; SYSTEMS ARCHITECT</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] tracking-wider">
          <span>COORD: -6.2088° S, 106.8456° E</span>
          <span className="text-ink-faint">/</span>
          <span>JAKARTA, ID (UTC+07:00)</span>
          <span className="text-ink-faint">/</span>
          <span className="text-ink-primary font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
            STATUS: OPTIMAL
          </span>
        </div>
      </div>
    </footer>
  );
}
