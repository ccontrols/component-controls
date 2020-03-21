import React from 'react';
import { BlockComponentSource } from './BlockComponentSource';
import { MockContext } from '../../test/MockContext';

export default {
  title: 'Blocks/Core/ComponentSource/block',
  component: BlockComponentSource,
};

export const overview = () => (
  <MockContext>
    <BlockComponentSource />
  </MockContext>
);

export const withTitle = () => (
  <MockContext>
    <BlockComponentSource title="Custom title" />
  </MockContext>
);
