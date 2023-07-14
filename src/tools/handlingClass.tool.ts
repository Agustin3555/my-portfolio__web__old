export type HandlingClass = string | number | (string | number)[]

export const asClassName = (value?: HandlingClass) => {
  if (!value) return

  if (typeof value === 'string') return value
  if (typeof value === 'number') return String(value)

  return value.join(' ')
}
