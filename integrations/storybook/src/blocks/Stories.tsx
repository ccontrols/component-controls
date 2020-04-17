import React, { FC } from 'react';
import {
  Stories as BlockStories,
  StoriesProps,
} from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export { StoriesProps };

export const Stories: FC<StoriesProps> = props => {
  return (
    <ControlsProvider>
      <BlockStories {...props} />
    </ControlsProvider>
  );
};
