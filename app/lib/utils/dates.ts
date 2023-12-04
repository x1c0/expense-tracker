import { format, parseISO } from 'date-fns'

// converts a local date time (from input type="datetime-local") string to UTC ISO string
export const convertTo_UTC_ISO = (localDateTime: string) => {
  const date = new Date(localDateTime)
  return date.toISOString()
}
// converts a UTC ISO string to a local date time (for input type="datetime-local")
export const convertFrom_UTC_ISO = (utcDateTime: string) => {
  const date = parseISO(utcDateTime)
  return format(date, "yyyy-MM-dd'T'HH:mm")
}

export const getCurrentLocalDateTimeForInput = () => {
  const now = new Date()
  return format(now, "yyyy-MM-dd'T'HH:mm")
}

export const formatDate = (date: Date | string): string =>
  new Date(date).toLocaleDateString('de-CH', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
  })

export const formatTime = (date: Date | string): string =>
  new Date(date).toLocaleTimeString('de-CH', {
    hour: '2-digit',
    minute: '2-digit',
  })
