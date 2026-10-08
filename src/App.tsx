import { content, sections } from './content'
import { useActiveSection } from './hooks/useActiveSection'
import Header from './components/Header'
import DepthRail from './components/DepthRail'
import Hero from './components/Hero'
import About from './components/About'
import Practice from './components/Practice'
import Journey from './components/Journey'
import Formats from './components/Formats'
import Offer from './components/Offer'
import Faq from './components/Faq'
import Contact from './components/Contact'

const ids = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(ids)
  const tone = sections.find((s) => s.id === active)?.tone ?? 'light'

  return (
    <>
      <a className="skip-link" href="#main">К содержанию</a>
      <Header tone={tone} />
      <DepthRail active={active} />
      <main id="main">
        <Hero />
        <About />
        <Practice />
        <Journey />
        <Formats />
        <Offer />
        <Faq />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">{content.footer}</div>
      </footer>
    </>
  )
}
