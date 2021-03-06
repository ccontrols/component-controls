import { Document, Component, Story } from '@component-controls/core';

export const CURRENT_STORY = '.';

export const getStoryTitle = (
  doc: Document | undefined,
  component: Component | undefined,
): string | undefined => {
  if (doc) {
    const titleParts = doc.title.split('/').filter(k => k);
    return titleParts[titleParts.length - 1];
  } else if (component && component.info && component.info.displayName) {
    return component.info.displayName;
  }
  return undefined;
};

export const getStoryBlockTitle = ({
  story,
  title,
}: {
  story?: Story;
  title?: string;
}): string | undefined => (title === CURRENT_STORY ? story?.name : title);
