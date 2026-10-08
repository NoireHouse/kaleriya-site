import { content, photos } from '../content'

/** Фото на всю колонку и наложенная на него панель с текстом */
export default function About() {
  const { about } = content
  return (
    <section className="about" id="about">
      <div className="container about__stage">
        <figure className="about__photo">
          <img src={photos.about} alt={about.photoAlt} loading="lazy" decoding="async" width={1200} height={900} />
        </figure>
        <article className="about__panel">
          <h2 className="about__name">
            {about.name}
            <span>{about.role}</span>
          </h2>
          <blockquote className="about__quote">{about.quote}</blockquote>
          <dl className="about__facts">
            {about.facts.map((f) => (
              <div key={f.value}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </article>
      </div>
    </section>
  )
}
