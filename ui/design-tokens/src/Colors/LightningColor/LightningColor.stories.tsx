/* eslint-disable react/display-name */
import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { LightningColor, LightningColorPalette } from './LightningColor';
import { TableColumn } from '../../containers';
import { ColorProps } from '../../types';

const lightningColumns: TableColumn[] = [
  {
    title: 'Released',
    name: 'released',
    render: value => <div style={{ textAlign: 'right' }}>{value}</div>,
  },
  {
    title: 'Themeable',
    name: 'themeable',
    render: value => (
      <div style={{ textAlign: 'center' }}>{value ? 'Yes' : 'No'}</div>
    ),
  },
  {
    title: 'Support',
    name: 'support',
    render: value => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            width: '1.5rem',
            height: '1.5rem',
            lineHeight: '1.5rem',
            fontSize: '.625rem',
            color: '#fff',
            backgroundColor: value === 'GA' ? '#54c473' : '#6488e3',
          }}
        >
          {value}
        </div>
      </div>
    ),
  },
];
export default {
  title: 'Design Tokens/Colors/LightningColor',
  component: LightningColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <LightningColor columns={lightningColumns} name={name} color={color} />
);

overview.controls = {
  name: 'BRAND_ACCESSIBLE',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#004d80' },
      description: 'Dark variant of BRAND that is accessible with white',
      sass: '$brand-accessible',
      released: '2.6.0',
      themeable: true,
      support: 'GA',
    },
  },
};

export const palette: Example = () => (
  <LightningColorPalette
    columns={lightningColumns}
    palette={{
      BRAND_DISABLED: {
        value: '#c9c7c5',
        description: 'Disabled state of BRAND_A11Y',
        sass: '$brand-disabled',
        released: '2.6.0',
        themeable: true,
        support: 'GA',
      },
      PALETTE_GRAY_1: {
        value: '#ffffff',
        description: 'Background color a branded app header',
        sass: '$brand-header',
        released: '2.6.0',
        themeable: true,
        support: 'I',
      },
      BRAND_HEADER_CONTRAST: {
        value: '#5e5e5e',
        description:
          'Variant of BRAND_HEADER that is accessible with BRAND_HEADER',
        sass: '$brand-header-contrast',
        released: '2.6.0',
        themeable: true,
        support: 'I',
      },
      BRAND_HEADER_CONTRAST_WARM: {
        value: '#bf0201',
        description:
          'Variant of BRAND_HEADER_CONTRAST that provides a warm color',
        sass: '$brand-header-contrast-warm',
        released: '2.6.0',
        themeable: true,
        support: 'I',
      },
      BRAND_PRIMARY: {
        value: '#1589ee',
        description: 'Primary brand color',
        sass: '$brand-primary',
        released: '2.6.0',
        themeable: true,
        support: 'GA',
      },
    }}
  />
);
