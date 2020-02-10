import React from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
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
    </div>
  );
};
