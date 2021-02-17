/* eslint-disable react/display-name */
import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Description } from './Description';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/Description',
  component: Description,
  decorators: mockDecorators,
  category: 'Page',
} as Document;

export const overview: Example = () => <Description of="Button" />;

export const components: Example = () => (
  <Description
    of="Button"
    components={{
      h1: ({ children }: { children: string }) => (
        <h1>{`custom component: ${children} `}</h1>
      ),
    }}
  />
);
