import { loadTestFiles } from './loadTestFiles';
import { defaultParserOptions, defaultResolveOptions } from '../src/index';
import { extractComponent } from '../src/babel/extract-component';

describe('extract-component', () => {
  loadTestFiles(
    async (fileName: string) => {
      return await extractComponent('Button', fileName, undefined, {
        parser: defaultParserOptions,
        resolver: defaultResolveOptions,
        components: {
          sourceFiles: false,
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
      });
    },
    ['extract-component'],
  );
});
