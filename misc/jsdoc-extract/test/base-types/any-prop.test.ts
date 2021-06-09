import { parseCode } from '../../src/index';
describe('any', () => {
  it('export const', () => {
    const results = parseCode(`
    /**
     * this is any type
     */
    export const a: any = 'as';
`);
    expect(results).toEqual({
      a: {
        kind: 17,
        description: 'this is any type',
        value: 'as',
        displayName: 'a',
      },
    });
  });
});
