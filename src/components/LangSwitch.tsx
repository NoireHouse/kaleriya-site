import { dictionaries, localeLabels, locales } from '../content'
import { useLocale } from '../i18n/LocaleContext'

/** Переключает язык на месте, без перезагрузки. Показывает язык, на который переключит. */
export default function LangSwitch() {
  const { locale, setLocale } = useLocale()
  const next = locales[(locales.indexOf(locale) + 1) % locales.length]
  return (
    <button
      type="button"
      className="lang-switch"
      lang={next}
      aria-label={dictionaries[next].languageName}
      onClick={() => setLocale(next)}
    >
      {localeLabels[next]}
    </button>
  )
}
