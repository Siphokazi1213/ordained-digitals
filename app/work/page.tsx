"use client";
import React from 'react';
import Link from 'next/link';

export default function WorkArchive() {
  const projects = [
    { id: "01", name: "Aura Sanctuary", sector: "Luxe Wellness", year: "2026", status: "Deployed" },
    { id: "02", name: "Future Legacy", sector: "Architecture", year: "2026", status: "In_Design" },
    { id: "03", name: "System Identity", sector: "Neural Logic", year: "2025", status: "Q3_Protocol" },
    { id: "04", name: "Neural Core", sector: "AI Infrastructure", year: "2025", status: "Archived" },
    { id: "05", name: "Stewardship API", sector: "Automated Systems", year: "2024", status: "Deployed" },
  ];

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* BACKGROUND ATMOSPHERE */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
          alt="Modern Architectural Glass" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
      </div>

      {/* FLOATING RETURN ANCHOR */}
      <Link 
        href="/" 
        className="fixed bottom-10 left-10 z-[150] group flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-full hover:!border-[#ff5c00]/50 transition-all duration-500 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#ff5c00] group-hover:text-white transition-colors">
          <span className="text-lg">←</span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] pr-4 opacity-0 group-hover:opacity-100 transition-opacity">Return_to_Vision</span>
      </Link>

      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 pt-48 pb-24 text-left">
        
        {/* HEADER */}
        <header className="mb-32">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Archive_Manifest_v1.0</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white">
            Project <br /> Index.
          </h1>
        </header>

        {/* ARCHIVE LIST */}
        <div className="w-full border-t border-white/10">
          {/* Header Row (Desktop) */}
          <div className="hidden md:grid grid-cols-12 py-6 px-4 text-[10px] font-mono uppercase tracking-widest text-gray-600">
            <div className="col-span-1">ID</div>
            <div className="col-span-6">Project_Name</div>
            <div className="col-span-3">Sector</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          {/* Project Rows */}
          <div className="flex flex-col">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={`/work/${project.name.toLowerCase().replace(" ", "-")}`}
                className="grid grid-cols-1 md:grid-cols-12 items-center py-10 px-4 border-b border-white/5 hover:bg-white/[0.02] transition-all group"
              >
                <div className="col-span-1 text-[10px] font-mono text-gray-600 group-hover:text-[#ff5c00] transition-colors mb-4 md:mb-0">
                  {project.id}
                </div>
                <div className="col-span-6 text-3xl md:text-5xl font-bold text-white group-hover:translate-x-4 transition-transform duration-500 tracking-tighter">
                  {project.name}
                </div>
                <div className="col-span-3 text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors mt-2 md:mt-0">
                  {project.sector}
                </div>
                <div className="col-span-2 text-right hidden md:block">
                  <span className={`px-4 py-1 rounded-full text-[9px] font-mono uppercase border ${
                    project.status === "Deployed" ? "border-[#ff5c00] text-[#ff5c00]" : "border-white/20 text-white/40"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <footer className="mt-40 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.4em]">
             © 2026 Ordained Digitals | All Concepts Protected
           </p>
           <button 
             onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry'))}
             className="text-white hover:text-[#ff5c00] font-bold uppercase text-xs tracking-[0.3em] transition-colors"
           >
             Initialize New Archive Entry ↗
           </button>
        </footer>
      </div>
    </main>
  );
}