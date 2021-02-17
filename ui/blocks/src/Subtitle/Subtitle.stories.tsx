import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Subtitle } from '.';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/Subtitle',
  component: Subtitle,
  decorators: mockDecorators,
  category: 'Page',
} as Document;

export const overview: Example = () => <Subtitle />;

overview.subtitle = 'This is subtitle';
