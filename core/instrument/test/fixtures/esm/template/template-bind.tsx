import React from 'react';
import { Example, Document } from '@component-controls/core';
import { ButtonProps, Button } from '../../components/button-props';

export default {
  title: 'Components/Button',
  component: Button,
} as Document;

const Template: Example<ButtonProps> = props => (
  <Button {...props}>Button</Button>
);

export const John = Template.bind();
John.controls = {
  name: 'john',
};

export const Mary = Template.bind();
Mary.controls = {
  name: 'mary',
};
