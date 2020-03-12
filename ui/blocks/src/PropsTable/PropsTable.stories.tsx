import React from 'react';
import { PropsTable } from './PropsTable';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/Core/PropsTable',
  component: PropsTable,
};

export const simple = () => (
  <MockContext storyId="blocks-core-propstable--simple" component={PropsTable}>
    <PropsTable title="Props table" />
  </MockContext>
);
