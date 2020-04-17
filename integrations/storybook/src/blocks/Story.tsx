import React, { FC } from 'react';
import { Story as BlockStory, StoryProps } from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export { StoryProps };

export const Story: FC<StoryProps> = props => {
  return (
    <ControlsProvider>
      <BlockStory {...props} />
    </ControlsProvider>
  );
};
