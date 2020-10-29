import React from 'react';
import { Example } from '@component-controls/core';
import { useDocument, useDocumentPath } from '@component-controls/store';
import { DocumentItem } from '.';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/DocumentItem',
  component: DocumentItem,
};

export const overview: Example = () => {
  const Story = () => {
    const doc = useDocument('Story');
    if (doc) {
      const path = useDocumentPath(doc.type, doc.title);
      return <DocumentItem link={path} doc={doc} />;
    }
    return null;
  };
  return (
    <MockContext storyId="id-of-story">
      <Story />
    </MockContext>
  );
};
