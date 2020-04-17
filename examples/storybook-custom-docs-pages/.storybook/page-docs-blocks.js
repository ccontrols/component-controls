import React from 'react';
import { DocsContainer, Primary, Title } from '@storybook/addon-docs/blocks';
import { getContext } from '@component-controls/storybook-custom-docs';

const Page = () => {
  return (
    <DocsContainer context={getContext()}>
      <Title>Using storybook docs page blocks</Title>
      <Primary />
    </DocsContainer>
  )
}
export default {
  key: 'docs-page',
  title: 'Docs blocks',
  render: ({ active, storyId }) => {
    return active ? <Page storyId={storyId} /> : null;  
  } 
}
