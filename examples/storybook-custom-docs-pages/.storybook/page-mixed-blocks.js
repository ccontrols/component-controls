import React from 'react';
import { DocsContainer as SBDocsContainer, Preview, Story as SBStory, Title as SBTitle, Props} from '@storybook/addon-docs/blocks';
import { getContext, useStoryId } from '@component-controls/storybook-custom-docs';
import { DocsContainer } from '@component-controls/storybook';
import { Story, Title, Playground, PropsTable  } from '@component-controls/blocks';

const Page = ({ storyId: id }) => {
  const storyId = useStoryId(id);
  return (
    <>
      <SBDocsContainer context={getContext()}>
        <SBTitle />
        <Preview >
          <SBStory id={storyId} />
        </Preview>  
        <Props of='.' />
      </SBDocsContainer>  
      <DocsContainer active={true} storyId={storyId}>
        <Title />
        <Playground openTab="source" title=".">
          <Story id="." />
        </Playground>
        <PropsTable of="." />
      </DocsContainer>
    </>
  )
}
export default {
  key: 'mixed-page',
  title: 'Mixed blocks',
  render: ({ active, storyId }) => {
    return active ? <Page storyId={storyId} /> : null;  
  } 
}
