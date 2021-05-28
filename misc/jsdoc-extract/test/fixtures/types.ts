/**
 * this is a string
 */
export const s: string = 'a';

/**
 * this is a number
 */
export const n: number = 3.14;

/**
 * this is a false
 */
export const b = false;

/**
 * this is a true
 */
export const t = true;

/**
 * this is an undefined boolean value
 */
let bool: boolean;

export { bool };

/**
 * this is any type
 */
export const a: any = 'as';

/**
 * this is unknown type
 */
export const u: unknown = undefined;

/**
 * this is type
 */
export type T = {
  /**
   * type member property
   */
  m: string;
};

/**
 * this is interface
 * multiple lines
 */
export interface I {
  /**
   * interface member property
   */
  m: string;
}

/**
 * this is an array of strings
 * @deprecated
 */
export const arrString: string[] = ['one', 'two'];

interface Internal {}

/**
 * type array of interface type
 */
export type arrType = Internal[];

/**
 * strings union
 */
export type union = 'this' | 1 | false | null | undefined;

/**
 * greeting function
 * @param name string type parameters
 */
export function greet(name: string) {
  console.log(name);
}

/**
 * arrow greeting function
 */
export const arrowGreet = (
  /**
   * name parameter inline description
   */
  name: string,
): void => {
  console.log(name);
};
