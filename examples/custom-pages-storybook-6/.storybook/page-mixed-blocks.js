import React from 'react';
import { DocsContainer as SBDocsContainer, Preview, Story as SBStory, Title as SBTitle, Props} from '@storybook/addon-docs/blocks';
import { useContext } from '@component-controls/storybook-custom-docs';
import { DocsContainer } from '@component-controls/storybook';
import { Story, Title, Playground, PropsTable  } from '@component-controls/blocks';


const Page = () => {
  const context = useContext();
  return (
    <>
      <h1>Mixing storybook docs blocks and component-controls blocks</h1>
      <SBDocsContainer context={context}>
        <SBTitle />
        <Preview >
          <SBStory id={context.storyId} />
        </Preview>  
        <Props of='.' />
      </SBDocsContainer>  
      <DocsContainer storyId={context.storyId}>
        <Title />
        <Playground openTab="source" title="." dark={true}>
          <Story id="." />
        </Playground>
        <PropsTable of="." />
      </DocsContainer>
    </>
  )
}
const page = {
  key: 'mixed-page',
  title: 'Mixed blocks',
  render: ({ active }) => active ? <Page /> : null,
}

export default page;