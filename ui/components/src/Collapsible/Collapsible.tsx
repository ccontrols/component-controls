import React, { FC } from 'react';
import AnimateHeight, { AnimateHeightProps } from 'react-animate-height';

export interface CollapsibleOwnProps {
  /**
   * controlled open state
   */
  isOpen: boolean;
}

export type CollapsibleProps = CollapsibleOwnProps & AnimateHeightProps;

/**
 * Animated expand/collapse container component
 *
 */
export const Collapsible: FC<CollapsibleProps> = ({
  children,
  isOpen,
  ...rest
}) => {
  return (
    <AnimateHeight {...rest} height={isOpen ? 'auto' : 0}>
      {isOpen ? children : ''}
    </AnimateHeight>
  );
};
