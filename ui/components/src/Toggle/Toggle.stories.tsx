import React from 'react';
import { Flex, Checkbox, Label } from 'theme-ui';
import Octicon, { Eye, EyeClosed } from '@primer/octicons-react';
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

export const octicons = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Toggle
      onHandleColor="#ffffff"
      offHandleColor="#ffffff"
      uncheckedIcon={
        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Flex
            css={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              paddingLeft: '3px',
              color: '#b3b3b3',
            }}
          >
            <Octicon icon={EyeClosed} />
          </Flex>
        </Flex>
      }
      checkedIcon={
        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Flex
            css={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              color: '#13a063',
            }}
          >
            <Octicon icon={Eye} />
          </Flex>
        </Flex>
      }
      checked={checked}
      onChange={check => setChecked(check)}
      handleDiameter={14}
      height={20}
      width={40}
      onColor="#d3d3d3"
      offColor="#d3d3d3"
    />
  );
};

export const checkbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Label>
      <Checkbox onChange={() => setChecked(!checked)} checked={checked} />
      theme-ui checkbox
    </Label>
  );
};
