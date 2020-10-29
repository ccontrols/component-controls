import React from 'react';
import { ControlTypes, Example } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { OptionsEditor } from './OptionsEditor';

export default {
  title: 'Editors/OptionsEditor',
  component: OptionsEditor,
};

export const overview: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: ['one', 'two', 'three'],
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const objects: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: { One: 'one', Two: 'two', Three: 'three' },
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const numeric: Example = () => {
  const [state, setState] = React.useState(1);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' },
          ],
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const multiSelectSimple: Example = () => {
  const [state, setState] = React.useState(['one']);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: ['one', 'two', 'three'],
          display: 'multi-select',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const multiSelectObjects: Example = () => {
  const [state, setState] = React.useState(['one']);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: { One: 'one', Two: 'two', Three: 'three' },
          display: 'multi-select',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const multiSelectNumeric: Example = () => {
  const [state, setState] = React.useState([1]);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' },
          ],
          display: 'multi-select',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const simpleRadios: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: ['one', 'two', 'three'],
          display: 'radio',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const objectsRadios: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: { One: 'one', Two: 'two', Three: 'three' },
          display: 'radio',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const numericRadios: Example = () => {
  const [state, setState] = React.useState(1);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' },
          ],
          display: 'radio',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const simpleRadiosInline: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: ['one', 'two', 'three'],
          display: 'inline-radio',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const objectsRadiosInline: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: { One: 'one', Two: 'two', Three: 'three' },
          display: 'inline-radio',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const numericRadiosInline: Example = () => {
  const [state, setState] = React.useState(1);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' },
          ],
          display: 'inline-radio',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const simpleCheck: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: ['one', 'two', 'three'],
          display: 'check',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const objectsCheck: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: { One: 'one', Two: 'two', Three: 'three' },
          display: 'check',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const numericCheck: Example = () => {
  const [state, setState] = React.useState(1);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' },
          ],
          display: 'check',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const simpleCheckInline: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: ['one', 'two', 'three'],
          display: 'inline-check',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const objectsCheckInline: Example = () => {
  const [state, setState] = React.useState('one');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: { One: 'one', Two: 'two', Three: 'three' },
          display: 'inline-check',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const numericCheckInline: Example = () => {
  const [state, setState] = React.useState(1);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.OPTIONS,
          value: state,
          options: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' },
          ],
          display: 'inline-check',
        },
      }}
    >
      <OptionsEditor name="prop" />
    </ControlsStateProvider>
  );
};
