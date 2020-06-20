/** @jsx jsx */
import { FC } from 'react';
import { Box, jsx } from 'theme-ui';

export const ViewportBlock: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '200px',
        height: '100%',
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        padding: '3px',
        background: '#f4f4f4',
      }}
    >
      <Box
        sx={{
          height: '100%',
          minWidth: '250px',
          margin: '20px',
          background: 'gray',
        }}
      ></Box>
      <Box
        sx={{
          height: '100%',
          minWidth: '500px',
          margin: '20px',
          background: 'gray',
        }}
      ></Box>
      <Box
        sx={{
          height: '100%',
          minWidth: '900px',
          margin: '20px',
          background: 'gray',
        }}
      ></Box>
    </Box>
  );
};
