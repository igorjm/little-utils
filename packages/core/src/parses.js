// @flow

function parseStringToNumber(value: string): number {
  let parsedValue: number = 0;
  if (value.length > 0) {
    parsedValue = parseInt(value);
  }
  return parsedValue
}
