import React from 'react';
import { BlockPropsTable } from './BlockPropsTable';
import { MockContext } from '../../test/MockContext';

export default {
  title: 'Blocks/PropsTable/block',
  component: BlockPropsTable,
};

export const overview = () => (
  <MockContext storyId="button">
    <BlockPropsTable title="BlockPropsTable table" />
  </MockContext>
);
