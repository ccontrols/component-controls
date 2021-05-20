import React from 'react';
import { Document, Example } from '@component-controls/core';
import { useStore } from '@component-controls/store';
import { Button, ButtonProps } from './Button';

const doc: Document =  {
  title: 'Library/Components/Button',
  order: 1,
  component: Button
};

export const overview: Example<ButtonProps> = (props) => {
  const store = useStore();
  return <Button {...props}>{store.config.title}</Button>;
};

export default doc;