enum StringEnums {
  Up = 'UP',
}
export interface InterfaceWithEnumConstant {
  /**
   * kind is an enumm constant
   */
  kind: StringEnums.Up;
  /**
   * radius property
   */
  radius: number;
}
