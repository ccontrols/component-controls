/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Link } from 'theme-ui';
import { Component } from '@component-controls/core';
import { Popover, Value } from '@component-controls/components';
import { BaseComponentCommits } from '../ComponentCommits';

export interface CommmitsPopoverProps {
  /**
   * component that will be displayed the commits
   */
  component?: Component;
}

/**
 * link displaying the total commits on a component
 * with a popover on click that will display the list of commits
 */
export const CommitsPopover: FC<CommmitsPopoverProps> = ({ component }) => {
  return !!component?.fileInfo?.commits?.length ? (
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
  ) : null;
};
