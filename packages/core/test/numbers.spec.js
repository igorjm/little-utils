import { isValidNumber } from '../src/numbers';

describe('numbers', () => {
  describe('isValidNumber', () => {
    it('must return true if passed value is a valid number', () => {
      const number = 123;
      expect(isValidNumber(number)).toBe(true);
    })
    it('must return false if passed value is not a valid number', () => {
      expect(isValidNumber('abc')).toBe(false);
      expect(isValidNumber(NaN)).toBe(false);
      expect(isValidNumber(Infinity)).toBe(false);
      expect(isValidNumber(-Infinity)).toBe(false);
    })
  })
})