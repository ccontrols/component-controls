import path from 'path';
import { Component } from '@component-controls/core';
import { defaultParserOptions, defaultResolveOptions } from '../src/index';
import { extractComponent } from '../src/babel/extract-component';

export type ComponentCallback = (component: Component) => void;
export const componentFixture = (
  fileName: string,
  callback: ComponentCallback,
): void => {
  const filePathName = path.resolve(
    __dirname,
    'fixtures',
    'extract-component',
    fileName,
  );
  it(fileName, async () => {
    const component = await extractComponent(
      'Button',
      filePathName,
      undefined,
      {
        parser: defaultParserOptions,
        resolver: defaultResolveOptions,
        components: {
          sourceFiles: false,
          fileInfo: false,
          package: {
            browseLink: true,
            docsLink: true,
            issuesLink: true,
          },
          resolveFile: (componentName: string, filePath: string) => {
            if (filePath.includes('/theme-ui/dist')) {
              return `${
                filePath.split('/theme-ui/dist')[0]
              }/@theme-ui/components/src/${componentName}.js`;
            }
            return filePath;
          },
        },
      },
    );
    await callback(component);
  });
};
describe('extract-component', () => {
  componentFixture('default-alias-import.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-default-class-export',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      localDependencies: {},
      importedName: 'namespace',
      jsx: [
        {
          children: [],
          name: 'button',
          attributes: [],
        },
      ],
      fileName: 'button-default-class-export.js',
    });
  });

  componentFixture('default-import.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-default-arrow-func',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      localDependencies: {},
      importedName: 'default',
      jsx: [
        {
          children: [],
          name: 'button',
          attributes: [],
        },
      ],
      fileName: 'button-default-arrow-func.js',
    });
  });

  componentFixture('jsx-component.ts', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/component-jsx',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
          {
            name: 'FC',
            importedName: 'FC',
          },
          {
            name: 'MouseEventHandler',
            importedName: 'MouseEventHandler',
          },
        ],
      },
      localDependencies: {
        './button-default-class': [
          {
            name: 'DefaultButton',
            importedName: 'default',
          },
        ],
        './button-props': [
          {
            name: 'PropsButton',
            importedName: 'Button',
          },
        ],
      },
      importedName: 'Button',
      jsx: [
        {
          children: [
            {
              children: [
                {
                  children: [],
                  name: 'input',
                  attributes: ['id', 'name', 'defaultValue'],
                },
                {
                  children: [],
                  name: 'PropsButton',
                  attributes: ['name', 'onClick'],
                  from: './button-props',
                  importedName: 'Button',
                },
              ],
              name: 'div',
              attributes: ['className'],
            },
            {
              children: [],
              name: 'DefaultButton',
              attributes: ['name'],
              from: './button-default-class',
              importedName: 'default',
            },
          ],
          name: 'React.Fragment',
          attributes: [],
          from: 'react',
          importedName: 'Fragment',
        },
      ],
      fileName: 'component-jsx.tsx',
    });
  });

  componentFixture('kind-component.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
    });
  });

  componentFixture('named-alias-import.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-named-arrow-func',
      importedName: 'Btn',
    });
  });

  componentFixture('named-import.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-named-class',
      importedName: 'Button',
      fileName: 'button-named-class.js',
    });
  });

  componentFixture('node-modules-source.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '@component-controls/components',
      importedName: 'Subtitle',
      fileName: 'index.js',
    });
  });

  componentFixture('node-modules.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: 'theme-ui',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      localDependencies: {
        './Box': [
          {
            name: 'Box',
            importedName: 'default',
          },
        ],
      },
      importedName: 'Button',
      jsx: [
        {
          children: [],
          name: 'Box',
          attributes: ['ref', 'as', 'variant', '__themeKey', '__css'],
          from: './Box',
          importedName: 'default',
        },
      ],
      fileName: 'Button.js',
    });
  });

  componentFixture('non-existing-file.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: './Button',
      importedName: 'Btn',
    });
  });

  componentFixture('parameters-component.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-named-arrow-func',
      importedName: 'Button',
      fileName: 'button-named-arrow-func.js',
    });
  });

  componentFixture('story-component.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-named-class',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'default',
          },
        ],
      },
      localDependencies: {},
      importedName: 'Button',
      jsx: [
        {
          children: [],
          name: 'button',
          attributes: [],
        },
      ],
      fileName: 'button-named-class.js',
    });
  });
});
