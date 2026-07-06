import { bookings } from '../data/content.js'

const LABEL = { done: 'Done', urgent: 'Urgent', priority: 'Priority', todo: 'To do' }

export default function Bookings() {
  return (
    <section className="section light" id="bookings">
      <div className="wrap">
        <div className="kicker">The action list</div>
        <h2 className="title">Bookings <em>board</em></h2>
        <p className="lede">Tickets are locked. The vans and the underground beds are the two that bite if they slip.</p>
        <div className="book-list">
          {bookings.map((b) => (
            <div className="book-row" key={b.item}>
              <span className={`book-status ${b.status}`}>{LABEL[b.status]}</span>
              <b>{b.item}</b>
              <span className="note">{b.note}</span>
              {b.url && <a href={b.url} target="_blank" rel="noreferrer">Book ↗</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
