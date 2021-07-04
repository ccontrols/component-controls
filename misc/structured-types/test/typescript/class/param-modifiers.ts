export class ParameterModifiers {
  /**
   * constructor implementation
   * @param x x coordinate
   * @param y y coordinate
   * @param z z coordinate
   */
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number,
  ) {
    // No body necessary
  }
}
