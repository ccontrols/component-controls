import React from 'react';
import { PropsTable } from './PropsTable';
import { StoryContextConsumer } from '../../context/story/StoryContext';
import { MockContext } from '../../test/MockContext';

export default {
  title: 'Blocks/PropsTable/plain',
  component: PropsTable,
};

export const overview = () => (
  <MockContext storyId="button">
    <PropsTable />
  </MockContext>
);

export const subcomponents = () => (
  <MockContext storyId="story">
    <PropsTable />
  </MockContext>
);

export const extraColumns = () => (
  <MockContext storyId="button">
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

export const controls = () => (
  <MockContext storyId="controls">
    <StoryContextConsumer id="controls">
      {({ story: { controls } = {} }) => (
        <h2>{`Hello, my name is ${controls?.name.value}, and I am ${controls?.age.value} years old.`}</h2>
      )}
    </StoryContextConsumer>
    <PropsTable />
  </MockContext>
);
