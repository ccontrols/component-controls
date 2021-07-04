export class ClassIndexSignature {
  /**
   * class index
   */
  [s: string]: boolean | ((s: string) => boolean);

  /**
   *
   * @param s input string
   * @returns {boolean} returns the value
   */
  check(s: string) {
    return this[s] as boolean;
  }
}
