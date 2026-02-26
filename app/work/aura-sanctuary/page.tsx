"use client";
import React from 'react';
import Link from 'next/link';

export default function AuraSanctuary() {
  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* 1. ARCHITECTURAL ANCHOR (Background) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ae6ce6db874?q=80&w=2070" 
          alt="Aura Sanctuary Architecture" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </div>

      {/* 2. FLOATING RETURN ANCHOR (To Archive/Index) */}
      <Link 
        href="/work" 
        className="fixed bottom-10 left-10 z-[150] group flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-full hover:!border-[#ff5c00]/50 transition-all duration-500 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#ff5c00] group-hover:text-white transition-colors">
          <span className="text-lg">←</span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] pr-4 opacity-0 group-hover:opacity-100 transition-opacity text-white">Back_to_Index</span>
      </Link>

      {/* 3. HERO SECTION */}
      <section className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 pt-64 pb-32 text-left">
        <div className="max-w-4xl">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Case_Study_01</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white mb-12">
            Aura <br /> Sanctuary.
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/10">
            <div>
              <span className="block text-[9px] font-mono text-gray-500 uppercase mb-2">Sector</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">Luxe Wellness</span>
            </div>
            <div>
              <span className="block text-[9px] font-mono text-gray-500 uppercase mb-2">Timeline</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">12 Weeks</span>
            </div>
            <div>
              <span className="block text-[9px] font-mono text-gray-500 uppercase mb-2">Service</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">Neural UI</span>
            </div>
            <div>
              <span className="block text-[9px] font-mono text-gray-500 uppercase mb-2">Logic</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white text-[#ff5c00]">Python / GCP</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CHALLENGE & VISION */}
      <section className="relative z-20 bg-[#0d0d0d] py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tighter text-white uppercase text-left">The Challenge</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light italic text-left">
              "Aura Sanctuary required a digital presence that felt as tranquil as their physical retreats, yet performed with the industrial strength of a global booking ecosystem."
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tighter text-white uppercase text-left">The Architecture</h2>
            <p className="text-gray-500 text-sm leading-relaxed text-left">
              We implemented a **Liquid Glass UI** built on Next.js 15, supported by a Python-based booking engine. The result is a sub-300ms interface that manages hundreds of daily appointments without human intervention.
            </p>
          </div>
        </div>
      </section>

      {/* 5. VISUAL SHOWCASE */}
      <section className="relative z-20 px-4 md:px-8 py-20 bg-[#0d0d0d]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="aspect-video rounded-[3rem] overflow-hidden bg-white/5 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070" 
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000" 
                alt="UI Detail" 
              />
           </div>
           <div className="aspect-video rounded-[3rem] overflow-hidden bg-white/5 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2072" 
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000" 
                alt="Lifestyle Detail" 
              />
           </div>
        </div>
      </section>

      {/* 6. NEURAL IMPACT (Results) */}
      <section className="relative z-20 bg-[#0d0d0d] max-w-7xl mx-auto px-8 md:px-16 py-32 border-t border-white/5 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
           <div className="space-y-4">
              <h3 className="text-5xl font-bold text-[#ff5c00] tracking-tighter">45%</h3>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">Increase_in_Bookings</p>
           </div>
           <div className="space-y-4">
              <h3 className="text-5xl font-bold text-[#ff5c00] tracking-tighter">240ms</h3>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">Average_Response_Time</p>
           </div>
           <div className="space-y-4">
              <h3 className="text-5xl font-bold text-[#ff5c00] tracking-tighter">Zero</h3>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">System_Down_Time</p>
           </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="relative z-20 py-20 bg-[#0d0d0d] border-t border-white/5 text-center">
         <Link href="/work" className="text-white hover:text-[#ff5c00] font-bold uppercase text-xs tracking-[0.4em] transition-colors">
            Return to Index ↗
         </Link>
      </footer>
    </main>
  );
}