import { parseCode } from '../../src/index';
describe('enum', () => {
  it('string enum', () => {
    const results = parseCode(`
export enum StringEnums {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
`);
    expect(results).toEqual({
      StringEnums: {
        displayName: 'StringEnums',
        kind: 5,
        properties: [
          {
            displayName: 'Up',
            kind: 1,
            value: 'UP',
          },
          {
            displayName: 'Down',
            kind: 1,
            value: 'DOWN',
          },
          {
            displayName: 'Left',
            kind: 1,
            value: 'LEFT',
          },
          {
            displayName: 'Right',
            kind: 1,
            value: 'RIGHT',
          },
        ],
      },
    });
  });
  it('initialized enum', () => {
    const results = parseCode(`
/**
 * this is an enum with an initialized element
 */
export enum InitializedEnum {
  /**
   * enum starts at 1
   */
  Up = 1,
  /**
   * second element
   */
  Down,
  Left,
  Right,
}
`);
    expect(results).toEqual({
      InitializedEnum: {
        description: 'this is an enum with an initialized element',
        kind: 5,
        displayName: 'InitializedEnum',
        properties: [
          {
            description: 'enum starts at 1',
            displayName: 'Up',
            kind: 2,
            value: 1,
          },
          {
            description: 'second element',
            displayName: 'Down',
          },
          {
            displayName: 'Left',
          },
          {
            displayName: 'Right',
          },
        ],
      },
    });
  });
});
