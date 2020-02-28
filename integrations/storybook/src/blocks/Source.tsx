import React, { FC } from 'react';
import { StorySource as SourceBlock } from '@component-controls/block-components';
import { useControlsContext, ControlsContextInputProps } from './BlockContext';
import { ThemeProvider } from '../shared/ThemeProvider';

export type SourceProps = ControlsContextInputProps & {
  /** a title to display */
  title?: string;
};

export const Source: FC<SourceProps> = ({ id, name }) => {
  const { source, controls, args, fileSource } = useControlsContext({
    id,
    name,
  });
  return (
    <ThemeProvider>
      <SourceBlock controls={controls} args={args} fileSource={fileSource}>
        {source}
      </SourceBlock>
    </ThemeProvider>
  );
};
