/** @jsx jsx */
import { FC } from 'react';
import { jsx, BoxProps, Box, Link } from 'theme-ui';
import { Component } from '@component-controls/core';
import { Popover, Value } from '@component-controls/components';
import { BaseComponentCommits } from '../ComponentCommits';

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
        <Popover
          trigger="click"
          placement="auto"
          tooltip={() => (
            <Box sx={{ padding: 1 }}>
              <BaseComponentCommits
                component={component}
                pagination={{ pageSize: 3 }}
              />
            </Box>
          )}
        >
          <Link
            sx={{
              ':hover': { cursor: 'pointer' },
            }}
          >
            <Value
              label={
                <Box
                  sx={{
                    fontSize: 0,
                    mr: 1,
                    lineHeight: 'heading',
                    textDecoration: 'underline',
                  }}
                >
                  commits:
                </Box>
              }
              value={component.fileInfo?.commits?.length}
            />
          </Link>
        </Popover>
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
