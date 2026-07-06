import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const LightboxContext = createContext(() => {})

export function useLightbox() {
  return useContext(LightboxContext)
}

export function LightboxProvider({ children }) {
  const [state, setState] = useState(null) // { images: [{src, caption}], index }

  const open = useCallback((images, index = 0) => setState({ images, index }), [])
  const close = () => setState(null)
  const step = useCallback((dir) => {
    setState((s) => s && { ...s, index: (s.index + dir + s.images.length) % s.images.length })
  }, [])

  useEffect(() => {
    if (!state) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [state, step])

  const cur = state && state.images[state.index]

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {cur && (
        <div className="lb" onClick={close} role="dialog" aria-modal="true">
          <button className="lb-x" aria-label="Close" onClick={close}>✕</button>
          <button className="lb-nav lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1) }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={cur.caption} />
            <figcaption>{cur.caption} <span>{state.index + 1} / {state.images.length}</span></figcaption>
          </figure>
          <button className="lb-nav lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1) }}>›</button>
        </div>
      )}
    </LightboxContext.Provider>
  )
}
