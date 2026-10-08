import { content } from '../content'

export default function Journey() {
  const { audience, classFlow, gallery } = content
  return (
    <section className="section" id="class">
      <div className="container two-col">
        <div>
          <h2>{audience.title}</h2>
          <ul className="checklist">
            {audience.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div>
          <h2>{classFlow.title}</h2>
          <ol className="steps">
            {classFlow.steps.map((s) => (
              <li key={s.name}>
                <strong>{s.name}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="container gallery">
        {gallery.map((g) => (
          <figure key={g.src} className="rounded">
            <img src={g.src} alt={g.alt} loading="lazy" width={1200} height={900} />
          </figure>
        ))}
      </div>
    </section>
  )
}
