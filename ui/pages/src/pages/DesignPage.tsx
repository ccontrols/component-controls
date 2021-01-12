import React, { FC, Fragment, useMemo } from 'react';
import { Playground, Story, Description } from '@component-controls/blocks';
import { TabConfiguration } from '@component-controls/core';
import { ImagesBlock } from '@component-controls/addon-images';
import { NotesBlock } from '@component-controls/addon-notes';
import { FigmaEmbedBlock } from '@component-controls/figma-embed';
import { useCurrentStory } from '@component-controls/store';

const DesignPage: FC = () => {
  const story = useCurrentStory();
  const { plugins = {} } = story || {};
  const blocksMap: Record<string, JSX.Element> = useMemo(
    () => ({
      figma: <FigmaEmbedBlock key="figma" title="Figma files" />,
      notes: <NotesBlock key="notes" title="Design notes" />,
      images: <ImagesBlock key="images" title="Images" />,
    }),
    [],
  );
  const blocks = Object.keys(plugins).map(key => blocksMap[key]);
  return (
    <Fragment>
      <Description />
      <Playground title=".">
        <Story id="." />
      </Playground>
      {blocks}
    </Fragment>
  );
};

export default {
  title: 'Design',
  component: DesignPage,
  isVisible: ({ story }) =>
    story.plugins &&
    (Array.isArray(story.plugins?.figma) ||
      story.plugins?.figma?.items ||
      story.plugins.notes ||
      story.plugins.images),
} as TabConfiguration;
