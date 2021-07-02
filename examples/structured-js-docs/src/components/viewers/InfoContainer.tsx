/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { Tabs, TabList, Tab, TabPanel } from '@component-controls/components';
import { useOptions } from '../../contexts/OptionsContext';
import { TypeViewer } from './TypeViewer';
import { DiagnosticsViewer } from './DiagnosticsViewer';
import { TypesContextProvider } from '../../contexts/TypesContext';
export const InfoContainer: FC = () => {
  const options = useOptions();
  const diagVisible = options.parseOptions?.General.collectDiagnostics.value;
  return (
    <TypesContextProvider>
      <Tabs>
        <TabList>
          <Tab>types</Tab>
          {diagVisible && <Tab>diagnostics</Tab>}
        </TabList>
        <TabPanel>
          <TypeViewer />
        </TabPanel>
        {diagVisible && (
          <TabPanel>
            <DiagnosticsViewer />
          </TabPanel>
        )}
      </Tabs>
    </TypesContextProvider>
  );
};
