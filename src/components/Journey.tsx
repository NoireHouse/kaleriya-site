import { content } from '../content'

export default function Journey() {
  const { audience, classFlow, gallery } = content
  return (
    <section className="journey" id="class">
      <div className="container">
        <div className="journey__audience">
          <h2>{audience.title}</h2>
          <ul className="dots dots--large">
            {audience.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>

        <h2>{classFlow.title}</h2>
        <ol className="flow">
          {classFlow.steps.map((s) => (
            <li key={s.name}>
              <span className="flow__node" aria-hidden="true" />
              <strong>{s.name}</strong>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>

        <div className="journey__gallery">
          {gallery.map((g) => (
            <figure key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" width={1200} height={900} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
