import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ConrolsContextProvider } from '../context';
import { BooleanEditor } from './BooleanEditor';

export default {
  title: 'Editors/BooleanEditor',
  component: BooleanEditor,
};

export const overview = () => {
  const [state, setState] = React.useState(false);
  return (
    <ConrolsContextProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.BOOLEAN, value: state },
      }}
    >
      <BooleanEditor name="prop" />
    </ConrolsContextProvider>
  );
};
