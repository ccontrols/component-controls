import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const overview: Example = ({ color }: TagProps) => {
  return <Tag color={color}>some text</Tag>;
};

overview.controls = {
  color: { type: ControlTypes.COLOR, value: 'red' },
};
