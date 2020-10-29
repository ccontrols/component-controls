/* eslint-disable react/display-name */
import React from 'react';
import { Example } from '@component-controls/core';
import { Pagination } from './Pagination';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Pagination',
  component: Pagination,
};

export const overview: Example = () => (
  <MockContext id="id-of-story">
    <Pagination />
  </MockContext>
);
