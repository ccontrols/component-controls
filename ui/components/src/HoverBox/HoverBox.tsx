/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';

export interface HoverBoxProps {
  /**
   * laabel to be displayed when the box is hovered
   */
  label: string;
}

/**
 * Box component that will fade/outline a label at the bottom
 *
 */
export const HoverBox: FC<HoverBoxProps> = ({ label, children }) => {
  return (
    <Box variant="hoverbox.container">
      <Box variant="hoverbox.inner">{children}</Box>
      <Text variant="hoverbox.text">{label}</Text>
    </Box>
  );
};
