import React from 'react';
import { MockContext } from '../../test/MockContext';
import { BlockStorySource } from './BlockStorySource';

export default {
  title: 'Blocks/StorySource/block',
  component: BlockStorySource,
};

export const overview = () => {
  return (
    <MockContext storyId="controls">
      <BlockStorySource title="with title" id="." />
    </MockContext>
  );
};
