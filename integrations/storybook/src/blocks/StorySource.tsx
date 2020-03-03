import React, { FC } from 'react';
import {
  StorySource as BaseStorySource,
  StorySourceProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export const StorySource: FC<StorySourceProps> = props => {
  return (
    <ThemeProvider>
      <BaseStorySource {...props} />
    </ThemeProvider>
  );
};
