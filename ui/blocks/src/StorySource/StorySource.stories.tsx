import React from 'react';
import { ActionItem } from '@component-controls/components';
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
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/StorySource',
  component: StorySource,
};

export const overview = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <StorySource id="." />
  </MockContext>
);

export const theme = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <StorySource id="." theme={shadesOfPurple} />
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
export const themeSelector = () => {
  const [theme, setTheme] = React.useState('dracula');
  const themeAction: ActionItem = {
    title: theme,
    onClick: () => {
      const themeNames = Object.keys(themes);
      const selected = themeNames.indexOf(theme);
      const nextTheme = selected < themeNames.length - 1 ? selected + 1 : 0;
      setTheme(themeNames[nextTheme]);
    },
  };
  return (
    <MockContext storyId="blocks-core-story-plain--controls">
      <StorySource id="." actions={[themeAction]} theme={themes[theme]} />
    </MockContext>
  );
};

export const customTitle = () => (
  <MockContext storyId="id-of-story">
    <StorySource title="Story source" />
  </MockContext>
);

export const notCollapsible = () => (
  <MockContext storyId="id-of-story">
    <StorySource title="." collapsible={false} />
  </MockContext>
);

export const noMargin = () => (
  <MockContext storyId="id-of-story">
    <StorySource sx={{ mt: 0, mb: 0 }} />
  </MockContext>
);
