import { fuelPlan, logistics } from '../data/content.js'

export default function Logistics() {
  return (
    <section className="section light" id="logistics">
      <div className="wrap">
        <div className="kicker">Fuel, comms, weather</div>
        <h2 className="title">Outback <em>discipline</em></h2>
        <p className="lede">
          The whole trip runs on two rules: fill at every opportunity, and download the maps before Balranald.
          Everything else is detail.
        </p>
        <div className="fuel-scroll">
          <table className="fuel">
            <thead>
              <tr><th>Leg</th><th>Fill at</th><th>Note</th></tr>
            </thead>
            <tbody>
              {fuelPlan.map((f) => (
                <tr key={f.leg}>
                  <td>{f.leg}</td>
                  <td className="fill">{f.fill}</td>
                  <td>{f.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="log-grid">
          {logistics.map((l) => (
            <div className="log-card" key={l.title}>
              <div className="icon">{l.icon}</div>
              <h3>{l.title}</h3>
              <ul>{l.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
