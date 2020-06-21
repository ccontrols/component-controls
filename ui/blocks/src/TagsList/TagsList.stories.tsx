import React from 'react';
import { MockContext } from '@component-controls/blocks';
import { TagsList } from './TagsList';

export default {
  title: 'Blocks/TagsList',
  component: TagsList,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <TagsList tags={['atanasster']} />
  </MockContext>
);
