import React from 'react';
import { useStoryId } from '@component-controls/storybook-custom-docs';

const CustomPage = () => {
  const storyId = useStoryId();
  return <div><h1>Simple docs page</h1><p>{storyId}</p></div>
}
const page = {
  key: 'custom',
  title: 'Simple Page',
  render: ({ active }) => active ? <CustomPage  /> : null,
}

export default page;
