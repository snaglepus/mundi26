import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import QuickCards from './components/QuickCards.jsx'
import Crew from './components/Crew.jsx'
import Itinerary from './components/Itinerary.jsx'
import Festival from './components/Festival.jsx'
import TripMap from './components/TripMap.jsx'
import RouteVote from './components/RouteVote.jsx'
import Pubs from './components/Pubs.jsx'
import Playlists from './components/Playlists.jsx'
import Stars from './components/Stars.jsx'
import Gallery from './components/Gallery.jsx'
import Logistics from './components/Logistics.jsx'
import Packing from './components/Packing.jsx'
import Bookings from './components/Bookings.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QuickCards />
        <Crew />
        <Itinerary />
        <Festival />
        <TripMap />
        <RouteVote />
        <Pubs />
        <Playlists />
        <Stars />
        <Gallery />
        <Logistics />
        <Packing />
        <Bookings />
      </main>
      <Footer />
    </>
  )
}
