import React from 'react';
import { BlockStory } from './BlockStory';
import { MockContext } from '../../test/MockContext';
export default {
  title: 'Blocks/Core/Story/block',
  component: BlockStory,
};

export const overview = () => (
  <MockContext storyId="controls">
    <BlockStory title="story" id="." />
  </MockContext>
);
