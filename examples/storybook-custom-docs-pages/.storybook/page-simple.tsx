import React from 'react';
import { CustomPageDef } from '@component-controls/storybook-custom-docs';

const page: CustomPageDef = {
  key: 'custom',
  title: 'Simple Page',
  render: ({ active, storyId }) => active ? <div><h1>Simple docs page</h1><p>{storyId}</p></div> : null,
}

export default page;
