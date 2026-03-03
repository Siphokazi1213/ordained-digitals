"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// THE REFINED DATA BLUEPRINT
interface InquiryData {
  name: string;
  email: string;
  tier: string;
  tierQuestions: { [key: string]: string };
}

export default function InquiryOnboarding() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(""); 
  const [formData, setFormData] = useState<InquiryData>({
    name: "",
    email: "",
    tier: "Essential Identity",
    tierQuestions: {}
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // THE AUTO-ADVANCE: Sets tier and moves to Step 3 automatically
  const handleTierSelection = (tierName: string) => {
    setFormData(prev => ({ ...prev, tier: tierName }));
    setStep(3);
  };

  const handleTierQuestionChange = (question: string, answer: string) => {
    setFormData(prev => ({
      ...prev,
      tierQuestions: { ...prev.tierQuestions, [question]: answer }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (e) e.preventDefault();
    setStatus("SYNCING...");
    try {
      // REPLACE WITH YOUR 13-COLUMN APPS SCRIPT URL
      await fetch("https://script.google.com/macros/s/AKfycbxNCBdzD5to0ABZFMVc-3gt398Gs2V6nh69r2uPrFGeWVGs-IzayeEl9COiPiSZongC/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });
      setStatus("SUCCESS");
      setStep(4); 
    } catch (error) {
      console.error("Sync Error:", error);
      setStatus("RETRY_REQUIRED");
    }
  };

  const tiers = [
    { 
      name: 'Essential Identity', 
      desc: 'High-fidelity visual presence and digital portfolios.', 
      details: 'Sub-300ms speed. Includes bespoke UI design, SEO indexing, and absolute stewardship of your brand aura.' 
    },
    { 
      name: 'Digital Sovereign', 
      desc: 'Full-scale business ecosystems with integrated logic.', 
      details: 'Operational dominance. Includes payment nodes, custom Google Sheet databases, and administrative dashboards.' 
    },
    { 
      name: 'Neural Enterprise', 
      desc: 'AI-integrated systems and complex workflow automation.', 
      details: 'The ultimate digital asset. Includes Python-based logic, AI/LLM integrations, and autonomous data processing pipelines.' 
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND (RESTORED) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 opacity-5 grayscale" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-[0.4em] uppercase text-white hover:text-[#ff5c00] transition-colors">Ordained</Link>
        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
          Protocol_Status: <span className="text-[#ff5c00]">{status || "Ready"}</span>
        </div>
      </nav>

      <div className="relative z-20 max-w-4xl mx-auto px-8 pt-48 pb-24 text-left">
        
        {/* STEP INDICATOR */}
        <div className="flex gap-4 mb-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-1 flex-1 transition-all duration-700 ${step >= i ? 'bg-[#ff5c00]' : 'bg-white/10'}`} />
          ))}
        </div>

        {/* STEP 01: IDENTITY (RESTORED EMAIL SECTION) */}
        {step === 1 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Step_01_Identity</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-12 leading-none uppercase">Identify <br /> Your Vision.</h2>
            <div className="space-y-12">
              <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">Legal_Name</label>
                <input required onChange={(e) => handleInputChange('name', e.target.value)} placeholder="ENTER NAME" className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" />
              </div>
              <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">Digital_Coordinates (Email)</label>
                <input type="email" required onChange={(e) => handleInputChange('email', e.target.value)} placeholder="EMAIL@PROTOCOL.COM" className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" />
              </div>
              <button onClick={nextStep} className="group flex items-center gap-6 pt-8">
                <span className="text-sm font-bold uppercase tracking-[0.3em]">Next Protocol</span>
                <div className="w-12 h-px bg-white/20 group-hover:bg-[#ff5c00] group-hover:w-20 transition-all duration-500" />
              </button>
            </div>
          </section>
        )}

        {/* STEP 02: TIER SELECTION (AUTO-ADVANCE) */}
        {step === 2 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-700">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Step_02_Selection</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-12 leading-none uppercase">Select <br /> Tier.</h2>
            <div className="grid grid-cols-1 gap-6">
              {tiers.map((t) => (
                <button 
                  key={t.name}
                  onClick={() => handleTierSelection(t.name)}
                  className="p-10 border border-white/5 rounded-[2.5rem] text-left transition-all group hover:border-[#ff5c00] hover:bg-[#ff5c00]/5"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl font-bold text-white group-hover:text-[#ff5c00] transition-colors">{t.name}</span>
                    <span className="text-[9px] font-mono text-gray-600 uppercase">Initialize →</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{t.desc}</p>
                  <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest border-t border-white/5 pt-4">{t.details}</p>
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-12 text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Back to Identity</button>
          </section>
        )}

        {/* STEP 03: POWER 3 QUESTIONNAIRE (RESTORED DEPTH) */}
        {step === 3 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-700">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Step_03_Qualification</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-12 leading-none uppercase">{formData.tier.split(' ')[0]} <br /> Specifics.</h2>
            
            <div className="space-y-16">
              {formData.tier === 'Essential Identity' && (
                <div className="space-y-12">
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">01. Define the singular "Digital Aura" (Minimal, Bold, Tech).</label>
                    <input onChange={(e) => handleTierQuestionChange('Aesthetic', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. BRUTALIST" />
                  </div>
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">02. Identify your primary target audience.</label>
                    <input onChange={(e) => handleTierQuestionChange('Audience', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. LUXE INVESTORS" />
                  </div>
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">03. Specify your ideal launch window / deadline.</label>
                    <input onChange={(e) => handleTierQuestionChange('Deadline', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. 4 WEEKS" />
                  </div>
                </div>
              )}

              {formData.tier === 'Digital Sovereign' && (
                <div className="space-y-12">
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">01. Identify primary logic nodes (Paystack, Booking, Dashboards).</label>
                    <input onChange={(e) => handleTierQuestionChange('Integrations', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. PAYMENT NODES" />
                  </div>
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">02. Identify a manual task to be eliminated via automation.</label>
                    <input onChange={(e) => handleTierQuestionChange('Manual_Task', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. INVOICING" />
                  </div>
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">03. Specify the expected monthly traffic / user volume.</label>
                    <input onChange={(e) => handleTierQuestionChange('Volume', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. 5000+ USERS" />
                  </div>
                </div>
              )}

              {formData.tier === 'Neural Enterprise' && (
                <div className="space-y-12">
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">01. Identify the bottleneck preventing exponential scale.</label>
                    <input onChange={(e) => handleTierQuestionChange('Bottleneck', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. LEAD SCORING" />
                  </div>
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">02. Identify data sources to be synced (CRMs, APIs, Sheets).</label>
                    <input onChange={(e) => handleTierQuestionChange('Data_Sync', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. HUBSPOT + GOOGLE" />
                  </div>
                  <div className="group border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-4">
                    <label className="block text-[9px] font-mono uppercase text-gray-500 mb-2">03. Describe the required level of AI autonomous decision-making.</label>
                    <input onChange={(e) => handleTierQuestionChange('AI_Level', e.target.value)} className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-white/5 uppercase" placeholder="E.G. AUTONOMOUS AGENT" />
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-8 mt-12 items-center">
               <button onClick={handleSubmit} className="px-12 py-5 bg-[#ff5c00] text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white transition-all shadow-xl">
                 Start Project
               </button>
               <button onClick={prevStep} className="text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Back</button>
            </div>
          </section>
        )}

        {/* STEP 04: NEURAL PULSE SUCCESS (RESTORED ANIMATION) */}
        {step === 4 && (
          <section className="flex flex-col items-center justify-center animate-in zoom-in duration-1000 text-center">
            <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#ff5c00] rounded-full animate-ping opacity-20" />
              <div className="absolute inset-[-10px] border border-[#ff5c00]/30 rounded-full animate-[ping_2s_linear_infinite] opacity-10" />
              <div className="relative z-10 w-16 h-16 bg-[#ff5c00] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,92,0,0.6)]">
                <span className="text-black text-3xl font-bold">✓</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold tracking-tighter text-white mb-6 uppercase leading-none">Sync <br /> Established.</h2>
            <p className="text-gray-400 font-light max-w-md mx-auto mb-12 text-center text-lg italic leading-relaxed">
              "Objectives received, **{formData.name}**. The Gauteng Node has acknowledged your coordinates. Prepare for sync within 24 operational hours."
            </p>
            <Link href="/" className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#ff5c00] hover:text-white border-b border-[#ff5c00]/20 pb-2 transition-all">
              Return_to_Vision_Center
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}