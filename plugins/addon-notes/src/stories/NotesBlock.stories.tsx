import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { NotesBlock } from '../index';
import notes from './notes.md';

export default {
  title: 'Plugins/NotesBlock',
  component: NotesBlock,
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <NotesBlock id="." />
    </BlockContextProvider>
  );
};

export const customItems: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <NotesBlock
        id="."
        items={[
          `
# Introduction
some **markdown**
`,
        ]}
      />
    </BlockContextProvider>
  );
};

export const customConfigProps: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={{
        ...store,
        config: {
          ...store.config,
          components: {
            notes: { collapsable: false, title: 'Custom title here' },
          },
        },
      }}
    >
      <NotesBlock id="." />
    </BlockContextProvider>
  );
};

export const markdownFile: Example = () => {
  return <NotesBlock items={[notes]} />;
};
