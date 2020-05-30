/* eslint-disable react/display-name */
import React from 'react';
import { ClassicPage } from '@component-controls/pages';
import { PagesConfig } from '../components/types';

export const pages: PagesConfig = () => [
  {
    key: 'page',
    title: 'Documentation',
    render: () => <ClassicPage />,
  },
];
