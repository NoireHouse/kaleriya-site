import { content, type Photo } from '../content'

/** Фото в «дышащем» круге: вдох 4 с, выдох 6 с. Без анимации при prefers-reduced-motion. */
export default function BreathCircle({ photo }: { photo: Photo }) {
  const { breath } = content.hero
  return (
    <figure className="breath">
      <div className="breath__ring" aria-hidden="true" />
      <div className="breath__disc">
        <img src={photo.src} alt={photo.alt} width={900} height={1200} />
      </div>
      <figcaption className="breath__cue" aria-hidden="true">
        <span className="breath__in">{breath.inhale}</span>
        <span className="breath__out">{breath.exhale}</span>
        <span className="breath__still">{breath.still}</span>
      </figcaption>
    </figure>
  )
}
