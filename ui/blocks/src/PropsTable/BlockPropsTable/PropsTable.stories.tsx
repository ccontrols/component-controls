import React from 'react';
import { BlockPropsTable } from './BlockPropsTable';
import { MockContext } from '../../test/MockContext';

export default {
  title: 'Blocks/Core/BlockPropsTable',
  component: BlockPropsTable,
};

export const simple = () => (
  <MockContext
    storyId="blocks-core-propstable--simple"
    component={BlockPropsTable}
  >
    <BlockPropsTable title="BlockPropsTable table" />
  </MockContext>
);
