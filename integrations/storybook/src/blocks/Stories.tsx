import React, { FC } from 'react';
import {
  Stories as BlockStories,
  StoriesProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../context/ThemeProvider';

export { StoriesProps };

export const Stories: FC<StoriesProps> = props => {
  return (
    <ThemeProvider>
      <BlockStories {...props} />
    </ThemeProvider>
  );
};
