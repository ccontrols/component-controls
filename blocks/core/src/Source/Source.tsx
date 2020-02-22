/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import React, { FC, MouseEvent } from 'react';
import { StoryArguments } from '@component-controls/specification';
import { LoadedComponentControls } from '@component-controls/core';

import { Options } from 'prettier';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babylon';
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer';
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
import { Styled } from 'theme-ui';
import copy from 'copy-to-clipboard';
import { transparentize } from 'polished';
import { ActionBar } from '../ActionBar';
import { BlockContainer } from '../BlockContainer';
import { getArgumentNames, mergeControlValues } from './argument-utils';

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
  children?: string;
  language?: Language;
  /**
   * prism theme passed from parent
   * if the theme is selected in the parent, the Source
   * componnet will not have a thmme selection option
   */
  theme?: ThemeType;
  /**
   * options for the prettier integration
   * if set to false, will utrn prettier off
   */
  prettier?: null | Options;
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
}

export const Source: FC<SourceProps> = ({
  children = '',
  language = 'jsx',
  theme: parentTheme,
  prettier: prettierOptions,
  args,
  controls,
}) => {
  const [themeName, setThemeName] = React.useState<ThemeType>(
    parentTheme || 'nightowl-light',
  );

  const [showMerged, setShowMerged] = React.useState<boolean>(
    !!controls && !!args,
  );
  const parameters: string[] | undefined = args
    ? getArgumentNames(args)
    : undefined;
  let prismTheme = themes[themeName] || defaultProps.theme;
  const [copied, setCopied] = React.useState(false);

  const onRotateTheme = () => {
    const themeKeys = Object.keys(themes);
    const themeIdx = themeKeys.indexOf(themeName);
    const newIdx = themeIdx >= themeKeys.length - 1 ? 0 : themeIdx + 1;
    setThemeName(themeKeys[newIdx] as ThemeType);
  };

  const onMergeValues = () => setShowMerged(!showMerged);
  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCopied(true);
    copy(children);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const actions = [];
  if (parentTheme === undefined) {
    actions.push({ title: themeName, onClick: onRotateTheme });
  }
  if (controls && args) {
    actions.push({ title: 'values', onClick: onMergeValues });
  }

  actions.push({ title: copied ? 'Copied' : 'Copy', onClick: onCopy });
  let colorIdx = 0;
  const colorRoll = parameters
    ? parameters.map(() => {
        const style = prismTheme.styles[colorIdx];
        const color: string =
          style.style.color || prismTheme.plain.color || '#fff';
        colorIdx = colorIdx < prismTheme.styles.length - 1 ? colorIdx + 1 : 0;
        return color;
      })
    : [];
  let code = typeof children === 'string' ? children : '';
  if (showMerged && args && controls) {
    code = mergeControlValues(code, args, controls);
  }
  const source =
    prettierOptions !== null
      ? prettier.format(code, {
          parser: 'babel',
          plugins: [parserBabel],
          ...prettierOptions,
        })
      : code;
  return (
    <BlockContainer>
      <Highlight
        {...defaultProps}
        theme={prismTheme}
        code={source}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Styled.pre
            className={`${className}`}
            style={{ ...style, padding: '10px 10px 25px 10px', margin: 0 }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => {
                  const paramIdx = parameters
                    ? parameters.indexOf(token.content.trim())
                    : -1;
                  const isParameterDefiinition =
                    paramIdx > -1 && token.types.indexOf('parameter') > -1;
                  const isParameterUsage =
                    paramIdx > -1 &&
                    ((token.types.indexOf('attr-value') > -1 &&
                      token.types.indexOf('spread') > -1) ||
                      (token.types.indexOf('tag') > -1 &&
                        token.types.indexOf('script') > -1));
                  const isParam = isParameterDefiinition || isParameterUsage;
                  if (isParam) {
                    const splitToken = getTokenProps({
                      token,
                      key,
                    }).children.split(/(\s+)/);
                    console.log(splitToken);
                    return splitToken.map(s =>
                      s.trim().length ? (
                        <span
                          {...getTokenProps({ token, key })}
                          sx={{
                            display: 'inline-block',
                            backgroundColor: transparentize(
                              0.8,
                              colorRoll[paramIdx],
                            ),
                            paddingLeft: 1,
                            paddingRight: 1,
                            border: `1px solid ${colorRoll[paramIdx]}`,
                          }}
                        >
                          {s}
                        </span>
                      ) : (
                        s
                      ),
                    );
                  }
                  return (
                    <span
                      {...getTokenProps({ token, key })}
                      sx={{
                        display: 'inline-block',
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </Styled.pre>
        )}
      </Highlight>
      <ActionBar actionItems={actions} />
    </BlockContainer>
  );
};
