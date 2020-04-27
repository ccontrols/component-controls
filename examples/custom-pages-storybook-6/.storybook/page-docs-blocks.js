import React from 'react';
import { DocsContainer, Story, Preview, Source, Title } from '@storybook/addon-docs/blocks';
import { getContext, useStoryId } from '@component-controls/storybook-custom-docs';

const Page = () => {
  useStoryId();
  return (
    <DocsContainer context={getContext()}>
      <Title>Using storybook docs page blocks</Title>
      <Preview>
        <Story id="." />
      </Preview>
      <Source id="." />
    </DocsContainer>
  )
}
const page = {
  key: 'docs-page',
  title: 'Docs blocks',
  render: ({ active }) => {
    return active ? <Page /> : null;  
  }
}

export default page;
