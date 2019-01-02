import {
  isValidArray,
  isValidArrayItemType,
  isArrayItemTypeAllowed,
} from '../src/arrays'

describe('arrays', () => {

  describe('isValidArray', () => {

    it ('must return false if a non-valid array is passes', () => {
      expect(isValidArray()).toBeFalsy();
      expect(isValidArray([])).toBeFalsy();
      expect(isValidArray(undefined)).toBeFalsy();
      expect(isValidArray(null)).toBeFalsy();
      expect(isValidArray(NaN)).toBeFalsy();
      expect(isValidArray(Infinity)).toBeFalsy();
      expect(isValidArray(-Infinity)).toBeFalsy();
      expect(isValidArray([undefined, 1])).toBeFalsy();
      expect(isValidArray([null, 1])).toBeFalsy();
      expect(isValidArray([NaN, 1])).toBeFalsy();
      expect(isValidArray([Infinity, 1])).toBeFalsy();
      expect(isValidArray([-Infinity, 1])).toBeFalsy();
      expect(isValidArray([{}, 1])).toBeFalsy();
    })

    it ('must return true if a valid array is passed', () => {
      expect(isValidArray([1])).toBeTruthy();
      expect(isValidArray([1, 2, 3])).toBeTruthy();
      expect(isValidArray(['12', 'hi', arg => arg,])).toBeTruthy();
      expect(isValidArray([{id: 1}, 1])).toBeTruthy();
    })
  })

  describe('isValidArrayItemType', () => {
    it ('must return true if a valid array item type is passed', () => {
      expect(isValidArrayItemType(1)).toBeTruthy();
      expect(isValidArrayItemType(10.0)).toBeTruthy();
      expect(isValidArrayItemType({user: ''})).toBeTruthy();
      expect(isValidArrayItemType(true)).toBeTruthy();
    })

    it ('must return false if a non-valid array item type is passed', () => {
      expect(isValidArrayItemType()).toBeFalsy();
      expect(isValidArrayItemType([])).toBeFalsy();
      expect(isValidArrayItemType(null)).toBeFalsy();
      expect(isValidArrayItemType(NaN)).toBeFalsy();
      expect(isValidArrayItemType(Infinity)).toBeFalsy();
      expect(isValidArrayItemType(-Infinity)).toBeFalsy();
      expect(isValidArrayItemType([undefined, 1])).toBeFalsy();
      expect(isValidArrayItemType([null, 1])).toBeFalsy();
      expect(isValidArrayItemType([NaN, 1])).toBeFalsy();
      expect(isValidArrayItemType([Infinity, 1])).toBeFalsy();
      expect(isValidArrayItemType([-Infinity, 1])).toBeFalsy();
      expect(isValidArrayItemType([{}, 1])).toBeFalsy();
    })

  })

  describe('isArrayItemTypeAllowed', () => {
    const assertArrayItemTypeAllowed = (condition = false, allowedTypes) => {
      expect(isArrayItemTypeAllowed(1, allowedTypes)).toBe(condition);
      expect(isArrayItemTypeAllowed(Infinity, allowedTypes)).toBe(condition);
      expect(isArrayItemTypeAllowed(-Infinity, allowedTypes)).toBe(condition);
      expect(isArrayItemTypeAllowed(NaN, allowedTypes)).toBe(condition);
      expect(isArrayItemTypeAllowed('hi', allowedTypes)).toBe(condition);
      expect(isArrayItemTypeAllowed(null, allowedTypes)).toBe(condition);
      expect(isArrayItemTypeAllowed(undefined, allowedTypes)).toBe(condition);
    }
    it ('must return true if passed item type is in the allowed list', () => {
      const customAllowedTypes = ['number', 'string', 'object', 'undefined', 'date']
      const mustReturn = true
      assertArrayItemTypeAllowed(mustReturn, customAllowedTypes);
    })

    it ('must return false if passed item type is not in the allowed list', () => {
      const customAllowedTypes = []
      const mustReturn = false
      assertArrayItemTypeAllowed(mustReturn, customAllowedTypes);
    })

    it ('must return false if no types are allowed', () => {
      const customAllowedTypes = undefined
      const mustReturn = false
      assertArrayItemTypeAllowed(mustReturn, customAllowedTypes);
    })

    it ('must return true if the only one type passed is allowed', () => {
      const customAllowedTypes = ['string']
      expect(isArrayItemTypeAllowed('hi!', customAllowedTypes)).toBe(true);
    })

    it ('must return false if the only one type passed is not allowed', () => {
      const customAllowedTypes = ['string']
      expect(isArrayItemTypeAllowed(123, customAllowedTypes)).toBe(false);
    })
  })

  describe('isPerformaticArray', () => {
  })

})
