import { content } from '../content'
import BreathCircle from './BreathCircle'

export default function Hero() {
  const { hero } = content
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__kicker">{hero.kicker}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <a className="btn" href="#contact">{content.cta}</a>
            <a className="text-link" href={hero.secondary.href}>{hero.secondary.label}</a>
          </div>
          <p className="hero__facts">{hero.facts}</p>
        </div>
        <BreathCircle photo={hero.photo} />
      </div>
    </section>
  )
}
