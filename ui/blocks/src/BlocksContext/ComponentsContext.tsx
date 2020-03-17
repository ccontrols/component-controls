import React from 'react';
import storyStore from '@component-controls/loader/story-store-data';
import {
  Story,
  StoriesKind,
  StoryComponent,
} from '@component-controls/specification';

import { BlockContext, CURRENT_SELECTION } from './shared';

export interface ComponentInputProps {
  /** component */
  of?: '.' | any;
}

export interface ComponnetContextProps {
  components: StoryComponent[];
  kind?: StoriesKind;
}

export const useComponentsContext = ({
  of = CURRENT_SELECTION,
}: ComponentInputProps): ComponnetContextProps => {
  const { currentId, mockStore } = React.useContext(BlockContext);
  const store = mockStore || storyStore;
  if (!currentId) {
    return {
      components: [],
    };
  }
  const story: Story = store && store.stories[currentId];
  const kind = story && story.kind ? store.kinds[story.kind] : undefined;

  let cmp: any;
  if (of === CURRENT_SELECTION) {
    cmp = story && story.component ? story.component : kind?.component;
  } else {
    cmp = of;
  }
  const componentName = cmp
    ? typeof cmp === 'string'
      ? cmp
      : cmp.name || cmp.displayName
    : undefined;
  const components = componentName && kind && [kind.components[componentName]]
    ? [store.components[kind.components[componentName]]]
    : [];
  return {
    components,
    kind,
  };
};
