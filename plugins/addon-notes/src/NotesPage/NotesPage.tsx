import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Description } from '@component-controls/blocks';
import { NotesBlock, NotesBlockProps } from '../NotesBlock';

const NotesPage: FC<NotesBlockProps> = props => (
  <>
    <Description />
    <NotesBlock {...props} />
  </>
);

export default {
  title: 'Notes',
  component: NotesPage,
  isVisible: ({ story }) => story.plugins?.notes,
} as TabConfiguration;
