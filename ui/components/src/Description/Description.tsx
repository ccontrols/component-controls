/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { Markdown, MarkdownProps } from '../Markdown';
import { useTheme, ControlsTheme } from '../ThemeContext';

/**
 * Markdown content with custom components - for example `<p />` is with smaller margin than regular markdown content.
 */
export const Description: FC<MarkdownProps> = props => {
  const theme = useTheme() as ControlsTheme;
  return (
    <Markdown
      components={{
        p: props => <p sx={{ ...(theme.description?.p || {}) }} {...props} />,
      }}
      {...props}
    />
  );
};
