import path from 'path';
import { extractExports } from '../src/extract-exports';
import { ExportTypes } from '../src';

export type ComponentCallback = (component: ExportTypes) => void;
export const exportsFixture = (
  fileName: string,
  callback: ComponentCallback,
): void => {
  const filePathName = path.resolve(__dirname, 'fixtures', 'exports', fileName);
  it(fileName, async () => {
    const component = extractExports(filePathName);
    await callback(component);
  });
};
describe('extract-exports', () => {
  exportsFixture('button-default-class-export.js', exports => {
    expect(exports).toMatchObject({
      default: {
        default: {
          name: 'default',
          internalName: 'Button',
        },
      },
    });
  });

  exportsFixture('button-default-class.js', exports => {
    expect(exports).toMatchObject({
      default: {
        default: {
          name: 'default',
          internalName: 'Button',
        },
      },
    });
  });

  exportsFixture('button-named-class-export.js', exports => {
    expect(exports).toMatchObject({
      named: {
        Button: {
          name: 'Button',
          internalName: 'Button',
        },
      },
    });
  });

  exportsFixture('button-named-class.js', exports => {
    expect(exports).toMatchObject({
      named: {
        Button: {
          name: 'Button',
          internalName: 'Button',
        },
      },
    });
  });

  exportsFixture('cjs-named-export.js', exports => {
    expect(exports).toMatchObject({
      named: {
        Button: {
          name: 'Button',
          internalName: 'Button',
        },
      },
    });
  });

  exportsFixture('export-all-from.js', exports => {
    expect(exports).toMatchObject({
      named: {
        'stories.tsx': {
          name: '*',
          internalName: '*',
          from: 'stories.tsx',
        },
      },
    });
  });

  exportsFixture('export-from-alias.js', exports => {
    expect(exports).toMatchObject({
      named: {
        newStory: {
          name: 'newStory',
          internalName: 'myStory',
          from: 'stories.tsx',
        },
      },
    });
  });

  exportsFixture('export-from.js', exports => {
    expect(exports).toMatchObject({
      named: {
        myStory: {
          name: 'myStory',
          internalName: 'myStory',
          from: 'stories.tsx',
        },
      },
    });
  });

  exportsFixture('named-const-export.js', exports => {
    expect(exports).toMatchObject({
      named: {
        myStory: {
          name: 'myStory',
          internalName: 'myStory',
        },
      },
    });
  });

  exportsFixture('named-export-alias.js', exports => {
    expect(exports).toMatchObject({
      named: {
        exportedStory: {
          name: 'exportedStory',
          internalName: 'myStory',
        },
      },
    });
  });

  exportsFixture('named-export.js', exports => {
    expect(exports).toMatchObject({
      named: {
        namedExport: {
          name: 'namedExport',
          internalName: 'namedExport',
        },
      },
      default: {
        default: {
          name: 'default',
          internalName: 'default',
        },
      },
    });
  });

  exportsFixture('re-exported-name.js', exports => {
    expect(exports).toMatchObject({
      named: {
        myStory: {
          name: 'myStory',
          internalName: 'myStory',
          from: 'stories.tsx',
        },
      },
    });
  });

  exportsFixture('theme-ui-style.ts', exports => {
    expect(exports).toMatchObject({
      named: {
        BoxOwnProps: {
          name: 'BoxOwnProps',
          internalName: 'BoxOwnProps',
        },
        Button: {
          name: 'Button',
          internalName: 'Button',
        },
        ButtonProps: {
          name: 'ButtonProps',
          internalName: 'ButtonProps',
        },
      },
    });
  });
});
