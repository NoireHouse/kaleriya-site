import { InstagramLogo, Phone, TelegramLogo, type Icon } from '@phosphor-icons/react'
import { contacts, telHref, type Content } from '../content'
import { useContent } from '../i18n/LocaleContext'

type Link = { label: string; aria?: string; href: string; icon: Icon; external: boolean }

function contactLinks(content: Content): Link[] {
  const links: Link[] = []
  if (contacts.phone) links.push({ label: contacts.phone, aria: content.contact.phoneAria, href: telHref(contacts.phone), icon: Phone, external: false })
  if (contacts.telegram) links.push({ label: `Telegram @${contacts.telegram}`, href: `https://t.me/${contacts.telegram}`, icon: TelegramLogo, external: true })
  if (contacts.instagram) links.push({ label: `Instagram @${contacts.instagram}`, href: `https://instagram.com/${contacts.instagram}`, icon: InstagramLogo, external: true })
  return links
}

export default function Contact() {
  const content = useContent()
  const { contact } = content
  const links = contactLinks(content)
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        {/* Тот же круг, что на первом экране, но в покое: путешествие завершилось тишиной */}
        <div className="contact__ring" aria-hidden="true" />
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        {links.length > 0 ? (
          <ul className="contact__links">
            {links.map(({ label, aria, href, icon: Glyph, external }) => (
              <li key={href}>
                <a className="btn" href={href} aria-label={aria} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <Glyph size={22} weight="light" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="contact__empty" role="status">{contact.empty}</p>
        )}
      </div>
    </section>
  )
}
