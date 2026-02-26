"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Hide the global Ordained navbar if on the Aura Wellness page
  if (pathname === '/work/aura-wellness') {
    return null;
  }

  // This function tells the browser to alert the InquiryModal to open
  const handleInquiryClick = () => {
    window.dispatchEvent(new Event('open-inquiry'));
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="nav-glass px-6 py-3 rounded-2xl flex items-center justify-between">
        
        {/* Logo Link */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-pink to-soft-purple flex items-center justify-center font-bold text-black text-xs transition-transform group-hover:scale-110">
            OD
          </div>
          <span className="font-bold tracking-tighter text-lg hidden sm:block text-white">ORDAINED</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          <Link href="/" className="nav-link text-white/70 hover:text-white px-3 py-2 text-sm transition-colors">Home</Link>
          <Link href="/services/automation" className="nav-link text-white/70 hover:text-white px-3 py-2 text-sm transition-colors">Automation</Link>
          
          {/* Updated Button with the Trigger Logic */}
          <button 
            onClick={handleInquiryClick}
            className="ml-4 px-5 py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-electric-pink transition-colors cursor-pointer whitespace-nowrap active:scale-95"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </nav>
  );
}