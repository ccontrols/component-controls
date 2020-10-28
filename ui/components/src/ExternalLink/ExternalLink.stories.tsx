import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { ExternalLink, ExternalLinkProps } from './ExternalLink';

export default {
  title: 'Components/ExternalLink',
  component: ExternalLink,
};

export const overview: Example = ({ href }: ExternalLinkProps) => {
  return <ExternalLink href={href}>{href}</ExternalLink>;
};

overview.smartControls = {
  smart: false,
};

overview.controls = {
  href: {
    type: ControlTypes.TEXT,
    value: 'https://www.google.com',
    data: { name: 'internet.url' },
  },
};
