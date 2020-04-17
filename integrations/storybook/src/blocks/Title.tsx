import React, { FC } from 'react';
import { Title as BaseTitle, TitleProps } from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export const Title: FC<TitleProps> = props => {
  return (
    <ControlsProvider>
      <BaseTitle {...props} />
    </ControlsProvider>
  );
};
