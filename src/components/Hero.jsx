import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
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
          Alex Johnson
        </h1>
        <p className="mt-2 text-cyan-300/90 font-medium">Full‑Stack Developer</p>
        <p className="mt-6 text-blue-200/80 max-w-xl leading-relaxed">
          I build interactive, performant apps for web and mobile with React, React Native and cloud services.
        </p>
      </div>
    </section>
  )
}
