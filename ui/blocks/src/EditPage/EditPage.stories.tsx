/* eslint-disable react/display-name */
import React from 'react';
import { EditPage } from './EditPage';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/EditPage',
  component: EditPage,
};

export const overview = () => (
  <MockContext id="id-of-story">
    <EditPage />
  </MockContext>
);
