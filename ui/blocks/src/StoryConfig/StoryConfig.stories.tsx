import React, { useState } from 'react';
import { Document, Example } from '@component-controls/core';
import { ActionItem, ActionContainer } from '@component-controls/components';
import { PrismTheme } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import github from 'prism-react-renderer/themes/github';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import palenight from 'prism-react-renderer/themes/palenight';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { StoryConfig } from './StoryConfig';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/StoryConfig',
  component: StoryConfig,
} as Document;

export const overview: Example = () => <StoryConfig id="." />;
overview.decorators = makeDecorators();

export const theme: Example = () => (
  <StoryConfig id="." sourceProps={{ theme: shadesOfPurple }} />
);
theme.decorators = makeDecorators('blocks-core-story-plain--controls');

const themes: {
  [key: string]: PrismTheme;
} = {
  dracula,
  duotoneDark,
  duotoneLight,
  github,
  nightOwl,
  nightOwlLight,
  oceanicNext,
  palenight,
  shadesOfPurple,
};
export const themeSelector: Example = () => {
  const [theme, setTheme] = useState('dracula');
  const themeAction: ActionItem = {
    node: theme,
    onClick: () => {
      const themeNames = Object.keys(themes);
      const selected = themeNames.indexOf(theme);
      const nextTheme = selected < themeNames.length - 1 ? selected + 1 : 0;
      setTheme(themeNames[nextTheme]);
    },
  };
  return (
    <ActionContainer actions={[themeAction]}>
      <StoryConfig id="." sourceProps={{ theme: themes[theme] }} />
    </ActionContainer>
  );
};
themeSelector.decorators = makeDecorators('blocks-core-story-plain--controls');

export const customTitle: Example = () => (
  <StoryConfig title="Story configuration" />
);
customTitle.decorators = makeDecorators();

export const notCollapsible: Example = () => (
  <StoryConfig title="." collapsible={false} />
);
notCollapsible.decorators = makeDecorators();

export const noMargin: Example = () => <StoryConfig sx={{ mt: 0, mb: 0 }} />;
noMargin.decorators = makeDecorators();
