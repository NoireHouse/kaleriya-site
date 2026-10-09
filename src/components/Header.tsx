import type { Tone } from '../content'
import { useContent } from '../i18n/LocaleContext'
import CtaButton from './CtaButton'
import LangSwitch from './LangSwitch'

export default function Header({ tone }: { tone: Tone }) {
  const content = useContent()
  return (
    <header className={`header header--${tone}`}>
      <div className="container header__inner">
        <a className="header__brand" href="#top">{content.brand}</a>
        <div className="header__actions">
          <LangSwitch />
          <CtaButton size="small" />
        </div>
      </div>
    </header>
  )
}
