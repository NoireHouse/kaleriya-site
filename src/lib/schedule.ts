// Время считаем по Киеву: занятия очные, в Харькове, независимо от часового пояса посетителя.

export type Slot = { day: number; time: string }

const toMinutes = (time: string) => {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

const pad = (n: number) => String(n).padStart(2, '0')

/** Время окончания занятия: «08:15» + 90 минут = «09:45» */
export function endTime(time: string, minutes: number): string {
  const end = (toMinutes(time) + minutes) % (24 * 60)
  return `${pad(Math.floor(end / 60))}:${pad(end % 60)}`
}

const weekdayIndex: Record<string, number> = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }

/** Текущий день недели (1 = понедельник) и минуты от полуночи в Киеве */
export function kyivNow(date = new Date()): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Kyiv',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return { day: weekdayIndex[get('weekday')] ?? 1, minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

/** Индекс ближайшего занятия, которое ещё не началось (с переходом на следующую неделю) */
export function nextSlotIndex(slots: Slot[], now = kyivNow()): number {
  const week = 7 * 24 * 60
  let best = -1
  let bestDelta = Infinity
  slots.forEach((s, i) => {
    let delta = (s.day - now.day) * 24 * 60 + toMinutes(s.time) - now.minutes
    if (delta <= 0) delta += week
    if (delta < bestDelta) {
      bestDelta = delta
      best = i
    }
  })
  return best
}

/** Утро до 09:00 встречаем с восходом, позже уже с солнцем */
export const isEarly = (time: string) => toMinutes(time) < 9 * 60
