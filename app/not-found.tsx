"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Automatic redirect after 5 seconds
    if (countdown === 0) {
      router.push('/');
    }

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#e5e5e1] font-sans overflow-hidden flex items-center justify-center">
      
      {/* 1. ATMOSPHERIC DISTORTION */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff5c00]/10 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)', backgroundSize: '100% 3px' }} />
      </div>

      {/* 2. ERROR CONTENT */}
      <div className="relative z-10 text-center px-6">
        <p className="text-[#ff5c00] font-mono text-[10px] uppercase tracking-[0.8em] mb-8 animate-pulse">
          Error_Protocol: 404
        </p>
        
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 uppercase">
          Node <br /> Disconnected.
        </h1>
        
        <p className="text-gray-500 text-sm font-light italic mb-12 max-w-sm mx-auto">
          The coordinate you requested does not exist within the current neural map.
        </p>

        {/* 3. SYSTEM RESET VISUAL */}
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#ff5c00] transition-all duration-1000 ease-linear" 
              style={{ width: `${(countdown / 5) * 100}%` }}
            />
          </div>
          
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            System Reset in <span className="text-[#ff5c00]">{countdown}</span> Seconds...
          </p>

          <Link 
            href="/" 
            className="mt-8 px-10 py-4 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Manual_Override_Home
          </Link>
        </div>
      </div>

      {/* 4. BACKGROUND IDENTIFIER */}
      <div className="absolute bottom-10 right-10 opacity-10">
        <span className="text-[100px] font-black tracking-tighter text-white select-none">404</span>
      </div>
    </main>
  );
}