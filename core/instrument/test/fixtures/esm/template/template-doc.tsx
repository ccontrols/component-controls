import React from 'react';
import { Document } from '@component-controls/core';
import { ButtonProps, Button } from '../../components/button-props';

export default {
  title: 'Introduction/Template doc',
  component: Button,
  smartControls: false,
  // eslint-disable-next-line react/display-name
  template: props => <Button {...props} />,
} as Document<ButtonProps>;

export const John = {
  controls: {
    children: 'john',
    type: 'reset',
  },
};
