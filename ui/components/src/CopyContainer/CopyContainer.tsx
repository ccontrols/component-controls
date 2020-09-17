/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, Box, SxStyleProp } from 'theme-ui';
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
  /**
   * stying props
   */
  sxStyle?: SxStyleProp;
}

/**
 * conainer to enclose items that will provide copy fnctionality on click
 *
 */
export const CopyContainer: FC<CopyContainerProps> = ({
  sxStyle,
  name,
  value,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      sx={{
        cursor: 'pointer',
        position: 'relative',
        ...sxStyle,
      }}
      trigger="click"
      followCursor={true}
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
