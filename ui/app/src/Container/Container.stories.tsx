import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { Container } from './Container';

export default {
  title: 'Application/Container',
  component: Container,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <Container />
  </MockContext>
);
