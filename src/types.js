export function isObject(v) {
  return v && typeof v === 'object'
}

export function isFunction(v) {
  return v && typeof v === 'function'
}

export function isInfinity() {
  // Infinity
  /**
   * > 42 / +0
    Infinity
    > 42 / -0
    -Infinity
   */
}

export function isNaN() {
  // NaN
}

export function isNumber() {

}

export function isUndefined(v) {
  return typeof v === 'undefined'
}

export function isArray(value) {
  return value instanceof Array
}

export function isNotArray(value) {
  return !isArray(value)
}

export default {
  isObject,
  isFunction,
  isInfinity,
  isNaN,
  isNumber,
  isUndefined,
}
