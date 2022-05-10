import path from 'path';
import { Component } from '@component-controls/core';
import { defaultParserOptions, defaultResolveOptions } from '../src/index';
import { extractComponent } from '../src/babel/extract-component';
import { extractCSFStories } from '../src/babel/esm-stories';

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
    const options = {
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
    };
    const store = await extractCSFStories(options, {
      filePath: filePathName,
    });
    const extractedComponent = store.components[
      Object.keys(store.components)[0]
    ] as Parameters<typeof extractComponent>[1];
    const component = await extractComponent(
      store,
      extractedComponent,
      filePathName,
    );
    await callback(component);
  });
};
describe('extract-component', () => {
  componentFixture('node-modules-source.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '@component-controls/components',
      importedName: 'Subtitle',
      fileName: 'index.js',
    });
  });
  componentFixture('story-component.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-named-class.js',
      info: {
        externalDependencies: {
          react: [
            {
              name: 'React',
              importedName: 'default',
            },
          ],
        },
        localDependencies: {},
      },
      importedName: 'Button',

      fileName: 'button-named-class.js',
    });
  });

  componentFixture('default-alias-import.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-default-class-export.js',
      info: {
        externalDependencies: {
          react: [
            {
              name: 'React',
              importedName: 'default',
            },
          ],
        },
        localDependencies: {},
      },
      importedName: 'default',
      fileName: 'button-default-class-export.js',
    });
  });

  componentFixture('default-import.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-default-arrow-func.js',
      info: {
        externalDependencies: {
          react: [
            {
              name: 'React',
              importedName: 'default',
            },
          ],
        },
        localDependencies: {},
      },
      importedName: 'default',
      fileName: 'button-default-arrow-func.js',
    });
  });

  componentFixture('jsx-component.ts', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/component-jsx.tsx',
      info: {
        externalDependencies: {
          react: [
            {
              name: 'FC',
              importedName: 'FC',
            },
            {
              name: 'MouseEventHandler',
              importedName: 'MouseEventHandler',
            },
            {
              name: 'React',
              importedName: 'default',
            },
          ],
        },
        localDependencies: {
          './button-default-class.js': [
            {
              componentKey: '2395ab6a899c147a3e24534dd0865aec',
              name: 'DefaultButton',
              importedName: 'default',
            },
          ],
          './button-props.tsx': [
            {
              componentKey: '90796fce853a6d6a89b445c6e95bc01b',
              name: 'PropsButton',
              importedName: 'Button',
            },
          ],
        },
      },
      importedName: 'Button',

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
      from: '../components/button-named-arrow-func.js',
      importedName: 'Btn',
    });
  });

  componentFixture('named-import.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: '../components/button-named-class.js',
      importedName: 'Button',
      fileName: 'button-named-class.js',
    });
  });

  componentFixture('node-modules.js', component => {
    expect(component).toMatchObject({
      name: 'Button',
      from: 'theme-ui',
      info: {
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
      },
      importedName: 'Button',

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
      from: '../components/button-named-arrow-func.js',
      importedName: 'Button',
      fileName: 'button-named-arrow-func.js',
    });
  });
});
