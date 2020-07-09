import React from 'react';
import { ControlTypes } from '../controls';
import { OptionsControl } from './components/OptionsControl';

export default {
  title: 'Controls/Options',
  component: OptionsControl,
};

export const overview = ({ value }) => (
  <div>{JSON.stringify({ value }, null, 2)}</div>
);

overview.story = {
  description: 'Story with options of different data types',
  controls: {
    value: {
      type: ControlTypes.OPTIONS,
      label: 'Select',
      value: 1,
      options: [1, 2, 3, undefined, null],
      display: 'select',
    },
  },
};

export const radioEnum = ({ radio }) => radio;

radioEnum.story = {
  description: '`ControlTypes.OPTIONS` display: `radio`.',
  controls: {
    radio: {
      type: ControlTypes.OPTIONS,
      label: 'Radio',
      value: 'Monday',
      display: 'radio',
      options: {
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
      },
    },
  },
};

export const complexSelect = ({ m }) => {
  const value = m.toString();
  const type = Array.isArray(m) ? 'array' : typeof m;
  return (
    <pre>
      the type of {JSON.stringify(value, null, 2)} = {type}
    </pre>
  );
};

complexSelect.story = {
  description:
    '`ControlTypes.OPTIONS` control type where the options can have different data-types.',
  controls: {
    m: {
      type: ControlTypes.OPTIONS,
      label: 'complex',
      options: {
        number: 1,
        string: 'string',
        object: {},
        array: [1, 2, 3],
        function: () => {},
      },
      value: 'string',
    },
  },
};

export const combinedOptions = ({
  optionRadio,
  optionInlineRadio,
  optionSelect,
  optionsMultiSelect,
  optionsCheck,
  optionsInlineCheck,
}) => {
  return (
    <div>
      <p>Weekday: {optionRadio}</p>
      <p>Weekend: {optionInlineRadio}</p>
      <p>Month: {optionSelect}</p>
      <p>Fruit:</p>
      <ul>
        {optionsMultiSelect.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Vegetables:</p>
      <ul>
        {optionsCheck.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Dairy:</p>
      <ul>
        {optionsInlineCheck.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

combinedOptions.story = {
  description:
    'Showcase `ControlTypes.OPTIONS` controls of types `radio`, `inline-radio`, `select`, `multi-select`, `check` and `inline-check`.',
  controls: {
    optionRadio: {
      type: ControlTypes.OPTIONS,
      label: 'Radio',
      options: {
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
      },
      value: 'Tuesday',
      display: 'radio',
    },
    optionInlineRadio: {
      type: ControlTypes.OPTIONS,
      label: 'Inline Radio',
      options: {
        Saturday: 'Saturday',
        Sunday: 'Sunday',
      },
      value: 'Saturday',
      display: 'inline-radio',
    },
    optionSelect: {
      type: ControlTypes.OPTIONS,
      label: 'Select',
      options: {
        January: 'January',
        February: 'February',
        March: 'March',
      },
      value: 'January',
      display: 'select',
    },
    optionsMultiSelect: {
      type: ControlTypes.OPTIONS,
      label: 'Multi Select',
      options: {
        Apple: 'apple',
        Banana: 'banana',
        Cherry: 'cherry',
      },
      value: ['apple'],
      display: 'multi-select',
    },
    optionsCheck: {
      type: ControlTypes.OPTIONS,
      label: 'Check',
      options: {
        Corn: 'corn',
        Carrot: 'carrot',
        Cucumber: 'cucumber',
      },
      value: ['carrot'],
      display: 'check',
    },
    optionsInlineCheck: {
      type: ControlTypes.OPTIONS,
      label: 'Inline Check',
      options: {
        Milk: 'milk',
        Cheese: 'cheese',
        Butter: 'butter',
      },
      value: ['milk'],
      display: 'inline-check',
    },
  },
};
