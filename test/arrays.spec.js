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
    it ('must return true if passed item type is in the allowed list', () => {
      const customAllowedTypes = ['number', 'string', 'object', 'undefined']
      expect(isArrayItemTypeAllowed(1, customAllowedTypes)).toBeTruthy();
      expect(isArrayItemTypeAllowed(Infinity, customAllowedTypes)).toBeTruthy();
      expect(isArrayItemTypeAllowed(-Infinity, customAllowedTypes)).toBeTruthy();
      expect(isArrayItemTypeAllowed(NaN, customAllowedTypes)).toBeTruthy();
      expect(isArrayItemTypeAllowed('hi', customAllowedTypes)).toBeTruthy();
      expect(isArrayItemTypeAllowed(null, customAllowedTypes)).toBeTruthy();
      expect(isArrayItemTypeAllowed(undefined, customAllowedTypes)).toBeTruthy();
    })

    it ('must return false if passed item type is not in the allowed list', () => {
      const customAllowedTypes = []
      expect(isArrayItemTypeAllowed(1, customAllowedTypes)).toBeFalsy();
      expect(isArrayItemTypeAllowed(Infinity, customAllowedTypes)).toBeFalsy();
      expect(isArrayItemTypeAllowed(-Infinity, customAllowedTypes)).toBeFalsy();
      expect(isArrayItemTypeAllowed(NaN, customAllowedTypes)).toBeFalsy();
      expect(isArrayItemTypeAllowed('hi', customAllowedTypes)).toBeFalsy();
      expect(isArrayItemTypeAllowed(null, customAllowedTypes)).toBeFalsy();
      expect(isArrayItemTypeAllowed(undefined, customAllowedTypes)).toBeFalsy();
    })
  })

  describe('isPerformaticArray', () => {
  })

})