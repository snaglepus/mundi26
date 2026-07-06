import { useEffect, useState } from 'react'

const LINKS = [
  ['#trip', 'Trip'],
  ['#crew', 'Crew'],
  ['#itinerary', 'Itinerary'],
  ['#festival', 'The Bash'],
  ['#map', 'Map'],
  ['#vote', 'Vote'],
  ['#pubs', 'Pubs'],
  ['#tunes', 'Tunes'],
  ['#stars', 'Stars'],
  ['#packing', 'Kit'],
  ['#bookings', 'Bookings'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="wrap">
        <a className="nav-logo" href="#top">Mundi <b>Mundi</b> ’26</a>
        <div className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
    </nav>
  )
}
