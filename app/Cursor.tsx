'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Immediately abort on touchscreens, mobile devices, or headless Lighthouse environments
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let isDisposed = false;
    let cleanupListeners: (() => void) | undefined;

    const setupCursor = () => {
      if (isDisposed) return;
      setEnabled(true);

      let mouseX = -100;
      let mouseY = -100;
      let ringX = -100;
      let ringY = -100;
      let velX = 0;
      let velY = 0;

      let currentScale = 1;
      let targetScale = 1;
      let isHovered = false;
      let isMouseDown = false;
      let isRunning = false;
      let animationFrameId: number = 0;

      const startLoop = () => {
        if (!isRunning) {
          isRunning = true;
          animationFrameId = requestAnimationFrame(render);
        }
      };

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        startLoop();
      };

      const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;

        const isInteractive =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a, button, [role="button"]') !== null ||
          target.classList.contains('cursor-pointer');

        if (isInteractive !== isHovered) {
          isHovered = isInteractive;
          startLoop();
        }
      };

      const onMouseDown = () => {
        isMouseDown = true;
        startLoop();
      };

      const onMouseUp = () => {
        isMouseDown = false;
        startLoop();
      };

      const render = () => {
        const posLerp = 0.2;
        velX = (mouseX - ringX) * posLerp;
        velY = (mouseY - ringY) * posLerp;

        ringX += velX;
        ringY += velY;

        const velocity = Math.hypot(velX, velY);
        const angle = Math.atan2(velY, velX) * (180 / Math.PI);

        if (isMouseDown) {
          targetScale = isHovered ? 2.0 : 0.8;
        } else if (isHovered) {
          targetScale = 2.4;
        } else {
          targetScale = 1;
        }

        const scaleLerp = 0.25;
        currentScale += (targetScale - currentScale) * scaleLerp;
        const stretch = isHovered ? 0 : Math.min(velocity * 0.015, 0.4);

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${currentScale + stretch}, ${Math.max(currentScale - stretch * 0.5, 0.4)})`;

          if (isHovered) {
            ringRef.current.style.borderColor = 'var(--accent-vermilion)';
            ringRef.current.style.backgroundColor = 'rgba(240, 77, 54, 0.12)';
            ringRef.current.style.opacity = '0.9';
          } else {
            ringRef.current.style.borderColor = 'var(--border-strong)';
            ringRef.current.style.backgroundColor = 'transparent';
            ringRef.current.style.opacity = '0.45';
          }
        }

        const isIdle =
          velocity < 0.08 &&
          Math.abs(currentScale - targetScale) < 0.01;

        if (isIdle) {
          isRunning = false;
        } else {
          animationFrameId = requestAnimationFrame(render);
        }
      };

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('mouseover', onMouseOver, { passive: true });
      window.addEventListener('mousedown', onMouseDown, { passive: true });
      window.addEventListener('mouseup', onMouseUp, { passive: true });

      cleanupListeners = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseover', onMouseOver);
        window.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mouseup', onMouseUp);
        cancelAnimationFrame(animationFrameId);
      };
    };

    // 2. Defer initialization until browser idle to ensure 0ms impact on TBT
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(setupCursor, { timeout: 2000 });
      return () => {
        isDisposed = true;
        window.cancelIdleCallback(idleId);
        cleanupListeners?.();
      };
    } else {
      const timer = setTimeout(setupCursor, 800);
      return () => {
        isDisposed = true;
        clearTimeout(timer);
        cleanupListeners?.();
      };
    }
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block"
      style={{
        width: '34px',
        height: '34px',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        willChange: 'transform',
        transition: 'border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease',
      }}
    />
  );
}