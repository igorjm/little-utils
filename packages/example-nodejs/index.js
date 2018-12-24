const { types } = require('@penknife/core');

console.log(types);

const someValue = "abc"

console.log(types.isObject(someValue))
console.log(types.isNumber(someValue))
