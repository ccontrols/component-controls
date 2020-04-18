import React from 'react';
import { DocsContainer } from '@component-controls/storybook';
import { Story, Title, ControlsTable, Playground  } from '@component-controls/blocks';
import { CustomPageDef } from '@component-controls/storybook-custom-docs';


const Page = ({ active, storyId }) => {
  return (
    <DocsContainer active={active} storyId={storyId}>
      <Title>Component controls blocks</Title>
      <Playground openTab="source" title=".">
        <Story id="." />
      </Playground>
      <ControlsTable id='.' />
    </DocsContainer>
  )
}
const page: CustomPageDef = {
  key: 'component-page',
  title: 'Controls blocks',
  render: ({ active, storyId }) => {
    return <Page storyId={storyId} active={active} />;  
  } 
}

export default page;
