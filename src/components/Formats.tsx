import { content, contacts } from '../content'

export default function Formats() {
  const { formats } = content
  return (
    <section className="section section--tint" id="formats">
      <div className="container">
        <p className="eyebrow">{formats.eyebrow}</p>
        <h2>{formats.title}</h2>
        <div className="cards">
          {formats.items.map((f) => (
            <article key={f.name} className="card">
              <h3>{f.name}</h3>
              <p>{f.text}</p>
              <dl className="facts">
                {f.rows.map((r) => (
                  <div key={r.label}>
                    <dt>{r.label}</dt>
                    <dd className={contacts[r.key] ? undefined : 'muted'}>
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
