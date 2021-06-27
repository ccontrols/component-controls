/**
 * base type
 */
type T = {
  /**
   * base type member property
   */
  m: string;
};

/**
 * extended type
 */

export type ExtendT = T & {
  /**
   * own member
   */
  honey: boolean;
};
