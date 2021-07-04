/** type A */
type A = {
  a: string;
};
/**
 * type B
 */

type B = {
  b: number;
};
/** intersect type */
export type Intersect = A & B;
