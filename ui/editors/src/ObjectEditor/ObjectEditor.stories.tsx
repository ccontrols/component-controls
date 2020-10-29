import React from 'react';
import {
  ControlTypes,
  ComponentControls,
  Example,
} from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { ObjectEditor } from './ObjectEditor';

export default {
  title: 'Editors/ObjectEditor',
  component: ObjectEditor,
};

export const overview: Example = () => {
  const [state, setState] = React.useState<ComponentControls>({
    border: { type: ControlTypes.TEXT, value: '2px dashed silver' },
    borderRadius: { type: ControlTypes.NUMBER, value: 10 },
    padding: { type: ControlTypes.NUMBER, value: 10 },
  });

  return (
    <ControlsStateProvider
      onChange={(_name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.OBJECT, value: state },
      }}
    >
      <ObjectEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const editLabel: Example = () => {
  const [state, setState] = React.useState<ComponentControls>({
    border: { type: ControlTypes.TEXT, value: '2px dashed silver' },
    borderRadius: { type: ControlTypes.NUMBER, value: 10 },
    padding: { type: ControlTypes.NUMBER, value: 10 },
  });

  return (
    <ControlsStateProvider
      onChange={(_name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.OBJECT, value: state },
      }}
    >
      <ObjectEditor name="prop" editLabel="Click to edit" />
    </ControlsStateProvider>
  );
};
