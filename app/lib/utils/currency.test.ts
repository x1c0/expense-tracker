import { formatCurrency } from './currency'

test('handles zero value correctly', () => {
  const result = formatCurrency(0, 'CHF')
  expect(result).toBe('0')
})

test('formats CHF currency correctly with whole number', () => {
  const result = formatCurrency(100, 'CHF', true)
  expect(result).toBe('100.-')
})

test('formats CHF currency correctly with decimal number', () => {
  const result = formatCurrency(123.45, 'CHF')
  expect(result).toBe('123.45')
})

test('formats CHF currency correctly with 2 decimal cases', () => {
  const result = formatCurrency(9.9, 'CHF')
  expect(result).toBe('9.90')
})

test('formats USD currency correctly', () => {
  const result = formatCurrency(100, 'USD')
  expect(result).toBe('100.00')
})

test('formats EUR currency correctly', () => {
  const result = formatCurrency(50.5, 'EUR')
  expect(result).toBe('50.50')
})

test('formats large numbers correctly', () => {
  const result = formatCurrency(123456789.99, 'CHF')
  expect(result).toBe('123456789.99')
})
