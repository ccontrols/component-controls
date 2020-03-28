import React, { FC } from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import {
  Story,
  StoriesStore,
  StoriesKind,
  StoryComponent,
} from '@component-controls/specification';

import { BlockContext, CURRENT_SELECTION } from '../block';

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

export interface StoryInputProps {
  /** id of the story */
  id?: string;
  /**
   * or - name of the story if in an external file
   * will be used to find the story
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
  kind?: StoriesKind;
  /**
   * current story's/document's component
   */
  component?: StoryComponent;
}

/**
 *
 * Context to be used by components that will display 'story' information
 */
export const useStoryContext = ({
  id,
  name,
}: StoryInputProps): StoryContextProps => {
  const { currentId, store } = React.useContext(BlockContext);
  const inputId = id === CURRENT_SELECTION ? currentId : id;
  const storyId = store
    ? inputId || (name && storyIdFromName(store, name)) || currentId
    : undefined;

  if (!storyId) {
    return {};
  }
  const story: Story | undefined =
    store && store.stories && store.stories[storyId];
  const kind =
    store && story && story.kind ? store.kinds[story.kind] : undefined;
  const storyComponent: any = story ? story.component : undefined;
  const componentName = storyComponent
    ? typeof storyComponent === 'string'
      ? storyComponent
      : storyComponent.name || storyComponent.displayName
    : undefined;
  const component =
    store && componentName && kind && kind.components[componentName]
      ? store.components[kind.components[componentName]]
      : undefined;
  return {
    id: storyId,
    kind,
    story,
    component,
  };
};

export interface StoryContextConsumer {
  children: (context: StoryContextProps) => React.ReactElement;
}
export const StoryContextConsumer: FC<StoryContextConsumer &
  StoryInputProps> = ({ children, ...rest }) => {
  const context = useStoryContext(rest);
  return children(context);
};
