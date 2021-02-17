import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
  category: 'Display',
} as Document;

export const overview: Example = () => <Header>header</Header>;
