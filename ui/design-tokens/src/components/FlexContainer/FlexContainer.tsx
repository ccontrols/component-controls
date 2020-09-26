/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, Box, BoxProps } from 'theme-ui';
import { ContainerProps } from '../../types';

export type FlexContainerProps = {
  direction: 'row' | 'column';
} & ContainerProps &
  Omit<BoxProps, 'children'>;

/**
 *
 * a css flex container for design token collections.
 * can be horizontal or vertical
 */
export const FlexContainer: FC<FlexContainerProps> = ({
  children,
  palette,
  direction,
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      sx={{
        display: 'flex',
        flexDirection: direction,
      }}
      {...rest}
    >
      {Object.keys(palette).map((color, index) =>
        children({ name: color, value: palette[color], hover, index }),
      )}
    </Box>
  );
};
