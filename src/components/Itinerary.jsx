import { days, festival, pubByName, playlistTitle, imageFor } from '../data/content.js'
import DayMap from './DayMap.jsx'
import { useLightbox } from './Lightbox.jsx'

function Stops({ title, items }) {
  return (
    <>
      {title && <div className="stops-title">{title}</div>}
      <ul className="stops">
        {items.map((s) => (
          <li key={s.name}>
            <span className="t">{s.time}</span>
            <span><b>{s.name}</b><p>{s.desc}</p></span>
          </li>
        ))}
      </ul>
    </>
  )
}

function DayPubs({ names }) {
  return (
    <div className="day-pubs">
      <div className="stops-title">🍺 Pubs on today’s route</div>
      <div className="day-pub-chips">
        {names.map((n) => {
          const p = pubByName[n]
          if (!p) return null
          return (
            <span className="day-pub" key={n}>
              <b>{p.name}</b>, {p.town}
              {p.url && <a href={p.url} target="_blank" rel="noreferrer">site</a>}
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.name} ${p.town}`)}`} target="_blank" rel="noreferrer">map</a>
            </span>
          )
        })}
      </div>
    </div>
  )
}

function DayTunes({ keys, bash }) {
  return (
    <div className="day-tunes">
      {keys.map((k) => (
        <a key={k} className="day-tune" href={`#pl-${k}`}>🎧 {playlistTitle[k]}</a>
      ))}
      {bash && <a className="day-tune" href="#bash-tunes">🎪 Official Bash Travel Tunes</a>}
    </div>
  )
}

function MiniGallery({ items, dayTitle }) {
  const openLightbox = useLightbox()
  const images = items.map((g) => ({ src: imageFor(g.key), caption: g.caption }))
  return (
    <div className="mini-gal">
      {images.map((im, i) => (
        <button key={im.src} onClick={() => openLightbox(images, i)} aria-label={`${dayTitle}: ${im.caption}`}>
          <img src={im.src} alt={im.caption} loading="lazy" />
        </button>
      ))}
    </div>
  )
}

function FestivalBlock() {
  return (
    <div className="fest-inline" id="festival">
      <div className="fest-inline-head">
        <span className="day-tag" style={{ background: 'var(--ochre)' }}>The main event</span>
        <p>{festival.dates} · {festival.location}</p>
      </div>
      <div className="headliners">
        {festival.headliners.map((h) => <span key={h}>{h}</span>)}
      </div>
      <div className="lineup-pills">
        {festival.lineup.map((a) => <span key={a}>{a}</span>)}
      </div>
      <div className="fest-facts">
        {festival.facts.map((f) => (
          <div className="fest-fact" key={f.label}><b>{f.label}</b><span>{f.value}</span></div>
        ))}
      </div>
      <div className="fest-cta">
        <a className="btn" href={festival.url} target="_blank" rel="noreferrer">mundimundibash.com.au ↗</a>
      </div>
    </div>
  )
}

export default function Itinerary() {
  return (
    <section className="section light" id="itinerary">
      <div className="wrap">
        <div className="kicker">Day by day</div>
        <h2 className="title">The <em>spine</em> of the trip</h2>
        <p className="lede">
          The fixed points are locked: Mungo on the 19th, the festival 20–22, Woomera the 23rd, Coober Pedy the 24th, home by Thursday evening.
          Each day below carries its own route map, pubs, soundtrack and gallery. Everything else is an argument waiting to happen.
        </p>
        <div className="day-chips">
          {days.map((d) => <a key={d.id} href={`#${d.id}`}>{d.day}</a>)}
          <a href="#vote">Days 7–9 · The Vote</a>
        </div>

        {days.map((d, i) => (
          <article className={`day-block ${i % 2 ? 'flip' : ''} ${d.festival ? 'wide' : ''}`} id={d.id} key={d.id}>
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
              <Stops title={d.stopsTitle} items={d.stops} />
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
              {d.festival && <FestivalBlock />}
              {d.beyond && <Stops title={d.beyondTitle} items={d.beyond} />}
              {d.notes && <ul className="day-notes">{d.notes.map((n, j) => <li key={j}>{n}</li>)}</ul>}
              {d.links && (
                <div className="day-links">
                  {d.links.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
                </div>
              )}
              {d.pubs && <DayPubs names={d.pubs} />}
              {d.playlists && <DayTunes keys={d.playlists} bash={d.bashPlaylists} />}
              {d.routeMap && <DayMap routeMap={d.routeMap} label={d.route} />}
              {d.gallery && (
                <>
                  <div className="stops-title" style={{ marginTop: 18 }}>📸 Daily inspiration (tap to view)</div>
                  <MiniGallery items={d.gallery} dayTitle={d.title} />
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
