/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {Promise} Promise object represents the sum of a and b
 */
export function sumAsync(a, b) {
  return new Promise(function(resolve, reject) {
    resolve(a + b);
  });
}
