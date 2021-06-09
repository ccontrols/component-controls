import { parseCode } from '../../src/index';
describe('object', () => {
  it('initialized object', () => {
    const results = parseCode(`
    export const initializedObj: object = { a: 12, b: 'test' };
`);
    expect(results).toEqual({
      initializedObj: {
        kind: 0,
        properties: [
          {
            kind: 2,
            value: 12,
            displayName: 'a',
          },
          {
            kind: 1,
            value: 'test',
            displayName: 'b',
          },
        ],
        displayName: 'initializedObj',
      },
    });
  });

  it('export const', () => {
    const results = parseCode(`
    export const obj: object = undefined;
`);
    expect(results).toEqual({
      obj: {
        kind: 0,
        value: undefined,
        displayName: 'obj',
      },
    });
  });
});
