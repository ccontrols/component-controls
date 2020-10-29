import React from 'react';
import { Example } from '@component-controls/core';
import { Story } from './Story';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Story',
  component: Story,
};

export const overview: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story id="." />
  </MockContext>
);

export const title: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story title="." id="." />
  </MockContext>
);

export const customTitle: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story title="My Story Title" id="." />
  </MockContext>
);
export const notCollapsible: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story title="." collapsible={false} />
  </MockContext>
);

export const description: Example = () => (
  <MockContext storyId="id-of-story">
    <Story id="." />
  </MockContext>
);

export const iframe: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Story id="." wrapper="iframe" />
  </MockContext>
);
