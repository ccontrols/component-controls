import { StoriesKind, StoryComponent } from '@component-controls/specification';

export const CURRENT_STORY = '.';

export const getComponentName = (component: any): string | undefined => {
  return component
    ? typeof component === 'string'
      ? component
      : component.name || component.displayName
    : undefined;
};

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
  kind,
  component,
  title,
}: {
  kind?: StoriesKind;
  component?: StoryComponent;
  title?: string;
}): string | undefined =>
  title == CURRENT_STORY ? getStoryTitle(kind, component) : title;
