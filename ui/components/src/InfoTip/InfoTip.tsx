/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx, Button, Box } from 'theme-ui';
import { InfoIcon } from '@primer/octicons-react';
import { Popover, PopoverProps } from '../Popover';
import { Markdown } from '../Markdown';

export interface InfoTipProps {
  /**
   * size of the icon in pixels
   */
  size?: number;

  /**
   * custom icon
   */
  icon?: ReactNode;
}

/**
 *
 * Displays an information icon with markdown-enabled popup on hover
 */
export const InfoTip: FC<InfoTipProps & PopoverProps> = ({
  size = 18,
  icon,
  children,
  ...rest
}) => {
  const iconNode = icon || <InfoIcon size={size} />;
  return (
    <Popover
      trigger="hover"
      placement="bottom-start"
      tooltip={() => (
        <Box variant="infotip.container">
          {typeof children === 'string' ? (
            <Markdown>{children}</Markdown>
          ) : (
            children
          )}
        </Box>
      )}
      {...rest}
    >
      <Button
        aria-label={
          typeof children === 'string' ? children : 'click to display info'
        }
        variant="plain"
        sx={{ mx: 2 }}
      >
        {iconNode}
      </Button>
    </Popover>
  );
};
