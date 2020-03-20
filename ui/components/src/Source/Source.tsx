/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import React, { FC, MouseEvent } from 'react';
import copy from 'copy-to-clipboard';
import {
  SyntaxHighlighter,
  SyntaxHighlighterProps,
} from '../SyntaxHighlighter';
import { ActionContainer, ActionContainerProps } from '../ActionContainer';

export type SourceProps = Omit<ActionContainerProps, 'paddingTop'> &
  SyntaxHighlighterProps;
/**
 * Syntax highliting source code component. Uses [prism](https://prismjs.com) for the actual source display.
 *
 */
export const Source: FC<SourceProps> = ({
  children = '',
  actions,
  as = 'div',
  ...props
}) => {
  const [copied, setCopied] = React.useState(false);
  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCopied(true);
    copy(children as string);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const actionsItems = [
    { title: copied ? 'copied' : 'copy', onClick: onCopy },
    ...(Array.isArray(actions) ? [...actions] : []),
  ];

  return (
    <ActionContainer actions={actionsItems} paddingTop="20px">
      <SyntaxHighlighter
        as={as}
        {...props}
        style={{
          padding: '0 10px 10px',
          display: 'block',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </ActionContainer>
  );
};
