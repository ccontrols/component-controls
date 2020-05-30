/* eslint-disable react/display-name */
import React from 'react';
import { ClassicPage, TestingPage } from '@component-controls/pages';

export const pages = () => [
  {
    key: 'page',
    title: 'Documentation',
    render: () => <ClassicPage />,
  },
  {
    key: 'test',
    title: 'Testing',
    render: () => <TestingPage />,
  },
];
