import { content } from '../content'

export default function Practice() {
  const { practice } = content
  return (
    <section className="practice" id="practice">
      <div className="container">
        <h2>{practice.title}</h2>
        <div className="practice__pair">
          {practice.styles.map((s) => (
            <article key={s.name} className="practice__style">
              <h3 className="practice__name">{s.name}</h3>
              <p className="practice__meaning">{s.meaning}</p>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <div className="practice__benefits">
          <h3>{practice.benefitsTitle}</h3>
          <ul className="dots">
            {practice.benefits.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
