import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Container } from './Container';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/Container',
  component: Container,
  decorators: mockDecorators,
  category: 'Page',
} as Document;

export const overview: Example = () => <Container />;
