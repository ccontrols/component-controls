import React from 'react';

export default {
  key: 'custom',
  title: 'Simple Page',
  render: ({ active, storyId }) => active ? <div><h1>Simple docs page</h1><p>{storyId}</p></div> : null,
}
