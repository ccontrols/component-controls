import React from 'react';
import { StorySource } from './StorySource';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Core/StorySource',
  component: StorySource,
};

export const simple = () => (
  <MockContext>
    <StorySource id="." />
  </MockContext>
);
