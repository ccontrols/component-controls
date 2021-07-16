import path from 'path';
import { parseFiles } from '../../../src/index';

describe('params', () => {
  it('default-string', () => {
    const results = parseFiles([path.resolve(__dirname, 'default-string.js')]);
    expect(results).toEqual({
      sayHello: {
        displayName: 'sayHello',
        kind: 11,
        parameters: [
          {
            displayName: 'somebody',
            description: "Somebody's name.",
            kind: 1,
            value: 'John Doe',
            optional: true,
          },
        ],
      },
    });
  });
  it('default-numeric', () => {
    const results = parseFiles([path.resolve(__dirname, 'default-numeric.js')]);
    expect(results).toEqual({
      m: {
        displayName: 'm',
        kind: 11,
        parameters: [
          {
            displayName: 'x',
            description: 'd4 damage',
            kind: 2,
            optional: true,
            value: 1,
          },
        ],
      },
    });
  });

  it('optional', () => {
    const results = parseFiles([path.resolve(__dirname, 'optional.js')]);
    expect(results).toEqual({
      sayHello: {
        displayName: 'sayHello',
        kind: 11,
        parameters: [
          {
            displayName: 'somebody',
            description: "Somebody's name.",
            kind: 1,
            optional: true,
          },
        ],
        description: 'An optional parameter (using JSDoc syntax)',
      },
    });
  });
  it('name-type-description', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'name-type-description.js'),
    ]);
    expect(results).toEqual({
      sayHello: {
        displayName: 'sayHello',
        kind: 11,
        parameters: [
          {
            kind: 1,
            displayName: 'somebody',
            description: "Somebody's name.",
          },
        ],
      },
    });
  });

  it('with-hyphen-description', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'with-hyphen-description.js'),
    ]);
    expect(results).toEqual({
      sayHello: {
        displayName: 'sayHello',
        kind: 11,
        parameters: [
          {
            kind: 1,
            displayName: 'somebody',
            description: "Somebody's name.",
          },
        ],
      },
    });
  });

  it('name and type', () => {
    const results = parseFiles([path.resolve(__dirname, 'name-type.js')]);
    expect(results).toEqual({
      sayHello: {
        displayName: 'sayHello',
        kind: 11,
        parameters: [
          {
            kind: 1,
            displayName: 'somebody',
          },
        ],
      },
    });
  });
  it('only param', () => {
    const results = parseFiles([path.resolve(__dirname, 'just-param.js')]);
    expect(results).toEqual({
      sayHello: {
        displayName: 'sayHello',
        kind: 11,
        parameters: [
          {
            displayName: 'somebody',
          },
        ],
      },
    });
  });
});
