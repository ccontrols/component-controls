import React from 'react';
import { Title } from './';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Title',
  component: Title,
};

export const overview = () => (
  <MockContext>
    <Title />
  </MockContext>
);
