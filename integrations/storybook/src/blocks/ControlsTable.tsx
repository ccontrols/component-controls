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
  useStoryContext,
  StoryInputProps,
} from '@component-controls/blocks';

import { SET_DATA_MSG } from '../shared/shared';
import { ThemeProvider } from '../shared/ThemeProvider';
export type ControlsTableProps = StoryInputProps & BaseControlsTableProps;

export const ControlsTable: FC<ControlsTableProps> = ({
  id: propId,
  name,
  ...rest
}) => {
  const { id, story, api, channel } = useStoryContext({
    id: propId,
    name,
  });
  const { controls } = story || {};
  const setControlValue: SetControlValueFn =
    api && api.setControlValue
      ? api.setControlValue
      : (storyId: string, propName: string | undefined, propValue: any) => {
          if (controls) {
            const newValues = mergeControlValues(controls, propName, propValue);
            Object.keys(controls).forEach(key => {
              controls[key] = newValues[key];
            });
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
  if (!controls || controls.disable) {
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
