import { useEffect, useRef } from 'react'
import { sections } from '../content'

/** Вертикальная шкала глубины: где вы на пути погружения. Только на широких экранах. */
export default function DepthRail({ active }: { active: string }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      ref.current?.style.setProperty('--depth', String(max > 0 ? window.scrollY / max : 0))
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const tone = sections.find((s) => s.id === active)?.tone ?? 'light'

  return (
    <nav ref={ref} className={`rail rail--${tone}`} aria-label="Разделы страницы">
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} aria-current={s.id === active ? 'true' : undefined}>
              <span className="rail__label">{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
