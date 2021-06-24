import { parseCode } from '../../src/index';
describe('array', () => {
  it('array keyword', () => {
    const results = parseCode(`
export const ArrayKeyword: Array<string> = ['test'];
`);
    expect(results).toEqual({
      ArrayKeyword: {
        displayName: 'ArrayKeyword',
        kind: 16,
        properties: [
          {
            kind: 1,
          },
        ],
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
        displayName: 'arrString',
        kind: 16,
        properties: [
          {
            kind: 1,
          },
        ],
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
        description: 'this is an array of strings',
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
        displayName: 'names',
        kind: 16,
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
        description: 'const array of strings',
      },
    });
  });
  it('array of objects', () => {
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
        displayName: 'arrType',
        kind: 16,
        properties: [
          {
            kind: 14,
            properties: [
              {
                kind: 1,
                displayName: 'm',
              },
            ],
            displayName: 'Internal',
          },
        ],
        deprecated: 'yes',
        description: 'type array of interface type',
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
});
