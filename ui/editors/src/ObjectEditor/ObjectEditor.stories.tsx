import React from 'react';
import {
  ControlTypes,
  ComponentControls,
} from '@component-controls/specification';
import { ConrolsContextProvider } from '../context';
import { ObjectEditor } from './ObjectEditor';

export default {
  title: 'Editors/ObjectEditor',
  component: ObjectEditor,
};

export const overview = () => {
  const [state, setState] = React.useState<ComponentControls>({
    border: { type: ControlTypes.TEXT, value: '2px dashed silver' },
    borderRadius: { type: ControlTypes.NUMBER, value: 10 },
    padding: { type: ControlTypes.NUMBER, value: 10 },
  });

  return (
    <ConrolsContextProvider
      onChange={(_name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.OBJECT, value: state },
      }}
    >
      <ObjectEditor name="prop" />
    </ConrolsContextProvider>
  );
};
