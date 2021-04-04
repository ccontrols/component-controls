import { sum } from './sum';
describe('testing sum', () => {
  it('sum', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
