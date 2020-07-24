import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { useControlSelector } from '../state';
import { OptionsEditor } from './OptionsEditor';

export default {
  title: 'Editors/OptionsEditor',
  component: OptionsEditor,
};

export const overview = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: ['one', 'two', 'three'],
      },
    },
    (name, newVal) => setState(newVal),
  );
  return <OptionsEditor name="prop" selector={selector} />;
};

export const objects = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: { One: 'one', Two: 'two', Three: 'three' },
      },
    },
    (name, newVal) => setState(newVal),
  );
  return <OptionsEditor name="prop" selector={selector} />;
};

export const numeric = () => {
  const [state, setState] = React.useState(1);
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: [
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
          { value: 3, label: 'Three' },
        ],
      },
    },
    (name, newVal) => setState(newVal),
  );
  return <OptionsEditor name="prop" selector={selector} />;
};

export const multiSelectSimple = () => {
  const [state, setState] = React.useState(['one']);
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: ['one', 'two', 'three'],
        display: 'multi-select',
      },
    },
    (name, newVal) => setState(newVal),
  );
  return <OptionsEditor name="prop" selector={selector} />;
};

export const multiSelectObjects = () => {
  const [state, setState] = React.useState(['one']);
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: { One: 'one', Two: 'two', Three: 'three' },
        display: 'multi-select',
      },
    },
    (name, newVal) => setState(newVal),
  );
  return <OptionsEditor name="prop" selector={selector} />;
};

export const multiSelectNumeric = () => {
  const [state, setState] = React.useState([1]);
  const selector = useControlSelector(
    {
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
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const simpleRadios = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: ['one', 'two', 'three'],
        display: 'radio',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const objectsRadios = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: { One: 'one', Two: 'two', Three: 'three' },
        display: 'radio',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const numericRadios = () => {
  const [state, setState] = React.useState(1);
  const selector = useControlSelector(
    {
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
    },
    (name, newVal) => setState(newVal),
  );
  return <OptionsEditor name="prop" selector={selector} />;
};

export const simpleRadiosInline = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: ['one', 'two', 'three'],
        display: 'inline-radio',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const objectsRadiosInline = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: { One: 'one', Two: 'two', Three: 'three' },
        display: 'inline-radio',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const numericRadiosInline = () => {
  const [state, setState] = React.useState(1);
  const selector = useControlSelector(
    {
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
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const simpleCheck = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: ['one', 'two', 'three'],
        display: 'check',
      },
    },
    (name, newVal) => setState(newVal),
  );
  return <OptionsEditor name="prop" selector={selector} />;
};

export const objectsCheck = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: { One: 'one', Two: 'two', Three: 'three' },
        display: 'check',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const numericCheck = () => {
  const [state, setState] = React.useState(1);
  const selector = useControlSelector(
    {
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
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const simpleCheckInline = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: ['one', 'two', 'three'],
        display: 'inline-check',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const objectsCheckInline = () => {
  const [state, setState] = React.useState('one');
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.OPTIONS,
        value: state,
        options: { One: 'one', Two: 'two', Three: 'three' },
        display: 'inline-check',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};

export const numericCheckInline = () => {
  const [state, setState] = React.useState(1);
  const selector = useControlSelector(
    {
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
    },
    (name, newVal) => setState(newVal),
  );

  return <OptionsEditor name="prop" selector={selector} />;
};
