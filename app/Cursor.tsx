'use client';

import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    let velX = 0;
    let velY = 0;
    
    let currentScale = 1;
    let targetScale = 1;
    let dotScale = 1;
    let targetDotScale = 1;
    let isHovered = false;
    let isMouseDown = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      isHovered = isInteractive;
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    let animationFrameId: number;

    const render = () => {
      // 1. Posisi Lerp untuk Ring Luar
      const posLerp = 0.18;
      velX = (mouseX - ringX) * posLerp;
      velY = (mouseY - ringY) * posLerp;

      ringX += velX;
      ringY += velY;

      const velocity = Math.sqrt(velX * velX + velY * velY);
      const angle = Math.atan2(velY, velX) * (180 / Math.PI);

      // 2. Tentukan target ukuran
      if (isMouseDown) {
        targetScale = isHovered ? 2.0 : 0.8;
        targetDotScale = isHovered ? 0 : 0.6;
      } else if (isHovered) {
        targetScale = 2.4; // Ukuran saat membungkus button
        targetDotScale = 0; // Titik tengah melebur halus
      } else {
        targetScale = 1; // Ukuran normal
        targetDotScale = 1;
      }

      // 3. Easing Transisi Skala yang Sangat Lembut (Spring Feel)
      const scaleLerp = 0.22;
      currentScale += (targetScale - currentScale) * scaleLerp;
      dotScale += (targetDotScale - dotScale) * scaleLerp;

      // Peregangan saat gerak cepat (dinonaktifkan pas hover tombol)
      const stretch = isHovered ? 0 : Math.min(velocity * 0.015, 0.4);

      // Render Ring Luar
      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate3d(${ringX}px, ${ringY}px, 0) 
          translate(-50%, -50%) 
          rotate(${angle}deg) 
          scale(${currentScale + stretch}, ${Math.max(currentScale - stretch * 0.5, 0.4)})
        `;

        if (isHovered) {
          ringRef.current.style.borderColor = 'rgba(41, 28, 14, 0.6)';
          ringRef.current.style.backgroundColor = 'rgba(41, 28, 14, 0.15)';
        } else {
          ringRef.current.style.borderColor = 'rgba(110, 71, 59, 0.4)';
          ringRef.current.style.backgroundColor = 'rgba(110, 71, 59, 0.08)';
        }
      }

      // Render Titik Inti
      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${mouseX}px, ${mouseY}px, 0) 
          translate(-50%, -50%) 
          scale(${dotScale})
        `;
        dotRef.current.style.opacity = `${dotScale}`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block"
        style={{
          width: '34px',    
          height: '34px',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          backdropFilter: 'blur(1px)',
          willChange: 'transform, border-color, background-color',
          transition: 'border-color 0.3s ease, background-color 0.3s ease',
        }}
      />
    </>
  );
}