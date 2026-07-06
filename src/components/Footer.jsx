import credits from '../data/imageCredits.json'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-mark">See you on the <em>plains</em></div>
        <div className="foot-stars">✦ ✧ ✦ ✧ ✦</div>
        <div className="foot-links">
          <a href="#itinerary">Itinerary</a>
          <a href="#map">Map</a>
          <a href="#vote">The Vote</a>
          <a href="https://mundimundibash.com.au" target="_blank" rel="noreferrer">Bash official ↗</a>
          <a href="https://www.nationalparks.nsw.gov.au/visit-a-park/parks/mungo-national-park" target="_blank" rel="noreferrer">Mungo NP ↗</a>
        </div>
        <p className="foot-note">
          Mundi Mundi Bash 2026 · The Outback Lads' Trip · 18–27 August 2026.
          Built from the trip vault; if the itinerary and the group chat disagree, the group chat is wrong.
        </p>
        <details className="credits">
          <summary>Photo credits (Wikimedia Commons)</summary>
          <ul>
            {Object.entries(credits).map(([key, c]) => (
              <li key={key}>
                <a href={c.source} target="_blank" rel="noreferrer">{key}</a>: {c.artist || 'Unknown'} · {c.license}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  )
}
