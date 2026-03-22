"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Protocol: Hide on high-focus work pages
  if (pathname === '/work/aura-wellness') return null;

  // UPDATED NODES: Swapped FAQ for Solutions and About Us for Architecture
  const navLinks = [
    { name: 'Solutions', href: '/intelligence' },
    { name: 'Resources', href: '/vault' },
    { name: 'Architecture', href: '/#architecture' },
    { name: 'Index', href: '/work' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-5xl">
        <div className="px-6 py-4 rounded-3xl flex items-center justify-between border border-white/10 backdrop-blur-xl bg-black/20 shadow-2xl">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#ff5c00] flex items-center justify-center font-bold text-black text-xs transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(255,92,0,0.3)]">
              OD
            </div>
            <span className="font-bold tracking-[0.2em] text-sm hidden sm:block text-white uppercase">Ordained</span>
          </Link>

          {/* DESKTOP LINKS - Wording Updated */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-white/50 hover:text-[#ff5c00] px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition-all">
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden text-white p-2">
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[90] bg-[#0d0d0d] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMobileOpen(false)} className="text-4xl font-bold tracking-tighter text-white hover:text-[#ff5c00] uppercase transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}