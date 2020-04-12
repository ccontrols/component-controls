import React from 'react';
import {
  Story,
  StoriesKind,
  StoryComponents,
  getComponentName,
} from '@component-controls/specification';

import { BlockDataContext } from '../block';
import { CURRENT_STORY } from '../../utils';

export interface ComponentInputProps {
  /**
   * Specify the component(s), for which to have information displayed.
   * The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
   * If an array of components is specified, each component will be displayed in a separate tab.
   */
  of?: '.' | any;
}

export interface ComponentContextProps {
  components: StoryComponents;
  kind?: StoriesKind;
  story?: Story;
}

export const useComponentsContext = ({
  of = CURRENT_STORY,
}: ComponentInputProps): ComponentContextProps => {
  const { getStoryData, getComponents } = React.useContext(BlockDataContext);
  const { story, kind, component } = getStoryData();
  if (!story) {
    return {
      components: {},
    };
  }

  let components: StoryComponents = {};
  if (of === CURRENT_STORY) {
    if (component) {
      const name = getComponentName(component);
      if (name) {
        components = {
          [name]: component,
          ...getComponents(story.subcomponents, kind),
        };
      } else {
        components = getComponents(story.subcomponents, kind);
      }
    } else {
      components = getComponents(story.subcomponents, kind);
    }
  } else {
    components = getComponents({ of }, kind);
  }
  return {
    components,
    kind,
    story,
  };
};
