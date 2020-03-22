import React from 'react';
import { ControlsTable as SharedControlsTable } from '@component-controls/blocks';

export const createControlsPanel = ({
  storyId,
}: {
  storyId: string;
}): any | null => {
  // @ts-ignore
  const name = 'controls';
  return (expanded: any): any => {
    switch (true) {
      case expanded === name: {
        return {
          node: <SharedControlsTable id={storyId} />,
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
