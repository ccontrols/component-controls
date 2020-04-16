import {
  StoriesKind,
  StoryComponent,
  Story,
} from '@component-controls/specification';

export const CURRENT_STORY = '.';

export const getStoryTitle = (
  kind: StoriesKind | undefined,
  component: StoryComponent | undefined,
): string | undefined => {
  if (component && component.info && component.info.displayName) {
    return component.info.displayName;
  } else if (kind) {
    const titleParts = kind.title.split('/').filter(k => k);
    return titleParts[titleParts.length - 1];
  }
  return undefined;
};

export const getStoryBlockTitle = ({
  story,
  title,
}: {
  story?: Story;
  title?: string;
}): string | undefined => (title == CURRENT_STORY ? story?.name : title);
