import React from 'react';
import { ExternalLink, ExternalLinkProps } from './ExternalLink';

export default {
  title: 'Components/ExternalLink',
  component: ExternalLink,
};

export const overview = ({ href }: ExternalLinkProps) => {
  return <ExternalLink href={href}>{href}</ExternalLink>;
};

overview.story = {
  smartControls: {
    smart: false,
  },
  controls: {
    href: {
      type: 'text',
      value: 'https://www.google.com',
      data: { name: 'internet.url' },
    },
  },
};
