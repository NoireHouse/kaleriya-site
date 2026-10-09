import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { defaultLocale, dictionaries, locales, type Content, type Locale } from '../content'

const STORAGE_KEY = 'kaleriya-locale'

const isLocale = (v: unknown): v is Locale => typeof v === 'string' && (locales as string[]).includes(v)

/** Порядок выбора языка: ссылка ?lang= → выбор из прошлого визита → язык браузера → русский */
function initialLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // хранилище может быть недоступно (приватный режим): просто идём дальше
  }
  return navigator.language?.toLowerCase().startsWith('uk') ? 'uk' : defaultLocale
}

type LocaleState = { locale: Locale; content: Content; setLocale: (l: Locale) => void }

const LocaleContext = createContext<LocaleState | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const content = dictionaries[locale]

  const setLocale = useCallback((l: Locale) => setLocaleState(l), [])

  // Синхронизируем документ с выбранным языком: lang, title, description, адрес и память браузера
  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // без хранилища язык просто не запомнится
    }
    const url = new URL(window.location.href)
    if (locale === defaultLocale) url.searchParams.delete('lang')
    else url.searchParams.set('lang', locale)
    window.history.replaceState(window.history.state, '', url)
  }, [locale, content])

  const value = useMemo(() => ({ locale, content, setLocale }), [locale, content, setLocale])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleState {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale вызван вне LocaleProvider')
  return ctx
}

/** Тексты текущего языка */
export const useContent = (): Content => useLocale().content
