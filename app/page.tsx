"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Sparkles,
  Send,
  Mail,
  MapPin,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Custom Components
import { InteractiveHero } from "@/components/interactive-hero";
import { InteractiveBackground } from "@/components/interactive-bg";
import { TimelineExperience } from "@/components/timeline-experience";
import { TechMatrix } from "@/components/tech-matrix";
import { DevelopmentPhilosophy } from "@/components/development-philosophy";
import { Navbar } from "@/components/navbar";
const TECH_ICON_MAP: Record<string, string> = {
  "React": "/icons/react.png",
  "Next.js": "/icons/nextjs.png",
  "TypeScript": "/icons/typescript.png",
  "Tailwind CSS": "/icons/tailwindcss.png",
  "Zustand": "/icons/zustand.jpg",
  "Redux": "/icons/redux.png",
  "TanStack Query": "/icons/tanstack.png",
  "Node.js": "/icons/nodejs.png",
  "Express": "/icons/expressjs.png",
  "Express.js": "/icons/expressjs.png",
  "PostgreSQL": "/icons/postgresql.png",
  "Hono.js": "/icons/honojs.png",
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sankarvj18@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projectsData = [
    {
      slug: "multi-tenant-survey-builder",
      title: "Enterprise Multi-Tenant Survey Builder",
      role: "Lead Frontend Architecture",
      desc: "A schema-driven, drag-and-drop form rendering engine supporting white-label themes and strict tenant database isolation.",
      specs: [
        "Built highly optimized components supporting dynamic custom styling themes.",
        "Implemented layout-wide memoization to prevent rendering lag on nested survey fields.",
        "Engineered tenant subdomain middleware supporting isolated styling assets.",
        "Leveraged Zod for real-time client-side inputs verification & feedback loops.",
      ],
      tech: ["Next.js", "Redux", "Zod", "Tailwind CSS", "TypeScript"],
    },
    {
      slug: "realtime-chat",
      title: "Real-Time Collaborative Chat App",
      role: "Core UI Engineer",
      desc: "High-performance messaging client connected to socket servers supporting direct messages and custom auth scopes in a shared Turborepo configuration.",
      specs: [
        "Structured modular Zustand client stores mapping to individual WebSocket namespaces.",
        "Optimized message feeds with virtual scrolling, rendering hundreds of updates smoothly.",
        "Integrated custom JSON payload encoders to enforce type-safety on socket actions.",
        "Deployed shared package architecture in Turborepo for design systems alignment.",
      ],
      tech: [
        "React",
        "WebSockets",
        "Zustand",
        "Node.js",
        "Express",
        "Tailwind CSS",
      ],
    },
    {
      slug: "schema-rendering-engine",
      title: "Custom UI Schema Rendering Engine",
      role: "Lead Developer",
      desc: "A core layout parser converting incoming JSON templates into reactive, accessible nested form fields with complete state control.",
      specs: [
        "Mapped abstract component configurations directly to native Shadcn UI primitives.",
        "Maintained memoized rendering structures, avoiding heavy page-wide layout reflows.",
        "Crafted custom types parsing formulas to auto-validate conditions on field entry.",
        "Exceeded strict WCAG accessibility guidelines with proper aria attributes bindings.",
      ],
      tech: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Radix UI",
        "CSS Modules",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      {/* Dynamic Glow Cursor mesh & ambient backgrounds */}
      <InteractiveBackground />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <InteractiveHero />

      {/* About Me Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-8 py-16 relative">
        {/* Decorative backdrop glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/5 border border-indigo-500/10 rounded-full px-3 py-1 w-fit block">
                Profile Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                About Me
              </h2>
              <p className="text-indigo-400/80 font-mono text-xs sm:text-sm font-semibold">
                Bridging the gap between robust SaaS logic and premium UI interactions.
              </p>
            </div>
            
            <div className="space-y-4 text-sm sm:text-base text-zinc-400 font-mono leading-relaxed">
              <p>
                I'm a Frontend Engineer with 3.2+ years of professional experience building enterprise-grade SaaS platforms. 
                I specialize in React, Next.js, TypeScript, and scalable frontend architecture. 
              </p>
              <p>
                Throughout my career, I've built complex multi-tenant applications, dynamic schema-driven UI systems, 
                role-based access control, workflow engines, and reusable component libraries. 
              </p>
              <p>
                I enjoy solving challenging UI architecture problems—like optimizing render loops for JSON-driven survey builders or designing flexible client styling gateways—while writing clean, maintainable, production-ready code.
              </p>
            </div>
            
            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 space-y-1.5 hover:border-zinc-800/85 hover:bg-zinc-950/80 transition-all duration-300">
                <span className="text-xs font-bold text-white block">SaaS Engineering</span>
                <p className="text-xs text-zinc-500 leading-normal">
                  Expertise in building scalable workflow builders, layout systems, and secure subdomain routing.
                </p>
              </div>
              <div className="p-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 space-y-1.5 hover:border-zinc-800/85 hover:bg-zinc-950/80 transition-all duration-300">
                <span className="text-xs font-bold text-white block">Performance-First UI</span>
                <p className="text-xs text-zinc-500 leading-normal">
                  Focused on memoization, rendering isolation, strict type safety, and achieving optimal page speeds.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Summary Details (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="rounded-3xl border border-zinc-900 bg-zinc-950/70 p-6 backdrop-blur-sm shadow-xl space-y-6 relative overflow-hidden group">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl rounded-full pointer-events-none group-hover:from-indigo-500/20 transition-all duration-500" />
              
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-900">
                <div className="relative size-12 rounded-xl overflow-hidden border border-indigo-500/30 bg-zinc-900">
                  <Image
                    src="/icons/sankar.png"
                    alt="Sankarapandian"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">Sankarapandian R</h3>
                  <span className="text-[10px] font-mono text-zinc-500">Frontend Engineer &bull; Coimbatore</span>
                </div>
              </div>

              {/* Grid of Key Facts */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-zinc-900/60">
                  <span className="text-zinc-500">Experience</span>
                  <span className="text-zinc-300 font-semibold">3.2+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-900/60">
                  <span className="text-zinc-500">Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Immediate Joiner
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-900/60">
                  <span className="text-zinc-500">Notice Period</span>
                  <span className="text-zinc-300 font-semibold">Immediate</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-900/60">
                  <span className="text-zinc-500">Preferred Location</span>
                  <span className="text-zinc-300 font-semibold">Hybrid / Remote</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-500">Code Quality</span>
                  <span className="text-indigo-400 font-semibold">Strict TS, Zero Errors</span>
                </div>
              </div>

              {/* Mini CTA */}
              <Link href="#contact">
                <Button className="w-full h-10 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-[11px] font-semibold flex items-center justify-center gap-1.5 rounded-xl cursor-pointer shadow-lg shadow-indigo-600/10">
                  Request Full Resume
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Case Studies / Projects Section */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 md:px-8 py-20 space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center sm:text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/5 border border-indigo-500/10 rounded-full px-3 py-1">
            Featured Projects
          </span>
          <h2 className="text-3xl mt-3 sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Case Studies
          </h2>
          <p className="text-zinc-400 font-mono text-sm max-w-xl">
            Selected product engineering work focusing on performance,
            white-label UI architectures, and complex dynamic state management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((proj, idx) => (
            <Dialog key={proj.slug}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-zinc-900 bg-zinc-950/60 p-6 flex flex-col justify-between h-full hover:border-zinc-800 hover:bg-zinc-950/90 transition-all duration-300 text-left cursor-pointer group shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        {proj.role}
                      </span>
                      <ArrowRight className="size-4 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug group-hover:text-indigo-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-6 border-t border-zinc-900 mt-6">
                    {proj.tech.map((t) => {
                      const iconPath = TECH_ICON_MAP[t];
                      return (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-900 bg-zinc-950 px-2.5 py-0.5 text-[10px] font-mono text-zinc-400"
                        >
                          {iconPath && (
                            <Image
                              src={iconPath}
                              alt=""
                              width={12}
                              height={12}
                              className="object-contain shrink-0 rounded-[2px]"
                            />
                          )}
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              </DialogTrigger>

              {/* Case Study Details Modal */}
              <DialogContent className="sm:max-w-2xl bg-zinc-950 border border-zinc-900 text-white rounded-3xl p-6 sm:p-8 outline-none">
                <DialogHeader className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider font-bold">
                      {proj.role}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl font-extrabold font-heading text-white tracking-tight">
                    {proj.title}
                  </DialogTitle>
                  <DialogDescription className="text-zinc-400 text-sm font-mono leading-relaxed pt-1 border-b border-zinc-900 pb-4">
                    {proj.desc}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-5 py-4 text-left font-mono">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                    Key Implementations & Milestones
                  </h4>
                  <ul className="space-y-3">
                    {proj.specs.map((spec, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="size-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900">
                  <span className="text-[11px] text-zinc-500 font-bold uppercase mr-1 mt-1">
                    Tech Stack:
                  </span>
                  {proj.tech.map((t) => {
                    const iconPath = TECH_ICON_MAP[t];
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-900 bg-zinc-900/40 px-2.5 py-1 text-xs font-semibold text-zinc-300"
                      >
                        {iconPath && (
                          <Image
                            src={iconPath}
                            alt=""
                            width={14}
                            height={14}
                            className="object-contain shrink-0 rounded-[2px]"
                          />
                        )}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* Tech Stack Matrix Section */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 md:px-8 py-20 space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center sm:text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest  text-indigo-400 font-bold bg-indigo-500/5 border border-indigo-500/10 rounded-full px-3 py-1">
            Production Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 font-heading text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="text-zinc-400 font-mono text-sm max-w-xl">
            My primary toolbox for developing premium, high-speed user
            interfaces. Filter by categories to explore usage experience logs.
          </p>
        </motion.div>

        <TechMatrix />
      </section>

      {/* Professional Timeline Experience */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 md:px-8 py-20 space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center sm:text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/5 border border-indigo-500/10 rounded-full px-3 py-1">
            Work History
          </span>
          <h2 className="text-3xl mt-3 sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Professional Journey
          </h2>
          <p className="text-zinc-400 font-mono text-sm max-w-xl">
            Chronological engineering milestones and measurable business
            outcomes from my career.
          </p>
        </motion.div>

        <TimelineExperience />
      </section>

      {/* Engineering Philosophy Section */}
      <section
        id="philosophy"
        className="max-w-7xl mx-auto px-6 md:px-8 py-20 space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center sm:text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/5 border border-indigo-500/10 rounded-full px-3 py-1">
            Quality Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            How I Write Code
          </h2>
          <p className="text-zinc-400 font-mono text-sm max-w-xl">
            Strict mental models, file layout choices, and code health paradigms
            to keep repositories sustainable.
          </p>
        </motion.div>

        <DevelopmentPhilosophy />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 py-24 text-center space-y-8 relative"
      >
        <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 relative z-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/5 border border-indigo-500/10 rounded-full px-3.5 py-1">
            Available For Opportunities
          </span>
          <h2 className="text-4xl sm:text-6xl mt-3 font-extrabold font-heading text-white tracking-tight leading-tight">
            Let's build next-gen platforms together
          </h2>
          <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-md mx-auto leading-relaxed pt-2">
            Have a project in mind, a full-time role, or just want to chat
            engineering practices? Connect, or copy my direct email.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 relative z-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={copyEmail}
              variant="outline"
              className="h-12 px-6 border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:text-white flex items-center justify-center gap-2 rounded-xl text-sm font-semibold cursor-pointer shadow-lg w-52 sm:w-auto"
            >
              {copied ? (
                <Check className="size-4 text-emerald-400" />
              ) : (
                <Copy className="size-4" />
              )}
              {copied ? "Copied Email Address" : "Copy Email"}
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://linkedin.com/in/sankar-r-8b251b37a"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2 rounded-xl text-sm font-semibold cursor-pointer shadow-lg shadow-indigo-600/20 w-52 sm:w-auto">
                Connect on LinkedIn
                <ExternalLink className="size-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900/60 bg-black/40 py-12 text-center text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold text-zinc-400">
              SANKARAPANDIAN R &bull; FRONTEND ENGINEER
            </span>
          </div>
          <div className="flex gap-6 text-zinc-400">
            <a
              href="https://linkedin.com/in/sankar-r-8b251b37a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <span>Madurai, TN, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
