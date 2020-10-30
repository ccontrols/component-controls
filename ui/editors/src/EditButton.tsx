/** @jsx jsx */
import { FC } from 'react';
import { jsx, Button, ButtonProps } from 'theme-ui';

export const EditButton: FC<ButtonProps> = props => (
  <Button sx={{ py: 1 }} {...props} />
);
