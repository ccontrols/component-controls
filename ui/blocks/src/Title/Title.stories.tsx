import React from 'react';
import { Title } from './';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Core/Title',
  component: Title,
};

export const simple = () => (
  <MockContext>
    <Title />
  </MockContext>
);
