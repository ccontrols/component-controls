import React from 'react';
import { DocsContainer } from '@component-controls/storybook';
import { Story, Title, Playground  } from '@component-controls/blocks';


const Page = ({ active }) => (
  <DocsContainer active={active} >
    <Title>Component controls blocks</Title>
    <Playground openTab="source" title=".">
      <Story id="." />
    </Playground>
  </DocsContainer>
);

const page = {
  key: 'component-page',
  title: 'Controls blocks',
  render: ({ active }) => active ? <Page /> : null
}

export default page;
