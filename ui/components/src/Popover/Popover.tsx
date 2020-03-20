import React, { FC } from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import { TooltipTriggerProps } from 'react-popper-tooltip/dist/types';
import { Box } from 'theme-ui';
import { Arrow, Wrapper } from './PopoverUtils';

export type PopoverProps = Omit<Partial<TooltipTriggerProps>, 'children'>;

/**
 * A Popover container that is triggered by a click, or hover
 * used to display enhanced information that could not fit into the main scren
 *
 */
export const Popover: FC<PopoverProps> = ({
  trigger,
  placement = 'bottom',
  modifiers,
  tooltip,
  children,
  tooltipShown,
  onVisibilityChange,
  ...props
}) => {
  const borderColor = 'lightgrey';
  return (
    <TooltipTrigger
      placement={placement}
      trigger={trigger}
      modifiers={modifiers}
      tooltipShown={tooltipShown}
      onVisibilityChange={onVisibilityChange}
      tooltip={tooltipProps => {
        const {
          getTooltipProps,
          getArrowProps,
          tooltipRef,
          arrowRef,
        } = tooltipProps;
        const { hidden, ...containerProps } = getTooltipProps();
        return (
          <Wrapper
            placement={placement}
            borderColor={borderColor}
            hidden={hidden}
            ref={tooltipRef as any}
            {...containerProps}
          >
            <Arrow
              placement={placement}
              borderColor={borderColor}
              ref={arrowRef as any}
              {...getArrowProps()}
            />
            {typeof tooltip === 'function' ? tooltip(tooltipProps) : tooltip}
          </Wrapper>
        );
      }}
    >
      {({ getTriggerProps, triggerRef }) => (
        <Box
          ref={triggerRef as any}
          {...getTriggerProps()}
          {...props}
          css={{ display: 'inline-block' }}
        >
          {children}
        </Box>
      )}
    </TooltipTrigger>
  );
};
