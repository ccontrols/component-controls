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

type ExtendT = T & {
  /**
   * own member
   */
  honey: boolean;
};

/**
 * internal interface with one member
 */

interface Internal {
  /**
   * string type member
   */

  m: string;
}
/**
 * interface extending another one
 */

interface Bear extends Internal, Home {
  /**
   * boolean type member
   */

  honey: boolean;
}
/**
 * exported function
 */

export function paintHomeyBear({ m, honey = true }: ExtendT): Bear {
  return { honey, m };
}
