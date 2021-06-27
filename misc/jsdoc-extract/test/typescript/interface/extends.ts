interface Home {
  resident: { name: string; age: number };
}
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

export interface Bear extends Internal, Home {
  /**
   * boolean type member
   */

  honey: boolean;
}
