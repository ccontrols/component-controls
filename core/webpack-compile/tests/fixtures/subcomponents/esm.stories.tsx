import React from 'react';
import { Button } from '../../../../../examples/stories/src/components/Button';
import { Button as Spinner } from '../../../../../examples/stories/src/components/PropTypesButton';

export default {
  title: 'Library/Components/Button',
};

export const overview = () => <Button>click me</Button>;

overview.story = {
  component: Button,
  subcomponents: { 'Custom tab': Spinner },
};
