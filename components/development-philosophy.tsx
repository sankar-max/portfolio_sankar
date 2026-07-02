"use client"

import React from "react"
import { Layers, ShieldCheck, HeartHandshake, Eye } from "lucide-react"

interface PhilosophyItem {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  codeRef: string
}

const PHILOSOPHIES: PhilosophyItem[] = [
  {
    icon: <Layers className="size-5 text-indigo-400" />,
    title: "Feature-Based Architecture",
    subtitle: "Locality & Low Coupling",
    description: "I structure directories by feature domain (components, hooks, tests under a single folder) instead of technical layers. This contains impact scopes and makes scaling simple.",
    codeRef: "src/features/survey-builder/*"
  },
  {
    icon: <ShieldCheck className="size-5 text-purple-400" />,
    title: "Type Safety & Contract Design",
    subtitle: "Eliminating Runtime Hazards",
    description: "I write strict TypeScript interfaces. Shared database schemas map directly to API routers (tRPC/Zod), ensuring that database changes instantly flag client compile errors.",
    codeRef: "type InputSchema = z.infer<typeof schema>"
  },
  {
    icon: <HeartHandshake className="size-5 text-cyan-400" />,
    title: "Simplicity Over Cleverness",
    subtitle: "Write Readable Software",
    description: "Clever code is hard to debug. I write self-documenting parameters, avoid deep abstraction nests, and optimize only when telemetry shows clear bottlenecks.",
    codeRef: "const renderField = (field: Field) => ..."
  },
  {
    icon: <Eye className="size-5 text-emerald-400" />,
    title: "Performance & Accessibility First",
    subtitle: "Inclusive User Experiences",
    description: "Every component is lazy-loaded where possible, handles screen readers gracefully (ARIA), and passes Lighthouse contrast standards. Premium doesn't skip details.",
    codeRef: "aria-invalid={!isValid}"
  }
]

export function DevelopmentPhilosophy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PHILOSOPHIES.map((phil) => (
        <div
          key={phil.title}
          className="rounded-xl border border-zinc-800/80 bg-zinc-900/10 p-6 flex flex-col justify-between hover:border-zinc-700/80 hover:bg-zinc-900/20 transition-all duration-200"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5">
                {phil.icon}
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-white">{phil.title}</h4>
                <p className="text-xs font-mono text-zinc-500 mt-0.5">{phil.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">{phil.description}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>Code Pattern Reference:</span>
            <span className="text-indigo-400">{phil.codeRef}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
