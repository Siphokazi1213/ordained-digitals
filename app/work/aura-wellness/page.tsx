"use client";
import React from 'react';
import Link from 'next/link';

export default function AuraWellness() {
  return (
    <main className="relative min-h-screen bg-[#0f1109] text-white overflow-hidden font-serif">
      
      {/* 1. THE BACKGROUND - New stable source */}
      <div className="fixed inset-0 z-0 bg-[#1a1c12]">
        <div className="absolute inset-0 bg-black/30 z-10" /> 
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
          alt="Aura Sanctuary" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* 2. NAVIGATION */}
        <nav className="px-10 py-10 flex justify-between items-start w-full">
          <Link href="/" className="group">
            <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-all">
               <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
               <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white">ORDAINED</span>
            </div>
          </Link>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl tracking-[0.3em] uppercase italic mb-3">Aura</div>
            <div className="flex gap-8 text-[9px] font-mono uppercase tracking-[0.3em] text-white/50">
              <span className="hover:text-white cursor-pointer">Rooms</span>
              <span className="hover:text-white cursor-pointer">About</span>
              <span className="hover:text-white cursor-pointer">Experiences</span>
            </div>
          </div>

          <button className="text-[10px] font-mono tracking-[0.3em] uppercase px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
            Menu
          </button>
        </nav>

        {/* 3. HERO CONTENT */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-20">
          <div className="max-w-5xl w-full">
            <h1 className="text-7xl md:text-[10rem] leading-[0.85] mb-8 drop-shadow-2xl">
              Find Peace <br />
              Where the <br />
              Hills Whisper
            </h1>
            <p className="italic text-xl md:text-3xl text-white/90 mb-16 font-light">
              Nature's Silence. <br />
              Your Sanctuary.
            </p>

            {/* 4. THE SPREAD BOOKING BAR */}
            <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl flex flex-col md:flex-row shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden">
              
              <div className="flex-1 grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
                {['Check In', 'Check Out', 'Adult', 'Child', 'Rooms'].map((label, i) => (
                  <div key={i} className="p-8 flex flex-col items-start justify-center pl-10 hover:bg-white/5 transition-colors">
                    <p className="text-[9px] font-mono uppercase text-white/50 mb-2 tracking-widest">{label}</p>
                    <p className="text-xs font-bold text-white">Select_Option</p>
                  </div>
                ))}
              </div>

              {/* HIGH-CONTRAST GOLD BUTTON */}
              <button className="bg-[#facc15] text-[#000] font-black uppercase text-[12px] tracking-[0.2em] px-16 py-10 hover:bg-white transition-all cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        </section>
        {/* 4. SIGNATURE SUITES - Horizontal Experience */}
        <section className="relative z-20 px-10 py-32 bg-black/20 backdrop-blur-lg border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-[#facc15] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">The Collection</p>
                <h2 className="text-5xl md:text-7xl font-light italic leading-none">Signature Suites</h2>
              </div>
              <p className="text-white/40 max-w-xs text-sm font-light leading-relaxed hidden md:block">
                Each sanctuary is designed with floor-to-ceiling glass to dissolve the boundary between you and the wild.
              </p>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
              {[
                { name: "The Forest Edge", price: "R12,500", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000" },
                { name: "Valley Silence", price: "R15,800", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000" },
                { name: "The Zenith Loft", price: "R22,000", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000" }
              ].map((suite, i) => (
                <div key={i} className="min-w-[85vw] md:min-w-[450px] snap-center group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden rounded-3xl mb-6 relative border border-white/10">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700 z-10" />
                    <img 
                      src={suite.img} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      alt={suite.name}
                    />
                    <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase">
                      From {suite.price}
                    </div>
                  </div>
                  <h3 className="text-2xl font-light italic mb-2">{suite.name}</h3>
                  <div className="flex items-center gap-4 text-[9px] font-mono tracking-widest text-white/40 uppercase group-hover:text-[#facc15] transition-colors">
                    <span>View Details</span>
                    <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#facc15] transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}