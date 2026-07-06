import { moonNights, starKit } from '../data/content.js'

const FIELD = Array.from({ length: 90 }, (_, i) => ({
  left: `${(i * 41.3) % 100}%`,
  top: `${(i * 67.7) % 100}%`,
  delay: `${(i * 0.53) % 4}s`,
  size: i % 9 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
}))

export default function Stars() {
  return (
    <section className="section stars-sec" id="stars">
      <div className="stars-field" aria-hidden="true">
        {FIELD.map((s, i) => (
          <i key={i} style={{ left: s.left, top: s.top, animationDelay: s.delay, width: s.size, height: s.size }} />
        ))}
      </div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="kicker">Verified: new moon 12 Aug, full ~27 Aug</div>
        <h2 className="title">The dark-sky <em>runbook</em></h2>
        <p className="lede">
          No artificial light for 100 km in most directions. The moon sets earlier than the crew does,
          which means Milky Way core, both Magellanic Clouds and the Coalsack, night after night.
        </p>
        <div className="night-grid">
          {moonNights.map((n) => (
            <div className={`night-card ${n.prime ? 'prime' : ''}`} key={n.date}>
              <div className="phase">{n.phase}</div>
              <div className="d">{n.date}</div>
              <h4>{n.loc}</h4>
              <p>{n.moon}</p>
              <p>{n.quality}</p>
              {n.prime && <span className="prime-tag">★ The night that matters</span>}
            </div>
          ))}
        </div>
        <div className="star-kit">
          <b>Stargazing kit</b>
          <ul>{starKit.map((k) => <li key={k}>{k}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
