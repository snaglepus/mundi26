import { festival } from '../data/content.js'

export default function Festival() {
  return (
    <section className="section fest" id="festival">
      <div className="wrap">
        <div className="fest-head">
          <div className="kicker">Thu 20 – Sat 22 August · Belmont Station</div>
          <h2 className="title">The <em>Bash</em></h2>
          <p className="lede">
            Three days and nights of music on the Mundi Mundi Plains, 35 km north of Broken Hill,
            with a horizon in every direction and the Milky Way over the main stage.
          </p>
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
    </section>
  )
}
