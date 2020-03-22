import React, { FC } from 'react';
import {
  BlockStorySource,
  BlockStorySourceProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export const StorySource: FC<BlockStorySourceProps> = props => {
  return (
    <ThemeProvider>
      <BlockStorySource {...props} />
    </ThemeProvider>
  );
};
