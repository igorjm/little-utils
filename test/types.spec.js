import {
  isObject,
  isFunction,
  isUndefined,
  isArray,
  isNotArray,
} from '../src/types'

describe('types', () => {

  describe('object', () => {
    it('must return true if an object is passed', () => {
      expect(isObject({})).toBeTruthy()
      expect(isObject(Object.create(function Test() {}))).toBeTruthy()
      expect(isObject(new Date())).toBeTruthy()
    })

    it('must return false if an non-object is passed', () => {
      expect(isObject('')).toBeFalsy()
      expect(isObject(0)).toBeFalsy()
      expect(isObject(null)).toBeFalsy()
      expect(isObject(undefined)).toBeFalsy()
      expect(isObject(true)).toBeFalsy()
      expect(isObject(NaN)).toBeFalsy()
      expect(isObject(arg => arg)).toBeFalsy()
      expect(isObject(() => {})).toBeFalsy()
      expect(isObject(function() {})).toBeFalsy()
      expect(isObject(function func() {})).toBeFalsy()
      expect(isObject(function*() {})).toBeFalsy()
    })
  })

  describe('function', () => {
    it('must return true if an function is passed', () => {
      expect(isFunction(arg => arg)).toBeTruthy()
      expect(isFunction(() => {})).toBeTruthy()
      expect(isFunction(function() {})).toBeTruthy()
      expect(isFunction(function func() {})).toBeTruthy()
      expect(isFunction(function*() {})).toBeTruthy()
    })

    it('must return false if an non-function is passed', () => {
      expect(isFunction('')).toBeFalsy()
      expect(isFunction(0)).toBeFalsy()
      expect(isFunction(null)).toBeFalsy()
      expect(isFunction(undefined)).toBeFalsy()
      expect(isFunction([])).toBeFalsy()
      expect(isFunction(true)).toBeFalsy()
      expect(isFunction(NaN)).toBeFalsy()
      expect(isFunction()).toBeFalsy()
      expect(isFunction({})).toBeFalsy()
      expect(isFunction(Object.create(function Test() {}))).toBeFalsy()
      expect(isFunction(new Date())).toBeFalsy()
    })
  })

  describe('undefined', () => {
    it('must return true if an undefined value is passed', () => {
      expect(isUndefined()).toBeTruthy()
      expect(isUndefined(undefined)).toBeTruthy()
      expect(isUndefined((arg => arg)())).toBeTruthy()
    })

    it('must return false if a defined value is passed', () => {
      expect(isUndefined('')).toBeFalsy()
      expect(isUndefined(0)).toBeFalsy()
      expect(isUndefined(null)).toBeFalsy()
      expect(isUndefined([])).toBeFalsy()
      expect(isUndefined(true)).toBeFalsy()
      expect(isUndefined(NaN)).toBeFalsy()
      expect(isUndefined({})).toBeFalsy()
      expect(isUndefined(Object.create(function Test() {}))).toBeFalsy()
      expect(isUndefined(new Date())).toBeFalsy()
    })
  })

  describe('array', () => {
    it ('must return false if non-array is passed', () => {
      expect(isArray('')).toBeFalsy()
      expect(isArray(0)).toBeFalsy()
      expect(isArray(null)).toBeFalsy()
      expect(isArray(true)).toBeFalsy()
      expect(isArray(NaN)).toBeFalsy()
      expect(isArray({})).toBeFalsy()
      expect(isArray(Object.create(function Test() {}))).toBeFalsy()
      expect(isArray(new Date())).toBeFalsy()
    })

    it ('must return true if an array is passed', () => {
      expect(isArray([])).toBeTruthy()
      expect(isArray([1, 2, 3])).toBeTruthy()
      expect(isArray(new Array())).toBeTruthy()
      expect(isArray([].map(item => item))).toBeTruthy()
      expect(isArray([].filter(item => item))).toBeTruthy()
      expect(isArray(Object.keys([1, 2, 3]))).toBeTruthy()
      expect(isArray(/d(b+)(d)/i.exec('cdbBdbsbz'))).toBeTruthy()
      expect(isArray((function() {
        const array = [1, 2, 3]
        return [...array]
      })())).toBeTruthy()
      expect(isArray([].map(item => item))).toBeTruthy()
    })
  })

  describe('not array', () => {
    it ('must return false if non-array is passed', () => {
      expect(isNotArray('')).toBeTruthy()
      expect(isNotArray(0)).toBeTruthy()
      expect(isNotArray(null)).toBeTruthy()
      expect(isNotArray(true)).toBeTruthy()
      expect(isNotArray(NaN)).toBeTruthy()
      expect(isNotArray({})).toBeTruthy()
      expect(isNotArray(Object.create(function Test() {}))).toBeTruthy()
      expect(isNotArray(new Date())).toBeTruthy()
    })

    it ('must return true if an array is passed', () => {
      expect(isNotArray([])).toBeFalsy()
      expect(isNotArray([1, 2, 3])).toBeFalsy()
      expect(isNotArray(new Array())).toBeFalsy()
      expect(isNotArray([].map(item => item))).toBeFalsy()
      expect(isNotArray([].filter(item => item))).toBeFalsy()
      expect(isNotArray(Object.keys([1, 2, 3]))).toBeFalsy()
      expect(isNotArray(/d(b+)(d)/i.exec('cdbBdbsbz'))).toBeFalsy()
      expect(isNotArray((function() {
        const array = [1, 2, 3]
        return [...array]
      })())).toBeFalsy()
      expect(isNotArray([].map(item => item))).toBeFalsy()
    })
  })
})