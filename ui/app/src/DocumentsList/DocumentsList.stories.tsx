import React from 'react';
import { defDocType, Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { useDocByType } from '@component-controls/store';
import { DocumentsList } from './DocumentsList';

export default {
  title: 'Application/DocumentsList',
  component: DocumentsList,
  decorators: mockDecorators,
  category: 'Documents',
} as Document;

export const overview: Example = () => {
  const pages = useDocByType(defDocType);
  return <DocumentsList pages={pages} type="story" />;
};
