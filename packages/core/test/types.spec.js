import {
  isObject,
  isFunction,
  isInfinity,
  isUndefined,
  isNumber,
  isString,
  isNotString,
  isArray,
  isNotArray,
  isPromise,
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

  describe('string', () => {
    it ('must return false if an non-string is passed', () => {
      expect(isString({})).toBeFalsy()
      expect(isString(0)).toBeFalsy()
      expect(isString(null)).toBeFalsy()
      expect(isString(undefined)).toBeFalsy()
      expect(isString(true)).toBeFalsy()
      expect(isString(NaN)).toBeFalsy()
      expect(isString(arg => arg)).toBeFalsy()
      expect(isString(() => {})).toBeFalsy()
      expect(isString(function() {})).toBeFalsy()
      expect(isString(function func() {})).toBeFalsy()
      expect(isString(function*() {})).toBeFalsy()
    })

    it ('must return true if a string is passed', () => {
      expect(isString('')).toBeTruthy()
      expect(isString(new String('').toString())).toBeTruthy()
      expect(isString('Hi!')).toBeTruthy()
      expect(isString([].toString())).toBeTruthy()
    })
  })

  describe('not string', () => {
    it ('must return true if an non-string is passed', () => {
      expect(isNotString({})).toBeTruthy()
      expect(isNotString(0)).toBeTruthy()
      expect(isNotString(null)).toBeTruthy()
      expect(isNotString(undefined)).toBeTruthy()
      expect(isNotString(true)).toBeTruthy()
      expect(isNotString(NaN)).toBeTruthy()
      expect(isNotString(arg => arg)).toBeTruthy()
      expect(isNotString(() => {})).toBeTruthy()
      expect(isNotString(function() {})).toBeTruthy()
      expect(isNotString(function func() {})).toBeTruthy()
      expect(isNotString(function*() {})).toBeTruthy()
    })

    it ('must return false if a string is passed', () => {
      expect(isNotString('')).toBeFalsy()
      expect(isNotString(new String('').toString())).toBeFalsy()
      expect(isNotString('Hi!')).toBeFalsy()
      expect(isNotString([].toString())).toBeFalsy()
    })
  })

  describe('promise', () => {
    it ('must return false if an non-promise is passed', () => {
      expect(isPromise({})).toBeFalsy()
      expect(isPromise(0)).toBeFalsy()
      expect(isPromise(null)).toBeFalsy()
      expect(isPromise(undefined)).toBeFalsy()
      expect(isPromise(true)).toBeFalsy()
      expect(isPromise(NaN)).toBeFalsy()
      expect(isPromise(arg => arg)).toBeFalsy()
      expect(isPromise(() => {})).toBeFalsy()
      expect(isPromise(function() {})).toBeFalsy()
      expect(isPromise(function func() {})).toBeFalsy()
      expect(isPromise(function*() {})).toBeFalsy()
    })

    it ('must return true if a promise is passed', () => {
      expect(isPromise(new Promise(resolve => resolve()))).toBeTruthy()
    })
  })

  describe('number', () => {
    it ('must return false if an non-number is passed', () => {
      expect(isNumber({})).toBeFalsy()
      expect(isNumber(null)).toBeFalsy()
      expect(isNumber(undefined)).toBeFalsy()
      expect(isNumber(true)).toBeFalsy()
      expect(isNumber(NaN)).toBeFalsy()
      expect(isNumber(arg => arg)).toBeFalsy()
      expect(isNumber(() => {})).toBeFalsy()
      expect(isNumber(function() {})).toBeFalsy()
      expect(isNumber(function func() {})).toBeFalsy()
      expect(isNumber(function*() {})).toBeFalsy()
      expect(isNumber('200000001a')).toBeFalsy()
      expect(isNumber(0 / 0)).toBeFalsy() // 0 / 0 returns NaN
    })

    it ('must return true if a number is passed', () => {
      expect(isNumber(1)).toBeTruthy()
      expect(isNumber(10.000)).toBeTruthy()
      expect(isNumber(0.1)).toBeTruthy()
      expect(isNumber(10.1 / 2)).toBeTruthy()
      expect(isNumber(2e64)).toBeTruthy()
    })

    it ('must return false if a finit number is passed', () => {
      expect(isInfinity({})).toBeFalsy()
      expect(isInfinity(null)).toBeFalsy()
      expect(isInfinity(undefined)).toBeFalsy()
      expect(isInfinity(true)).toBeFalsy()
      expect(isInfinity(NaN)).toBeFalsy()
      expect(isInfinity(arg => arg)).toBeFalsy()
      expect(isInfinity(() => {})).toBeFalsy()
      expect(isInfinity(function() {})).toBeFalsy()
      expect(isInfinity(function func() {})).toBeFalsy()
      expect(isInfinity(function*() {})).toBeFalsy()
      expect(isInfinity('200000001a')).toBeFalsy()
      expect(isInfinity(0 / 0)).toBeFalsy() // 0 / 0 returns NaN
    })

    it ('must return true if an infinity number is passed', () => {
      expect(isInfinity(Math.pow(10, 1000))).toBeTruthy()
      expect(isInfinity(Infinity)).toBeTruthy()
    })
  })
})