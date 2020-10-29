import React from 'react';
import { ControlTypes, Example } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { BooleanEditor } from './BooleanEditor';

export default {
  title: 'Editors/BooleanEditor',
  component: BooleanEditor,
};

export const overview: Example = () => {
  const [state, setState] = React.useState(false);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.BOOLEAN, value: state },
      }}
    >
      <BooleanEditor name="prop" />
    </ControlsStateProvider>
  );
};
