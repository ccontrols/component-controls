import React from 'react';
import { Example } from '@component-controls/core';
import { Subtitle } from '.';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Subtitle',
  component: Subtitle,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <Subtitle />
  </MockContext>
);

overview.subtitle = 'This is subtitle';
