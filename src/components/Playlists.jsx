import { useState } from 'react'
import { playlistMeta, bashPlaylists } from '../data/content.js'
import tracksData from '../data/spotifyTracks.json'

function TrackEmbed({ id }) {
  return (
    <div className="pl-player">
      <iframe
        title="Spotify player"
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
        width="100%" height="80" frameBorder="0" loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  )
}

function Playlist({ pl, index }) {
  const tracks = tracksData[pl.key] || []
  const firstPlayable = tracks.find((t) => t.id)
  const [current, setCurrent] = useState(null)
  const active = current || firstPlayable

  return (
    <details className="pl-acc" open={index === 0}>
      <summary>
        <span className="pl-num">{String(index + 1).padStart(2, '0')}</span>
        <h3>{pl.title}</h3>
        <span className="pl-open-hint">tracklist ▾</span>
      </summary>
      <div className="pl-inner">
        <p className="pl-vibe">{pl.vibe}</p>
        {active && <TrackEmbed id={active.id} key={active.id} />}
        <ul className="pl-tracks">
          {tracks.map((t, i) => t.id ? (
            <li key={i}>
              <button className={`pl-track ${active?.id === t.id ? 'now' : ''}`} onClick={() => setCurrent(t)}>
                <span className="n">{i + 1}</span>
                <span>{t.title} <span className="a">· {t.artist}</span></span>
                <span className="play">{active?.id === t.id ? 'loaded' : '▶'}</span>
              </button>
            </li>
          ) : (
            <li key={i}>
              <a className="pl-track" href={`https://open.spotify.com/search/${encodeURIComponent(`${t.title} ${t.artist}`)}`} target="_blank" rel="noreferrer">
                <span className="n">{i + 1}</span>
                <span>{t.title} <span className="a">· {t.artist}</span></span>
                <span className="play">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </details>
  )
}

export default function Playlists() {
  return (
    <section className="section" id="tunes">
      <div className="wrap">
        <div className="kicker">The soundtrack</div>
        <h2 className="title">Seven days, seven <em>playlists</em></h2>
        <p className="lede">
          One per driving day, built for the route and the crew: Aussie rock leads but doesn’t monopolise.
          Tap any track to load it in the player; tracks marked ↗ open in Spotify.
        </p>
        <div className="pl-layout">
          {playlistMeta.map((pl, i) => <Playlist pl={pl} index={i} key={pl.key} />)}
        </div>
        <div className="bash-pl">
          <h3>Official Bash Travel Tunes</h3>
          <p className="lede">
            The festival’s own playlists of the 2026 lineup artists, straight from{' '}
            <a href="https://mundimundibash.com.au/travel-tunes-spotify-playlists/" target="_blank" rel="noreferrer">mundimundibash.com.au</a>.
            Queue these for the festival days.
          </p>
          <div className="bash-strip">
            {bashPlaylists.map((id) => (
              <iframe
                key={id}
                title={`Bash playlist ${id}`}
                src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`}
                height="152" frameBorder="0" loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
