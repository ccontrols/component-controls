import {
  StoriesDoc,
  StoryComponent,
  Story,
} from '@component-controls/specification';

export const CURRENT_STORY = '.';

export const getStoryTitle = (
  doc: StoriesDoc | undefined,
  component: StoryComponent | undefined,
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
