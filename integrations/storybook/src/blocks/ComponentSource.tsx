import React, { FC } from 'react';
import {
  ComponentSource as BaseComponentSource,
  ComponentSourceProps,
} from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export const ComponentSource: FC<ComponentSourceProps> = props => {
  return (
    <ControlsProvider>
      <BaseComponentSource {...props} />
    </ControlsProvider>
  );
};
