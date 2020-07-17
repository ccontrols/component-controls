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

  /**
   * some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls
   */
  name?: string;
}

export interface ComponentContextProps {
  components: StoryComponents;
  doc?: Document;
  story?: Story;
  componentPackage?: PackageInfo;
}

export const useComponentsContext = ({
  of = CURRENT_STORY,
  name,
}: ComponentInputProps): ComponentContextProps => {
  const {
    storyId: currentStoryId,
    docId,
    getStoryData,
    getComponents,
    storyIdFromNameCurrent,
    addObserver,
    removeObserver,
  } = useContext(BlockDataContext);
  const storyId = name ? storyIdFromNameCurrent(name) : currentStoryId;
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
  let components: StoryComponents = {};
  if (of === CURRENT_STORY && story) {
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
