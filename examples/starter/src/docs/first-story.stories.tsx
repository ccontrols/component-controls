import React from 'react';
import { useStore } from '@component-controls/store';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Library/Components/ESM',
  order: 1,
};

export const overview = (props: ButtonProps) => {
  const store = useStore();
  return <Button {...props}>{store.config.siteTitle}</Button>;
};

overview.component = Button;
