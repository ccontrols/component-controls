import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ConrolsContextProvider } from '../context';
import { OptionsEditor } from './OptionsEditor';

export default {
  title: 'Editors/OptionsEditor',
  component: OptionsEditor,
};

export const overview = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const objects = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const numeric = () => {
  const [state, setState] = React.useState(1);
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const multiSelectSimple = () => {
  const [state, setState] = React.useState(['one']);
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const multiSelectObjects = () => {
  const [state, setState] = React.useState(['one']);
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const multiSelectNumeric = () => {
  const [state, setState] = React.useState([1]);
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const simpleRadios = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const objectsRadios = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const numericRadios = () => {
  const [state, setState] = React.useState(1);
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const simpleRadiosInline = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const objectsRadiosInline = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const numericRadiosInline = () => {
  const [state, setState] = React.useState(1);
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const simpleCheck = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const objectsCheck = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const numericCheck = () => {
  const [state, setState] = React.useState(1);
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const simpleCheckInline = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const objectsCheckInline = () => {
  const [state, setState] = React.useState('one');
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};

export const numericCheckInline = () => {
  const [state, setState] = React.useState(1);
  return (
    <ConrolsContextProvider
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
    </ConrolsContextProvider>
  );
};
