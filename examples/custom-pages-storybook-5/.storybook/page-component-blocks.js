import React from 'react';
import { DocsContainer } from '@component-controls/storybook';
import { Story, Title, ControlsTable, Playground  } from '@component-controls/blocks';


const Page = ({ active }) => {
  return (
    <DocsContainer active={active} >
      <Title>Component controls blocks</Title>
      <Playground openTab="source" title=".">
        <Story id="." />
      </Playground>
      <ControlsTable id='.' />
    </DocsContainer>
  )
}
const page = {
  key: 'component-page',
  title: 'Controls blocks',
  render: ({ active }) => {
    return <Page active={active} />;  
  } 
}

export default page;
