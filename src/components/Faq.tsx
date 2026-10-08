import { content } from '../content'

export default function Faq() {
  const { faq } = content
  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <h2>{faq.title}</h2>
        <div className="faq__list">
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
