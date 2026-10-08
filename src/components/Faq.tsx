import { content } from '../content'

export default function Faq() {
  const { faq } = content
  return (
    <section className="section" id="faq">
      <div className="container narrow">
        <p className="eyebrow">{faq.eyebrow}</p>
        <h2>{faq.title}</h2>
        <div className="faq">
          {faq.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
