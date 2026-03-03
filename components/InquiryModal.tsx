"use client";
import { useState, useEffect, useTransition } from "react";
import { submitInquiry } from "../app/actions";

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-inquiry", handleOpen);
    return () => window.removeEventListener("open-inquiry", handleOpen);
  }, []);

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const result = await submitInquiry(formData);
        if (result.success) {
          setStatus("success");
          // Hold the success state for a moment for the "Aesthetic" effect
          setTimeout(() => {
            setIsOpen(false);
            setStatus("idle");
          }, 2500);
        } else {
          setStatus("error");
        }
      } catch (e) {
        setStatus("error");
      }
    });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
      {/* 1. NEURAL BLUR OVERLAY */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-in fade-in duration-500" 
        onClick={() => !isPending && setIsOpen(false)}
      />
      
      {/* 2. THE GLASS COMMAND CENTER */}
      <div className="relative z-10 w-full max-w-2xl bg-[#121212] border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-500">
        
        {/* CLOSE PROTOCOL */}
        <button 
          onClick={() => setIsOpen(false)}
          disabled={isPending}
          className="absolute top-8 right-10 text-gray-500 hover:text-[#ff5c00] transition-all disabled:opacity-0"
        >
          <span className="text-xs font-mono tracking-widest">CLOSE_X</span>
        </button>

        {/* HEADER LOGIC */}
        <div className="mb-12">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">
            {status === "success" ? "✓ Sync_Established" : "Step_00_Inquiry"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-none">
            {status === "success" ? "Transmission <br/> Received." : "Project <br/> Handshake."}
          </h2>
        </div>

        {status === "success" ? (
          <div className="py-12 text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="text-gray-400 text-lg font-light leading-relaxed italic">
              "Your objectives have been securely injected into the Gauteng Node. An architect will analyze your coordinates and reach out within 24 operational hours."
            </p>
          </div>
        ) : (
          <form action={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group space-y-3 border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-2">
                <label className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Name and Surname</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  className="w-full bg-transparent border-none outline-none text-white text-xl font-light placeholder:text-white/5 uppercase" 
                  placeholder="IDENTIFY NAME" 
                />
              </div>
              <div className="group space-y-3 border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-2">
                <label className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Email-Adress</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  className="w-full bg-transparent border-none outline-none text-white text-xl font-light placeholder:text-white/5 uppercase" 
                  placeholder="EMAIL_ADDR" 
                />
              </div>
            </div>
            
            <div className="group space-y-3 border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-2">
              <label className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Project_Vision / Goals</label>
              <textarea 
                required
                name="goals"
                className="w-full bg-transparent border-none outline-none text-white text-xl font-light placeholder:text-white/5 h-24 resize-none uppercase" 
                placeholder="DESCRIBE THE MISSION..." 
              />
            </div>

            <div className="pt-6">
              <button 
                disabled={isPending}
                className={`group w-full font-bold py-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-[11px]
                  ${isPending ? 'bg-white/5 text-gray-500 cursor-not-allowed' : 'bg-white text-black hover:bg-[#ff5c00] hover:text-white shadow-xl'}
                `}
              >
                {isPending ? (
                  <>
                    <span className="w-3 h-3 border-2 border-gray-500 border-t-white rounded-full animate-spin" />
                    Syncing_Data...
                  </>
                ) : (
                  <>
                    Initialize Sync
                    <div className="w-2 h-2 rounded-full bg-[#ff5c00] group-hover:bg-white animate-pulse" />
                  </>
                )}
              </button>
            </div>
            
            {status === "error" && (
              <p className="text-red-500 text-[10px] font-mono text-center uppercase tracking-widest">Transmission_Error: Verify Connection.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}