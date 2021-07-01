import React, { FC, useState, useEffect } from 'react';
import ReactJson from 'react-json-tree';
import { Box } from 'theme-ui';
import { useTheme } from '@component-controls/components';
import { PropKind } from '@component-controls/structured-js-types/types';
import { useConfig } from '../contexts/OptionsContext';
import { useDebounce } from '../hooks/debounce';
interface TypeViewer {
  code?: string;
}
export const TypeViewer: FC<TypeViewer> = ({ code }) => {
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState({});
  const theme = useTheme();
  const config = useConfig();
  const debouncedCode = useDebounce(code, 300);
  const debouncedConfig = useDebounce(config, 300);

  useEffect(() => {
    if (debouncedCode) {
      setLoading(true);
      const url = `/api?code=${debouncedCode}${
        debouncedConfig
          ? `&config=${JSON.stringify({ tsOptions: debouncedConfig })}`
          : ''
      }`;
      fetch(encodeURI(url))
        .then(data => data.json())
        .then(json => {
          setLoading(false);
          setTypes(json);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setTypes({});
    }
  }, [debouncedCode, debouncedConfig]);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        overflowY: 'auto',
        ml: 3,
      }}
    >
      {' '}
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            p: 3,
          }}
        >
          loading...
        </Box>
      ) : (
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
              const typename = Object.entries(PropKind).find(([v, _]) => {
                return v === strValue;
              });
              if (typename) {
                return `${typename[1]} (${valueAsString})`;
              }
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
      )}
    </Box>
  );
};
