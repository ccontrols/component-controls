import path from 'path';
import { extractProps, extractReact } from '../src/index';

it('class-interface-props', () => {
  const props = extractProps(
    ['ExtendsReactComponent', 'ExtendsComponent', 'ExtendsRComponent'],
    [path.resolve(__dirname, './fixtures/react-extends-component.tsx')],
    extractReact,
  );
  expect(props).toEqual({
    ExtendsReactComponent: {
      examples: [
        {
          content: '<ExtendsComponent />',
        },
      ],
      description: 'class extends default import',
      name: 'ExtendsReactComponent',
      kind: 13,
      properties: [],
    },
    ExtendsComponent: {
      examples: [
        {
          content: '<ExtendsComponent />',
        },
      ],
      description: 'class extends named import with alias',
      name: 'ExtendsComponent',
      kind: 13,
      properties: [],
    },
    ExtendsRComponent: {
      examples: [
        {
          content: '<ExtendsRComponent />',
        },
      ],
      description: 'class extends namespace import',
      name: 'ExtendsRComponent',
      kind: 13,
      properties: [],
    },
  });
});
