import { ru } from './ru'
import { uk } from './uk'
import type { Content } from './types'

export * from './types'
export { contacts, photos, telHref } from './shared'

/** Язык страницы задаётся атрибутом lang в index.html (ru) или uk/index.html (uk) */
export const content: Content = document.documentElement.lang === 'uk' ? uk : ru
export const sections = content.sections
export const cta = content.cta
