/* eslint-disable react/display-name */
import React from 'react';
import { Pagination } from './Pagination';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Pagination',
  component: Pagination,
};

export const overview = () => (
  <MockContext id="id-of-story">
    <Pagination />
  </MockContext>
);
