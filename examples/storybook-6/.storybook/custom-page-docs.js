import React from 'react';
import { DocsContainer, Story} from '@storybook/addon-docs/blocks';
import { getContext, useStoryId } from '@component-controls/storybook-custom-docs';

const Page = () => {
  const storyId = useStoryId();
  return (
    <DocsContainer context={getContext()}><Story id={storyId}/></DocsContainer>
  )
}
export default {
  key: 'docs-page',
  title: 'Docs Page',
  render: ({ active, storyId }) => {
    return active ? <Page storyId={storyId} /> : null;  
  } 
}
