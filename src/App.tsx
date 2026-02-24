import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Process from './components/Process'
import FocusAreas from './components/FocusAreas'
import CTAForm from './components/CTAForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Pillars />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <FocusAreas />
        <div className="section-divider" />
        <CTAForm />
      </main>
      <Footer />
    </>
  )
}
