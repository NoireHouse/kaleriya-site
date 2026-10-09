import { TelegramLogo } from '@phosphor-icons/react'
import { contacts, telegramHref } from '../content'
import { useContent } from '../i18n/LocaleContext'

/** Кнопка записи: ведёт в Telegram (новая вкладка). Если Telegram не задан, ведёт к блоку контактов. */
export default function CtaButton({ size = 'regular' }: { size?: 'regular' | 'small' }) {
  const { cta } = useContent()
  const className = size === 'small' ? 'btn btn--small' : 'btn'
  if (!contacts.telegram) {
    return <a className={className} href={cta.href}>{cta.label}</a>
  }
  return (
    <a className={className} href={telegramHref(contacts.telegram)} target="_blank" rel="noopener noreferrer">
      <TelegramLogo size={size === 'small' ? 20 : 22} weight="light" aria-hidden="true" />
      {cta.label}
    </a>
  )
}
