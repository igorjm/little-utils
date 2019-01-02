import {
  isArray,
  isInfinity,
  isObject,
  isNumber,
} from './types'
import {
  isValidObject
} from './validations'
import { isValidNumber } from './numbers'

/**
 * A performatic array must:
 * - If empty, have a defined number of items
 * - If not empty, all items must be of the same type
 * @param {*} array
 */
export function isPerformaticArray(array) {
}

/**
 * Array must:
 * - have at least one (1) item
 *
 * All items in array must NOT be:
 * - undefined
 * - null
 * - NaN
 * - Infinity
 * - -Infinity
 * - empty object {}
 *
 * @category Array
 * @param {*} array
 * @returns {boolean} true if valid array, false if not
 *
 * @example
 *
 * const allow = undefined
 * isValidArray(array, allow) allows undefined items in the array
 *
 * const allow = [undefined, null]
 * isValidArray(array, allow)  allows undefined AND null items in the array
 *
 * isValidArray(array) undefined, null, NaN, Infinity, -Infinity and empty objects are NOT allowed by default
 *
 */
export function isValidArray(array, allowThese = []) {
  if (!isArray(array)) {
    return false;
  }

  if (array.length === 0) {
    return false;
  }

  let isValidArray = true
  let count = 0
  while (isValidArray && count < array.length) {
    isValidArray = isValidArrayItemType(array[count], allowThese)
    count++
  }

  return isValidArray
}

/**
 * Verifies if received value's type is invalid
 * If allowThese is empty, default validations will be made
 * @param {any} value
 * @param {array} allowThese
 */
export function isValidArrayItemType(value, allowThese = []) {
  if (allowThese.length > 0) {
    return isArrayItemTypeAllowed(value, allowThese)
  }

  if (!value) {
    return false;
  }

  if (isNumber(value) && !isValidNumber(value)) {
    return false;
  }

  if (isObject(value) && !isValidObject(value)) {
    return false;
  }

  return true
}

export function isArrayItemTypeAllowed(value, allowedTypes = []) {
  let isItemTypeAllowed = false
  let count = 0
  while (!isItemTypeAllowed && count < allowedTypes.length) {
    isItemTypeAllowed = typeof value === allowedTypes[count]
    count++
  }
  return isItemTypeAllowed;
}
