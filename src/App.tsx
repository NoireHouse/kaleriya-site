import { sectionIds } from './content'
import { useContent } from './i18n/LocaleContext'
import { useActiveSection } from './hooks/useActiveSection'
import Header from './components/Header'
import DepthRail from './components/DepthRail'
import LangSwitch from './components/LangSwitch'
import Hero from './components/Hero'
import About from './components/About'
import Practice from './components/Practice'
import Audience from './components/Audience'
import ClassFlow from './components/ClassFlow'
import Formats from './components/Formats'
import Offer from './components/Offer'
import Faq from './components/Faq'
import Contact from './components/Contact'

export default function App() {
  const content = useContent()
  const active = useActiveSection(sectionIds)
  const tone = content.sections.find((s) => s.id === active)?.tone ?? 'surface'

  return (
    <>
      <a className="skip-link" href="#main">{content.skipLink}</a>
      <Header tone={tone} />
      <DepthRail active={active} tone={tone} />
      <main id="main">
        <Hero />
        <About />
        <Practice />
        <Audience />
        <ClassFlow />
        <Formats />
        <Offer />
        <Faq />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>{content.footer}</span>
          <LangSwitch />
        </div>
      </footer>
    </>
  )
}
