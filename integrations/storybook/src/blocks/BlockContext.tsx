import React from 'react';
import { BlockContext } from '@component-controls/blocks';
import storyFn from '@component-controls/loader/story-store-data';
import { DocsContext } from '@storybook/addon-docs/blocks';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import {
  SetControlValueFn,
  ClickControlFn,
  ComponentControlButton,
} from '@component-controls/specification';
import { mergeControlValues } from '@component-controls/core';
import { SET_DATA_MSG } from '../shared/shared';

export const BlockContextProvider: React.FC = ({ children }) => {
  const context = React.useContext(DocsContext);
  const { id: currentId, clientApi, channel } = context as any;
  const storyStore = storyFn();
  const story = storyStore && storyStore[currentId];
  const { controls } = story || {};
  const setControlValue: SetControlValueFn =
    clientApi && clientApi.setControlValue
      ? clientApi.setControlValue
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
    clientApi && clientApi.clickControl
      ? clientApi.clickControl
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
  return (
    <BlockContext.Provider
      value={{
        currentId,
        setControlValue,
        clickControl,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};
