import React from 'react';
import { Box, Button } from 'theme-ui';
import { Collapsible } from './Collapsible';

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
};

export const simple = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'close' : 'open'}
      </Button>
      <Collapsible isOpen={isOpen}>content</Collapsible>
    </Box>
  );
};
