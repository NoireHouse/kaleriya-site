import { MapPin, VideoCamera } from '@phosphor-icons/react'
import { content, contacts } from '../content'

const icons = { place: MapPin, online: VideoCamera }

export default function Formats() {
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
                      <dd className={contacts[r.key] ? undefined : 'is-pending'}>{contacts[r.key] ?? formats.pending}</dd>
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
