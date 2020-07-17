import React, { FC, ReactNode } from 'react';
import { Box, Text } from 'theme-ui';

export interface ValueProps {
  /**
   * label - usually smaller and muted
   */
  label: ReactNode;
  /**
   * highlighted value
   */
  value: ReactNode;
}

/**
 *
 * Displays a label and value styled
 */
export const Value: FC<ValueProps> = ({ label, value }) => {
  return (
    <Box variant="value.container">
      <Text variant="value.label">{label}</Text>
      <Text variant="value.value">{value}</Text>
    </Box>
  );
};
