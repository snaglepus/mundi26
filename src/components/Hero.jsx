import { useEffect, useMemo, useState } from 'react'
import { meta, imageFor } from '../data/content.js'

function useCountdown(targetISO) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO])
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const diff = Math.max(0, target - now)
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    mins: Math.floor(diff / 60000) % 60,
    secs: Math.floor(diff / 1000) % 60,
    gone: diff === 0,
  }
}

// deterministic pseudo-random star positions
const STARS = Array.from({ length: 70 }, (_, i) => ({
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 53.3) % 100}%`,
  delay: `${(i * 0.41) % 3.4}s`,
  size: i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
}))

export default function Hero() {
  const cd = useCountdown(meta.departISO)
  return (
    <header className="hero" id="top">
      <div className="hero-bg" style={{ backgroundImage: `url(${imageFor('hero-mundi-mundi.jpg')})` }} />
      <div className="hero-tint" />
      <div className="hero-stars" aria-hidden="true">
        {STARS.map((s, i) => (
          <i key={i} style={{ left: s.left, top: s.top, animationDelay: s.delay, width: s.size, height: s.size }} />
        ))}
      </div>
      <div className="hero-inner">
        <div className="hero-kicker">18 – 27 August 2026 · Outback NSW + SA</div>
        <h1>Mundi Mundi <em>Bash</em> 2026</h1>
        <div className="hero-kicker" style={{ letterSpacing: '0.3em' }}>{meta.subtitle}</div>
        <p className="hero-sub">{meta.tagline}</p>
        <div className="hero-stats">
          {meta.stats.map((s) => (
            <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>
        <div className="hero-countdown">
          <div className="cd-label">{cd.gone ? 'The convoy has rolled' : 'Wheels roll in'}</div>
          {!cd.gone && (
            <div className="cd-units">
              <div className="cd-unit"><b>{cd.days}</b><span>days</span></div>
              <div className="cd-unit"><b>{String(cd.hours).padStart(2, '0')}</b><span>hrs</span></div>
              <div className="cd-unit"><b>{String(cd.mins).padStart(2, '0')}</b><span>min</span></div>
              <div className="cd-unit"><b>{String(cd.secs).padStart(2, '0')}</b><span>sec</span></div>
            </div>
          )}
        </div>
      </div>
      <a className="hero-cue" href="#trip">Scroll ▾</a>
    </header>
  )
}
