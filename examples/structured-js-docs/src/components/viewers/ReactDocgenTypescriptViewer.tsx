import React, { FC, useState, useEffect } from 'react';
import { Box } from 'theme-ui';
import { LoadingIndicator } from './LoadingIndicator';
import { useDebounce } from '../../hooks/usDebounce';
import { getPureConfig, useOptions } from '../../contexts/OptionsContext';
import { useCodeContext } from '../../contexts/CodeContext';
import { JSONViewer } from './JSONViewer';

export const ReactDocgenTypescriptViewer: FC = () => {
  const [loading, setLoading] = useState(false);
  const options = useOptions();
  const { code } = useCodeContext();
  const [types, setTypes] = useState({});
  const debouncedCode = useDebounce(code, 300);

  useEffect(() => {
    if (debouncedCode) {
      setLoading(true);
      const tsOptions = getPureConfig(options.tsOptions);
      const parseOptions = getPureConfig(options.parseOptions);
      const url = `/api/react-docgen-typescript?code=${encodeURIComponent(
        debouncedCode,
      )}${
        tsOptions || parseOptions
          ? `&config=${encodeURIComponent(
              JSON.stringify({
                tsOptions,
                ...parseOptions,
              }),
            )}`
          : ''
      }`;
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
  }, [debouncedCode, options]);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        overflowY: 'auto',
        ml: 3,
      }}
    >
      {loading ? <LoadingIndicator /> : <JSONViewer data={types} />}
    </Box>
  );
};
