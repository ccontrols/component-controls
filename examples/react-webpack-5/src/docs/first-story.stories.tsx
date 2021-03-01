import React from 'react';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'ES Story',
  component: Button,
}

export const overview = (props: ButtonProps) => <Button {...props}>click me</Button>;

