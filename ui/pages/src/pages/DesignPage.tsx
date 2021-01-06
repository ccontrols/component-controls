import React, { FC, Fragment } from 'react';
import { Playground, Story, Description } from '@component-controls/blocks';
import { TabConfiguration } from '@component-controls/core';
import { NotesBlock } from '@component-controls/addon-notes';
import { FigmaEmbedBlock } from '@component-controls/figma-embed';

const DesignPage: FC = () => {
  return (
    <Fragment>
      <Description />
      <Playground title=".">
        <Story id="." />
      </Playground>
      <NotesBlock title="Design notes" />
      <FigmaEmbedBlock title="Figma files" />
    </Fragment>
  );
};

export default {
  title: 'Design',
  component: DesignPage,
  isVisible: ({ story }) =>
    story.plugins && (story.plugins.figma || story.plugins.notes),
} as TabConfiguration;
