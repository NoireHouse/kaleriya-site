import { MapPin, VideoCamera } from '@phosphor-icons/react'
import { useContent } from '../i18n/LocaleContext'

const icons = { place: MapPin, online: VideoCamera }

export default function Formats() {
  const content = useContent()
  const { formats } = content
  return (
    <section className="formats" id="formats">
      <div className="container">
        <h2>{formats.title}</h2>
        <div className="formats__pair">
          {formats.items.map((f) => {
            const Glyph = icons[f.icon]
            return (
              <article key={f.name} className="formats__item">
                <Glyph className="formats__icon" size={32} weight="light" aria-hidden="true" />
                <h3 className="formats__name">{f.name}</h3>
                <p>{f.text}</p>
                <dl className="formats__facts">
                  {f.rows.map((r) => (
                    <div key={r.label}>
                      <dt>{r.label}</dt>
                      <dd className={r.value ? undefined : 'is-pending'}>
                        {r.value ?? formats.pending}
                        {r.link && (
                          <a className="text-link formats__link" href={r.link.href} {...(r.link.href.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
                            {r.link.label}
                          </a>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
