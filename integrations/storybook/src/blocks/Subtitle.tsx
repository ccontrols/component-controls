import React, { FC } from 'react';
import {
  Subtitle as BaseSubtitle,
  SubtitleProps,
} from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export const Subtitle: FC<SubtitleProps> = props => {
  return (
    <ControlsProvider>
      <BaseSubtitle {...props} />
    </ControlsProvider>
  );
};
