import React from 'react';
import { Title } from './Title';

export default {
  title: 'Blocks/Components/Title',
  component: Title,
};

export const simple = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};

simple.story = {
  parameters: {
    controls: {
      children: { type: 'text', value: 'Title text' },
    },
  },
};
