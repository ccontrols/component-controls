import React from 'react';
import { Title, TitleProps } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
};

export const overview = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

overview.story = {
  controls: {
    children: { type: 'text', value: 'Title text' },
  },
};
