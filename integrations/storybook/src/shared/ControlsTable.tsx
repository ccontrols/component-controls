import React from 'react';
import {
  ControlsEditorsTable,
  ControlsEditorsTableProps,
} from '@component-controls/editors';
import { ThemeProvider } from './ThemeProvider';
import { randomizeData } from '@component-controls/core';

export const ControlsTable: React.FC<ControlsEditorsTableProps> = props => (
  <ThemeProvider>
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
  </ThemeProvider>
);
