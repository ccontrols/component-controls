import React, { FC, ReactNode } from 'react';
import { Box, BoxProps, Text } from 'theme-ui';

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
 * Displays a value with a small label
 */
export const Value: FC<ValueProps & BoxProps> = ({ label, value, ...rest }) => {
  return (
    <Box variant="value.container" {...rest}>
      <Text variant="value.label">{label}</Text>
      {!!value && <Text variant="value.value">{value}</Text>}
    </Box>
  );
};
