"use client";
import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-75"
      style={{ transform: `translate(${position.x - 8}px, ${position.y - 8}px)` }}
    />
  );
}