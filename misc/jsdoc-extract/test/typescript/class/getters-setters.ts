export class ClassGetters {
  /**
   * member description
   */
  _length = 0;
  /**
   * getter description
   */
  get length(): number {
    return this._length;
  }
  /**
   * setter description
   *
   * @param value the new value
   */
  set length(value: number) {
    this._length = value;
  }
}
