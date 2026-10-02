'use client';

import React, { useEffect, useState } from 'react';

export function ThemeToggle({
  className = '',
}: {
  className?: string;
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent hydration mismatch during initial SSR
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle color theme"
        className={`font-mono text-[11px] font-bold uppercase tracking-widest border border-border-strong px-3 py-1.5 transition-all whitespace-nowrap select-none opacity-0 ${className}`}
      >
        [ THEME: LIGHT ]
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`font-mono text-[11px] font-bold uppercase tracking-widest border border-border-strong px-3 py-1.5 hover:bg-ink-primary hover:text-canvas transition-all cursor-pointer whitespace-nowrap select-none flex items-center gap-2 text-ink-primary ${className}`}
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-vermilion" />
      <span>[ THEME: {theme === 'dark' ? 'DARK' : 'LIGHT'} ]</span>
    </button>
  );
}
