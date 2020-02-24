import React, { FC, MouseEvent } from 'react';
import { StoryArguments } from '@component-controls/specification';
import { LoadedComponentControls } from '@component-controls/core';
import { defaultProps, Language, PrismTheme } from 'prism-react-renderer';

import dracula from 'prism-react-renderer/themes/dracula';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import github from 'prism-react-renderer/themes/github';
import nightowl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import palenight from 'prism-react-renderer/themes/palenight';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import ultramin from 'prism-react-renderer/themes/ultramin';
import vsDark from 'prism-react-renderer/themes/vsDark';
import copy from 'copy-to-clipboard';
import { ActionBar } from '../ActionBar';
import { BlockContainer } from '../BlockContainer';
import { mergeControlValues } from './argument-utils';
import { TaggedSource } from './TaggedSource';
export type ThemeType =
  | 'nightowl-light'
  | 'nightowl'
  | 'github'
  | 'vs-dark'
  | 'oceanic-next'
  | 'palenight'
  | 'ultramin'
  | 'duotone-light'
  | 'duotone-dark'
  | 'dracula'
  | 'shades-of-purple';
export const themes: {
  [key in ThemeType]: PrismTheme;
} = {
  'nightowl-light': nightOwlLight,
  nightowl,
  github,
  'vs-dark': vsDark,
  'oceanic-next': oceanicNext,
  palenight,
  ultramin,
  'duotone-light': duotoneLight,
  'duotone-dark': duotoneDark,
  dracula,
  'shades-of-purple': shadesOfPurple,
};

export interface SourceProps {
  /**
   * source for the story
   */
  children?: string;
  /**
   * language to be used for syntax hilighting
   */
  language?: Language;
  /**
   * prism theme passed from parent
   * if the theme is selected in the parent, the Source
   * componnet will not have a thmme selection option
   */
  theme?: ThemeType;
  /**
   * a list of story arguments accepted by Source
   * this is used to syntax-highlight the arguments
   * and their usage
   */
  args?: StoryArguments;

  /**
   * any control values to render in place of props in the editor
   */
  controls?: LoadedComponentControls;

  /**
   * full file source code of the file where the story was declared
   */
  fileSource?: string;
}

type ViewStyle = 'plain' | 'tags' | 'values';

export const Source: FC<SourceProps> = ({
  children = '',
  language = 'jsx',
  theme: parentTheme,
  args,
  controls,
  fileSource,
}) => {
  const [themeName, setThemeName] = React.useState<ThemeType>(
    parentTheme || 'nightowl-light',
  );

  const [viewStyle, setViewStyle] = React.useState<ViewStyle>(
    !!controls && !!args ? 'values' : 'tags',
  );
  const [showFileSource, setShowFileSource] = React.useState<boolean>(false);

  let prismTheme = themes[themeName] || defaultProps.theme;
  const [copied, setCopied] = React.useState(false);

  const onRotateTheme = () => {
    const themeKeys = Object.keys(themes);
    const themeIdx = themeKeys.indexOf(themeName);
    const newIdx = themeIdx >= themeKeys.length - 1 ? 0 : themeIdx + 1;
    setThemeName(themeKeys[newIdx] as ThemeType);
  };

  const onMergeValues = () =>
    setViewStyle(
      viewStyle === 'plain'
        ? 'tags'
        : viewStyle === 'tags'
        ? 'values'
        : 'plain',
    );
  const onShowFileSource = () => setShowFileSource(!showFileSource);

  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCopied(true);
    copy(children);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const actions = [];
  if (fileSource) {
    actions.push({
      title: showFileSource ? 'story code' : 'file code',
      onClick: onShowFileSource,
    });
  }
  if (parentTheme === undefined) {
    actions.push({ title: themeName, onClick: onRotateTheme });
  }
  if (controls && args) {
    actions.push({ title: viewStyle, onClick: onMergeValues });
  }

  actions.push({ title: copied ? 'copied' : 'copy', onClick: onCopy });

  let source: string;
  if (!showFileSource) {
    let code = typeof children === 'string' ? children : '';
    if (viewStyle === 'values' && args && controls) {
      code = mergeControlValues(code, args, controls);
    }
    source = code;
  } else {
    source = fileSource || '';
  }
  return (
    <BlockContainer>
      <TaggedSource
        args={viewStyle === 'tags' && !showFileSource ? args : undefined}
        source={source}
        theme={prismTheme}
        language={language}
      />
      <ActionBar actionItems={actions} />
    </BlockContainer>
  );
};
