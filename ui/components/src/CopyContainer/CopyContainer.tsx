/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, Box } from 'theme-ui';
import copy from 'copy-to-clipboard';
import { CheckIcon } from '@primer/octicons-react';
import { Popover } from '../Popover';

export interface CopyContainerProps {
  /** name of the property */
  name?: string;
  /**
   * value to copy
   */
  value: string;
}

/**
 * Container component to enclose items that will provide copy functionality on click.
 *
 */
export const CopyContainer: FC<CopyContainerProps> = ({
  name,
  value,
  children,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      sx={{
        cursor: 'pointer',
        position: 'relative',
      }}
      {...rest}
      trigger="click"
      tooltipShown={isOpen}
      arrowVisible={false}
      onVisibilityChange={isVisible => {
        setIsOpen(isVisible);
        if (isVisible) {
          copy(value);
          window.setTimeout(() => {
            if (isVisible) {
              setIsOpen(false);
            }
          }, 1500);
        }
      }}
      tooltip={() => (
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <CheckIcon size={16} sx={{ color: 'green' }} />
          <Box sx={{ ml: 2, fontSize: 2 }}>{`${
            name && name !== value ? `${name} ` : ''
          }copied ${value}`}</Box>
        </Box>
      )}
    >
      {children}
    </Popover>
  );
};
