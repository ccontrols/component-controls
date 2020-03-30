import React from 'react';
import { Playground } from './Playground';
import { Story } from '../Story';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Playground',
  component: Playground,
};

export const overview = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground>
      <Story id="." />
    </Playground>
  </MockContext>
);

export const multiStories = () => (
  <MockContext storyId="id-of-story">
    <Playground id=".">
      <Story id="id-of-single" />
      <Story id="blocks-core-story-plain--controls" />
    </Playground>
  </MockContext>
);

export const title = () => (
  <MockContext storyId="id-of-story">
    <Playground title=".">
      <Story id="." />
    </Playground>
  </MockContext>
);

export const customTitle = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="Custom playground title">
      <Story id="." />
    </Playground>
  </MockContext>
);
export const notCollapsible = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="." collapsible={false}>
      <Story id="." />
    </Playground>
  </MockContext>
);
