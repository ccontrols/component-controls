/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx, Heading } from 'theme-ui';
import { FC, Fragment } from 'react';
import { Styled, Box, useColorMode } from 'theme-ui';
import Highlight, {
  defaultProps,
  PrismTheme,
  Language,
} from 'prism-react-renderer';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

type RenderProps = Parameters<Highlight['props']['children']>[0];

// from lekoarts gatsby themes
// https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-minimal-blog/src/components/code.tsx#L34
const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false;
  }
  const lineNumbers = RE.exec(meta)![1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)));
  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    );
    return inRange;
  };
};

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
   * optional title to display for the code block. Usually used from MDX
   */
  title?: string;

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

  /**
   * code configuration string passed from MDX
   */
  metastring?: string;
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
  title,
  metastring = ``,
  as = 'span',
}) => {
  const [colorMode] = useColorMode();
  const isDark = dark === true || colorMode === `dark`;
  const theme = customTheme ? customTheme : isDark ? duotoneDark : duotoneLight;
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const renderProps =
    typeof renderFn === 'function'
      ? (props: RenderProps) => renderFn(props, { theme })
      : ({ className, style, tokens, getLineProps, getTokenProps }: any) => (
          <Fragment>
            {title && (
              <Heading as="h2" variant="syntaxhighlight.title">
                {title}
              </Heading>
            )}
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
              {tokens.map((line: string[], i: number) => {
                const highlight = shouldHighlightLine(i);
                return (
                  <Box
                    as={as}
                    variant={`syntaxhighlight.${
                      highlight ? 'highlight' : 'normal'
                    }`}
                    {...getLineProps({ line, key: i })}
                  >
                    {line.map((token, key) => (
                      <span
                        {...getTokenProps({ token, key })}
                        sx={{ display: 'inline-block' }}
                      />
                    ))}
                  </Box>
                );
              })}
            </Styled.pre>
          </Fragment>
        );
  const props = { ...defaultProps, theme };

  return (
    <Highlight {...props} code={children as string} language={language}>
      {renderProps}
    </Highlight>
  );
};
