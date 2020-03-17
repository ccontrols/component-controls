import React from 'react';
import { ComponentSource } from './ComponentSource';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Core/ComponentSource',
  component: ComponentSource,
};

export const simple = () => (
  <MockContext>
    <ComponentSource />
  </MockContext>
);

export const withTitle = () => (
  <MockContext>
    <ComponentSource title="Custom title" />
  </MockContext>
);
