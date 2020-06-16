/* eslint-disable react/display-name */
import React from 'react';
import { LastEdited } from './LastEdited';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/LastEdited',
  component: LastEdited,
};

export const overview = () => (
  <MockContext id="id-of-story">
    <LastEdited />
  </MockContext>
);
