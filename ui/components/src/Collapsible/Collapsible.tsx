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
 * Animated expand/collapse container component, using [react-animate-height](https://github.com/Stanko/react-animate-height).
 *
 */
export const Collapsible: FC<CollapsibleProps> = ({
  children,
  isOpen,
  ...rest
}) => {
  return (
    <AnimateHeight height={isOpen ? 'auto' : 0} {...rest}>
      {isOpen ? children : ''}
    </AnimateHeight>
  );
};
