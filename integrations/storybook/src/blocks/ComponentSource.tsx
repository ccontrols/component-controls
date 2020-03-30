import React, { FC } from 'react';
import {
  BlockComponentSource,
  BlockComponentSourceProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../context/ThemeProvider';

export const ComponentSource: FC<BlockComponentSourceProps> = props => {
  return (
    <ThemeProvider>
      <BlockComponentSource {...props} />
    </ThemeProvider>
  );
};
