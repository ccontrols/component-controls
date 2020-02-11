import React from 'react';
import {
  ControlsEditorsTable,
  ControlsEditorsTableProps,
} from '@component-controls/editors';
//@ts-ignore
import { randomizeData } from './randomizeData.ts';

export const ControlsTable: React.FC<ControlsEditorsTableProps> = props => (
  <ControlsEditorsTable
    {...props}
    extraActions={[
      {
        title: 'Randomize',
        onAction: (state: ControlsEditorsTableProps) => {
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
);
