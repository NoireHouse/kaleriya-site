import { content, type Tone } from '../content'
import CtaButton from './CtaButton'

export default function Header({ tone }: { tone: Tone }) {
  return (
    <header className={`header header--${tone}`}>
      <div className="container header__inner">
        <a className="header__brand" href="#top">{content.brand}</a>
        <div className="header__actions">
          <a className="lang-switch" href={content.langSwitch.href} hrefLang={content.locale === 'ru' ? 'uk' : 'ru'} aria-label={content.langSwitch.ariaLabel}>
            {content.langSwitch.label}
          </a>
          <CtaButton size="small" />
        </div>
      </div>
    </header>
  )
}
