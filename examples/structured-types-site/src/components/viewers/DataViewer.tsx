import React, { FC } from 'react';
import { saveAs } from 'file-saver';
import { Box, Theme } from 'theme-ui';
import { Link, CopyContainer } from '@component-controls/components';
import { ParserNames } from '../../contexts/ParsersContext';
import { ReactJSONProps, JSONViewer } from './JSONViewer';
import { LoadingIndicator } from './LoadingIndicator';
import { useParseResults } from '../../contexts/ParsersContext';

interface DataViewerProps {
  jsonTree: ReactJSONProps;
  label: ParserNames;
  link: string;
}
export const DataViewer: FC<DataViewerProps> = ({ jsonTree, label, link }) => {
  const data = useParseResults(label);

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
              const blob = new Blob([JSON.stringify(data, null, 2)], {
                type: 'application/json;charset=utf-8',
              });
              saveAs(blob, `${label}.json`);
              // this.download = 'filename.txt';
            }}
          >
            save
          </Link>

          <CopyContainer
            value={JSON.stringify(data, null, 2)}
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
        {data ? <JSONViewer data={data} {...jsonTree} /> : <LoadingIndicator />}
      </Box>
    </Box>
  );
};
