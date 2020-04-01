import React from 'react';
import { Subtitle, SubtitleProps } from './Subtitle';

export default {
  title: 'Components/Subtitle',
  component: Subtitle,
};

export const overview = ({ children }: SubtitleProps) => {
  return <Subtitle>{children}</Subtitle>;
};

overview.story = {
  parameters: {
    componentSubtitle: 'This is subtitle',
  },
  controls: {
    children: { type: 'text', value: 'Subtitle text' },
  },
};

export const as = () => {
  return <Subtitle as="h2">Subtitle text</Subtitle>;
};
