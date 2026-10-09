import { ru } from './ru'
import { uk } from './uk'
import type { Content, Locale } from './types'

export * from './types'
export { classMinutes, contacts, onlinePlatforms, photos, scheduleOffline, studio, telHref } from './shared'

/** Конфигурация текстов: один объект на язык, одинаковая структура (тип Content) */
export const dictionaries: Record<Locale, Content> = { ru, uk }
export const locales = Object.keys(dictionaries) as Locale[]
export const defaultLocale: Locale = 'ru'
/** Короткие метки для переключателя */
export const localeLabels: Record<Locale, string> = { ru: 'RU', uk: 'UA' }
/** id секций одинаковы во всех языках */
export const sectionIds = ru.sections.map((s) => s.id)
