import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ConrolsContextProvider } from '../context';
import { ColorEditor } from './ColorEditor';

export default {
  title: 'Editors/ColorEditor',
  component: ColorEditor,
};

export const overview = () => {
  const [state, setState] = React.useState('#dedede');
  return (
    <ConrolsContextProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.COLOR, value: state },
      }}
    >
      <ColorEditor name="prop" />
    </ConrolsContextProvider>
  );
};

export const rgb = () => {
  const [state, setState] = React.useState('rgb(192,0,0)');
  return (
    <ConrolsContextProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.COLOR, value: state },
      }}
    >
      <ColorEditor name="prop" />
    </ConrolsContextProvider>
  );
};
