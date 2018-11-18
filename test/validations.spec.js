import {
  isValidObject,
} from '../src/validations'

describe('validations', () => {
  describe('isValidObject', () => {
    
    it('must return false if an non-valid object is passed', () => {
      expect(isValidObject()).toBeFalsy();
      expect(isValidObject(undefined)).toBeFalsy();
      expect(isValidObject(null)).toBeFalsy();
      expect(isValidObject(Infinity)).toBeFalsy();
      expect(isValidObject(-Infinity)).toBeFalsy();
      expect(isValidObject()).toBeFalsy();
      expect(isValidObject({})).toBeFalsy();
    })
    
    it('must return true if a valid object is passed', () => {
      expect(isValidObject({id: 1, name: 'hi!'})).toBeTruthy();
    })

  })
})