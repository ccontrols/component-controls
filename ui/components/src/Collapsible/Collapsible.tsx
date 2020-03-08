import React, { FC } from 'react';
import AnimateHeight, { AnimateHeightProps } from 'react-animate-height';

export type CollapsibleProps = AnimateHeightProps & {
  isOpen: boolean;
};
export const Collapsible: FC<CollapsibleProps> = ({
  children,
  isOpen,
  ...rest
}) => {
  return (
    <AnimateHeight {...rest} height={isOpen ? 'auto' : 0}>
      {children}
    </AnimateHeight>
  );
};
