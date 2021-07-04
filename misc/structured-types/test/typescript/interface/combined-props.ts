export interface StringNumberPair {
  /**
   *  specialized properties
   */
  length: 2;
  0: string;
  1: number;
  /**
   *  Other 'Array<string | number>' members...
   */
  slice(start?: number, end?: number): Array<string | number>;
}
