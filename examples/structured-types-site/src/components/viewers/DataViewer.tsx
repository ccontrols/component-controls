import React, { FC, useEffect, useState } from 'react';
import { Box, Theme } from 'theme-ui';
import { Link } from '@component-controls/components';
import { ReactJSONProps, JSONViewer } from './JSONViewer';
import { LoadingIndicator } from './LoadingIndicator';
import { useDebounce } from '../../hooks/usDebounce';
import { getPureConfig, useOptions } from '../../contexts/OptionsContext';
import { useCodeContext } from '../../contexts/CodeContext';

interface DataViewerProps {
  jsonTree: ReactJSONProps;
  label: string;
  link: string;
}
export const DataViewer: FC<DataViewerProps> = ({ jsonTree, label, link }) => {
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
      const url = `/api/${label}?code=${encodeURIComponent(debouncedCode)}${
        parseOptions
          ? `&config=${encodeURIComponent(JSON.stringify(parseOptions))}`
          : ''
      }${
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
        mx: 3,
        pt: 2,
        borderTop: (t: Theme): string => ` 2px solid  ${t.colors?.shadow}`,
      }}
    >
      <Box sx={{ px: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={{ pr: 2 }}>api:</Box>
        <Link href={link}>{label}</Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          overflowY: 'auto',
        }}
      >
        {loading ? (
          <LoadingIndicator />
        ) : (
          <JSONViewer data={types} {...jsonTree} />
        )}
      </Box>
    </Box>
  );
};
