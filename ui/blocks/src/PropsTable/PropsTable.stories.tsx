import React from 'react';
import { Example } from '@component-controls/core';
import { useStoryControls } from '@component-controls/store';
import { PropsTable } from './PropsTable';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/PropsTable',
  component: PropsTable,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-button-story">
    <PropsTable />
  </MockContext>
);

export const subcomponents: Example = () => (
  <MockContext storyId="id-of-story">
    <PropsTable />
  </MockContext>
);

export const extraColumns: Example = () => (
  <MockContext storyId="id-of-button-story">
    <PropsTable
      extraColumns={[
        {
          Header: 'Custom',
          Cell: ({ row }) => {
            return (row.original as any).name.toUpperCase();
          },
        },
      ]}
    />
  </MockContext>
);

export const controls: Example = () => {
  const Story = () => {
    const controls = useStoryControls('blocks-core-story-plain--controls');
    return (
      <h2>{`Hello, my name is ${controls?.name.value}, and I am ${controls?.age.value} years old.`}</h2>
    );
  };
  return (
    <MockContext storyId="blocks-core-story-plain--controls">
      <Story />
      <PropsTable />
    </MockContext>
  );
};

export const title: Example = () => (
  <MockContext storyId="id-of-story">
    <PropsTable title="." />
  </MockContext>
);

export const customTitle: Example = () => (
  <MockContext storyId="id-of-story">
    <PropsTable title="Custom Props Table Title" />
  </MockContext>
);
export const notCollapsible: Example = () => (
  <MockContext storyId="id-of-story">
    <PropsTable title="." collapsible={false} />
  </MockContext>
);
