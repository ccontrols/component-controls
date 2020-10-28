import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { Title, TitleProps } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
};

export const overview: Example = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

overview.controls = {
  children: { type: ControlTypes.TEXT, value: 'Title text' },
};
