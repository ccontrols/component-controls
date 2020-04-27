import React, { createElement }  from 'react';
import { useStoryId, getContext } from '@component-controls/storybook-custom-docs';

const CustomPage = () => {
  //useStoryId so the function is refreshed on story change
  useStoryId();
  return (
    <div>
      <h1>Simple docs page</h1>
      {createElement(getContext().storyFn)}
    </div>
  );  
}
const page = {
  key: 'custom',
  title: 'Simple Page',
  render: ({ active }) => active ? <CustomPage  /> : null,
}

export default page;
