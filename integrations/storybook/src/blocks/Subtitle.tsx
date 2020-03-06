import React, { FC } from 'react';
import {
  Subtitle as BaseSubtitle,
  SubtitleProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export const Subtitle: FC<SubtitleProps> = props => {
  return (
    <ThemeProvider>
      <BaseSubtitle {...props} />
    </ThemeProvider>
  );
};
