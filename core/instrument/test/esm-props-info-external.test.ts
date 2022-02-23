import path from 'path';
import { ComponentProp } from '@structured-types/api';
import { fixtureToTest, TestCallback } from './loadTestFiles';
import { getComponentProps } from '../src/misc/props-info';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'props-info-external'], fileName, callback, {
    stories: { sourceFiles: false },
  });

describe('esm-props-info-external', () => {
  createTest('theme-ui.jsx', async parsed => {
    const component = parsed.components[parsed.doc.componentsLookup['Button']];
    (component.info as ComponentProp).properties = (
      component.info as ComponentProp
    ).properties.filter(p => p.name === 'as' || p.name === 'm');
    expect(component).toMatchObject({
      name: 'Button',
      from: 'theme-ui',
      importedName: 'Button',
      fileName: 'index.d.ts',
      info: {
        name: 'Button',
        extension: 'react',
        kind: 15,
        loc: {
          loc: {
            start: {
              line: 69,
              col: 14,
            },
            end: {
              line: 69,
              col: 20,
            },
          },
        },
        properties: [
          {
            name: 'as',
            parent: {
              name: 'BoxOwnProps',
            },
            optional: true,
            kind: 15,
            type: 'React.ElementType',
          },
          {
            name: 'm',
            parent: {
              name: 'SpaceProps',
            },
            optional: true,
            kind: 4,
            description: 'Margin on top, left, bottom and right',
          },
        ],
        description: 'Primitive button component with variants',
        see: ['https://theme-ui.com/components/button'],
        externalDependencies: {
          react: [
            {
              name: 'React',
              importedName: 'default',
            },
          ],
          '@emotion/styled': [
            {
              name: 'StyledComponent',
              importedName: 'StyledComponent',
            },
          ],
          '@emotion/react': [
            {
              name: 'Interpolation',
              importedName: 'Interpolation',
            },
          ],
          'styled-system': [
            {
              name: 'SpaceProps',
              importedName: 'SpaceProps',
            },
            {
              name: 'ColorProps',
              importedName: 'ColorProps',
            },
            {
              name: 'MarginProps',
              importedName: 'MarginProps',
            },
          ],
          '@theme-ui/css': [
            {
              name: 'ResponsiveStyleValue',
              importedName: 'ResponsiveStyleValue',
            },
            {
              name: 'ThemeUIStyleObject',
              importedName: 'ThemeUIStyleObject',
            },
          ],
        },
        localDependencies: {},
      },
      fileInfo: {
        sloc: {
          total: 395,
          source: 162,
          comment: 193,
          single: 2,
          block: 191,
          mixed: 0,
          empty: 40,
          todo: 0,
          blockEmpty: 0,
        },
      },
    });
  });
  it('component', async () => {
    const result = getComponentProps(
      path.resolve(
        __dirname,
        '../../../node_modules/@theme-ui/components/index.d.ts',
      ),
      'Button',
    ) as ComponentProp;
    result.properties = result.properties.filter(p => p.name === 'margin');
    expect(result).toMatchObject({
      name: 'Button',
      extension: 'react',
      kind: 15,
      loc: {
        loc: {
          start: {
            line: 69,
            col: 14,
          },
          end: {
            line: 69,
            col: 20,
          },
        },
      },
      properties: [
        {
          name: 'margin',
          parent: {
            name: 'SpaceProps',
          },
          optional: true,
          kind: 4,
          description: 'Margin on top, left, bottom and right',
        },
      ],
      description: 'Primitive button component with variants',
      see: ['https://theme-ui.com/components/button'],
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
        '@emotion/styled': [
          {
            name: 'StyledComponent',
            importedName: 'StyledComponent',
          },
        ],
        '@emotion/react': [
          {
            name: 'Interpolation',
            importedName: 'Interpolation',
          },
        ],
        'styled-system': [
          {
            name: 'SpaceProps',
            importedName: 'SpaceProps',
          },
          {
            name: 'ColorProps',
            importedName: 'ColorProps',
          },
          {
            name: 'MarginProps',
            importedName: 'MarginProps',
          },
        ],
        '@theme-ui/css': [
          {
            name: 'ResponsiveStyleValue',
            importedName: 'ResponsiveStyleValue',
          },
          {
            name: 'ThemeUIStyleObject',
            importedName: 'ThemeUIStyleObject',
          },
        ],
      },
      localDependencies: {},
    });
  });
});
