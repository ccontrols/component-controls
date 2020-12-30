import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { DocumentHomePage } from './DocumentHomePage';

export default {
  title: 'Application/DocumentHomePage',
  component: DocumentHomePage,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <DocumentHomePage type="blog" />;
