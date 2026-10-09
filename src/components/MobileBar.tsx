import CtaButton from './CtaButton'

/** Нижняя панель на телефоне: запись всегда под большим пальцем. Скрыта на первом экране и у контактов. */
export default function MobileBar({ hidden }: { hidden: boolean }) {
  return (
    <div className={`mobile-bar${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden || undefined}>
      <CtaButton />
    </div>
  )
}
