import React from 'react';
import {
  PreviewPanelCallback,
  PreviewExpandedState,
  PanelItemType,
} from '@storybook/components';
import { ControlsTable } from '../shared/ControlsTable';

export const createControlsPanel = ({
  storyId,
  context,
}: {
  storyId: string;
  context: any;
}): PreviewPanelCallback | null => {
  // @ts-ignore
  const { storyStore, clientApi: api } = context;
  const data = storyStore.fromId(storyId);
  const name = 'controls';
  if (data && data.controls && Object.keys(data.controls).length) {
    const { setControlValue, resetControlValue, clickControl } = api;
    const { controls } = data;
    return (expanded: PreviewExpandedState): PanelItemType => {
      switch (true) {
        case expanded === name: {
          return {
            node: (
              <ControlsTable
                storyId={storyId}
                controls={controls}
                setControlValue={setControlValue}
                resetControlValue={resetControlValue}
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
