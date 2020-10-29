import React from 'react';
import { Example } from '@component-controls/core';
import { EditPage } from './EditPage';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/EditPage',
  component: EditPage,
};

export const overview: Example = () => (
  <MockContext id="id-of-story">
    <EditPage />
  </MockContext>
);
