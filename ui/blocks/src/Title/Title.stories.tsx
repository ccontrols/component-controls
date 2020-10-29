import React from 'react';
import { Example } from '@component-controls/core';
import { Title } from './';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Title',
  component: Title,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <Title />
  </MockContext>
);
