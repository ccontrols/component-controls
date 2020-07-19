import React from 'react';
import { Button } from '../components/Button';
import { Spinner } from '../components/Spinner';

export default {
  title: 'Library/Components/Button',
};

export const overview = () => <Button>click me</Button>;

overview.component = Button;
overview.subcomponents = { 'Custom tab': Spinner };
