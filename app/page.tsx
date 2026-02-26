"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

// 1. DEFINE THE STAT COUNTER BLUEPRINT
interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const StatCounter = ({ end, duration = 2000, suffix = "" }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true); },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] overflow-x-hidden font-sans">
      
      {/* 1. ARCHITECTURAL ANCHOR (Fixed Background) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Architectural Abstract" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </div>

      {/* 2. AI MASTERMIND SYNC BUBBLE */}
      <div className="fixed bottom-8 right-8 z-[200] flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 p-2 pl-6 rounded-full shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Mastermind_Sync</span>
          <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Awaiting Input...</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#ff5c00] flex items-center justify-center shadow-[0_0_20px_rgba(255,92,0,0.4)]">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* 3. NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-8 flex justify-between items-center backdrop-blur-sm bg-black/10">
        <Link href="/" className="text-xl font-bold tracking-[0.4em] uppercase text-white">Ordained</Link>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-8 text-[10px] font-mono tracking-widest text-white/40">
            <Link href="/intelligence" className="hover:text-[#ff5c00] uppercase transition-colors">Solutions</Link>
            <Link href="/vault" className="hover:text-[#ff5c00] uppercase transition-colors">The Vault</Link>
            <Link href="/work" className="hover:text-[#ff5c00] uppercase transition-colors">Index</Link>
            <Link href="#architecture" className="hover:text-[#ff5c00] uppercase transition-colors">Architecture</Link>
          </div>
          <Link 
            href="/inquiry" 
            className="px-8 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#ff5c00] hover:text-white transition-all shadow-lg"
          >
            Start Project
          </Link>
        </div>
      </nav>

      {/* 4. MAIN CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 pt-32 md:pt-48 pb-12 text-left">
        
        {/* HERO SECTION */}
        <header className="relative mb-32 md:mb-40 flex flex-col items-start max-w-4xl">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-6">Engineering Premium Identities</p>
          <h1 className="text-5xl md:text-[8rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter mb-10 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
            The Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">of Digital Artistry.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
            <Link 
              href="/inquiry" 
              className="group flex items-center gap-4 bg-[#1a1a1a] border border-white/10 px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition-all"
            >
              <span className="font-bold text-[11px] uppercase tracking-[0.2em]">Initialize Design</span>
              <div className="w-2 h-2 rounded-full bg-[#ff5c00] group-hover:animate-ping" />
            </Link>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-light italic text-left">Transforming ambitious visions into high-conversion digital ecosystems.</p>
          </div>
        </header>

        {/* 5. SYSTEM IMPACT */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 py-20 border-y border-white/5 bg-white/[0.01]">
          {[
            { label: "Data_Points_Synced", end: 840, suffix: "M+" },
            { label: "Neural_Deployments", end: 12, suffix: "+" },
            { label: "System_Uptime", end: 99, suffix: ".9%" },
            { label: "Capital_Optimized", end: 4, suffix: "M+" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-start space-y-2">
              <span className="text-[#ff5c00] font-mono text-[9px] uppercase tracking-widest">{stat.label}</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                <StatCounter end={stat.end} suffix={stat.suffix} />
              </span>
            </div>
          ))}
        </section>

        {/* 6. NEURAL AUTOMATION PREVIEW */}
        <section className="w-full mb-40 pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1">
              <div className="absolute inset-0 bg-[#ff5c00]/5 blur-[100px] rounded-full animate-pulse" />
              <div className="relative z-10 w-full h-full border border-white/5 rounded-full flex items-center justify-center backdrop-blur-3xl bg-white/[0.01]">
                 <div className="absolute w-3/4 h-3/4 border border-[#ff5c00]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                 <div className="w-12 h-12 bg-[#ff5c00] rounded-full shadow-[0_0_50px_rgba(255,92,0,0.4)] flex items-center justify-center">
                    <span className="text-black text-[10px] font-black tracking-tighter">AI</span>
                 </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2 text-left">
              <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em]">Neural_Automation_Protocol</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">Intelligence <br /> as an Asset.</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light italic">Automating high-level decision making and user interactions to ensure your business never sleeps.</p>
            </div>
          </div>
        </section>

        {/* 7. SIGNATURE WORK */}
        <section className="w-full mb-40">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4 text-left">
              <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em]">Case_Studies</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Signature Work</h2>
            </div>
            <Link href="/work" className="hidden md:block text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity pb-2">
              Explore All Concepts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/work/aura-wellness" className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#1a1a1a] border border-white/5 hover:!border-[#ff5c00]/30 transition-all duration-700">
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors" />
               <img src="https://images.unsplash.com/photo-1544161515-4ae6ce6db874?q=80&w=2070" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all scale-105 group-hover:scale-100" alt="Aura Wellness" />
               <div className="absolute bottom-10 left-10 z-20 text-left">
                  <p className="text-[#ff5c00] font-mono text-[8px] uppercase tracking-[0.4em] mb-3">Luxe_Wellness_Sanctuary</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none">Aura Wellness</h3>
                  <div className="flex items-center gap-4 text-[8px] font-mono tracking-widest uppercase text-white/50 group-hover:text-white transition-all">View Concept →</div>
               </div>
            </Link>
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center p-8 opacity-40 hover:opacity-100 hover:!border-[#ff5c00]/40 transition-all group">
               <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Future Legacy</h3>
               <p className="text-[9px] text-[#ff5c00] font-mono uppercase tracking-widest">In Design Phase</p>
            </div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center p-8 opacity-40 hover:opacity-100 hover:!border-[#ff5c00]/40 transition-all group">
               <h3 className="text-xl font-bold text-white mb-2 tracking-tight">System Identity</h3>
               <p className="text-[9px] text-[#ff5c00] font-mono uppercase tracking-widest">Queued for Q3</p>
            </div>
          </div>
        </section>

        {/* 8. STRATEGIC INVESTMENT */}
        <section id="investment" className="w-full mb-40 pt-24 border-t border-white/5">
          <div className="mb-20 text-left">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Capital_Deployment</p>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight">Strategic <br /> Investment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { tier: "Essential", price: "$10k+", desc: "For brands requiring an immediate presence." },
              { tier: "Sovereign", price: "$25k+", desc: "Full ecosystem with custom engineering." },
              { tier: "Neural", price: "$50k+", desc: "AI-integrated intelligent systems." }
            ].map((pkg, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] flex flex-col justify-between border transition-all duration-500 hover:-translate-y-2 text-left
                ${i === 1 ? 'bg-[#ff5c00] border-transparent text-black' : 'bg-white/[0.02] border-white/5 text-white'}
              `}>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] mb-8 opacity-60">{pkg.tier}</h4>
                  <h3 className="text-5xl font-bold tracking-tighter mb-6">{pkg.price}</h3>
                  <p className="text-sm leading-relaxed mb-10 font-light opacity-80">{pkg.desc}</p>
                </div>
                <Link href="/inquiry" className={`w-full py-5 rounded-2xl font-bold uppercase text-[10px] tracking-widest text-center transition-all ${i === 1 ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-[#ff5c00] hover:text-white'}`}>
                  Deploy Capital
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 9. ROADMAP */}
        <section id="architecture" className="w-full mb-40 pt-24 border-t border-white/5 text-left">
          <div className="mb-20">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Execution_Phase</p>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight">The Path to <br /> Digital Sovereignty</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-[#ff5c00]/50 via-white/10 to-transparent z-0" />
            {['Dialogue', 'Architecture', 'Engineering', 'Sovereignty'].map((step, i) => (
              <div key={i} className="relative z-10 space-y-4">
                <div className="w-12 h-12 bg-[#0d0d0d] border border-white/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#ff5c00] font-mono text-xs">0{i+1}</span>
                </div>
                <h4 className="text-xl font-bold text-white">{step}</h4>
                <p className="text-gray-500 text-sm font-light">Engineered for dominance.</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. FINAL FOOTER - RE-ENGINEERED 3-COLUMN LAYOUT */}
        <footer className="w-full pt-20 border-t border-white/5 opacity-80 text-left">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="space-y-8">
               <div className="text-4xl font-bold tracking-[0.4em] uppercase text-white">Ordained</div>
               
               {/* GLOBAL SYNC COORDINATE */}
               <div className="flex items-center gap-4">
                  <div className="relative w-2 h-2">
                     <div className="absolute inset-0 bg-[#ff5c00] rounded-full animate-ping" />
                     <div className="relative w-2 h-2 bg-[#ff5c00] rounded-full" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60">
                     Sync_Node: <span className="text-white">Gauteng, ZA [26.12° S, 27.90° E]</span>
                  </span>
               </div>

               <div className="flex gap-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5c00] cursor-pointer hover:text-white transition-colors">YouTube</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5c00] cursor-pointer hover:text-white transition-colors">Instagram</span>
               </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
               {/* COLUMN 1: NAVIGATE */}
               <div className="space-y-4">
                  <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">Navigate</h4>
                  <Link href="/vault" className="block text-gray-500 text-[10px] uppercase tracking-widest font-mono hover:text-[#ff5c00] transition-colors">The Vault</Link>
                  <Link href="/work" className="block text-gray-500 text-[10px] uppercase tracking-widest font-mono hover:text-[#ff5c00] transition-colors">Index</Link>
               </div>

               {/* COLUMN 2: SYSTEMS */}
               <div className="space-y-4">
                  <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">Systems</h4>
                  <Link href="/faq" className="block text-gray-500 text-[10px] uppercase tracking-widest font-mono hover:text-[#ff5c00] transition-colors">The Matrix [FAQ]</Link>
                  <Link href="/about" className="block text-gray-500 text-[10px] uppercase tracking-widest font-mono hover:text-[#ff5c00] transition-colors">The Architect</Link>
               </div>

               {/* COLUMN 3: LEGAL */}
               <div className="space-y-4">
                  <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">Legal</h4>
                  <Link href="/privacy" className="block text-gray-500 text-[10px] uppercase tracking-widest font-mono hover:text-[#ff5c00] transition-colors">Privacy Protocol</Link>
                  <Link href="/inquiry" className="block text-gray-500 text-[10px] uppercase tracking-widest font-mono hover:text-[#ff5c00] transition-colors">Start Sync</Link>
               </div>
            </div>
          </div>
          <p className="mt-10 text-[9px] font-mono tracking-widest uppercase text-gray-600">© 2026 Ordained Digitals | Systems Optimized</p>
        </footer>

      </div>
    </main>
  );
}