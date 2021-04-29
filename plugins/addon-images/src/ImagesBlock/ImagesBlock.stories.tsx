import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ImagesBlock } from '../index';
import img from './example_image.jpg';

export default {
  title: 'Plugins/ImagesBlock',
  component: ImagesBlock,
  category: 'Design',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ImagesBlock id="." />
    </BlockContextProvider>
  );
};

export const customItems: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ImagesBlock
        id="."
        items={[
          {
            title: 'Image',
            width: 200,
            'aria-label': 'design image',
            src: img,
          },
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
            images: { collapsible: false, title: 'Custom title here' },
          },
        },
      }}
    >
      <ImagesBlock id="." />
    </BlockContextProvider>
  );
};
