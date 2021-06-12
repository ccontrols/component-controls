import { parseCode } from '../../src/index';
describe('function', () => {
  it('union parameter', () => {
    const results = parseCode(`
    const printId = (id: number | string): void => {}
    export { printId };
  `);
    expect(results).toEqual({
      printId: {
        displayName: 'printId',
        kind: 11,
        parameters: [
          {
            displayName: 'id',
            kind: 4,
            properties: [
              {
                kind: 2,
              },
              {
                kind: 1,
              },
            ],
          },
        ],
        returns: {
          kind: 12,
        },
      },
    });
  });

  it('object parameter', () => {
    const results = parseCode(`
    /**
     * print coordinates
     * @param pt object parameter
     */
  
    export function printCoord(pt: {
      /**
       * x coordinate
       */
      x: number;
      /**
       * optional y coordinate
       */
      y?: number;
    }): void {}
`);
    expect(results).toEqual({
      printCoord: {
        parameters: [
          {
            displayName: 'pt',
            description: 'object parameter',
            kind: 15,
            properties: [
              {
                description: 'x coordinate',
                kind: 2,
                displayName: 'x',
              },
              {
                description: 'optional y coordinate',
                kind: 2,
                optional: true,
                displayName: 'y',
              },
            ],
          },
        ],
        description: 'print coordinates',
        displayName: 'printCoord',
        kind: 11,
        returns: {
          kind: 12,
        },
      },
    });
  });
  it('jsdoc parameter', () => {
    const results = parseCode(`
    /**
     * greeting function
     * @param name string type parameters
     */
    export function greet(name: string) {}
`);
    expect(results).toEqual({
      greet: {
        parameters: [
          {
            displayName: 'name',
            description: 'string type parameters',
            kind: 1,
          },
        ],
        description: 'greeting function',
        displayName: 'greet',
        kind: 11,
      },
    });
  });
  it('arrow fn jsdoc', () => {
    const results = parseCode(`
/**
 * arrow greeting function
 */
export const arrowGreet = (
  /**
   * name parameter inline description
   */
  name: string,
): void => {};
`);
    expect(results).toEqual({
      arrowGreet: {
        description: 'arrow greeting function',
        displayName: 'arrowGreet',
        kind: 11,
        parameters: [
          {
            description: 'name parameter inline description',
            kind: 1,
            displayName: 'name',
          },
        ],
        returns: {
          kind: 12,
        },
      },
    });
  });
});
