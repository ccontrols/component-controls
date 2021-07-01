/** @jsx jsx */
import { FC, useEffect, useState } from 'react';
import { jsx, Theme, Box, Heading } from 'theme-ui';
import { TriangleUpIcon, TriangleDownIcon } from '@primer/octicons-react';
import Split from 'react-split';
import { Tabs, TabList, Tab, TabPanel } from '@component-controls/components';
import { getUrlParams, getUpdatedUrlParams } from '@component-controls/blocks';

import { ExamplesPanel } from './ExamplesPanel';
import { ConfigPanel } from './ConfigPanel';
import { OptionsContextProvider } from '../contexts/OptionsContext';

import { Editor } from './Editor';
import { TypeViewer } from './TypeViewer';

export const Playground: FC = () => {
  const [sizes, setSizes] = useState<number[]>([70, 30]);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [code, setCode] = useState('');
  useEffect(() => {
    const storeSizes = localStorage.getItem('split-size');
    if (storeSizes) {
      setSizes(JSON.parse(storeSizes));
    }
    const urlCode = getUrlParams('code');
    if (urlCode) {
      setCode(urlCode);
    }
  }, []);
  const onChangeCode = (value: string): void => {
    const newUrl = getUpdatedUrlParams('code', value);
    if (newUrl && window.location.href !== newUrl) {
      window.history.replaceState(null, '', newUrl);
    }
    setCode(value);
  };

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
              <Editor onChange={onChangeCode} value={code} />
              <TypeViewer code={code} />
            </Split>
          </TabPanel>
          <TabPanel>
            <ExamplesPanel
              onClose={() => setTabIndex(0)}
              onSelect={(code: string) => {
                setTabIndex(0);
                onChangeCode(code);
              }}
            />
          </TabPanel>
          <TabPanel>
            <ConfigPanel onClose={() => setTabIndex(0)} />
          </TabPanel>
        </Tabs>
      </Box>
    </OptionsContextProvider>
  );
};
