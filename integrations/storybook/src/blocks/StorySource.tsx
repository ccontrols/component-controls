import React, { FC } from 'react';
import {
  StorySource as BaseStorySource,
  StorySourceProps,
} from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export const StorySource: FC<StorySourceProps> = props => {
  return (
    <ControlsProvider>
      <BaseStorySource {...props} />
    </ControlsProvider>
  );
};
