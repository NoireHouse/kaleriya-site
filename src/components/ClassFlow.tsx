import { motion, useReducedMotion } from 'motion/react'
import { content } from '../content'

/** Ход занятия: настоящая последовательность. Узлы растут и темнеют, как погружение, и проявляются по порядку. */
export default function ClassFlow() {
  const { classFlow } = content
  const reduce = useReducedMotion()

  return (
    <section className="flow-section" id="class">
      <div className="container">
        <div className="flow-section__head">
          <h2>{classFlow.title}</h2>
          <figure className="flow-section__photo">
            <img src={classFlow.photo.src} alt={classFlow.photo.alt} loading="lazy" decoding="async" width={1200} height={900} />
          </figure>
        </div>
        <ol className="flow">
          {classFlow.steps.map((s, i) => (
            <motion.li
              key={s.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="flow__node" aria-hidden="true" />
              <strong>{s.name}</strong>
              <span className="flow__text">{s.text}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
