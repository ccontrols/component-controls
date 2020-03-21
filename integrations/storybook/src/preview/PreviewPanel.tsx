import React from 'react';
import { ControlsTable as SharedControlsTable } from '@component-controls/blocks';

export const createControlsPanel = ({
  storyId,
  context,
}: {
  storyId: string;
  context: any;
}): any | null => {
  // @ts-ignore
  const { clientApi: api } = context;
  const name = 'controls';
  const { setControlValue, clickControl } = api;
  return (expanded: any): any => {
    switch (true) {
      case expanded === name: {
        return {
          node: (
            <SharedControlsTable
              id={storyId}
              setControlValue={setControlValue}
              clickControl={clickControl}
            />
          ),
          title: `Hide ${name}`,
        };
      }
      default: {
        return {
          node: null,
          title: `Show ${name}`,
        };
      }
    }
  };
};
