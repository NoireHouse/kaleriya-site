import { InstagramLogo, Phone, TelegramLogo, type Icon } from '@phosphor-icons/react'
import { content, contacts, type Contacts } from '../content'

type Link = { label: string; href: string; icon: Icon }

function contactLinks(c: Contacts): Link[] {
  const links: Link[] = []
  if (c.telegram) links.push({ label: `Telegram @${c.telegram}`, href: `https://t.me/${c.telegram}`, icon: TelegramLogo })
  if (c.phone) links.push({ label: c.phone, href: `tel:${c.phone.replace(/[^+\d]/g, '')}`, icon: Phone })
  if (c.instagram) links.push({ label: `Instagram @${c.instagram}`, href: `https://instagram.com/${c.instagram}`, icon: InstagramLogo })
  return links
}

export default function Contact() {
  const { contact } = content
  const links = contactLinks(contacts)
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        {links.length > 0 ? (
          <ul className="contact__links">
            {links.map(({ label, href, icon: Glyph }) => (
              <li key={href}>
                <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
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
