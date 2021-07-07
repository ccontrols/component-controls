/**
 * An optional parameter (using JSDoc syntax)
 * @param {string} [somebody] - Somebody's name.
 */
export function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  }
  alert('Hello ' + somebody);
}
