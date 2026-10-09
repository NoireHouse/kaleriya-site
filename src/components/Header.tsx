import type { Tone } from '../content'
import { useContent } from '../i18n/LocaleContext'
import CtaButton from './CtaButton'
import LangSwitch from './LangSwitch'

export default function Header({ tone, active }: { tone: Tone; active: string }) {
  const content = useContent()
  const navCurrent = `#${active}` === content.nav.href
  return (
    <header className={`header header--${tone}`}>
      <div className="container header__inner">
        <a className="header__brand" href="#top">{content.brand}</a>
        <div className="header__actions">
          <a className="header__nav" href={content.nav.href} aria-current={navCurrent ? 'location' : undefined}>
            {content.nav.label}
          </a>
          <LangSwitch />
          <span className="header__cta"><CtaButton size="small" /></span>
        </div>
      </div>
    </header>
  )
}
