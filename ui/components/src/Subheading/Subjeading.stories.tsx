import React from 'react';
import { Subheading, SubheadingProps } from './Subheading';

export default {
  title: 'Components/Subheading',
  component: Subheading,
};

export const overview = ({ children }: SubheadingProps) => {
  return <Subheading>{children}</Subheading>;
};

overview.story = {
  controls: {
    children: { type: 'text', value: 'Subheading text' },
  },
};
