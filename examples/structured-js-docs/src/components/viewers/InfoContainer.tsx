/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { Tabs, TabList, Tab, TabPanel } from '@component-controls/components';
import { useOptions } from '../../contexts/OptionsContext';
import { TypeViewer } from './TypeViewer';
import { ReactDocgenTypescriptViewer } from './ReactDocgenTypescriptViewer';
import { ReactDocgenViewer } from './ReactDocgenViewer';
import { DiagnosticsViewer } from './DiagnosticsViewer';

export const InfoContainer: FC = () => {
  const options = useOptions();
  const diagVisible = options.parseOptions?.General.collectDiagnostics.value;
  return (
    <Tabs>
      <TabList>
        <Tab>types</Tab>
        <Tab>react-docgen-typescript</Tab>
        <Tab>react-docgen</Tab>
        {diagVisible && <Tab>diagnostics</Tab>}
      </TabList>
      <TabPanel>
        <TypeViewer />
      </TabPanel>
      <TabPanel>
        <ReactDocgenTypescriptViewer />
      </TabPanel>
      <TabPanel>
        <ReactDocgenViewer />
      </TabPanel>
      {diagVisible && (
        <TabPanel>
          <DiagnosticsViewer />
        </TabPanel>
      )}
    </Tabs>
  );
};
