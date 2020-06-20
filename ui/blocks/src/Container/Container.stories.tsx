/* eslint-disable react/display-name */
import React from 'react';
import { Container } from './Container';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Container',
  component: Container,
};

export const overview = () => (
  <MockContext id="id-of-story">
    <Container />
  </MockContext>
);
