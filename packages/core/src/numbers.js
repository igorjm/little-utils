// @flow
import { isNumber, isInfinity } from './types';

export function isValidNumber(number: number): boolean {
  if (!isNumber(number)) {
    return false;
  }

  if (isInfinity(number)) {
    return false;
  }

  if (number === -Infinity) {
    return false;
  }

  return true;
}
