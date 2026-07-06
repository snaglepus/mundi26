import { crew, ticketFlag } from '../data/content.js'

export default function Crew() {
  return (
    <section className="section" id="crew" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="kicker">The convoy</div>
        <h2 className="title">Eight lads, <em>three</em> rigs</h2>
        <p className="lede">UHF channel 18 for the convoy, channel 40 for the road. Last rig in the line buys the first round.</p>
        <div className="flagbox"><b>Ticket flag:</b> {ticketFlag}</div>
        <div className="crew-grid">
          {crew.map((v) => (
            <div className="crew-card" key={v.rig}>
              <div className="icon">{v.icon}</div>
              <h3>{v.rig}</h3>
              <ul>{v.people.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
