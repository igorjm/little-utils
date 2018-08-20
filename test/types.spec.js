import { isObject } from '../src/types'

describe('types', () => {

  describe('object', () => {
    it('must return true if an object is passed', () => {
      expect(isObject({})).toBeTruthy()
    })

    it('must return false if an non-object is passed', () => {
      expect(isObject('')).toBeFalsy()
      expect(isObject(0)).toBeFalsy()
      expect(isObject(null)).toBeFalsy()
      expect(isObject(undefined)).toBeFalsy()
      expect(isObject([])).toBeFalsy()
      expect(isObject(true)).toBeFalsy()
      expect(isObject(NaN)).toBeFalsy()
    })
  })

})