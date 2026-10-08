import { content } from '../content'

export default function Offer() {
  const { offer } = content
  return (
    <section className="offer" id="offer">
      <div className="container offer__inner">
        <h2 className="offer__title">{offer.title}</h2>
        <p className="offer__text">{offer.text}</p>
        <ol className="offer__steps">
          {offer.steps.map((s) => <li key={s}>{s}</li>)}
        </ol>
        <a className="btn" href="#contact">{content.ctaShort}</a>
      </div>
    </section>
  )
}
