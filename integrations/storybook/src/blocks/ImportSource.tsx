import React, { FC } from 'react';
import { Source as SourceBlock } from '@component-controls/blocks-core';
import { useControlsContext, ControlsContextInputProps } from './BlockContext';
import { ThemeProvider } from '../shared/ThemeProvider';

export type SourceProps = ControlsContextInputProps & {
  /** a title to display */
  title?: string;
};

export const ImportSource: FC<SourceProps> = ({ id, name }) => {
  const { component } = useControlsContext({
    id,
    name,
  });
  return (
    <ThemeProvider>
      <SourceBlock>
        {component && component.import ? component.import : ''}
      </SourceBlock>
    </ThemeProvider>
  );
};
