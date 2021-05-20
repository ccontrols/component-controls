import React from 'react';
import { useStore } from '@component-controls/store';
import { Spinner } from './Spinner';

const doc = {
  title: 'Library/Components/Spinner',
  order: 1,
  component: Spinner,
};

export const overview = props => {
  const store = useStore();
  return <Spinner {...props}>{store.config.title}</Spinner>;
};

export default doc;
