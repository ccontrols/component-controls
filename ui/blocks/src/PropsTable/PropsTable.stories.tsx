import React from 'react';
import { Document, Example } from '@component-controls/core';
import { useStoryControls } from '@component-controls/store';
import { PropsTable } from './PropsTable';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/PropsTable',
  component: PropsTable,
} as Document;

export const overview: Example = () => <PropsTable />;
overview.decorators = makeDecorators('id-of-button-story');

export const subcomponents: Example = () => <PropsTable />;
subcomponents.decorators = makeDecorators('id-of-story');

export const extraColumns: Example = () => (
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
);
extraColumns.decorators = makeDecorators('id-of-button-story');

export const controls: Example = () => {
  const Story = () => {
    const controls = useStoryControls('blocks-core-story-plain--controls');
    return (
      <h2>{`Hello, my name is ${controls?.name.value}, and I am ${controls?.age.value} years old.`}</h2>
    );
  };
  return (
    <>
      <Story />
      <PropsTable />
    </>
  );
};
controls.decorators = makeDecorators('blocks-core-story-plain--controls');

export const title: Example = () => <PropsTable title="." />;
title.decorators = makeDecorators('id-of-story');

export const customTitle: Example = () => (
  <PropsTable title="Custom Props Table Title" />
);
customTitle.decorators = makeDecorators('id-of-story');

export const notCollapsible: Example = () => (
  <PropsTable title="." collapsible={false} />
);
notCollapsible.decorators = makeDecorators('id-of-story');
