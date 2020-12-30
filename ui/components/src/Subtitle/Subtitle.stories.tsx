import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Subtitle, SubtitleProps } from './Subtitle';

export default {
  title: 'Components/Subtitle',
  component: Subtitle,
} as Document;

export const overview: Example<SubtitleProps> = ({ children }) => {
  return <Subtitle>{children}</Subtitle>;
};

overview.subtitle = 'This is subtitle';
overview.controls = {
  children: { type: ControlTypes.TEXT, value: 'Subtitle text' },
};
