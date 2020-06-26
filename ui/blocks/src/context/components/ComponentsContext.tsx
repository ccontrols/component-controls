import { useEffect, useState, useContext } from 'react';
import {
  Story,
  Document,
  StoryComponents,
  getComponentName,
  PackageInfo,
} from '@component-controls/core';

import { BlockDataContext } from '../block';
import { CURRENT_STORY } from '../../utils';

export interface ComponentInputProps {
  /**
   * Specify the component(s), for which to have information displayed.
   * The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
   * If an array of components is specified, each component will be displayed in a separate tab.
   */
  of?: typeof CURRENT_STORY | any;
}

export interface ComponentContextProps {
  components: StoryComponents;
  doc?: Document;
  story?: Story;
  componentPackage?: PackageInfo;
}

export const useComponentsContext = ({
  of = CURRENT_STORY,
}: ComponentInputProps): ComponentContextProps => {
  const {
    storyId,
    docId,
    getStoryData,
    getComponents,
    addObserver,
    removeObserver,
  } = useContext(BlockDataContext);

  const [{ story, doc, component, componentPackage }, setStoryData] = useState(
    getStoryData(storyId, docId),
  );

  useEffect(() => {
    setStoryData(getStoryData(storyId, docId));
    const onChange = () => {
      //force refresh of context
      setStoryData(getStoryData(storyId, docId));
    };
    addObserver(onChange);
    return () => {
      removeObserver(onChange);
    };
  }, [docId, storyId, addObserver, getStoryData, removeObserver]);

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
          ...getComponents(story.subcomponents, doc),
        };
      } else {
        components = getComponents(story.subcomponents, doc);
      }
    } else {
      components = getComponents(story.subcomponents, doc);
    }
  } else {
    components = getComponents({ of }, doc);
  }
  return {
    components,
    doc,
    story,
    componentPackage,
  };
};
