import { useMemo, useState } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import mapData from '../data/mapData.json'
import { returnRoutePaths } from '../data/content.js'

const CATS = {
  stay: { label: 'Stays', color: '#e05252', emoji: '🛏' },
  pub: { label: 'Pubs', color: '#e9a83f', emoji: '🍺' },
  fuel: { label: 'Fuel', color: '#4aa3df', emoji: '⛽' },
  poi: { label: 'Sights', color: '#6fbf73', emoji: '📍' },
  star: { label: 'Stargazing', color: '#b58cf2', emoji: '✨' },
}
const FOLDER_CAT = {
  'Overnight Stops (Red)': 'stay',
  'Must-Visit Pubs (Gold)': 'pub',
  'Fuel Stops (Blue)': 'fuel',
  'Attractions & POIs (Green)': 'poi',
  'Stargazing Locations (Purple)': 'star',
}
const ROUTES = [
  { id: 'main', label: 'Main route · Days 0–6', color: '#f2c94c', dash: null },
  { id: 'opt1', label: 'Opt 1 · Murray Classic', color: '#6fbf73', dash: '6 8' },
  { id: 'opt2', label: 'Opt 2 · Murray Heritage', color: '#38b2ac', dash: '6 8' },
  { id: 'opt3', label: 'Opt 3 · Southern Gourmet', color: '#b58cf2', dash: '6 8' },
  { id: 'opt4', label: 'Opt 4 · Outback Express', color: '#e05252', dash: '6 8' },
]

const cleanName = (n) =>
  n.replace(/^(PUB\/REST|PUB|REST|FUEL|ATTRACTION|STARGAZE)\s*(\[[^\]]*\])?\s*-\s*/, '')
   .replace(/\s*\[[^\]]*\]\s*/g, ' ')
   .trim()

export default function TripMap() {
  const [cats, setCats] = useState(new Set(Object.keys(CATS)))
  const [routes, setRoutes] = useState(new Set(['main', 'opt1']))

  const markers = useMemo(
    () => mapData.markers
      .filter((m) => !m.name.includes('[Route B]'))
      .map((m) => ({ ...m, cat: FOLDER_CAT[m.folder], clean: cleanName(m.name) }))
      .filter((m) => m.cat),
    [],
  )
  const mainRoute = useMemo(() => mapData.routes[0].coords, [])
  const bounds = useMemo(() => {
    const lats = markers.map((m) => m.lat); const lons = markers.map((m) => m.lon)
    return [[Math.min(...lats) - 0.4, Math.min(...lons) - 0.6], [Math.max(...lats) + 0.4, Math.max(...lons) + 0.6]]
  }, [markers])

  const icons = useMemo(() => Object.fromEntries(Object.entries(CATS).map(([k, c]) => [k,
    L.divIcon({
      className: '',
      html: `<div class="pin" style="background:${c.color}"><span>${c.emoji}</span></div>`,
      iconSize: [26, 26], iconAnchor: [13, 24], popupAnchor: [0, -22],
    })])), [])

  const toggle = (set, setter) => (id) => {
    const next = new Set(set)
    next.has(id) ? next.delete(id) : next.add(id)
    setter(next)
  }
  const toggleCat = toggle(cats, setCats)
  const toggleRoute = toggle(routes, setRoutes)

  return (
    <section className="section" id="map">
      <div className="wrap">
        <div className="kicker">Every pin that matters</div>
        <h2 className="title">The <em>map</em></h2>
        <p className="lede">
          Every overnight stay, the full pub roll call, fuel discipline, sights and the dark-sky spots: 58 hand-placed pins.
          Tap any pin for the story, then open it straight in Google Maps for navigation.
        </p>
        <div className="map-filters">
          {Object.entries(CATS).map(([k, c]) => (
            <button key={k} className={cats.has(k) ? 'on' : ''} onClick={() => toggleCat(k)}>
              <span className="dot" style={{ background: c.color }} />{c.label}
            </button>
          ))}
        </div>
        <div className="map-shell">
          <MapContainer bounds={bounds} scrollWheelZoom={false} className="map-canvas">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {routes.has('main') && <Polyline positions={mainRoute} pathOptions={{ color: '#f2c94c', weight: 3.5, opacity: 0.9 }} />}
            {ROUTES.slice(1).map((r) => routes.has(r.id) && (
              <Polyline key={r.id} positions={returnRoutePaths[r.id]} pathOptions={{ color: r.color, weight: 3, opacity: 0.85, dashArray: r.dash }} />
            ))}
            {markers.filter((m) => cats.has(m.cat)).map((m) => (
              <Marker key={m.name} position={[m.lat, m.lon]} icon={icons[m.cat]}>
                <Popup>
                  <div className="pop-name">{m.clean}</div>
                  {m.desc && <div className="pop-desc">{m.desc.slice(0, 220)}</div>}
                  <a className="pop-link" href={`https://www.google.com/maps/search/?api=1&query=${m.lat},${m.lon}`} target="_blank" rel="noreferrer">
                    Open in Google Maps ↗
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="map-routes">
          {ROUTES.map((r) => (
            <button key={r.id} className={routes.has(r.id) ? 'on' : ''} onClick={() => toggleRoute(r.id)}>
              <span className="swatch" style={{ background: r.color }} />{r.label}
            </button>
          ))}
        </div>
        <p className="map-hint">
          Zoom with the +/- controls (scroll zoom is off so the page doesn’t fight you). Return-route lines are indicative highway paths.{' '}
          <a href="https://www.google.com/maps/dir/?api=1&origin=Brighton-Le-Sands+NSW&destination=Coober+Pedy+SA&waypoints=Wagga+Wagga+NSW%7CMungo+National+Park%7CBroken+Hill+NSW%7CSilverton+NSW%7CWoomera+SA" target="_blank" rel="noreferrer">
            Open the outbound route as Google Maps directions ↗
          </a>
        </p>
      </div>
    </section>
  )
}
