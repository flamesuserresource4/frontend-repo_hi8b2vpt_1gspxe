import React from 'react'
import { Bot, CheckCircle2, Wallet, Gauge, MessageSquare, Shield } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Key Features</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6 text-indigo-400" />
              <h3 className="text-lg font-semibold text-white">1. Intelligent Consultation Bot</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc pl-6">
              <li>Ask Anything: Eligibility, scoring, regulations specifics</li>
              <li>24/7 Availability</li>
              <li>Context-Aware conversations</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-semibold text-white">2. Instant Eligibility Checker</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc pl-6">
              <li>Score Calculation with clear breakdown</li>
              <li>Gap Analysis with guidance</li>
              <li>Secure Storage of results</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
            <div className="flex items-center gap-3">
              <Wallet className="h-6 w-6 text-amber-400" />
              <h3 className="text-lg font-semibold text-white">3. Smart Budget Planner</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc pl-6">
              <li>Grant-Compliant with mandatory digitalization</li>
              <li>Green Energy Focus recommendations</li>
              <li>Industry Specific equipment suggestions</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
            <div className="flex items-center gap-3">
              <Gauge className="h-6 w-6 text-fuchsia-400" />
              <h3 className="text-lg font-semibold text-white">4. Business Optimization Suite</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc pl-6">
              <li>SEO Analysis with actionable keywords</li>
              <li>Speed Test style insights for performance</li>
              <li>Recommendations to improve user experience</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white/90">
            <h4 className="text-white font-semibold mb-2">How It Works</h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-white/75">
              <li>Check Eligibility</li>
              <li>Consult the AI</li>
              <li>Plan Your Budget</li>
              <li>Optimize & Grow</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white/90">
            <h4 className="text-white font-semibold mb-2">Trust & Security</h4>
            <ul className="list-disc pl-6 space-y-2 text-sm text-white/75">
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-400"/>Privacy-first by design</li>
              <li>Encrypted at rest and in transit</li>
              <li>Enterprise-ready infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
