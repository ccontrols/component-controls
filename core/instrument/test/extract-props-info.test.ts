import * as path from 'path';
import { propsInfo } from '../src/misc/propsInfo';

describe('extract-props-info', () => {
  const loadTestFiles = (componentName: string, fileName: string) => {
    it(componentName, async () => {
      expect(
        await propsInfo(
          [
            {
              name: '@component-controls/react-docgen-info',
              test: /\.(js|jsx)$/,
            },
            {
              name: '@component-controls/react-docgen-typescript-info',
              test: /\.(ts|tsx)$/,
            },
          ],
          fileName,
          componentName,
        ),
      ).toMatchSnapshot();
    });
  };
  loadTestFiles(
    'PropsTable',
    path.resolve(__dirname, '../../../ui/blocks/src/PropsTable/PropsTable.tsx'),
  );

  loadTestFiles(
    'Button',
    path.resolve(
      __dirname,
      '../../../node_modules/@theme-ui/components/src/Button.js',
    ),
  );
});
