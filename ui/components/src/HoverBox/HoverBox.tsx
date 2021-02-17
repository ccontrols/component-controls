/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, BoxProps, Text } from 'theme-ui';

export type HoverBoxProps = {
  /**
   * laabel to be displayed when the box is hovered
   */
  label: string;
} & BoxProps;

/**
 * Container component that will fade/outline a label at the bottom
 *
 */
export const HoverBox: FC<HoverBoxProps> = ({ label, children, ...rest }) => {
  return (
    <Box variant="hoverbox.container" {...rest}>
      <Box variant="hoverbox.inner">{children}</Box>
      <Text variant="hoverbox.text" className="hoverbox-text">
        {label}
      </Text>
    </Box>
  );
};
