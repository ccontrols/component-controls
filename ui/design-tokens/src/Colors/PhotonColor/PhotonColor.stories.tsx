import React from 'react';
import { PhotonColor, PhotonColorPalette } from './PhotonColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/PhotonColor',
  component: PhotonColor,
};

export const overview = ({ name, color }: ColorProps) => (
  <PhotonColor name={name} color={color} />
);

overview.controls = {
  name: 'Orange 50',
  color: { type: 'color', value: '#ff9400' },
};

export const palette = () => (
  <PhotonColorPalette
    palette={{
      'Teal 50': '#00feff',
      'Teal 60': '#00c8d7',
      'Teal 70': '#008ea4',
      'Teal 80': '#005a71',
      'Teal 90': '#002d3e',
    }}
  />
);
