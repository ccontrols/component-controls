import { parseCode } from '../../src/index';
describe('boolean', () => {
  it('export named boolean', () => {
    const results = parseCode(`
let bool: boolean = true;
export { bool };
    `);
    expect(results).toEqual({
      bool: {
        kind: 3,
        displayName: 'bool',
      },
    });
  });
  it('false boolean', () => {
    const results = parseCode(`
    export const bool = false;  
`);
    expect(results).toEqual({
      bool: {
        kind: 3,
        value: false,
        displayName: 'bool',
      },
    });
  });
  it('true boolean', () => {
    const results = parseCode(`
export const t = true;
`);
    expect(results).toEqual({
      t: {
        kind: 3,
        value: true,
        displayName: 't',
      },
    });
  });
});
