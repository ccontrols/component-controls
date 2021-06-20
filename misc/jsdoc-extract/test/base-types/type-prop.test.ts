import { parseCode } from '../../src/index';

describe('type', () => {
  it('generic consumer type', () => {
    const results = parseCode(`
    /**
     * upstream interface
     */ 
    interface GenericInterface<Type> {
      /**
       * interface prop
       */ 
      m: Type
    }

    /**
     * reference type description
     */ 
    export type GenericConsumer = GenericInterface<string>;
`);
    expect(results).toEqual({
      GenericConsumer: {
        description: 'reference type description',
        kind: 15,
        properties: [
          {
            description: 'interface prop',
            displayName: 'm',
            kind: 15,
            type: 'Type',
            parent: 'GenericInterface',
          },
        ],
        displayName: 'GenericConsumer',
        propParents: {
          GenericInterface: {
            description: 'upstream interface',
            displayName: 'GenericInterface',
            kind: 14,
            generics: [
              {
                displayName: 'Type',
              },
            ],
            properties: [
              {
                description: 'interface prop',
                displayName: 'm',
                kind: 15,
                type: 'Type',
              },
            ],
          },
        },
      },
    });
  });

  it('intersection type', () => {
    const results = parseCode(`
      /** type A */
    type A = {
      a: string;
    };
    /**
     * type B
     */ 
    type B = {
      b: number;
    };
    /** intersect type */
    export type Intersect = A & B;
    `);
    expect(results).toEqual({
      Intersect: {
        description: 'intersect type',
        kind: 15,
        properties: [
          {
            displayName: 'a',
            kind: 1,
            parent: 'A',
          },
          {
            displayName: 'b',
            kind: 2,
            parent: 'B',
          },
        ],
        displayName: 'Intersect',
        propParents: {
          A: {
            description: 'type A',
            displayName: 'A',
            kind: 15,
            properties: [
              {
                displayName: 'a',
                kind: 1,
              },
            ],
          },
          B: {
            description: 'type B',
            displayName: 'B',
            kind: 15,
            properties: [
              {
                displayName: 'b',
                kind: 2,
              },
            ],
          },
        },
      },
    });
  });
  it('generic array type', () => {
    const results = parseCode(`
    export type GenericArrayType<Type> = Type[];
`);
    expect(results).toEqual({
      GenericArrayType: {
        kind: 15,
        properties: [
          {
            kind: 20,
            index: {
              kind: 2,
            },
            type: {
              displayName: 'Type',
            },
          },
          {
            description:
              'Gets or sets the length of the array. This is a number one higher than the highest index in the array.',
            displayName: 'length',
            kind: 2,
            parent: 'Array',
          },
          {
            description: 'Returns a string representation of an array.',
            displayName: 'toString',
            kind: 11,
            returns: {
              kind: 1,
            },
            parent: 'Array',
          },
          {
            description:
              'Returns a string representation of an array. The elements are converted to string using their toLocalString methods.',
            displayName: 'toLocaleString',
            kind: 11,
            returns: {
              kind: 1,
            },
            parent: 'Array',
          },
          {
            description:
              'Removes the last element from an array and returns it.\nIf the array is empty, undefined is returned and the array is not modified.',
            displayName: 'pop',
            kind: 11,
            returns: {
              kind: 4,
              properties: [
                {
                  displayName: 'T',
                  kind: 15,
                },
                {
                  kind: 8,
                },
              ],
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'items',
                description: 'New elements to add to the array.',
                kind: 16,
                elements: [
                  {
                    displayName: 'T',
                    kind: 15,
                  },
                ],
              },
            ],
            description:
              'Appends new elements to the end of an array, and returns the new length of the array.',
            displayName: 'push',
            kind: 11,
            returns: {
              kind: 2,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'items',
                description:
                  'Additional arrays and/or items to add to the end of the array.',
                kind: 16,
                elements: [
                  {
                    displayName: 'ConcatArray<T>',
                    kind: 15,
                  },
                ],
              },
            ],
            description:
              'Combines two or more arrays.\nThis method returns a new array without modifying any existing arrays.',
            displayName: 'concat',
            kind: 11,
            returns: {
              kind: 16,
              elements: [
                {
                  displayName: 'T',
                  kind: 15,
                },
              ],
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'separator',
                description:
                  'A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.',
                kind: 1,
                optional: true,
              },
            ],
            description:
              'Adds all the elements of an array into a string, separated by the specified separator string.',
            displayName: 'join',
            kind: 11,
            returns: {
              kind: 1,
            },
            parent: 'Array',
          },
          {
            description:
              'Reverses the elements in an array in place.\nThis method mutates the array and returns a reference to the same array.',
            displayName: 'reverse',
            kind: 11,
            returns: {
              kind: 16,
              elements: [
                {
                  displayName: 'T',
                  kind: 15,
                },
              ],
            },
            parent: 'Array',
          },
          {
            description:
              'Removes the first element from an array and returns it.\nIf the array is empty, undefined is returned and the array is not modified.',
            displayName: 'shift',
            kind: 11,
            returns: {
              kind: 4,
              properties: [
                {
                  displayName: 'T',
                  kind: 15,
                },
                {
                  kind: 8,
                },
              ],
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'start',
                description:
                  'The beginning index of the specified portion of the array.\nIf start is undefined, then the slice begins at index 0.',
                kind: 2,
                optional: true,
              },
              {
                displayName: 'end',
                description:
                  "The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.\nIf end is undefined, then the slice extends to the end of the array.",
                kind: 2,
                optional: true,
              },
            ],
            description:
              'Returns a copy of a section of an array.\nFor both start and end, a negative index can be used to indicate an offset from the end of the array.\nFor example, -2 refers to the second to last element of the array.',
            displayName: 'slice',
            kind: 11,
            returns: {
              kind: 16,
              elements: [
                {
                  displayName: 'T',
                  kind: 15,
                },
              ],
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'compareFn',
                description:
                  "Function used to determine the order of the elements. It is expected to return\na negative value if first argument is less than second argument, zero if they're equal and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, ASCII character order.\n```ts\n[11,2,22,1].sort((a, b) => a - b)\n```",
                kind: 11,
                optional: true,
                parameters: [
                  {
                    displayName: 'a',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'b',
                    kind: 15,
                    type: 'T',
                  },
                ],
                returns: {
                  kind: 2,
                },
              },
            ],
            description:
              'Sorts an array in place.\nThis method mutates the array and returns a reference to the same array.',
            displayName: 'sort',
            kind: 11,
            returns: {},
            parent: 'Array',
          },
          {
            returns: {
              description:
                'An array containing the elements that were deleted.',
              kind: 16,
              elements: [
                {
                  displayName: 'T',
                  kind: 15,
                },
              ],
            },
            parameters: [
              {
                displayName: 'start',
                description:
                  'The zero-based location in the array from which to start removing elements.',
                kind: 2,
              },
              {
                displayName: 'deleteCount',
                description: 'The number of elements to remove.',
                kind: 2,
                optional: true,
              },
            ],
            description:
              'Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.',
            displayName: 'splice',
            kind: 11,
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'items',
                description: 'Elements to insert at the start of the array.',
                kind: 16,
                elements: [
                  {
                    displayName: 'T',
                    kind: 15,
                  },
                ],
              },
            ],
            description:
              'Inserts new elements at the start of an array, and returns the new length of the array.',
            displayName: 'unshift',
            kind: 11,
            returns: {
              kind: 2,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'searchElement',
                description: 'The value to locate in the array.',
                kind: 15,
                type: 'T',
              },
              {
                displayName: 'fromIndex',
                description:
                  'The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.',
                kind: 2,
                optional: true,
              },
            ],
            description:
              'Returns the index of the first occurrence of a value in an array, or -1 if it is not present.',
            displayName: 'indexOf',
            kind: 11,
            returns: {
              kind: 2,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'searchElement',
                description: 'The value to locate in the array.',
                kind: 15,
                type: 'T',
              },
              {
                displayName: 'fromIndex',
                description:
                  'The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.',
                kind: 2,
                optional: true,
              },
            ],
            description:
              'Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.',
            displayName: 'lastIndexOf',
            kind: 11,
            returns: {
              kind: 2,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'predicate',
                description:
                  'A function that accepts up to three arguments. The every method calls\nthe predicate function for each element in the array until the predicate returns a value\nwhich is coercible to the Boolean value false, or until the end of the array.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'value',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'index',
                    kind: 2,
                  },
                  {
                    displayName: 'array',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  kind: 15,
                  displayName: 'S',
                },
              },
              {
                displayName: 'thisArg',
                description:
                  'An object to which the this keyword can refer in the predicate function.\nIf thisArg is omitted, undefined is used as the this value.',
                kind: 17,
                optional: true,
              },
            ],
            description:
              'Determines whether all the members of an array satisfy the specified test.',
            displayName: 'every',
            kind: 11,
            returns: {
              kind: 16,
              elements: [
                {
                  displayName: 'S',
                  kind: 15,
                },
              ],
            },
            types: [
              {
                displayName: 'S',
              },
            ],
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'predicate',
                description:
                  'A function that accepts up to three arguments. The some method calls\nthe predicate function for each element in the array until the predicate returns a value\nwhich is coercible to the Boolean value true, or until the end of the array.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'value',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'index',
                    kind: 2,
                  },
                  {
                    displayName: 'array',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  kind: 9,
                },
              },
              {
                displayName: 'thisArg',
                description:
                  'An object to which the this keyword can refer in the predicate function.\nIf thisArg is omitted, undefined is used as the this value.',
                kind: 17,
                optional: true,
              },
            ],
            description:
              'Determines whether the specified callback function returns true for any element of an array.',
            displayName: 'some',
            kind: 11,
            returns: {
              kind: 3,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'callbackfn',
                description:
                  'A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'value',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'index',
                    kind: 2,
                  },
                  {
                    displayName: 'array',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  kind: 12,
                },
              },
              {
                displayName: 'thisArg',
                description:
                  'An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.',
                kind: 17,
                optional: true,
              },
            ],
            description:
              'Performs the specified action for each element in an array.',
            displayName: 'forEach',
            kind: 11,
            returns: {
              kind: 12,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'callbackfn',
                description:
                  'A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'value',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'index',
                    kind: 2,
                  },
                  {
                    displayName: 'array',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  displayName: 'U',
                  kind: 15,
                },
              },
              {
                displayName: 'thisArg',
                description:
                  'An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.',
                kind: 17,
                optional: true,
              },
            ],
            description:
              'Calls a defined callback function on each element of an array, and returns an array that contains the results.',
            displayName: 'map',
            kind: 11,
            returns: {
              kind: 16,
              elements: [
                {
                  displayName: 'U',
                  kind: 15,
                },
              ],
            },
            types: [
              {
                displayName: 'U',
              },
            ],
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'predicate',
                description:
                  'A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'value',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'index',
                    kind: 2,
                  },
                  {
                    displayName: 'array',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  kind: 15,
                  displayName: 'S',
                },
              },
              {
                displayName: 'thisArg',
                description:
                  'An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.',
                kind: 17,
                optional: true,
              },
            ],
            description:
              'Returns the elements of an array that meet the condition specified in a callback function.',
            displayName: 'filter',
            kind: 11,
            returns: {
              kind: 16,
              elements: [
                {
                  displayName: 'S',
                  kind: 15,
                },
              ],
            },
            types: [
              {
                displayName: 'S',
              },
            ],
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'callbackfn',
                description:
                  'A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'previousValue',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'currentValue',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'currentIndex',
                    kind: 2,
                  },
                  {
                    displayName: 'array',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  displayName: 'T',
                  kind: 15,
                },
              },
            ],
            description:
              'Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.',
            displayName: 'reduce',
            kind: 11,
            returns: {
              displayName: 'T',
              kind: 15,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'callbackfn',
                description:
                  'A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'previousValue',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'currentValue',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'currentIndex',
                    kind: 2,
                  },
                  {
                    displayName: 'array',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  displayName: 'T',
                  kind: 15,
                },
              },
            ],
            description:
              'Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.',
            displayName: 'reduceRight',
            kind: 11,
            returns: {
              displayName: 'T',
              kind: 15,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'predicate',
                description:
                  'find calls predicate once for each element of the array, in ascending\norder, until it finds one where predicate returns true. If such an element is found, find\nimmediately returns that element value. Otherwise, find returns undefined.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'this',
                    kind: 12,
                  },
                  {
                    displayName: 'value',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'index',
                    kind: 2,
                  },
                  {
                    displayName: 'obj',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  kind: 15,
                  displayName: 'S',
                },
              },
              {
                displayName: 'thisArg',
                description:
                  'If provided, it will be used as the this value for each invocation of\npredicate. If it is not provided, undefined is used instead.',
                kind: 17,
                optional: true,
              },
            ],
            description:
              'Returns the value of the first element in the array where predicate is true, and undefined\notherwise.',
            displayName: 'find',
            kind: 11,
            returns: {
              kind: 4,
              properties: [
                {
                  displayName: 'S',
                  kind: 15,
                },
                {
                  kind: 8,
                },
              ],
            },
            types: [
              {
                displayName: 'S',
              },
            ],
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'predicate',
                description:
                  'find calls predicate once for each element of the array, in ascending\norder, until it finds one where predicate returns true. If such an element is found,\nfindIndex immediately returns that element index. Otherwise, findIndex returns -1.',
                kind: 11,
                parameters: [
                  {
                    displayName: 'value',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'index',
                    kind: 2,
                  },
                  {
                    displayName: 'obj',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                returns: {
                  kind: 9,
                },
              },
              {
                displayName: 'thisArg',
                description:
                  'If provided, it will be used as the this value for each invocation of\npredicate. If it is not provided, undefined is used instead.',
                kind: 17,
                optional: true,
              },
            ],
            description:
              'Returns the index of the first element in the array where predicate is true, and -1\notherwise.',
            displayName: 'findIndex',
            kind: 11,
            returns: {
              kind: 2,
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'value',
                description: 'value to fill array section with',
                kind: 15,
                type: 'T',
              },
              {
                displayName: 'start',
                description:
                  'index to start filling the array at. If start is negative, it is treated as\nlength+start where length is the length of the array.',
                kind: 2,
                optional: true,
              },
              {
                displayName: 'end',
                description:
                  'index to stop filling the array at. If end is negative, it is treated as\nlength+end.',
                kind: 2,
                optional: true,
              },
            ],
            description:
              'Returns the this object after filling the section identified by start and end with value',
            displayName: 'fill',
            kind: 11,
            returns: {},
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'target',
                description:
                  'If target is negative, it is treated as length+target where length is the\nlength of the array.',
                kind: 2,
              },
              {
                displayName: 'start',
                description:
                  'If start is negative, it is treated as length+start. If end is negative, it\nis treated as length+end.',
                kind: 2,
              },
              {
                displayName: 'end',
                description:
                  'If not specified, length of the this object is used as its default value.',
                kind: 2,
                optional: true,
              },
            ],
            description:
              'Returns the this object after copying a section of the array identified by start and end\nto the same array starting at position target',
            displayName: 'copyWithin',
            kind: 11,
            returns: {},
            parent: 'Array',
          },
          {
            description: 'Iterator',
            displayName: '[Symbol.iterator]',
            kind: 11,
            returns: {
              displayName: 'IterableIterator<T>',
              kind: 15,
            },
            parent: 'Array',
          },
          {
            description:
              'Returns an iterable of key, value pairs for every entry in the array',
            displayName: 'entries',
            kind: 11,
            returns: {
              displayName: 'IterableIterator<[number, T]>',
              kind: 15,
            },
            parent: 'Array',
          },
          {
            description: 'Returns an iterable of keys in the array',
            displayName: 'keys',
            kind: 11,
            returns: {
              displayName: 'IterableIterator<number>',
              kind: 15,
            },
            parent: 'Array',
          },
          {
            description: 'Returns an iterable of values in the array',
            displayName: 'values',
            kind: 11,
            returns: {
              displayName: 'IterableIterator<T>',
              kind: 15,
            },
            parent: 'Array',
          },
          {
            description:
              "Returns an object whose properties have the value 'true'\nwhen they will be absent when used in a 'with' statement.",
            displayName: '[Symbol.unscopables]',
            kind: 11,
            returns: {
              kind: 15,
              properties: [
                {
                  displayName: 'copyWithin',
                  kind: 3,
                },
                {
                  displayName: 'entries',
                  kind: 3,
                },
                {
                  displayName: 'fill',
                  kind: 3,
                },
                {
                  displayName: 'find',
                  kind: 3,
                },
                {
                  displayName: 'findIndex',
                  kind: 3,
                },
                {
                  displayName: 'keys',
                  kind: 3,
                },
                {
                  displayName: 'values',
                  kind: 3,
                },
              ],
            },
            parent: 'Array',
          },
          {
            parameters: [
              {
                displayName: 'searchElement',
                description: 'The element to search for.',
                kind: 15,
                type: 'T',
              },
              {
                displayName: 'fromIndex',
                description:
                  'The position in this array at which to begin searching for searchElement.',
                kind: 2,
                optional: true,
              },
            ],
            description:
              'Determines whether an array includes a certain element, returning true or false as appropriate.',
            displayName: 'includes',
            kind: 11,
            returns: {
              kind: 3,
            },
            parent: 'Array',
          },
        ],
        displayName: 'GenericArrayType',
        propParents: {
          Array: {
            displayName: 'Array',
            kind: 14,
            generics: [
              {
                displayName: 'T',
              },
            ],
            properties: [
              {
                description:
                  'Gets or sets the length of the array. This is a number one higher than the highest index in the array.',
                displayName: 'length',
                kind: 2,
              },
              {
                description: 'Returns a string representation of an array.',
                displayName: 'toString',
                kind: 11,
                returns: {
                  kind: 1,
                },
              },
              {
                description:
                  'Returns a string representation of an array. The elements are converted to string using their toLocalString methods.',
                displayName: 'toLocaleString',
                kind: 11,
                returns: {
                  kind: 1,
                },
              },
              {
                description:
                  'Removes the last element from an array and returns it.\nIf the array is empty, undefined is returned and the array is not modified.',
                displayName: 'pop',
                kind: 11,
                returns: {
                  kind: 4,
                  properties: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                    {
                      kind: 8,
                    },
                  ],
                },
              },
              {
                parameters: [
                  {
                    displayName: 'items',
                    description: 'New elements to add to the array.',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                description:
                  'Appends new elements to the end of an array, and returns the new length of the array.',
                displayName: 'push',
                kind: 11,
                returns: {
                  kind: 2,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'items',
                    description:
                      'Additional arrays and/or items to add to the end of the array.',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'ConcatArray<T>',
                        kind: 15,
                      },
                    ],
                  },
                ],
                description:
                  'Combines two or more arrays.\nThis method returns a new array without modifying any existing arrays.',
                kind: 11,
                returns: {
                  kind: 16,
                  elements: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                  ],
                },
              },
              {
                parameters: [
                  {
                    displayName: 'items',
                    description:
                      'Additional arrays and/or items to add to the end of the array.',
                    kind: 16,
                    elements: [
                      {
                        kind: 4,
                        properties: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                          {
                            displayName: 'ConcatArray<T>',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                  },
                ],
                description:
                  'Combines two or more arrays.\nThis method returns a new array without modifying any existing arrays.',
                kind: 11,
                returns: {
                  kind: 16,
                  elements: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                  ],
                },
              },
              {
                parameters: [
                  {
                    displayName: 'separator',
                    description:
                      'A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.',
                    kind: 1,
                    optional: true,
                  },
                ],
                description:
                  'Adds all the elements of an array into a string, separated by the specified separator string.',
                displayName: 'join',
                kind: 11,
                returns: {
                  kind: 1,
                },
              },
              {
                description:
                  'Reverses the elements in an array in place.\nThis method mutates the array and returns a reference to the same array.',
                displayName: 'reverse',
                kind: 11,
                returns: {
                  kind: 16,
                  elements: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                  ],
                },
              },
              {
                description:
                  'Removes the first element from an array and returns it.\nIf the array is empty, undefined is returned and the array is not modified.',
                displayName: 'shift',
                kind: 11,
                returns: {
                  kind: 4,
                  properties: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                    {
                      kind: 8,
                    },
                  ],
                },
              },
              {
                parameters: [
                  {
                    displayName: 'start',
                    description:
                      'The beginning index of the specified portion of the array.\nIf start is undefined, then the slice begins at index 0.',
                    kind: 2,
                    optional: true,
                  },
                  {
                    displayName: 'end',
                    description:
                      "The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.\nIf end is undefined, then the slice extends to the end of the array.",
                    kind: 2,
                    optional: true,
                  },
                ],
                description:
                  'Returns a copy of a section of an array.\nFor both start and end, a negative index can be used to indicate an offset from the end of the array.\nFor example, -2 refers to the second to last element of the array.',
                displayName: 'slice',
                kind: 11,
                returns: {
                  kind: 16,
                  elements: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                  ],
                },
              },
              {
                parameters: [
                  {
                    displayName: 'compareFn',
                    description:
                      "Function used to determine the order of the elements. It is expected to return\na negative value if first argument is less than second argument, zero if they're equal and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, ASCII character order.\n```ts\n[11,2,22,1].sort((a, b) => a - b)\n```",
                    kind: 11,
                    optional: true,
                    parameters: [
                      {
                        displayName: 'a',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'b',
                        kind: 15,
                        type: 'T',
                      },
                    ],
                    returns: {
                      kind: 2,
                    },
                  },
                ],
                description:
                  'Sorts an array in place.\nThis method mutates the array and returns a reference to the same array.',
                displayName: 'sort',
                kind: 11,
                returns: {},
              },
              {
                returns: {
                  description:
                    'An array containing the elements that were deleted.',
                  kind: 16,
                  elements: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                  ],
                },
                parameters: [
                  {
                    displayName: 'start',
                    description:
                      'The zero-based location in the array from which to start removing elements.',
                    kind: 2,
                  },
                  {
                    displayName: 'deleteCount',
                    description: 'The number of elements to remove.',
                    kind: 2,
                    optional: true,
                  },
                ],
                description:
                  'Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.',
                kind: 11,
              },
              {
                returns: {
                  description:
                    'An array containing the elements that were deleted.',
                  kind: 16,
                  elements: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                  ],
                },
                parameters: [
                  {
                    displayName: 'start',
                    description:
                      'The zero-based location in the array from which to start removing elements.',
                    kind: 2,
                  },
                  {
                    displayName: 'deleteCount',
                    description: 'The number of elements to remove.',
                    kind: 2,
                  },
                  {
                    displayName: 'items',
                    description:
                      'Elements to insert into the array in place of the deleted elements.',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                description:
                  'Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.',
                kind: 11,
              },
              {
                parameters: [
                  {
                    displayName: 'items',
                    description:
                      'Elements to insert at the start of the array.',
                    kind: 16,
                    elements: [
                      {
                        displayName: 'T',
                        kind: 15,
                      },
                    ],
                  },
                ],
                description:
                  'Inserts new elements at the start of an array, and returns the new length of the array.',
                displayName: 'unshift',
                kind: 11,
                returns: {
                  kind: 2,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'searchElement',
                    description: 'The value to locate in the array.',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'fromIndex',
                    description:
                      'The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.',
                    kind: 2,
                    optional: true,
                  },
                ],
                description:
                  'Returns the index of the first occurrence of a value in an array, or -1 if it is not present.',
                displayName: 'indexOf',
                kind: 11,
                returns: {
                  kind: 2,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'searchElement',
                    description: 'The value to locate in the array.',
                    kind: 15,
                    type: 'T',
                  },
                  {
                    displayName: 'fromIndex',
                    description:
                      'The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.',
                    kind: 2,
                    optional: true,
                  },
                ],
                description:
                  'Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.',
                displayName: 'lastIndexOf',
                kind: 11,
                returns: {
                  kind: 2,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'predicate',
                    description:
                      'A function that accepts up to three arguments. The every method calls\nthe predicate function for each element in the array until the predicate returns a value\nwhich is coercible to the Boolean value false, or until the end of the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'value',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'index',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      kind: 15,
                      displayName: 'S',
                    },
                  },
                  {
                    displayName: 'thisArg',
                    description:
                      'An object to which the this keyword can refer in the predicate function.\nIf thisArg is omitted, undefined is used as the this value.',
                    kind: 17,
                    optional: true,
                  },
                ],
                description:
                  'Determines whether all the members of an array satisfy the specified test.',
                kind: 11,
                returns: {
                  kind: 16,
                  elements: [
                    {
                      displayName: 'S',
                      kind: 15,
                    },
                  ],
                },
                types: [
                  {
                    displayName: 'S',
                  },
                ],
              },
              {
                parameters: [
                  {
                    displayName: 'predicate',
                    description:
                      'A function that accepts up to three arguments. The every method calls\nthe predicate function for each element in the array until the predicate returns a value\nwhich is coercible to the Boolean value false, or until the end of the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'value',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'index',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      kind: 9,
                    },
                  },
                  {
                    displayName: 'thisArg',
                    description:
                      'An object to which the this keyword can refer in the predicate function.\nIf thisArg is omitted, undefined is used as the this value.',
                    kind: 17,
                    optional: true,
                  },
                ],
                description:
                  'Determines whether all the members of an array satisfy the specified test.',
                kind: 11,
                returns: {
                  kind: 3,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'predicate',
                    description:
                      'A function that accepts up to three arguments. The some method calls\nthe predicate function for each element in the array until the predicate returns a value\nwhich is coercible to the Boolean value true, or until the end of the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'value',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'index',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      kind: 9,
                    },
                  },
                  {
                    displayName: 'thisArg',
                    description:
                      'An object to which the this keyword can refer in the predicate function.\nIf thisArg is omitted, undefined is used as the this value.',
                    kind: 17,
                    optional: true,
                  },
                ],
                description:
                  'Determines whether the specified callback function returns true for any element of an array.',
                displayName: 'some',
                kind: 11,
                returns: {
                  kind: 3,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'callbackfn',
                    description:
                      'A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'value',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'index',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      kind: 12,
                    },
                  },
                  {
                    displayName: 'thisArg',
                    description:
                      'An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.',
                    kind: 17,
                    optional: true,
                  },
                ],
                description:
                  'Performs the specified action for each element in an array.',
                displayName: 'forEach',
                kind: 11,
                returns: {
                  kind: 12,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'callbackfn',
                    description:
                      'A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'value',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'index',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      displayName: 'U',
                      kind: 15,
                    },
                  },
                  {
                    displayName: 'thisArg',
                    description:
                      'An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.',
                    kind: 17,
                    optional: true,
                  },
                ],
                description:
                  'Calls a defined callback function on each element of an array, and returns an array that contains the results.',
                displayName: 'map',
                kind: 11,
                returns: {
                  kind: 16,
                  elements: [
                    {
                      displayName: 'U',
                      kind: 15,
                    },
                  ],
                },
                types: [
                  {
                    displayName: 'U',
                  },
                ],
              },
              {
                parameters: [
                  {
                    displayName: 'predicate',
                    description:
                      'A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'value',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'index',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      kind: 15,
                      displayName: 'S',
                    },
                  },
                  {
                    displayName: 'thisArg',
                    description:
                      'An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.',
                    kind: 17,
                    optional: true,
                  },
                ],
                description:
                  'Returns the elements of an array that meet the condition specified in a callback function.',
                kind: 11,
                returns: {
                  kind: 16,
                  elements: [
                    {
                      displayName: 'S',
                      kind: 15,
                    },
                  ],
                },
                types: [
                  {
                    displayName: 'S',
                  },
                ],
              },
              {
                parameters: [
                  {
                    displayName: 'predicate',
                    description:
                      'A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'value',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'index',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      kind: 9,
                    },
                  },
                  {
                    displayName: 'thisArg',
                    description:
                      'An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.',
                    kind: 17,
                    optional: true,
                  },
                ],
                description:
                  'Returns the elements of an array that meet the condition specified in a callback function.',
                kind: 11,
                returns: {
                  kind: 16,
                  elements: [
                    {
                      displayName: 'T',
                      kind: 15,
                    },
                  ],
                },
              },
              {
                parameters: [
                  {
                    displayName: 'callbackfn',
                    description:
                      'A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'previousValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentIndex',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      displayName: 'T',
                      kind: 15,
                    },
                  },
                ],
                description:
                  'Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.',
                kind: 11,
                returns: {
                  displayName: 'T',
                  kind: 15,
                },
              },
              {
                kind: 11,
                parameters: [
                  {
                    displayName: 'callbackfn',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'previousValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentIndex',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      displayName: 'T',
                      kind: 15,
                    },
                  },
                  {
                    displayName: 'initialValue',
                    kind: 15,
                    type: 'T',
                  },
                ],
                returns: {
                  displayName: 'T',
                  kind: 15,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'callbackfn',
                    description:
                      'A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'previousValue',
                        kind: 15,
                        type: 'U',
                      },
                      {
                        displayName: 'currentValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentIndex',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      displayName: 'U',
                      kind: 15,
                    },
                  },
                  {
                    displayName: 'initialValue',
                    description:
                      'If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.',
                    kind: 15,
                    type: 'U',
                  },
                ],
                description:
                  'Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.',
                kind: 11,
                returns: {
                  displayName: 'U',
                  kind: 15,
                },
                types: [
                  {
                    displayName: 'U',
                  },
                ],
              },
              {
                parameters: [
                  {
                    displayName: 'callbackfn',
                    description:
                      'A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'previousValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentIndex',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      displayName: 'T',
                      kind: 15,
                    },
                  },
                ],
                description:
                  'Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.',
                kind: 11,
                returns: {
                  displayName: 'T',
                  kind: 15,
                },
              },
              {
                kind: 11,
                parameters: [
                  {
                    displayName: 'callbackfn',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'previousValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentIndex',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      displayName: 'T',
                      kind: 15,
                    },
                  },
                  {
                    displayName: 'initialValue',
                    kind: 15,
                    type: 'T',
                  },
                ],
                returns: {
                  displayName: 'T',
                  kind: 15,
                },
              },
              {
                parameters: [
                  {
                    displayName: 'callbackfn',
                    description:
                      'A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.',
                    kind: 11,
                    parameters: [
                      {
                        displayName: 'previousValue',
                        kind: 15,
                        type: 'U',
                      },
                      {
                        displayName: 'currentValue',
                        kind: 15,
                        type: 'T',
                      },
                      {
                        displayName: 'currentIndex',
                        kind: 2,
                      },
                      {
                        displayName: 'array',
                        kind: 16,
                        elements: [
                          {
                            displayName: 'T',
                            kind: 15,
                          },
                        ],
                      },
                    ],
                    returns: {
                      displayName: 'U',
                      kind: 15,
                    },
                  },
                  {
                    displayName: 'initialValue',
                    description:
                      'If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.',
                    kind: 15,
                    type: 'U',
                  },
                ],
                description:
                  'Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.',
                kind: 11,
                returns: {
                  displayName: 'U',
                  kind: 15,
                },
                types: [
                  {
                    displayName: 'U',
                  },
                ],
              },
              {
                kind: 20,
                index: {
                  displayName: 'n',
                  kind: 2,
                },
                type: {
                  displayName: 'T',
                  kind: 15,
                },
              },
            ],
          },
        },
        generics: [
          {
            displayName: 'Type',
          },
        ],
      },
    });
  });
  it('extend', () => {
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
export type ExtendT = T & {
  /**
   * own member
   */
  honey: boolean;
};
`);
    expect(results).toEqual({
      ExtendT: {
        description: 'extended type',
        kind: 15,
        properties: [
          {
            description: 'base type member property',
            displayName: 'm',
            kind: 1,
            parent: 'T',
          },
          {
            description: 'own member',
            displayName: 'honey',
            kind: 3,
          },
        ],
        displayName: 'ExtendT',
        propParents: {
          T: {
            description: 'base type',
            displayName: 'T',
            kind: 15,
            properties: [
              {
                description: 'base type member property',
                displayName: 'm',
                kind: 1,
              },
            ],
          },
        },
      },
    });
  });
  it('nested generic type', () => {
    const results = parseCode(`
    type UnionGenericType<Type> = Type | 'a string';

    /**
     * generic interface 
     */ 
    type GenericArrayType<Type> = {
      /**
       * member field
       */ 
      m: Type
    } 
    export type NestedGenericType<Type> = GenericArrayType<UnionGenericType<Type>>;
`);
    expect(results).toEqual({
      NestedGenericType: {
        kind: 15,
        properties: [
          {
            description: 'member field',
            displayName: 'm',
            kind: 15,
            type: 'Type',
            parent: 'GenericArrayType',
          },
        ],
        displayName: 'NestedGenericType',
        propParents: {
          GenericArrayType: {
            description: 'generic interface',
            displayName: 'GenericArrayType',
            kind: 15,
            generics: [
              {
                displayName: 'Type',
              },
            ],
            properties: [
              {
                description: 'member field',
                displayName: 'm',
                kind: 15,
                type: 'Type',
              },
            ],
          },
        },
        generics: [
          {
            displayName: 'Type',
          },
        ],
      },
    });
  });

  it('index prop', () => {
    const results = parseCode(`
    export type IndexT = {
      /**
       * type index property
       */ 
      [index: string]: { a: Bear; b: null };
      /**
       * this is an additional name prop
       */ 
      name?: string;
    };
`);
    expect(results).toEqual({
      IndexT: {
        kind: 15,
        properties: [
          {
            kind: 20,
            index: {
              kind: 1,
            },
            type: {
              kind: 15,
              properties: [
                {
                  displayName: 'a',
                  kind: 15,
                  type: 'Bear',
                },
                {
                  displayName: 'b',
                  kind: 10,
                },
              ],
            },
          },
          {
            description: 'this is an additional name prop',
            optional: true,
            displayName: 'name',
            kind: 1,
          },
        ],
        displayName: 'IndexT',
      },
    });
  });
  it('typed and initialized', () => {
    const results = parseCode(`
    /**
     * this is an object
     */
    export const obj: {
      /**
       * field a
       */ 
      a: string;
      /**
       * field b
       */ 
      b?: number;
    } = { a: 'field a'};
`);
    expect(results).toEqual({
      obj: {
        description: 'this is an object',
        kind: 15,
        properties: [
          {
            description: 'field a',
            displayName: 'a',
            kind: 1,
          },
          {
            description: 'field b',
            optional: true,
            displayName: 'b',
            kind: 2,
          },
        ],
        displayName: 'obj',
      },
    });
  });

  it('union generic type', () => {
    const results = parseCode(`
    export type UnionGenericType<Type> = Type | null;
`);
    expect(results).toEqual({
      UnionGenericType: {
        displayName: 'UnionGenericType',
        kind: 4,
        properties: [
          {
            displayName: 'Type',
            kind: 15,
          },
          {
            kind: 10,
          },
        ],
      },
    });
  });

  it('generic type', () => {
    const results = parseCode(`
    export type GenericType<Type> = {
      contents: Type;
    };
  `);
    expect(results).toEqual({
      GenericType: {
        kind: 15,
        generics: [
          {
            displayName: 'Type',
          },
        ],
        properties: [
          {
            type: 'Type',
            kind: 15,
            displayName: 'contents',
          },
        ],
        displayName: 'GenericType',
      },
    });
  });
  it('basic type', () => {
    const results = parseCode(`
      /**
       * this is type
       */
      export type T = {
        /**
         * type member property
         */
        m: string;
      };
      
  `);
    expect(results).toEqual({
      T: {
        description: 'this is type',
        kind: 15,
        properties: [
          {
            description: 'type member property',
            kind: 1,
            displayName: 'm',
          },
        ],
        displayName: 'T',
      },
    });
  });
});
