import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { Subheading, SubheadingProps } from './Subheading';

export default {
  title: 'Components/Subheading',
  component: Subheading,
};

export const overview: Example = ({ children }: SubheadingProps) => {
  return <Subheading>{children}</Subheading>;
};

overview.controls = {
  children: { type: ControlTypes.TEXT, value: 'Subheading text' },
};
