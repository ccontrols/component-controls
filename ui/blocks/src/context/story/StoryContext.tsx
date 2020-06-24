import React, { FC, useState, useEffect } from 'react';
import {
  Story,
  Document,
  StoryComponent,
  PackageInfo,
} from '@component-controls/core';
import { StoryStore } from '@component-controls/store';
import { BlockContext, BlockDataContext } from '../block';
import { CURRENT_STORY } from '../../utils';

export interface StoryInputProps {
  /** id of the story */
  id?: string;
  /**
   * alternatively you can use the name of a story to load from an external file
   */
  name?: string;
}

export interface StoryContextProps {
  /**
   * story id
   */
  id?: string;
  /**
   * the current story object
   */
  story?: Story;
  /**
   * the file/document of stories
   */
  doc?: Document;
  /**
   * current story's/document's component
   */
  component?: StoryComponent;
  /**
   * global options passed from container
   * those are global parameters as well as decorators
   */
  options?: any;
  /**
   * package.json info
   */
  docPackage?: PackageInfo;

  /**
   * store interface
   */
  storeProvider: StoryStore;
}

/**
 *
 * Context to be used by components that will display 'story' information
 */

export const useStoryContext = ({
  id = CURRENT_STORY,
  name,
}: StoryInputProps): StoryContextProps => {
  const {
    storyId: currentId,
    storeProvider,
    options,
    docId,
  } = React.useContext(BlockContext);
  const { getStoryData, storyIdFromName } = React.useContext(BlockDataContext);
  const storyId = name
    ? storyIdFromName(name)
    : id === CURRENT_STORY
    ? currentId
    : id;
  const [data, setData] = useState<{
    story?: Story;
    doc?: Document;
    component?: StoryComponent;
    docPackage?: PackageInfo;
  }>(getStoryData(storyId, docId));

  useEffect(() => {
    const updateData = (updateId?: string) => {
      if (!updateId || updateId === storyId) {
        const { story, doc, component, docPackage } = getStoryData(
          storyId,
          docId,
        );
        setData({ story, doc, component, docPackage });
      }
    };
    const { story } = data;
    if (story?.id !== storyId) {
      updateData(storyId);
    }
    const onChange = (id?: string) => {
      updateData(id);
    };
    storeProvider.addObserver(onChange);
    return () => {
      storeProvider.removeObserver(onChange);
    };
  }, [docId, storyId, data, storeProvider, getStoryData]);
  return {
    id: storyId,
    story: data.story,
    doc: data.doc,
    component: data.component,
    docPackage: data.docPackage,
    options,
    storeProvider,
  };
};

export interface StoryContextConsumer {
  children: (context: StoryContextProps) => React.ReactNode | undefined;
}
///@ts-ignore
export const StoryContextConsumer: FC<StoryContextConsumer &
  StoryInputProps> = ({ children, ...rest }) => {
  const context = useStoryContext(rest);
  return children ? children(context) || null : null;
};
