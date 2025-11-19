import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-slate-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_bottom,rgba(217,70,239,0.08),transparent)]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-white sm:text-4xl">Ready to Launch?</motion.h3>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-white/75">Don't let the opportunity of Start-up Nation 2025 pass you by. Equip yourself with the smartest tools in the industry.</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="btn-shine inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110">Create your account</a>
          <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">Explore features</a>
        </motion.div>
        <p className="mt-4 text-xs text-white/50">No credit card required</p>
      </div>
    </section>
  )
}
