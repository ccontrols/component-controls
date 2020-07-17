import React from 'react';
import { Subtitle } from '.';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Subtitle',
  component: Subtitle,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <Subtitle />
  </MockContext>
);

overview.story = {
  subtitle: 'This is subtitle',
};
