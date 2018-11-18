import {
  isArray,
  isInfinity,
  isObject,
} from './types'
import {
  isValidObject
} from './validations'

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

  if (array.length == 0) {
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
 * @param {any} value 
 */
export function isValidArrayItemType(value, allowThese = []) {
  if (allowThese.length > 0) {
    return isArrayItemTypeAllowed(value, allowThese)
  }

  if (!value) {
    return false;
  }

  if (isInfinity(value)) {
    return false;
  }

  if (value === -Infinity) {
    return false;
  }

  if (isObject(value) && !isValidObject(value)) {
    return false;
  }
  
  return true
}

export function isArrayItemTypeAllowed(value, allowedTypes) {
  let isItemTypeAllowed = false

  if (allowedTypes.length === 1) {
    isItemTypeAllowed = typeof value === allowedTypes[0]
  }
  else {
    let count = 0
    while (!isItemTypeAllowed && count < allowedTypes.length) {
      isItemTypeAllowed = typeof value === allowedTypes[count]
      count++
    }
  }

  return isItemTypeAllowed;
}