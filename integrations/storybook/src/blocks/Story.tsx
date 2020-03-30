import React, { FC } from 'react';
import { Story as BlockStory, StoryProps } from '@component-controls/blocks';
import { ThemeProvider } from '../context/ThemeProvider';

export { StoryProps };

export const Story: FC<StoryProps> = props => {
  return (
    <ThemeProvider>
      <BlockStory {...props} />
    </ThemeProvider>
  );
};
