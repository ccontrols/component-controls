import { deepMerge, deepMergeArrays } from '../src';
describe('deep merge', () => {
  it('Should append arrays', () => {
    const a = deepMerge(
      {
        a: [{ a: 'a', b: 'b' }],
      },
      {
        a: [{ c: 'c', d: 'd' }],
      },
    );
    expect(a).toMatchObject({
      a: [
        {
          a: 'a',
          b: 'b',
        },
        {
          c: 'c',
          d: 'd',
        },
      ],
    });
  });

  it('Should merge arrays', () => {
    const a = deepMergeArrays(
      {
        a: [{ a: 'a', b: 'b' }],
      },
      {
        a: [{ c: 'c', d: 'd' }],
      },
    );
    expect(a).toMatchObject({
      a: [
        {
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd',
        },
      ],
    });
  });
  it('Should merge arrays and fields', () => {
    const a = deepMergeArrays(
      {
        a: [
          { a: 'a', b: 'b' },
          { c: 'c', d: 'd' },
        ],
      },
      {
        a: [{ b: 'c' }],
      },
    );
    expect(a).toMatchObject({
      a: [
        {
          a: 'a',
          b: 'c',
        },
      ],
    });
  });
  it('Should merge arrays mistmatched fields', () => {
    const a = deepMergeArrays(
      {
        b: [{ a: 'a', b: 'b' }],
      },
      {
        a: [{ b: 'c' }],
      },
    );
    expect(a).toMatchObject({
      a: [
        {
          b: 'c',
        },
      ],
      b: [
        {
          a: 'a',
          b: 'b',
        },
      ],
    });
  });
  it('Should merge arrays of string', () => {
    const a = deepMergeArrays(
      {
        a: ['abc'],
      },
      {
        a: ['abc', 'cde', 'efg'],
      },
    );
    expect(a).toMatchObject({ a: ['abc', 'cde', 'efg'] });
  });
});
