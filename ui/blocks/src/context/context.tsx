import React from 'react';
import {
  StoriesStore,
  SetControlValueFn,
  ClickControlFn,
} from '@component-controls/specification';
import { toId, storyNameFromExport } from '@storybook/csf';

export const CURRENT_SELECTION = '.';
export interface BlockContextProps {
  /**
   * current story id
   */
  currentId?: string;

  /**
   * generic function to update the values of component controls.
   */
  setControlValue?: SetControlValueFn;

  /**
   * generic function to propagate a click event for component controls.
   */
  clickControl?: ClickControlFn;
  /**
   * store mockup when running tests
   */
  mockStore?: StoriesStore;
}

export const BlockContext = React.createContext<BlockContextProps>({});

/**
 *
 * find a story id from a story 'name'
 * will navigate through the store kinds and look for a matching story id
 */
export const storyIdFromName = (
  store: StoriesStore,
  name: string,
): string | undefined => {
  for (const title in store.kinds) {
    const kind = store.kinds[title];
    const storyId = toId(title, storyNameFromExport(name));
    if (kind.stories && kind.stories.indexOf(storyId) > -1) {
      return storyId;
    }
  }
  return undefined;
};
