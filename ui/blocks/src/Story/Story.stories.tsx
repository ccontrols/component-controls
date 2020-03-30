import React from 'react';
import { Story } from './Story';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Story',
  component: Story,
};

export const overview = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story id="." />
  </MockContext>
);

export const title = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story title="." id="." />
  </MockContext>
);

export const customTitle = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story title="My Story Title" id="." />
  </MockContext>
);
export const notCollapsible = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story title="." collapsible={false} />
  </MockContext>
);
