import React from 'react';

import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

export const overview = () => {
  const [checked, setChecked] = React.useState(false);
  return <Toggle checked={checked} onChange={check => setChecked(check)} />;
};

export const label = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Toggle
      label="with label"
      checked={checked}
      id="custom-toggle"
      onChange={check => setChecked(check)}
    />
  );
};

export const customIcons = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Toggle
      uncheckedIcon={
        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="red">
          <circle r={3} cx={5} cy={5} />
        </svg>
      }
      checkedIcon={
        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
          <circle r={3} cx={5} cy={5} />
        </svg>
      }
      checked={checked}
      onChange={check => setChecked(check)}
    />
  );
};
