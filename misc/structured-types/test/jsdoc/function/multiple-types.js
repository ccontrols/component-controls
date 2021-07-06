/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @param {boolean} retArr If set to true, the function will return an array
 * @returns {(number|Array)} Sum of a and b or an array that contains a, b and the sum of a and b.
 */
export function sum(a, b, retArr) {
  if (retArr) {
    return [a, b, a + b];
  }
  return a + b;
}
