import React from 'react';
import { Example } from '@component-controls/core';
import { Search } from './Search';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Search',
  component: Search,
};

export const overview: Example = () => (
  <MockContext id="id-of-story">
    <Search />
  </MockContext>
);
