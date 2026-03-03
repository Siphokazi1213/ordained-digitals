"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// 1. STAT COUNTER LOGIC
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleInquiryClick = () => {
    window.dispatchEvent(new Event('open-inquiry'));
  };

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] overflow-x-hidden font-sans selection:bg-[#ff5c00] selection:text-white">
      
      {/* BACKGROUND ARCHITECTURE (With Parallax) */}
      <motion.div style={{ y }} className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Architectural Abstract" 
          className="w-full h-full object-cover opacity-25 grayscale"
        />
      </motion.div>

      {/* AI STATUS BUBBLE (Functional CTA) */}
      <button 
        onClick={handleInquiryClick}
        className="fixed bottom-8 right-8 z-[120] flex items-center gap-4 bg-white/5 backdrop-blur-3xl border border-white/10 p-2 pl-6 rounded-full shadow-2xl hover:bg-white/10 transition-all group animate-in fade-in slide-in-from-right-8 duration-1000 hidden md:flex active:scale-95"
      >
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Mastermind_Sync</span>
          <span className="text-[10px] font-bold text-white uppercase tracking-tighter group-hover:text-[#ff5c00] transition-colors">Start Handshake</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#ff5c00] flex items-center justify-center shadow-[0_0_20px_rgba(255,92,0,0.4)] group-hover:shadow-[0_0_30px_rgba(255,92,0,0.6)] transition-all">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </button>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 pt-48 md:pt-64 pb-12">
        
        {/* HERO SECTION */}
        <motion.header 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-40 flex flex-col items-start max-w-4xl text-left"
        >
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-6">Engineering Premium Identities</p>
          <h1 className="text-5xl md:text-[8rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter mb-10 text-white">
            The Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">of Digital Artistry.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
            <button 
              onClick={handleInquiryClick}
              className="group flex items-center gap-4 bg-[#1a1a1a] border border-white/10 px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition-all"
            >
              <span className="font-bold text-[11px] uppercase tracking-[0.2em]">Initialize Project</span>
              <div className="w-2 h-2 rounded-full bg-[#ff5c00] group-hover:animate-ping" />
            </button>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-light italic">Transforming ambitious visions into high-conversion digital ecosystems.</p>
          </div>
        </motion.header>

        {/* IMPACT STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 py-20 border-y border-white/5 bg-white/[0.01]">
          {[
            { label: "Data_Points_Synced", end: 840, suffix: "M+" },
            { label: "Neural_Deployments", end: 12, suffix: "+" },
            { label: "System_Uptime", end: 99, suffix: ".9%" },
            { label: "Capital_Optimized", end: 4, suffix: "M+" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-start space-y-2 text-left"
            >
              <span className="text-[#ff5c00] font-mono text-[9px] uppercase tracking-widest">{stat.label}</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                <StatCounter end={stat.end} suffix={stat.suffix} />
              </span>
            </motion.div>
          ))}
        </section>

        {/* NEURAL PREVIEW */}
        <section className="w-full mb-40 pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-[#ff5c00]/5 blur-[100px] rounded-full animate-pulse" />
              <div className="relative z-10 w-full h-full border border-white/5 rounded-full flex items-center justify-center backdrop-blur-3xl bg-white/[0.01]">
                 <div className="absolute w-3/4 h-3/4 border border-[#ff5c00]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                 <div className="w-12 h-12 bg-[#ff5c00] rounded-full shadow-[0_0_50px_rgba(255,92,0,0.4)] flex items-center justify-center">
                    <span className="text-black text-[10px] font-black tracking-tighter">AI</span>
                 </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2 text-left"
            >
              <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em]">Neural_Automation_Protocol</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">Intelligence <br /> as an Asset.</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light italic">Automating high-level decision making and user interactions to ensure your business never sleeps.</p>
            </motion.div>
          </div>
        </section>

        {/* SIGNATURE WORK */}
        <section className="w-full mb-40 text-left">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em]">Case_Studies</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Signature Work</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#1a1a1a] border border-white/5 hover:!border-[#ff5c00]/30 transition-all duration-700"
            >
              <img src="https://images.unsplash.com/photo-1544161515-4ae6ce6db874?q=80&w=2070" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all scale-105 group-hover:scale-110" alt="Aura Wellness" />
              <div className="absolute bottom-10 left-10 z-20">
                  <p className="text-[#ff5c00] font-mono text-[8px] uppercase tracking-[0.4em] mb-3">Luxe_Wellness_Sanctuary</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none">Aura Wellness</h3>
                  <Link href="/work/aura-wellness" className="text-[8px] font-mono tracking-widest uppercase text-white/50 group-hover:text-white transition-all">View Concept →</Link>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -15 }} className="relative aspect-[4/5] rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center p-8 opacity-40 hover:opacity-100 transition-all group">
               <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Future Legacy</h3>
               <p className="text-[9px] text-[#ff5c00] font-mono uppercase tracking-widest">In Design Phase</p>
            </motion.div>
            <motion.div whileHover={{ y: -15 }} className="relative aspect-[4/5] rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center p-8 opacity-40 hover:opacity-100 transition-all group">
               <h3 className="text-xl font-bold text-white mb-2 tracking-tight">System Identity</h3>
               <p className="text-[9px] text-[#ff5c00] font-mono uppercase tracking-widest">Queued for Q3</p>
            </motion.div>
          </div>
        </section>

        {/* STRATEGIC INVESTMENT - TIER INFO RESTORED */}
        <section id="investment" className="w-full mb-40 pt-24 border-t border-white/5 text-left">
          <div className="mb-20">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Capital_Deployment</p>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight">Strategic <br /> Investment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                tier: "Essential", 
                price: "R10k+", 
                desc: "Immediate presence and premium portfolios.",
                details: "Bespoke UI design, SEO indexing, and sub-300ms speed optimization." 
              },
              { 
                tier: "Sovereign", 
                price: "R25k+", 
                desc: "Full scale ecosystems with payment nodes.",
                details: "Google Sheet databases, custom admin logic, and integrated payment gateways."
              },
              { 
                tier: "Neural", 
                price: "R50k+", 
                desc: "AI integrated systems and automated flows.",
                details: "Python-driven automation, LLM integration, and autonomous data processing."
              }
            ].map((pkg, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className={`p-10 rounded-[2.5rem] flex flex-col justify-between border transition-all duration-500
                ${i === 1 ? 'bg-[#ff5c00] border-transparent text-black shadow-2xl' : 'bg-white/[0.02] border-white/5 text-white'}
              `}>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] mb-8 opacity-60">{pkg.tier}</h4>
                  <h3 className="text-5xl font-bold tracking-tighter mb-4">{pkg.price}</h3>
                  <p className="text-sm font-bold uppercase mb-4 tracking-tighter">{pkg.desc}</p>
                  <p className="text-xs leading-relaxed mb-10 font-light opacity-80 italic">{pkg.details}</p>
                </div>
                <button onClick={handleInquiryClick} className={`w-full py-5 rounded-2xl font-bold uppercase text-[10px] tracking-widest text-center transition-all ${i === 1 ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-[#ff5c00] hover:text-white'}`}>
                  Initialize Project
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 9. THE ARCHITECTURE ROADMAP - RESTORED */}
        <section id="architecture" className="w-full mb-40 pt-24 border-t border-white/5 text-left scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Execution_Phase</p>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight">The Path to <br /> Digital Sovereignty</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-[#ff5c00]/50 via-white/10 to-transparent z-0" />
            {[
              { step: '01', title: 'Dialogue', desc: 'Deep-dive session to extract the core vision of your digital kingdom.' },
              { step: '02', title: 'Architecture', desc: 'Mapping the neural pathways, data flows, and aesthetic protocols.' },
              { step: '03', title: 'Engineering', desc: 'Developing the sub-300ms ecosystem with absolute stewardship.' },
              { step: '04', title: 'Sovereignty', desc: 'Final deployment. You own the code, the data, and the future.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative z-10 space-y-4 group"
              >
                <div className="w-12 h-12 bg-[#0d0d0d] border border-white/10 rounded-full flex items-center justify-center mb-4 group-hover:border-[#ff5c00] transition-colors duration-500 shadow-[0_0_15px_rgba(255,92,0,0)] group-hover:shadow-[0_0_20px_rgba(255,92,0,0.2)]">
                  <span className="text-[#ff5c00] font-mono text-xs font-bold">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#ff5c00] transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 10. RE-ENGINEERED FOOTER - GAUTENG COORDINATES UPDATED */}
        <footer className="w-full pt-20 border-t border-white/5 opacity-80 text-left">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
            <div className="space-y-10">
               <div className="text-4xl font-bold tracking-[0.4em] uppercase text-white">Ordained</div>
               
               {/* CONTACT NODE */}
               <div className="space-y-6 font-mono text-[9px] tracking-[0.3em] uppercase text-gray-500">
                  <div className="flex items-center gap-4">
                     <div className="relative w-2 h-2">
                        <div className="absolute inset-0 bg-[#ff5c00] rounded-full animate-ping" />
                        <div className="relative w-2 h-2 bg-[#ff5c00] rounded-full" />
                     </div>
                     <span className="text-white">Sync_Node: Gauteng, ZA [26.12° S, 27.90° E]</span>
                  </div>
                  <div className="space-y-2">
                    <p>Email: <a href="mailto:ordaineddigitals@gmail.com" className="text-white hover:text-[#ff5c00] transition-colors">ordaineddigitals@gmail.com</a></p>
                    <p>Cell: <span className="text-white">065 925 0764</span></p>
                    <p className="leading-relaxed">Address: <span className="text-white">Roodepoort, Johannesburg 1724</span></p>
                  </div>
               </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[10px] font-mono tracking-widest uppercase text-gray-500">
               <div className="space-y-4">
                  <h4 className="text-white font-bold mb-4">Navigate</h4>
                  <Link href="/vault" className="block hover:text-[#ff5c00]">Resources</Link>
                  <Link href="/work" className="block hover:text-[#ff5c00]">Index</Link>
               </div>
               <div className="space-y-4">
                  <h4 className="text-white font-bold mb-4">Systems</h4>
                  <Link href="/faq" className="block hover:text-[#ff5c00]">FAQ</Link>
                  <Link href="/about" className="block hover:text-[#ff5c00]">About Us</Link>
               </div>
               <div className="space-y-4">
                  <h4 className="text-white font-bold mb-4">Connect / Legal</h4>
                  <a href="https://instagram.com" className="block hover:text-[#ff5c00]">Instagram</a>
                  <Link href="/privacy" className="block hover:text-[#ff5c00]">Privacy Policy</Link>
               </div>
            </div>
          </div>
          <p className="text-[9px] font-mono tracking-widest uppercase text-gray-600">© 2026 Ordained Digitals | Systems Optimized</p>
        </footer>

      </div>
    </main>
  );
}