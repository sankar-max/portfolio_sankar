"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Cpu,
  Sparkles,
  Terminal,
  Code,
  Check,
} from "lucide-react";
import { Button } from "./ui/button";

export function InteractiveHero() {
  const [clickCount, setClickCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const codeString = `const developer = {
  name: "Sankarapandian R",
  role: "Frontend Engineer",
  skills: ["React", "Next.js", "TS", "CSS"],
  performance: "High-Fidelity",
  experience: "3.2+ Years"
};`;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center py-16 overflow-hidden">
      {/* Background glow animations */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Header text and CTA buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-8 text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-xs font-mono text-indigo-300"
          >
            <ShieldCheck className="size-3.5 text-indigo-400 animate-pulse" />
            <span>Available for Full-Time Roles | Immediate Joiner</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1]"
            >
              Sankarapandian R
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 mt-2 font-heading">
                Frontend Engineer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-400 max-w-xl font-mono leading-relaxed"
            >
              Crafting premium user interfaces, smooth micro-interactions, and
              robust frontend architectures using React, Next.js, and
              TypeScript.
            </motion.p>
          </div>

          {/* Interactive CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2 group px-6 h-12 rounded-xl text-sm font-semibold cursor-pointer shadow-lg shadow-indigo-600/20"
              >
                View My Projects
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="border-zinc-800 text-zinc-300 hover:text-white px-6 h-12 rounded-xl text-sm font-semibold cursor-pointer"
              >
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column: High-fidelity Animated Simulated Mockup Stack */}
        <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
          {/* Base Code Editor Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.3,
            }}
            className="w-[90%] aspect-[4/3] rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-5 shadow-2xl absolute top-6 left-2 overflow-hidden premium-glass"
          >
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-rose-500/80" />
                <span className="size-2.5 rounded-full bg-amber-500/80" />
                <span className="size-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                <Terminal className="size-3 text-indigo-400" />
                profile.config.ts
              </span>
            </div>

            <pre className="text-left font-mono text-[10px] sm:text-xs text-indigo-300 leading-relaxed overflow-x-auto whitespace-pre">
              <code className="text-zinc-400">
                {codeString.split("\n").map((line, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="text-zinc-700 select-none w-4 inline-block text-right">
                      {idx + 1}
                    </span>
                    <span
                      className={
                        line.includes("Sankarapandian")
                          ? "text-indigo-400 font-semibold"
                          : ""
                      }
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </motion.div>

          {/* Floating UI Sandbox Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95, rotate: 3 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: 3,
            }}
            transition={{
              opacity: { delay: 0.5, duration: 0.5 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              rotate: { delay: 0.5 },
            }}
            className="w-[85%] rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 shadow-2xl absolute bottom-6 right-2 backdrop-blur-md premium-glass hover:border-indigo-500/40 transition-colors duration-300"
          >
            <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2.5 mb-3.5">
              <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                <Code className="size-3 text-indigo-400" />
                Interactive Component
              </span>
              <span className="text-[9px] font-mono rounded bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 font-semibold">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>Spring Physics Tester</span>
                  <span className="text-zinc-400">clicks: {clickCount}</span>
                </div>

                {/* Clicking updates states and runs animation */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setClickCount((prev) => prev + 1)}
                  className="w-full h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/10 transition-colors"
                >
                  <Sparkles className="size-3.5 animate-spin" />
                  Trigger Ripple Effects
                </motion.button>
              </div>

              {/* Ripple animation feedback dots */}
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale:
                        clickCount > 0 && clickCount % 5 === i
                          ? [1, 1.8, 1]
                          : 1,
                      backgroundColor:
                        clickCount > 0 && clickCount % 5 === i
                          ? "#6366f1"
                          : "#27272a",
                    }}
                    transition={{ duration: 0.4 }}
                    className="size-2 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Little Floating Speed Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              y: [0, 8, 0],
            }}
            transition={{
              opacity: { delay: 0.7, duration: 0.4 },
              x: { delay: 0.7, type: "spring" },
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
            className="absolute top-2 right-4 rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2 flex items-center gap-2 shadow-xl z-20"
          >
            <div className="size-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-mono text-zinc-300">
              Score: <strong className="text-emerald-400">100%</strong>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
