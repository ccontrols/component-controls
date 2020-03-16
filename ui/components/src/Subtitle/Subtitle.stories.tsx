import React from 'react';
import { Subtitle } from './Subtitle';

export default {
  title: 'Components/Subtitle',
  component: Subtitle,
};

export const simple = ({ children }: { children: React.ReactNode }) => {
  return <Subtitle>{children}</Subtitle>;
};

simple.story = {
  parameters: {
    componentSubtitle: 'This is subtitle',
  },
  controls: {
    children: { type: 'text', value: 'Subtitle text' },
  },
};
