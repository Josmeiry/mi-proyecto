"use client";

import React from 'react';
import Link from "next/link";
import { ThemeToggle } from "./Components/theme-toggle";


export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    
    <div className="bg-black text-[#f2dfd3] font-sans selection:bg-orange-600/30 selection:text-white overflow-x-hidden min-h-screen">
      

      {/* HEADER */}
      <header className="fixed top-0 left-0 lg:left-80 w-full z-50 flex justify-between items-center px-8 h-20 bg-black/90 backdrop-blur-md border-b border-neutral-800/50 shadow-[0px_4px_20px_rgba(0,0,0,0.9)]">
        <button onClick={() => setOpen(!open)} className="lg:hidden text-orange-600 text-3xl">
          ☰
       </button>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-orange-600 text-3xl">leaderboard</span>
          <span className="text-2xl font-black italic tracking-tighter text-orange-600 font-headline uppercase">
            SPEEDBOLT
          </span>
          <ThemeToggle />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="font-headline text-orange-600 border-b-2 border-orange-600 pb-1 font-bold tracking-tight uppercase cursor-pointer">Telemetry</a>
          <a className="font-headline text-neutral-400 font-medium hover:text-teal-400 transition-colors tracking-tight uppercase cursor-pointer">Aero Dynamics</a>
          <a className="font-headline text-neutral-400 font-medium hover:text-teal-400 transition-colors tracking-tight uppercase cursor-pointer">Vault</a>
        </nav>

        <button className="bg-[#e37903] text-[#4a2300] px-6 py-2 font-headline font-bold tracking-tight uppercase hover:bg-orange-500 transition-all active:scale-95">
          PIT WALL ACCESS
        </button>
      </header>

      {/* SIDEBAR */}
      <aside className={`fixed left-0 top-0 h-full w-80 bg-[#121212] border-r border-neutral-800 pt-24 flex flex-col z-50 shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="flex items-center gap-4 px-6 mb-8">
          <img
            className="w-12 h-12 rounded-full border border-orange-600 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCisTkXsVHPIBPzkezr1C-ejgHBy31X0FqNL_Up18L4qD9cIqEqq60Lfrj9HTa5Q62jWIuvvMggBkXZstSz-AsdrIwl91U3OHQD0vVHFTAj0UbRRxYmmV3LXNVmHEynTEOAK-l4C3ZOFKbk8QVwpdVR6StPFfl4FaZ-L5Q3KG5qe-EnsFY07vp_sJljqyerCTf16gUs9Xu7zmMj0h4VqDES3iglCHuBvc8Px4HZWhTXBoAE098IcagtwYY0IwoMgUJwqvL79ojlkg"
            alt="Profile"
          />
          <div>
            <p className="font-headline font-bold text-orange-600 uppercase tracking-tighter leading-none">R. NEWEY</p>
            <p className="text-neutral-500 text-[10px] uppercase tracking-widest mt-1">Lead Aerodynamicist</p>
          </div>
        </div>

        <nav className="flex flex-col">
          <div className="bg-orange-600/10 text-orange-600 border-l-4 border-orange-600 font-bold px-6 py-4 flex items-center gap-4 font-headline text-sm tracking-widest">
            <span className="material-symbols-outlined">query_stats</span> Telemetry
          </div>
          <a className="text-neutral-500 px-6 py-4 hover:bg-neutral-900 active:bg-neutral-800 touch-manipulation transition-all flex items-center gap-4 font-headline text-sm tracking-widest group cursor-pointer">
            <span className="material-symbols-outlined group-hover:translate-x-1 group-active:translate-x-1 transition-transform">air</span> Aero Dynamics
          </a>
          {/* <a className="text-neutral-500 px-6 py-4 hover:bg-neutral-900 transition-all flex items-center gap-4 font-headline text-sm tracking-widest group cursor-pointer">
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">Files</span> Files
            </a> */}
            <Link href="/files" onClick={() => setOpen(false)} className="text-neutral-500 px-6 py-4 hover:bg-neutral-900 active:bg-neutral-800 transition-all flex items-center gap-4 font-headline text-sm tracking-widest group cursor-pointer touch-manipulation">
            <span className="material-symbols-outlined group-hover:translate-x-1 group-active:translate-x-1 transition-transform">
              Files</span>Files</Link>
        </nav>

        <div className="mt-auto p-6">
          <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-bold">System Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#8fd2d3] animate-pulse"></span>
              <p className="text-xs text-neutral-300">Uplink Stable (99.8%)</p>
            </div>
          </div>
        </div>
      </aside>
      {open && (
       <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden"/>
     )}

      {/* MAIN CONTENT */}
      <main className="lg:ml-80 pt-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center px-8 md:px-16 overflow-hidden border-b border-neutral-900">
          <div className="absolute inset-0 carbon-texture opacity-5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          
          <div className="relative z-20 max-w-4xl">
            <h1 className="font-headline text-6xl md:text-8xl font-bold mb-6 leading-[0.95] text-white tracking-tighter">
              THE FUTURE OF <br />
              <span className="text-orange-600 italic">VELOCITY</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-8 border-l-2 border-teal-500/50 pl-6 leading-relaxed">
              Redefining high-performance engineering through real-time telemetry fusion and multi-physics aerodynamic simulation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-600 text-black px-8 py-4 font-headline font-bold uppercase tracking-tight flex items-center gap-3 hover:bg-orange-500 active:bg-orange-400 active:scale-95 transition-all touch-manipulation">
                DEPLOY SYSTEMS <span className="material-symbols-outlined">bolt</span>
              </button>
              <button className="border border-teal-500 text-teal-400 px-8 py-4 font-headline font-bold uppercase tracking-tight hover:bg-teal-500/10 transition-all">
                VIEW SCHEMATICS
              </button>
            </div>
          </div>
        </section>

        {/* BENTO CARDS */}
        <section className="px-8 md:px-16 py-16">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="font-headline text-2xl text-white font-bold uppercase tracking-widest">Engineering Excellence</h2>
             <div className="flex-1 h-px bg-neutral-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-[#121212] border border-neutral-800 p-8 hover:border-orange-600/50 transition-all duration-300">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 group-hover:text-orange-600 transition-all">
                <span className="material-symbols-outlined text-4xl">query_stats</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 text-white">TELEMETRY</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Latency-free data streaming from 200+ sensor points on the chassis. Multi-channel analysis.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-teal-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span> REAL-TIME ACTIVE
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#121212] border border-neutral-800 p-8 hover:border-teal-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 group-hover:text-teal-500 transition-all">
                <span className="material-symbols-outlined text-4xl">air</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 text-white">AERO DYNAMICS</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Advanced CFD modeling and wind tunnel data correlation for drag reduction optimization.
              </p>
              <div className="w-full bg-neutral-900 h-1 mt-4">
                <div className="bg-teal-500 h-full w-[88%]"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#121212] border border-neutral-800 p-8 hover:border-orange-600/50 transition-all duration-300">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 group-hover:text-orange-600 transition-all">
                <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 text-white">SIMULATIONS</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Driver-in-the-loop integration and virtual prototype validation across international GP circuits.
              </p>
              <button className="text-orange-600 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                LAUNCH SIMULATOR <span className="material-symbols-outlined text-xs">open_in_new</span>
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-8 text-center border-t border-neutral-900 mt-20 bg-black">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-orange-600">leaderboard</span>
            <p className="font-headline text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
              © 2024 V-MAX ENGINEERING. OPTIMIZED FOR HIGH-VELOCITY DATA TRANSFER.
            </p>
          </div>
        </footer>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-orange-600 text-black rounded-full shadow-[0_0_20px_rgba(227,121,3,0.5)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all touch-manipulation">
        <span className="material-symbols-outlined text-3xl">bolt</span>
      </button>
    </div>
  );
}