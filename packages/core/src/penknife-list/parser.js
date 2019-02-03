function createKey(newKey, lastKey) {
  let key
  if (newKey <= lastKey) {
    key = lastKey + 1
  } else if (newKey <= 0) {
    key = 1
  } else {
    key = newKey
  }
  return key
}

/**
  if it is known that all items in array
  are not objects, use this function.
*/
export function parseNonObject(value, index, lastKey) {
  return {
      key: createKey(index, lastKey),
      value,
      original: value
    }
}

/**
  if it is known that all items in the list
  are objects, and:
  - their first attribute can be used as key
  - their second attribute can be used as value
  then parse it
 */
export function parseTrustworthyObject(item, lastKey) {
  const attributes = Object.keys(item);
  const key = createKey(item[attributes[0]], lastKey);
  return {
    key: createKey(key, lastKey),
    value: item[attributes[1]],
    original: { ...item }
  }
}

export default function parse(item, index, lastKey = 0) {
  if (typeof item !== 'object') {
    return parseNonObject(item, index, lastKey);
  }

  if (typeof item === 'object') {
    const keys = Object.keys(item)
    console.log(keys)

    // if object is empty stop here
    if (keys.length <= 0) {
      console.log('keys.length <= 0')
      return
    }

    let firstValue = item[keys[0]]

    // if object has only one attribute and it is undefined, the stop here
    if (keys.length === 1 && typeof firstValue === undefined) {
      console.log('keys.length === 1 && !item[keys[0]]')
      return
    }

    let secondValue = item[keys[1]]

    // if first attribute of item is a valid key candidate and second value is valid, parse item
    if (typeof firstValue === 'number' && firstValue > 0 && typeof secondValue !== undefined) {
      return {
        key: createKey(firstValue, lastKey),
        value: secondValue,
        original: { ...item }
      }
    }

    // if item is object but it's first attribute is not a valid key candidate, use first
    // value as value and create key from index
    return {
      key: createKey(index, lastKey),
      value: firstValue,
      original: { ...item }
    }
  }
}
