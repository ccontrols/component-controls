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
            propParents: {
              GenericInterface: {
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
            kind: 14,
            properties: [
              {
                displayName: 'm',
                kind: 15,
                parent: 'GenericInterface',
                type: 'T',
              },
            ],
            generics: [
              {
                displayName: 'T',
              },
            ],
          },
          {
            displayName: 'newContents',
            kind: 15,
            type: 'Type',
          },
        ],
        returns: {
          kind: 14,
          displayName: 'GenericInterface',
          properties: [
            {
              displayName: 'm',
              kind: 15,
              type: 'T',
            },
          ],
          generics: [
            {
              displayName: 'T',
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
            properties: [
              {
                optional: true,
                displayName: 'propTypes',
                kind: 15,
                generics: [
                  {
                    displayName: 'T',
                  },
                ],
                type: 'WeakValidationMap',
              },
              {
                optional: true,
                displayName: 'contextTypes',
                kind: 15,
                generics: [
                  {
                    displayName: 'T',
                  },
                ],
                type: 'ValidationMap',
              },
              {
                optional: true,
                displayName: 'defaultProps',
                kind: 15,
                generics: [
                  {
                    displayName: 'T',
                  },
                ],
                description: 'Make all properties in T optional',
                type: 'Partial',
              },
              {
                optional: true,
                displayName: 'displayName',
                kind: 1,
              },
            ],
            generics: [
              {
                displayName: 'P',
              },
            ],
          },
        },
        kind: 11,
        properties: [
          {
            optional: true,
            displayName: 'propTypes',
            kind: 15,
            generics: [
              {
                displayName: 'T',
              },
            ],
            parent: 'FunctionComponent',
            type: 'WeakValidationMap',
          },
          {
            optional: true,
            displayName: 'contextTypes',
            kind: 15,
            generics: [
              {
                displayName: 'T',
              },
            ],
            parent: 'FunctionComponent',
            type: 'ValidationMap',
          },
          {
            optional: true,
            displayName: 'defaultProps',
            kind: 15,
            generics: [
              {
                displayName: 'T',
              },
            ],
            parent: 'FunctionComponent',
            description: 'Make all properties in T optional',
            type: 'Partial',
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
                    displayName: 'children',
                    kind: 4,
                    properties: [
                      {
                        kind: 4,
                        properties: [
                          {
                            kind: 14,
                            properties: [
                              {
                                displayName: 'type',
                                kind: 15,
                                type: 'T',
                              },
                              {
                                displayName: 'props',
                                kind: 15,
                                type: 'P',
                              },
                              {
                                displayName: 'key',
                                kind: 4,
                                properties: [
                                  {
                                    kind: 4,
                                    properties: [
                                      {
                                        kind: 1,
                                      },
                                      {
                                        kind: 2,
                                      },
                                    ],
                                    displayName: 'Key',
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
                              },
                              {
                                displayName: 'T',
                              },
                            ],
                            displayName: 'ReactElement',
                          },
                          {
                            kind: 4,
                            properties: [
                              {
                                kind: 1,
                              },
                              {
                                kind: 2,
                              },
                            ],
                            displayName: 'ReactText',
                          },
                        ],
                        displayName: 'ReactChild',
                      },
                      {
                        kind: 4,
                        properties: [
                          {
                            kind: 15,
                          },
                          {
                            kind: 14,
                            properties: [
                              {
                                kind: 20,
                                index: {
                                  kind: 2,
                                },
                              },
                            ],
                            displayName: 'ReactNodeArray',
                          },
                        ],
                        displayName: 'ReactFragment',
                      },
                      {
                        kind: 14,
                        propParents: {
                          ReactElement: {
                            displayName: 'ReactElement',
                            kind: 14,
                            properties: [
                              {
                                displayName: 'type',
                                kind: 15,
                                type: 'T',
                              },
                              {
                                displayName: 'props',
                                kind: 15,
                                type: 'P',
                              },
                              {
                                displayName: 'key',
                                kind: 4,
                                properties: [
                                  {
                                    kind: 4,
                                    properties: [
                                      {
                                        kind: 1,
                                      },
                                      {
                                        kind: 2,
                                      },
                                    ],
                                    displayName: 'Key',
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
                              },
                              {
                                displayName: 'T',
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
                                properties: [
                                  {
                                    kind: 1,
                                  },
                                  {
                                    kind: 2,
                                  },
                                ],
                                displayName: 'Key',
                              },
                              {
                                kind: 10,
                              },
                            ],
                          },
                          {
                            displayName: 'children',
                            kind: 4,
                            properties: [
                              {
                                kind: 4,
                                properties: [
                                  {
                                    kind: 14,
                                    properties: [
                                      {
                                        displayName: 'type',
                                        kind: 15,
                                        type: 'T',
                                      },
                                      {
                                        displayName: 'props',
                                        kind: 15,
                                        type: 'P',
                                      },
                                      {
                                        displayName: 'key',
                                        kind: 4,
                                        properties: [
                                          {
                                            kind: 4,
                                            properties: [
                                              {
                                                kind: 1,
                                              },
                                              {
                                                kind: 2,
                                              },
                                            ],
                                            displayName: 'Key',
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
                                      },
                                      {
                                        displayName: 'T',
                                      },
                                    ],
                                    displayName: 'ReactElement',
                                  },
                                  {
                                    kind: 4,
                                    properties: [
                                      {
                                        kind: 1,
                                      },
                                      {
                                        kind: 2,
                                      },
                                    ],
                                    displayName: 'ReactText',
                                  },
                                ],
                                displayName: 'ReactChild',
                              },
                              {
                                kind: 4,
                                properties: [
                                  {
                                    kind: 15,
                                  },
                                  {
                                    kind: 14,
                                    properties: [
                                      {
                                        kind: 20,
                                        index: {
                                          kind: 2,
                                        },
                                      },
                                    ],
                                    displayName: 'ReactNodeArray',
                                  },
                                ],
                                displayName: 'ReactFragment',
                              },
                              {
                                kind: 14,
                                propParents: {
                                  ReactElement: {
                                    displayName: 'ReactElement',
                                    kind: 14,
                                    properties: [
                                      {
                                        displayName: 'type',
                                        kind: 15,
                                        type: 'T',
                                      },
                                      {
                                        displayName: 'props',
                                        kind: 15,
                                        type: 'P',
                                      },
                                      {
                                        displayName: 'key',
                                        kind: 4,
                                        properties: [
                                          {
                                            kind: 4,
                                            properties: [
                                              {
                                                kind: 1,
                                              },
                                              {
                                                kind: 2,
                                              },
                                            ],
                                            displayName: 'Key',
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
                                      },
                                      {
                                        displayName: 'T',
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
                                        properties: [
                                          {
                                            kind: 1,
                                          },
                                          {
                                            kind: 2,
                                          },
                                        ],
                                        displayName: 'Key',
                                      },
                                      {
                                        kind: 10,
                                      },
                                    ],
                                  },
                                  {
                                    displayName: 'children',
                                    kind: 4,
                                    properties: [
                                      {
                                        kind: 15,
                                      },
                                      {
                                        kind: 15,
                                      },
                                      {
                                        kind: 15,
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
                                    type: 'ReactNode',
                                  },
                                  {
                                    displayName: 'type',
                                    kind: 15,
                                    parent: 'ReactElement',
                                    type: 'T',
                                  },
                                  {
                                    displayName: 'props',
                                    kind: 15,
                                    parent: 'ReactElement',
                                    type: 'P',
                                  },
                                ],
                                displayName: 'ReactPortal',
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
                            type: 'ReactNode',
                          },
                          {
                            displayName: 'type',
                            kind: 15,
                            parent: 'ReactElement',
                            type: 'T',
                          },
                          {
                            displayName: 'props',
                            kind: 15,
                            parent: 'ReactElement',
                            type: 'P',
                          },
                        ],
                        displayName: 'ReactPortal',
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
                    type: 'ReactNode',
                  },
                ],
                generics: [
                  {
                    displayName: 'P',
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
                displayName: 'children',
                kind: 4,
                parent: 'PropsWithChildren',
                properties: [
                  {
                    kind: 4,
                    properties: [
                      {
                        kind: 14,
                        properties: [
                          {
                            displayName: 'type',
                            kind: 15,
                            type: 'T',
                          },
                          {
                            displayName: 'props',
                            kind: 15,
                            type: 'P',
                          },
                          {
                            displayName: 'key',
                            kind: 4,
                            properties: [
                              {
                                kind: 4,
                                properties: [
                                  {
                                    kind: 1,
                                  },
                                  {
                                    kind: 2,
                                  },
                                ],
                                displayName: 'Key',
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
                          },
                          {
                            displayName: 'T',
                          },
                        ],
                        displayName: 'ReactElement',
                      },
                      {
                        kind: 4,
                        properties: [
                          {
                            kind: 1,
                          },
                          {
                            kind: 2,
                          },
                        ],
                        displayName: 'ReactText',
                      },
                    ],
                    displayName: 'ReactChild',
                  },
                  {
                    kind: 4,
                    properties: [
                      {
                        kind: 15,
                      },
                      {
                        kind: 14,
                        properties: [
                          {
                            kind: 20,
                            index: {
                              kind: 2,
                            },
                          },
                        ],
                        displayName: 'ReactNodeArray',
                      },
                    ],
                    displayName: 'ReactFragment',
                  },
                  {
                    kind: 14,
                    propParents: {
                      ReactElement: {
                        displayName: 'ReactElement',
                        kind: 14,
                        properties: [
                          {
                            displayName: 'type',
                            kind: 15,
                            type: 'T',
                          },
                          {
                            displayName: 'props',
                            kind: 15,
                            type: 'P',
                          },
                          {
                            displayName: 'key',
                            kind: 4,
                            properties: [
                              {
                                kind: 4,
                                properties: [
                                  {
                                    kind: 1,
                                  },
                                  {
                                    kind: 2,
                                  },
                                ],
                                displayName: 'Key',
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
                          },
                          {
                            displayName: 'T',
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
                            properties: [
                              {
                                kind: 1,
                              },
                              {
                                kind: 2,
                              },
                            ],
                            displayName: 'Key',
                          },
                          {
                            kind: 10,
                          },
                        ],
                      },
                      {
                        displayName: 'children',
                        kind: 4,
                        properties: [
                          {
                            kind: 4,
                            properties: [
                              {
                                kind: 14,
                                properties: [
                                  {
                                    displayName: 'type',
                                    kind: 15,
                                    type: 'T',
                                  },
                                  {
                                    displayName: 'props',
                                    kind: 15,
                                    type: 'P',
                                  },
                                  {
                                    displayName: 'key',
                                    kind: 4,
                                    properties: [
                                      {
                                        kind: 4,
                                        properties: [
                                          {
                                            kind: 1,
                                          },
                                          {
                                            kind: 2,
                                          },
                                        ],
                                        displayName: 'Key',
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
                                  },
                                  {
                                    displayName: 'T',
                                  },
                                ],
                                displayName: 'ReactElement',
                              },
                              {
                                kind: 4,
                                properties: [
                                  {
                                    kind: 1,
                                  },
                                  {
                                    kind: 2,
                                  },
                                ],
                                displayName: 'ReactText',
                              },
                            ],
                            displayName: 'ReactChild',
                          },
                          {
                            kind: 4,
                            properties: [
                              {
                                kind: 15,
                              },
                              {
                                kind: 14,
                                properties: [
                                  {
                                    kind: 20,
                                    index: {
                                      kind: 2,
                                    },
                                  },
                                ],
                                displayName: 'ReactNodeArray',
                              },
                            ],
                            displayName: 'ReactFragment',
                          },
                          {
                            kind: 14,
                            propParents: {
                              ReactElement: {
                                displayName: 'ReactElement',
                                kind: 14,
                                properties: [
                                  {
                                    displayName: 'type',
                                    kind: 15,
                                    type: 'T',
                                  },
                                  {
                                    displayName: 'props',
                                    kind: 15,
                                    type: 'P',
                                  },
                                  {
                                    displayName: 'key',
                                    kind: 4,
                                    properties: [
                                      {
                                        kind: 4,
                                        properties: [
                                          {
                                            kind: 1,
                                          },
                                          {
                                            kind: 2,
                                          },
                                        ],
                                        displayName: 'Key',
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
                                  },
                                  {
                                    displayName: 'T',
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
                                    properties: [
                                      {
                                        kind: 1,
                                      },
                                      {
                                        kind: 2,
                                      },
                                    ],
                                    displayName: 'Key',
                                  },
                                  {
                                    kind: 10,
                                  },
                                ],
                              },
                              {
                                displayName: 'children',
                                kind: 4,
                                properties: [
                                  {
                                    kind: 15,
                                  },
                                  {
                                    kind: 15,
                                  },
                                  {
                                    kind: 15,
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
                                type: 'ReactNode',
                              },
                              {
                                displayName: 'type',
                                kind: 15,
                                parent: 'ReactElement',
                                type: 'T',
                              },
                              {
                                displayName: 'props',
                                kind: 15,
                                parent: 'ReactElement',
                                type: 'P',
                              },
                            ],
                            displayName: 'ReactPortal',
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
                        type: 'ReactNode',
                      },
                      {
                        displayName: 'type',
                        kind: 15,
                        parent: 'ReactElement',
                        type: 'T',
                      },
                      {
                        displayName: 'props',
                        kind: 15,
                        parent: 'ReactElement',
                        type: 'P',
                      },
                    ],
                    displayName: 'ReactPortal',
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
                type: 'ReactNode',
              },
            ],
            generics: [
              {
                displayName: 'P',
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
        displayName: 'paintHomeyBear',
        kind: 11,
        parameters: [
          {
            kind: 15,
            propParents: {
              T: {
                displayName: 'T',
                kind: 15,
                properties: [
                  {
                    kind: 1,
                    description: 'base type member property',
                    displayName: 'm',
                  },
                ],
                description: 'base type',
              },
            },
            properties: [
              {
                kind: 1,
                displayName: 'm',
                description: 'base type member property',
                parent: 'T',
              },
              {
                kind: 3,
                displayName: 'honey',
                description: 'own member',
              },
            ],
            description: 'extended type',
            displayName: 'ExtendT',
          },
        ],
        returns: {
          kind: 14,
          propParents: {
            Internal: {
              displayName: 'Internal',
              kind: 14,
              properties: [
                {
                  kind: 1,
                  description: 'string type member',
                  displayName: 'm',
                },
              ],
              description: 'internal interface with one member',
            },
          },
          properties: [
            {
              kind: 3,
              displayName: 'honey',
              description: 'boolean type member',
            },
            {
              kind: 1,
              displayName: 'm',
              description: 'string type member',
              parent: 'Internal',
            },
          ],
          description: 'interface extending another one',
          displayName: 'Bear',
        },
        description: 'exported function',
      },
    });
  });
  it('function properties', () => {
    const results = parseCode(`
    export function fn(
    ): void {};
    /**
     * custom property for a function
     */ 
     fn.customProp = 'my custom prop';
`);
    expect(results).toEqual({
      fn: {
        displayName: 'fn',
        kind: 11,
        properties: [
          {
            kind: 1,
            description: 'custom property for a function',
            displayName: 'customProp',
            value: 'my custom prop',
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
                  properties: [
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
