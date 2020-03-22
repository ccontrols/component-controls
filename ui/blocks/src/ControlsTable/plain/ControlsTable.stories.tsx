import React from 'react';
import { StoryContextConsumer } from '../../context/story/StoryContext';
import { ControlsTable } from './ControlsTable';
import { MockContext } from '../../test/MockContext';

export default {
  title: 'Blocks/Core/ControlsTable/plain',
  component: ControlsTable,
};

export const overview = () => {
  return (
    <MockContext storyId="controls">
      <StoryContextConsumer id="controls">
        {({ story: { controls } = {} }) => (
          <h2>{`Hello, my name is ${controls?.name.value}, and I am ${controls?.age.value} years old.`}</h2>
        )}
      </StoryContextConsumer>
      <ControlsTable id="." />
    </MockContext>
  );
};
