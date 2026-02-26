"use client";
import React from 'react';
import Link from 'next/link';

export default function AboutArchitect() {
  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070" 
          alt="The Workspace" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
      </div>

      {/* 2. NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-[0.4em] uppercase text-white hover:text-[#ff5c00] transition-colors">Ordained</Link>
        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
          Architect_ID: <span className="text-[#ff5c00]">Siphokazi</span>
        </div>
      </nav>

      {/* 3. CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 pt-48 pb-24 text-left">
        
        <header className="max-w-4xl mb-32">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Mastermind_Identity</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white mb-10">
            The <br /> Architect.
          </h1>
          <p className="text-gray-400 text-xl font-light italic leading-relaxed max-w-2xl">
            "Merging the technical precision of Python with the sacred art of stewardship."
          </p>
        </header>

        {/* 4. THE PHILOSOPHY GRID */}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase">The Mission</h2>
            <p className="text-gray-500 leading-relaxed font-light">
              Ordained Digitals was founded in Gauteng by Siphokazi, a front-end developer driven by the belief that digital systems should reflect the order and excellence of their creator. 
              <br /><br />
              Whether engineering high-conversion web ecosystems or aesthetic spreadsheet protocols, the goal remains the same: **Absolute Stewardship.**
            </p>
            <div className="pt-8 border-t border-white/5">
               <h4 className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-widest mb-4">Core_Values</h4>
               <ul className="space-y-2 text-sm text-white/60 font-mono uppercase tracking-tighter">
                 <li>• Divine Order in Logic</li>
                 <li>• Sub-300ms Excellence</li>
                 <li>• Generational Legacy Building</li>
               </ul>
            </div>
          </div>

          <div className="relative aspect-square bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <span className="text-[8px] font-mono text-gray-600 uppercase tracking-[0.5em]">Sync_Node_Gauteng</span>
            <div className="space-y-6 relative z-10">
              <h3 className="text-4xl font-bold text-white tracking-tighter">High-Fidelity <br /> Stewardship.</h3>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                "As a mother and a creator, I understand that time is the most valuable asset we manage. My systems are designed to give that time back to you."
              </p>
            </div>
            <div className="flex gap-4 relative z-10">
               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase text-white">Python</div>
               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase text-white">Next.js</div>
               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase text-white">GCP</div>
            </div>
          </div>
        </div>

        {/* 5. THE WORKSPACE VISUAL (Text-based for now) */}
        <section className="mb-40 py-20 border-y border-white/5 flex flex-col items-center text-center">
           <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 uppercase">Engineering <br /> From the Heart.</h2>
           <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed mb-12">
             From my command center in Roodepoort, I build digital assets that support global visions, all while staying grounded in the things that matter most.
           </p>
           <div className="flex gap-8 items-center text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.4em]">
             <span>Motherhood</span>
             <div className="w-1 h-1 bg-white/20 rounded-full" />
             <span>Ministry</span>
             <div className="w-1 h-1 bg-white/20 rounded-full" />
             <span>Mastery</span>
           </div>
        </section>

        {/* 6. CALL TO SYNC */}
        <footer className="text-center">
          <Link 
            href="/inquiry" 
            className="inline-block px-12 py-6 bg-white text-black font-bold uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-[#ff5c00] hover:text-white transition-all shadow-2xl"
          >
            Connect with the Architect
          </Link>
          <div className="mt-12">
            <Link href="/" className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-600 hover:text-white transition-colors">
              Return_to_Dashboard
            </Link>
          </div>
        </footer>

      </div>
    </main>
  );
}