"use client";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  // Using your verified Formspree ID
  const [state, handleSubmit] = useForm("xreayrov"); 

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-inquiry", handleOpen);
    return () => window.removeEventListener("open-inquiry", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
      {/* 1. ATMOSPHERIC BACKDROP */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-500" 
        onClick={() => !state.submitting && setIsOpen(false)}
      />
      
      {/* 2. THE ARCHITECTURAL MODAL */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] p-12 shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
        
        {/* Aesthetic Detail: Orange Corner Light */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff5c00]/10 blur-[80px] rounded-full" />

        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors text-sm font-mono"
        >
          CLOSE_X
        </button>

        <header className="mb-12">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">
            {state.succeeded ? "Establishment_Confirmed" : "Inquiry_Protocol"}
          </p>
          <h2 className="text-4xl font-bold tracking-tighter text-white leading-tight">
            {state.succeeded ? "Sync Established." : "Start the Dialogue."}
          </h2>
        </header>

        {state.succeeded ? (
          <div className="py-12 text-left animate-in fade-in slide-in-from-bottom-4">
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Your vision has been successfully injected into our ecosystem. We will reach out to architect your legacy within 24 hours.
            </p>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#ff5c00] hover:underline font-mono text-[10px] uppercase tracking-widest"
            >
              Terminate Session
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em]">Identity_Name</label>
                <input 
                  id="name"
                  name="name"
                  required
                  type="text" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#ff5c00] transition-all placeholder:text-gray-700" 
                  placeholder="e.g. Alexander Stone" 
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em]">Access_Email</label>
                <input 
                  id="email"
                  name="email"
                  required
                  type="email" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#ff5c00] transition-all placeholder:text-gray-700" 
                  placeholder="name@studio.com" 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[#ff5c00] text-[10px] mt-1 font-mono uppercase" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="goals" className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em]">Project_Architect_Brief</label>
              <textarea 
                id="goals"
                name="goals"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#ff5c00] transition-all h-32 resize-none placeholder:text-gray-700" 
                placeholder="Describe the future you want to build..." 
              />
            </div>

            <button 
              type="submit"
              disabled={state.submitting}
              className={`w-full py-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.3em] transition-all active:scale-[0.98]
                ${state.submitting ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-[#ff5c00] text-black hover:bg-white'}
              `}
            >
              {state.submitting ? "Establishing Sync..." : "Initialize Design Phase"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}