/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { FC } from 'react';
import { Heading, HeadingProps } from 'theme-ui';

interface TitleOwnProps {
  /**
   * text to be displayed in the component.
   */
  children?: string;
  /**
   * theme-ui styling object
   */
  sxStyle?: SxStyleProp;
}

export type TitleProps = TitleOwnProps & Omit<HeadingProps, 'children'>;

export const Title: FC<TitleProps> = ({ children, sxStyle, ...rest }) => (
  <Heading
    as="h1"
    sx={{
      fontWeight: 800,
      paddingBottom: 4,
      ...sxStyle,
    }}
    {...rest}
  >
    {children}
  </Heading>
);
