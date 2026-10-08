import { content } from '../content'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top">{content.brand}</a>
        <nav className="header__nav" aria-label="Разделы">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="btn btn--small" href="#contact">{content.ctaShort}</a>
      </div>
    </header>
  )
}
