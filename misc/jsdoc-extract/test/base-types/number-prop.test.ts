import { parseCode } from '../../src/index';
describe('number', () => {
  it('default export', () => {
    const results = parseCode(`
let mynumber: number;
export default mynumber;
  
`);
    expect(results).toEqual({
      default: {
        kind: 2,
        displayName: 'mynumber',
      },
    });
  });
  it('type', () => {
    const results = parseCode(`
let mynumber: number;
export { mynumber as num };
  
`);
    expect(results).toEqual({
      num: {
        kind: 2,
        displayName: 'mynumber',
      },
    });
  });
  it('initializer', () => {
    const results = parseCode(`
export const myNum = 3.14;
  
`);
    expect(results).toEqual({
      myNum: {
        kind: 2,
        value: 3.14,
        displayName: 'myNum',
      },
    });
  });
});
