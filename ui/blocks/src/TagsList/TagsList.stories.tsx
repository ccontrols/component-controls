import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { TagsList } from './TagsList';

export default {
  title: 'Blocks/TagsList',
  component: TagsList,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <TagsList tags={['atanasster']} />;
