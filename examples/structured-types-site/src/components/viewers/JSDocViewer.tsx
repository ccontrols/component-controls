import React, { FC, useState, useEffect } from 'react';
import { Box } from 'theme-ui';
import { LoadingIndicator } from './LoadingIndicator';
import { useDebounce } from '../../hooks/usDebounce';
import { useCodeContext } from '../../contexts/CodeContext';
import { JSONViewer } from './JSONViewer';

export const JSDocViewer: FC = () => {
  const [loading, setLoading] = useState(false);
  const { code } = useCodeContext();
  const [types, setTypes] = useState({});
  const debouncedCode = useDebounce(code, 300);

  useEffect(() => {
    if (debouncedCode) {
      setLoading(true);
      const url = `/api/jsdoc?code=${encodeURIComponent(debouncedCode)}`;
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
      {loading ? <LoadingIndicator /> : <JSONViewer data={types} />}
    </Box>
  );
};
