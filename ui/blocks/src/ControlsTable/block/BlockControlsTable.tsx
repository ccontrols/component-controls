import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { ControlsTable, ControlsTableProps } from '../plain/ControlsTable';

export type BlockControlsTableProps = ControlsTableProps & BlockContainerProps;

/**
 * Table block component to display a story's controls and their editors
 */
export const BlockControlsTable: FC<BlockControlsTableProps> = ({
  title,
  ...rest
}) => {
  return (
    <BlockContainer title={title}>
      <ControlsTable {...rest} />
    </BlockContainer>
  );
};
