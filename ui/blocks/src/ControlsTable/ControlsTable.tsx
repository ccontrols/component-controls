import React from 'react';
import {
  ControlsTable as BaseControlsTable,
  ControlsTableProps,
} from '@component-controls/block-components';
import { randomizeData } from '@component-controls/core';

export { ControlsTableProps };

export const ControlsTable: React.FC<ControlsTableProps> = props =>
  ControlsTable ? (
    <BaseControlsTable
      {...props}
      extraActions={[
        {
          title: 'randomize',
          onAction: (state: ControlsTableProps) => {
            if (state.setControlValue && state.controls && state.storyId) {
              state.setControlValue(
                state.storyId,
                undefined,
                randomizeData(state.controls),
              );
            }
          },
        },
      ]}
    />
  ) : null;
