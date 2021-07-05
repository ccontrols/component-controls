/** @jsx jsx */
import { FC, useEffect, useState } from 'react';
import { jsx, Theme, Box, Heading } from 'theme-ui';
import { TriangleUpIcon, TriangleDownIcon } from '@primer/octicons-react';
import Split from 'react-split';
import { Tabs, TabList, Tab, TabPanel } from '@component-controls/components';

import { ExamplesPanel } from './panels/ExamplesPanel';
import { ConfigPanel } from './panels/ConfigPanel';
import { ParseConfigPanel } from './panels/ParseConfigPanel';
import { OptionsContextProvider } from '../contexts/OptionsContext';
import { CodeContextProvider } from '../contexts/CodeContext';
import { Editor } from './Editor';
import { InfoContainer } from './viewers/InfoContainer';
import { useURLParamas } from '../hooks/useUrlParams';

export const Playground: FC = () => {
  const [sizes, setSizes] = useState<number[]>([70, 30]);
  const [tabIndex, setTabIndex] = useURLParamas<number>('tab', 0);
  useEffect(() => {
    const storeSizes = localStorage.getItem('split-size');
    if (storeSizes) {
      setSizes(JSON.parse(storeSizes));
    }
  }, []);

  return (
    <OptionsContextProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'stretch',
          '.react-tabs': {
            flex: 1,
          },
        }}
      >
        <CodeContextProvider>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index, prevIndex) => {
              if (index === prevIndex) {
                setTabIndex(0);
              } else {
                setTabIndex(index);
              }
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', bg: 'muted' }}>
              <Heading as="h3" sx={{ py: 3, pl: 2, pr: 5, fontWeight: 'bold' }}>
                Playground
              </Heading>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  '.react-tabs__tab:first-of-type': {
                    visibility: 'hidden',
                  },
                }}
              >
                <TabList>
                  <Tab></Tab>
                  <Tab>
                    Examples{' '}
                    {tabIndex === 1 ? <TriangleUpIcon /> : <TriangleDownIcon />}
                  </Tab>
                  <Tab>
                    TS Config{' '}
                    {tabIndex === 2 ? <TriangleUpIcon /> : <TriangleDownIcon />}
                  </Tab>
                  <Tab>
                    Parse Config{' '}
                    {tabIndex === 3 ? <TriangleUpIcon /> : <TriangleDownIcon />}
                  </Tab>
                </TabList>
              </Box>
            </Box>
            <TabPanel>
              <Split
                sizes={sizes}
                minSize={20}
                snapOffset={30}
                expandToMin={false}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
                onDragEnd={(sizes: number[]) => {
                  localStorage.setItem('split-size', JSON.stringify(sizes));
                }}
                sx={{
                  flex: 1,
                  display: 'flex',
                  border: (t: Theme) => `1px solid ${t.colors?.muted}`,
                  '.gutter': {
                    border: (t: Theme) => `1px solid ${t.colors?.muted}`,
                    cursor: 'col-resize',
                  },
                }}
              >
                <Editor />
                <InfoContainer />
              </Split>
            </TabPanel>
            <TabPanel>
              <ExamplesPanel onClose={() => setTabIndex(0)} />
            </TabPanel>
            <TabPanel>
              <ConfigPanel onClose={() => setTabIndex(0)} />
            </TabPanel>
            <TabPanel>
              <ParseConfigPanel onClose={() => setTabIndex(0)} />
            </TabPanel>
          </Tabs>
        </CodeContextProvider>
      </Box>
    </OptionsContextProvider>
  );
};
