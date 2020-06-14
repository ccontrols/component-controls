/** @jsx jsx */
import { FC } from 'react';
import { Box, jsx } from 'theme-ui';

export const ViewportBlock: FC = () => {
  return (
    <div>
      <Box
        color="black"
        bg="#e6e5e5"
        p={40}
        sx={{
          width: '2000px',
          height: '300px',
        }}
      >
        content here
      </Box>
    </div>
  );
};
