"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// 1. FAQ ITEM COMPONENT
interface FAQItemProps {
  question: string;
  answer: string;
  id: string;
}

const FAQItem = ({ question, answer, id }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-8 group transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <div className="flex gap-8 items-center">
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{id}</span>
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${isOpen ? 'text-[#ff5c00]' : 'text-white group-hover:text-[#ff5c00]'}`}>
            {question}
          </h3>
        </div>
        <span className={`text-2xl transition-transform duration-500 ${isOpen ? 'rotate-45 text-[#ff5c00]' : 'text-white/20'}`}>+</span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-[500px] mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl pl-[58px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQMatrix() {
  const faqs = [
    {
      id: "01",
      question: "Why the R10k+ investment floor?",
      answer: "We don't build simple websites; we engineer digital sovereignty. This includes custom Python-based logic, high-performance hosting on Google Cloud, and a bespoke UI designed for sub-300ms interaction."
    },
    {
      id: "02",
      question: "What is the typical deployment timeline?",
      answer: "A standard 'Sovereign' ecosystem takes 8 to 12 weeks from initial dialogue to full node deployment. This ensures every line of code is optimized for your specific business objectives."
    },
    {
      id: "03", 
      question: "What does the SEO Protocol include?", 
      answer: "We implement a triple-threat SEO strategy: Technical (Core Web Vitals for speed), Structural (Schema markup for Google), and Local (targeting the Gauteng node for regional dominance)." 
    },
    {
      id: "04", 
      question: "How does Review Management work?", 
      answer: "We automate your digital testimony. We install protocols that prompt satisfied clients for Google Reviews and manage your reputation to ensure 5-star visibility across all search indices." 
    },
    { id: "05", question: "Do you offer post-launch maintenance?", answer: "Every architecture includes a 6-month 'Neural Sync' period where we monitor uptime, security protocols, and performance metrics." },
    { id: "06", question: "Why Python and Google Cloud (GCP)?", answer: "Industry-standard stability. Python allows for complex automation, while GCP provides the global infrastructure needed to maintain a high-fidelity presence." },
    { id: "07", question: "Can I manage the system myself?", answer: "Absolutely. We build aesthetic administrative dashboards so you can oversee your operations without touching a single line of code." }
  ];

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* BACKGROUND AURA */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center backdrop-blur-md">
        <Link href="/" className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-colors">
          ← Back_to_Vision_Center
        </Link>
        <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest hidden md:block">
          Sync_Node: <span className="text-[#ff5c00]">Gauteng_ZA</span>
        </div>
      </nav>

      <div className="relative z-20 max-w-5xl mx-auto px-8 pt-48 pb-24 text-left">
        
        {/* HEADER */}
        <header className="mb-32">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">System_Dialogue_Protocols</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-none">FAQ.</h1>
        </header>

        {/* FAQ LIST */}
        <section className="mb-32">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </section>

        {/* ASK A QUESTION TERMINAL */}
        <section className="p-12 border border-white/10 rounded-[3rem] bg-white/[0.01] mb-20">
          <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tighter">Awaiting Further Input?</h3>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-10 leading-relaxed max-w-md">
            If your system requirements fall outside these parameters, submit a direct query to the architect.
          </p>
          <div className="flex flex-col gap-6">
            <input 
              type="text" 
              placeholder="TYPE YOUR QUESTION HERE..." 
              className="bg-transparent border-b border-white/10 py-4 text-xl outline-none focus:border-[#ff5c00] transition-colors placeholder:text-white/5 uppercase font-light"
            />
            <button className="self-start px-10 py-4 bg-white text-black font-bold text-[10px] uppercase tracking-[0.3em] rounded-xl hover:bg-[#ff5c00] hover:text-white transition-all shadow-xl active:scale-95">
              Ask a Question
            </button>
          </div>
        </section>

        <footer className="mt-20 pt-10 border-t border-white/5 opacity-40 text-[9px] font-mono uppercase tracking-widest text-center">
          © 2026 Ordained Digitals | Roodepoort Node
        </footer>
      </div>
    </main>
  );
}