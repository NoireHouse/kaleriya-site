import { cta } from '../content'

export default function CtaButton({ size = 'regular' }: { size?: 'regular' | 'small' }) {
  return (
    <a className={size === 'small' ? 'btn btn--small' : 'btn'} href={cta.href}>
      {cta.label}
    </a>
  )
}
