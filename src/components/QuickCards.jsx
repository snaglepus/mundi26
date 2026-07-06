import { quickCards } from '../data/content.js'

export default function QuickCards() {
  return (
    <section className="section" id="trip">
      <div className="wrap">
        <div className="kicker">The shape of it</div>
        <h2 className="title">One trip, <em>four</em> chapters</h2>
        <p className="lede">Sydney to the opal capital of the world and back, wrapped around three days of music on a plain with a 360° horizon.</p>
        <div className="qgrid">
          {quickCards.map((c) => (
            <a className="qcard" key={c.num} href={c.href}>
              <span className="qnum">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
