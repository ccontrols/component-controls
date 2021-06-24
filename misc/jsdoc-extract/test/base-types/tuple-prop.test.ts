import { parseCode } from '../../src/index';
describe('tuple', () => {
  it('optional', () => {
    const results = parseCode(`
    export type OptionalTuple = [number, number, number?];
`);
    expect(results).toEqual({
      OptionalTuple: {
        displayName: 'OptionalTuple',
        kind: 6,
        properties: [
          {
            kind: 2,
          },
          {
            kind: 2,
          },
          {
            optional: true,
            kind: 2,
          },
        ],
      },
    });
  });
  it('optional', () => {
    const results = parseCode(`
    export type SpreadTuple = [...boolean[], string, number];
`);
    expect(results).toEqual({
      SpreadTuple: {
        displayName: 'SpreadTuple',
        kind: 6,
        properties: [
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
          {
            kind: 1,
          },
          {
            kind: 2,
          },
        ],
      },
    });
  });

  it('simple tuple', () => {
    const results = parseCode(`
export type Tuple = [string, number];
`);
    expect(results).toEqual({
      Tuple: {
        kind: 6,
        displayName: 'Tuple',
        properties: [
          {
            kind: 1,
          },
          {
            kind: 2,
          },
        ],
      },
    });
  });
});
