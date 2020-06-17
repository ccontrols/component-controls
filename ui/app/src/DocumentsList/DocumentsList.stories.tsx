import React, { useContext } from 'react';
import { ThemeProvider } from '@component-controls/components';
import { MockContext, BlockContext } from '@component-controls/blocks';
import { DocumentsList } from './DocumentsList';

export default {
  title: 'Application/DocumentsList',
  component: DocumentsList,
};

const MockList = () => {
  const { storeProvider } = useContext(BlockContext);
  const pages = storeProvider.getPageList('story');
  return <DocumentsList pages={pages} />;
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <MockList />
    </MockContext>
  </ThemeProvider>
);
