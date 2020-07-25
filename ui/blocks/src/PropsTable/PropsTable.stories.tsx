import React from 'react';
import { useStoryControls } from '@component-controls/store';
import { PropsTable } from './PropsTable';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/PropsTable',
  component: PropsTable,
};

export const overview = () => (
  <MockContext storyId="id-of-button-story">
    <PropsTable />
  </MockContext>
);

export const subcomponents = () => (
  <MockContext storyId="id-of-story">
    <PropsTable />
  </MockContext>
);

export const extraColumns = () => (
  <MockContext storyId="id-of-button-story">
    <PropsTable
      extraColumns={[
        {
          Header: 'Custom',
          Cell: ({ row }) => {
            //@ts-ignore`
            return row.original.name.toUpperCase();
          },
        },
      ]}
    />
  </MockContext>
);

export const controls = () => {
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

export const title = () => (
  <MockContext storyId="id-of-story">
    <PropsTable title="." />
  </MockContext>
);

export const customTitle = () => (
  <MockContext storyId="id-of-story">
    <PropsTable title="Custom Props Table Title" />
  </MockContext>
);
export const notCollapsible = () => (
  <MockContext storyId="id-of-story">
    <PropsTable title="." collapsible={false} />
  </MockContext>
);
