import { isString } from './types'
/**
 * Valid date criterias:
 * 1. must be defined
 * 2. must be instance of Date class
 * 3. must be equal to today or further
 * @param {} value 
 */
export function isValidDate(value) {
}

/**
 * Valid array criterias:
 * 1. types.isArray returns true
 * 2. value is higher than 0 (zero)
 * @param {} value 
 */
export function isValidArray(value, minimum = 0) {
}

/**
 * Valid string criterias:
 * 1. types.isString
 * 2. length higher than 0 (zero) after .trim()
 * @param {*} value 
 */
export function isValidString(value) {
}

/**
 * Valid key number criterias:
 * 1. types.isNumber
 * 2. keyboardkeys (we need to create a constant for it) contains passed value 
 * @param {*} value 
 */
export function isValidKeyNumber(value) {
}

/**
 * Valid age (a humans's age) criterias:
 * 1. types.isNumber
 * 2. types.isInteger
 * 3. is higher than 0 (zero)
 * 4. is less than 130
 * @param {*} value 
 */
export function isValidHumanAge(value) {
}