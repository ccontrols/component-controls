/** @jsx jsx */
import { FC } from 'react';
import { jsx, BoxProps, Box } from 'theme-ui';
import { Component } from '@component-controls/core';
import { Value } from '@component-controls/components';

export const ComponentStats: FC<{
  component?: Component;
  variant?: 'responsive' | 'fixed';
} & BoxProps> = ({ component, variant = 'responsive', ...rest }) => {
  if (!component) {
    return null;
  }

  const stats = component.fileInfo?.sloc;
  return stats ? (
    <Box variant={`componentstats.${variant}`} {...rest}>
      <Value sx={{ mx: 1 }} label="source lines:" value={stats.source} />
      <Value
        label="comments %:"
        value={
          stats.source ? Math.round((100 * stats.comment) / stats.source) : 0
        }
      />
      {!!stats.todo && <Value label="todo lines:" value={stats.todo} />}
    </Box>
  ) : null;
};
