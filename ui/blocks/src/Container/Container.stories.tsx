import React from 'react';
import { Example } from '@component-controls/core';
import { Container } from './Container';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Container',
  component: Container,
};

export const overview: Example = () => (
  <MockContext id="id-of-story">
    <Container />
  </MockContext>
);
