import { motion, useScroll, useReducedMotion } from 'motion/react'
import { content, sections, type Tone } from '../content'

/** Шкала глубины: где вы на пути погружения. Прогресс берём из useScroll, без слушателя scroll. */
export default function DepthRail({ active, tone }: { active: string; tone: Tone }) {
  const { scrollYProgress } = useScroll()
  const reduce = useReducedMotion()

  return (
    <nav className={`rail rail--${tone}`} aria-label={content.railLabel}>
      <div className="rail__track" aria-hidden="true">
        <motion.div className="rail__fill" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
      </div>
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} aria-current={s.id === active ? 'location' : undefined}>
              <span className="rail__label">{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
