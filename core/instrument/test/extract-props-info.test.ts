import * as path from 'path';
import { propsInfo } from '../src/misc/props-info';

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
    'Tab',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
  );
  loadTestFiles(
    'Tabs',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
  );

  loadTestFiles(
    'TabList',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
  );

  loadTestFiles(
    'TabPanel',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
  );
  loadTestFiles(
    'PropsTable',
    path.resolve(__dirname, '../../../ui/blocks/src/PropsTable/PropsTable.tsx'),
  );
});
