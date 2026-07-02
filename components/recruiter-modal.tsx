"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  FileText,
  User,
  Cpu,
  Clock,
  Send,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RecruiterModalProps {
  children: React.ReactNode;
}

export function RecruiterModal({ children }: RecruiterModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sankarvj18@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+919360562624");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-lg! w-[92%] max-h-[90vh] overflow-y-auto bg-zinc-950/95 border border-zinc-800/80 text-white rounded-3xl p-5 sm:p-7 outline-none shadow-2xl backdrop-blur-xl glow-indigo scrollbar-thin">
        {/* Glow Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl rounded-full pointer-events-none" />

        <DialogHeader className="space-y-2 text-left relative z-10">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2.5 py-0.5">
              <Sparkles className="size-2.5 animate-pulse" />
              Recruiter Mode
            </span>
          </div>

          {/* Avatar and Info Row */}
          <div className="flex items-center gap-3.5 pt-1.5 pb-2.5 border-b border-zinc-900/80">
            <div className="relative size-12 rounded-2xl overflow-hidden border border-indigo-500/20 bg-zinc-900 shrink-0">
              <img
                src="/icons/sankar.png"
                alt="Sankarapandian"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <DialogTitle className="text-lg sm:text-xl font-extrabold font-heading text-white tracking-tight leading-none">
                Sankarapandian R
              </DialogTitle>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Frontend Engineer &bull; 3.2+ Years SaaS Experience
              </p>
            </div>
          </div>

          <DialogDescription className="text-zinc-400 text-[11px] font-mono leading-relaxed pt-1.5">
            Designed for hiring managers looking for rapid vetting. Here are key
            metrics, direct files, and contact pipeline links.
          </DialogDescription>
        </DialogHeader>

        {/* Quick Facts Matrix Grid */}
        <div className="grid grid-cols-2 gap-3 py-3 font-mono text-[11px] relative z-10">
          {/* Notice Period */}
          <div className="p-3 border border-zinc-900 bg-zinc-950/40 rounded-2xl flex flex-col justify-between gap-1">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1">
              <Clock className="size-3 text-indigo-400" /> Notice Period
            </span>
            <span className="text-emerald-400 font-extrabold text-xs mt-1">
              Immediate / Neg.
            </span>
          </div>

          {/* Location Preferences */}
          <div className="p-3 border border-zinc-900 bg-zinc-950/40 rounded-2xl flex flex-col justify-between gap-1">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1">
              <MapPin className="size-3 text-indigo-400" /> Location
            </span>
            <span
              className="text-zinc-200 font-bold text-[11px] mt-1 truncate"
              title="Remote/Hybrid/Relocate"
            >
              Remote / Madurai
            </span>
          </div>

          {/* Primary Capabilities */}
          <div className="p-3 border border-zinc-900 bg-zinc-950/40 rounded-2xl flex flex-col justify-between gap-1 col-span-2">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1 border-b border-zinc-900 pb-1.5 mb-1">
              <Cpu className="size-3 text-indigo-400" /> Core Strengths
            </span>
            <div className="flex flex-wrap gap-1 mt-0.5">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Zustand",
                "SaaS Systems",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-900/60 text-zinc-300 border border-zinc-800/40 px-2 py-0.5 rounded-lg text-[9px] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Direct Contact Actions */}
        <div className="space-y-2 border border-zinc-900 bg-zinc-950/20 p-3 rounded-2xl font-mono text-[11px] relative z-10">
          <h4 className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 pb-0.5 pl-1">
            Direct Pipeline
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Email Contact */}
            <div className="flex items-center justify-between p-2 rounded-xl border border-zinc-900 bg-zinc-950/80 hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2 min-w-0">
                <Mail className="size-3.5 text-indigo-400 shrink-0" />
                <span className="truncate text-zinc-300 select-all">
                  sankarvj18@gmail.com
                </span>
              </div>
              <button
                onClick={copyEmail}
                className="p-1 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy email"
              >
                {copiedEmail ? (
                  <Check className="size-3 text-emerald-400" />
                ) : (
                  <Copy className="size-3" />
                )}
              </button>
            </div>

            {/* Phone Contact */}
            <div className="flex items-center justify-between p-2 rounded-xl border border-zinc-900 bg-zinc-950/80 hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2 min-w-0">
                <Phone className="size-3.5 text-indigo-400 shrink-0" />
                <span className="truncate text-zinc-300 select-all">
                  +91 93605 62624
                </span>
              </div>
              <button
                onClick={copyPhone}
                className="p-1 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy phone"
              >
                {copiedPhone ? (
                  <Check className="size-3 text-emerald-400" />
                ) : (
                  <Copy className="size-3" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Action Footers */}
        <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-zinc-900 relative z-10 mt-2">
          <Link href="/resume" className="flex-1">
            <Button className="w-full h-10 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center gap-2 rounded-xl text-[11px] font-semibold font-mono transition-all duration-300 cursor-pointer">
              <FileText className="size-3.5" />
              Full Resume Detail
              <ExternalLink className="size-3" />
            </Button>
          </Link>

          <Button
            onClick={() => window.print()}
            className="flex-1 h-10 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2 rounded-xl text-[11px] font-semibold font-mono shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-300 cursor-pointer"
          >
            <Download className="size-3.5" />
            Download PDF Profile
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
