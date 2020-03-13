import React, { FC } from 'react';
import {
  BlockPropsTable,
  BlockPropsTableProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export const PropsTable: FC<BlockPropsTableProps> = props => {
  return (
    <ThemeProvider>
      <BlockPropsTable {...props} />
    </ThemeProvider>
  );
};
