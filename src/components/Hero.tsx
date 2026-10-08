import { content } from '../content'

export default function Hero() {
  const { hero, trust } = content
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <a className="btn" href="#contact">{content.cta}</a>
            <a className="link-arrow" href={hero.secondary.href}>{hero.secondary.label}</a>
          </div>
        </div>
        <figure className="hero__photo arch">
          <img src={hero.photo.src} alt={hero.photo.alt} width={960} height={1280} />
        </figure>
      </div>
      <ul className="container trust" aria-label="Коротко">
        {trust.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </section>
  )
}
