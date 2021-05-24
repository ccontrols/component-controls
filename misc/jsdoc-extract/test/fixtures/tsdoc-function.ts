/**
 * sum api function
 * @remarks
 * Unlike the summary, the remarks block may contain lengthy documentation content.
 * The remarks should not restate information from the summary, since the summary section
 * will always be displayed wherever the remarks section appears.  Other sections
 * (e.g. an `@example` block) will be shown after the remarks section.
 *
 * @param {number} a first parameter to add
 * @param b second parameter to add
 * @returns the sum of the two parameters
 *
 * @example
 *
 * ```ts
 * import { sum } from '@component-controls/jsdoc-extract';
 *
 * expect(sum(1, 2)).toMatchObject({ a: 1, b: 2, result: 3});
 * ```
 */
export const sum = (
  a: number,
  b: number = 1,
): {
  a: number;
  b: number;
  result: number;
} => ({ a, b, result: a + b });
