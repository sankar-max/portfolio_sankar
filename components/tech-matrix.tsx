"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  category: "Frontend" | "State Management" | "Backend" | "Database";
  icon: string;
  description: string;
  glowColor: string;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: "React",
    category: "Frontend",
    icon: "/icons/react.png",
    description:
      "Designed 40+ atomic inputs using ref isolation and custom hooks.",
    glowColor: "rgba(56, 189, 248, 0.35)",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "/icons/nextjs.png",
    description:
      "Built parallel routes and middleware headers for SaaS subdomains.",
    glowColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "/icons/typescript.png",
    description:
      "Authored strict conditional schemas to type-check incoming JSON datasets.",
    glowColor: "rgba(37, 99, 235, 0.35)",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "/icons/tailwindcss.png",
    description:
      "Created responsive grid layouts and customized core design system tokens.",
    glowColor: "rgba(6, 182, 212, 0.35)",
  },
  {
    name: "Zustand",
    category: "State Management",
    icon: "/icons/zustand.jpg",
    description:
      "Managed highly localized, reactive canvas states in builder workspace.",
    glowColor: "rgba(234, 179, 8, 0.3)",
  },
  {
    name: "Redux",
    category: "State Management",
    icon: "/icons/redux.png",
    description:
      "Designed scalable, sliced global state managers for multi-step survey engines.",
    glowColor: "rgba(124, 58, 237, 0.35)",
  },
  {
    name: "TanStack Query",
    category: "State Management",
    icon: "/icons/tanstack.png",
    description:
      "Implemented query caching, invalidation, and optimistic updates.",
    glowColor: "rgba(239, 68, 68, 0.35)",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "/icons/nodejs.png",
    description:
      "Configured API services, payload validations, and process clustering.",
    glowColor: "rgba(34, 197, 94, 0.35)",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "/icons/expressjs.png",
    description:
      "Coded REST API routing, CORS handling, and JWT authentication flows.",
    glowColor: "rgba(209, 213, 219, 0.2)",
  },
  {
    name: "Hono.js",
    category: "Backend",
    icon: "/icons/honojs.png",
    description:
      "Architected ultralight serverless route handlers with high throughput.",
    glowColor: "rgba(249, 115, 22, 0.35)",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "/icons/postgresql.png",
    description:
      "Designed schemas, configured pool sizes, and refined nested joins.",
    glowColor: "rgba(59, 130, 246, 0.35)",
  },
];

type FilterType =
  | "All"
  | "Frontend"
  | "State Management"
  | "Backend"
  | "Database";

export function TechMatrix() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredTech = TECH_ITEMS.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });

  return (
    <div className="space-y-10">
      {/* Category selector filter bar */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {(
          [
            "All",
            "Frontend",
            "State Management",
            "Backend",
            "Database",
          ] as FilterType[]
        ).map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200 bg-zinc-950/40 border border-zinc-900"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-indigo-600 rounded-xl -z-10 shadow-lg shadow-indigo-600/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of tech cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredTech.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{
                y: -6,
                boxShadow: `0 15px 30px -10px ${item.glowColor}`,
                borderColor: item.glowColor,
              }}
              key={item.name}
              className="rounded-2xl border border-zinc-900 bg-zinc-950/70 p-5 flex flex-col items-center justify-between text-center transition-all duration-300 relative group overflow-hidden backdrop-blur-sm"
            >
              {/* Radial glow background pattern */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${item.glowColor} 0%, transparent 70%)`,
                }}
              />

              <div className="space-y-4 w-full flex flex-col items-center z-10">
                {/* Tech logo image container */}
                <div className="relative size-14 rounded-xl border border-zinc-800 bg-zinc-900/40 flex items-center justify-center p-2 group-hover:border-indigo-500/30 transition-colors duration-300 shadow-inner overflow-hidden">
                  <Image
                    src={item.icon}
                    alt={`${item.name} logo`}
                    width={44}
                    height={44}
                    className="object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold font-heading text-white tracking-tight">
                    {item.name}
                  </h4>
                  <span
                    className={cn(
                      `inline-block rounded bg-zinc-900/80 px-2 py-0.5  leading-5 tracking-wider text-[10px] font-mono text-zinc-900 shadow-2xl uppercase border border-zinc-800/40`,
                      item.category === "Frontend" && "text-cyan-500 ",
                      item.category === "State Management" && "text-purple-500",
                      item.category === "Backend" && "text-green-500",
                      item.category === "Database" && "text-blue-500",
                    )}
                  >
                    {item.category}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-mono px-1">
                  {item.description}
                </p>
              </div>

              {/* Glowing bottom line indicator */}
              <div
                className="absolute bottom-0 inset-x-6 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: item.glowColor }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
