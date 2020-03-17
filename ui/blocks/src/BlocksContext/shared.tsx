import React from 'react';
import { StoriesStore } from '@component-controls/specification';
import { toId, storyNameFromExport } from '@storybook/csf';

export const CURRENT_SELECTION = '.';
export interface BlockContextProps {
  api?: any;
  channel?: any;
  currentId?: string;
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
