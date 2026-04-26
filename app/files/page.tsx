"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import { ThemeToggle } from "../Components/theme-toggle";
import { usePathname } from "next/navigation";



type ActionButtonProps = {
  icon: string;
  label: string;
};

type CategoryCardProps = {
  icon: string;
  title: string;
  category: string;
  description: string;
  count: string;
};

type FileItemProps = {
  name: string;
  type: string;
  format: string;
  version: string;
  size: string;
  icon: string;
  iconColor: string;
};

export default function TechnicalLibrary() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-background text-text">
      <Head>
        <title>SPEEDBOLT | Technical Web Site</title>
        
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <ThemeToggle />
      </Head>

      

      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-4 h-16 sticky top-0 z-50 bg-white dark:bg-surface border-b border-slate-200 dark:border-border">
        <div className="flex items-center gap-4">
          <span onClick={() => setMenuOpen(!menuOpen)} className="material-symbols-outlined dark:text-black cursor-pointer ">
            menu
         </span>
          <div className="flex items-center gap-2">
            {/* <img 
              alt="SPEEDBOLT Logo" 
              className="h-8" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9m6oRKSCxKgjcHVHlvGscNLHuDszP2k2AtP0z0Gcd6KeQBsYl2_Fhgvpbooss9m7evhaRBdEQAoW9ORAi38DTeJy0YLcE91xuh9l-CFA2RzXgrIN6fMFOWxMuam2Tttie0Zt_iMSr5hCtrImvDkbUYx9JByegCf6mrrkzj4WIG54wtW6JIJjRddtAxGpt7HYGFJnRXu9z4Rk4pgCyUCrjaad0MsnSrWQMIDbf_napqpuDRNObWPFSPKxCKhgJHbK7JEKy9stYmfQ"
            /> */}
            <div className="flex items-center gap-4">
               <div className="p-1 bg-black rounded-full border border-orange-600">
                  <Image
                      src="/speed.png"
                      alt="SpeedBolt Logo"
                      width={40}
                      height={60}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                    
              </div>

               <span className="text-2xl font-black tracking-wider text-orange-600">SPEEDBOLT</span>
           </div>
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <nav className="flex gap-6">
             <ThemeToggle />
            {/* <a className="tracking-tight uppercase font-bold text-sm text-slate-500 hover:text-[#954500] transition-colors" href="#">Dashboard</a>
            <a className="tracking-tight uppercase font-bold text-sm text-slate-500 hover:text-[#954500] transition-colors" href="#">Telemetry</a>
            <a className="tracking-tight uppercase font-bold text-sm text-[#954500] border-b-2 border-[#954500]" href="#">Library</a> */}
          </nav>
          {/* <span className="material-symbols-outlined text-[#954500] text-3xl">account_circle</span> */}
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* NavigationDrawer (Desktop) */}
        <aside className={`w-64 h-full bg-slate-50 dark:bg-black border-r border-slate-200 dark:border-white/10  pt-8 flex-col z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 md:static md:translate-x-0 md:flex`}>
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-slate-200 rounded-none flex items-center justify-center overflow-hidden border border-slate-300">
                  <Image
                      src="/speed.png"
                      alt="Engineer Avatar"
                        width={40}
                        height={60}
                        className="object-cover"
                    />
              </div>
              <div>
                <p className="text-xs uppercase font-medium text-[#346667]">SPEEDBOLT</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Lead Aerodynamicist</p>
              </div>
            </div>
          </div>
         <nav className="flex-1 space-y-1">
  {/* HOME: Solo activo si es exactamente "/" */}
  <NavItem 
    href="/" 
    icon="dashboard" 
    label="Home" 
    active={pathname === "/"} 
  />

  <NavItem 
    href="/telemetry" 
    icon="analytics" 
    label="Telemetry" 
    active={pathname.startsWith("/telemetry")} 
  />

  <NavItem 
    href="/performance" 
    icon="speed" 
    label="Performance" 
    active={pathname.startsWith("/performance")} 
  />

  {/* FILES: Solo activo si la ruta empieza por /files */}
  <NavItem 
    href="/files" 
    icon="folder_open" 
    label="Files" 
    active={pathname.startsWith("/files")} 
  />

  <NavItem 
    href="/settings" 
    icon="tune" 
    label="Settings" 
    active={pathname.startsWith("/settings")} 
  />
