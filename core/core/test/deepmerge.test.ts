import { deepMerge, mergeConfig } from '../src';
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
    const a = mergeConfig(
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
    const a = mergeConfig(
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
    const a = mergeConfig(
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
    const a = mergeConfig(
      {
        a: ['abc'],
      },
      {
        a: ['abc', 'cde', 'efg'],
      },
    );
    expect(a).toMatchObject({ a: ['abc', 'cde', 'efg'] });
  });

  it('Should merge overwrite tabs', () => {
    const a = mergeConfig(
      {
        pages: {
          story: {
            option: { a: 'a', z: 'z' },
            tabs: { a: 'a', z: 'z' },
          },
        },
      },
      {
        pages: {
          story: {
            option: {
              w: 'w',
              x: 'x',
              y: 'y',
            },
            tabs: {
              w: 'w',
              x: 'x',
              y: 'y',
            },
          },
        },
      },
    );
    expect(a).toMatchObject({
      pages: {
        story: {
          option: {
            a: 'a',
            z: 'z',
            w: 'w',
            x: 'x',
            y: 'y',
          },
          tabs: {
            w: 'w',
            x: 'x',
            y: 'y',
          },
        },
      },
    });
  });
});
