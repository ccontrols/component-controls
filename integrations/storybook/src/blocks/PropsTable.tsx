import React, { FC } from 'react';
import {
  PropsTable as BasePropsTable,
  PropsTableProps,
} from '@component-controls/blocks';
import { ControlsProvider } from '../context/ControlsProvider';

export const PropsTable: FC<PropsTableProps> = props => {
  return (
    <ControlsProvider>
      <BasePropsTable {...props} />
    </ControlsProvider>
  );
};
