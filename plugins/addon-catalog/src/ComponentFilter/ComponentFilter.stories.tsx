import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ComponentCatalogContextProvider } from '../context';
import { ComponentFilter } from '.';

export default {
  title: 'Plugins/AddonCatalog/ComponentFilter',
  component: ComponentFilter,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <ComponentCatalogContextProvider>
      <ComponentFilter />
    </ComponentCatalogContextProvider>
  );
};
