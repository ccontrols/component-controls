import React from 'react';
import { Document, Example } from '@component-controls/core';
import { PageTypeTag } from '.';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/PageTypeTag',
  component: PageTypeTag,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <PageTypeTag type="story" />;
