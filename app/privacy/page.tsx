"use client";
import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const protocols = [
    { id: "P-01", title: "Data Stewardship", desc: "Every byte of client data is treated as a sovereign asset. We do not sell, trade, or compromise your digital identity." },
    { id: "P-02", title: "Neural Encryption", desc: "All data streams are processed through Python-based AES-256 encryption before entering the Google Cloud environment." },
    { id: "P-03", title: "GCP Sovereignty", desc: "We utilize Google Cloud’s global infrastructure, ensuring your ecosystem is protected by the same security protocols as the world’s largest enterprises." }
  ];

  const menuLinks = [
    { name: 'Solutions', href: '/intelligence' },
    { name: 'Resources', href: '/vault' },
    { name: 'Architecture', href: '/#architecture' },
    { name: 'Index', href: '/work' },
  ];

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 opacity-5 grayscale" 
              style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* 2. FLOATING BACK-TO-HOME */}
      <Link 
        href="/" 
        className="fixed bottom-10 left-10 z-[150] group flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-full hover:!border-[#ff5c00]/50 transition-all duration-500 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#ff5c00] group-hover:text-white transition-colors">
          <span className="text-lg">←</span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] pr-4 opacity-0 group-hover:opacity-100 transition-opacity">Return_to_Vision</span>
      </Link>

      {/* 3. NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-[0.4em] uppercase hover:text-[#ff5c00] transition-colors">Ordained</Link>
        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
          Node_Security: <span className="text-[#ff5c00]">Active</span>
        </div>
      </nav>

      {/* 4. CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto px-8 pt-48 pb-24 text-left">
        
        <header className="mb-32">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Security_Manifesto_v1.0</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-12">
            Privacy & <br /> Policy.
          </h1>
          <p className="text-gray-400 text-xl font-light italic leading-relaxed">
            In our pursuit of digital excellence, we prioritize the absolute security of the information entrusted to us. This is our covenant of stewardship.
          </p>
        </header>

        {/* PROTOCOL LIST */}
        <div className="space-y-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          {protocols.map((p) => (
            <div key={p.id} className="p-12 bg-[#0d0d0d] hover:bg-white/[0.02] transition-colors border-b border-white/10 last:border-none">
              <span className="text-[#ff5c00] font-mono text-[10px] mb-4 block">{p.id}</span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* 5. FOOTER MENU LINKS (Replaced Initialize Sync Button) */}
        <footer className="mt-40 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <p className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.4em]">
              Authorized for Client Review Only
            </p>
            <p className="text-gray-400 font-mono text-[9px] uppercase tracking-[0.4em]">
              © 2026 Ordained Digitals | Gauteng Node
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            {menuLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-mono text-white/40 hover:text-[#ff5c00] uppercase tracking-[0.3em] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </footer>

      </div>
    </main>
  );
}