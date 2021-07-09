/**
 * @param {string} [somebody=John Doe] - Somebody's name.
 */
export function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  }
  alert('Hello ' + somebody);
}
