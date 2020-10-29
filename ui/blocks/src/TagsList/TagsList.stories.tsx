import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { TagsList } from './TagsList';

export default {
  title: 'Blocks/TagsList',
  component: TagsList,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <TagsList tags={['atanasster']} />
  </MockContext>
);
