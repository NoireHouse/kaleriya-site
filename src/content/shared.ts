// Данные, не зависящие от языка. Источник правды: context/contacts.md в репозитории знаний.

export const photoSrc = (file: string) => `${import.meta.env.BASE_URL}photos/${file}`

export const photos = {
  hero: photoSrc('ganga-rock-namaste.jpg'),
  about: photoSrc('ganga-meditation-with-sadhu.jpg'),
  practice: photoSrc('himalaya-mural-split-horizontal.jpg'),
  classFlow: photoSrc('sunset-sea-acro-silhouette.jpg'),
}

export const contacts = {
  /** Как показываем номер */
  phone: '+380 77 022 00 90' as string | null,
  /** username без @ */
  telegram: null as string | null,
  instagram: null as string | null,
}

export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`

const studioQuery = encodeURIComponent('Харків, вулиця Дмитра Антоненка, 49')

export const studio = {
  mapHref: `https://www.google.com/maps/search/?api=1&query=${studioQuery}`,
  routeHref: `https://www.google.com/maps/dir/?api=1&destination=${studioQuery}`,
  embedSrc: `https://maps.google.com/maps?q=${studioQuery}&z=16&output=embed`,
}

/** Длительность занятия, минут */
export const classMinutes = 90

/** Расписание очно: день недели (1 = понедельник) и время */
export const scheduleOffline: { day: number; time: string }[] = [
  { day: 2, time: '08:15' },
  { day: 4, time: '08:15' },
  { day: 6, time: '10:00' },
]

export const formatSchedule = (items: { day: number; time: string }[], days: string[]) =>
  items.length ? items.map((s) => `${days[s.day - 1]} ${s.time}`).join(', ') : null
