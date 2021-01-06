import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { FigmaEmbedBlock } from '../index';

export default {
  title: 'Plugins/FigmaEmbedBlock',
  component: FigmaEmbedBlock,
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <FigmaEmbedBlock id="." />
    </BlockContextProvider>
  );
};

export const customURLS: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <FigmaEmbedBlock
        id="."
        items={[
          {
            url:
              'https://www.figma.com/file/hS1sLjYq49vjnKXhwGgHwg/Navigation-UI-design-components-Community?node-id=1%3A2309',
          },
          {
            url:
              'https://www.figma.com/file/LtgbR2mbVPbQTNDfDQxbKL/Atanas-Stoyanov-s-Team-Colors?node-id=0%3A1',
          },
        ]}
      />
    </BlockContextProvider>
  );
};
export const noFullScreen: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <FigmaEmbedBlock id="." allowFullScreen={false} />
    </BlockContextProvider>
  );
};

export const customIFrameProps: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <FigmaEmbedBlock
        id="."
        items={[
          {
            url:
              'https://www.figma.com/file/vgf0guEmC5IKtjHJKkRVSr/Button?node-id=0%3A1',
            height: '300',
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
          components: { figma: { allowFullScreen: false } },
        },
      }}
    >
      <FigmaEmbedBlock id="." />
    </BlockContextProvider>
  );
};
