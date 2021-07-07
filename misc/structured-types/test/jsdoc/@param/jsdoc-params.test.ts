import path from 'path';
import { parseFiles } from '../../../src/index';

describe('params', () => {
  it('name, type and description', () => {
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
  it('default value', () => {
    const results = parseFiles([path.resolve(__dirname, 'default-value.js')]);
    expect(results).toEqual({
      sayHello: {
        displayName: 'sayHello',
        kind: 11,
        parameters: [
          {
            displayName: 'somebody',
            description: "Doe] - Somebody's name.",
          },
        ],
      },
    });
  });
  it('optional-jsdoc syntax', () => {
    const results = parseFiles([path.resolve(__dirname, 'optional.js')]);
    expect(results).toEqual({
      sayHello: {
        displayName: 'sayHello',
        kind: 11,
        parameters: [
          {
            displayName: 'somebody',
            description: "Somebody's name.",
            //optional: true,
          },
        ],
        description: 'An optional parameter (using JSDoc syntax)',
      },
    });
  });
  it('description with hyphen', () => {
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
