import React from 'react'
import { Lightbulb, Clock, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const bullets = [
  {
    icon: Lightbulb,
    title: 'Instant Clarity',
    desc: 'Stop guessing. Know immediately if you qualify.'
  },
  {
    icon: Clock,
    title: 'Strategic Planning',
    desc: 'Maximize your scoring potential with AI-generated budgets.'
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    desc: 'Go beyond the grant with built-in SEO and performance tools.'
  }
]

export default function Why() {
  return (
    <section id="why" className="relative w-full bg-slate-950 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_top,rgba(99,102,241,0.08),transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl font-bold text-white sm:text-4xl">Why Softsite AI?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Navigating government grants can be complex, time-consuming, and confusing. Softsite AI simplifies the entire process, acting as your 24/7 personal consultant.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {bullets.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="ring-gradient rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-sm backdrop-blur">
              <b.icon className="h-6 w-6 text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
