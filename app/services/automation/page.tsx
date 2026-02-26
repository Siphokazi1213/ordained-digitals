"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#f4f4f1] selection:bg-white/10 overflow-x-hidden font-serif">
      
      {/* 1. ATMOSPHERIC LIGHT LEAKS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-48 pb-32">
        
        {/* 2. HERO: THE STATEMENT */}
        <header className="mb-32 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-[#facc15] font-mono text-[10px] uppercase tracking-[0.6em] mb-8">
            Est. MMXXIV — Aesthetic Engineering
          </p>
          <h1 className="text-6xl md:text-9xl leading-[0.85] tracking-tighter mb-12">
            Architecting <br />
            <span className="italic font-light opacity-40 italic">Digital Legacies.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light italic">
            Bespoke software and visual identities crafted for those who demand 
            unrivaled performance and absolute clarity.
          </p>
        </header>

        {/* 3. THE BENTO GRID PORTAL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
          
          {/* Main Showcase: Aura Wellness */}
          <Link 
            href="/work/aura-wellness" 
            className="md:col-span-8 group relative h-[500px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-3xl"
          >
             <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />
             <img 
                src="https://images.unsplash.com/photo-1544161515-4ae6ce6db874?q=80&w=2070" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Aura Wellness"
             />
             <div className="absolute bottom-12 left-12 z-20">
                <p className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em] mb-2">Featured_01</p>
                <h2 className="text-4xl font-light italic text-white mb-6">Aura Wellness Sanctuary</h2>
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-white group-hover:gap-6 transition-all">
                   Enter Experience <span>→</span>
                </div>
             </div>
          </Link>

          {/* Performance Card */}
          <div className="md:col-span-4 glass-card p-10 flex flex-col justify-between border-white/5 bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 font-mono">Core_Metrics</p>
              <h3 className="text-6xl font-light text-[#facc15] leading-none">298ms</h3>
              <p className="text-xs text-gray-500 mt-4 font-mono uppercase tracking-widest">Average Latency</p>
            </div>
            
            <div className="space-y-4">
               <div className="h-px w-full bg-white/10" />
               <p className="text-sm text-gray-500 italic font-light leading-relaxed">
                  We optimize for the blink of an eye. Speed is the ultimate luxury.
               </p>
            </div>
          </div>

          {/* Automation Card */}
          <div className="md:col-span-4 glass-card p-10 flex flex-col justify-between border-white/5 bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#facc15] transition-colors">
               <div className="w-1.5 h-1.5 bg-white group-hover:bg-[#facc15] rounded-full animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl font-light italic mb-4">Data Autonomy</h3>
              <p className="text-gray-500 text-xs leading-relaxed font-light">
                Integrating your business logic into intelligent Google Sheet ecosystems.
              </p>
            </div>
          </div>

          {/* Engineering Card */}
          <div className="md:col-span-8 glass-card p-10 relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl flex items-center">
             <div className="relative z-10 max-w-md">
                <h3 className="text-3xl md:text-5xl font-light italic mb-6 leading-tight">Bespoke <br /> Architecture.</h3>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry'))}
                  className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#facc15] hover:text-white transition-colors"
                >
                  [ Initialize_Project ]
                </button>
             </div>
             
             {/* Abstract Geometric Asset */}
             <div className="absolute right-[-10%] top-[-10%] w-80 h-80 border border-white/5 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
             </div>
          </div>

        </div>

        {/* 4. FOOTER CREDITS */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center opacity-30 font-mono text-[9px] tracking-[0.3em] uppercase">
           <div>© 2026 Ordained Digitals. All Rights Reserved.</div>
           <div className="flex gap-12">
              <span>Next.js 15</span>
              <span>Tailwind v4</span>
              <span>Vercel Edge</span>
           </div>
        </footer>

      </div>
    </main>
  );
}