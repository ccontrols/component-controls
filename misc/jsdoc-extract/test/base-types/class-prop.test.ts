import { parseCode } from '../../src/index';
describe('class', () => {
  it('getters/setters', () => {
    const results = parseCode(`
export class ClassGetters {
  /**
   * member description
   */
  _length = 0;
  /**
   * getter description
   */
  get length(): number {}
  /**
   * setter description
   *
   * @param value the new value
   */
  set length(value: number) {}
}
`);
    expect(results).toEqual({
      ClassGetters: {
        displayName: 'ClassGetters',
        kind: 13,
        properties: [
          {
            description: 'member description',
            kind: 2,
            displayName: '_length',
            value: 0,
          },
          {
            description: 'getter description',
            kind: 22,
            parameters: [],
            returns: {
              kind: 2,
            },
          },
          {
            parameters: [
              {
                kind: 2,
                displayName: 'value',
              },
            ],
            description: 'setter description',
            kind: 23,
          },
        ],
      },
    });
  });
  it('initialized prop', () => {
    const results = parseCode(`
export class GreeterInitializedMembers {
  readonly name: string = 'world';
  err(): void {
    console.log(this.name);
  }
}
`);
    expect(results).toEqual({
      GreeterInitializedMembers: {
        displayName: 'GreeterInitializedMembers',
        kind: 13,
        properties: [
          {
            kind: 1,
            readonly: true,
            displayName: 'name',
            value: 'world',
          },
          {
            displayName: 'err',
            kind: 11,
            parameters: [],
            returns: {
              kind: 12,
            },
          },
        ],
      },
    });
  });

  it('constructor', () => {
    const results = parseCode(`
export class ClassWithConstrunctor {
  name: string;

  /**
   * constructor description
   */
  constructor(x?: string) {
    this.name = x;
  }
}
`);
    expect(results).toEqual({
      ClassWithConstrunctor: {
        displayName: 'ClassWithConstrunctor',
        kind: 13,
        properties: [
          {
            kind: 1,
            displayName: 'name',
          },
          {
            description: 'constructor description',
            kind: 21,
            parameters: [
              {
                kind: 1,
                optional: true,
                displayName: 'x',
              },
            ],
          },
        ],
      },
    });
  });
  it('simple class', () => {
    const results = parseCode(`
/**
 * this is a class with two members
 */
export class Point {
  /**
   * COORDINATE X
   */
  x: number;
  /**
   * COORDINATE Y
   */
  y: number;
}
`);
    expect(results).toEqual({
      Point: {
        description: 'this is a class with two members',
        displayName: 'Point',
        kind: 13,
        properties: [
          {
            description: 'COORDINATE X',
            kind: 2,
            displayName: 'x',
          },
          {
            description: 'COORDINATE Y',
            kind: 2,
            displayName: 'y',
          },
        ],
      },
    });
  });
});
