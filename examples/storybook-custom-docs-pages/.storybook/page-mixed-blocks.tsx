import React from 'react';
import { DocsContainer as SBDocsContainer, Preview, Story as SBStory, Title as SBTitle, Props} from '@storybook/addon-docs/blocks';
import { getContext, useStoryId } from '@component-controls/storybook-custom-docs';
import { DocsContainer } from '@component-controls/storybook';
import { Story, Title, Playground, PropsTable  } from '@component-controls/blocks';
import { CustomPageDef } from '@component-controls/storybook-custom-docs';


const Page = () => {
  const storyId = useStoryId();
  return (
    <>
      <SBDocsContainer context={getContext()}>
        <SBTitle />
        <Preview >
          <SBStory id={storyId} />
        </Preview>  
        <Props of='.' />
      </SBDocsContainer>  
      <DocsContainer storyId={storyId}>
        <Title />
        <Playground openTab="source" title="." dark={true}>
          <Story id="." />
        </Playground>
        <PropsTable of="." />
      </DocsContainer>
    </>
  )
}
const page: CustomPageDef = {
  key: 'mixed-page',
  title: 'Mixed blocks',
  render: ({ active }) => {
    return active ? <Page /> : null;  
  } 
}

export default page;