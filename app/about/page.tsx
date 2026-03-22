"use client";
import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
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
          Architect_ID: <span className="text-[#ff5c00]">ORDAINED DIGITALS</span>
        </div>
      </nav>

      {/* 3. CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 pt-48 pb-24 text-left">
        
        <header className="max-w-4xl mb-32">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Mastermind_Identity</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white mb-10 uppercase">
            About <br /> Us.
          </h1>
          <p className="text-gray-400 text-xl font-light italic leading-relaxed max-w-2xl border-l-2 border-[#ff5c00] pl-8">
            "Merging technical precision with the sacred art of stewardship to engineer generational legacy."
          </p>
        </header>

        {/* 4. THE MISSION & SKILLS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-48">
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase">The Mission</h2>
            <p className="text-gray-500 leading-relaxed font-light">
              Ordained Digitals was founded in Gauteng by a collective of developers driven by the belief that digital systems should reflect the order and excellence of their creator. 
              <br /><br />
              Whether engineering high-conversion web ecosystems or aesthetic spreadsheet protocols, the goal remains the same: **Absolute Stewardship.**
            </p>
            <div className="pt-8 border-t border-white/5">
               <h4 className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-widest mb-6">Core_Values</h4>
               <ul className="space-y-3 text-sm text-white/60 font-mono uppercase tracking-tighter">
                 <li>• Divine Order in Logic</li>
                 <li>• Sub-300ms Excellence</li>
                 <li>• Generational Legacy Building</li>
               </ul>
            </div>
          </div>

          <div className="relative aspect-square bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <span className="text-[8px] font-mono text-gray-600 uppercase tracking-[0.5em]">Sync_Node_Gauteng</span>
            <div className="space-y-6 relative z-10">
              <h3 className="text-4xl font-bold text-white tracking-tighter uppercase leading-none">High-Fidelity <br /> Stewardship.</h3>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                "As a developer and creator, I understand that time is the most valuable asset we manage. Our systems are designed to give that time back to you."
              </p>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
               {['Python', 'Next.js', 'SEO', 'Review_MGMT'].map((tech) => (
                 <div key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase text-white hover:border-[#ff5c00] transition-colors cursor-default">
                   {tech}
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* 5. THE MANIFESTO PROTOCOL */}
        <section className="mb-48 border-t border-white/5 pt-24">
          <div className="mb-20">
            <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Core_Directives</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">The <br /> Manifesto.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {[
              { id: "01", title: "Principle of Stewardship", body: "We believe that a digital presence is a talent to be managed. We practice absolute stewardship over your data, your leads, and your brand aura." },
              { id: "02", title: "Engineering Over Decoration", body: "Whether it is a sub-300ms Next.js environment or a 13-column aesthetic spreadsheet, we prioritize high-fidelity precision." },
              { id: "03", title: "Gauteng Node: Local Roots", body: "Operating from the heart of South Africa, we understand the scale of the established enterprise and the hustle of the solopreneur." },
              { id: "04", title: "Art & Automation", body: "We reject the idea that spreadsheets must be ugly. By merging Python automation with bespoke UI, we create tools as beautiful as they are powerful." },
              { id: "05", title: "Ordained for Growth", body: "Our SEO and Review Management protocols ensure your testimony reaches the right ears. Your success is engineered, not accidental." },
              { id: "06", title: "Generational Architecture", body: "We build for the long-term, ensuring that every digital asset you own contributes to a lasting legacy." }
            ].map((item) => (
              <div key={item.id} className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#ff5c00] font-mono text-xs">{item.id}</span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. ACCOLADES & PARTNERS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 py-20 border-t border-white/5">
          <div>
            <h3 className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-10">Accolades_&_Recognition</h3>
            <ul className="space-y-6 font-mono text-[11px] tracking-widest text-gray-500 uppercase italic">
              <li className="flex gap-4 items-start"><span className="text-white">🏆</span> 2026 Excellence in Digital Stewardship</li>
              <li className="flex gap-4 items-start"><span className="text-white">📜</span> Advanced Python Systems Certification</li>
              <li className="flex gap-4 items-start"><span className="text-white">🛡️</span> Data Integrity & Spreadsheet Security Lead</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-10">Strategic_Sponsors</h3>
            <div className="flex flex-wrap gap-10 opacity-30 grayscale contrast-125">
               <span className="font-bold tracking-tighter text-2xl">AWS_NODE</span>
               <span className="font-bold tracking-tighter text-2xl">VERCEL_CORE</span>
               <span className="font-bold tracking-tighter text-2xl">NEXT_SYSTEMS</span>
            </div>
          </div>
        </section>

        {/* 7. CONTACT NODE & ADDRESS */}
        <section className="mb-40">
          <div className="p-12 border border-white/10 rounded-[3rem] bg-white/[0.01] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">Contact Node.</h3>
              <p className="text-gray-500 text-sm font-light italic mb-8 max-w-xs">Reach out to the Gauteng Node for system inquiries and partnership handshakes.</p>
              
              <div className="space-y-8 font-mono text-[10px] tracking-[0.3em] uppercase">
                <div>
                  <p className="text-gray-600 mb-2">Direct_Email</p>
                  <a href="mailto:ordaineddigitals@gmail.com" className="text-white hover:text-[#ff5c00] transition-colors text-xs">ordaineddigitals@gmail.com</a>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Cellular_Link</p>
                  <p className="text-white text-xs">065 925 0764</p>
                </div>
              </div>
            </div>

            <div className="md:border-l border-white/5 md:pl-12">
               <div className="space-y-8 font-mono text-[10px] tracking-[0.3em] uppercase">
                <div>
                  <p className="text-gray-600 mb-2">Physical_HQ</p>
                  <p className="text-white leading-relaxed text-xs">
                    Roodepoort,<br /> 
                    Johannesburg 1724,<br /> 
                    Gauteng, South Africa
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Operating_Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff5c00] rounded-full animate-ping" />
                    <span className="text-white">Active_Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PHILOSOPHY & FOOTER */}
        <section className="mb-40 py-20 border-y border-white/5 flex flex-col items-center text-center">
           <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 uppercase">Engineering <br /> From the Heart.</h2>
           <div className="flex gap-8 items-center text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.4em]">
             <span>Digital Presense</span>
             <div className="w-1 h-1 bg-white/20 rounded-full" />
             <span>Automation</span>
             <div className="w-1 h-1 bg-white/20 rounded-full" />
             <span>Management</span>
           </div>
        </section>

        <footer className="text-center">
          <button 
            onClick={() => window.dispatchEvent(new Event('open-inquiry'))}
            className="inline-block px-12 py-6 bg-white text-black font-bold uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-[#ff5c00] hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Connect with an Architect
          </button>
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