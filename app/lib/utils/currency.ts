export const formatCurrency = (value: number, currency: string, swissShort = false): string => {
  if (!currency) return ''

  if (value === 0) return '0'

  if (currency === 'CHF' && swissShort) {
    return value.toFixed(2).replace('.00', '.-')
  }

  return value.toFixed(2)
}
