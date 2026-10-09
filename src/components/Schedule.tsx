import { useEffect, useState } from 'react'
import { MapPin, Sun, SunHorizon } from '@phosphor-icons/react'
import { classMinutes, scheduleOffline, studio } from '../content'
import { useContent } from '../i18n/LocaleContext'
import { endTime, isEarly, nextSlotIndex } from '../lib/schedule'

/**
 * Расписание: неделя целиком, дни занятий выделены карточками.
 * Ближайшее занятие считается по времени Киева и обновляется раз в минуту.
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
                <Glyph className="week__icon" size={28} weight="light" aria-hidden="true" />
                <span className="week__time">
                  <time>{slot.time}</time>
                </span>
                <span className="week__until">
                  {schedule.until} <time>{endTime(slot.time, classMinutes)}</time>
                </span>
                <span className="week__format">{schedule.format}</span>
              </li>
            )
          })}
        </ol>

        <div className="schedule__place">
          <MapPin size={24} weight="light" aria-hidden="true" />
          <p>
            {schedule.place}
            <a className="text-link" href={studio.mapHref} target="_blank" rel="noopener noreferrer">{schedule.mapLabel}</a>
          </p>
        </div>
        <p className="schedule__online">{schedule.online}</p>
      </div>
    </section>
  )
}
