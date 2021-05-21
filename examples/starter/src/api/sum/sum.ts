/**
 * sum api function
 * @param a first parameter to add
 * @param b second parameter to add
 * @returns the sum of the two parameters
 */
export const sum = (
  a: number,
  b: number,
): {
  a: number;
  b: number;
  result: number;
} => ({ a, b, result: a + b });
