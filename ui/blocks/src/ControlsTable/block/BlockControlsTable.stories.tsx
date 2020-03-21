import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import {
  LoadedComponentControls,
  mergeControlValues,
} from '@component-controls/core';
import { MockContext } from '../../test/MockContext';
import { BlockControlsTable } from './BlockControlsTable';

export default {
  title: 'Blocks/Core/ControlsTable/block',
  component: BlockControlsTable,
};

export const overview = () => {
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
  });

  return (
    <MockContext controls={controls}>
      <h2>{`Hello, my name is ${controls.name.value}, and I am ${controls.age.value} years old.`}</h2>
      <BlockControlsTable
        title="Example controls"
        id="story"
        setControlValue={(storyId, name, value) =>
          setControls(mergeControlValues(controls, name, value))
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
    </MockContext>
  );
};
