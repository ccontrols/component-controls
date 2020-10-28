import React from 'react';
import { Box, Button } from 'theme-ui';
import { Example, ControlTypes } from '@component-controls/core';
import { Collapsible, CollapsibleProps } from './Collapsible';

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
};

export const overview: Example = ({ easing }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'close' : 'open'}
      </Button>
      <Collapsible isOpen={isOpen} easing={easing}>
        content
      </Collapsible>
    </Box>
  );
};

overview.smartControls = {
  smart: false,
};
overview.controls = {
  easing: {
    type: ControlTypes.OPTIONS,
    options: ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'],
  },
};
