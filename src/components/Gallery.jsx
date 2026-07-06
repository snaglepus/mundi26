import { gallery } from '../data/content.js'
import { useLightbox } from './Lightbox.jsx'

export default function Gallery() {
  const openLightbox = useLightbox()
  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <div className="kicker">What we’re driving into</div>
        <h2 className="title">The <em>country</em></h2>
        <p className="lede">The landscapes, pubs and oddities on the route. All real, all on (or arguing to be on) the itinerary. Tap any photo to view it full-screen.</p>
        <div className="gal">
          {gallery.map((g, i) => (
            <figure key={g.src} onClick={() => openLightbox(gallery, i)}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
