import path from 'path';
import { ImportTypes } from '@component-controls/core';
import { defaultParserOptions } from '../src/index';
import { extractImports } from '../src/babel/extract-imports';

export type ComponentCallback = (component: ImportTypes) => void;
export const importsFixture = (
  fileName: string,
  callback: ComponentCallback,
): void => {
  const filePathName = path.resolve(__dirname, 'fixtures', 'imports', fileName);
  it(fileName, async () => {
    const component = await extractImports(filePathName, defaultParserOptions);
    await callback(component);
  });
};
describe('extract-imports', () => {
  importsFixture('all-imports.js', imports => {
    expect(imports).toMatchObject({
      Button1: {
        name: 'Button1',
        importedName: 'default',
        from: 'buttons',
      },
      Button2: {
        name: 'Button2',
        importedName: 'namespace',
        from: 'buttons',
      },
      Button: {
        name: 'Button',
        importedName: 'Button',
        from: 'buttons',
      },
      React: {
        name: 'React',
        importedName: 'default',
        from: 'react',
      },
      FC: {
        name: 'FC',
        importedName: 'FC',
        from: 'react',
      },
      MouseEvent: {
        name: 'MouseEvent',
        importedName: 'MouseEvent',
        from: 'react',
      },
      Btn: {
        name: 'Btn',
        importedName: 'Button',
        from: './buttons',
      },
    });
  });

  importsFixture('default-import.js', imports => {
    expect(imports).toMatchObject({
      Button: {
        name: 'Button',
        importedName: 'default',
        from: 'buttons',
      },
    });
  });

  importsFixture('mixed-import.js', imports => {
    expect(imports).toMatchObject({
      React: {
        name: 'React',
        importedName: 'default',
        from: './react',
      },
      FC: {
        name: 'FC',
        importedName: 'FC',
        from: './react',
      },
      MouseEvent: {
        name: 'MouseEvent',
        importedName: 'MouseEvent',
        from: './react',
      },
    });
  });
  importsFixture('named-alias-import.js', imports => {
    expect(imports).toMatchObject({
      Btn: {
        name: 'Btn',
        importedName: 'Button',
        from: 'buttons',
      },
    });
  });

  importsFixture('named-import.js', imports => {
    expect(imports).toMatchObject({
      Button: {
        name: 'Button',
        importedName: 'Button',
        from: 'buttons',
      },
    });
  });

  importsFixture('namespace-import.js', imports => {
    expect(imports).toMatchObject({
      Button: {
        name: 'Button',
        importedName: 'namespace',
        from: 'buttons',
      },
    });
  });
});
