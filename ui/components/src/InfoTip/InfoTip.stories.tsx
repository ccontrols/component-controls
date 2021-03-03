import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ThemeProvider } from '../ThemeContext';
import { InfoTip, InfoTipProps } from './InfoTip';

export default {
  title: 'Components/InfoTip',
  component: InfoTip,
  category: 'Display',
} as Document;

export const overview: Example<InfoTipProps> = ({ children, size }) => (
  <ThemeProvider>
    <InfoTip size={size}>{children}</InfoTip>
  </ThemeProvider>
);

overview.controls = {
  children: `
  # Header H1
  ## Header H2
  ### Header H3
  #### Header H4
  ##### Header H5
  
  some text  
  `,
  size: 18,
};
