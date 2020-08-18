/* eslint-disable react/display-name */
import React from 'react';
import { useDocument, useDocumentPath } from '@component-controls/store';
import { DocumentItem } from '.';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/DocumentItem',
  component: DocumentItem,
};

export const overview = () => {
  const Story = () => {
    const doc = useDocument('Story');
    const path = useDocumentPath(doc.type, doc.title);
    return doc ? <DocumentItem link={path} doc={doc} /> : null;
  };
  return (
    <MockContext storyId="id-of-story">
      <Story />
    </MockContext>
  );
};
