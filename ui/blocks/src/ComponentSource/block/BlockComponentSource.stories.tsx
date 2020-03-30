import React from 'react';
import { BlockComponentSource } from './BlockComponentSource';
import { MockContext } from '../../test/MockContext';

export default {
  title: 'Blocks/ComponentSource/block',
  component: BlockComponentSource,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <BlockComponentSource />
  </MockContext>
);

export const withTitle = () => (
  <MockContext storyId="id-of-story">
    <BlockComponentSource title="Custom title" />
  </MockContext>
);
