import { parseCode } from '../../src/index';
describe('array', () => {
  it('array of strings const', () => {
    const results = parseCode(`
interface Internal {
  m: string;
}    
/**
 * type array of interface type
 * @deprecated
 */
export type arrType = Internal[];        
`);
    expect(results).toEqual({
      arrType: {
        deprecated: 'yes',
        description: 'type array of interface type',
        kind: 15,
        properties: [
          {
            kind: 20,
            index: {
              kind: 2,
            },
            type: {
              displayName: 'Internal',
              kind: 14,
              properties: [
                {
                  kind: 1,
                  displayName: 'm',
                },
              ],
            },
          },
        ],
        displayName: 'arrType',
      },
    });
  });
  it('array of strings', () => {
    const results = parseCode(`
/**
 * const array of strings
 */
export const names = ['Alice', 'Bob', 'Eve'];
  `);
    expect(results).toEqual({
      names: {
        description: 'const array of strings',
        kind: 16,
        properties: [
          {
            kind: 20,
            index: {
              kind: 2,
            },
          },
        ],
        displayName: 'names',
        value: [
          {
            kind: 1,
            value: 'Alice',
          },
          {
            kind: 1,
            value: 'Bob',
          },
          {
            kind: 1,
            value: 'Eve',
          },
        ],
      },
    });
  });
  it('array new', () => {
    const results = parseCode(`
export const ArrayNew = new Array('red', 'green', 'blue');
`);
    expect(results).toEqual({
      ArrayNew: {
        kind: 0,
        properties: [
          {
            kind: 1,
            value: 'red',
          },
          {
            kind: 1,
            value: 'green',
          },
          {
            kind: 1,
            value: 'blue',
          },
        ],
        displayName: 'ArrayNew',
      },
    });
  });
  it('array keyword', () => {
    const results = parseCode(`
export const ArrayKeyword: Array<string> = ['test'];
`);
    expect(results).toEqual({
      ArrayKeyword: {
        kind: 16,
        properties: [
          {
            kind: 20,
            index: {
              kind: 2,
            },
          },
        ],
        displayName: 'ArrayKeyword',
        value: [
          {
            kind: 1,
            value: 'test',
          },
        ],
      },
    });
  });

  it('array of strings const', () => {
    const results = parseCode(`
/**
 * this is an array of strings
 */
export const arrString: string[] = ['one', 'two'];
    
`);
    expect(results).toEqual({
      arrString: {
        description: 'this is an array of strings',
        kind: 16,
        properties: [
          {
            kind: 20,
            index: {
              kind: 2,
            },
          },
        ],
        displayName: 'arrString',
        value: [
          {
            kind: 1,
            value: 'one',
          },
          {
            kind: 1,
            value: 'two',
          },
        ],
      },
    });
  });
});
