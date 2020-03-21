/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import Switch, { ReactSwitchProps } from 'react-switch';
import { Label, Text } from 'theme-ui';

export interface ToggleOwnProps {
  /**
   * optional label to be displayed alongside the toggle
   */
  label?: string;
}

export type ToggleProps = Omit<ReactSwitchProps, keyof ToggleOwnProps> &
  ToggleOwnProps;

/**
 * Toggle components can be used to edit boolean values. Uses [react-switch](https://github.com/markusenglund/react-switch) component.
 *
 */
export const Toggle: FC<ToggleProps> = ({
  checked = false,
  onChange,
  label,
  id,
  ...rest
}) => {
  const toggle = (
    <Switch id={id} checked={checked} onChange={onChange} {...rest} />
  );

  if (label) {
    return (
      <Label htmlFor={id}>
        <Text sx={{ mx: 2 }}>{label}</Text>
        {toggle}
      </Label>
    );
  }
  return toggle;
};

Toggle.displayName = 'Toggle';
