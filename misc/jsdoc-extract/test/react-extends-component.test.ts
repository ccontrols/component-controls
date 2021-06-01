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
      type: 'class',
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
      type: 'class',
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
      type: 'class',
      properties: [],
    },
  });
});
