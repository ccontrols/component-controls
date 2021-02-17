/** @jsx jsx */
import { FC } from 'react';
import { jsx, BoxProps } from 'theme-ui';
import { Component } from '@component-controls/core';
import { Value } from '@component-controls/components';

export const ComponentStats: FC<{ component?: Component } & BoxProps> = ({
  component,
  ...rest
}) => {
  if (!component) {
    return null;
  }

  const stats = component.fileInfo?.sloc;
  return stats ? (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        my: 1,
      }}
      {...rest}
    >
      {!!component.fileInfo?.commits?.length && (
        <Value label="commits:" value={component.fileInfo?.commits?.length} />
      )}
      <Value sx={{ mx: 1 }} label="source lines:" value={stats.source} />
      <Value
        label="comments %:"
        value={
          stats.source ? Math.round((100 * stats.comment) / stats.source) : 0
        }
      />
      {!!stats.todo && <Value label="todo lines:" value={stats.todo} />}
    </div>
  ) : null;
};
