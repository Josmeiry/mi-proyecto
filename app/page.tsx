export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-black/90 backdrop-blur-md border-b border-neutral-800/50 shadow-[0px_4px_20px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-orange-600 text-3xl">leaderboard</span>
          <span className="text-2xl font-black italic tracking-tighter text-orange-600 uppercase">
            V-MAX_SYSTEMS
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="text-orange-600 border-b-2 border-orange-600 pb-1 font-bold uppercase">Telemetry</a>
          <a className="text-neutral-400 hover:text-teal-400 uppercase">Aero Dynamics</a>
          <a className="text-neutral-400 hover:text-teal-400 uppercase">Vault</a>
        </nav>

        <button className="bg-orange-600 text-black px-6 py-2 font-bold uppercase hover:bg-orange-500">
          PIT WALL ACCESS
        </button>
      </header>

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-80 bg-[#121212] border-r border-neutral-800 pt-24 hidden lg:flex flex-col">
        <div className="px-6 mb-6 flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full border border-orange-600"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCisTkXsVHPIBPzkezr1C-ejgHBy31X0FqNL_Up18L4qD9cIqEqq60Lfrj9HTa5Q62jWIuvvMggBkXZstSz-AsdrIwl91U3OHQD0vVHFTAj0UbRRxYmmV3LXNVmHEynTEOAK-l4C3ZOFKbk8QVwpdVR6StPFfl4FaZ-L5Q3KG5qe-EnsFY07vp_sJljqyerCTf16gUs9Xu7zmMj0h4VqDES3iglCHuBvc8Px4HZWhTXBoAE098IcagtwYY0IwoMgUJwqvL79ojlkg"
          />
          <div>
            <p className="text-orange-600 font-bold uppercase">R. NEWEY</p>
            <p className="text-neutral-500 text-xs uppercase">Lead Aerodynamicist</p>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="lg:ml-80 pt-20">

        {/* HERO */}
        <section className="min-h-screen flex items-center px-8">
          <div>
            <h1 className="text-5xl font-bold text-white">
              THE FUTURE OF <br />
              <span className="text-orange-600 italic">VELOCITY</span>
            </h1>

            <p className="text-neutral-400 mt-4 max-w-xl">
              Redefining high-performance engineering through real-time telemetry fusion.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-orange-600 px-6 py-3 text-black font-bold">
                DEPLOY SYSTEMS
              </button>
              <button className="border border-teal-500 px-6 py-3 text-teal-400">
                VIEW SCHEMATICS
              </button>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="px-8 py-16 grid md:grid-cols-3 gap-6">
          
          <div className="bg-[#121212] p-6 border border-neutral-800">
            <h3 className="text-white font-bold mb-2">TELEMETRY</h3>
            <p className="text-neutral-400 text-sm">
              Latency-free data streaming from 200+ sensors.
            </p>
          </div>

          <div className="bg-[#121212] p-6 border border-neutral-800">
            <h3 className="text-white font-bold mb-2">AERO DYNAMICS</h3>
            <p className="text-neutral-400 text-sm">
              Advanced CFD modeling and optimization.
            </p>
          </div>

          <div className="bg-[#121212] p-6 border border-neutral-800">
            <h3 className="text-white font-bold mb-2">SIMULATIONS</h3>
            <p className="text-neutral-400 text-sm">
              Driver-in-the-loop simulations.
            </p>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center border-t border-neutral-900">
          <p className="text-neutral-600 text-xs">
            © 2024 V-MAX ENGINEERING
          </p>
        </footer>

      </main>

    </div>
  );
}