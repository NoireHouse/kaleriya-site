import { content, type Tone } from '../content'

export default function Header({ tone }: { tone: Tone }) {
  return (
    <header className={`header header--${tone}`}>
      <div className="container header__inner">
        <a className="header__brand" href="#top">{content.brand}</a>
        <a className="btn btn--small" href="#contact">{content.ctaShort}</a>
      </div>
    </header>
  )
}
