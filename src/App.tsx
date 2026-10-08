import { content } from './content'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Practice from './components/Practice'
import Journey from './components/Journey'
import Formats from './components/Formats'
import Offer from './components/Offer'
import Faq from './components/Faq'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">К содержанию</a>
      <Header />
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
