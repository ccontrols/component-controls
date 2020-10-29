import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import {
  IBMDLColor,
  IBMDLColorPalette,
  IBMDLColorProps,
  ColorTabs,
} from './IBMDLColor';

export default {
  title: 'Design Tokens/Colors/IBMDLColor',
  component: IBMDLColor,
};

export const overview: Example = ({
  name,
  color,
  display,
}: IBMDLColorProps) => (
  <IBMDLColor name={name} color={color} display={display} />
);

overview.controls = {
  name: 'Green 10',
  color: { type: ControlTypes.COLOR, value: '#defbe6' },
  display: ['hex', 'rgb', 'pms', 'cmyk'],
};

export const palette: Example = () => {
  return (
    <ColorTabs>
      {display => (
        <IBMDLColorPalette
          display={display}
          palette={{
            'Red 100': '#2d0709',
            'Red 90': '#520408',
            'Red 80': '#750e13',
            'Red 70': '#a2191f',
            'Red 60': '#da1e28',
            'Red 50': '#fa4d56',
            'Red 40': '#ff8389',
            'Red 30': '#ffb3b8',
            'Red 20': '#ffd7d9',
            'Red 10': '#fff1f1',
          }}
        />
      )}
    </ColorTabs>
  );
};
