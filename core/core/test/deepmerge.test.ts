import { deepMerge, deepMergeArrays } from '../src';
describe('deep merge', () => {
  it('Should append arrays', () => {
    expect(
      deepMerge(
        {
          a: [{ a: 'a', b: 'b' }],
        },
        {
          a: [{ c: 'c', d: 'd' }],
        },
      ),
    ).toMatchSnapshot();
  });

  it('Should merge arrays', () => {
    expect(
      deepMergeArrays(
        {
          a: [{ a: 'a', b: 'b' }],
        },
        {
          a: [{ c: 'c', d: 'd' }],
        },
      ),
    ).toMatchSnapshot();
  });
  it('Should merge arrays and fields', () => {
    expect(
      deepMergeArrays(
        {
          a: [
            { a: 'a', b: 'b' },
            { c: 'c', d: 'd' },
          ],
        },
        {
          a: [{ b: 'c' }],
        },
      ),
    ).toMatchSnapshot();
  });
  it('Should merge arrays mistmatched fields', () => {
    expect(
      deepMergeArrays(
        {
          b: [{ a: 'a', b: 'b' }],
        },
        {
          a: [{ b: 'c' }],
        },
      ),
    ).toMatchSnapshot();
  });
});
