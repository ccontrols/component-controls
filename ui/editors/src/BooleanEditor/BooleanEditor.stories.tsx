import React, { useState } from 'react';
import { ControlTypes, Document, Example } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { BooleanEditor } from './BooleanEditor';

export default {
  title: 'Editors/BooleanEditor',
  component: BooleanEditor,
} as Document;

export const overview: Example = () => {
  const [state, setState] = useState(false);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.BOOLEAN, value: state },
      }}
    >
      <BooleanEditor name="prop" aria-label="click to select" />
    </ControlsStateProvider>
  );
};
