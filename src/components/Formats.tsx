import { content, contacts } from '../content'

export default function Formats() {
  const { formats } = content
  return (
    <section className="formats" id="formats">
      <div className="container">
        <h2>{formats.title}</h2>
        <div className="formats__pair">
          {formats.items.map((f) => (
            <article key={f.name} className="formats__item">
              <h3 className="formats__name">{f.name}</h3>
              <p>{f.text}</p>
              <dl className="facts">
                {f.rows.map((r) => (
                  <div key={r.label}>
                    <dt>{r.label}</dt>
                    <dd className={contacts[r.key] ? undefined : 'pending'}>
                      {contacts[r.key] ?? formats.pending}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
