import { telHref, contacts } from '../content'
import { useContent } from '../i18n/LocaleContext'
import CtaButton from './CtaButton'

export default function Contact() {
  const { contact } = useContent()
  const hasAny = Boolean(contacts.telegram || contacts.phone)
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        {/* Тот же круг, что на первом экране, но в покое: путешествие завершилось тишиной */}
        <div className="contact__ring" aria-hidden="true" />
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        {hasAny ? (
          <div className="contact__actions">
            {contacts.telegram && <CtaButton />}
            {contacts.phone && (
              <p className="contact__phone">
                {contact.phoneLead}{' '}
                <a href={telHref(contacts.phone)} aria-label={contact.phoneAria}>{contacts.phone}</a>
              </p>
            )}
          </div>
        ) : (
          <p className="contact__empty" role="status">{contact.empty}</p>
        )}
      </div>
    </section>
  )
}
