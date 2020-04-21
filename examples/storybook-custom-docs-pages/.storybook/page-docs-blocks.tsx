import React from 'react';
import { DocsContainer, Primary, Title } from '@storybook/addon-docs/blocks';
import { getContext } from '@component-controls/storybook-custom-docs';
import { CustomPageDef } from '@component-controls/storybook-custom-docs';

const Page = () => {
  return (
    <DocsContainer context={getContext()}>
      <Title>Using storybook docs page blocks</Title>
      <Primary />
    </DocsContainer>
  )
}
const page: CustomPageDef = {
  key: 'docs-page',
  title: 'Docs blocks',
  render: ({ active }) => {
    return active ? <Page /> : null;  
  } 
}

export default page;
