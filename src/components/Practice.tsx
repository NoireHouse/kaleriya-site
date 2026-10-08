import { content } from '../content'

export default function Practice() {
  const { practice } = content
  return (
    <section className="section section--tint" id="practice">
      <div className="container">
        <p className="eyebrow">{practice.eyebrow}</p>
        <h2>{practice.title}</h2>
        <div className="cards">
          {practice.styles.map((s) => (
            <article key={s.name} className="card">
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <h3 className="subhead">{practice.benefitsTitle}</h3>
        <ul className="benefits">
          {practice.benefits.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </div>
    </section>
  )
}
