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
import { StorySource } from './StorySource';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/StorySource',
  component: StorySource,
} as Document;

export const overview: Example = () => <StorySource id="." />;
overview.decorators = makeDecorators('blocks-core-story-plain--controls');

export const theme: Example = () => (
  <StorySource id="." sourceProps={{ theme: shadesOfPurple }} />
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
      <StorySource id="." sourceProps={{ theme: themes[theme] }} />
    </ActionContainer>
  );
};
themeSelector.decorators = makeDecorators('blocks-core-story-plain--controls');

export const customTitle: Example = () => <StorySource title="Story source" />;
customTitle.decorators = makeDecorators();

export const notCollapsible: Example = () => (
  <StorySource title="." collapsible={false} />
);
notCollapsible.decorators = makeDecorators();

export const noMargin: Example = () => <StorySource sx={{ mt: 0, mb: 0 }} />;
noMargin.decorators = makeDecorators();
