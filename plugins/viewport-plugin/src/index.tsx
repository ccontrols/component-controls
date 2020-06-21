/** @jsx jsx */
import { FC } from 'react';
import { Box, jsx } from 'theme-ui';

export const ViewportBlock: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '250px',
        height: '-webkit-fill-available',
        width: '100%',
        overflow: 'auto',
        padding: '3px',
        background: '#f4f4f4',
      }}
    >
      <Box
        sx={{
          minWidth: '250px',
          height: '400px',
          margin: '5px',
          background: 'green',
        }}
      ></Box>
      <Box
        sx={{
          minWidth: '500px',
          height: '400px',
          margin: '5px',
          background: 'black',
        }}
      ></Box>
      <Box
        sx={{
          minWidth: '900px',
          height: '400px',
          margin: '5px',
          background: 'gray',
        }}
      ></Box>
    </Box>
  );
};
