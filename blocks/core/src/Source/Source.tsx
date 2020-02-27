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

import { BlockContainer } from '../BlockContainer';
import { ActionBar, ActionItem } from '../ActionBar';

export interface SourceProps {
  /**
   * source code to display
   */
  source: string;
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
  children?: (props: any) => React.ReactNode;
  /**
   * additional actions provided to the component
   */
  actions?: ActionItem[];
  /**
   * used to specify a "dark" color theme - applcable only if no custom theme prop is provided
   */
  dark?: boolean;
}

/**
 * Source component used to display source code
 *
 */
export const Source: FC<SourceProps> = ({
  source = '',
  language = 'jsx',
  theme,
  children,
  actions,
  dark = false,
}) => {
  const [copied, setCopied] = React.useState(false);

  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCopied(true);
    copy(source);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const actionsItems = actions || [];

  actionsItems.push({ title: copied ? 'copied' : 'copy', onClick: onCopy });

  const renderProps =
    typeof children === 'function'
      ? children
      : ({ className, style, tokens, getLineProps, getTokenProps }: any) => (
          <Styled.pre
            className={`${className}`}
            style={{ ...style, padding: '10px 10px 25px 10px', margin: 0 }}
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
  const props = { ...defaultProps };
  if (theme) {
    props.theme = theme;
  } else {
    props.theme = dark ? duotoneDark : duotoneLight;
  }

  return (
    <BlockContainer>
      <Highlight {...props} code={source} language={language}>
        {renderProps}
      </Highlight>
      <ActionBar actionItems={actionsItems} />
    </BlockContainer>
  );
};
