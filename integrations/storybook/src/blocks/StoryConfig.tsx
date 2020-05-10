import React, { FC } from 'react';
import {
  StoryConfig as BaseStoryConfig,
  StoryConfigProps,
} from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export const StoryConfig: FC<StoryConfigProps> = props => {
  return (
    <ControlsProvider>
      <BaseStoryConfig {...props} />
    </ControlsProvider>
  );
};
