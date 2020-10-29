import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { ZendeskColor, ZendeskColorPalette } from './ZendeskColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/ZendeskColor',
  component: ZendeskColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <ZendeskColor name={name} color={color} />
);

overview.controls = {
  name: 'Rich Purple',
  color: { type: ControlTypes.COLOR, value: '#503291' },
};

export const palette: Example = () => (
  <ZendeskColorPalette
    palette={{
      support: '#00A656',
      message: '#37B8AF',
      explore: '#30AABC',
      gather: '#F6C8BE',
      guide: '#FF6224',
      connect: '#FF6224',
      chat: '#F79A3E',
      talk: '#EFC93D',
      sell: '#C38F00',
      '100 ': '#F8F9F9',
    }}
  />
);
