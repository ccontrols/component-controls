/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import React, { FC } from 'react';
import { Styled, Box } from 'theme-ui';
import Highlight, {
  defaultProps,
  PrismTheme,
  Language,
} from 'prism-react-renderer';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

type RenderProps = Parameters<Highlight['props']['children']>[0];

export interface SyntaxHighlighterProps {
  /**
   * source code to be displayed.
   */
  children?: string;
  /**
   * optional `PrismTheme` theme provided to the component. Themes can be imported from `prism-react-renderer/themes`.
   */
  theme?: PrismTheme;
  /**
   * source lnguage used, by default "jsx".
   */
  language?: Language;
  /**
   * custom function to render the source code.
   */
  renderFn?: (
    props: RenderProps,
    other: { theme: PrismTheme },
  ) => ReturnType<Highlight['props']['children']>;
  /**
   * used to specify a "dark" color theme - applcable only if no custom theme prop is provided.
   * if dark: true, duotoneDark theme is used.
   * if dark: false, duotoneLight theme is used.
   */
  dark?: boolean;

  /**
   * css styles for the container.
   */
  style?: React.CSSProperties;

  /**
   * syntax container as element. Can be used as `div` or `span`.
   */
  as?: React.ElementType;
}

/**
 * Syntax highlighter component. Uses [prism](https://prismjs.com) for the actual source display.
 */
export const SyntaxHighlighter: FC<SyntaxHighlighterProps> = ({
  children = '',
  language = 'jsx',
  theme: customTheme,
  renderFn,
  dark = false,
  style: propStyle,
  as = 'span',
}) => {
  const theme = customTheme ? customTheme : dark ? duotoneDark : duotoneLight;
  const renderProps =
    typeof renderFn === 'function'
      ? (props: RenderProps) => renderFn(props, { theme })
      : ({ className, style, tokens, getLineProps, getTokenProps }: any) => (
          <Styled.pre
            className={`${className}`}
            style={{
              ...style,
              padding: '3px 5px',
              display: 'inline',
              margin: 0,
              ...propStyle,
            }}
          >
            {tokens.map((line: string[], i: number) => (
              <Box as={as} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token, key })}
                    sx={{ display: 'inline-block' }}
                  />
                ))}
              </Box>
            ))}
          </Styled.pre>
        );
  const props = { ...defaultProps, theme };

  return (
    <Highlight {...props} code={children as string} language={language}>
      {renderProps}
    </Highlight>
  );
};
