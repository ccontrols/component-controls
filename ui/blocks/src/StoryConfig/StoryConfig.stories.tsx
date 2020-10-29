import React from 'react';
import { Example } from '@component-controls/core';
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
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/StoryConfig',
  component: StoryConfig,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <StoryConfig id="." />
  </MockContext>
);

export const theme: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <StoryConfig id="." sourceProps={{ theme: shadesOfPurple }} />
  </MockContext>
);

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
  const [theme, setTheme] = React.useState('dracula');
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
    <MockContext storyId="blocks-core-story-plain--controls">
      <ActionContainer actions={[themeAction]}>
        <StoryConfig id="." sourceProps={{ theme: themes[theme] }} />
      </ActionContainer>
    </MockContext>
  );
};

export const customTitle: Example = () => (
  <MockContext storyId="id-of-story">
    <StoryConfig title="Story configuration" />
  </MockContext>
);

export const notCollapsible: Example = () => (
  <MockContext>
    <StoryConfig title="." collapsible={false} />
  </MockContext>
);

export const noMargin: Example = () => (
  <MockContext storyId="id-of-story">
    <StoryConfig sx={{ mt: 0, mb: 0 }} />
  </MockContext>
);
