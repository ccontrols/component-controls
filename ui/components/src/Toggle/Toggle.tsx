/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC, forwardRef, Ref } from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';
import { Label, Text } from 'theme-ui';

export type ToggleRef = Ref<ReactSwitch>;
export interface ToggleOwnProps {
  /**
   * optional label to be displayed alongside the toggle
   */
  label?: string;

  /**
   * obtain a ref target
   */
  ref?: ToggleRef;
}

export type ToggleProps = Omit<ReactSwitchProps, keyof ToggleOwnProps> &
  ToggleOwnProps;

/**
 * Toggle components can be used to edit boolean values. Uses [react-switch](https://github.com/markusenglund/react-switch) component.
 *
 */
export const Toggle: FC<ToggleProps> = forwardRef(function Toggle(
  { checked = false, onChange, label, id, ...rest },
  ref: ToggleRef,
) {
  const toggle = (
    <ReactSwitch
      aria-checked={checked}
      ref={ref}
      id={id}
      checked={checked}
      onChange={onChange}
      aria-label={`click to ${checked ? 'un-' : ''}select`}
      {...rest}
    />
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
});

Toggle.displayName = 'Toggle';
