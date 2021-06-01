import path from 'path';
import { extractProps, extractReact } from '../src/index';

it('import-props', () => {
  const props = extractProps(
    ['ExtendsReactComponent', 'ExtendsComponent', 'ExtendsRComponent'],
    [path.resolve(__dirname, './fixtures/react-extends-component.tsx')],
    extractReact,
  );
  expect(props).toMatchObject({
    ExtendsReactComponent: {
      name: 'ExtendsReactComponent',
      type: 'class',
      properties: [
        {
          name: 'render',
          visibility: 'public',
          type: 'function',
          returns: {
            type: 'reference',
            value: 'React.ReactNode',
          },
        },
      ],
      inherits: [
        {
          type: 'class',
          name: 'React.Component',
        },
      ],
    },
    ExtendsComponent: {
      name: 'ExtendsComponent',
      type: 'class',
      properties: [
        {
          name: 'render',
          visibility: 'public',
          type: 'function',
          returns: {
            type: 'reference',
            value: 'React.ReactNode',
          },
        },
      ],
      inherits: [
        {
          type: 'class',
          value: 'C',
        },
      ],
    },
    ExtendsRComponent: {
      name: 'ExtendsRComponent',
      type: 'class',
      properties: [
        {
          name: 'render',
          visibility: 'public',
          type: 'function',
          returns: {
            type: 'reference',
            value: 'React.ReactNode',
          },
        },
      ],
      inherits: [
        {
          type: 'class',
          name: 'R.Component',
        },
      ],
    },
  });
});
