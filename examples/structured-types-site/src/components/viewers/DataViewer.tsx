import React, { FC, useEffect, useState } from 'react';
import { Box, Theme } from 'theme-ui';
import { Link } from '@component-controls/components';
import { ReactJSONProps, JSONViewer } from './JSONViewer';
import { LoadingIndicator } from './LoadingIndicator';
import { useDebounce } from '../../hooks/usDebounce';
import { getPureConfig, useOptions } from '../../contexts/OptionsContext';
import { useCodeContext } from '../../contexts/CodeContext';

interface DataViewerProps {
  json: ReactJSONProps;
  label: string;
  link: string;
}
export const DataViewer: FC<DataViewerProps> = ({ json, label, link }) => {
  const [loading, setLoading] = useState(false);
  const options = useOptions();
  const { code } = useCodeContext();
  const [types, setTypes] = useState({});
  const debouncedCode = useDebounce(code, 300);

  useEffect(() => {
    if (debouncedCode) {
      setLoading(true);
      const tsOptions = getPureConfig(options.tsOptions);
      const url = `/api/${label}?code=${encodeURIComponent(debouncedCode)}${
        tsOptions
          ? `&tsoptions=${encodeURIComponent(
              JSON.stringify({
                tsOptions,
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
  }, [debouncedCode, options, label]);
  return (
    <Box
      sx={{
        borderTop: (t: Theme): string => ` 2px solid  ${t.colors?.shadow}`,
      }}
    >
      <Box sx={{ px: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={{ pr: 2 }}>api:</Box>
        <Link href={link}>{label}</Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          overflowY: 'auto',
          ml: 3,
        }}
      >
        {loading ? <LoadingIndicator /> : <JSONViewer data={types} {...json} />}
      </Box>
    </Box>
  );
};
