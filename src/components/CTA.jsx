import React from 'react'

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-3xl font-bold text-white sm:text-4xl">Ready to Launch?</h3>
        <p className="mt-3 text-white/75">Don't let the opportunity of Start-up Nation 2025 pass you by. Equip yourself with the smartest tools in the industry.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110">Create your account</a>
          <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">Explore features</a>
        </div>
        <p className="mt-4 text-xs text-white/50">No credit card required</p>
      </div>
    </section>
  )
}
