import { useState } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const stopIcon = L.divIcon({
  className: '',
  html: '<div class="pin pin-sm" style="background:#c1440e"><span>●</span></div>',
  iconSize: [20, 20], iconAnchor: [10, 18], popupAnchor: [0, -16],
})

export default function DayMap({ routeMap, label }) {
  const [open, setOpen] = useState(false)
  const bounds = routeMap.path.reduce(
    ([[a, b], [c, d]], [lat, lon]) => [[Math.min(a, lat), Math.min(b, lon)], [Math.max(c, lat), Math.max(d, lon)]],
    [[90, 180], [-90, -180]],
  )
  const pad = 0.35

  return (
    <details className="daymap" onToggle={(e) => setOpen(e.currentTarget.open)}>
      <summary>🗺 Route map · {label}</summary>
      {open && (
        <div className="daymap-inner">
          <MapContainer
            bounds={[[bounds[0][0] - pad, bounds[0][1] - pad], [bounds[1][0] + pad, bounds[1][1] + pad]]}
            scrollWheelZoom={false}
            className="daymap-canvas"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline positions={routeMap.path} pathOptions={{ color: '#c1440e', weight: 4, opacity: 0.85 }} />
            {routeMap.points.map((p) => (
              <Marker key={p.name} position={[p.lat, p.lon]} icon={stopIcon}>
                <Popup>
                  <div className="pop-name">{p.name}</div>
                  <a className="pop-link" href={`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lon}`} target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
      <a className="daymap-gmaps" href={routeMap.gmaps} target="_blank" rel="noreferrer">Open day directions in Google Maps ↗</a>
    </details>
  )
}
