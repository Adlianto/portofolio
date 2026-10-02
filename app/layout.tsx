import type { Metadata } from 'next';
import { Geist_Mono, Bebas_Neue, Instrument_Serif, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Cursor from './Cursor';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Portofolio | BELL - Fullstack Systems Architect',
  description: 'Fullstack Systems Architect & Creative Technologist portfolio built with Swiss Brutalist aesthetics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} ${bebasNeue.variable} ${instrumentSerif.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{const s=localStorage.getItem('theme');if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-space bg-canvas text-ink-primary">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
