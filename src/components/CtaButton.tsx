import { useContent } from '../i18n/LocaleContext'

export default function CtaButton({ size = 'regular' }: { size?: 'regular' | 'small' }) {
  const { cta } = useContent()
  return (
    <a className={size === 'small' ? 'btn btn--small' : 'btn'} href={cta.href}>
      {cta.label}
    </a>
  )
}
