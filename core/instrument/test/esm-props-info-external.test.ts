import path from 'path';
import { loadStoriesTests, extractComponentProps } from './loadTestFiles';
import { extractComponent } from '../src/babel/extract-component';
import { defaultParserOptions, defaultResolveOptions } from '../src/index';

describe('external-library', () => {
  loadStoriesTests(
    {
      stories: { sourceFiles: false },
      propsLoaders: [
        { name: '@component-controls/react-docgen-info', test: /\.(js|jsx)$/ },
        {
          name: '@component-controls/react-docgen-typescript-info',
          test: /\.(ts|tsx)$/,
        },
        ,
      ],
      components: {
        sourceFiles: false,
        resolveFile: (componentName, filePath) => {
          if (filePath.includes('theme-ui/dist')) {
            const resolved = path.resolve(
              path.dirname(filePath),
              `../../@theme-ui/components/index.d.ts`,
            );
            return resolved;
          }
          return filePath;
        },
      },
    },
    ['esm', 'props-info-external'],
  );
  extractComponentProps(
    'Button',
    path.resolve(
      __dirname,
      '../../../node_modules/@theme-ui/components/index.d.ts',
    ),
  );
  it('component package', async () => {
    expect(
      await extractComponent(
        'Button',
        path.resolve(
          __dirname,
          './fixtures/esm/props-info-external/theme-ui.jsx',
        ),
        undefined,
        {
          parser: defaultParserOptions,
          resolver: defaultResolveOptions,
          components: {
            sourceFiles: false,
            package: {
              storeBrowseLink: true,
              storeDocsLink: true,
              storeIssuesLink: true,
            },
          },
        },
      ),
    ).toMatchSnapshot();
  });
});
