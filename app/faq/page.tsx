"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Defining the Shape of the Data (The Fix)
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
      question: "Why the $25k+ investment floor?",
      answer: "We don't build websites; we engineer digital sovereignty. This includes custom Python-based logic, high-performance hosting on Google Cloud, and a bespoke UI designed for sub-300ms interaction."
    },
    {
      id: "02",
      question: "What is the typical deployment timeline?",
      answer: "A standard 'Sovereign' ecosystem takes 8 to 12 weeks from initial dialogue to full node deployment. This ensures every line of code is optimized for your specific business objectives."
    },
    { id: "03", question: "Do you offer post-launch maintenance?", answer: "Every architecture includes a 6-month 'Neural Sync' period where we monitor uptime, security protocols, and performance metrics." },
    { id: "04", question: "Why Python and Google Cloud (GCP)?", answer: "Industry-standard stability. Python allows for complex automation, while GCP provides the global infrastructure needed to maintain a high-fidelity presence." },
    { id: "05", question: "Can I manage the system myself?", answer: "Absolutely. We build aesthetic administrative dashboards so you can oversee your operations without touching a single line of code." }
  ];

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-[0.4em] uppercase text-white hover:text-[#ff5c00] transition-colors">Ordained</Link>
        <Link href="/inquiry" className="px-8 py-2 bg-[#ff5c00] text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all">
          Initialize Sync
        </Link>
      </nav>

      <div className="relative z-20 max-w-5xl mx-auto px-8 pt-48 pb-24 text-left">
        <header className="mb-32">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">System_Dialogue_Protocols</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-none">The <br /> Matrix.</h1>
        </header>

        <section className="mb-40">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </section>

        <footer className="mt-20 pt-10 border-t border-white/5 opacity-40 text-[9px] font-mono uppercase tracking-widest text-center">
          © 2026 Ordained Digitals | Gauteng Node
        </footer>
      </div>
    </main>
  );
}