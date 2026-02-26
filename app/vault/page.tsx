"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// THE ASSET BLUEPRINT: Defining the structure of your logic products
interface Asset {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export default function DigitalVault() {
  // THE FIX: Explicitly typing the state hooks
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const assets: Asset[] = [
    {
      id: "V-01",
      name: "Stokvel Neural Tracker",
      category: "Operations",
      description: "Automated contribution tracking with real-time disbursement logic and member history. Engineered for high-trust financial stewardship.",
      price: "$25",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022"
    },
    {
      id: "V-02",
      name: "Aesthetic Household Ledger",
      category: "Finance",
      description: "A minimalist dashboard for managing domestic capital with high-fidelity visual insights and categorized expense tracking.",
      price: "$15",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426"
    },
    {
      id: "V-03",
      name: "Content Protocol",
      category: "Media Strategy",
      description: "A high-performance ecosystem for multi-platform content scheduling, scripting logic, and cross-channel consistency.",
      price: "$20",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070"
    }
  ];

  // THE FIX: Defining the Form Event type
  const handleTransaction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedAsset) return;
    
    setIsSyncing(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxNCBdzD5to0ABZFMVc-3gt398Gs2V6nh69r2uPrFGeWVGs-IzayeEl9COiPiSZongC/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: "Vault_Purchase_Intent",
          email: email,
          tier: `Purchase: ${selectedAsset.name}`,
        }),
      });

      window.location.href = "https://checkout.paystack.com/your-link-here";
      
    } catch (err) {
      console.error("Sync Error", err);
      setIsSyncing(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#ff5c00 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* 2. NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-white/5">
        <Link href="/" className="text-xl font-bold tracking-[0.4em] uppercase text-white hover:text-[#ff5c00] transition-colors">Ordained</Link>
        <Link href="/inquiry" className="px-8 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#ff5c00] hover:text-white transition-all">
          Custom Protocol
        </Link>
      </nav>

      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 pt-48 pb-24 text-left">
        <header className="max-w-3xl mb-32">
          <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Asset_Manifest_v1.0</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white mb-10">The <br /> Vault.</h1>
        </header>

        {/* 3. ASSET GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {assets.map((asset) => (
            <div key={asset.id} className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:!border-[#ff5c00]/40 transition-all duration-700">
              <div className="aspect-video w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={asset.image} alt={asset.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <span className="text-[10px] font-mono text-[#ff5c00] uppercase tracking-widest mb-6">{asset.category}</span>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{asset.name}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-10 flex-grow">{asset.description}</p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="text-2xl font-bold text-white tracking-tighter">{asset.price}</span>
                  <button 
                    onClick={() => setSelectedAsset(asset)}
                    className="px-6 py-3 bg-white text-black text-[9px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#ff5c00] hover:text-white transition-all"
                  >
                    Unlock Asset
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. CHECKOUT OVERLAY (The Protocol) */}
        {selectedAsset && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedAsset(null)} />
            <div className="relative w-full max-w-xl bg-[#111] border border-white/10 p-12 rounded-[3rem] shadow-2xl animate-in zoom-in duration-500">
              <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.5em] mb-6">Checkout_Protocol</p>
              <h2 className="text-4xl font-bold tracking-tighter text-white mb-4 uppercase">Unlock {selectedAsset.name}</h2>
              <p className="text-gray-500 text-sm mb-12">Enter your coordinates to initialize the secure transfer of this logic asset.</p>
              
              <form onSubmit={handleTransaction} className="space-y-8">
                <div className="border-b border-white/10 focus-within:border-[#ff5c00] transition-colors pb-2">
                  <label className="block text-[8px] font-mono text-gray-600 uppercase mb-2">Digital_Coordinates</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="email@protocol.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-xl font-light text-white" 
                  />
                </div>
                
                <div className="flex flex-col gap-4">
                  <button 
                    type="submit"
                    disabled={isSyncing}
                    className="w-full py-5 bg-[#ff5c00] text-black font-bold uppercase text-[11px] tracking-widest rounded-2xl hover:bg-white transition-all"
                  >
                    {isSyncing ? "SYNCING..." : `Authorize ${selectedAsset.price} Transaction`}
                  </button>
                  <button type="button" onClick={() => setSelectedAsset(null)} className="text-[10px] font-mono text-gray-600 uppercase tracking-widest hover:text-white transition-colors">
                    Cancel_Operation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <footer className="mt-40 pt-20 border-t border-white/5 opacity-80 text-left">
           <p className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.4em]">Ready for Digital Sovereignty?</p>
           <Link href="/" className="text-white hover:text-[#ff5c00] font-bold uppercase text-[10px] tracking-[0.3em] transition-colors">
             Return to Vision Center ↗
           </Link>
        </footer>
      </div>
    </main>
  );
}