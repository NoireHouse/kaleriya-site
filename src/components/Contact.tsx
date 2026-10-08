import { content, contacts, type Contacts } from '../content'

type Link = { label: string; value: string; href: string }

function contactLinks(c: Contacts): Link[] {
  const links: Link[] = []
  if (c.telegram) links.push({ label: 'Telegram', value: `@${c.telegram}`, href: `https://t.me/${c.telegram}` })
  if (c.phone) links.push({ label: 'Телефон', value: c.phone, href: `tel:${c.phone.replace(/[^+\d]/g, '')}` })
  if (c.instagram) links.push({ label: 'Instagram', value: `@${c.instagram}`, href: `https://instagram.com/${c.instagram}` })
  return links
}

export default function Contact() {
  const { contact } = content
  const links = contactLinks(contacts)
  return (
    <section className="section contact" id="contact">
      <div className="container narrow center">
        <h2>{contact.title}</h2>
        <p className="lead">{contact.text}</p>
        {links.length > 0 ? (
          <ul className="contact__links">
            {links.map((l) => (
              <li key={l.label}>
                <a className="btn" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}: {l.value}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="contact__placeholder" role="status">{contact.placeholder}</p>
        )}
      </div>
    </section>
  )
}
