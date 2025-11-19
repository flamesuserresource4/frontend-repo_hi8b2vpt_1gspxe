import React from 'react'
import Hero from './components/Hero'
import Why from './components/Why'
import Features from './components/Features'
import CTA from './components/CTA'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 animate-floaty" />
            <span className="text-sm font-semibold tracking-wide">Softsite AI</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#why" className="hover:text-white">Why</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10 sm:inline-block">Log in</a>
            <a href="#get-started" className="btn-shine rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 hover:opacity-90">Get started</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Why />
        <Features />

        {/* How it works */}
        <section id="how-it-works" className="relative w-full bg-slate-950 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl font-bold text-white sm:text-4xl">How It Works</motion.h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-4">
              {["Check Eligibility","Consult the AI","Plan Your Budget","Optimize & Grow"].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="ring-gradient rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/80">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">{i+1}</div>
                  <p className="text-sm">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />

        {/* Footer */}
        <footer className="border-t border-white/10 bg-slate-950 py-10">
          <div className="mx-auto max-w-6xl px-6 text-center text-xs text-white/50">
            <p>© {new Date().getFullYear()} Softsite AI. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
