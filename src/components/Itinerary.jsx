import { days } from '../data/content.js'

export default function Itinerary() {
  return (
    <section className="section light" id="itinerary">
      <div className="wrap">
        <div className="kicker">Day by day</div>
        <h2 className="title">The <em>spine</em> of the trip</h2>
        <p className="lede">
          The fixed points are locked: Mungo on the 19th, the festival 20–22, Woomera the 23rd, Coober Pedy the 24th, home by Thursday evening.
          Everything else is an argument waiting to happen.
        </p>
        <div className="day-chips">
          {days.map((d) => <a key={d.id} href={`#${d.id}`}>{d.day}</a>)}
          <a href="#vote">Days 7–9 · The Vote</a>
        </div>

        {days.map((d, i) => (
          <article className={`day-block ${i % 2 ? 'flip' : ''}`} id={d.id} key={d.id}>
            <figure className="day-media">
              <img src={d.image} alt={d.imageCaption} loading="lazy" />
              <figcaption>{d.imageCaption}</figcaption>
            </figure>
            <div className="day-body">
              <div className="day-meta">
                <span className="day-tag">{d.day}</span>
                <span className="day-date">{d.date}</span>
                <span className="day-km">{d.km}</span>
              </div>
              <h3>{d.title}</h3>
              <div className="day-route">{d.route}</div>
              <p className="day-summary">{d.summary}</p>
              <ul className="stops">
                {d.stops.map((s) => (
                  <li key={s.name}>
                    <span className="t">{s.time}</span>
                    <span><b>{s.name}</b><p>{s.desc}</p></span>
                  </li>
                ))}
              </ul>
              {d.options && (
                <div className="opt-table">
                  <h4>{d.options.title}</h4>
                  {d.options.rows.map((o) => (
                    <div className="opt-row" key={o.name}>
                      <span className="name">{o.name}{o.preferred && <span className="pref-tag">Preferred</span>}</span>
                      <p>{o.detail}</p>
                    </div>
                  ))}
                </div>
              )}
              {d.notes && <ul className="day-notes">{d.notes.map((n, j) => <li key={j}>{n}</li>)}</ul>}
              {d.links && (
                <div className="day-links">
                  {d.links.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
