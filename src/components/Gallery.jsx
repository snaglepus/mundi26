import { gallery } from '../data/content.js'

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <div className="kicker">What we’re driving into</div>
        <h2 className="title">The <em>country</em></h2>
        <p className="lede">A preview of the landscapes, pubs and oddities on the route. All real, all on the itinerary.</p>
        <div className="gal">
          {gallery.map((g) => (
            <figure key={g.src}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
