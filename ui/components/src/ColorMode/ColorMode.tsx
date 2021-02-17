/** @jsx jsx */
import { jsx, useColorMode, Box } from 'theme-ui';
import { SunIcon, MoonIcon } from '@primer/octicons-react';

import { FC } from 'react';
import { Toggle, ToggleProps } from '../Toggle';

/**
 * Theme-ui dark/light mode toggle.
 */
export const ColorMode: FC<Omit<
  ToggleProps,
  'checked' | 'onChange'
>> = props => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (checked: boolean) => {
    setColorMode(checked ? `dark` : `light`);
  };

  return (
    <Box variant="colormode.container">
      <Toggle
        aria-label="Toggle dark mode"
        uncheckedIcon={
          <Box variant="colormode.outericon">
            <Box variant="colormode.innericon">
              <SunIcon />
            </Box>
          </Box>
        }
        checkedIcon={
          <Box variant="colormode.outericon">
            <Box variant="colormode.innericon">
              <MoonIcon />
            </Box>
          </Box>
        }
        checked={isDark}
        onChange={toggleColorMode}
        onColor="#333"
        offColor="#ddd"
        {...props}
      />
    </Box>
  );
};
