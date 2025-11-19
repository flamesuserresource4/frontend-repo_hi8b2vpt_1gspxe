import React from 'react'
import { Bot, CheckCircle2, Wallet, Gauge, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, items, tint }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
    <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl opacity-20 ${tint}`} />
    <div className="flex items-center gap-3">
      <Icon className={`h-6 w-6 ${tint?.includes('indigo') ? 'text-indigo-400' : tint?.includes('emerald') ? 'text-emerald-400' : tint?.includes('amber') ? 'text-amber-400' : 'text-fuchsia-400'}`} />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="mt-3 space-y-2 list-disc pl-6 text-sm text-white/75">
      {items.map((it, idx) => (<li key={idx}>{it}</li>))}
    </ul>
  </motion.div>
)

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl font-bold text-white sm:text-4xl">Key Features</motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <FeatureCard icon={Bot} title="1. Intelligent Consultation Bot" tint="from-indigo-500/30 bg-gradient-to-br" items={["Ask Anything: Eligibility, scoring, regulations specifics","24/7 Availability","Context-Aware conversations"]} />
          <FeatureCard icon={CheckCircle2} title="2. Instant Eligibility Checker" tint="from-emerald-500/30 bg-gradient-to-br" items={["Score Calculation with clear breakdown","Gap Analysis with guidance","Secure Storage of results"]} />
          <FeatureCard icon={Wallet} title="3. Smart Budget Planner" tint="from-amber-500/30 bg-gradient-to-br" items={["Grant-Compliant with mandatory digitalization","Green Energy Focus recommendations","Industry Specific equipment suggestions"]} />
          <FeatureCard icon={Gauge} title="4. Business Optimization Suite" tint="from-fuchsia-500/30 bg-gradient-to-br" items={["SEO Analysis with actionable keywords","Speed Test style insights for performance","Recommendations to improve user experience"]} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white/90">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl" />
            <h4 className="mb-2 font-semibold text-white">How It Works</h4>
            <ol className="list-decimal space-y-2 pl-6 text-sm text-white/75">
              <li>Check Eligibility</li>
              <li>Consult the AI</li>
              <li>Plan Your Budget</li>
              <li>Optimize & Grow</li>
            </ol>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white/90">
            <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-emerald-500/20 blur-2xl" />
            <h4 className="mb-2 font-semibold text-white">Trust & Security</h4>
            <ul className="list-disc space-y-2 pl-6 text-sm text-white/75">
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-400"/>Privacy-first by design</li>
              <li>Encrypted at rest and in transit</li>
              <li>Enterprise-ready infrastructure</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
