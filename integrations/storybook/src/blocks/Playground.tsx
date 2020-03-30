import React, { FC } from 'react';
import {
  Playground as BlockPlayground,
  PlaygroundProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../context/ThemeProvider';

export { PlaygroundProps };

export const Playground: FC<PlaygroundProps> = props => {
  return (
    <ThemeProvider>
      <BlockPlayground {...props} />
    </ThemeProvider>
  );
};
