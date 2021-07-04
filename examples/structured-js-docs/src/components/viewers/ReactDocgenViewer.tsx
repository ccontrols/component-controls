import React, { FC, useState, useEffect } from 'react';
import ReactJson from 'react-json-tree';
import { Box } from 'theme-ui';
import { useTheme } from '@component-controls/components';
import { LoadingIndicator } from './LoadingIndicator';
import { useDebounce } from '../../hooks/usDebounce';
import { useCodeContext } from '../../contexts/CodeContext';

export const ReactDocgenViewer: FC = () => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const { code } = useCodeContext();
  const [types, setTypes] = useState({});
  const debouncedCode = useDebounce(code, 300);

  useEffect(() => {
    if (debouncedCode) {
      setLoading(true);
      const url = `/api/react-docgen?code=${encodeURIComponent(debouncedCode)}`;
      fetch(url)
        .then(data => data.json())
        .then(json => {
          setLoading(false);
          setTypes(json);
        })
        .catch(() => {
          debugger;
          setLoading(false);
        });
    } else {
      setTypes({});
    }
  }, [debouncedCode]);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        overflowY: 'auto',
        ml: 3,
      }}
    >
      {loading ? (
        <LoadingIndicator />
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
