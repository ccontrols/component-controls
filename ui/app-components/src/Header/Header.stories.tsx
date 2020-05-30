import React from 'react';
import { Header, HeaderProps } from '.';

export default {
  title: 'App components/Header',
  component: Header,
};

export const overview = ({ position }: HeaderProps) => (
  <Header position={position}>header</Header>
);

overview.story = {
  controls: {
    position: {
      type: 'options',
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
    },
  },
};
