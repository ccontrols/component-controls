import React from 'react';
import { Icons } from '@storybook/components';
import { Toggle } from './Toggle';

export default {
  title: 'Basics/Toggle',
};

export const allToggles = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <p>Default toggle</p>
      <Toggle checked={checked} onChange={check => setChecked(check)} />
      <br />
      <p>Toggle on a Form</p>
      <br />
      <p>Custom labels</p>
      <Toggle
        checked={checked}
        labels={{
          true: 'YES',
          false: 'NO!',
        }}
        onChange={check => setChecked(check)}
      />
      <br />
      <p>Custom icon labels</p>
      <Toggle
        checked={checked}
        labels={{
          true: <Icons icon="check" />,
          false: <Icons icon="delete" />,
        }}
        onChange={check => setChecked(check)}
      />
      <br />
    </div>
  );
};
