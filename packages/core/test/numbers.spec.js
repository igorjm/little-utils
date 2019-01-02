import { isValidNumber } from '../src/numbers'
describe('numbers', () => {
  describe('isValidNumber', () => {

    it('must return false if a non-valid number is passed', () => {
      expect(isValidNumber('a')).toBe(false)
      expect(isValidNumber(Infinity)).toBe(false)
      expect(isValidNumber(-Infinity)).toBe(false)
      expect(isValidNumber(NaN)).toBe(false)
      expect(isValidNumber(0)).toBe(false)
    })

    it('must return true if a valid number is passed', () => {
      expect(isValidNumber(123)).toBe(true)
      expect(isValidNumber(123.10)).toBe(true)
    })

  })
})
