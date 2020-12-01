import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { DocPage } from './DocPage';

export default {
  title: 'Application/DocPage',
  component: DocPage,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <DocPage type="story" />;
