import { content } from '../content'

export default function About() {
  const { about } = content
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <figure className="about__photo">
          <img src={about.photo.src} alt={about.photo.alt} loading="lazy" width={1200} height={900} />
        </figure>
        <div className="about__text">
          <h2>{about.title}</h2>
          <blockquote className="about__quote">{about.quote}</blockquote>
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}