</nav>
        </aside>
        {menuOpen && (
          <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden"/>
       )}

        {/*  Main Content Canvas */}
        <main className="flex-1 overflow-y-auto relative bg-white dark:bg-background">
          <div className="technical-grid absolute inset-0 pointer-events-none"></div>
          <div className="relative z-10 p-4 md:p-6 lg:p-10 max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-10 border-l-4 border-[#954500] pl-6">
              <h1 className="text-5xl font-bold text-orange-600 uppercase tracking-tighter">Technical Library</h1>
              <p className="text-base text-[#515f5a] max-w-2xl mt-1">
                Unified access to aerodynamic blueprints, sensor telemetry, and simulation results for the 2024 Chassis Development Project.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              <CategoryCard 
                icon="architecture" 
                title="Blueprints" 
                category="BLP-01" 
                description="CAD models, chassis schematics, and mechanical assembly guides."
                count="142 FILES"
              />
              <CategoryCard 
                icon="insights" 
                title="Telemetry Data" 
                category="TLM-04" 
                description="Raw sensor logs, tire thermal analysis, and powertrain efficiency maps."
                count="856 FILES"
              />
              <CategoryCard 
                icon="air" 
                title="Wind Tunnel" 
                category="CFD-09" 
                description="CFD visualizations, drag coefficient tables, and aero-elasticity reports."
                count="219 FILES"
              />
            </div>

            {/* File List Section */}
            <div className="border border-slate-900/10 rounded-sm overflow-hidden">
              <div className="bg-[#346667] p-4 flex justify-between items-center text-white">
                <h2 className="text-xs uppercase tracking-widest font-bold">Latest Documents / Project Alpha-24</h2>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-sm cursor-pointer">search</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer">filter_list</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] text-slate-500 uppercase tracking-wider">
                      <th className="p-4">File Name</th>
                      <th className="p-4">Format</th>
                      <th className="p-4">Version</th>
                      <th className="p-4">Size</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    <FileRow name="CHASSIS_STRESS_ANALYSIS" type="BLUEPRINT" format="PDF" version="v4.2.1" size="12.4 MB" icon="picture_as_pdf" iconColor="text-red-600" />
                    <FileRow name="SILVERSTONE_FP1_RAW_LOGS" type="TELEMETRY" format="CSV" version="v1.0.0" size="458.2 MB" icon="description" iconColor="text-teal-600" />
                    <FileRow name="WING_AERO_MAPPING_DATA" type="WIND TUNNEL" format="XML" version="v2.1.0" size="2.1 MB" icon="code" iconColor="text-amber-600" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center py-4 border-t border-slate-900/10 gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Server Status: Optimized</span>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-slate-900/10 text-[11px] uppercase text-slate-400 hover:bg-slate-50 disabled:opacity-50">Previous</button>
                <button className="px-4 py-2 border border-slate-900/10 text-[11px] uppercase text-[#954500] hover:bg-slate-50 font-bold">Next Page</button>
              </div>
            </div>
          </div>
        </main>
      </div>

     
      {/* Mobile Nav */}
{/* Mobile Nav */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-16 bg-white border-t border-slate-900/10 md:hidden">
  <MobileNavItem 
    href="/" 
    icon="bar_chart" 
    label="Metrics" 
    active={pathname === "/"} 
  />
  <MobileNavItem 
    href="/telemetry" 
    icon="insights" 
    label="Telemetry" 
    active={pathname.startsWith("/telemetry")} 
  />
  <MobileNavItem 
    href="/files" 
    icon="attachment" 
    label="Library" 
    active={pathname.startsWith("/files")} 
  />
</nav>
    </div>
  );
}

// --- Subcomponentes para Limpieza de Código ---

function NavItem({ href = "#", icon, label, active = false }: { href?: string; icon: string; label: string; active?: boolean }) {
  return (
    <a className={`flex items-center gap-3 px-6 py-3 transition-colors text-xs uppercase font-medium ${
     active 
     ? 'bg-white dark:bg-[#1e293b] text-[#954500] dark:text-orange-500 border-l-4 border-[#954500]' 
     : 'text-slate-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-surface-container'
    }`} href={href}>
      <span className="material-symbols-outlined text-lg">{icon}</span> {label}
    </a>
  );
}

function CategoryCard({ icon, title, category, description, count }: CategoryCardProps) {
  return (
    <div className="border border-slate-200 dark:border-border bg-[#f9f9f9] dark:bg-[#111827] border border-slate-200 dark:border-white/10 p-6 rounded-md">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="material-symbols-outlined text-[#954500] text-3xl">{icon}</span>
          <span className="text-[10px] font-bold text-slate-400 tracking-widest">CAT: {category}</span>
        </div>
        <h3 className="text-xl font-bold uppercase mb-2 text-black dark:text-white">{title}</h3>
        <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#346667] tracking-widest">{count}</span>
        <span className="material-symbols-outlined text-[#954500] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
      </div>
    </div>
  );
}

function FileRow({ name, type, format, version, size, icon, iconColor }: FileItemProps) {
  return (
    <tr className="hover:bg-slate-50 transition-colors group border-b border-slate-100">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
          <div>
            <p className="font-bold text-gray-500 uppercase text-xs">{name}</p>
            <p className="text-[9px] text-slate-400 uppercase tracking-widest">{type}</p>
          </div>
        </div>
      </td>
      <td className="p-4"><span className="px-2 py-0.5 bg-slate-100 dark:text-gray-500 text-[9px] font-bold rounded-sm">{format}</span></td>
      <td className="p-4 dark:text-gray-500 font-bold text-xs">{version}</td>
      <td className="p-4 dark:text-gray-500 font-bold text-xs">{size}</td>
      <td className="p-4 text-right">
        <button className="text-[#954500] hover:bg-orange-50 p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined text-xl">download</span>
        </button>
      </td>
    </tr>
  );
}

function MobileNavItem({ href = "#", icon, label, active = false }: { href?: string; icon: string; label: string; active?: boolean }) {
  return (
    <a
      href={href}
      className={`${active ? 'text-[#954500]' : 'text-slate-400'} flex flex-col items-center py-1`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text-[10px] uppercase font-bold">{label}</span>
    </a>
  );
}