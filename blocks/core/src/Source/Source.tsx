/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import React from 'react';
import { Styled } from 'theme-ui';
import Highlight, {
  defaultProps,
  PrismTheme,
  Language,
} from 'prism-react-renderer';

export interface SourceProps {
  source: string;
  theme?: PrismTheme;
  language?: Language;
  children?: (props: any) => React.ReactNode;
}
export const Source: React.FC<SourceProps> = ({
  source = '',
  language = 'jsx',
  theme,
  children,
}) => {
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
  if (theme) {
    defaultProps.theme = theme;
  }
  return (
    <Highlight {...defaultProps} code={source} language={language}>
      {renderProps}
    </Highlight>
  );
};
