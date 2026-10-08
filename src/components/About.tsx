import { content } from '../content'

export default function About() {
  const { about } = content
  return (
    <section className="section" id="about">
      <div className="container split">
        <figure className="split__photo rounded">
          <img src={about.photo.src} alt={about.photo.alt} loading="lazy" width={1200} height={900} />
        </figure>
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
          {about.paragraphs.map((p) => <p key={p} className="lead">{p}</p>)}
        </div>
      </div>
    </section>
  )
}
