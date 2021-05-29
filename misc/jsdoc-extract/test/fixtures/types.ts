/**
 * this is a string
 */
export const s = 'a';

/**
 * this is a number
 */
export const n = 3.14;

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
 * this is an undefined object
 */
export const obj: object = undefined;

/**
 * this is an initialized object
 */
export const initializedObj: object = { a: 12, b: 'test' };

/**
 * this is type
 */
export type T = {
  /**
   * type member property
   */
  m: string;
};

type ExtendT = T & {
  /**
   * honey
   */
  honey: boolean;
};

export type IndexT = {
  readonly [index: string]: { a: Bear; b: null };
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
interface Internal {}

export interface Bear extends I {
  honey: boolean;
}

export interface Home {
  readonly resident: { name: string; age: number };
}

export interface IndexInterface {
  [index: number]: string;
}
/**
 * this is an array of strings
 * @deprecated
 */
export const arrString: string[] = ['one', 'two'];

/**
 * type array of interface type
 */
export type arrType = Internal[];

/**
 * const array of strings
 */
export const names = ['Alice', 'Bob', 'Eve'];

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

/**
 * print coordinates
 * @param pt object parameter
 */

export function printCoord(pt: {
  /**
   * x coordinate
   */
  x: number;
  /**
   * optional y coordinate
   */
  y?: number;
}): void {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

export function printId(id: number | string): void {
  console.log('Your ID is: ' + id);
}

export function paintHomeyBear({ m, honey = true }: ExtendT): Bear {
  return { honey, m };
}
