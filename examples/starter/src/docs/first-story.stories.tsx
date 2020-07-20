import React from 'react';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Library/Components/Button',
};

export const overview = (props: ButtonProps) => (
  <Button {...props}>click me</Button>
);

overview.component = Button;
