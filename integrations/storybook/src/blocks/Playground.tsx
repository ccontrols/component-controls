import React, { FC } from 'react';
import {
  Playground as BlockPlayground,
  PlaygroundProps,
} from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export { PlaygroundProps };

export const Playground: FC<PlaygroundProps> = props => {
  return (
    <ControlsProvider>
      <BlockPlayground {...props} />
    </ControlsProvider>
  );
};
