import React from 'react';
import { Document, Example } from '@component-controls/core';
import { useDocument, useDocumentPath } from '@component-controls/store';
import { DocumentItem } from '.';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/DocumentItem',
  component: DocumentItem,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => {
  const Story = () => {
    const doc = useDocument('Story');
    if (doc) {
      const link = useDocumentPath(doc.type, doc.title);
      return <DocumentItem item={{ ...doc, link }} />;
    }
    return null;
  };
  return <Story />;
};
