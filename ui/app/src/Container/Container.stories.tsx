import React from 'react';
import { MockContext } from '@component-controls/blocks';
import { Container } from './Container';

export default {
  title: 'Application/Container',
  component: Container,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <Container />
  </MockContext>
);
