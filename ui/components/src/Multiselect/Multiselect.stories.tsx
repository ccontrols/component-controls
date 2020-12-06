import React, { useState } from 'react';
import { Button } from 'theme-ui';
import { Document, Example } from '@component-controls/core';
import { Multiselect, MultiselectItem } from './Multiselect';

export default {
  title: 'Components/Multiselect',
  component: Multiselect,
} as Document;

export const overview: Example = () => {
  const [state, setState] = useState<MultiselectItem[]>([
    {
      label: 'option-1',
      selected: true,
    },
    {
      label: 'option-2',
      selected: false,
    },
    {
      label: 'option-3',
      selected: false,
    },
  ]);
  return (
    <Multiselect
      items={state}
      onChange={item => {
        setState(
          state.map(i => (i === item ? { ...i, selected: !i.selected } : i)),
        );
      }}
    >
      <Button>open</Button>
    </Multiselect>
  );
};
