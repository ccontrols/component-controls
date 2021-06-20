import { parseCode } from '../../src/index';
describe('function', () => {
  it('generic function parameter', () => {
    const results = parseCode(`
    interface GenericInterface<T> {
      m: T;
    }
    export function genericFunction<Type>(
      box: GenericInterface<Type>,
      newContents: Type,
    ): GenericInterface<Type> {}
`);
    expect(results).toEqual({
      genericFunction: {
        displayName: 'genericFunction',
        kind: 11,
        parameters: [
          {
            displayName: 'box',
            kind: 14,
            generics: [
              {
                displayName: 'Type',
              },
            ],
            type: {
              displayName: 'GenericInterface',
              kind: 14,
              generics: [
                {
                  displayName: 'T',
                },
              ],
              properties: [
                {
                  displayName: 'm',
                  kind: 15,
                  type: 'T',
                },
              ],
            },
          },
          {
            displayName: 'newContents',
            kind: 15,
            type: 'Type',
          },
        ],
        returns: {
          displayName: 'GenericInterface',
          kind: 14,
          generics: [
            {
              displayName: 'T',
            },
          ],
          properties: [
            {
              displayName: 'm',
              kind: 15,
              type: 'T',
            },
          ],
        },
        types: [
          {
            displayName: 'Type',
          },
        ],
      },
    });
  });
  it('react fc', () => {
    const results = parseCode(`
    import React, { FC } from 'react';
    interface Props {
      m?: string;
    }
    export const TypedInitializedFunction: FC<Props> = props => {};
`);
    expect(results).toEqual({
      TypedInitializedFunction: {
        displayName: 'TypedInitializedFunction',
        propParents: {
          FunctionComponent: {
            displayName: 'FunctionComponent',
            kind: 14,
            generics: [
              {
                displayName: 'P',
                type: 'P',
              },
            ],
            properties: [
              {
                kind: 4,
                properties: [
                  {
                    kind: 14,
                    displayName: 'ReactElement',
                    properties: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                      {
                        displayName: 'P',
                        kind: 15,
                      },
                      {
                        displayName: 'key',
                        kind: 4,
                        properties: [
                          {
                            kind: 4,
                            displayName: 'Key',
                            properties: [
                              {
                                kind: 1,
                              },
                              {
                                kind: 2,
                              },
                            ],
                          },
                          {
                            kind: 10,
                          },
                        ],
                      },
                    ],
                    generics: [
                      {
                        displayName: 'P',
                        type: 'P',
                      },
                      {
                        displayName: 'T',
                        type: 'T',
                      },
                    ],
                  },
                  {
                    kind: 10,
                  },
                ],
              },
              {
                optional: true,
                displayName: 'WeakValidationMap',
                kind: 15,
                generics: [
                  {
                    displayName: 'T',
                    type: 'T',
                  },
                ],
              },
              {
                optional: true,
                displayName: 'ValidationMap',
                kind: 15,
                generics: [
                  {
                    displayName: 'T',
                    type: 'T',
                  },
                ],
              },
              {
                optional: true,
                displayName: 'Partial',
                kind: 15,
                generics: [
                  {
                    displayName: 'T',
                    type: 'T',
                  },
                ],
              },
              {
                optional: true,
                displayName: 'displayName',
                kind: 1,
              },
            ],
          },
        },
        kind: 11,
        properties: [
          {
            optional: true,
            displayName: 'WeakValidationMap',
            kind: 15,
            generics: [
              {
                displayName: 'T',
                type: 'T',
              },
            ],
            parent: 'FunctionComponent',
          },
          {
            optional: true,
            displayName: 'ValidationMap',
            kind: 15,
            generics: [
              {
                displayName: 'T',
                type: 'T',
              },
            ],
            parent: 'FunctionComponent',
          },
          {
            optional: true,
            displayName: 'Partial',
            kind: 15,
            generics: [
              {
                displayName: 'T',
                type: 'T',
              },
            ],
            parent: 'FunctionComponent',
          },
          {
            optional: true,
            displayName: 'displayName',
            kind: 1,
            parent: 'FunctionComponent',
          },
        ],
        generics: [
          {
            displayName: 'P',
            type: 'P',
          },
        ],
        parameters: [
          {
            displayName: 'props',
            propParents: {
              Props: {
                displayName: 'Props',
                kind: 14,
                properties: [
                  {
                    optional: true,
                    displayName: 'm',
                    kind: 1,
                  },
                ],
              },
              PropsWithChildren: {
                displayName: 'PropsWithChildren',
                kind: 15,
                properties: [
                  {
                    optional: true,
                    displayName: 'ReactNode',
                    kind: 4,
                    properties: [
                      {
                        kind: 4,
                        displayName: 'ReactChild',
                        properties: [
                          {
                            kind: 14,
                            displayName: 'ReactElement',
                            properties: [
                              {
                                displayName: 'T',
                                kind: 15,
                              },
                              {
                                displayName: 'P',
                                kind: 15,
                              },
                              {
                                displayName: 'key',
                                kind: 4,
                                properties: [
                                  {
                                    kind: 4,
                                    displayName: 'Key',
                                    properties: [
                                      {
                                        kind: 1,
                                      },
                                      {
                                        kind: 2,
                                      },
                                    ],
                                  },
                                  {
                                    kind: 10,
                                  },
                                ],
                              },
                            ],
                            generics: [
                              {
                                displayName: 'P',
                                type: 'P',
                              },
                              {
                                displayName: 'T',
                                type: 'T',
                              },
                            ],
                          },
                          {
                            kind: 4,
                            displayName: 'ReactText',
                            properties: [
                              {
                                kind: 1,
                              },
                              {
                                kind: 2,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        kind: 4,
                        displayName: 'ReactFragment',
                        properties: [
                          {
                            kind: 15,
                          },
                          {
                            kind: 14,
                            displayName: 'ReactNodeArray',
                            properties: [
                              {
                                kind: 20,
                                index: {
                                  kind: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        kind: 14,
                        displayName: 'ReactPortal',
                        propParents: {
                          ReactElement: {
                            displayName: 'ReactElement',
                            kind: 14,
                            generics: [
                              {
                                displayName: 'P',
                                type: 'P',
                              },
                              {
                                displayName: 'T',
                                type: 'T',
                              },
                            ],
                            properties: [
                              {
                                displayName: 'T',
                                kind: 15,
                              },
                              {
                                displayName: 'P',
                                kind: 15,
                              },
                              {
                                displayName: 'key',
                                kind: 4,
                                properties: [
                                  {
                                    kind: 4,
                                    displayName: 'Key',
                                    properties: [
                                      {
                                        kind: 1,
                                      },
                                      {
                                        kind: 2,
                                      },
                                    ],
                                  },
                                  {
                                    kind: 10,
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        properties: [
                          {
                            displayName: 'key',
                            kind: 4,
                            properties: [
                              {
                                kind: 4,
                                displayName: 'Key',
                                properties: [
                                  {
                                    kind: 1,
                                  },
                                  {
                                    kind: 2,
                                  },
                                ],
                              },
                              {
                                kind: 10,
                              },
                            ],
                          },
                          {
                            displayName: 'ReactNode',
                            kind: 4,
                            properties: [
                              {
                                kind: 4,
                                displayName: 'ReactChild',
                                properties: [
                                  {
                                    kind: 15,
                                  },
                                  {
                                    kind: 15,
                                  },
                                ],
                              },
                              {
                                kind: 4,
                                displayName: 'ReactFragment',
                                properties: [
                                  {
                                    kind: 15,
                                  },
                                  {
                                    kind: 15,
                                  },
                                ],
                              },
                              {
                                kind: 14,
                                displayName: 'ReactPortal',
                                propParents: {
                                  ReactElement: {
                                    displayName: 'ReactElement',
                                    kind: 14,
                                    generics: [
                                      {
                                        parentName: 'ReactElement',
                                      },
                                      {
                                        parentName: 'ReactElement',
                                      },
                                    ],
                                    properties: [
                                      {
                                        parentName: 'ReactElement',
                                      },
                                      {
                                        parentName: 'ReactElement',
                                      },
                                      {
                                        parentName: 'ReactElement',
                                      },
                                    ],
                                  },
                                },
                                properties: [
                                  {
                                    displayName: 'key',
                                    kind: 4,
                                    properties: [
                                      {
                                        kind: 15,
                                      },
                                      {
                                        kind: 10,
                                      },
                                    ],
                                  },
                                  {
                                    displayName: 'children',
                                    kind: 15,
                                  },
                                  {
                                    displayName: 'type',
                                    kind: 15,
                                    parent: 'ReactElement',
                                  },
                                  {
                                    displayName: 'props',
                                    kind: 15,
                                    parent: 'ReactElement',
                                  },
                                ],
                              },
                              {
                                kind: 3,
                              },
                              {
                                kind: 10,
                              },
                              {
                                kind: 8,
                              },
                            ],
                          },
                          {
                            displayName: 'T',
                            kind: 15,
                            parent: 'ReactElement',
                          },
                          {
                            displayName: 'P',
                            kind: 15,
                            parent: 'ReactElement',
                          },
                        ],
                      },
                      {
                        kind: 3,
                      },
                      {
                        kind: 10,
                      },
                      {
                        kind: 8,
                      },
                    ],
                  },
                ],
              },
            },
            kind: 15,
            properties: [
              {
                optional: true,
                displayName: 'm',
                kind: 1,
                parent: 'Props',
              },
              {
                optional: true,
                displayName: 'ReactNode',
                kind: 4,
                parent: 'PropsWithChildren',
                properties: [
                  {
                    kind: 4,
                    displayName: 'ReactChild',
                    properties: [
                      {
                        kind: 14,
                        displayName: 'ReactElement',
                        properties: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                          {
                            displayName: 'P',
                            kind: 15,
                          },
                          {
                            displayName: 'key',
                            kind: 4,
                            properties: [
                              {
                                kind: 4,
                                displayName: 'Key',
                                properties: [
                                  {
                                    kind: 1,
                                  },
                                  {
                                    kind: 2,
                                  },
                                ],
                              },
                              {
                                kind: 10,
                              },
                            ],
                          },
                        ],
                        generics: [
                          {
                            displayName: 'P',
                            type: 'P',
                          },
                          {
                            displayName: 'T',
                            type: 'T',
                          },
                        ],
                      },
                      {
                        kind: 4,
                        displayName: 'ReactText',
                        properties: [
                          {
                            kind: 1,
                          },
                          {
                            kind: 2,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    kind: 4,
                    displayName: 'ReactFragment',
                    properties: [
                      {
                        kind: 15,
                      },
                      {
                        kind: 14,
                        displayName: 'ReactNodeArray',
                        properties: [
                          {
                            kind: 20,
                            index: {
                              kind: 2,
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    kind: 14,
                    displayName: 'ReactPortal',
                    propParents: {
                      ReactElement: {
                        displayName: 'ReactElement',
                        kind: 14,
                        generics: [
                          {
                            displayName: 'P',
                            type: 'P',
                          },
                          {
                            displayName: 'T',
                            type: 'T',
                          },
                        ],
                        properties: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                          {
                            displayName: 'P',
                            kind: 15,
                          },
                          {
                            displayName: 'key',
                            kind: 4,
                            properties: [
                              {
                                kind: 4,
                                displayName: 'Key',
                                properties: [
                                  {
                                    kind: 1,
                                  },
                                  {
                                    kind: 2,
                                  },
                                ],
                              },
                              {
                                kind: 10,
                              },
                            ],
                          },
                        ],
                      },
                    },
                    properties: [
                      {
                        displayName: 'key',
                        kind: 4,
                        properties: [
                          {
                            kind: 4,
                            displayName: 'Key',
                            properties: [
                              {
                                kind: 1,
                              },
                              {
                                kind: 2,
                              },
                            ],
                          },
                          {
                            kind: 10,
                          },
                        ],
                      },
                      {
                        displayName: 'ReactNode',
                        kind: 4,
                        properties: [
                          {
                            kind: 4,
                            displayName: 'ReactChild',
                            properties: [
                              {
                                kind: 15,
                              },
                              {
                                kind: 15,
                              },
                            ],
                          },
                          {
                            kind: 4,
                            displayName: 'ReactFragment',
                            properties: [
                              {
                                kind: 15,
                              },
                              {
                                kind: 15,
                              },
                            ],
                          },
                          {
                            kind: 14,
                            displayName: 'ReactPortal',
                            propParents: {
                              ReactElement: {
                                displayName: 'ReactElement',
                                kind: 14,
                                generics: [
                                  {
                                    parentName: 'ReactElement',
                                  },
                                  {
                                    parentName: 'ReactElement',
                                  },
                                ],
                                properties: [
                                  {
                                    parentName: 'ReactElement',
                                  },
                                  {
                                    parentName: 'ReactElement',
                                  },
                                  {
                                    parentName: 'ReactElement',
                                  },
                                ],
                              },
                            },
                            properties: [
                              {
                                displayName: 'key',
                                kind: 4,
                                properties: [
                                  {
                                    kind: 15,
                                  },
                                  {
                                    kind: 10,
                                  },
                                ],
                              },
                              {
                                displayName: 'children',
                                kind: 15,
                              },
                              {
                                displayName: 'type',
                                kind: 15,
                                parent: 'ReactElement',
                              },
                              {
                                displayName: 'props',
                                kind: 15,
                                parent: 'ReactElement',
                              },
                            ],
                          },
                          {
                            kind: 3,
                          },
                          {
                            kind: 10,
                          },
                          {
                            kind: 8,
                          },
                        ],
                      },
                      {
                        displayName: 'T',
                        kind: 15,
                        parent: 'ReactElement',
                      },
                      {
                        displayName: 'P',
                        kind: 15,
                        parent: 'ReactElement',
                      },
                    ],
                  },
                  {
                    kind: 3,
                  },
                  {
                    kind: 10,
                  },
                  {
                    kind: 8,
                  },
                ],
              },
            ],
            generics: [
              {
                displayName: 'P',
                type: 'P',
              },
            ],
          },
        ],
      },
    });
  });

  it('extended parameter', () => {
    const results = parseCode(`
/**
 * base type
 */
type T = {
  /**
   * base type member property
   */
  m: string;
};

/**
 * extended type
 */ 
type ExtendT = T & {
  /**
   * own member
   */
  honey: boolean;
};

/**
 * internal interface with one member
 */ 
interface Internal {
  /**
   * string type member
   */ 
  m: string;
}
/**
 * interface extending another one
 */ 
interface Bear extends Internal, Home {
  /**
   * boolean type member
   */ 
  honey: boolean;
}
/**
 * exported function
 */    
export function paintHomeyBear({ m, honey = true }: ExtendT): Bear {
  return { honey, m };
}
    `);
    expect(results).toEqual({
      paintHomeyBear: {
        description: 'exported function',
        displayName: 'paintHomeyBear',
        kind: 11,
        parameters: [
          {
            kind: 15,
            propParents: {
              T: {
                description: 'base type',
                displayName: 'T',
                kind: 15,
                properties: [
                  {
                    description: 'base type member property',
                    kind: 1,
                    displayName: 'm',
                  },
                ],
              },
            },
            properties: [
              {
                description: 'base type member property',
                kind: 1,
                displayName: 'm',
                parent: 'T',
              },
              {
                kind: 3,
                description: 'own member',
                displayName: 'honey',
              },
            ],
          },
        ],
        returns: {
          kind: 15,
        },
      },
    });
  });

  it('tuple parameters', () => {
    const results = parseCode(`
    export function distanceFromOrigin([x, y]: [number, number]): number {}
  `);
    expect(results).toEqual({
      distanceFromOrigin: {
        displayName: 'distanceFromOrigin',
        kind: 11,
        parameters: [
          {
            kind: 6,
            properties: [
              {
                kind: 2,
              },
              {
                kind: 2,
              },
            ],
          },
        ],
        returns: {
          kind: 2,
        },
      },
    });
  });
  it('spread tuple parameters', () => {
    const results = parseCode(`
    export const spreadTupleFunction = (
      ...args: [string, number, ...boolean[]]
    ): void => {};
  `);
    expect(results).toEqual({
      spreadTupleFunction: {
        displayName: 'spreadTupleFunction',
        kind: 11,
        parameters: [
          {
            displayName: 'args',
            kind: 6,
            properties: [
              {
                kind: 1,
              },
              {
                kind: 2,
              },
              {
                kind: 7,
                type: {
                  kind: 16,
                  elements: [
                    {
                      kind: 3,
                    },
                  ],
                },
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
