export type Locale = 'ru' | 'uk'

export type Photo = { src: string; alt: string }

/** Глубина секции: светлая поверхность или тёмная глубина. Управляет шапкой и шкалой. */
export type Tone = 'surface' | 'depth'

export type Section = { id: string; label: string; tone: Tone }

export type FactRow = { label: string; value: string | null; link?: { href: string; label: string } }

export type Content = {
  locale: Locale
  brand: string
  skipLink: string
  railLabel: string
  langSwitch: { label: string; href: string; ariaLabel: string }
  /** Единая подпись для всех кнопок записи: одно намерение, одна формулировка */
  cta: { label: string; href: string }
  sections: Section[]

  hero: {
    kicker: string
    title: string
    subtitle: string
    secondary: { href: string; label: string }
    breath: { inhale: string; exhale: string; still: string }
    photoAlt: string
  }
  about: {
    name: string
    role: string
    quote: string
    facts: { value: string; label: string }[]
    paragraphs: string[]
    photoAlt: string
  }
  practice: {
    title: string
    styles: { name: string; meaning: string; text: string }[]
    benefitsTitle: string
    benefits: { icon: 'flex' | 'safe' | 'breath' | 'level'; text: string }[]
    photoAlt: string
  }
  audience: { title: string; items: string[] }
  classFlow: {
    title: string
    duration: string
    steps: { name: string; text: string }[]
    photoAlt: string
  }
  formats: {
    title: string
    pending: string
    items: { icon: 'place' | 'online'; name: string; text: string; rows: FactRow[] }[]
  }
  offer: { title: string; text: string; steps: string[] }
  faq: { title: string; items: { q: string; a: string }[] }
  contact: { title: string; text: string; empty: string; phoneAria: string }
  footer: string
}
