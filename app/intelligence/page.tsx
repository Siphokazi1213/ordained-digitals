"use client";
import React from 'react';
import Link from 'next/link';

export default function IntelligencePage() {
  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* 1. THE ATMOSPHERIC ANCHOR */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
          alt="Technical Logic Grid" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
      </div>

      {/* 2. FLOATING BACK-TO-HOME BUTTON */}
      <Link 
        href="/" 
        className="fixed bottom-10 left-10 z-[150] group flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-full hover:!border-[#ff5c00]/50 transition-all duration-500 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#ff5c00] group-hover:text-white transition-colors">
          <span className="text-lg">←</span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] pr-4 opacity-0 group-hover:opacity-100 transition-opacity">Return_to_Home</span>
      </Link>

      {/* 3. TOP NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-white/5">
        <Link href="/" className="text-xl font-bold tracking-[0.4em] uppercase hover:text-[#ff5c00] transition-colors">
          Ordained
        </Link>
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry'))} 
          className="px-8 py-2.5 bg-[#ff5c00] text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-lg"
        >
          Initialize Sync
        </button>
      </nav>

      {/* 4. MAIN CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 pt-48 pb-24 text-left">
        
        {/* HERO SECTION */}
        <header className="max-w-4xl mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Neural_System_Deployment</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white mb-10">
            Neural <br /> Logic.
          </h1>
          <p className="text-gray-400 text-xl font-light italic leading-relaxed max-w-2xl">
            We architect autonomous systems using **Python** and **Google Cloud** to transform raw data into business sovereignty.
          </p>
        </header>

        {/* NEW: THE NEURAL FLOW VISUALIZATION */}
        <section className="mb-40 py-20 border-y border-white/5 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
               <h3 className="text-3xl font-bold text-white tracking-tight uppercase">The Flow of <br />Intelligence</h3>
               <p className="text-gray-500 text-sm leading-relaxed font-light">
                 Our neural pipeline ingests diverse data streams, processes them through an encrypted Python core, and deploys actionable logic to your front-end interfaces in real-time.
               </p>
               <div className="flex items-center gap-6 pt-4">
                  <div className="flex flex-col">
                     <span className="text-[#ff5c00] font-bold text-xl">300ms</span>
                     <span className="text-[9px] font-mono uppercase text-gray-600">Latency_Max</span>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="flex flex-col">
                     <span className="text-[#ff5c00] font-bold text-xl">99.9%</span>
                     <span className="text-[9px] font-mono uppercase text-gray-600">Sync_Accuracy</span>
                  </div>
               </div>
            </div>

            {/* ANIMATED SVG NEURAL FLOW */}
            <div className="lg:col-span-7 relative h-[300px] flex items-center justify-center">
               <svg width="100%" height="100%" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Paths */}
                  <path d="M50 150H550" stroke="white" strokeOpacity="0.05" strokeWidth="2" />
                  <path d="M50 150C150 150 200 50 300 50C400 50 450 150 550 150" stroke="white" strokeOpacity="0.05" strokeWidth="2" />
                  <path d="M50 150C150 150 200 250 300 250C400 250 450 150 550 150" stroke="white" strokeOpacity="0.05" strokeWidth="2" />
                  
                  {/* Animated Data Points (Orange Glow) */}
                  <circle r="4" fill="#ff5c00">
                     <animateMotion dur="3s" repeatCount="indefinite" path="M50 150H550" />
                     <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#ff5c00">
                     <animateMotion dur="4s" repeatCount="indefinite" path="M50 150C150 150 200 50 300 50C400 50 450 150 550 150" />
                     <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#ff5c00">
                     <animateMotion dur="5s" repeatCount="indefinite" path="M50 150C150 150 200 250 300 250C400 250 450 150 550 150" />
                     <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
                  </circle>

                  {/* Nodes */}
                  <circle cx="50" cy="150" r="6" fill="#0d0d0d" stroke="#ff5c00" strokeWidth="2" />
                  <circle cx="300" cy="50" r="6" fill="#0d0d0d" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
                  <circle cx="300" cy="250" r="6" fill="#0d0d0d" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
                  <circle cx="550" cy="150" r="6" fill="#ff5c00" />
               </svg>
               {/* Glowing Center Label */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-black border border-[#ff5c00]/20 rounded-full backdrop-blur-xl">
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white">Neural_Hub</span>
               </div>
            </div>
          </div>
        </section>

        {/* TECH STACK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden mb-40">
          <div className="p-16 bg-[#0d0d0d] group hover:bg-[#ff5c00]/5 transition-colors border-r border-white/10">
            <span className="text-[#ff5c00] font-mono text-xs mb-8 block">01 / Logic Tier</span>
            <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-tight">Autonomous Reasoning</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              We develop custom algorithms that handle high-level business decisions, reducing manual overhead and human error. Every script is tailored to your unique operational flow.
            </p>
          </div>

          <div className="p-16 bg-[#0d0d0d] group hover:bg-[#ff5c00]/5 transition-colors">
            <span className="text-[#ff5c00] font-mono text-xs mb-8 block">02 / Cloud Tier</span>
            <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-tight">Google Cloud Core</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Global infrastructure optimized for **sub-300ms** latency. Your data lives in a high-security environment, scaled automatically to meet global demand.
            </p>
          </div>
        </div>

        {/* FINAL CTA */}
        <footer className="text-center py-20 border-t border-white/5">
           <p className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-8">© 2026 Ordained Digitals | Intelligence Protocol</p>
           <button 
             onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry'))}
             className="text-white hover:text-[#ff5c00] font-bold uppercase text-xs tracking-[0.3em] transition-colors"
           >
             Initialize Next Sync ↗
           </button>
        </footer>

      </div>
    </main>
  );
}