export type Locale = 'ru' | 'uk'

export type Photo = { src: string; alt: string }

/** Глубина секции: светлая поверхность или тёмная глубина. Управляет шапкой и шкалой. */
export type Tone = 'surface' | 'depth'

export type Section = { id: string; label: string; tone: Tone }

export type Content = {
  locale: Locale
  /** Короткая подпись в шапке (не бренд) */
  siteName: string
  skipLink: string
  railLabel: string
  /** title и description страницы для этого языка (подставляются при переключении) */
  meta: { title: string; description: string }
  /** Название языка на самом языке: для подписи переключателя, который ведёт на него */
  languageName: string
  /** Единая подпись для всех кнопок записи: одно намерение, одна формулировка */
  cta: { label: string; href: string }
  sections: Section[]
  /** Пункт меню в шапке: быстрый переход к расписанию */
  nav: { href: string; label: string }

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
  schedule: {
    title: string
    lead: string
    /** Полные названия дней недели, с понедельника */
    days: string[]
    /** Короткие названия дней для полосы недели */
    daysShort: string[]
    until: string
    next: string
    format: string
    address: { label: string; street: string; area: string; route: string }
    mapTitle: string
    group: { label: string; value: string; note: string }
  }
  offer: { title: string; text: string; steps: string[] }
  faq: { title: string; items: { q: string; a: string }[] }
  contact: { title: string; text: string; empty: string; phoneAria: string }
  footer: string
}
