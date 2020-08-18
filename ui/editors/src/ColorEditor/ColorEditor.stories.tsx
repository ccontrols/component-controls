import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { ColorEditor } from './ColorEditor';

export default {
  title: 'Editors/ColorEditor',
  component: ColorEditor,
};

export const overview = () => {
  const [state, setState] = React.useState('#dedede');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.COLOR, value: state },
      }}
    >
      <ColorEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const rgb = () => {
  const [state, setState] = React.useState('rgb(192,0,0)');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.COLOR, value: state },
      }}
    >
      <ColorEditor name="prop" />
    </ControlsStateProvider>
  );
};
