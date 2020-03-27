import React from 'react';
import {
  Story,
  StoriesKind,
  StoryComponent,
} from '@component-controls/specification';

import { BlockContext, CURRENT_SELECTION } from '../block';
import { getComponentName } from './utils';

export interface ComponentInputProps {
  /**
   * Specify the component(s), for which to have information displayed.
   * The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
   * If an array of components is specified, each component will be displayed in a separate tab.
   */
  of?: '.' | any;
}

export interface ComponentContextProps {
  components: {
    [label: string]: StoryComponent;
  };
  kind?: StoriesKind;
  story?: Story;
}

export const useComponentsContext = ({
  of = CURRENT_SELECTION,
}: ComponentInputProps): ComponentContextProps => {
  const { currentId, store } = React.useContext(BlockContext);
  if (!currentId) {
    return {
      components: {},
    };
  }
  const story: Story | undefined =
    store && store.stories && store.stories[currentId];
  const kind =
    store && story && story.kind ? store.kinds[story.kind] : undefined;

  let cmp: any;
  if (of === CURRENT_SELECTION) {
    cmp = story && story.component ? story.component : kind?.component;
  } else {
    cmp = of;
  }
  const subcomponents = story && kind && story.subcomponents;
  const subComponents = subcomponents
    ? Object.keys(subcomponents).reduce((acc, key) => {
        const name = getComponentName(subcomponents[key]);
        const component =
          name &&
          kind?.components[name] &&
          store?.components[kind.components[name]];
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
    ? { [componentName]: store?.components[kind.components[componentName]] }
    : {};

  return {
    components: { ...components, ...subComponents },
    kind,
    story,
  };
};
