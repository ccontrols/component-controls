/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, Box } from 'theme-ui';
import copy from 'copy-to-clipboard';
import { Popover } from '@component-controls/components';
import { CheckIcon } from '@primer/octicons-react';

export interface CopyContainerProps {
  name?: string;
  value: string;
}

export const CopyContainer: FC<CopyContainerProps> = ({
  name,
  value,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      sx={{
        cursor: 'pointer',
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
