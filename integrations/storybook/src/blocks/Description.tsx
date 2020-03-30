import React, { FC } from 'react';
import {
  Description as BaseDescription,
  DescriptionProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../context/ThemeProvider';

export const Description: FC<DescriptionProps> = props => {
  return (
    <ThemeProvider>
      <BaseDescription {...props} />
    </ThemeProvider>
  );
};
