import { parseCode } from '../../src/index';
describe('unknown', () => {
  it('export const', () => {
    const results = parseCode(`
    export const a: unknown = undefined;
`);
    expect(results).toEqual({
      a: {
        kind: 9,
        value: undefined,
        displayName: 'a',
      },
    });
  });
});
