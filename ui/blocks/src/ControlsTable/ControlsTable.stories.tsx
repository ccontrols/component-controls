import React from 'react';
import { StoryContextConsumer } from '../context/story/StoryContext';
import { ControlsTable } from './ControlsTable';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/ControlsTable',
  component: ControlsTable,
};

const MockStory = () => (
  <StoryContextConsumer id="blocks-core-story-plain--controls">
    {({ story: { controls } = {} }) => (
      <h2>{`Hello, my name is ${controls?.name.value}, and I am ${controls?.age.value} years old.`}</h2>
    )}
  </StoryContextConsumer>
);
export const overview = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <MockStory />
    <ControlsTable id="." />
  </MockContext>
);

export const title = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <MockStory />
    <ControlsTable title="." id="." />
  </MockContext>
);

export const customTitle = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <MockStory />
    <ControlsTable title="Custom title" id="." />
  </MockContext>
);
export const notCollapsible = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <MockStory />
    <ControlsTable title="." collapsible={false} />
  </MockContext>
);
