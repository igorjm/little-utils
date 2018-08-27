export function isObject(value) {
  return value && typeof value === 'object'
}

export function isFunction(value) {
  return value && typeof value === 'function'
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

export function isUndefined(value) {
  return typeof value === 'undefined'
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
