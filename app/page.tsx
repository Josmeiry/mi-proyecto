import React from 'react';
import Head from 'next/head';

export default function VMaxDashboard() {
  return (
    <>
      <Head>
        <title>V-MAX SYSTEMS | Engineering Excellence</title>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-black text-[#f2dfd3] font-sans min-h-screen overflow-x-hidden selection:bg-[#e37903] selection:text-[#4a2300]">
        
        {/* TopAppBar */}
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-black/90 backdrop-blur-md border-b border-neutral-800/50 shadow-[0px_4px_20px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#ffb780] text-3xl">leaderboard</span>
            <span className="text-2xl font-black italic tracking-tighter text-[#ffb780] font-['Space_Grotesk'] uppercase">V-MAX_SYSTEMS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="font-['Space_Grotesk'] text-[#ffb780] border-b-2 border-[#ffb780] pb-1 font-bold tracking-tight uppercase" href="#">Telemetry</a>
            <a className="font-['Space_Grotesk'] text-neutral-400 font-medium hover:text-[#8fd2d3] transition-colors tracking-tight uppercase" href="#">Aero Dynamics</a>
            <a className="font-['Space_Grotesk'] text-neutral-400 font-medium hover:text-[#8fd2d3] transition-colors tracking-tight uppercase" href="#">Vault</a>
          </nav>
          <button className="bg-[#e37903] text-[#4a2300] px-6 py-2 font-['Space_Grotesk'] font-bold tracking-tight uppercase hover:bg-orange-500 transition-all duration-200 active:scale-95">
            PIT WALL ACCESS
          </button>
        </header>

        <main className="lg:ml-80 pt-20">
          {/* Hero Section */}
          <section className="relative min-h-[751px] flex items-center px-8 md:px-16 overflow-hidden border-b border-neutral-900">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
            <div className="relative z-20 max-w-4xl">
              <h1 className="font-['Space_Grotesk'] text-[48px] font-bold mb-6 leading-[0.95] text-white">
                THE FUTURE OF <br/><span className="text-[#ffb780] italic">VELOCITY</span>
              </h1>
              <p className="text-[18px] text-neutral-400 max-w-2xl mb-8 border-l-2 border-[#8fd2d3]/50 pl-6">
                Redefining high-performance engineering through real-time telemetry fusion and multi-physics aerodynamic simulation. The pit wall, evolved for the digital era.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#ffb780] text-black px-8 py-4 font-bold uppercase tracking-tight flex items-center gap-3 hover:bg-orange-400 transition-all">
                    DEPLOY SYSTEMS <span className="material-symbols-outlined">bolt</span>
                </button>
                <button className="border border-[#8fd2d3] text-[#8fd2d3] px-8 py-4 font-bold uppercase tracking-tight hover:bg-[#8fd2d3]/10 transition-all">
                    VIEW SCHEMATICS
                </button>
              </div>
            </div>
          </section>

          {/* Aquí puedes continuar pegando el resto de tus secciones cambiando class por className */}
          
        </main>

        {/* FAB */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#ffb780] text-black rounded-full shadow-[0_0_20px_rgba(227,121,3,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
          <span className="material-symbols-outlined text-3xl">bolt</span>
        </button>
      </div>
    </>
  );
}