import React from 'react';
import { Subtitle } from './Subtitle';

export default {
  title: 'Blocks/Components/Subtitle',
  component: Subtitle,
};

export const simple = ({ children }: { children: React.ReactNode }) => {
  return <Subtitle>{children}</Subtitle>;
};

simple.story = {
  parameters: {
    controls: {
      children: { type: 'text', value: 'Subtitle text' },
    },
    componentSubtitle: 'This is subtitle',
  },
};
