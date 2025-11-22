import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'YOUR_API_KEY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'your-project.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'your-project-id',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'your-project.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '000000000000',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:000000000000:web:xxxxxxxxxxxxxx'
}

function App() {
  const [owner, setOwner] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Placeholder: mimic fetching owner details from Firestore
    // Replace this with actual Firebase initialization and Firestore query later
    const timer = setTimeout(() => {
      setOwner({
        name: 'Alex Johnson',
        title: 'Full‑Stack Developer',
        summary: 'I design and build delightful web and mobile experiences with React, React Native, and cloud.',
        email: 'alex@example.com',
        location: 'Remote • Worldwide',
        socials: [
          { label: 'GitHub', href: 'https://github.com/' },
          { label: 'LinkedIn', href: 'https://linkedin.com/' },
          { label: 'Twitter/X', href: 'https://x.com/' }
        ]
      })
      setLoading(false)
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-white">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-sm uppercase tracking-[0.2em] text-blue-200/80">Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-blue-200/80">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.15),transparent_60%)]" />
      </div>

      <section className="relative z-10 min-h-[92vh] grid lg:grid-cols-2 items-center">
        <div className="relative h-[60vh] lg:h-[92vh] order-2 lg:order-1">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="order-1 lg:order-2 p-6 md:p-10 lg:p-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Available for freelance
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            {owner?.name || 'Loading...'}
          </h1>
          <p className="mt-2 text-cyan-300/90 font-medium">{owner?.title || '—'}</p>
          <p className="mt-6 text-blue-200/80 max-w-xl leading-relaxed">
            {owner?.summary || 'Fetching profile...'}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {owner?.socials?.map((s, i) => (
              <a key={i} href={s.href} target="_blank" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-blue-100 transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 px-6 md:px-10 lg:px-16 py-16 border-t border-white/10 bg-white/5">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <div className="h-44 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-400/30" />
              <h3 className="mt-4 font-semibold">Project {i}</h3>
              <p className="text-blue-200/80 text-sm">Short description about this work and what impact it had.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 px-6 md:px-10 lg:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-4 max-w-3xl text-blue-200/80 leading-relaxed">
          I craft interactive experiences and performant systems. This section can be powered by your Firestore content later — bio, skills, stacks and timelines.
        </p>
      </section>

      <section id="contact" className="relative z-10 px-6 md:px-10 lg:px-16 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-blue-200/80">Email: {owner?.email || '—'}</p>
          <p className="text-blue-200/80">Location: {owner?.location || '—'}</p>
        </div>
      </section>

      <footer className="relative z-10 px-6 md:px-10 lg:px-16 py-10 text-sm text-blue-300/60">
        © {new Date().getFullYear()} — Built with love and caffeine.
      </footer>

      {error && (
        <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-red-500/90 text-white px-4 py-2 shadow-lg">
          {error}
        </div>
      )}
    </div>
  )
}

export default App
