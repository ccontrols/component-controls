import React, { FC } from 'react';
import {
  ImportSource as BaseImportSource,
  ImportSourceProps,
} from '@component-controls/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export const ImportSource: FC<ImportSourceProps> = props => {
  return (
    <ThemeProvider>
      <BaseImportSource {...props} />
    </ThemeProvider>
  );
};
