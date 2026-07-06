import { useEffect, useState } from 'react'
import { packing } from '../data/content.js'

const TOTAL = packing.reduce((n, g) => n + g.items.length, 0)

export default function Packing() {
  const [done, setDone] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('mundi-pack') || '[]')) } catch { return new Set() }
  })
  useEffect(() => {
    localStorage.setItem('mundi-pack', JSON.stringify([...done]))
  }, [done])

  const toggle = (key) => setDone((prev) => {
    const next = new Set(prev)
    next.has(key) ? next.delete(key) : next.add(key)
    return next
  })

  return (
    <section className="section sand" id="packing">
      <div className="wrap">
        <div className="kicker">Nights hit zero out there</div>
        <h2 className="title">The <em>kit</em> list</h2>
        <p className="lede">
          August on the plains: mild days, freezing nights, occasional dust. Tick things off as they go in the van;
          your list is saved on this device.
        </p>
        <p className="pack-progress"><b>{done.size}/{TOTAL}</b> packed{done.size === TOTAL ? ' · the van is officially ready 🎉' : ''}</p>
        <div className="pack-grid">
          {packing.map((g) => (
            <div className="pack-card" key={g.group}>
              <h3><span>{g.icon}</span>{g.group}</h3>
              {g.items.map((item) => {
                const key = `${g.group}:${item}`
                return (
                  <label key={item} className={done.has(key) ? 'done' : ''}>
                    <input type="checkbox" checked={done.has(key)} onChange={() => toggle(key)} />
                    {item}
                  </label>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
