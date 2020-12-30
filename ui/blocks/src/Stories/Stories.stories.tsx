import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Stories } from './Stories';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/Stories',
  component: Stories,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <Stories id="." />;

export const customTitle: Example = () => (
  <Stories title="My Story Title" id="." />
);
export const notCollapsible: Example = () => <Stories collapsible={false} />;

export const darkTheme: Example = () => <Stories dark={true} />;
