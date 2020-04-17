import React, { FC } from 'react';
import {
  Description as BaseDescription,
  DescriptionProps,
} from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export const Description: FC<DescriptionProps> = props => {
  return (
    <ControlsProvider>
      <BaseDescription {...props} />
    </ControlsProvider>
  );
};
