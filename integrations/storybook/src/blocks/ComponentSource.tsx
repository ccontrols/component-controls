import React, { FC } from 'react';
import {
  ComponentSource as BaseComponentSource,
  ComponentSourceProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export const ComponentSource: FC<ComponentSourceProps> = props => {
  return (
    <ThemeProvider>
      <BaseComponentSource {...props} />
    </ThemeProvider>
  );
};
