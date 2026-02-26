"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// THE FIX: Defining the shape of your form data
interface InquiryData {
  name: string;
  email: string;
  tier: string;
  message: string;
}

export default function InquiryOnboarding() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(""); 

  const [formData, setFormData] = useState<InquiryData>({
    name: "",
    email: "",
    tier: "Essential Identity",
    message: ""
  });

  const nextStep = () => setStep((s) => s + 1);

  // THE FIX: Adding React.FormEvent type to the handler
  const handleSubmit = async (e: React.FormEvent) => {
    if (e) e.preventDefault();
    setStatus("SYNCING...");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxNCBdzD5to0ABZFMVc-3gt398Gs2V6nh69r2uPrFGeWVGs-IzayeEl9COiPiSZongC/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("SUCCESS");
      setStep(3); 
    } catch (error) {
      console.error("Neural Sync Error:", error);
      setStatus("RETRY_REQUIRED");
    }
  };

  const tiers = ['Essential Identity', 'Digital Sovereign', 'Neural Enterprise'];

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 opacity-5 grayscale" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-[0.4em] uppercase">Ordained</Link>
        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
          Protocol_Status: <span className="text-[#ff5c00]">{status || "Ready"}</span>
        </div>
      </nav>

      <div className="relative z-20 max-w-4xl mx-auto px-8 pt-48 pb-24">
        
        {/* STEP INDICATOR */}
        <div className="flex gap-4 mb-20">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1 flex-1 transition-all duration-700 ${step >= i ? 'bg-[#ff5c00]' : 'bg-white/10'}`} />
          ))}
        </div>

        {/* STEP 01: IDENTITY */}
        {step === 1 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Step_01</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-12 text-left">Identify <br /> Your Vision.</h2>
            <div className="space-y-12 text-left">
              <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">Legal_Name</label>
                <input 
                  type="text" 
                  required
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter Name" 
                  className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/10" 
                />
              </div>
              <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">Digital_Coordinates</label>
                <input 
                  type="email" 
                  required
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="email@protocol.com" 
                  className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/10" 
                />
              </div>
              <button onClick={nextStep} className="group flex items-center gap-6 pt-8">
                <span className="text-sm font-bold uppercase tracking-[0.3em]">Continue to Objectives</span>
                <div className="w-12 h-px bg-white/20 group-hover:bg-[#ff5c00] group-hover:w-20 transition-all duration-500" />
              </button>
            </div>
          </section>
        )}

        {/* STEP 02: OBJECTIVE */}
        {step === 2 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-700">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Step_02</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-12 text-left">Select <br /> Tier.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {tiers.map((t) => (
                <button 
                  key={t}
                  onClick={() => setFormData({...formData, tier: t})}
                  className={`p-8 border rounded-3xl text-left transition-all group ${formData.tier === t ? 'border-[#ff5c00] bg-[#ff5c00]/5' : 'border-white/10 hover:border-[#ff5c00]/50'}`}
                >
                  <span className="block text-[9px] font-mono text-gray-500 mb-4 uppercase">Option</span>
                  <span className="text-xl font-bold text-white group-hover:text-[#ff5c00] transition-colors">{t}</span>
                </button>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
               <button 
                onClick={handleSubmit} 
                className="px-12 py-5 bg-[#ff5c00] text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white transition-all shadow-xl"
               >
                 Initialize Sync
               </button>
               <button onClick={() => setStep(1)} className="text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                 Edit_Identity
               </button>
            </div>
          </section>
        )}

        {/* STEP 03: FINALIZING */}
        {step === 3 && (
          <section className="animate-in fade-in zoom-in duration-1000 text-center">
            <div className="w-24 h-24 border border-[#ff5c00] rounded-full mx-auto mb-12 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-[#ff5c00] rounded-full animate-ping opacity-20" />
               <span className="text-[#ff5c00] text-2xl font-bold">✓</span>
            </div>
            <h2 className="text-5xl font-bold tracking-tighter text-white mb-6 uppercase">Sync Complete.</h2>
            <p className="text-gray-400 font-light max-w-md mx-auto mb-12 text-center text-lg italic">
              "Analyzing your requirements, **{formData.name || "Client"}**. An architect will be in contact within 24 operational hours via **{formData.email}**."
            </p>
            <Link href="/" className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#ff5c00] hover:text-white transition-all">
              Return_to_Vision_Center
            </Link>
          </section>
        )}

      </div>
    </main>
  );
}