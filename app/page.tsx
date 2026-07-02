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
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { AnimatedCounter } from "@/components/animated-counter";
import { Navbar } from "@/components/navbar";

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

      {/* Stats Dashboard Section (Animated Counters) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-zinc-900 bg-zinc-950/70 p-6 sm:p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {[
            {
              label: "Experience",
              value: 3.2,
              decimals: 1,
              suffix: "+ Years",
              desc: "Building production SaaS apps",
            },
            {
              label: "UI Inputs Built",
              value: 40,
              decimals: 0,
              suffix: "+ Inputs",
              desc: "Reusable custom components",
            },
            {
              label: "Lighthouse Score",
              value: 100,
              decimals: 0,
              suffix: "%",
              desc: "Best practices & optimization",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="space-y-1.5 text-left border-l border-zinc-900 pl-4 sm:pl-6 first:border-l-0"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400/90 font-bold">
                {stat.label}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight flex items-baseline">
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-[11px] font-mono text-zinc-500">{stat.desc}</p>
            </div>
          ))}

          {/* Non-numeric Stat: Code integrity */}
          <div className="space-y-1.5 text-left border-l border-zinc-900 pl-4 sm:pl-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400/90 font-bold">
              Code Quality
            </span>
            <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono tracking-tight pt-1 sm:pt-2 flex items-center gap-1.5">
              <ShieldCheck className="size-5 shrink-0 animate-pulse" />
              TS strict: true
            </div>
            <p className="text-[11px] font-mono text-zinc-500">
              Zero compiler errors
            </p>
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
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-zinc-900 bg-zinc-950 px-2.5 py-0.5 text-[10px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
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
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-zinc-900 bg-zinc-900/40 px-2.5 py-1 text-xs font-semibold text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
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
