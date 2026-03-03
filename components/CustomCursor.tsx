"use client";
import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target) {
        setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-6 h-6 rounded-full border border-[#ff5c00] pointer-events-none z-[9999] transition-all duration-300 ease-out hidden md:block 
        ${isPointer ? 'scale-[2.5] bg-[#ff5c00]/10 border-[#ff5c00]/40' : 'scale-100 bg-transparent'}`}
      style={{ 
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`, 
      }}
    >
      <div className={`absolute inset-0 m-auto w-1 h-1 bg-[#ff5c00] rounded-full transition-opacity duration-300 ${isPointer ? 'opacity-100' : 'opacity-40'}`} />
    </div>
  );
}