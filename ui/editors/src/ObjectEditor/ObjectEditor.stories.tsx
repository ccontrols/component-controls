import React, { useState } from 'react';
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
  const [state, setState] = useState<ComponentControls>({
    border: { type: ControlTypes.TEXT, value: '2px dashed silver' },
    borderRadius: { type: ControlTypes.NUMBER, value: 10 },
    padding: { type: ControlTypes.NUMBER, value: 10 },
  });

  return (
    <ControlsStateProvider
      onChange={(_name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.OBJECT, value: state as any },
      }}
    >
      <ObjectEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const editLabel: Example = () => {
  const [state, setState] = useState<ComponentControls>({
    border: { type: ControlTypes.TEXT, value: '2px dashed silver' },
    borderRadius: { type: ControlTypes.NUMBER, value: 10 },
    padding: { type: ControlTypes.NUMBER, value: 10 },
  });

  return (
    <ControlsStateProvider
      onChange={(_name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.OBJECT, value: state as any },
      }}
    >
      <ObjectEditor name="prop" editLabel="Click to edit" />
    </ControlsStateProvider>
  );
};

export const inline: Example = () => {
  const [state, setState] = useState<ComponentControls>({
    border: { type: ControlTypes.TEXT, value: '2px dashed silver' },
    borderRadius: { type: ControlTypes.NUMBER, value: 10 },
    padding: { type: ControlTypes.NUMBER, value: 10 },
  });

  return (
    <ControlsStateProvider
      onChange={(_name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OBJECT,
          value: state as any,
          inline: true,
        },
      }}
    >
      <ObjectEditor name="prop" />
    </ControlsStateProvider>
  );
};
