import React from 'react';
import {
  ControlsEditorsTable,
  ControlsEditorsTableProps,
} from '@component-controls/editors';
//@ts-ignore
import { ThemeProvider } from './ThemeProvider.tsx';
//@ts-ignore
import { randomizeData } from './randomizeData.ts';

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
