import React, { FC } from 'react';
import { Title as BaseTitle, TitleProps } from '@component-controls/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export const Title: FC<TitleProps> = props => {
  return (
    <ThemeProvider>
      <BaseTitle {...props} />
    </ThemeProvider>
  );
};
