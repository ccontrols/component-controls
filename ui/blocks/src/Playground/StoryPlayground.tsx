import React, { FC } from 'react';
import { useTheme } from '@component-controls/components';
import { BasePlayground, PlaygroundProps } from './BasePlayground';
import { useStoryIdFromName, useStory } from '@component-controls/store';
import { StoryConfig } from '../StoryConfig';
import { StorySource } from '../StorySource';

export type StoryPlaygroundProps = {
  storyProps?: any;
} & PlaygroundProps;
export const StoryPlayground: FC<StoryPlaygroundProps> = ({
  dark,
  id,
  actions = [],
  storyProps,
  ...props
}) => {
  const theme = useTheme();
  const storyId = useStoryIdFromName(storyProps.name) || id || storyProps.id;
  const story = useStory({ id: storyId });
  if (!story) {
    return null;
  }
  const isDark =
    dark === undefined ? theme.initialColorModeName === 'dark' : dark;
  const storyActions = [];
  storyActions.push({
    node: 'source',
    id: 'source',
    group: 'panels',
    'aria-label': 'display story source code',
    panel: (
      <StorySource
        sourceProps={{ dark: isDark }}
        sx={{ mt: 0, mb: 0 }}
        id={storyId}
      />
    ),
  });
  storyActions.push({
    node: 'config',
    id: 'config',
    group: 'panels',
    'aria-label': 'display story configuration object',
    panel: (
      <StoryConfig
        sourceProps={{ dark: isDark }}
        sx={{ mt: 0, mb: 0 }}
        id={storyId}
      />
    ),
  });
  return (
    <BasePlayground
      wrapper={false}
      story={story}
      isDark={isDark}
      actions={[...actions, ...storyActions]}
      {...props}
    />
  );
};
