"use client";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{ 
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 2.5 : 1})`,
      }}
    >
      {/* The Core Dot */}
      <div className="absolute inset-0 m-auto w-1 h-1 bg-[#ff5c00] rounded-full shadow-[0_0_15px_#ff5c00]" />
      
      {/* The Outer Ring */}
      <div className={`absolute inset-0 border border-[#ff5c00]/30 rounded-full transition-opacity duration-300 ${isPointer ? 'opacity-100' : 'opacity-20'}`} />
    </div>
  );
}