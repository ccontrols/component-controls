/* eslint-disable react/display-name */
import React from 'react';
import { Search } from './Search';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Search',
  component: Search,
};

export const overview = () => (
  <MockContext id="id-of-story">
    <Search />
  </MockContext>
);
