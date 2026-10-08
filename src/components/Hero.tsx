import { motion, useReducedMotion } from 'motion/react'
import { content } from '../content'
import BreathCircle from './BreathCircle'
import CtaButton from './CtaButton'

const ease = [0.16, 1, 0.3, 1] as const

/** Единственная оркестрованная анимация страницы: текст первого экрана проявляется по очереди. */
export default function Hero() {
  const { hero } = content
  const reduce = useReducedMotion()
  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease },
        }

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <motion.p className="hero__kicker" {...item(0)}>{hero.kicker}</motion.p>
          <motion.h1 className="hero__title" {...item(1)}>{hero.title}</motion.h1>
          <motion.p className="hero__subtitle" {...item(2)}>{hero.subtitle}</motion.p>
          <motion.div className="hero__actions" {...item(3)}>
            <CtaButton />
            <a className="text-link" href={hero.secondary.href}>{hero.secondary.label}</a>
          </motion.div>
        </div>
        <BreathCircle photo={hero.photo} />
      </div>
    </section>
  )
}
