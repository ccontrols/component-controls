import React, { FC, useState, useEffect } from 'react';
import ReactJson from 'react-json-tree';
import { Box } from 'theme-ui';
import {
  useTheme,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from '@component-controls/components';
import { PropKind } from '@component-controls/structured-js-types/types';

import { useDebounce } from '../hooks/debounce';
interface TypeViewer {
  code?: string;
}
export const TypeViewer: FC<TypeViewer> = ({ code }) => {
  const [types, setTypes] = useState({});
  const theme = useTheme();
  const debounced = useDebounce(code, 300);
  useEffect(() => {
    if (debounced) {
      fetch(`/api?code=${encodeURIComponent(debounced)}`)
        .then(data => data.json())
        .then(json => {
          setTypes(json);
        });
    } else {
      setTypes({});
    }
  }, [debounced]);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        overflowY: 'auto',
        ml: 3,
      }}
    >
      <Tabs>
        <TabList>
          <Tab>structured-js-types</Tab>
          <Tab>react-docgen-typescript</Tab>
          <Tab>react-docgen</Tab>
        </TabList>
        <TabPanel>
          <ReactJson
            data={types}
            hideRoot={true}
            shouldExpandNode={(
              keyPath: (string | number)[],
              data: any,
              level: number,
            ) => {
              return level === 1;
            }}
            valueRenderer={(
              valueAsString: any,
              value: any,
              ...keyPath: (string | number)[]
            ) => {
              if (keyPath.length && keyPath[0] === 'kind') {
                const strValue = value.toString();
                return (
                  Object.entries(PropKind).find(([v, _]) => {
                    return v === strValue;
                  })?.[1] || valueAsString
                );
              }
              return valueAsString;
            }}
            theme={{
              base00: theme.colors?.background as string,
              base03: theme.colors?.muted as string,
              base0B: theme.colors?.accent as string,
              base0D: theme.colors?.text as string,
            }}
            invertTheme={false}
          />
        </TabPanel>
      </Tabs>
    </Box>
  );
};
