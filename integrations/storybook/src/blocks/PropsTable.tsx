import React, { FC } from 'react';
import {
  PropsTable as BasePropsTable,
  PropsTableProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export const PropsTable: FC<PropsTableProps> = props => {
  return (
    <ThemeProvider>
      <BasePropsTable {...props} />
    </ThemeProvider>
  );
};
