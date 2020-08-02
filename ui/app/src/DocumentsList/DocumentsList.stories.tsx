import React from 'react';
import { ThemeProvider, MockContext } from '@component-controls/blocks';
import { useDocByType } from '@component-controls/store';
import { DocumentsList } from './DocumentsList';

export default {
  title: 'Application/DocumentsList',
  component: DocumentsList,
};

const MockList = () => {
  const pages = useDocByType('story');
  return <DocumentsList pages={pages} type="story" />;
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <MockList />
    </MockContext>
  </ThemeProvider>
);
