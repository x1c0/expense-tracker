import { convertFrom_UTC_ISO, convertTo_UTC_ISO, formatDate, formatTime } from './dates'

test('formats date correctly', () => {
  const date = new Date('2023-02-01')
  const result = formatDate(date)
  expect(result).toBe('01.02.23')
})

test('formats time correctly', () => {
  const date = new Date('2023-01-01T12:34:56')
  const result = formatTime(date)
  expect(result).toBe('12:34')
})

test('converts local date and time to UTC ISO format and then back', () => {
  const localDateTime = '2023-02-01T12:34'
  const resultUTC = convertTo_UTC_ISO(localDateTime)
  expect(resultUTC).toBe('2023-02-01T11:34:00.000Z')
  const resultFromUTC = convertFrom_UTC_ISO(resultUTC)
  expect(resultFromUTC).toBe(localDateTime)
})
