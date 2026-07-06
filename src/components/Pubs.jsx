import { useEffect, useState } from 'react'
import { pubs } from '../data/content.js'

export default function Pubs() {
  const [stamps, setStamps] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('mundi-pubs') || '[]')) } catch { return new Set() }
  })
  useEffect(() => {
    localStorage.setItem('mundi-pubs', JSON.stringify([...stamps]))
  }, [stamps])

  const toggle = (name) => setStamps((prev) => {
    const next = new Set(prev)
    next.has(name) ? next.delete(name) : next.add(name)
    return next
  })

  return (
    <section className="section" id="pubs">
      <div className="wrap">
        <div className="kicker">The pub passport</div>
        <h2 className="title">Seventeen <em>pubs</em>, one trip</h2>
        <p className="lede">
          From the oldest licence in Australia to a corrugated-iron shed with a population of 20.
          Tap a card to stamp your passport as the trip unfolds. Your stamps live on this device.
        </p>
        <div className="pub-progress">
          <span className="pub-count">🍺 {stamps.size}/{pubs.length} stamped</span>
          <div className="pub-bar"><i style={{ width: `${(stamps.size / pubs.length) * 100}%` }} /></div>
        </div>
        <div className="pub-grid">
          {pubs.map((p) => (
            <div
              key={p.name}
              className={`pub-card ${stamps.has(p.name) ? 'stamped' : ''}`}
              onClick={() => toggle(p.name)}
              role="checkbox"
              aria-checked={stamps.has(p.name)}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(p.name) } }}
            >
              <span className="pub-stamp">🍺</span>
              <h3>{p.name}</h3>
              <div className="pub-where">{p.town} · {p.day}</div>
              <p>{p.why}</p>
              <div className="pub-links" onClick={(e) => e.stopPropagation()}>
                {p.url && <a href={p.url} target="_blank" rel="noreferrer">Website</a>}
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.name} ${p.town}`)}`} target="_blank" rel="noreferrer">Map</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
