import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';

import { LinkHeading, LinkHeadingProps } from './';

export default {
  title: 'Components/LinkHeading',
  component: LinkHeading,
  category: 'Navigation',
} as Document;

export const overview: Example<LinkHeadingProps> = ({ as, children }) => (
  <div style={{ marginLeft: '32px' }}>
    <LinkHeading as={as}>{children}</LinkHeading>
  </div>
);

overview.controls = {
  children: { type: ControlTypes.TEXT, value: 'LinkHeading text' },
  as: {
    type: ControlTypes.OPTIONS,
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    value: 'h1',
  },
};
