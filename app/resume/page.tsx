"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Award,
  CheckCircle2
} from "lucide-react"
import { LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 print:bg-white print:text-black font-sans selection:bg-indigo-500/20 selection:text-white pb-20">
      
      {/* Navbar for Resume Page */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-900/60 bg-zinc-950/80 backdrop-blur-md print:hidden py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group">
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          <Button 
            onClick={handlePrint}
            variant="outline" 
            size="sm" 
            className="border-zinc-800 text-zinc-300 hover:text-white font-mono text-xs cursor-pointer rounded-xl flex items-center gap-1.5"
          >
            <Printer className="size-3.5" />
            Print / Save PDF
          </Button>
        </div>
      </header>

      {/* Main Resume Sheet */}
      <main className="max-w-4xl mx-auto px-6 pt-10 print:pt-0">
        
        {/* Glassmorphic Sheet container */}
        <div className="border border-zinc-900/80 bg-zinc-950/40 p-8 sm:p-12 rounded-3xl backdrop-blur-sm shadow-xl print:border-none print:bg-transparent print:p-0 print:shadow-none print:backdrop-blur-none relative overflow-hidden">
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/5 to-transparent blur-3xl rounded-full pointer-events-none print:hidden" />

          {/* Resume Header */}
          <section className="border-b border-zinc-900/80 print:border-zinc-200 pb-8 space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white print:text-black tracking-tight">
                  Sankarapandian R
                </h1>
                <p className="text-indigo-400 print:text-indigo-600 font-mono text-sm sm:text-base font-semibold mt-1">
                  Senior Frontend Engineer | UI Architect
                </p>
              </div>
              
              {/* Profile image slot or initial logo */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 font-mono text-lg font-bold print:hidden">
                S
              </div>
            </div>

            {/* Contact details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6 text-xs font-mono text-zinc-400 print:text-zinc-700">
              <div className="flex items-center gap-2">
                <Mail className="size-3.5 text-indigo-400 print:text-indigo-600 shrink-0" />
                <a href="mailto:sankarvj18@gmail.com" className="hover:text-white print:hover:text-black transition-colors">sankarvj18@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-3.5 text-indigo-400 print:text-indigo-600 shrink-0" />
                <a href="tel:+919360562624" className="hover:text-white print:hover:text-black transition-colors">+91 93605 62624</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-indigo-400 print:text-indigo-600 shrink-0" />
                <span>Madurai, TN, India</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="size-3.5 text-indigo-400 print:text-indigo-600 shrink-0" />
                <a href="https://linkedin.com/in/sankar-r-8b251b37a" target="_blank" rel="noopener noreferrer" className="hover:text-white print:hover:text-black transition-colors">linkedin.com/in/sankar-r-8b251b37a</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="size-3.5 text-indigo-400 print:text-indigo-600 shrink-0" />
                <Link href="/" className="hover:text-white print:hover:text-black transition-colors">sankar.dev (Portfolio)</Link>
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="py-8 border-b border-zinc-900/80 print:border-zinc-200 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-indigo-600 font-bold">
              Professional Profile
            </h2>
            <p className="text-zinc-300 print:text-zinc-800 text-sm sm:text-base leading-relaxed font-mono">
              Frontend Engineer with 3.2+ years of experience specializing in enterprise-grade SaaS environments. Expert in constructing highly optimized React and Next.js applications, building robust client-side routing middleware, designing schema-driven drag-and-drop form rendering engines, and scaling complex local states. Proactive advocate for strict TypeScript verification, modular design systems, and Web accessibility (WCAG) compliance.
            </p>
          </section>

          {/* Work History */}
          <section className="py-8 border-b border-zinc-900/80 print:border-zinc-200 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-indigo-600 font-bold">
              Experience
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-white print:text-black font-heading">
                    Frontend Engineer
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 bg-zinc-950/80 border border-zinc-900 px-2 py-0.5 rounded-lg print:border-zinc-200 print:bg-zinc-50 print:text-zinc-700">
                    <Calendar className="size-3 text-indigo-400 print:text-indigo-600" />
                    Feb 2023 — Mar 2026
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-xs sm:text-sm font-mono text-indigo-400 print:text-indigo-600 font-semibold">
                  <span>Zettastack Systems Pvt Ltd</span>
                  <span>Coimbatore, Tamil Nadu</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 print:text-zinc-600 font-mono italic">
                  Led frontend architecture engineering for enterprise SaaS survey builders, dynamic admin configurations, and interactive dashboards.
                </p>

                {/* Achievements Bullet list */}
                <ul className="space-y-2.5 pt-2">
                  {[
                    "JSON Rendering Engine Optimization: Re-engineered core JSON schema compiler using component composition, memoization, and rendering isolation, reducing matrix field form load delays by 45% on surveys containing 100+ nested fields.",
                    "Multi-Tenant Layout Isolation: Architected a subdomain tenant-middleware gateway to resolve client styling isolation and custom asset loading for 20+ enterprise customers.",
                    "Reusable Component Design System: Built a framework library of 40+ atomic and nested inputs (Matrix grids, Signature Pads, drill-down selectors) that accelerated developer delivery speed by 60%.",
                    "Client-Side Scoped RBAC Validation: Implemented security routing logic that limits visible UI modules, navigation routes, and client-side actions based on JWT authentication payloads."
                  ].map((bullet, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 flex items-start gap-2.5 leading-relaxed font-mono">
                      <span className="size-1.5 rounded-full bg-indigo-500/80 print:bg-indigo-600 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Alignment Matrix */}
          <section className="py-8 border-b border-zinc-900/80 print:border-zinc-200 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-indigo-600 font-bold">
              Skills & Tech Stack
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-2.5">
                <h4 className="font-bold text-white print:text-black border-b border-zinc-900 print:border-zinc-200 pb-1.5">Languages & Frameworks</h4>
                <p className="text-zinc-400 print:text-zinc-700 leading-relaxed">React, Next.js (App & Pages Router), TypeScript, JavaScript (ES6+), HTML5, CSS3, CSS Modules</p>
              </div>
              <div className="space-y-2.5">
                <h4 className="font-bold text-white print:text-black border-b border-zinc-900 print:border-zinc-200 pb-1.5">State & UI Toolkits</h4>
                <p className="text-zinc-400 print:text-zinc-700 leading-relaxed">Zustand, Redux Toolkit, React Context, TanStack Query, Radix UI Primitives, Tailwind CSS, Shadcn UI, Framer Motion</p>
              </div>
              <div className="space-y-2.5">
                <h4 className="font-bold text-white print:text-black border-b border-zinc-900 print:border-zinc-200 pb-1.5">Architecture & Tools</h4>
                <p className="text-zinc-400 print:text-zinc-700 leading-relaxed">Turborepo, WebSockets, Zod Schema Validation, Eslint, Webpack/Vite, Git/GitHub, CI/CD, WCAG Accessibility</p>
              </div>
            </div>
          </section>

          {/* Education & Personal Accomplishments */}
          <section className="py-8 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-indigo-600 font-bold">
              Education
            </h2>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                <div>
                  <h3 className="text-sm font-bold text-white print:text-black">
                    Bachelor of Science in Computer Science & Information Technology
                  </h3>
                  <p className="text-zinc-400 print:text-zinc-600 mt-0.5">
                    Madurai Kamaraj University &bull; Madurai, Tamil Nadu
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-500 bg-zinc-950/80 border border-zinc-900 px-2 py-0.5 rounded-lg shrink-0 w-max print:border-zinc-200 print:bg-zinc-50 print:text-zinc-700">
                  <GraduationCap className="size-3 text-indigo-400 print:text-indigo-600" />
                  Graduated: 2022
                </span>
              </div>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  )
}
