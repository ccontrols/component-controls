/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text, Progress } from 'theme-ui';

export interface ProgressIndicatorProps {
  value: number;
  max: number;
  color?: string;
}
/**
 * Progress indicator with a label
 *
 */
export const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  value,
  max,
  color,
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Progress value={value} max={max} color={color} />
    <Text sx={{ fontSize: 0 }}>{value}</Text>
  </Box>
);
