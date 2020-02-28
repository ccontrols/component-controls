/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import React, { FC, MouseEvent } from 'react';
import { Styled } from 'theme-ui';
import copy from 'copy-to-clipboard';
import Highlight, {
  defaultProps,
  PrismTheme,
  Language,
} from 'prism-react-renderer';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

import { BlockContainer, BlockContainerProps } from '../BlockContainer';

type RenderProps = Parameters<Highlight['props']['children']>[0];

export interface SourceOwnProps {
  /**
   * source code to display
   */
  children?: string;
  /**
   * optional theme provided to the component
   */
  theme?: PrismTheme;
  /**
   * code lnguage used, by default "jsx"
   */
  language?: Language;
  /**
   * custom function to render the source code
   */
  renderFn?: (
    props: RenderProps,
    other: { theme: PrismTheme },
  ) => ReturnType<Highlight['props']['children']>;
  /**
   * used to specify a "dark" color theme - applcable only if no custom theme prop is provided
   */
  dark?: boolean;
}

export type SourceProps = SourceOwnProps & BlockContainerProps;
/**
 * Source component used to display source code
 *
 */
export const Source: FC<SourceProps> = ({
  children = '',
  language = 'jsx',
  theme: customTheme,
  renderFn,
  actions,
  dark = false,
}) => {
  const [copied, setCopied] = React.useState(false);

  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCopied(true);
    copy(children);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const actionsItems = Array.isArray(actions) ? [...actions] : [];

  actionsItems.push({ title: copied ? 'copied' : 'copy', onClick: onCopy });
  const theme = customTheme ? customTheme : dark ? duotoneDark : duotoneLight;
  const renderProps =
    typeof renderFn === 'function'
      ? (props: RenderProps) => renderFn(props, { theme })
      : ({ className, style, tokens, getLineProps, getTokenProps }: any) => (
          <Styled.pre
            className={`${className}`}
            style={{ ...style, padding: '10px 10px', margin: 0 }}
          >
            {tokens.map((line: string[], i: number) => (
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
        );
  const props = { ...defaultProps, theme };

  return (
    <BlockContainer actions={actionsItems}>
      <Highlight {...props} code={children} language={language}>
        {renderProps}
      </Highlight>
    </BlockContainer>
  );
};
