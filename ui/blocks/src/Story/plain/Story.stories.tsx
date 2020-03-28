import React from 'react';
import { Story } from './Story';
import { MockContext } from '../../test/MockContext';
export default {
  title: 'Blocks/Core/Story/plain',
  component: Story,
};

export const overview = () => (
  <MockContext storyId="controls">
    <Story id="." />
  </MockContext>
);
