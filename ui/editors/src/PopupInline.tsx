import React, { FC } from 'react';
import { Popover, PopoverProps } from '@component-controls/components';

export const PopupInline: FC<PopoverProps & { inline?: boolean }> = ({
  inline,
  ...props
}) => {
  return inline && props.tooltip ? (
    <div>{props.tooltip({} as any)}</div>
  ) : (
    <Popover {...props} />
  );
};
