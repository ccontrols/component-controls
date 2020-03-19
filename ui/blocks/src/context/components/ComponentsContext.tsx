import React from 'react';
import storyStore from '@component-controls/loader/story-store-data';
import {
  Story,
  StoriesKind,
  StoryComponent,
} from '@component-controls/specification';

import { BlockContext, CURRENT_SELECTION } from '../context';
import { getComponentName } from './utils';

export interface ComponentInputProps {
  /**
   * Specify the component(s), for which to have information displayed.
   * The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
   * If an array of components is specified, each component will be displayed in a separate tab.
   */
  of?: '.' | any;
}

export interface ComponnetContextProps {
  components: {
    [label: string]: StoryComponent;
  };
  kind?: StoriesKind;
}

export const useComponentsContext = ({
  of = CURRENT_SELECTION,
}: ComponentInputProps): ComponnetContextProps => {
  const { currentId, mockStore } = React.useContext(BlockContext);
  const store = mockStore || storyStore;
  if (!currentId) {
    return {
      components: {},
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
  const subcomponents = kind && (story.subcomponents || kind.subcomponents);
  const subComponents = subcomponents
    ? Object.keys(subcomponents).reduce((acc, key) => {
        const name = getComponentName(subcomponents[key]);
        const component =
          name &&
          kind.components[name] &&
          store.components[kind.components[name]];
        if (component) {
          return { ...acc, [key]: component };
        } else {
          return acc;
        }
      }, {})
    : undefined;
  const componentName = getComponentName(cmp);
  const components = componentName &&
  kind && { [componentName]: kind.components[componentName] }
    ? { [componentName]: store.components[kind.components[componentName]] }
    : {};

  return {
    components: { ...components, ...subComponents },
    kind,
  };
};
