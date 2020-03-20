import React from 'react';
import { Subtitle } from '.';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Core/Subtitle',
  component: Subtitle,
};

export const overview = () => (
  <MockContext>
    <Subtitle />
  </MockContext>
);

overview.story = {
  parameters: {
    componentSubtitle: 'This is subtitle',
  },
};
