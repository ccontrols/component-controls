import React from 'react';
import { StoryContextConsumer } from '../../context/story/StoryContext';
import { MockContext } from '../../test/MockContext';
import { BlockControlsTable } from './BlockControlsTable';

export default {
  title: 'Blocks/ControlsTable/block',
  component: BlockControlsTable,
};

export const overview = () => {
  return (
    <MockContext storyId="blocks-core-story-plain--controls">
      <StoryContextConsumer id="blocks-core-story-plain--controls">
        {({ story: { controls } = {} }) => (
          <h2>{`Hello, my name is ${controls?.name.value}, and I am ${controls?.age.value} years old.`}</h2>
        )}
      </StoryContextConsumer>
      <BlockControlsTable title="Example controls" id="." />
    </MockContext>
  );
};
