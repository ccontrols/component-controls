import React from 'react';
import { Subtitle } from '.';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Core/Subtitle',
  component: Subtitle,
};

export const simple = () => (
  <MockContext storyId="blocks-core-subtitle--simple" component={Subtitle}>
    <Subtitle />
  </MockContext>
);

simple.story = {
  parameters: {
    componentSubtitle: 'This is subtitle',
  },
};
