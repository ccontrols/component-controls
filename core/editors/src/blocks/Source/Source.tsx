/* eslint-disable react/jsx-key */
import React, { FC, MouseEvent } from 'react';
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import github from 'prism-react-renderer/themes/github';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import palenight from 'prism-react-renderer/themes/palenight';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import ultramin from 'prism-react-renderer/themes/ultramin';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { Styled } from 'theme-ui';
import copy from 'copy-to-clipboard';
import { ActionBar } from '../../components/ActionBar/ActionBar';
import { BlockContainer } from '../BlockContainer/BlockContainer';

const themes: {
  [key: string]: PrismTheme;
} = {
  nightOwlLight,
  nightOwl,
  github,
  vsDark,
  oceanicNext,
  palenight,
  ultramin,
  duotoneLight,
  duotoneDark,
  dracula,
  shadesOfPurple,
};
export interface SourceProps {
  children?: string;
  language?: Language;
}

export const Source: FC<SourceProps> = ({
  children = '',
  language = 'jsx',
}) => {
  const [themeName, setThemeName] = React.useState<string>('nightOwlLight');
  let prismTheme = themes[themeName] || defaultProps.theme;
  const [copied, setCopied] = React.useState(false);

  const onRotateTheme = () => {
    const themeKeys = Object.keys(themes);
    const themeIdx = themeKeys.indexOf(themeName);
    const newIdx = themeIdx >= themeKeys.length - 1 ? 0 : themeIdx + 1;
    setThemeName(themeKeys[newIdx]);
  };

  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCopied(true);
    copy(children);
    window.setTimeout(() => setCopied(false), 1500);
  };
  return (
    <BlockContainer>
      <Highlight
        {...defaultProps}
        theme={prismTheme}
        code={typeof children === 'string' ? children.trim() : ''}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Styled.pre
            className={`${className}`}
            style={{ ...style, padding: '10px 10px 25px 10px', margin: 0 }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token, key })}
                    sx={{ display: 'inline-block' }}
                  />
                ))}
              </div>
            ))}
          </Styled.pre>
        )}
      </Highlight>
      <ActionBar
        actionItems={[
          { title: themeName, onClick: onRotateTheme },
          { title: copied ? 'Copied' : 'Copy', onClick: onCopy },
        ]}
      />
    </BlockContainer>
  );
};
