import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { Container } from './Container';

export default {
  title: 'Application/Container',
  component: Container,
  decorators: mockDecorators,
  category: 'Application',
} as Document;

export const overview: Example = () => <Container />;
