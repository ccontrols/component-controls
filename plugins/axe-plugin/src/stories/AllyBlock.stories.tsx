import React from 'react';
import { AxeAllyBlock } from '../index';
import { MockContext } from '@component-controls/blocks';
export default {
  title: 'Plugins/AxeAllyBlock',
  component: AxeAllyBlock,
};

export const overview = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <AxeAllyBlock id="." />
  </MockContext>
);
