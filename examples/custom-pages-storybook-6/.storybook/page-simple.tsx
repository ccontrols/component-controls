import React from 'react';
import { CustomPageDef, useStoryId } from '@component-controls/storybook-custom-docs';

const CustomPage: React.FC = () => {
  const storyId = useStoryId();
  return <div><h1>Simple docs page</h1><p>{storyId}</p></div>
}
const page: CustomPageDef = {
  key: 'custom',
  title: 'Simple Page',
  render: ({ active }) => active ? <CustomPage  /> : null,
}

export default page;
