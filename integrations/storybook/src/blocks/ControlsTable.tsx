import React, { FC } from 'react';
import {
  ControlsTable as BlockControlsTable,
  ControlsTableProps,
  useStoryContext,
} from '@component-controls/blocks';

import { ThemeProvider } from '../context/ThemeProvider';

export const ControlsTable: FC<ControlsTableProps> = ({
  id: propId,
  name,
  ...rest
}) => {
  const { id, story } = useStoryContext({
    id: propId,
    name,
  });
  const { controls } = story || {};

  if (!controls || controls.disable) {
    return null;
  }

  return id ? (
    <ThemeProvider>
      <BlockControlsTable id={id} {...rest} />
    </ThemeProvider>
  ) : null;
};
