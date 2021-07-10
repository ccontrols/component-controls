import React, { FC, useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { Box, Theme } from 'theme-ui';
import { Link, CopyContainer } from '@component-controls/components';
import { ReactJSONProps, JSONViewer } from './JSONViewer';
import { LoadingIndicator } from './LoadingIndicator';
import { useDebounce } from '../../hooks/usDebounce';
import { useParams } from '../../contexts/OptionsContext';
import { useCodeContext } from '../../contexts/CodeContext';

interface DataViewerProps {
  jsonTree: ReactJSONProps;
  label: string;
  link: string;
}
export const DataViewer: FC<DataViewerProps> = ({ jsonTree, label, link }) => {
  const [loading, setLoading] = useState(false);
  const [tsOptions] = useParams('tsOptions');
  const [parseOptions] = useParams('parseOptions');
  const { code } = useCodeContext();
  const [types, setTypes] = useState({});
  const debouncedCode = useDebounce(code, 300);

  useEffect(() => {
    if (debouncedCode) {
      setLoading(true);
      const url = `/api/${label}?code=${encodeURIComponent(debouncedCode)}${
        parseOptions
          ? `&config=${encodeURIComponent(JSON.stringify(parseOptions))}`
          : ''
      }${
        tsOptions
          ? `&tsoptions=${encodeURIComponent(JSON.stringify(tsOptions))}`
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
  }, [debouncedCode, tsOptions, parseOptions, label]);
  return (
    <Box
      sx={{
        mx: 3,
        pt: 2,
        borderTop: (t: Theme): string => ` 2px solid  ${t.colors?.shadow}`,
      }}
    >
      <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <Link
            href="#"
            aria-label="save to file"
            onClick={e => {
              e.preventDefault();
              const blob = new Blob([JSON.stringify(types, null, 2)], {
                type: 'application/json;charset=utf-8',
              });
              saveAs(blob, `${label}.json`);
              // this.download = 'filename.txt';
            }}
          >
            save
          </Link>

          <CopyContainer
            value={JSON.stringify(types, null, 2)}
            options={{
              format: 'application/json',
            }}
          >
            <Link href="#" aria-label="copy to clipboard" sx={{ ml: 3 }}>
              copy
            </Link>
          </CopyContainer>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ pr: 2 }}>api:</Box>
          <Link aria-label={`visit ${label} api github page`} href={link}>
            {label}
          </Link>
        </Box>
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
