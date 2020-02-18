import React, { FC } from 'react';
import { Box, BoxProps, Checkbox, Label, Text } from 'theme-ui';

export interface ToggleOwnProps {
  /** whether checked */
  checked?: boolean;
  /** onChange event - when one of the toggles in clicked */
  onChange?: (checked: boolean) => void;

  /** custom labels - by defaut 'True' and 'False' */
  labels?: {
    true: React.ReactNode;
    false: React.ReactNode;
  };
}

export type ToggleProps = Omit<BoxProps, keyof ToggleOwnProps> & ToggleOwnProps;

export const Toggle: FC<ToggleProps> = ({
  checked = false,
  onChange,
  labels = {
    true: 'True',
    false: 'False',
  },
  ...rest
}) => (
  <Box {...rest}>
    <Label
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text
        sx={{
          paddingRight: 1,
        }}
      >
        {checked ? labels.true : labels.false}
      </Text>
      <Checkbox
        checked={checked}
        onClick={() => onChange && onChange(!checked)}
      />
    </Label>
  </Box>
);

Toggle.displayName = 'Toggle';
