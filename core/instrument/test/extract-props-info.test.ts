import * as path from 'path';
import { extractComponentProps } from './loadTestFiles';

describe('extract-props-info', () => {
  extractComponentProps(
    'Tab',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
  );
  extractComponentProps(
    'Tabs',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
  );

  extractComponentProps(
    'TabList',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
  );

  extractComponentProps(
    'TabPanel',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
  );
  extractComponentProps(
    'PropsTable',
    path.resolve(__dirname, '../../../ui/blocks/src/PropsTable/PropsTable.tsx'),
  );
});
