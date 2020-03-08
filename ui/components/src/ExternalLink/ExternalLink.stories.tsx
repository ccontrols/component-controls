import React from 'react';
import { ExternalLink, ExternalLinkProps } from './ExternalLink';

export default {
  title: 'Components/ExternalLink',
  component: ExternalLink,
};

export const simple = ({ href }: ExternalLinkProps) => {
  return <ExternalLink href={href}>{href}</ExternalLink>;
};

simple.story = {
  parameters: {
    addonControls: {
      smart: false,
    },
    controls: {
      href: {
        type: 'text',
        value: 'https://www.google.com',
        data: { name: 'internet.url' },
      },
    },
  },
};
