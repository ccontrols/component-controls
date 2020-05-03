import React from 'react';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const overview = ({ color }: TagProps) => {
  return <Tag color={color}>some text</Tag>;
};

overview.story = {
  controls: {
    color: { type: 'color', value: 'red' },
  },
};
