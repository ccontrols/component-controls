import * as path from 'path';
import { getComponentProps } from '../src/misc/props-info';
import { ComponentInfo } from '@component-controls/core';

export type ComponentCallback = (component: ComponentInfo) => void;
export const componentFixture = (
  componentName: string,
  filePathName: string,
  callback: ComponentCallback,
): void => {
  it(componentName, async () => {
    const component = await getComponentProps(filePathName, componentName, {
      collectSourceInfo: false,
    });
    await callback(component);
  });
};
describe('extract-props-info', () => {
  componentFixture(
    'Tab',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
    component => {
      delete (component as any).filePath;
      expect(component).toMatchSnapshot();
    },
  );
  componentFixture(
    'Tabs',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
    component => {
      delete (component as any).filePath;
      expect(component).toMatchSnapshot();
    },
  );

  componentFixture(
    'TabList',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
    component => {
      delete (component as any).filePath;
      expect(component).toMatchSnapshot();
    },
  );

  componentFixture(
    'TabPanel',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
    component => {
      delete (component as any).filePath;
      expect(component).toMatchSnapshot();
    },
  );
  componentFixture(
    'PropsTable',
    path.resolve(__dirname, '../../../ui/blocks/src/PropsTable/PropsTable.tsx'),
    component => {
      delete (component as any).filePath;
      expect(component).toMatchSnapshot();
    },
  );
});
