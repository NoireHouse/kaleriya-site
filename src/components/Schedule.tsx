import { useEffect, useState } from 'react'
import { MapPin, NavigationArrow, Sun, SunHorizon, UsersThree } from '@phosphor-icons/react'
import { classMinutes, scheduleOffline, studio } from '../content'
import { useContent } from '../i18n/LocaleContext'
import { endTime, isEarly, nextSlotIndex } from '../lib/schedule'

/**
 * Расписание и адрес: всё, что нужно человеку, пришедшему по рекомендации.
 * Неделя с ближайшим занятием (по времени Киева) и крупные карточки: адрес, карта, очно.
 */
export default function Schedule() {
  const { schedule } = useContent()
  const [next, setNext] = useState(() => nextSlotIndex(scheduleOffline))

  useEffect(() => {
    const id = window.setInterval(() => setNext(nextSlotIndex(scheduleOffline)), 60_000)
    return () => window.clearInterval(id)
  }, [])

  const slotByDay = new Map(scheduleOffline.map((s, i) => [s.day, i]))

  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <h2>{schedule.title}</h2>
        <p className="schedule__lead">{schedule.lead}</p>

        <ol className="week">
          {schedule.days.map((dayName, d) => {
            const day = d + 1
            const i = slotByDay.get(day)
            if (i === undefined) {
              return (
                <li key={day} className="week__day week__day--rest" aria-hidden="true">
                  <span className="week__short">{schedule.daysShort[d]}</span>
                </li>
              )
            }
            const slot = scheduleOffline[i]
            const Glyph = isEarly(slot.time) ? SunHorizon : Sun
            const isNext = i === next
            return (
              <li key={day} className={`week__day week__day--class${isNext ? ' is-next' : ''}`}>
                <span className="week__short" aria-hidden="true">{schedule.daysShort[d]}</span>
                <span className="week__name">{dayName}</span>
                {isNext && <span className="week__badge">{schedule.next}</span>}
                <Glyph className="week__icon" size={30} weight="light" aria-hidden="true" />
                <span className="week__time"><time>{slot.time}</time></span>
                <span className="week__until">
                  {schedule.until} <time>{endTime(slot.time, classMinutes)}</time>
                </span>
                <span className="week__format">{schedule.format}</span>
              </li>
            )
          })}
        </ol>

        <div className="info-grid">
          <article className="info-card info-card--address">
            <MapPin className="info-card__icon" size={32} weight="light" aria-hidden="true" />
            <h3 className="info-card__label">{schedule.address.label}</h3>
            <p className="info-card__value">{schedule.address.street}</p>
            <p className="info-card__note">{schedule.address.area}</p>
            <a className="btn-outline" href={studio.routeHref} target="_blank" rel="noopener noreferrer">
              <NavigationArrow size={20} weight="light" aria-hidden="true" />
              {schedule.address.route}
            </a>
          </article>

          <figure className="info-card info-card--map">
            <iframe
              src={studio.embedSrc}
              title={schedule.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </figure>

          <article className="info-card info-card--group">
            <UsersThree className="info-card__icon" size={32} weight="light" aria-hidden="true" />
            <h3 className="info-card__label">{schedule.group.label}</h3>
            <p className="info-card__value">{schedule.group.value}</p>
            <p className="info-card__note">{schedule.group.note}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
