import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Shield, ShieldProps } from './Shield';

export default {
  title: 'Components/Shield',
  component: Shield,
  category: 'Display',
} as Document;

export const overview: Example<ShieldProps> = ({ color, label }) => {
  return <Shield label={label} value="1.0.0" color={color} />;
};

overview.controls = {
  color: { type: ControlTypes.COLOR, value: undefined },
  label: 'some text',
};

export const themeColor: Example = ({ color }) => {
  return <Shield label="color" value={color} color={color} />;
};

themeColor.controls = {
  color: {
    type: ControlTypes.OPTIONS,
    options: [
      'accentPalette0',
      'accentPalette1',
      'accentPalette2',
      'accentPalette3',
      'accentPalette4',
      'accentPalette5',
      'palette0',
      'palette1',
      'palette2',
      'palette3',
      'palette4',
      'palette5',
      'status_passed',
      'status_failed',
      'status_skipped',
      'status_pending',
      'status_todo',
      'status_disabled',
    ],
  },
};

export const fraction: Example = () => (
  <Shield label="percent" value={50} percent />
);

export const percent: Example = () => (
  <Shield label="zero" value={80} percent />
);

export const zeroValue: Example = () => (
  <Shield label="zero" value={0} percent />
);
