import React from 'react';
import { DocsContainer, Story, Preview, Source, Title } from '@storybook/addon-docs/blocks';
import { useContext } from '@component-controls/storybook-custom-docs';

const Page = () => {
  const context = useContext();
  return (
    <DocsContainer context={context}>
      <Title>Using storybook docs page blocks</Title>
      <Preview>
        <Story id="." />
      </Preview>
      <Source id="." />
    </DocsContainer>
  )
}
const page = {
  key: 'docs-blocks',
  title: 'Docs blocks',
  render: ({ active }) => active ? <Page /> : null
}

export default page;
