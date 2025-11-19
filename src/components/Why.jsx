import React from 'react'
import { Lightbulb, Clock, TrendingUp } from 'lucide-react'

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
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Why Softsite AI?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Navigating government grants can be complex, time-consuming, and confusing. Softsite AI simplifies the entire process, acting as your 24/7 personal consultant.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {bullets.map((b, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-sm backdrop-blur">
              <b.icon className="h-6 w-6 text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
