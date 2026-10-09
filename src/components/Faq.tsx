import { useContent } from '../i18n/LocaleContext'

/** Короткие ответы видны сразу: сетка вопрос-ответ вместо аккордеона */
export default function Faq() {
  const content = useContent()
  const { faq } = content
  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>{faq.title}</h2>
        <dl className="faq__grid">
          {faq.items.map((item) => (
            <div key={item.q} className="faq__item">
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
