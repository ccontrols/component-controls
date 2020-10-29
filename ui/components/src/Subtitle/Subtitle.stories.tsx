import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { Subtitle, SubtitleProps } from './Subtitle';

export default {
  title: 'Components/Subtitle',
  component: Subtitle,
};

export const overview: Example<SubtitleProps> = ({ children }) => {
  return <Subtitle>{children}</Subtitle>;
};

overview.subtitle = 'This is subtitle';
overview.controls = {
  children: { type: ControlTypes.TEXT, value: 'Subtitle text' },
};
