"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calendar, Briefcase, CheckCircle2 } from "lucide-react"
import { Variants } from "framer-motion"

interface Achievement {
  title: string
  description: string
  impact: string
}

interface ExperienceBlock {
  company: string
  role: string
  duration: string
  location: string
  summary: string
  achievements: Achievement[]
}

const EXPERIENCE_DATA: ExperienceBlock[] = [
  {
    company: "Zettastack Systems Pvt Ltd",
    role: "Frontend Engineer",
    duration: "Feb 2023 — Mar 2026",
    location: "Coimbatore, Tamil Nadu",
    summary: "Led frontend architecture engineering for enterprise-grade SaaS survey builders and dynamic admin systems, specializing in schema-driven UI renderers.",
    achievements: [
      {
        title: "JSON Rendering Engine Optimization",
        description: "Re-engineered core JSON schema compiler using component composition, memoization, and strict rendering isolation.",
        impact: "Reduced form rendering latency by 45% for surveys containing 100+ nested matrix fields."
      },
      {
        title: "Multi-Tenant Layout Isolation",
        description: "Implemented a subdomain tenant-middleware gateway resolving client styling isolation and white-label asset loading.",
        impact: "Provided seamless customized themes dynamically loaded based on headers for 20+ enterprise customers."
      },
      {
        title: "Reusable Component Framework Design",
        description: "Designed and built a library of 40+ atomic and nested inputs (Comparison Matrix, Signatures, drill-down selects).",
        impact: "Accelerated developer feature delivery speed by 60% across team sub-modules."
      },
      {
        title: "Granular RBAC Authorization Context",
        description: "Introduced client-side validation logic that restricts views, navigation items, and API actions based on JWT scopes.",
        impact: "Eliminated client authentication overlap issues and fully synced route access with user permissions."
      }
    ]
  }
]

export function TimelineExperience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <div className="relative border-l border-zinc-900 ml-4 md:ml-8 pl-8 space-y-12 py-2">
      {/* Decorative gradient overlay for the timeline line */}
      <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2" />

      {EXPERIENCE_DATA.map((exp, idx) => (
        <div key={exp.company} className="relative">
          
          {/* Node Icon indicator with pulse effect */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="absolute -left-[45px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500 bg-zinc-950 text-indigo-400 z-10 shadow-lg shadow-indigo-500/10"
          >
            <Briefcase className="size-4" />
          </motion.div>

          <div className="space-y-8">
            {/* Header info - Slide-in reveal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-2xl font-extrabold font-heading text-white tracking-tight">{exp.role}</h3>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 bg-zinc-950 border border-zinc-900 rounded-lg px-2.5 py-1">
                  <Calendar className="size-3.5 text-indigo-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>
              
              <div className="text-sm font-mono text-indigo-400 font-semibold">{exp.company} &bull; {exp.location}</div>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl font-mono mt-4">
                {exp.summary}
              </p>
            </motion.div>

            {/* Achievements List with stagger reveals */}
            <div className="space-y-4">
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-mono uppercase tracking-widest text-zinc-500"
              >
                Key Achievements & Outcomes
              </motion.h4>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {exp.achievements.map((ach) => (
                  <motion.div
                    key={ach.title}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -4, 
                      borderColor: "rgba(99, 102, 241, 0.4)",
                      boxShadow: "0 10px 20px -10px rgba(99, 102, 241, 0.15)" 
                    }}
                    className="rounded-2xl border border-zinc-900 bg-zinc-950/60 p-5 hover:bg-zinc-950 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-between"
                  >
                    <div className="flex gap-3">
                      <CheckCircle2 className="size-5 text-indigo-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <div className="space-y-2">
                        <h5 className="text-sm sm:text-base font-bold text-zinc-200 leading-snug tracking-tight group-hover:text-indigo-300 transition-colors">
                          {ach.title}
                        </h5>
                        <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-[11px] font-mono text-emerald-400/90 pt-3 border-t border-zinc-900/60 mt-4 flex items-center gap-1.5 pl-8">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      <span>Impact: {ach.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
