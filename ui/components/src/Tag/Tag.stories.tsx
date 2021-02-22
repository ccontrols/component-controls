import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { tailwind } from '@theme-ui/presets';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  category: 'Display',
} as Document;

export const overview: Example<TagProps> = ({ color }) => {
  return <Tag color={color}>some text</Tag>;
};

overview.controls = {
  color: { type: ControlTypes.COLOR, value: 'red' },
};

export const twilwindArrayColors: Example<TagProps> = () => {
  return (
    <ThemeProvider theme={tailwind as any}>
      <Tag color="red">some text</Tag>
    </ThemeProvider>
  );
};
