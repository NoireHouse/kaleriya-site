import { useContent } from '../i18n/LocaleContext'

/** Липкий заголовок слева, крупные утверждения справа */
export default function Audience() {
  const content = useContent()
  const { audience } = content
  return (
    <section className="audience" id="audience">
      <div className="container audience__grid">
        <h2 className="audience__title">{audience.title}</h2>
        <ul className="audience__list">
          {audience.items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      </div>
    </section>
  )
}
