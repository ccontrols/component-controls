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
  const { storyStore, clientApi: api } = context;
  const data = storyStore.fromId(storyId);
  const name = 'controls';
  if (data && data.controls && Object.keys(data.controls).length) {
    const { setControlValue, clickControl } = api;
    const { controls } = data;
    return (expanded: any): any => {
      switch (true) {
        case expanded === name: {
          return {
            node: (
              <SharedControlsTable
                storyId={storyId}
                controls={controls}
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
  }
  return null;
};
