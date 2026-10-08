import { content, type Tone } from '../content'
import CtaButton from './CtaButton'

export default function Header({ tone }: { tone: Tone }) {
  return (
    <header className={`header header--${tone}`}>
      <div className="container header__inner">
        <a className="header__brand" href="#top">{content.brand}</a>
        <CtaButton size="small" />
      </div>
    </header>
  )
}
