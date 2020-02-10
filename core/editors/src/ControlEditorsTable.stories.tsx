import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import {
  LoadedComponentControls,
  mergeControlValues,
} from '@component-controls/core';

import { ControlsEditorsTable } from './ControlEditorsTable';

export default {
  title: 'Component Controls/ControlsEditorsTable',
  component: ControlsEditorsTable,
};

export const simple = () => {
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
          name &&
          setControls({
            ...controls,
            [name]: { ...controls[name], value },
          })
        }
        clickControl={() =>
          setControls(
            mergeControlValues(
              controls,
              'age',
              typeof controls.age.value === 'string'
                ? parseInt(controls.age.value, 10) + 1
                : 19,
            ),
          )
        }
      />
    </>
  );
};
