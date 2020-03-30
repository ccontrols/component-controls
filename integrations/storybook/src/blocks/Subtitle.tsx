import React, { FC } from 'react';
import {
  Subtitle as BaseSubtitle,
  SubtitleProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../context/ThemeProvider';

export const Subtitle: FC<SubtitleProps> = props => {
  return (
    <ThemeProvider>
      <BaseSubtitle {...props} />
    </ThemeProvider>
  );
};
