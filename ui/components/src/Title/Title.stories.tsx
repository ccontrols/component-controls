import React from 'react';
import { Title } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
};

export const overview = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};

overview.story = {
  controls: {
    children: { type: 'text', value: 'Title text' },
  },
};
