export const notNull = e => v => {
  return v ? undefined : e
}

export const maxLength = length => v => {
  return v && v.length > length ? `MAX LENGTH IS ${length} SYMBOLS` : undefined
}