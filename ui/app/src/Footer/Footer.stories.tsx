import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { Footer } from './Footer';

export default {
  title: 'Application/Footer',
  component: Footer,
  decorators: mockDecorators,
  category: 'Application',
} as Document;

export const overview: Example = () => <Footer />;
