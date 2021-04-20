import path from 'path';
import { Component } from '@component-controls/core';
import {
  defaultParserOptions,
  defaultResolveOptions,
  LoadingDocStore,
} from '../src/index';
import {
  extractComponent,
  extractStoreComponent,
} from '../src/babel/extract-component';

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
  it('Table', async () => {
    const store: LoadingDocStore = {
      stories: {},
      packages: {},
      components: {},
      doc: {
        title: '',
        component: 'Table',
        componentsLookup: {
          Table: '../../../ui/components/src/Table/Table.tsx',
        },
      },
    };
    await extractStoreComponent(
      store,
      path.resolve(
        __dirname,
        '../../../ui/components/src/Table/Table.stories.tsx',
      ),
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
        },
      },
    );
    expect(store.components[store.doc.componentsLookup['Table']]).toMatchObject(
      {
        name: 'Table',
        from: './Table',
        externalDependencies: {
          react: [
            {
              name: 'Fragment',
              importedName: 'Fragment',
            },
            {
              name: 'ReactNode',
              importedName: 'ReactNode',
            },
            {
              name: 'ReactElement',
              importedName: 'ReactElement',
            },
            {
              name: 'useEffect',
              importedName: 'useEffect',
            },
          ],
        },
        localDependencies: {
          './TableFilter': [
            {
              name: 'GlobalFilter',
              importedName: 'GlobalFilter',
            },
          ],
          './TableGrouping': [
            {
              name: 'useExpanderColumn',
              importedName: 'useExpanderColumn',
            },
          ],
          './TableRowSelection': [
            {
              name: 'useRowSelectionColumn',
              importedName: 'useRowSelectionColumn',
            },
          ],
          './useTableLayout': [
            {
              name: 'useTableLayout',
              importedName: 'useTableLayout',
            },
          ],
          './TablePagination': [
            {
              name: 'TablePagination',
              importedName: 'TablePagination',
            },
            {
              name: 'TablePaginationProps',
              importedName: 'TablePaginationProps',
            },
          ],
        },
        importedName: 'Table',
        fileName: 'Table.tsx',
        jest: {
          results: [
            {
              leaks: false,
              testFilePath: 'Table.test.ts',
              testResults: [
                {
                  ancestorTitles: ['Table'],
                  failureDetails: [],
                  failureMessages: [],
                  fullName: 'Table overview',
                  location: null,
                  numPassingAsserts: 0,
                  status: 'passed',
                  title: 'overview',
                },
                {
                  ancestorTitles: ['Table'],
                  failureDetails: [],
                  failureMessages: [],
                  fullName: 'Table noHeader',
                  location: null,
                  numPassingAsserts: 0,
                  status: 'passed',
                  title: 'noHeader',
                },
                {
                  ancestorTitles: ['Table'],
                  failureDetails: [],
                  failureMessages: [],
                  fullName: 'Table sortable',
                  location: null,
                  numPassingAsserts: 0,
                  status: 'passed',
                  title: 'sortable',
                },
                {
                  ancestorTitles: ['Table'],
                  failureDetails: [],
                  failureMessages: [],
                  fullName: 'Table filterable',
                  location: null,
                  numPassingAsserts: 0,
                  status: 'passed',
                  title: 'filterable',
                },
                {
                  ancestorTitles: ['Table'],
                  failureDetails: [],
                  failureMessages: [],
                  fullName: 'Table grouping',
                  location: null,
                  numPassingAsserts: 0,
                  status: 'passed',
                  title: 'grouping',
                },
                {
                  ancestorTitles: ['Table'],
                  failureDetails: [],
                  failureMessages: [],
                  fullName: 'Table editing',
                  location: null,
                  numPassingAsserts: 0,
                  status: 'passed',
                  title: 'editing',
                },
                {
                  ancestorTitles: ['Table'],
                  failureDetails: [],
                  failureMessages: [],
                  fullName: 'Table rowSelect',
                  location: null,
                  numPassingAsserts: 0,
                  status: 'passed',
                  title: 'rowSelect',
                },
                {
                  ancestorTitles: ['Table'],
                  failureDetails: [],
                  failureMessages: [],
                  fullName: 'Table pagination',
                  location: null,
                  numPassingAsserts: 0,
                  status: 'passed',
                  title: 'pagination',
                },
              ],
            },
          ],
          coverage: {
            'Table.tsx': {
              lines: {
                total: 51,
                covered: 50,
                skipped: 0,
                pct: 98.04,
              },
              functions: {
                total: 10,
                covered: 7,
                skipped: 0,
                pct: 70,
              },
              statements: {
                total: 56,
                covered: 55,
                skipped: 0,
                pct: 98.21,
              },
              branches: {
                total: 49,
                covered: 40,
                skipped: 0,
                pct: 81.63,
              },
            },
            'TableFilter.tsx': {
              lines: {
                total: 6,
                covered: 5,
                skipped: 0,
                pct: 83.33,
              },
              functions: {
                total: 2,
                covered: 1,
                skipped: 0,
                pct: 50,
              },
              statements: {
                total: 6,
                covered: 5,
                skipped: 0,
                pct: 83.33,
              },
              branches: {
                total: 4,
                covered: 1,
                skipped: 0,
                pct: 25,
              },
            },
            'TableGrouping.tsx': {
              lines: {
                total: 20,
                covered: 19,
                skipped: 0,
                pct: 95,
              },
              functions: {
                total: 8,
                covered: 8,
                skipped: 0,
                pct: 100,
              },
              statements: {
                total: 21,
                covered: 20,
                skipped: 0,
                pct: 95.24,
              },
              branches: {
                total: 20,
                covered: 15,
                skipped: 0,
                pct: 75,
              },
            },
            'TableRowSelection.tsx': {
              lines: {
                total: 8,
                covered: 8,
                skipped: 0,
                pct: 100,
              },
              functions: {
                total: 5,
                covered: 5,
                skipped: 0,
                pct: 100,
              },
              statements: {
                total: 10,
                covered: 10,
                skipped: 0,
                pct: 100,
              },
              branches: {
                total: 0,
                covered: 0,
                skipped: 0,
                pct: 100,
              },
            },
            'useTableLayout.ts': {
              lines: {
                total: 7,
                covered: 7,
                skipped: 0,
                pct: 100,
              },
              functions: {
                total: 3,
                covered: 3,
                skipped: 0,
                pct: 100,
              },
              statements: {
                total: 8,
                covered: 8,
                skipped: 0,
                pct: 100,
              },
              branches: {
                total: 4,
                covered: 4,
                skipped: 0,
                pct: 100,
              },
            },
            'TablePagination.tsx': {
              lines: {
                total: 17,
                covered: 9,
                skipped: 0,
                pct: 52.94,
              },
              functions: {
                total: 10,
                covered: 3,
                skipped: 0,
                pct: 30,
              },
              statements: {
                total: 18,
                covered: 10,
                skipped: 0,
                pct: 55.56,
              },
              branches: {
                total: 24,
                covered: 8,
                skipped: 0,
                pct: 33.33,
              },
            },
          },
        },
      },
    );
  }, 50000);
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
