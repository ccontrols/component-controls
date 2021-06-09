import { parseCode } from '../../src/index';
describe('string', () => {
  it('initializer', () => {
    const results = parseCode(`
export const s = 'a';
  
`);
    expect(results).toEqual({
      s: {
        kind: 1,
        value: 'a',
        displayName: 's',
      },
    });
  });
  it('default export', () => {
    const results = parseCode(`
  let mystring: string;
  export default mystring;

  `);
    expect(results).toEqual({
      default: {
        kind: 1,
        displayName: 'mystring',
      },
    });
  });
  it('type', () => {
    const results = parseCode(`
  let mystring: string;
  export { mystring as str };

  `);
    expect(results).toEqual({
      str: {
        kind: 1,
        displayName: 'mystring',
      },
    });
  });
});
