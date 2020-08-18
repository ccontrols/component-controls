/** @jsx jsx */
import { FC } from 'react';
import { Box, Theme, Text, jsx } from 'theme-ui';
import { Story } from '@component-controls/blocks';

export interface ViewportBoxProps {
  storyId?: string;
  size: number;
}
export const ViewportBox: FC<ViewportBoxProps> = ({ storyId, size }) => {
  return (
    <Box
      sx={{
        minHeight: '100%',
        minWidth: 'unset',
        pr: 4,
        ':hover': {
          '& > div': {
            color: 'mutedText',
          },
        },
      }}
    >
      <Box
        sx={{
          boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
        }}
      >
        <Story id={storyId} sxStyle={{ mb: 0, minWidth: size }} />
      </Box>
      <Text sx={{ color: 'muted', fontWeight: 'bold' }}>{`${size}px`}</Text>
    </Box>
  );
};
