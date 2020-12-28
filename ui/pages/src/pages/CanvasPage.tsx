import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { useCurrentStory } from '@component-controls/store';
import { StoryRender } from '@component-controls/blocks';

const CanvasPage: FC = () => {
  const story = useCurrentStory();
  return story ? <StoryRender story={story} /> : null;
};
export default {
  title: 'Canvas',
  component: CanvasPage,
} as TabConfiguration;
