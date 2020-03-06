import React from 'react';
import { Title } from './';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Core/Title',
  component: Title,
};

export const simple = () => (
  <MockContext storyId="blocks-core-description--simple" component={Title}>
    <Title />
  </MockContext>
);
