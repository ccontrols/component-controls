/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { transparentize } from 'polished';

export interface TagProps {
  color: string;
}

export const Tag: FC<TagProps> = ({ children, color, ...rest }) => (
  <span
    {...rest}
    sx={{
      display: 'inline-block',
      //@ts-ignore
      backgroundColor: transparentize(0.8, color),
      paddingLeft: 1,
      paddingRight: 1,
      //@ts-ignore
      border: `1px solid ${color}`,
    }}
  >
    {children}
  </span>
);
