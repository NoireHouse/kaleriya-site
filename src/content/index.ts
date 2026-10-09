import { ru } from './ru'
import { uk } from './uk'
import type { Content, Locale } from './types'

export * from './types'
export { classMinutes, contacts, photos, scheduleOffline, studio, telHref, telegramHref } from './shared'

/** Конфигурация текстов: один объект на язык, одинаковая структура (тип Content) */
export const dictionaries: Record<Locale, Content> = { uk, ru }
export const locales = Object.keys(dictionaries) as Locale[]
export const defaultLocale: Locale = 'uk'
/** Короткие метки для переключателя */
export const localeLabels: Record<Locale, string> = { uk: 'UA', ru: 'RU' }
/** id секций одинаковы во всех языках */
export const sectionIds = uk.sections.map((s) => s.id)
