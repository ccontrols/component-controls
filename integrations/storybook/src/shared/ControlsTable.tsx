import React from 'react';
import {
  ControlsTable,
  ControlsTableProps,
} from '@component-controls/blocks-core';
import { randomizeData } from '@component-controls/core';

export const SharedControlsTable: React.FC<ControlsTableProps> = props =>
  ControlsTable ? (
    <ControlsTable
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
