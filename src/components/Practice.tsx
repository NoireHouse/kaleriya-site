import { Footprints, PersonSimpleTaiChi, Plant, Wind, type Icon } from '@phosphor-icons/react'
import { content } from '../content'

const icons: Record<(typeof content.practice.benefits)[number]['icon'], Icon> = {
  flex: PersonSimpleTaiChi,
  safe: Footprints,
  breath: Wind,
  level: Plant,
}

/** Бенто: две практики, фото и польза. Ровно четыре ячейки под четыре блока контента. */
export default function Practice() {
  const { practice } = content
  const [hatha, purna] = practice.styles
  return (
    <section className="practice" id="practice">
      <div className="container">
        <h2>{practice.title}</h2>
        <div className="bento">
          <article className="bento__cell bento__cell--hatha">
            <h3 className="bento__word">{hatha.name}</h3>
            <p className="bento__meaning">{hatha.meaning}</p>
            <p>{hatha.text}</p>
          </article>
          <figure className="bento__cell bento__cell--photo">
            <img src={practice.photo.src} alt={practice.photo.alt} loading="lazy" decoding="async" width={1200} height={900} />
          </figure>
          <article className="bento__cell bento__cell--purna">
            <h3 className="bento__word">{purna.name}</h3>
            <p className="bento__meaning">{purna.meaning}</p>
            <p>{purna.text}</p>
          </article>
          <article className="bento__cell bento__cell--benefits">
            <h3>{practice.benefitsTitle}</h3>
            <ul>
              {practice.benefits.map((b) => {
                const Glyph = icons[b.icon]
                return (
                  <li key={b.text}>
                    <Glyph size={28} weight="light" aria-hidden="true" />
                    <span>{b.text}</span>
                  </li>
                )
              })}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
