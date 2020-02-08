import React from 'react';
import {
  ControlTypes,
  LoadedComponentControls,
} from '@component-controls/specification';
import { ControlsEditorsTable } from './ControlEditorsTable';

export default {
  title: 'Docs/PropEditors/ControlsEditorsTable',
  component: ControlsEditorsTable,
};

export const pureControlsEditorsTable = () => {
  const [controls, setControls] = React.useState<LoadedComponentControls>({
    name: {
      type: ControlTypes.TEXT,
      label: 'Name',
      value: 'Mark',
      defaultValue: 'Mark',
    },
    age: {
      type: ControlTypes.NUMBER,
      label: 'Age',
      value: 19,
      defaultValue: 19,
    },
    clickMe: {
      type: ControlTypes.BUTTON,
      label: '+1',
      onClick: () => {},
    },
  });

  return (
    <>
      <h2>{`Hello, my name is ${controls.name.value}, and I am ${controls.age.value} years old.`}</h2>
      <ControlsEditorsTable
        controls={controls as LoadedComponentControls}
        title="Example controls"
        storyId="1-11"
        setControlValue={(storyId, name, value) =>
          setControls({
            ...controls,
            [name]: { ...controls[name], value },
          })
        }
        clickControl={() =>
          setControls({
            ...controls,
            age: {
              ...controls.age,
              value: parseInt(controls.age.value, 10) + 1,
            },
          })
        }
      />
    </>
  );
};
