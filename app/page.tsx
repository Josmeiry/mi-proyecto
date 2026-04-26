"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./Components/theme-toggle";

type NavItemProps = {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

type CategoryCardProps = {
  icon: string;
  title: string;
  category: string;
  description: string;
  count: string;
};

type FileItemProps = {
  icon: string;
  iconColor: string;
  name: string;
  type: string;
  format: string;
  version: string;
  size: string;
};

type ArticleCardProps = {
  image: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  icon: string;
};

export default function TechnicalLibraryPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 bg-white dark:bg-surface border-b border-slate-900/10 dark:border-outline">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-slate-700 text-3xl leading-none touch-manipulation"
            aria-label="Abrir menú"
          >
            ☰
          </button>

          <div className="flex items-center gap-3">
            <div className="p-1 bg-black rounded-full border border-orange-600">
              <Image
                src="/speed.png"
                alt="SpeedBolt Logo"
                width={40}
                height={40}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-widest text-orange-600 uppercase">
              SPEEDBOLT
            </span>
          </div>
          
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <ThemeToggle />
            {/* <Link
              href="/"
              className="text-orange-700 border-b-2 border-orange-700 font-mono-label text-mono-label uppercase"
            >
              Insight
            </Link>
            <Link
              href="/archive"
              className="text-slate-600 font-medium font-mono-label text-mono-label uppercase hover:text-orange-700 transition-colors"
            >
              Archive
            </Link>
            <Link
              href="/files"
              className="text-slate-600 font-medium font-mono-label text-mono-label uppercase hover:text-orange-700 transition-colors"
            >
              Files
            </Link> */}
          </nav>
          {/* <span className="material-symbols-outlined text-orange-700">
            monitoring
          </span> */}
        </div>
      </header>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <div className="flex pt-16 min-h-screen">
        <aside
          className={`
            fixed md:static top-16 md:top-auto left-0 z-50 md:z-auto
            w-72 md:w-64 h-[calc(100vh-4rem)] md:h-auto
            bg-slate-50 dark:bg-speed-teal dark:bg-surface-container-low border-r border-slate-900/10 dark:border-outline
            transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
            flex flex-col pt-8
          `}
        >
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-slate-200 rounded-none flex items-center justify-center overflow-hidden border border-slate-300">
                <Image
                  src="/speed.png"
                  alt="Engineer Avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div>
                <p className="text-xs uppercase font-medium text-[#346667]">
                  SPEEDBOLT
                </p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                  Lead Aerodynamicist
                </p>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            <NavItem
              href="/"
              icon="dashboard"
              label="Home"
              onClick={() => setMenuOpen(false)}
            />
            <NavItem
              href="/telemetry"
              icon="analytics"
              label="Telemetry"
              onClick={() => setMenuOpen(false)}
            />
            <NavItem
              href="/performance"
              icon="speed"
              label="Performance"
              onClick={() => setMenuOpen(false)}
            />
            <NavItem
              href="/files"
              icon="folder_open"
              label="Files"
              active
              onClick={() => setMenuOpen(false)}
            />
            <NavItem
              href="/settings"
              icon="tune"
              label="Settings"
              onClick={() => setMenuOpen(false)}
            />
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto relative bg-white dark:bg-background">
          <div className="engineering-grid absolute inset-0 pointer-events-none opacity-60" />
          <div className="relative z-10 p-4 md:p-6 lg:p-10 max-w-7xl mx-auto">
            <section className="relative w-full px-0 py-8 md:py-12 flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-2/3 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary" />
                <Image
                  alt="F1 Engineering"
                  className="w-full aspect-[16/9] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI183l2Hr3Qi-H24tSUO8m5SF463mM9LhLQ6Kauc5WmEu2o4qqfSc7KvSVNjAV2s9WOVV-hiCPphA_vOD0kHDlN2-WcoOL8bJIrH34aaIauHZi5khF-swrKSVV7I2xa_5E7oST_OH-tYjk_EcKW7iX0ChwENWi9UfL7qeLerDzCJ-HyuPoNyOsHLdMgbbECYIztMfitKQU_3NU3RNdPNE_aDE2sJiLkdKRMR3jO-uGg2PlBvsESHNgPJ-1q5_4BAdxi9DgYcw-tt4"
                  width={1200}
                  height={675}
                  priority
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 text-mono-label font-mono-label uppercase">
                  Technical Lead
                </div>
              </div>

              <div className="w-full md:w-1/3 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[1px] bg-secondary" />
                  <span className="text-slate-800 dark:text-on-surface font-mono-label text-mono-label uppercase tracking-widest">
                    Aerodynamics // Analysis
                  </span>
                </div>
                <h1 className="font-h1 text-h1 text-slate-800 dark:text-on-surface leading-none mb-6">
                  ADVANCED AERO: REDEFINING DOWNFORCE
                </h1>
                <p className="font-body-lg text-body-lg text-slate-600 dark:text-on-surface-variant mb-8 border-l-2 border-primary-container pl-6">
                  An in-depth investigation into front-wing vortex manipulation
                  and its impact on rear-wing efficiency in turbulent wake
                  scenarios.
                </p>
                <button className="bg-primary text-slate-900 font-mono-label text-mono-label uppercase py-4 px-8 self-start tracking-widest hover:bg-primary-container transition-colors">
                  Access Paper_
                </button>
              </div>
            </section>

            <section className="w-full bg-slate-50 border-y border-slate-900/10 py-6">
              <div className="max-w-7xl mx-auto px-0 overflow-x-auto no-scrollbar flex items-center gap-8">
                <span className="text-slate-400 dark:text-on-surface-variant font-mono-label text-mono-label uppercase shrink-0">
                  Filter_Index:
                </span>
                <button className="text-primary font-bold font-mono-label text-mono-label uppercase shrink-0 px-4 py-2 bg-white mechanical-border">
                  Telemetry
                </button>
                <button className="text-slate-600 dark:text-on-surface-variant font-mono-label text-mono-label uppercase shrink-0 px-4 py-2 hover:bg-slate-100 transition-colors">
                  Aerodynamics
                </button>
                <button className="text-slate-600 dark:text-on-surface-variant font-mono-label text-mono-label uppercase shrink-0 px-4 py-2 hover:bg-slate-100 transition-colors">
                  Materials
                </button>
                <button className="text-slate-600 dark:text-on-surface-variant font-mono-label text-mono-label uppercase shrink-0 px-4 py-2 hover:bg-slate-100 transition-colors">
                  Simulations
                </button>
                <button className="text-slate-600 dark:text-on-surface-variant font-mono-label text-mono-label uppercase shrink-0 px-4 py-2 hover:bg-slate-100 transition-colors">
                  Power Unit
                </button>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-0 py-20">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="font-h2 text-h2 text-slate-900 dark:text-on-surface uppercase">
                    Recent_Articles
                  </h2>
                  <p className="font-mono-label text-mono-label text-slate-500 dark:text-on-surface-variant uppercase">
                    Latest system logs and research documentation
                  </p>
                </div>
                <div className="text-slate-800 dark:text-on-surface flex items-center gap-2 font-mono-label text-mono-label uppercase cursor-pointer">
                  View_All{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ArticleCard
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ2Lh_g-_HcY3sMsAEMK88E7yrpvXc_vIYzGQcftb7RZK61S3AsmkwwjQpC9inurROy_oTZNgjtVQB2vPDAZ8ZPKCnuYgKVnd1VKlC5EVanGsVFmjpNgWmSk6B8b_vKpyKx7eWwZalb0SZMc7qi79OcJs9TWKH9VGXi7_Op3KK5kd8QEwwC3V60Hahrrzqke_VzDCOREChbhidp1deYp2FULoXROtIe6INtK1enqPhobl2jOL1MeuuX7K6fXXUE_HtFsA1KwH5NgE"
                  tag="Telemetry"
                  date="2024-07-21 // Silverstone_UK"
                  title="RB-19 Telemetry Analysis: Silverstone 2024"
                  description="Detailed data harvest from the high-speed Maggotts and Becketts sequence, analyzing lateral load distribution."
                  icon="analytics"
                />

                <ArticleCard
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuBS2i6hf6IBjZZsKLBfN-9bnaZr9IrWe5dAZZARn_MFDSqB8P5pu3hH1TiKcAzEV54G5bffd1G0IFNtxNrE2Rdf7n4gtEo2jcg2imrSthfPKnZ823m7QPXFTLLQy6eL0Dd1WsVqG1BYtT5XcQf3YLuAmRT0uob7Tta4hpGPFg7VvwtS6gUdTLP0p-kIqKvu4yMBmnGJ1AnRuKiVphj1LZr4Fgk5xLqILVjPbiC5d-tQ_3JiSf1QCHki32hBAHHBudM2B-KrTgcabEQ"
                  tag="Materials"
                  date="2024-08-04 // Maranello_IT"
                  title="Titanium 3D Printing in Suspension Hubs"
                  description="Additive manufacturing techniques to reduce unsprung mass while increasing structural integrity under 5G loads."
                  icon="settings_input_component"
                />

                <ArticleCard
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuB87pAqHuVnW2I_Yb0zB4Nd7lH3TIK_RrAFyBDdk4LgA1UKSePiFANcEBdFvMba8dFgHeAexIvCyXnXpJx7jcc23LfuhmtVzScMEGZJyUBISi2DL20binnOGrZJ7MuJ6UvqAf99o533egg9aZ8Tc09RyzFhmwhVVNywsPyHzPbgQhAWtYdagHHRbt0wgQsQU-Y9UQVKn8u6Ep0PLO4CUsWuvUmGk3Acyd6wWy-UQt61S0WF25SzEh545feKOvw4RUD2CTeu6pwr7Yk"
                  tag="Simulations"
                  date="2024-08-15 // Milton_Keynes_UK"
                  title="CFD Optimization of Rear Floor Edges"
                  description="Utilizing cloud-based compute clusters to simulate 50,000 floor iterations for the 2025 chassis regulations."
                  icon="air"
                />
              </div>
            </section>

            <section className="w-full bg-slate-950 text-white py-20 px-6 overflow-hidden relative">
              <div className="absolute inset-0 opacity-10 pointer-events-none engineering-grid" />
              <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                <span className="text-primary font-mono-label text-mono-label uppercase mb-4 tracking-[0.2em]">
                  Intel_Distribution
                </span>
                <h2 className="font-h2 text-h2 mb-8 uppercase tracking-tight">
                  Subscribe to the Engineering Stream
                </h2>
                <p className="font-body-lg text-slate-400 mb-10 max-w-2xl">
                  Receive weekly technical deep-dives, telemetry abstracts, and
                  aerodynamic whitepapers directly to your inbox.
                </p>
                <form className="w-full max-w-lg flex flex-col md:flex-row gap-4">
                  <input
                    className="flex-grow bg-transparent border-b-2 border-slate-800 focus:border-primary px-4 py-4 font-mono-label text-white outline-none transition-all placeholder:text-slate-700"
                    placeholder="ENGINEER_ID@CORP.F1"
                    type="email"
                  />
                  <button className="bg-primary text-white font-mono-label text-mono-label uppercase px-8 py-4 hover:bg-primary-container transition-colors">
                    Register_Device
                  </button>
                </form>
                <p className="mt-6 text-slate-600 font-mono-label text-[10px] uppercase">
                  Strict confidentiality protocols apply. No third-party data
                  sharing.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-start gap-8 bg-slate-50 border-t border-slate-900/10">
        <div className="flex flex-col gap-4">
          <div className="text-md font-bold text-slate-900 uppercase font-h3">
            F1 ENGINEERING LABS
          </div>
          <p className="font-mono-label text-slate-500 max-w-xs">
            Precision analysis and advanced R&amp;D documentation for the
            pinnacle of motorsport engineering.
          </p>
          <div className="text-[12px] tracking-widest uppercase font-['Space_Grotesk'] text-slate-500 mt-4">
            © 2024 F1 ENGINEERING LABS | ALL RIGHTS RESERVED
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          <div className="flex flex-col gap-2">
            <span className="text-slate-900 font-bold font-mono-label text-mono-label uppercase mb-2">
              Technical
            </span>
            <a
              className="text-slate-500 font-mono-label text-[12px] uppercase hover:text-orange-700 underline decoration-1 transition-opacity"
              href="#"
            >
              Technical Specs
            </a>
            <a
              className="text-slate-500 font-mono-label text-[12px] uppercase hover:text-orange-700 underline decoration-1 transition-opacity"
              href="#"
            >
              Telemetry API
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-900 font-bold font-mono-label text-mono-label uppercase mb-2">
              Research
            </span>
            <a
              className="text-slate-500 font-mono-label text-[12px] uppercase hover:text-orange-700 underline decoration-1 transition-opacity"
              href="#"
            >
              Aerodynamic Research
            </a>
            <a
              className="text-slate-500 font-mono-label text-[12px] uppercase hover:text-orange-700 underline decoration-1 transition-opacity"
              href="#"
            >
              Whitepapers
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">terminal</span>
          </div>
          <div className="w-10 h-10 border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">share</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
  active = false,
  onClick,
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 transition-colors text-xs uppercase font-medium ${
        active
          ? "bg-white text-[#954500] border-l-4 border-[#954500]"
          : "text-slate-600 hover:bg-teal-50"
      }`}
    >
      <span className="material-symbols-outlined text-lg">{icon}</span>
      {label}
    </Link>
  );
}

function ArticleCard({
  image,
  tag,
  date,
  title,
  description,
  icon,
}: ArticleCardProps) {
  return (
    <div className="group mechanical-border bg-white dark:bg-surface-container flex flex-col overflow-hidden">
      <div className="relative overflow-hidden h-48">
        <Image
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          width={1200}
          height={800}
        />
        <div className="absolute top-0 left-0 bg-secondary px-3 py-1 text-white font-mono-label text-[10px] uppercase">
          {tag}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-slate-400 dark:text-on-surface-variant font-mono-label text-[10px] mb-2">
          {date}
        </div>
        <h3 className="font-h3 text-h3 text-slate-900 mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-slate-600 dark:text-on-surface-variant line-clamp-3 mb-6">
          {description}
        </p>
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
          <span className="text-slate-800 font-mono-label text-mono-label uppercase">
            Read Report
          </span>
          <span className="material-symbols-outlined text-slate-900">
            {icon}
          </span>
        </div>
      </div>
    </div>
  );
}