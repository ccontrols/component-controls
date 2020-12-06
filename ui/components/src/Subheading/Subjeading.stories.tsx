import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Subheading, SubheadingProps } from './Subheading';

export default {
  title: 'Components/Subheading',
  component: Subheading,
} as Document;

export const overview: Example<SubheadingProps> = ({ children }) => {
  return <Subheading>{children}</Subheading>;
};

overview.controls = {
  children: { type: ControlTypes.TEXT, value: 'Subheading text' },
};
