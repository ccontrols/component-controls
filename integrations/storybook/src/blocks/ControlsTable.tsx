import React, { FC } from 'react';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import {
  SetControlValueFn,
  ClickControlFn,
  ComponentControlButton,
} from '@component-controls/specification';
import { mergeControlValues } from '@component-controls/core';
import {
  ControlsTable as BaseControlsTable,
  ControlsTableProps as BaseControlsTableProps,
  useControlsContext,
  ControlsContextInputProps,
} from '@component-controls/blocks';

import { SET_DATA_MSG } from '../shared/shared';
import { ThemeProvider } from '../shared/ThemeProvider';
export type ControlsTableProps = ControlsContextInputProps &
  BaseControlsTableProps;

export const ControlsTable: FC<ControlsTableProps> = ({
  id: propId,
  name,
  ...rest
}) => {
  const { id, controls, story, api, channel } = useControlsContext({
    id: propId,
    name,
  });
  const setControlValue: SetControlValueFn =
    api && api.setControlValue
      ? api.setControlValue
      : (storyId: string, propName: string | undefined, propValue: any) => {
          if (story) {
            const newValues = mergeControlValues(
              story.parameters.controls,
              propName,
              propValue,
            );
            story.parameters.controls = newValues;
            channel.emit(FORCE_RE_RENDER);
            channel.emit(SET_DATA_MSG, {
              storyId,
              controls: newValues,
            });
          }
        };
  const clickControl: ClickControlFn =
    api && api.clickControl
      ? api.clickControl
      : (storyId: string, propName: string) => {
          if (controls && controls[propName]) {
            const control: ComponentControlButton = controls[
              propName
            ] as ComponentControlButton;
            if (control && typeof control.onClick === 'function') {
              control.onClick(control);
            }
          }
        };
  if (!story || !controls || controls.disable) {
    return null;
  }

  return id ? (
    <ThemeProvider>
      <BaseControlsTable
        controls={controls}
        storyId={id}
        setControlValue={setControlValue}
        clickControl={clickControl}
        {...rest}
      />
    </ThemeProvider>
  ) : null;
};
