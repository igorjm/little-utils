//@flow
import { isNumber, isInfinity } from './types';


/**
 *
 * @param {number} value
 * @param {array} exceptions
 */
export function isValidNumber(value: number): boolean {
  if (!value) {
    return false;
  }

  if (!isNumber(value)) {
    return false;
  }

  if (isInfinity(value)) {
    return false;
  }

  if (value === -Infinity) {
    return false;
  }

  return true
}
