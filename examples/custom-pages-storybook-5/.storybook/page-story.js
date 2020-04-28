import React, { createElement }  from 'react';
import { useContext } from '@component-controls/storybook-custom-docs';

const CustomPage = () => {
  const context = useContext()
  return (
    <div>
      <h1>Simple docs page</h1>
      {createElement(context.storyFn)}
    </div>
  );  
}
const page = {
  key: 'custom',
  title: 'Simple Page',
  render: ({ active }) => active ? <CustomPage  /> : null,
}

export default page;
