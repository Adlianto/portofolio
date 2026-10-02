import React from 'react';
import { arsenalCategories } from '@/data/portfolio';

export function ArsenalSection() {
  return (
    <section
      id="arsenal"
      className="animate-reveal-4 mt-12 sm:mt-16 border-t border-border-hairline pt-8 sm:pt-10 section-cv"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-2">
        <div>
          <span className="font-mono text-xs uppercase text-ink-muted tracking-widest block mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
            [ TECHNICAL SPECS ]
          </span>
          <h3 className="font-bebas text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-ink-primary">
            DAILY ARSENAL &amp; TOOLING
          </h3>
        </div>
        <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          BATTLE-TESTED STACKS
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-border-hairline">
        {arsenalCategories.map((cat, idx) => (
          <div
            key={cat.domain}
            className="p-6 border-r border-b border-border-hairline flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-[10px] uppercase text-ink-muted mb-3 tracking-widest flex items-center gap-2">
                <span>SECTION 0{idx + 1}</span>
                <span className="opacity-40">/</span>
                <span>{cat.domain}</span>
              </div>

              <ul className="flex flex-col divide-y divide-border-hairline/60">
                {cat.items.map((item) => (
                  <li key={item.name} className="py-2.5 flex justify-between items-center text-xs">
                    <span className="font-bold text-ink-primary">{item.name}</span>
                    <span className="font-mono text-[10px] text-ink-muted">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
