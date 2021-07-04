export class ArrowFunctionClass {
  /**
   * name value initialzied
   */
  name = 'MyClass';
  /**
   * name accessor
   * @returns a string value
   */
  getName = (): string => {
    return this.name;
  };
}
