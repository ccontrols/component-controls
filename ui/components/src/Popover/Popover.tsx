/** @jsx jsx */
import { FC } from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import { TooltipTriggerProps } from 'react-popper-tooltip/dist/types';
import { jsx, Box, SxStyleProp } from 'theme-ui';
import { Arrow, Wrapper } from './PopoverUtils';

export interface PopoverOwnProps {
  /**
   * set to false to hide the arrow
   */
  arrowVisible?: boolean;
}

export type PopoverProps = PopoverOwnProps &
  Omit<Partial<TooltipTriggerProps>, 'children'>;

/**
 * A Popover container that is triggered by a click/hover event.
 * Used to display enhanced information that could not fit into the main scren.
 */
export const Popover: FC<PopoverProps> = ({
  arrowVisible = true,
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
            sx={{
              ...(containerProps.style as SxStyleProp),
              backgroundColor: 'background',
            }}
          >
            {arrowVisible && (
              <Arrow
                placement={placement}
                borderColor={borderColor}
                ref={arrowRef as any}
                sx={{
                  ...(getArrowProps().style as SxStyleProp),
                }}
              />
            )}
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
