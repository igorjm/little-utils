export function isObject(v) {
  return v && isUndefined(v.length) && typeof v === 'object'
}

export function isUndefined(v) {
  return typeof v === 'undefined'
}
