import { useEffect, useState } from 'react'
import { returnOptions, voteComparison } from '../data/content.js'

export default function RouteVote() {
  const [pick, setPick] = useState(() => localStorage.getItem('mundi-vote') || '')
  useEffect(() => {
    pick ? localStorage.setItem('mundi-vote', pick) : localStorage.removeItem('mundi-vote')
  }, [pick])
  const picked = returnOptions.find((o) => o.id === pick)

  return (
    <section className="section sand" id="vote">
      <div className="wrap">
        <div className="kicker">Days 7–9 · Group vote</div>
        <h2 className="title">Four ways <em>home</em></h2>
        <p className="lede">
          All four land in Sydney on Thursday 27 August and none retrace the outward route in full.
          Cast your vote here, then defend it at the campfire. Rob’s pick is flagged.
        </p>
        <div className="vote-grid">
          {returnOptions.map((o) => (
            <div className={`vote-card ${pick === o.id ? 'picked' : ''}`} key={o.id}>
              {o.flag && <span className="vote-flag">{o.flag}</span>}
              <img src={o.image} alt={o.name} loading="lazy" />
              <div className="vote-body">
                <h3>{o.name}</h3>
                <div className="vote-strap">{o.strap}</div>
                <div className="vote-sig">Signature moment: {o.signature}</div>
                <details className="vote-days">
                  <summary>Day by day</summary>
                  {o.days.map((d) => <p key={d.d}><b>{d.d}:</b> {d.text}</p>)}
                </details>
                <div className="vote-stats">
                  <span>Day 7: {o.stats.day7}</span>
                  <span>Total: {o.stats.total}</span>
                  <span>Home {o.stats.home}</span>
                </div>
                <button className="vote-btn" onClick={() => setPick(pick === o.id ? '' : o.id)}>
                  {pick === o.id ? '✓ Your pick' : 'Vote for this'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="vote-result">
          {picked
            ? <>You’re backing <b>{picked.name}</b>. Screenshot it and drop it in the group chat.</>
            : 'No vote cast yet. The Murray isn’t going to drive itself to you.'}
        </p>
        <div className="cmp-scroll">
          <table className="cmp">
            <thead>
              <tr>
                <th></th>
                {returnOptions.map((o) => <th key={o.id} className={o.flag ? 'pref' : ''}>{o.name}{o.flag ? ' ★' : ''}</th>)}
              </tr>
            </thead>
            <tbody>
              {voteComparison.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {row.values.map((v, i) => <td key={i}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
