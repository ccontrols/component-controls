import React from 'react';
import { ThemeProvider } from '@component-controls/components';
import { MockContext, useDocByType } from '@component-controls/blocks';
import { DocumentsList } from './DocumentsList';

export default {
  title: 'Application/DocumentsList',
  component: DocumentsList,
};

const MockList = () => {
  const pages = useDocByType('story');
  return <DocumentsList pages={pages} />;
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <MockList />
    </MockContext>
  </ThemeProvider>
);
